const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 8080);
const MAX_BODY_BYTES = 64 * 1024;
const MEDICAL_SAFETY_RULES = [
  '这是医学科普对话，不构成诊断或个体化治疗。',
  '不得仅凭面色、舌象或单一症状下诊断，不得鼓励用户自行服药、针灸或停药。',
  '中医内容须明确为传统理论或辨证思路，并与现代医学证据边界区分。',
  '涉及持续、严重或危险症状时，应建议及时就医；出现急性大出血、意识障碍、呼吸困难、自伤或伤人念头时，应建议立即寻求急救。',
  '回答应尊重用户，不制造性别刻板印象，不夸大疗效。',
].join('\n');

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const separator = line.indexOf('=');
    if (separator < 1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnv(path.join(ROOT, '.env'));

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('请求内容过长'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch {
        reject(new Error('请求格式无效'));
      }
    });
    req.on('error', reject);
  });
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length < 2 || messages.length > 20) return false;
  let totalLength = 0;
  for (const message of messages) {
    if (!message || !['system', 'user', 'assistant'].includes(message.role)) return false;
    if (typeof message.content !== 'string' || !message.content.trim()) return false;
    totalLength += message.content.length;
  }
  return totalLength <= 20000;
}

async function handleDeepSeek(req, res) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    sendJson(res, 503, { error: '尚未配置 DeepSeek API Key。' });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    sendJson(res, 400, { error: error.message });
    return;
  }

  if (!validateMessages(body.messages)) {
    sendJson(res, 400, { error: '对话内容无效或过长。' });
    return;
  }

  try {
    const upstream = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
        messages: body.messages.map((message, index) => (
          index === 0 && message.role === 'system'
            ? { ...message, content: `${MEDICAL_SAFETY_RULES}\n\n${message.content}` }
            : message
        )),
        temperature: 0.7,
        max_tokens: 500,
        stream: false,
      }),
      signal: AbortSignal.timeout(45000),
    });

    if (!upstream.ok) {
      sendJson(res, 502, { error: `DeepSeek 服务返回 ${upstream.status}。` });
      return;
    }

    const data = await upstream.json();
    const content = data.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
      sendJson(res, 502, { error: 'DeepSeek 未返回有效内容。' });
      return;
    }
    sendJson(res, 200, { content });
  } catch {
    sendJson(res, 502, { error: '暂时无法连接 DeepSeek 服务。' });
  }
}

function serveStatic(req, res, pathname) {
  let relativePath = pathname === '/' ? 'index.html' : decodeURIComponent(pathname).replace(/^\/+/, '');
  if (relativePath.split(/[\\/]/).some(part => part.startsWith('.'))) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }

  const absolutePath = path.resolve(ROOT, relativePath);
  if (absolutePath !== ROOT && !absolutePath.startsWith(`${ROOT}${path.sep}`)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(absolutePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': MIME_TYPES[path.extname(absolutePath).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stats.size,
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'same-origin',
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    fs.createReadStream(absolutePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/deepseek') {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method Not Allowed' });
      return;
    }
    await handleDeepSeek(req, res);
    return;
  }

  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405);
    res.end('Method Not Allowed');
    return;
  }
  serveStatic(req, res, url.pathname);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`游戏已启动：http://127.0.0.1:${PORT}`);
});
