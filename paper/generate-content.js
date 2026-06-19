const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const context = { console };
vm.createContext(context);
vm.runInContext(
  `${fs.readFileSync(path.join(projectRoot, 'js', 'game-data.js'), 'utf8')}
globalThis.__GAME_DATA__ = GAME_DATA;`,
  context,
);
vm.runInContext(
  fs.readFileSync(path.join(projectRoot, 'js', 'game-data-part2.js'), 'utf8'),
  context,
);

const game = context.__GAME_DATA__;
const routeNames = {
  zhaomin: '赵敏线：朔漠玫瑰',
  zhouzhiruo: '周芷若线：汉水白莲',
};
const characterNames = {
  zhaomin: '赵敏',
  zhouzhiruo: '周芷若',
};

const portraitNotes = {
  zhaomin: [
    '绿柳初逢。春柳、白貂与含而不露的笑意共同确立人物的机敏；冷白衣色与新绿背景相互映照，形成初见时的清锐感。',
    '黑玉断续。药物与伤体被置于同一视域，修复既是医理线索，也是关系重新建立的隐喻；暗色背景使人物的判断力成为视觉中心。',
    '万安寺火。火光映照出危局中的决断，人物不以柔弱姿态出现；暖红与墨黑的强烈对照强化行动伦理与救援主题。',
    '灵蛇海上。海雾、孤舟与远望构成漂泊感，暗示身份边界的松动；开阔留白使人物从权力中心暂时退入天地尺度。',
    '弥勒佛庙。封闭建筑与斜入天光形成审问式空间，表现智谋背后的风险；构图以明暗分界提示真相并非全然可见。',
    '濠州夺婚。红色礼制空间被人物的侧身动作打破，象征个人选择对既定秩序的冲撞；高饱和朱红集中呈现情感张力。',
    '少室山下。山门与石阶强调制度和传统的重量，人物的稳定站姿则保留自主意志；纵深透视使选择具有路径感。',
    '朔漠风霜。风沙削弱华饰，凸显身体对环境的真实承受；赭石与灰蓝构成冷暖错位，表现坚韧并非没有代价。',
    '冰火之岛。极寒与火山并置，象征生命处境中的冲突和调和；人物位于两种光源之间，成为平衡而非征服自然的主体。',
    '父女恩仇。宫廷秩序与亲缘裂隙同时进入画面，人物表情克制，避免将伦理冲突处理为单一善恶；对称构图有意制造压迫感。',
    '玄冥寒掌。冷色侵入肤色，提示疾病与创伤首先发生于身体；局部暖光保留康复可能，使痛苦不被审美化。',
    '大都宫闱。高墙、帷幕与狭窄天光表现权力空间的规训，人物目光越出画面，暗示精神上的出走。',
    '蝴蝶谷中。草木、药圃与缓和光线将照护置于日常劳动中；绿色层次表现医学知识与自然观察之间的联系。',
    '光明顶上。高山风云扩大人物行动的公共尺度，衣袂与云势同向，形成介入历史的动感；留白避免英雄化过度。',
    '波斯异术。异域纹样与中原服饰并置，表现跨文化知识相遇；色彩差异被组织为互补关系，而非奇观化装饰。',
    '襄阳遗梦。城墙、暮色与远方烽烟构成历史记忆，人物不再处于战斗中心；低饱和色调强调反思多于胜负。',
    '终南问道。山径与云雾指向向内的追问，简化服饰和道具，削弱郡主身份；画面以清淡墨色表现精神减负。',
    '天下归心。广阔天际与安定人间取代宫廷权力，人物神态平和；暖金色被控制在边缘光中，表达愿望而非凯旋。',
  ],
  zhouzhiruo: [
    '汉水初遇。水岸、薄雾与少女形象建立生命早期的脆弱和澄明；低视点使人物与江流处于同一命运尺度。',
    '峨眉入门。山门与规整石阶表现师门秩序，人物居于纵深入口，暗示成长始于接受也始于约束。',
    '光明一剑。剑势切开静态构图，表现命令、情感与身体动作之间的冲突；冷光强调决断所带来的创伤。',
    '万安寺誓。高塔、夜色与微弱灯火构成封闭环境，人物姿态克制；竖向结构强化誓言的重量和不可退避感。',
    '灵蛇毒计。海岛雾气遮蔽空间关系，象征猜疑与误认；人物与危险物之间保留距离，使伦理警觉先于戏剧刺激。',
    '裂裳之痛。破损衣料作为创伤痕迹而非猎奇细节，画面压低色彩与动作幅度，维护人物尊严。',
    '九阴白骨。强烈墨色和骨白形成近乎失衡的视觉张力，表现力量对主体的反噬；边缘留白保存自我回返的可能。',
    '峨眉掌门。正面构图与门派器物呈现制度身份，人物目光略偏离中轴，提示权威与内心并未完全重合。',
    '屠狮之会。群体空间被压缩为围合结构，表现公共审判的压力；人物处于视觉焦点，却不被塑造成单纯胜者。',
    '黄衫女子。明黄与素白的相遇形成镜像关系，象征另一种女性力量介入；双主体构图避免把比较化为高下评判。',
    '问心有愧。空室、灯影与低垂视线将冲突转向内在，画面减少道具，让悔悟成为持续的伦理劳动。',
    '汉水归舟。归舟重返最初的水域意象，江面留白承接记忆与宽恕；人物背影弱化身份标签，突出返身自省。',
    '峨眉金顶。云海与金顶构成超越性背景，人物尺度被有意缩小；宏阔空间不再服务权威，而用于重新理解归属。',
    '药王谷中。药架、草木与书写活动表现知识由秘术转向公共照护；柔和自然光建立可学习、可传承的医学氛围。',
    '襄阳城墙。城垣与远山并置个人创伤和共同历史，人物站姿稳定而不昂扬；沉着色调表达守护而非征服。',
    '终南古墓。幽暗石室与出口微光形成生命转折，人物向光而行；空间叙事把挣脱执念转译为可见路径。',
    '华山论剑。高峰风势和开阔远景保留武侠传统，却让人物收剑而立；不出招的姿态象征力量获得节制。',
    '白莲重生。莲花从含苞、盛放到结蓬呈现完整生命循环，赤足掬水使身体重新接触自然；麻衣、晨光与水纹共同表达朴素的新生。',
  ],
};

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/[“”"]/g, '');
}

function escapeTex(value) {
  return stripHtml(value)
    .replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, character => {
      const index = '①②③④⑤⑥⑦⑧⑨⑩'.indexOf(character) + 1;
      return `（${index}）`;
    })
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([{}%&#_$])/g, '\\$1')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\r?\n/g, '\\par ');
}

function formatReference(value) {
  const text = stripHtml(value).replace(/^\s*\[\d+\]\s*/, '');
  const parts = [];
  const urlPattern = /https?:\/\/[^\s]+|DOI:\s*[^\s]+/g;
  let cursor = 0;
  for (const match of text.matchAll(urlPattern)) {
    parts.push(escapeTex(text.slice(cursor, match.index)));
    let url = match[0];
    let tail = '';
    while (/[.,;，。；)\]]$/.test(url)) {
      tail = url.slice(-1) + tail;
      url = url.slice(0, -1);
    }
    if (/^DOI:/i.test(url)) {
      const doi = url.replace(/^DOI:\s*/i, '');
      parts.push(`DOI：\\nolinkurl{${doi}}${escapeTex(tail)}`);
    } else {
      parts.push(`\\href{${url.replace(/([{}%#])/g, '\\$1')}}{在线链接}${escapeTex(tail)}`);
    }
    cursor = match.index + match[0].length;
  }
  parts.push(escapeTex(text.slice(cursor)));
  return parts.join('');
}

function writeGenerated(filename, content) {
  const target = path.join(__dirname, 'generated', filename);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${content.trim()}\n`, 'utf8');
}

function levelNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function generatePlots() {
  const out = [
    '% 本文件由 paper/generate-content.js 从游戏数据自动生成，请勿手工编辑。',
    '',
  ];

  for (const [routeId, route] of Object.entries(game.routes)) {
    out.push(`\\subsection{${routeNames[routeId]}}`);
    out.push('');

    route.levels.forEach((level, index) => {
      const label = `plot:${routeId}:${index + 1}`;
      const questionLabel = `question:${routeId}:${index + 1}`;
      const no = levelNumber(index);
      out.push(`\\subsubsection{${escapeTex(level.paiName)}·${escapeTex(level.title)}}\\label{${label}}`);
      out.push(`本关以${level.question.type === 'short_answer' ? '多轮简答' : '选择判断'}完成叙事向健康知识的转场，题目见\\hyperref[${questionLabel}]{第\\ref*{${questionLabel}}项}。`);
      out.push('');

      (level.images || []).forEach((image, frameIndex) => {
        const frameNo = String(frameIndex + 1).padStart(2, '0');
        out.push('\\Needspace{0.46\\textheight}');
        out.push('\\begin{figure}[H]');
        out.push('  \\centering');
        out.push(`  \\includegraphics[width=0.92\\linewidth,height=0.46\\textheight,keepaspectratio]{assets/levels/${routeId}/level_${no}/frame_${frameNo}.jpg}`);
        out.push(`  \\caption{${characterNames[routeId]}线${escapeTex(level.paiName)}《${escapeTex(level.title)}》第${frameIndex + 1}帧}`);
        out.push(`  \\label{fig:level:${routeId}:${index + 1}:${frameIndex + 1}}`);
        out.push('\\end{figure}');

        const dialogues = (level.dialogues || []).filter(
          dialogue => Number(dialogue.frameIdx) === Number(image.frameIdx ?? frameIndex),
        );
        if (dialogues.length) {
          out.push('\\begin{quote}\\small');
          dialogues.forEach(dialogue => {
            out.push(`\\textbf{${escapeTex(dialogue.speaker)}：}${escapeTex(dialogue.text)}\\par`);
          });
          out.push('\\end{quote}');
        }
        out.push('');
      });
    });

    const ending = route.ending;
    out.push(`\\subsubsection{路线结局：${escapeTex(ending.title)}}`);
    out.push(`\\textbf{结尾诗}\\begin{quote}${escapeTex(ending.poem)}\\end{quote}`);
    out.push(`\\textbf{结局文本}\\begin{quote}${escapeTex(ending.message)}\\end{quote}`);
    out.push('');
  }

  writeGenerated('plots.tex', out.join('\n'));
}

function generateQuestions(questionType, filename) {
  const out = [
    '% 本文件由 paper/generate-content.js 从游戏数据自动生成，请勿手工编辑。',
    '',
  ];

  for (const [routeId, route] of Object.entries(game.routes)) {
    out.push(`\\subsection{${routeNames[routeId]}}`);
    out.push('');

    route.levels.forEach((level, index) => {
      const question = level.question;
      if (question.type !== questionType) return;
      const label = `question:${routeId}:${index + 1}`;
      const plotLabel = `plot:${routeId}:${index + 1}`;
      out.push(`\\subsubsection{${escapeTex(level.paiName)}·${escapeTex(level.title)}}\\label{${label}}`);
      out.push(`\\textbf{情节位置：}\\hyperref[${plotLabel}]{${escapeTex(level.title)}完整剧情}。`);
      out.push('');
      out.push(`\\textbf{题干：}${escapeTex(question.text)}`);
      out.push('');

      if (question.type === 'multiple_choice') {
        out.push('\\textbf{选项与答案}');
        out.push('\\begin{enumerate}[label=\\Alph*.,leftmargin=*]');
        question.options.forEach((option, optionIndex) => {
          const marker = optionIndex === question.correctIndex ? '\\textbf{（正确答案）}' : '';
          out.push(`  \\item ${escapeTex(option)}${marker}`);
        });
        out.push('\\end{enumerate}');
      } else {
        out.push('\\textbf{对话开场}');
        out.push(`\\begin{quote}${escapeTex(question.chatOpening)}\\end{quote}`);
        out.push('\\textbf{后台角色提示词}');
        out.push(`\\begin{quote}\\small ${escapeTex(question.deepseekPrompt)}\\end{quote}`);
      }

      out.push('\\textbf{判定依据、推导与科普边界}');
      out.push(`\\begin{quote}${escapeTex(question.explanation)}\\end{quote}`);
      const references = question.references || [];
      if (references.length) {
        out.push('\\noindent\\textit{资料依据见本页脚注。}');
        references.forEach(reference => out.push(`\\footnote{${formatReference(reference)}}`));
      }
      out.push('');
    });
  }

  writeGenerated(filename, out.join('\n'));
}

function generateCharacterGallery() {
  const out = [
    '% 本文件由 paper/generate-content.js 从游戏数据自动生成，请勿手工编辑。',
    '',
  ];

  for (const [routeId, route] of Object.entries(game.routes)) {
    out.push(`\\subsubsection{${characterNames[routeId]}人物图录}`);
    out.push('');
    route.levels.forEach((level, index) => {
      const no = levelNumber(index);
      out.push('\\Needspace{0.72\\textheight}');
      out.push('\\begin{figure}[H]');
      out.push('  \\centering');
      out.push(`  \\includegraphics[width=0.92\\linewidth,height=0.62\\textheight,keepaspectratio]{assets/characters/${routeId}/portrait_${no}.jpg}`);
      out.push(`  \\caption{${characterNames[routeId]}第${index + 1}拍《${escapeTex(level.title)}》人物图。${escapeTex(portraitNotes[routeId][index])}}`);
      out.push(`  \\label{fig:portrait:${routeId}:${index + 1}}`);
      out.push('\\end{figure}');
      out.push('');
    });
  }

  writeGenerated('character-gallery.tex', out.join('\n'));
}

function generateAllQuestionReferences() {
  const references = new Map();
  for (const route of Object.values(game.routes)) {
    for (const level of route.levels) {
      for (const reference of level.question.references || []) {
        const normalized = stripHtml(reference)
          .replace(/^\s*\[\d+\]\s*/, '')
          .replace(/\s+/g, ' ')
          .trim();
        if (!references.has(normalized)) references.set(normalized, reference);
      }
    }
  }

  const out = [
    '% 本文件由 paper/generate-content.js 从游戏数据自动生成，请勿手工编辑。',
    '\\begin{enumerate}[label={[Q\\arabic*]},leftmargin=*]',
  ];
  for (const reference of references.values()) {
    out.push(`  \\item ${formatReference(reference)}`);
  }
  out.push('\\end{enumerate}');
  writeGenerated('all-question-references.tex', out.join('\n'));
}

function escapePromptChunk(value) {
  const emojis = ['📖', '🖼', '💡', '🎨', '🔑', '😌', '❌', '🤖', '🚫', '📐'];
  let text = String(value).replace(/\uFE0F/g, '');
  emojis.forEach((emoji, index) => {
    text = text.split(emoji).join(`PROMPTEMOJI${index}TOKEN`);
  });
  text = text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([{}%&#_$])/g, '\\$1')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/~/g, '\\textasciitilde{}');
  emojis.forEach((emoji, index) => {
    text = text
      .split(`PROMPTEMOJI${index}TOKEN`)
      .join(`\\promptemoji{${emoji}}`);
  });
  return text || '\\mbox{}';
}

function generateSelectedPrompt() {
  const source = path.join(
    projectRoot,
    'image-prompts',
    'characters',
    'zhouzhiruo',
    'portrait_18.md',
  );
  const lines = fs.readFileSync(source, 'utf8').replace(/\r\n/g, '\n').split('\n');
  if (lines.at(-1) === '') lines.pop();

  const out = [
    '% 本文件由 paper/generate-content.js 从代表性提示词自动生成，请勿手工编辑。',
    '\\begingroup',
    '\\setlength{\\tabcolsep}{0pt}',
    '\\renewcommand{\\arraystretch}{1.08}',
    '\\begin{longtable}{@{}>{\\RaggedLeft\\arraybackslash\\scriptsize}p{0.045\\linewidth}@{\\hspace{0.8em}}>{\\RaggedRight\\arraybackslash\\ttfamily\\tiny}p{0.91\\linewidth}@{}}',
  ];

  lines.forEach((line, lineIndex) => {
    const characters = Array.from(line.replace(/\uFE0F/g, ''));
    const chunks = [];
    if (!characters.length) {
      chunks.push('');
    } else {
      for (let offset = 0; offset < characters.length; offset += 88) {
        chunks.push(characters.slice(offset, offset + 88).join(''));
      }
    }
    chunks.forEach((chunk, chunkIndex) => {
      const number = chunkIndex === 0 ? String(lineIndex + 1) : '';
      out.push(`${number} & ${escapePromptChunk(chunk)}\\\\`);
    });
  });

  out.push('\\end{longtable}', '\\endgroup');
  writeGenerated('selected-prompt.tex', out.join('\n'));
}

generatePlots();
generateQuestions('multiple_choice', 'multiple-choice.tex');
generateQuestions('short_answer', 'short-answer.tex');
generateCharacterGallery();
generateAllQuestionReferences();
generateSelectedPrompt();
console.log('已生成剧情、题目脚注、人物图录与关卡资料总表。');
