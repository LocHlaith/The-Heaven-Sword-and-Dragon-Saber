/* ============================================================
   《倚天屠龙记》· 胡笳十八拍 —— Game Engine
   浙江大学《中西医学与美学》期末大作业
   ============================================================ */

const GAME = {
  state: {
    screen: 'title',
    character: null,
    levelIndex: 0,
    dialogueIndex: 0,
    branch: [],         // track answers for branching
    questionAnswered: false,
    totalCorrect: 0,
    currentQuestion: null,
  },

  // DOM cache
  dom: {},

  // Initialize
  init() {
    this.cacheDom();
    this.bindEvents();
    this.showScreen('title');
    console.log('《倚天屠龙记》· 胡笳十八拍 —— 游戏就绪');
  },

  cacheDom() {
    const ids = [
      'title-screen', 'char-select-screen', 'level-screen', 'ending-screen',
      'question-panel', 'ref-panel',
      'dialogue-box', 'dialogue-speaker', 'dialogue-text',
      'scene-image', 'scene-image-frame', 'frame-indicator',
      'level-indicator', 'progress-dots',
      'question-card', 'option-list',
      'chat-container', 'chat-input',
      'answer-result', 'explanation-text', 'ref-toggle', 'ref-content',
      'ending-title', 'ending-poem', 'ending-message',
    ];
    ids.forEach(id => { this.dom[id] = document.getElementById(id); });
    this.dom.screens = {
      title: document.getElementById('title-screen'),
      charSelect: document.getElementById('char-select-screen'),
      level: document.getElementById('level-screen'),
      ending: document.getElementById('ending-screen'),
    };
    this.dom.questionPanel = document.getElementById('question-panel');
  },

  bindEvents() {
    // Title screen
    document.getElementById('btn-start')?.addEventListener('click', () => this.goToCharSelect());

    // Character cards (dynamically bound after render)
    document.getElementById('char-grid')?.addEventListener('click', (e) => {
      const card = e.target.closest('.char-card');
      if (card && card.dataset.charId) {
        this.selectCharacter(card.dataset.charId);
      }
    });

    // Dialogue advance
    document.getElementById('btn-dialogue-next')?.addEventListener('click', () => this.advanceDialogue());

    // Reference panel
    document.getElementById('btn-ref-toggle')?.addEventListener('click', () => this.toggleRefPanel());
    document.getElementById('btn-ref-close')?.addEventListener('click', () => this.toggleRefPanel(false));

    // Question interaction
    document.getElementById('btn-submit-mc')?.addEventListener('click', () => this.submitMC());
    document.getElementById('btn-send-chat')?.addEventListener('click', () => this.sendChat());
    document.getElementById('btn-skip-sa')?.addEventListener('click', () => this.skipShortAnswer());
    document.getElementById('btn-continue')?.addEventListener('click', () => this.continueAfterQuestion());

    // Restart
    document.getElementById('btn-restart')?.addEventListener('click', () => this.restart());
    document.getElementById('btn-restart-ending')?.addEventListener('click', () => this.restart());

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const activeScreen = this.getActiveScreen();
        if (activeScreen === 'level' && !this.dom.questionPanel.classList.contains('hidden')) {
          // In question mode - handle accordingly
        } else if (activeScreen === 'level') {
          this.advanceDialogue();
        }
      }
      if (e.key === 'Escape') {
        if (this.dom.questionPanel.classList.contains('hidden') === false) {
          const sa = this.state.currentQuestion?.type === 'short_answer';
          if (!sa) return; // don't skip MC
        }
      }
    });
  },

  // --- Screen Management ---
  showScreen(name) {
    Object.values(this.dom.screens).forEach(s => s?.classList.remove('active'));
    const el = this.dom.screens[name];
    if (el) {
      el.classList.add('active');
      this.state.screen = name;
    }
    const refToggle = document.getElementById('btn-ref-toggle');
    if (refToggle) refToggle.style.display = name === 'level' ? 'block' : 'none';
    if (name !== 'level') this.toggleRefPanel(false);
  },

  getActiveScreen() {
    return this.state.screen;
  },

  // --- Character Selection ---
  goToCharSelect() {
    this.renderCharCards();
    this.showScreen('charSelect');
  },

  renderCharCards() {
    const grid = document.getElementById('char-grid');
    if (!grid) return;
    grid.innerHTML = GAME_DATA.characters.map(c => `
      <div class="char-card animate-in" data-char-id="${c.id}" style="animation-delay:${GAME_DATA.characters.indexOf(c)*0.15}s">
        <div class="char-portrait">
          <img class="char-portrait-img" src="images/characters/${c.id}/portrait_01.png" alt="${c.name}画像"
            onerror="this.parentElement.classList.add('portrait-fallback'); this.remove();">
          <span class="char-emoji">${c.emoji}</span>
        </div>
        <div class="char-name">${c.name}</div>
        <div class="char-epithet">${c.epithet}</div>
        <div class="char-desc">${c.desc}</div>
      </div>
    `).join('');
  },

  selectCharacter(charId) {
    const charData = GAME_DATA.characters.find(c => c.id === charId);
    if (!charData) return;
    this.state.character = charData;
    this.state.levelIndex = 0;
    this.state.dialogueIndex = 0;
    this.state.branch = [];
    this.state.totalCorrect = 0;
    this.state.questionAnswered = false;
    this.startLevel();
  },

  // --- Level Management ---
  startLevel() {
    const level = this.getCurrentLevel();
    if (!level) {
      this.showEnding();
      return;
    }
    this.state.dialogueIndex = 0;
    this.state.questionAnswered = false;
    this.state.currentQuestion = null;

    // Update UI
    this.updateProgressDots();
    this.updateLevelIndicator();
    this.updateSceneImage(0);
    this.showScreen('level');

    // Render dialogue
    this.renderDialogue();
  },

  getCurrentLevel() {
    if (!this.state.character) return null;
    const route = GAME_DATA.routes[this.state.character.id];
    if (!route || this.state.levelIndex >= route.levels.length) return null;
    return route.levels[this.state.levelIndex];
  },

  updateLevelIndicator() {
    const el = this.dom['level-indicator'];
    if (el) {
      const level = this.getCurrentLevel();
      el.textContent = level ? `${level.paiName} · ${level.title}` : '';
    }
  },

  updateProgressDots() {
    const el = this.dom['progress-dots'];
    if (!el || !this.state.character) return;
    const route = GAME_DATA.routes[this.state.character.id];
    const total = route.levels.length;
    let html = '';
    for (let i = 0; i < total; i++) {
      let cls = '';
      if (i < this.state.levelIndex) cls = 'completed';
      else if (i === this.state.levelIndex) cls = 'current';
      html += `<span class="progress-dot ${cls}"></span>`;
    }
    el.innerHTML = html;
  },

  getSceneImageSrc(image) {
    if (image?.src) return image.src;
    const charId = this.state.character?.id;
    if (!charId) return '';
    const levelNo = String(this.state.levelIndex + 1).padStart(2, '0');
    const frameNo = String((image?.frameIdx ?? 0) + 1).padStart(2, '0');
    return `images/levels/${charId}/level_${levelNo}/frame_${frameNo}.png`;
  },

  updateSceneImage(frameIdx) {
    const level = this.getCurrentLevel();
    const imgEl = this.dom['scene-image'];
    const placeholder = document.getElementById('scene-image-placeholder');
    const frameEl = this.dom['frame-indicator'];

    if (!level || !level.images || level.images.length === 0) {
      if (imgEl) imgEl.style.display = 'none';
      if (placeholder) placeholder.style.display = 'flex';
      if (frameEl) frameEl.textContent = '';
      return;
    }

    const img = level.images[frameIdx % level.images.length];
    const showPlaceholder = () => {
      if (imgEl) imgEl.style.display = 'none';
      if (placeholder) {
        placeholder.style.display = 'flex';
        const promptEl = placeholder.querySelector('.prompt-hint');
        if (promptEl && img.prompt) {
          promptEl.textContent = img.prompt.substring(0, 120) + '...';
        }
      }
    };

    const src = this.getSceneImageSrc(img);
    if (src && imgEl) {
      imgEl.onload = () => {
        imgEl.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
      };
      imgEl.onerror = showPlaceholder;
      imgEl.alt = `${this.state.character?.name || ''}${level.title}第${frameIdx + 1}帧`;
      imgEl.src = src;
      imgEl.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    } else {
      showPlaceholder();
    }
    if (frameEl && level.images.length > 1) {
      frameEl.textContent = `${frameIdx + 1}/${level.images.length}`;
    }
  },

  // --- Dialogue System ---
  renderDialogue() {
    const level = this.getCurrentLevel();
    if (!level) return;

    const dialogue = level.dialogues[this.state.dialogueIndex];
    const speakerEl = this.dom['dialogue-speaker'];
    const textEl = this.dom['dialogue-text'];
    const boxEl = this.dom['dialogue-box'];
    const btnEl = document.getElementById('btn-dialogue-next');

    if (!dialogue) {
      // No more dialogue - check if question should appear
      this.maybeTriggerQuestion();
      return;
    }

    if (speakerEl) speakerEl.textContent = dialogue.speaker || '';
    if (textEl) {
      textEl.textContent = dialogue.text;
      textEl.style.animation = 'none';
      textEl.offsetHeight; // trigger reflow
      textEl.style.animation = 'fadeInUp 0.4s ease forwards';
    }
    if (boxEl) boxEl.scrollTop = 0;
    if (btnEl) btnEl.style.display = 'inline-block';

    // Update scene image if dialogue specifies frame
    if (dialogue.frameIdx !== undefined) {
      this.updateSceneImage(dialogue.frameIdx);
    }
  },

  advanceDialogue() {
    const level = this.getCurrentLevel();
    if (!level) return;

    this.state.dialogueIndex++;

    if (this.state.dialogueIndex >= level.dialogues.length) {
      // Dialogue finished - check for question
      document.getElementById('btn-dialogue-next').style.display = 'none';
      this.maybeTriggerQuestion();
    } else {
      this.renderDialogue();
    }
  },

  maybeTriggerQuestion() {
    const level = this.getCurrentLevel();
    if (!level) return;

    if (level.question && !this.state.questionAnswered) {
      // Small delay for dramatic effect
      setTimeout(() => this.showQuestion(level.question), 600);
    } else if (this.state.questionAnswered) {
      // Already answered, advance to next level
      setTimeout(() => this.goToNextLevel(), 600);
    }
  },

  goToNextLevel() {
    this.state.levelIndex++;
    if (this.state.levelIndex >= GAME_DATA.routes[this.state.character.id].levels.length) {
      this.showEnding();
    } else {
      this.startLevel();
    }
  },

  // --- Question System ---
  showQuestion(question) {
    this.state.currentQuestion = question;
    this.dom.questionPanel.classList.remove('hidden');

    const card = this.dom['question-card'];
    if (!card) return;

    const typeBadge = question.type === 'multiple_choice'
      ? '<span class="question-type-badge badge-mc">选择题 · 不可跳过</span>'
      : '<span class="question-type-badge badge-sa">简答题 · 可跳过</span>';

    let bodyHtml = `<div class="question-text">${question.text}</div>`;

    if (question.type === 'multiple_choice') {
      bodyHtml += this.renderMC(question);
    } else if (question.type === 'short_answer') {
      bodyHtml += this.renderSA(question);
    }

    // Answer result area (hidden initially)
    bodyHtml += `
      <div id="answer-result" class="answer-result" style="display:none;">
        <div id="explanation-text" class="explanation"></div>
        <span id="ref-toggle" class="ref-toggle" onclick="GAME.toggleAnswerRef()">📚 展开参考文献</span>
        <div id="ref-content" class="ref-content"></div>
        <div style="text-align:center;margin-top:1em;">
          <button id="btn-continue" class="btn btn-gold">继续前行 →</button>
        </div>
      </div>
    `;

    card.innerHTML = typeBadge + bodyHtml;
    card.classList.add('animate-in');

    // Re-bind controls generated inside the question card.
    setTimeout(() => {
      document.getElementById('btn-submit-mc')?.addEventListener('click', () => this.submitMC());
      document.getElementById('btn-send-chat')?.addEventListener('click', () => this.sendChat());
      document.getElementById('btn-skip-sa')?.addEventListener('click', () => this.skipShortAnswer());
      document.getElementById('btn-continue')?.addEventListener('click', () => this.continueAfterQuestion());
      document.getElementById('ref-toggle')?.addEventListener('click', () => this.toggleAnswerRef());
    }, 100);
  },

  renderMC(question) {
    const markers = ['甲', '乙', '丙', '丁', '戊', '己'];
    let html = '<ul class="option-list">';
    question.options.forEach((opt, i) => {
      html += `
        <li class="option-item" data-index="${i}" onclick="GAME.selectOption(${i})">
          <span class="option-marker">${markers[i] || String.fromCharCode(65+i)}.</span>${opt}
        </li>
      `;
    });
    html += '</ul>';
    html += '<div style="text-align:center;margin-top:1em;"><button id="btn-submit-mc" class="btn btn-gold" disabled>确认答案</button></div>';
    return html;
  },

  renderSA(question) {
    return `
      <div class="chat-container" id="chat-container">
        <div class="chat-msg ai">${question.chatOpening || '请畅所欲言，贫道愿闻其详。'}</div>
      </div>
      <div class="chat-input-row">
        <input type="text" class="chat-input" id="chat-input" placeholder="写下你的回答……" onkeydown="if(event.key==='Enter')GAME.sendChat()">
        <button id="btn-send-chat" class="btn btn-gold">发送</button>
      </div>
      <div style="text-align:center;margin-top:0.8em;">
        <button id="btn-skip-sa" class="btn btn-skip">跳过此题 ▸</button>
      </div>
      <div class="chat-skip-hint">简答题可随时跳过，即使对话中途</div>
    `;
  },

  selectOption(index) {
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    const el = document.querySelector(`.option-item[data-index="${index}"]`);
    if (el) el.classList.add('selected');
    const btn = document.getElementById('btn-submit-mc');
    if (btn) btn.disabled = false;
    this.state.selectedOption = index;
  },

  submitMC() {
    if (this.state.selectedOption === undefined) return;

    const question = this.state.currentQuestion;
    if (!question) return;

    const correct = question.correctIndex;
    const userIdx = this.state.selectedOption;

    // Show correct/wrong
    document.querySelectorAll('.option-item').forEach((el, i) => {
      if (i === correct) el.classList.add('correct');
      if (i === userIdx && i !== correct) el.classList.add('wrong');
      el.style.pointerEvents = 'none';
    });

    const btn = document.getElementById('btn-submit-mc');
    if (btn) btn.style.display = 'none';

    if (userIdx === correct) {
      this.state.totalCorrect++;
      this.state.branch.push({ level: this.state.levelIndex, correct: true });
    } else {
      this.state.branch.push({ level: this.state.levelIndex, correct: false });
    }

    this.showAnswerResult(question, userIdx === correct);
  },

  showAnswerResult(question, isCorrect) {
    const resultDiv = document.getElementById('answer-result');
    const explainEl = document.getElementById('explanation-text');
    const refToggle = document.getElementById('ref-toggle');
    const refContent = document.getElementById('ref-content');

    if (!resultDiv) return;

    resultDiv.style.display = 'block';
    resultDiv.classList.add('animate-in');

    if (explainEl) {
      let text = isCorrect
        ? '✅ <strong>回答正确！</strong>'
        : `❌ <strong>回答错误。</strong>正确答案是<strong>${question.options ? question.options[question.correctIndex] : ''}</strong>。`;
      text += `<br><br>${question.explanation || ''}`;
      explainEl.innerHTML = text;
    }

    if (refContent && question.references && question.references.length > 0) {
      refToggle.style.display = 'inline-block';
      refContent.innerHTML = '<ol>' + question.references.map(r =>
        `<li>${r}</li>`
      ).join('') + '</ol>';
      refContent.classList.remove('open');
    } else if (refToggle) {
      refToggle.style.display = 'none';
    }

    document.getElementById('btn-continue')?.addEventListener('click', () => this.continueAfterQuestion());

    this.state.questionAnswered = true;
  },

  toggleAnswerRef() {
    const content = document.getElementById('ref-content');
    if (content) content.classList.toggle('open');
  },

  continueAfterQuestion() {
    this.dom.questionPanel.classList.add('hidden');
    this.state.currentQuestion = null;
    this.state.selectedOption = undefined;
    this.state.questionAnswered = true;
    // Advance to next level
    this.goToNextLevel();
  },

  // --- Short Answer / DeepSeek Chat ---
  async sendChat() {
    const input = document.getElementById('chat-input');
    if (!input || !input.value.trim()) return;

    const userMsg = input.value.trim();
    input.value = '';

    this.appendChatMsg('user', userMsg);

    const container = document.getElementById('chat-container');
    const loadingMsg = this.appendChatMsg('ai', '<span class="spinner"></span> 思考中……');

    try {
      const response = await this.callDeepSeek(userMsg);
      if (loadingMsg) loadingMsg.remove();
      this.appendChatMsg('ai', response);
    } catch (err) {
      if (loadingMsg) loadingMsg.remove();
      this.appendChatMsg('ai', '（与医仙的联络暂时中断，请稍后再试，或跳过此题继续前行。）');
    }
  },

  appendChatMsg(role, text) {
    const container = document.getElementById('chat-container');
    if (!container) return null;
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  },

  async callDeepSeek(userMessage) {
    const question = this.state.currentQuestion;
    const systemPrompt = question?.deepseekPrompt || '你是一位精通中医与西医的医者，请用半文半白的语言风格，回答关于女性健康的问题。';

    const apiKey = DEEPSEEK_CONFIG.apiKey;
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
      // Simulated response for development
      return this.simulateResponse(userMessage);
    }

    const response = await fetch(DEEPSEEK_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: DEEPSEEK_CONFIG.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '（医仙沉吟片刻，未发一言。）';
  },

  simulateResponse(userMessage) {
    // Simple simulation for when API key is not configured
    const responses = [
      '所言甚是。汝之见解，已有几分医道真谛。中医讲究"阴阳平衡"，女子以血为本，以肝为先天。汝可知肝气郁结之症，常见于妇人？',
      '善。贫道观汝之言，当是略通医理。然则汝可知"冲任"二脉？冲为血海，任主胞胎，二脉调和，则月事以时下，故能孕育。',
      '此言得之。然尚有未尽之处——《黄帝内经》云："女子七岁，肾气盛，齿更发长；二七而天癸至，任脉通，太冲脉盛，月事以时下。"此乃女子生理之根本也。',
      '妙哉善问。容贫道细说：妇科之疾，首重"调经"。经者，常也。经水不调，百病丛生。四物汤为妇科圣方，当归、白芍、熟地、川芎，四味合用，补血而不滞血，活血而不伤正。',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },

  skipShortAnswer() {
    // Mark as answered (skipped)
    this.state.questionAnswered = true;
    this.state.branch.push({ level: this.state.levelIndex, skipped: true });
    this.dom.questionPanel.classList.add('hidden');
    this.state.currentQuestion = null;
    this.goToNextLevel();
  },

  // --- Ending ---
  showEnding() {
    const charData = this.state.character;
    if (!charData) return;

    const route = GAME_DATA.routes[charData.id];
    const ending = route.ending;

    this.dom['ending-title'].textContent = ending.title;
    this.dom['ending-poem'].textContent = ending.poem || '';
    this.dom['ending-message'].textContent = ending.message || '';

    // Calculate score
    const totalMC = this.state.branch.filter(b => b.correct !== undefined).length;
    const correctMC = this.state.branch.filter(b => b.correct === true).length;
    const skipped = this.state.branch.filter(b => b.skipped).length;
    document.getElementById('ending-score').textContent =
      `选择题：${correctMC}/${totalMC} 正确 · 简答题：${skipped} 题跳过（不计分）`;

    this.showScreen('ending');
  },

  restart() {
    this.state.character = null;
    this.state.levelIndex = 0;
    this.state.dialogueIndex = 0;
    this.state.branch = [];
    this.state.totalCorrect = 0;
    this.state.questionAnswered = false;
    this.state.currentQuestion = null;
    this.state.selectedOption = undefined;
    this.dom.questionPanel.classList.add('hidden');
    this.showScreen('title');
  },

  // --- Reference Panel ---
  toggleRefPanel(force) {
    const panel = this.dom['ref-panel'];
    if (!panel) return;
    const isOpen = panel.classList.contains('open');
    const shouldOpen = force !== undefined ? force : !isOpen;
    if (shouldOpen) {
      panel.classList.add('open');
      this.updateRefPanel();
    } else {
      panel.classList.remove('open');
    }
  },

  updateRefPanel() {
    const content = document.getElementById('ref-panel-content');
    if (!content) return;
    const level = this.getCurrentLevel();
    if (!level || !level.question) {
      content.innerHTML = '<p style="color:#4f3a2d;">当前关卡暂无参考文献。</p>';
      return;
    }
    const refs = level.question.references || [];
    if (refs.length === 0) {
      content.innerHTML = '<p style="color:#4f3a2d;">当前关卡暂无参考文献。</p>';
    } else {
      content.innerHTML = '<ol>' + refs.map(r => `<li style="margin-bottom:0.5em;">${r}</li>`).join('') + '</ol>';
    }
  },
};

// --- DeepSeek Configuration ---
const DEEPSEEK_CONFIG = {
  apiKey: 'sk-c5697b4a61a748bdb66dbfb198d97dc8',
  apiUrl: 'https://api.deepseek.com/v1/chat/completions',
  model: 'deepseek-chat',
};

// --- Initialize on load ---
window.addEventListener('DOMContentLoaded', () => {
  GAME.init();
});
