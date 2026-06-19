/* ============================================================
   《倚天屠龙记》· 胡笳十八拍 —— Game Data
   浙江大学《中西医学与美学》期末大作业
   ============================================================ */

const GAME_DATA = {

  // --- Characters ---
  characters: [
    {
      id: 'zhaomin',
      name: '赵敏',
      emoji: '🌹',
      epithet: '朔漠玫瑰',
      desc: '蒙古郡主，聪慧果敢，敢爱敢恨。"我偏要勉强"——她的爱情是自己争取来的。',
    },
    {
      id: 'zhouzhiruo',
      name: '周芷若',
      emoji: '🪷',
      epithet: '汉水白莲',
      desc: '峨眉掌门，从渔家孤女到武林至尊。"倘若我问心有愧呢"——她的心中藏着无尽波澜。',
    },
  ],

  // --- Routes ---
  routes: {

    // ========================
    // 赵敏路线：朔漠玫瑰
    // ========================
    zhaomin: {
      levels: [
        // --- 第一拍：绿柳初逢 ---
        {
          paiName: '第一拍',
          title: '绿柳初逢',
          images: [
            { src: '', frameIdx: 0, prompt: '【绿柳山庄地牢】元代建筑风格的地下密室，烛光摇曳，石壁上水珠闪烁。赵敏（蒙古贵族少女，着白色貂裘）与张无忌（青年侠客）被困其中。赵敏面带狡黠微笑，张无忌神色无奈。画面色调：暖黄烛光为主，暗部呈现深褐。构图：竖版16:9，赵敏居左前景，张无忌居中，地牢纵深延伸至画面深处。风格：金庸武侠水墨风，工笔人物，写意背景。' },
            { src: '', frameIdx: 1, prompt: '【绿柳山庄地牢·近景】赵敏特写——蒙古少女明眸皓齿，嘴角含笑，足踝被铁链轻锁。烛光在她脸上投下温暖光影。画面色调暖金。16:9。水墨工笔风格。' },
            { src: '', frameIdx: 2, prompt: '【绿柳山庄地牢·细节】张无忌为赵敏解开足链，双手触及赵敏足底穴位。两人表情微妙。画面强调手部动作与足部反射区。16:9。水墨写实。' },
            { src: '', frameIdx: 3, prompt: '【绿柳山庄外景】江南园林山庄，垂柳依依，春水如碧。远处可见元末建筑风格的庄院。画面色调清新生机。16:9。元代山水画风。' },
            { src: '', frameIdx: 4, prompt: '【绿柳山庄·全景】黄昏时分，夕阳洒在绿柳山庄的琉璃瓦上，折射出金色光芒。庄前湖水如镜，倒映天光云影。16:9横幅。水墨重彩。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '元顺帝至正年间，天下大乱，群雄并起。蒙古汝阳王府郡主赵敏，奉旨南下，欲收服中原武林。这一日，她在绿柳山庄设下机关，引明教教主张无忌入局……', frameIdx: 0 },
            { speaker: '赵敏', text: '张教主，这地牢之中，你我不如聊些别的。你可知——人的足底，藏着全身的奥秘？', frameIdx: 1 },
            { speaker: '张无忌', text: '郡主这是何意？', frameIdx: 2 },
            { speaker: '赵敏', text: '我蒙古萨满常说，足底有穴，通五脏六腑。方才你碰到我这里——（指了指足心）可觉得是什么穴？', frameIdx: 2 },
            { speaker: '旁白', text: '赵敏所问，正是中医学中极为重要的足底穴位——涌泉穴。此穴位于足底前三分之一凹陷处，乃是肾经首穴。传统医籍常以其补肾宁神、引火归元，女子日常按揉可作保健辅助，若有月经、睡眠或腰膝等不适，仍应辨证求医。', frameIdx: 1 },
          ],
          question: {
            type: 'multiple_choice',
            text: '赵敏所指的足底要穴——位于足底前1/3凹陷处，为足少阴肾经井穴，此穴名为：',
            options: ['涌泉穴', '太冲穴', '三阴交', '足三里'],
            correctIndex: 0,
            explanation: '涌泉穴（KI1）位于足底前1/3凹陷处，是足少阴肾经的井穴。《黄帝内经》记载其为肾经所出，故名"涌泉"。传统针灸学常用其引火归元、醒神安神、滋肾降逆；日常按揉可作为放松与保健辅助。需注意：足底按摩、穴位按揉不能替代对月经异常、失眠、腰膝酸软等问题的正规诊疗，相关症状应结合病史、体征和现代检查辨证处理。',
            references: [
              "[1] 佚名. 黄帝内经·灵枢·本输[M/OL]. 中国哲学书电子化计划, [2026-06-18]. https://ctext.org/huangdi-neijing/ben-shu/zhs.",
              "[2] World Health Organization Regional Office for the Western Pacific. WHO standard acupuncture point locations in the Western Pacific region[S/OL]. Manila: WHO Regional Office for the Western Pacific, 2008[2026-06-18]. https://iris.who.int/items/f188654a-d8a7-4519-9979-8e2de713c060.",
              "[3] 国家市场监督管理总局, 国家标准化管理委员会. GB/T 12346-2021 经穴名称与定位[S/OL]. 2021-11-26[2026-06-18]. https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=397548AE7248D3D87DD15E0AB8107185.",
            ],
          },
        },

        // --- 第二拍：黑玉断续 ---
        {
          paiName: '第二拍',
          title: '黑玉断续',
          images: [
            { src: '', frameIdx: 0, prompt: '【武当山·紫霄宫】武当派大殿内，三清像庄严。赵敏携黑玉断续膏前来，殿中众人神色各异——张三丰鹤发童颜，俞岱岩坐于轮椅。画面庄严，香烟缭绕。16:9。金庸武侠水墨风。' },
            { src: '', frameIdx: 1, prompt: '【黑玉断续膏·特写】一只白玉瓷瓶，内盛黑色药膏，泛着玉石般光泽。旁边散落几味中药：自然铜、骨碎补、血竭。画面重点表现药材质感。16:9。工笔静物。' },
            { src: '', frameIdx: 2, prompt: '【武当山·远景】武当山群峰如削，云雾缭绕，紫霄宫金顶在云海中若隐若现。朝霞映照，气象万千。16:9横幅。青绿山水画风。' },
            { src: '', frameIdx: 3, prompt: '【俞岱岩·近景】俞岱岩坐在轮椅上，神色中带着希望与不安。张三丰亲手为他敷药，手部动作细致。16:9。工笔人物。' },
            { src: '', frameIdx: 4, prompt: '【武当山·药圃】武当山药园，种满各类草药——当归、黄芪、川芎、续断等。蝴蝶飞舞，阳光透过树叶洒下斑驳光影。16:9横幅。写意花鸟。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '武当山上，俞岱岩师叔因二十年前被大力金刚指捏碎全身骨骼，瘫痪至今。赵敏为表诚意，携西域奇药"黑玉断续膏"而来。', frameIdx: 0 },
            { speaker: '赵敏', text: '张真人，此乃黑玉断续膏，以西域秘法炼制，可接续断骨。但敷用之时，需以深厚内功催动药力入骨，辅以正骨手法。', frameIdx: 0 },
            { speaker: '张三丰', text: '老道行医数十载，知接骨之要，在于"骨正筋柔，气血以流"。郡主此药，可含自然铜、骨碎补之类？', frameIdx: 1 },
            { speaker: '赵敏', text: '真人明鉴。我虽不懂医道，但也听王府医官说过——女子年过七七（四十九岁），天癸竭，地道不通。以今日医理观之，绝经后骨量流失会加快；俞三侠虽非年迈，但卧床二十年，骨量下降风险甚高，需格外小心才是。', frameIdx: 1 },
            { speaker: '旁白', text: '赵敏提及的"骨质疏松"，正是当代女性健康的重要议题。中医以"肾主骨"为理论核心，认为肾精充足则骨骼强健；西医则强调雌激素对骨密度的保护作用。绝经后女性因雌激素水平下降，骨质疏松风险显著上升。', frameIdx: 2 },
          ],
          question: {
            type: 'multiple_choice',
            text: '中医认为"肾主骨"，女性绝经后骨质疏松风险显著增加。以下关于女性骨骼健康的说法，哪一项是<strong>错误</strong>的？',
            options: [
              '绝经后雌激素下降，骨吸收大于骨形成，导致骨质疏松',
              '中医补肾壮骨常用杜仲、续断、骨碎补等药材',
              '骨质疏松是正常衰老现象，无需特别预防',
              '适量负重运动、补充钙质与维生素D有助于防治骨质疏松',
            ],
            correctIndex: 2,
            explanation: '骨质疏松并非"无需预防的正常衰老现象"。中国2018年流行病学调查显示，50岁以上女性骨质疏松患病率为32.1%。绝经后雌激素下降会加快骨吸收，但预防与治疗必须个体化：优先保证膳食钙、维生素D和蛋白质摄入，进行规律的负重、抗阻与平衡训练，避免吸烟和过量饮酒；是否需要补充剂、骨密度（DXA）检查或抗骨质疏松药物，应结合年龄、骨折史和风险评估由医师决定。中医药可在正规诊疗中辨证作为辅助，但不能替代骨折风险评估和规范治疗。',
            references: [
              "[1] 中华医学会骨质疏松和骨矿盐疾病分会. 原发性骨质疏松症诊疗指南(2022)[J]. 中国全科医学, 2023, 26(14): 1671-1691. DOI: 10.12114/j.issn.1007-9572.2023.0121.",
              "[2] 国家卫生健康委员会. 一图读懂: 中国骨质疏松症流行病学调查结果[R/OL]. 2018-10-20[2026-06-18]. https://www.nhc.gov.cn/wjw/zcjd/201810/1aee4c12bec7415cbebfe7eacbc09552.shtml.",
              "[3] Lee D O, Hong Y H, Cho M K, et al. The 2024 guidelines for osteoporosis - Korean Society of Menopause: Part I[J]. Journal of Menopausal Medicine, 2024, 30(1): 1-23. DOI: 10.6118/jmm.24000.",
              "[4] The North American Menopause Society. The 2022 hormone therapy position statement of The North American Menopause Society[J]. Menopause, 2022, 29(7): 767-794. DOI: 10.1097/GME.0000000000002028.",
            ],
          },
        },

        // --- 第三拍：万安寺火 ---
        {
          paiName: '第三拍',
          title: '万安寺火',
          images: [
            { src: '', frameIdx: 0, prompt: '【万安寺·大火】元代万安寺（今北京妙应寺）高塔，烈焰冲天，浓烟滚滚。塔上层困着六大派群雄。赵敏立于塔下，神色复杂。16:9。水墨写意，以朱砂红和墨色为主。' },
            { src: '', frameIdx: 1, prompt: '【万安寺·救人】张无忌施展乾坤大挪移，从塔上接住跳下的武林人士。火光照耀下，人物剪影般壮烈。16:9横幅。水墨重彩。' },
            { src: '', frameIdx: 2, prompt: '【万安寺·白塔】大火前的白塔，元大都地标建筑，通体白色，在夕阳下泛金光。16:9。元代界画风格。' },
            { src: '', frameIdx: 3, prompt: '【万安寺·寺内】寺内佛像在火光中若隐若现，檀香与烟尘交织。画面充满宗教庄严感与灾难的张力。16:9。水墨壁画风。' },
            { src: '', frameIdx: 4, prompt: '【万安寺·晨光】大火过后的清晨，白塔残存，青烟袅袅。曙光穿透烟尘，象征劫后重生。16:9。水墨渲染。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '万安寺大火，六大派高手被困塔顶。火焰自下而上燃烧，浓烟弥漫。这场大火不仅烧毁了一座名刹，更让赵敏第一次直面生死。', frameIdx: 0 },
            { speaker: '赵敏', text: '（望着火光，喃喃自语）父王要我收服武林……可若人都烧死了，收服又有何用？', frameIdx: 0 },
            { speaker: '旁白', text: '大火之中，多人被烧伤。烧伤急救——这一在现代医学中至关重要的课题，在这元末乱世之中，却少有人精通。', frameIdx: 1 },
            { speaker: '赵敏', text: '张无忌！接着——（抛出一个药囊）这是王府的金创药，对烧伤有奇效！记住——先用清水冲洗伤口，再敷此药！', frameIdx: 1 },
          ],
          question: {
            type: 'multiple_choice',
            text: '赵敏在火场中提醒烧伤急救步骤。现代医学关于烧伤现场急救，以下哪项处理<strong>不正确</strong>？',
            options: [
              '尽快用清洁流动水冷却创面（通常5-20分钟，遵当地急救指南）',
              '在创面上涂抹牙膏、酱油等以缓解疼痛',
              '小心脱去创面附近的衣物和饰品',
              '用干净敷料覆盖创面后尽快就医',
            ],
            correctIndex: 1,
            explanation: '在烧伤创面上涂抹牙膏、酱油、面粉等是常见的民间误区！这些物质不仅不能治疗烧伤，还会：①增加感染风险；②影响医生对创面深度的判断；③加重组织损伤。正确急救步骤：①"冲"——尽快用清洁、凉而不冰的流动水冷却创面，常用建议为5-20分钟，具体遵当地急救指南；②"脱"——小心去除不粘连创面的衣物和饰品；③"盖"——用干净敷料覆盖；④"送"——大面积、深部、面部/会阴/手足烧伤或儿童烧伤应及时就医。中医外治烧烫伤需在专业医师指导下使用，不宜自行敷药遮掩创面。',
            references: [
              "[1] Hewett Brumberg E K, Douma M J, Alibertis K, et al. 2024 American Heart Association and American Red Cross guidelines for first aid[J]. Circulation, 2024, 150(24): e519-e579. DOI: 10.1161/CIR.0000000000001281.",
              "[2] World Health Organization. Burns[EB/OL]. [2026-06-18]. https://www.who.int/news-room/fact-sheets/detail/burns.",
              "[3] American Red Cross. Burns: types, symptoms, and how to help[EB/OL]. [2026-06-18]. https://www.redcross.org/take-a-class/resources/learn-first-aid/burns.",
              "[4] Mayo Clinic. Burns: first aid[EB/OL]. [2026-06-18]. https://www.mayoclinic.org/first-aid/first-aid-burns/basics/art-20056649.",
            ],
          },
        },

        // --- 第四拍：灵蛇海上 ---
        {
          paiName: '第四拍',
          title: '灵蛇海上',
          images: [
            { src: '', frameIdx: 0, prompt: '【灵蛇岛海域】碧海蓝天，一艘中式帆船在波涛中航行。远处灵蛇岛若隐若现，岛上植被茂密。赵敏立于船头，以手抚胸，似有不适。16:9横幅。水墨青绿山水。' },
            { src: '', frameIdx: 1, prompt: '【船中·赵敏不适】船舱内，赵敏面色苍白，倚靠船舷。小昭（异域少女，着波斯风格衣饰）端来一碗热姜汤。窗外海浪翻涌。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【灵蛇岛·登岛】金色沙滩，奇花异草。众人登岛，金花婆婆（白发老妪，手持拐杖）在远处伫立。16:9。金碧山水。' },
            { src: '', frameIdx: 3, prompt: '【海上·夕阳】夕阳沉入海平面，船帆染成金色。海鸥盘旋，海天一色。16:9横幅。写意重彩。' },
            { src: '', frameIdx: 4, prompt: '【灵蛇岛·蛇窟】岛上密林深处，各色蛇类盘踞。金花婆婆立于万蛇之中，神情自若。画面神秘而瑰丽。16:9。工笔重彩。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '灵蛇岛之行，海路迢迢。赵敏自幼生长于蒙古草原，不惯乘船。海上颠簸数日，终感身体不适……', frameIdx: 0 },
            { speaker: '小昭', text: '赵姑娘，你这几日食欲不振，又常恶心呕吐……莫非是——', frameIdx: 1 },
            { speaker: '赵敏', text: '（面色苍白，勉强一笑）莫要瞎说。我只是晕船罢了。小昭，你可知道治晕船的法子？', frameIdx: 1 },
            { speaker: '小昭', text: '波斯医者常以生姜、薄荷止呕。我煮了姜汤，你且喝下。不过……赵姑娘，你当真只是晕船么？女子若有身孕，早期症状与晕船颇为相似——', frameIdx: 1 },
          ],
          question: {
            type: 'short_answer',
            text: '妊娠早期的常见反应与晕船确有相似之处。请谈谈：如何从中医和西医角度区分妊娠反应与其他原因引起的恶心呕吐？女性在妊娠早期（前三个月）应注意哪些健康事项？',
            deepseekPrompt: '你是一位元末明初的医官，精通中医妇科与西域医学。请用半文半白、典雅通俗的语言，与求医者（可能是赵敏这样的蒙古贵族女子）讨论妊娠早期的辨别、调理与注意事项。需涵盖中医（脉诊、饮食禁忌、安胎原则）和西医知识。每次回答控制在150-300字，适时追问引导，但不要一次性说太多。如果求医者回答有深度，可深入探讨；如果回答简单，给予温和提示后继续。',
            chatOpening: '贫道观赵姑娘之状，既似晕船，又似有孕。二者之别，在于——晕船离舟则缓，而妊娠之呕，晨起为甚，且伴有乳胀、倦怠诸症。请问姑娘，近日可还有其他不适？月事可曾按期而至？',
            explanation: '妊娠相关恶心呕吐可发生在一天中的任何时段，常伴月经推迟、乳房胀痛、尿频、疲劳或气味敏感；晕船通常与乘船和运动刺激同步，离开环境后缓解。尿或血hCG可提示妊娠，但妊娠位置、孕周与胚胎情况仍需结合病史和超声评估。中医将其归入"妊娠恶阻"等范畴，须辨证且不能遮蔽脱水、电解质紊乱等风险。早孕期宜按指南补充叶酸、少量多餐、保证水分与休息，避免酒精、烟草和未经医师确认安全的药物或草药，并尽早建立产科保健；若无法进食饮水、体重明显下降、尿量减少、腹痛或阴道流血，应及时就医。',
            references: [
              "[1] Nelson-Piercy C, Dean C, Shehmar M, et al. The management of nausea and vomiting in pregnancy and hyperemesis gravidarum: Green-top Guideline No. 69[J]. BJOG, 2024, 131(7): e1-e30. DOI: 10.1111/1471-0528.17739.",
              "[2] American College of Obstetricians and Gynecologists. Morning sickness: nausea and vomiting of pregnancy[EB/OL]. [2026-06-18]. https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy.",
              "[3] Centers for Disease Control and Prevention. Folic acid[EB/OL]. 2025-05-20[2026-06-18]. https://www.cdc.gov/folic-acid/index.html.",
              "[4] 傅山. 傅青主女科: 妊娠恶阻[M/OL]. 维基文库, [2026-06-18]. https://zh.wikisource.org/zh-hans/傅青主女科.",
            ],
          },
        },

        // --- 第五拍：弥勒佛庙 ---
        {
          paiName: '第五拍',
          title: '弥勒佛庙',
          images: [
            { src: '', frameIdx: 0, prompt: '【弥勒佛庙·外景】荒野中一座小庙，残破的弥勒佛像依然含笑。黄昏时分，夕阳斜照入殿。庙外荒草丛生，有兵刃打斗痕迹。16:9。水墨写意。' },
            { src: '', frameIdx: 1, prompt: '【弥勒佛庙·内景】张无忌受伤躺于蒲团之上，左肩鲜血染红衣襟。赵敏撕下自己的衣袖为他包扎，神色焦急。佛像在阴影中慈悲含笑。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【金疮药·特写】赵敏手中一包药粉——大黄、白及、血竭、三七等中药散落。旁边放着干净布条。16:9。工笔静物。' },
            { src: '', frameIdx: 3, prompt: '【弥勒佛·特写】弥勒佛像面容——历经风雨却笑容不改，慈悲注视人间。蛛网与灰尘覆盖，却掩不住庄严。16:9。水墨重彩。' },
            { src: '', frameIdx: 4, prompt: '【佛庙·黎明】破晓时分，阳光透过破窗洒入。张无忌伤口已被包扎好，赵敏靠在柱旁睡着了。画面安静而温暖。16:9。水墨渲染。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '离开灵蛇岛后，赵敏为救张无忌，与父兄决裂。二人在弥勒佛庙中躲避追兵。张无忌身受刀伤，失血不止……', frameIdx: 0 },
            { speaker: '赵敏', text: '无忌，你这伤口颇深，需先止血。我随身带有金创药——但需先清洗伤口，确认无异物残留，方可敷药。你可记得蝴蝶谷胡青牛教你的外伤治法？', frameIdx: 1 },
            { speaker: '张无忌', text: '（虚弱地）外伤处理……先以清水或酒冲洗……若伤口深，需缝合……止血可用按压法，或在伤口近心端加压……金创药中，以三七、白及止血最佳……', frameIdx: 1 },
            { speaker: '赵敏', text: '好。我先以洁净清水洗去污物，再用干净布巾持续按压止血；若伤口深、污染重，仍须尽快寻医。只是——你可知女子月经过多，亦会造成失血？我蒙古女子常谈当归、艾叶之类，你们中原医家又如何辨证？', frameIdx: 2 },
          ],
          question: {
            type: 'multiple_choice',
            text: '张无忌提到的外伤止血与赵敏提及的月经过多（中医称"崩漏"），均属出血证。以下关于止血与崩漏的说法，哪一项是正确的？',
            options: [
              '崩漏只需休息即可自愈，无需治疗',
              '中医治疗崩漏遵循"塞流、澄源、复旧"三法',
              '外伤出血时，应立即在伤口上撒面粉止血',
              '月经过多只需多喝红糖水即可',
            ],
            correctIndex: 1,
            explanation: '崩漏（子宫异常出血）是妇科常见急症，不可掉以轻心。中医治疗崩漏遵循明代方约之提出的"塞流、澄源、复旧"三法：①塞流——急则治标，止血为先（如用三七、地榆炭）；②澄源——审因论治，清除病因（如血热者清热凉血，气虚者补气摄血）；③复旧——善后调理，重建正常月经周期（补肾调冲任）。西医根据病因分类（排卵障碍性、结构性等），治疗包括激素治疗、抗纤溶药物、宫腔镜手术等。异常出血需及时就医，排除器质性病变。',
            references: [
              "[1] Mikes B A, Vadakekut E S, Sparzak P B. Abnormal uterine bleeding[M/OL]//StatPearls. Treasure Island: StatPearls Publishing, 2025[2026-06-18]. https://www.ncbi.nlm.nih.gov/books/NBK532913/.",
              "[2] National Institute for Health and Care Excellence. Heavy menstrual bleeding: assessment and management (NG88)[EB/OL]. 2018-03-14, last reviewed 2024-12-19[2026-06-18]. https://www.nice.org.uk/guidance/ng88.",
              "[3] 世界中医药学会联合会, 中华中医药学会. 国际中医临床实践指南: 崩漏(2019-10-11)[J]. 世界中医药, 2021, 16(6): 870-877.",
              "[4] 傅山. 傅青主女科: 血崩[M/OL]. 维基文库, [2026-06-18]. https://zh.wikisource.org/zh-hans/傅青主女科.",
            ],
          },
        },

        // --- 第六拍：濠州夺婚 ---
        {
          paiName: '第六拍',
          title: '濠州夺婚',
          images: [
            { src: '', frameIdx: 0, prompt: '【濠州·张周婚礼】明代中式婚礼场景，红绸高挂，喜字贴金。张无忌与周芷若在拜堂，宾客满堂。赵敏一身白衣立于门口——鲜艳与素白的强烈对比。16:9横幅。工笔重彩。' },
            { src: '', frameIdx: 1, prompt: '【赵敏·闯入】赵敏手持金毛狮王谢逊的头发，立于喜堂大门。阳光从她背后射入，投下修长影子。众人回眸，神色各异——范遥叹息、杨逍惊愕。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【新妇素手裂红裳】周芷若扯碎嫁衣红裳，眼中含泪，手指流血。红绸碎片在空中飘散。画面极具戏剧张力。16:9。工笔重彩。' },
            { src: '', frameIdx: 3, prompt: '【赵敏·特写】赵敏立于喜堂，手中握着谢逊的头发。她脸上是坚定而略带忧伤的表情——"我偏要勉强"。16:9。工笔人物特写。' },
            { src: '', frameIdx: 4, prompt: '【范遥·劝诫】范遥对赵敏说："世上不如意事十居八九，既已如此，也是勉强不来了。"赵敏回答："我偏要勉强。"两人对话的瞬间定格。16:9。水墨人物。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '濠州城中，张无忌与周芷若大婚。喜堂之上，红绸高挂，宾客满座。范遥却见赵敏只身而来，他劝道："世上不如意事十居八九，既已如此，也是勉强不来了。"', frameIdx: 0 },
            { speaker: '赵敏', text: '（微微一笑）我偏要勉强。', frameIdx: 1 },
            { speaker: '旁白', text: '赵敏携金毛狮王谢逊的头发而来——张无忌的义父落在成昆手中，唯有她知道下落。这一声"偏要勉强"，成为金庸武侠中最动人的宣言。', frameIdx: 1 },
            { speaker: '周芷若', text: '（素手裂红裳，声音颤抖）张无忌！你若随她去了，我周芷若……此生……与你恩断义绝！', frameIdx: 2 },
            { speaker: '旁白', text: '婚礼变局，众人错愕。而张无忌最终还是随着赵敏走了。周芷若承受的打击，不仅是感情上的失落，更是精神上的重创。大喜大悲之间，最伤女子身心。', frameIdx: 3 },
          ],
          question: {
            type: 'multiple_choice',
            text: '大喜大悲等剧烈情绪波动对女性健康影响深远。中医认为"怒伤肝、喜伤心、思伤脾、悲伤肺、恐伤肾"。以下关于女性情绪管理与健康的关系，哪一项<strong>不正确</strong>？',
            options: [
              '长期压力可能扰乱睡眠、月经节律，并加重经前期不适',
              '中医"逍遥散"为疏肝解郁经典方，适用于肝郁血虚证',
              '女性情绪波动只影响心理健康，与生殖系统无关',
              '规律运动（如八段锦、瑜伽）和社交倾诉有助于调节情绪',
            ],
            correctIndex: 2,
            explanation: '心理压力与身体健康并非两条互不相干的线。持续压力可通过下丘脑—垂体—肾上腺轴及下丘脑—垂体—卵巢轴影响睡眠、食欲、排卵和月经节律，也可能加重经前期障碍、围绝经期症状或焦虑抑郁。中医将部分表现辨为肝郁、心脾两虚等证候，逍遥散是疏肝养血的经典方之一，但必须由合格医师辨证，不能把所有情绪或月经问题都归结为"肝郁"并自行服药。规律运动、睡眠、社会支持与必要的心理/精神专科帮助，都是可靠的应对途径。',
            references: [
              "[1] American College of Obstetricians and Gynecologists. Management of premenstrual disorders: ACOG Clinical Practice Guideline No. 7[J]. Obstetrics & Gynecology, 2023, 142(6): 1516-1533. DOI: 10.1097/AOG.0000000000005426.",
              "[2] Reilly T J, Patel S, Unachukwu I C, et al. The prevalence of premenstrual dysphoric disorder: systematic review and meta-analysis[J]. Journal of Affective Disorders, 2024, 349: 534-540. DOI: 10.1016/j.jad.2024.01.066.",
              "[3] Chan K, Rubtsova A A, Clark C J. Exploring diagnosis and treatment of premenstrual dysphoric disorder in the U.S. healthcare system: a qualitative investigation[J]. BMC Women's Health, 2023, 23: 272. DOI: 10.1186/s12905-023-02334-y.",
              "[4] 太医局. 太平惠民和剂局方: 逍遥散[M/OL]. 中医笈成, [2026-06-18]. https://jicheng.tw/tcm/book/太平惠民和剂局方_1/index.html.",
            ],
          },
        },

        // --- 第七拍：少室山下 ---
        {
          paiName: '第七拍',
          title: '少室山下',
          images: [
            { src: '', frameIdx: 0, prompt: '【少室山·少林寺】少林古刹，苍松翠柏，钟声悠远。山门宏伟，历代碑刻林立。群雄从四面八方赶来屠狮大会。16:9。水墨山水。' },
            { src: '', frameIdx: 1, prompt: '【少林·厨房】少林斋堂厨房，素菜清香——豆腐、菌菇、绿叶菜、山药。一个武僧正在切菜，刀工精细。窗外可见练武场。16:9。工笔写实。' },
            { src: '', frameIdx: 2, prompt: '【少林·药房】少林药局，药柜高耸，满墙药斗。一位老僧正在配药——当归、黄芪、党参等药材散落桌上。16:9。工笔静物。' },
            { src: '', frameIdx: 3, prompt: '【少室山·山道】通往少室山的石阶古道，赵敏与张无忌携手攀登。秋叶金黄，山泉淙淙。16:9横幅。青绿山水。' },
            { src: '', frameIdx: 4, prompt: '【屠狮大会·全景】少林寺演武场，各路英雄围坐。场中空出一片区域——即将展开屠狮比武。气氛紧张。16:9横幅。水墨写意。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '少林屠狮大会在即，天下英雄齐聚少室山。赵敏随张无忌一路奔波，体力消耗巨大。这日，少林斋堂之中……', frameIdx: 0 },
            { speaker: '赵敏', text: '无忌，连日赶路，我觉着浑身乏力。这些时日饮食不周，恐是气血两虚了。你可有什么食补之法？', frameIdx: 2 },
            { speaker: '张无忌', text: '我在蝴蝶谷学医时，胡青牛曾言：女子以血为本，补血先须健脾胃。脾胃为气血生化之源，若脾胃虚弱，纵食山珍海味亦难化生气血。', frameIdx: 1 },
          ],
          question: {
            type: 'multiple_choice',
            text: '张无忌提到"脾胃为气血生化之源"。中医认为女性补血先须健脾。以下关于女性营养性贫血的说法，哪一项是正确的？',
            options: [
              '缺铁性贫血只需多吃红枣、红糖即可',
              '动物性铁（血红素铁）的吸收率高于植物性铁（非血红素铁）',
              '贫血患者可自行服用铁剂，剂量越大越好',
              '茶和咖啡有助于铁的吸收，贫血者可多饮',
            ],
            correctIndex: 1,
            explanation: '动物性食物中的血红素铁通常比植物性非血红素铁更易吸收。红枣和红糖不能替代富含铁的均衡饮食或规范铁剂治疗；植物性铁可与富含维生素C的食物同食以帮助吸收。浓茶、咖啡中的多酚会影响非血红素铁吸收，可与正餐和铁剂错开。铁剂应在明确缺铁及病因后遵医嘱服用，过量可中毒。中医所称"血虚"不等同于实验室诊断的贫血，四物汤、归脾汤等方剂也须辨证处方，不能代替血常规、铁蛋白检查和病因治疗。',
            references: [
              "[1] World Health Organization. WHO global anaemia estimates: key findings, 2025[R/OL]. Geneva: World Health Organization, 2025[2026-06-18]. https://www.who.int/publications/i/item/9789240113930.",
              "[2] 中国营养学会. 中国居民膳食营养素参考摄入量(2023版)[M]. 北京: 人民卫生出版社, 2023.",
              "[3] National Institutes of Health Office of Dietary Supplements. Iron: fact sheet for health professionals[EB/OL]. 2025-09-18[2026-06-18]. https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/.",
              "[4] DeLoughery T G, Jackson C S, Ko C W, et al. AGA clinical practice update on management of iron deficiency anemia: expert review[J]. Clinical Gastroenterology and Hepatology, 2024, 22(8): 1575-1583. DOI: 10.1016/j.cgh.2024.03.046.",
            ],
          },
        },

        // --- 第八拍：朔漠风霜 ---
        {
          paiName: '第八拍',
          title: '朔漠风霜',
          images: [
            { src: '', frameIdx: 0, prompt: '【蒙古草原·大漠】一望无际的蒙古草原，风吹草低见牛羊。远处蒙古包群聚，炊烟袅袅。天空湛蓝如洗，白云朵朵。16:9横幅。写意山水。' },
            { src: '', frameIdx: 1, prompt: '【赵敏·草原骑马】赵敏换回蒙古装束——貂皮帽、长袍、马靴，策马奔驰于草原。长发在风中飘扬，面色被风吹得微红。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【蒙古包·内景】蒙古包内，炉火温暖。赵敏以马奶和草药制作护肤膏——羊脂、沙棘油、红花等材料散落。16:9。工笔静物。' },
            { src: '', frameIdx: 3, prompt: '【大漠·夕阳】大漠落日，天空渲染为橙红色。两匹马并辔而行——赵敏与张无忌的身影在落日中形成剪影。16:9横幅。写意重彩。' },
            { src: '', frameIdx: 4, prompt: '【草原·毡房玩雕】蒙古少年在毡房外玩耍，用小弓小箭，嬉笑打闹。远处有妇人在挤羊奶。一派和平牧歌景象。16:9。水墨人物。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '赵敏带张无忌回到蒙古草原。朔风如刀，大漠烈日照晒。赵敏虽是蒙古人，但多年在江南生活后重返朔漠，肌肤也需重新适应。', frameIdx: 0 },
            { speaker: '张无忌', text: '敏敏，这朔漠的风沙可比江南的烟雨厉害得多。你脸上都吹红了。', frameIdx: 1 },
            { speaker: '赵敏', text: '这有什么。我蒙古女子自有护肤之法——羊脂混沙棘油，再加些红花，涂于面上，可防风防晒。倒是你们中原女子，整日以轻纱遮面，以铅粉敷脸——我听说那铅粉有毒，可是真的？', frameIdx: 2 },
          ],
          question: {
            type: 'multiple_choice',
            text: '赵敏提到古代女子以铅粉敷脸。关于女性皮肤健康与防晒，以下哪一项是正确的？',
            options: [
              '古代铅粉美白安全有效，现代也可使用',
              '紫外线只导致皮肤晒黑，不会引起皮肤癌',
              '涂抹防晒霜（SPF≥30）是预防皮肤光老化和皮肤癌的重要措施',
              '阴天和冬天不需要防晒',
            ],
            correctIndex: 2,
            explanation: '古代铅粉可能造成重金属暴露；现代化妆品法规禁止或严格限制相关有害物质及杂质限量，来源不明的"速效美白"产品尤其需要警惕。UVA与UVB会造成晒伤、光老化并增加皮肤癌风险，阴天和冬季也可能存在有效紫外线暴露。防护应结合遮阳、衣帽、避免正午暴晒与足量广谱防晒霜（通常建议SPF30及以上），并按出汗、游泳和产品说明补涂。传统草本外用方也可能刺激或致敏，内服中药更不应作为常规美容保健品自行使用。',
            references: [
              "[1] World Health Organization. Radiation: protecting against skin cancer[EB/OL]. 2024-06-25[2026-06-18]. https://www.who.int/news-room/questions-and-answers/item/radiation-protecting-against-skin-cancer.",
              "[2] Centers for Disease Control and Prevention. Sun safety facts[EB/OL]. 2026-02-04[2026-06-18]. https://www.cdc.gov/skin-cancer/sun-safety/index.html.",
              "[3] 吴谦, 等. 医宗金鉴·外科心法要诀: 黧黑皯〔黑曾〕[M/OL]. 维基文库, [2026-06-18]. https://zh.wikisource.org/zh-hans/醫宗金鑒/外科卷上.",
              "[4] Morriss S, Scardamaglia L. Sun protection: a practical guide for health professionals[J]. Australian Prescriber, 2025, 48(5): 173-178. DOI: 10.18773/austprescr.2025.046.",
            ],
          },
        },

        // --- 第九拍：冰火之岛 ---
        {
          paiName: '第九拍',
          title: '冰火之岛',
          images: [
            { src: '', frameIdx: 0, prompt: '【冰火岛·全貌】极北之岛，一半冰雪覆盖，一半火山温泉。冰与火共存的奇特地貌。海面浮冰与岛上的绿洲形成对比。16:9横幅。青绿重彩。' },
            { src: '', frameIdx: 1, prompt: '【冰火岛·温泉】岛上天然温泉，蒸汽氤氲。温泉周围长满热带植物——一个冰天雪地中的世外桃源。16:9。水墨渲染。' },
            { src: '', frameIdx: 2, prompt: '【冰火岛·冰洞】蓝色冰洞内，光线透过冰层折射出梦幻光芒。张无忌和赵敏在洞中——这里是张无忌出生的地方。16:9。水墨写意。' },
            { src: '', frameIdx: 3, prompt: '【冰火岛·极光】夜空中极光如绿色丝绸飘舞。冰火岛上，温泉热气与极光交相辉映。16:9横幅。重彩写意。' },
            { src: '', frameIdx: 4, prompt: '【冰火岛·日出】海上日出，金色阳光洒在冰山和温泉上。赵敏和张无忌并肩坐在礁石上，望着朝阳。16:9横幅。金碧山水。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '赵敏与张无忌决定寻找他出生的地方——冰火岛。这极北之地，寒冷与炎热并存，对人的身体是极大考验。', frameIdx: 0 },
            { speaker: '赵敏', text: '无忌，此处气候如此极端——冰山与温泉共存。人在此等环境中生活，体内阴阳必然大乱。你可知中医如何理解"环境致病"？', frameIdx: 2 },
            { speaker: '张无忌', text: '《黄帝内经》有云："人与天地相参也，与日月相应也。"环境之寒热燥湿，皆可影响人体阴阳平衡。女子体质本偏阴柔，更需注意适应环境变迁。', frameIdx: 1 },
          ],
          question: {
            type: 'short_answer',
            text: '中医强调"天人合一"，认为环境对人体健康有深刻影响。请谈谈：女性在不同环境（如寒冷地区vs炎热地区、干燥vs潮湿）中应如何调理身体？中医"因时、因地、因人"的"三因制宜"原则对现代女性健康有何指导意义？',
            deepseekPrompt: '你是一位隐居冰火岛的老医师，精通中医阴阳五行学说和体质辨证。请用半文半白、略带沧桑的语言，与求教者讨论环境气候对女性体质的影响，以及"三因制宜"（因时、因地、因人）的养生原则。每次回答150-300字。若对方见解有深度，可深入追问；若较简单，给予鼓励后补充新知。',
            chatOpening: '老朽在此冰火同存之地隐居三十载，深有感触。寒为阴邪，易伤阳气，女子体寒者入寒地，则痛经、关节痛加重；热为阳邪，易伤阴液，阴虚者入热地，则潮热盗汗加剧。故《内经》云"春夏养阳，秋冬养阴"，此因时制宜也。汝可知因地、因人之义乎？',
            explanation: '"三因制宜"是中医养生和治疗的核心原则：①因时制宜——顺应四时变化（春生夏长秋收冬藏），女性经期、孕期更需注意季节调护；②因地制宜——不同地域的气候、水土对人群体质有不同影响（如北方寒冷干燥、南方湿热），迁徙或旅行时需调整饮食起居；③因人制宜——每个人的体质（平和质、阳虚质、阴虚质、气虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质）不同，同一环境下的反应也不同。现代女性因工作、旅行等原因频繁迁徙，更需了解自身体质，灵活调适。基础原则：注意保暖避寒（尤其经期）、饮食因地制宜、保持规律作息。',
            references: [
              "[1] 佚名. 黄帝内经·素问·宝命全形论[M/OL]. 中国哲学书电子化计划, [2026-06-18]. https://ctext.org/huangdi-neijing/bao-ming-quan-xing-lun/zhs.",
              "[2] 国家市场监督管理总局, 国家标准化管理委员会. GB/T 46939-2025 中医体质分类与判定[S/OL]. 2025-12-31[2026-06-18]. https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=827D6D266BA52A2983F93638DA871028.",
              "[3] Parent A S, Damdimopoulou P, Johansson H K L, et al. Endocrine-disrupting chemicals and female reproductive health: a growing concern[J]. Nature Reviews Endocrinology, 2025, 21(10): 593-607. DOI: 10.1038/s41574-025-01131-x.",
              "[4] Harvard T.H. Chan School of Public Health. How our environment impacts reproductive health[EB/OL]. 2022-09-21[2026-06-18]. https://hsph.harvard.edu/news/how-our-environment-impacts-reproductive-health/.",
            ],
          },
        },

        // --- 第十拍：父女恩仇 ---
        {
          paiName: '第十拍',
          title: '父女恩仇',
          images: [
            { src: '', frameIdx: 0, prompt: '【汝阳王大帐】蒙古王帐，金碧辉煌。汝阳王（须发花白的蒙古王公）端坐虎皮椅上，面色铁青。赵敏跪于帐中。帐外可见蒙古武士。16:9。工笔重彩。' },
            { src: '', frameIdx: 1, prompt: '【赵敏·跪地】赵敏跪在地上，抬头望着父亲。眼中含泪却神色坚定。帐内烛光摇曳，在父女二人脸上投下阴影。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【兄长王保保】赵敏的哥哥王保保（蒙古将领装束）立于帐侧，手按刀柄，神色复杂——既有愤怒，也有心疼。16:9。工笔人物。' },
            { src: '', frameIdx: 3, prompt: '【大漠·夜空】蒙古草原夜空，繁星如碎钻洒满苍穹。远处王帐灯火通明。16:9横幅。写意重彩。' },
            { src: '', frameIdx: 4, prompt: '【离别·草原】清晨草原，薄雾弥漫。赵敏骑马远去，汝阳王与王保保在帐前目送。画面充满离别的哀伤与辽阔。16:9。水墨写意。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '赵敏带张无忌回蒙古见父王。她本以为血浓于水，却不想父兄早已知晓她与明教中人来往，雷霆大怒。', frameIdx: 0 },
            { speaker: '汝阳王', text: '敏敏！你可知罪？身为郡主，竟与叛逆为伍！你若执意跟他走——便是与我大元为敌！与我汝阳王府恩断义绝！', frameIdx: 0 },
            { speaker: '赵敏', text: '父王……女儿不孝。但女儿心意已决。只是——父王，您鬓边的白发又多了一些。女儿虽走，仍挂念父王身体。父王年事渐高，肝火易旺，少饮酒，少动怒才是……', frameIdx: 1 },
            { speaker: '旁白', text: '赵敏此言，触及了中老年健康的重要议题。女性会经历围绝经期；男性若出现迟发性性腺功能减退，则需结合症状与实验室检查诊断，不能笼统称为人人都会经历的"男性更年期"。中年男女也都需要重视睡眠、运动、慢病筛查与压力管理。', frameIdx: 0 },
          ],
          question: {
            type: 'multiple_choice',
            text: '中年以后，无论男女都面临激素水平变化带来的身心挑战。以下关于围绝经期（更年期）女性健康的说法，哪一项是正确的？',
            options: [
              '更年期症状无法缓解，只能忍受',
              '激素替代疗法（HRT）对所有更年期女性都适用，且无风险',
              '围绝经期症状可以干预；绝经激素治疗对合适人群有效，但须由医师个体化评估获益、风险与禁忌证',
              '更年期女性不需要进行妇科检查',
            ],
            correctIndex: 2,
            explanation: '围绝经期是绝经前后的一段生理过渡，开始年龄和持续时间存在个体差异。潮热、盗汗、睡眠或泌尿生殖道症状均可干预。绝经激素治疗是缓解血管舒缩症状和泌尿生殖综合征的有效方法之一，但并非人人适用，需结合年龄、绝经年限、症状、血栓与肿瘤等风险个体化决策。中医可将相关表现辨为肾虚、肝郁等不同证候并辨证施治，不应自行套用成药。宫颈癌、乳腺癌、骨质疏松和心血管风险管理应按年龄、既往结果与个人风险执行，而非一律增加检查。',
            references: [
              "[1] 中国中西医结合学会妇产科专业委员会. 更年期综合征中西医结合诊治指南(2023年版)[J]. 中国实用妇科与产科杂志, 2023, 39(8): 799-808. DOI: 10.19538/j.fk2023080109.",
              "[2] 中华医学会妇产科学分会绝经学组. 中国绝经管理与绝经激素治疗指南2023版[J]. 中华妇产科杂志, 2023, 58(1): 4-21. DOI: 10.3760/cma.j.cn112141-20221118-00706.",
              "[3] The North American Menopause Society. The 2022 hormone therapy position statement of The North American Menopause Society[J]. Menopause, 2022, 29(7): 767-794. DOI: 10.1097/GME.0000000000002028.",
              "[4] World Health Organization. Menopause[EB/OL]. 2024-10-16[2026-06-18]. https://www.who.int/news-room/fact-sheets/detail/menopause.",
            ],
          },
        },

        // --- 后续关卡 11-18 请参见 game-data-part2.js ---
      ],

      // Ending configuration
      ending: {
        title: '第十八拍 · 天下归心',
        image: 'images/misc/desert_sunset.png',
        poem: '朔漠风烟散，天涯共月明。\n胡笳声渐远，人间无病声。\n冰火同归处，牛羊自在行。\n愿得四海平，不闻战鼓鸣。',
        message: '赵敏与张无忌归隐冰火岛。她曾是大元郡主，执掌天下兵马；如今只愿在冰与火的交界处，牧羊养马，与心爱之人共度余生。\n\n毡房外，大漠夕阳如血。她常想起父兄——愿蒙古草原风调雨顺，愿中原大地国泰民安，愿天下女子皆得健康，愿世间再无战乱与病痛。\n\n蔡文姬作《胡笳十八拍》，叹乱世流离、母子永诀。千年之后，赵敏已不需经历那般悲苦——但那份对家国天下的关怀，对人间太平的祈愿，古今一同。',
      },
    },

    // ========================
    // 周芷若路线：汉水白莲
    // ========================
    zhouzhiruo: {
      levels: [
        // --- 第一拍：汉水初遇 ---
        {
          paiName: '第一拍',
          title: '汉水初遇',
          images: [
            { src: '', frameIdx: 0, prompt: '【汉水·渔船】汉水江上，一叶扁舟。少女周芷若（约十岁，布衣荆钗）跪在病重的父亲身旁，泪眼婆娑。张三丰（白须道袍）与少年张无忌立于船头。江水苍茫，远山如黛。16:9。水墨写意。' },
            { src: '', frameIdx: 1, prompt: '【周芷若·少女特写】十岁的周芷若，清秀脸容上挂着泪珠。布衣素净，眼神中带着哀伤与坚毅。背景虚化为江水。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【汉水·江景】汉水两岸，青山叠翠。江面上渔船点点，渔歌互答。画面清新淡雅。16:9横幅。青绿山水。' },
            { src: '', frameIdx: 3, prompt: '【张三丰·诊脉】张三丰为周芷若父亲诊脉——苍老的手指搭在瘦弱手腕上。周芷若在一旁紧张地看着。16:9。工笔人物。' },
            { src: '', frameIdx: 4, prompt: '【汉水·黄昏】夕阳西下，江面如金。渔船缓缓驶向远方，带着年幼的周芷若离开故土。画面充满离别的惆怅。16:9。水墨渲染。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '元末。汉水之上，一叶扁舟。渔家女周芷若的父亲病重垂危，张三丰携张无忌路过，见者心酸。', frameIdx: 0 },
            { speaker: '周芷若', text: '（跪在父亲身旁，泪如雨下）爹爹……你不要走……芷若只有你了……', frameIdx: 1 },
            { speaker: '张三丰', text: '（诊脉后，叹息一声）小姑娘，你父亲是长期饥饿劳苦、气血两亏，又感染风寒，肺气已绝——贫道也无能为力了。', frameIdx: 3 },
            { speaker: '旁白', text: '周芷若的父亲死于长期营养不良与感染。在元末战乱年代，百姓流离失所，饥饿是最常见的"疾病"。对女性而言，营养不良导致的贫血尤为普遍——面色苍白、头晕乏力、月经量少甚至闭经。', frameIdx: 0 },
          ],
          question: {
            type: 'multiple_choice',
            text: '周芷若父亲死于长期营养不良。在战乱年代，女性因生理特点更易发生缺铁性贫血。以下关于女性贫血的说法，哪一项是正确的？',
            options: [
              '贫血就是血少，多喝水就可以了',
              '月经过多、妊娠、素食饮食均可导致或加重缺铁性贫血',
              '贫血只需吃素就能改善',
              '女性面色苍白是气血充足的正常表现',
            ],
            correctIndex: 1,
            explanation: '女性因月经失血、妊娠需求增加、产后失血等因素，是缺铁性贫血的高发人群。WHO 2025版全球贫血估计显示，2023年15-49岁女性贫血患病率约30.7%。常见原因：①月经量过多（>80ml/周期）；②含铁食物摄入不足（素食者尤为常见，因植物铁吸收率低）；③妊娠期血容量增加、胎儿需求；④慢性失血（如消化道出血）。中医属"血虚"范畴，常见证型有：心血虚（心悸失眠，归脾汤）、肝血虚（头晕目眩，四物汤）、气血两虚（面色萎黄，八珍汤）。诊断需查血常规+铁蛋白，治疗应针对病因+补充铁剂（遵医嘱）。',
            references: [
              "[1] World Health Organization. WHO global anaemia estimates: key findings, 2025[R]. Geneva: World Health Organization, 2025. Available: https://www.who.int/publications/i/item/9789240113930.",
              "[2] Mayo Clinic. Iron deficiency anemia: Symptoms and causes[EB/OL]. Rochester: Mayo Foundation for Medical Education and Research, 2024[2026-06-18]. https://www.mayoclinic.org/diseases-conditions/iron-deficiency-anemia/symptoms-causes/syc-20355034",
              "[3] Pavord S, Daru J, Prasannan N, et al. UK guidelines on the management of iron deficiency in pregnancy[J]. British Journal of Haematology, 2020, 188(6): 819-830. DOI: 10.1111/bjh.16221.",
              "[4] 中国营养学会. 中国居民膳食营养素参考摄入量（2023版）[M]. 北京: 人民卫生出版社, 2023. ISBN: 978-7-117-35080-8.",
            ],
          },
        },

        // --- 第二拍：峨眉入门 ---
        {
          paiName: '第二拍',
          title: '峨眉入门',
          images: [
            { src: '', frameIdx: 0, prompt: '【峨眉山·金顶】峨眉金顶，云海翻涌，佛光普照。峨眉派建筑群在云雾中若隐若现。少女周芷若跟随灭绝师太步入山门。16:9。青绿重彩。' },
            { src: '', frameIdx: 1, prompt: '【峨眉派·练功场】峨眉女弟子们在练习剑法，白衣翩翩，剑光如雪。少女周芷若在一旁认真观看，手中握着木剑。16:9。工笔人物。' },
            { src: '', frameIdx: 2, prompt: '【灭绝师太·训徒】灭绝师太（中年尼姑，面容严厉，手持拂尘）教导周芷若。周芷若低头恭听，神色既敬畏又渴望。16:9。工笔人物。' },
            { src: '', frameIdx: 3, prompt: '【峨眉·药圃】峨眉山草药园——当归、川芎、白芍、红花等妇科常用中药郁郁葱葱。蝴蝶飞舞，阳光明媚。16:9。写意花鸟。' },
            { src: '', frameIdx: 4, prompt: '【峨眉·晨钟】清晨，峨眉山钟声响起。少女周芷若在晨曦中独自练剑，汗珠在阳光下闪光。16:9横幅。水墨渲染。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '周芷若被张三丰送至峨眉山，拜入灭绝师太门下。从垂髫少女到亭亭玉立，她在峨眉山度过了整个青春期。', frameIdx: 0 },
            { speaker: '灭绝师太', text: '芷若，你既入我峨眉门下，当知女子习武与男子不同。女子有经、带、胎、产之生理，练功需顺应天时，不可妄自逞强。你可知何为"天癸"？', frameIdx: 2 },
            { speaker: '周芷若', text: '（恭敬地）徒儿不知，请师父明示。', frameIdx: 0 },
            { speaker: '灭绝师太', text: '《黄帝内经》曰："女子二七而天癸至，任脉通，太冲脉盛，月事以时下。"天癸者，乃肾中精气所化，主生殖发育。你来峨眉时方才十岁，如今十四，天癸将至——此后炼功，经期须减量，忌寒凉、忌过劳。此为女子养身之本，万不可轻忽！', frameIdx: 2 },
          ],
          question: {
            type: 'multiple_choice',
            text: '灭绝师太所言的"天癸"，在中医理论中指促进生殖功能成熟的精微物质。关于女性青春期发育和月经初潮，以下哪一项<strong>不正确</strong>？',
            options: [
              '月经初潮是女性青春期的标志，通常发生在10-16岁',
              '青春期女性应完全避免运动，以免损伤"天癸"',
              '经期适度运动（如瑜伽、散步）有助于缓解经期不适',
              '青春期营养不足可导致初潮延迟或月经稀发',
            ],
            correctIndex: 1,
            explanation: '适度的运动不会损伤"天癸"，反而有助于青春期发育。正确的做法是：①经期避免剧烈运动和重体力劳动（中医"忌过劳"），但适度活动如散步、瑜伽、八段锦有助于气血运行，缓解痛经；②青春期需要充足营养——蛋白质、铁、钙、锌等，节食或营养不良可致初潮延迟（<16岁称原发性闭经）或继发性闭经；③初潮后前1-2年月经可能不规律，属正常现象（无排卵性月经），但若持续不规律超过3年需就医；④青春期女孩需进行月经卫生教育、HPV疫苗接种（9-14岁最佳）。',
            references: [
              "[1] 佚名. 黄帝内经·素问·上古天真论［M］. 北京：中国哲学书电子化计划（CTEXT）数据库，https://ctext.org/huangdi-neijing/shang-gu-tian-zhen-lun/zh.",
              "[2] American College of Obstetricians and Gynecologists. Menstruation in girls and adolescents: using the menstrual cycle as a vital sign［J］. Obstetrics & Gynecology, 2015, 126(6): e143–e146. DOI:10.1097/AOG.0000000000001215.",
              "[3] World Health Organization. Human papillomavirus vaccines: WHO position paper, December 2022［J］. Weekly Epidemiological Record, 2022, 97(50): 645–672. https://www.who.int/publications/i/item/who-wer9750-645-672.",
              "[4] World Health Organization. Adolescent health［EB/OL］. https://www.who.int/health-topics/adolescent-health/ (accessed 2026-06-18).",
            ],
          },
        },

        // --- 第三拍：光明一剑 ---
        {
          paiName: '第三拍',
          title: '光明一剑',
          images: [
            { src: '', frameIdx: 0, prompt: '【光明顶·决战】明教光明顶总坛，六大门派围攻。周芷若手持倚天剑，面对张无忌。剑锋寒光闪烁，周芷若神色挣扎。16:9。水墨重彩。' },
            { src: '', frameIdx: 1, prompt: '【倚天剑·特写】倚天剑——古剑通体泛寒光，剑身上"倚天"二字隐约可见。周芷若的手紧握剑柄，指节泛白。16:9。工笔静物。' },
            { src: '', frameIdx: 2, prompt: '【灭绝师太·下令】灭绝师太厉声命令周芷若："刺！刺下去！"——表情冷酷决绝。周芷若浑身颤抖。16:9。工笔人物。' },
            { src: '', frameIdx: 3, prompt: '【张无忌·中剑】张无忌胸口被倚天剑刺入，鲜血染红衣襟。他望着周芷若，眼中没有恨意，只有不解与悲伤。16:9。工笔人物。' },
            { src: '', frameIdx: 4, prompt: '【光明顶·全景】光明顶战场，群雄乱斗。烈焰冲天，刀光剑影。画面中心是一束天光，照在周芷若和张无忌身上。16:9横幅。写意重彩。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '光明顶上，六大门派围攻明教。灭绝师太命周芷若用倚天剑刺杀张无忌——那个曾在汉水之上对她有一饭之恩的少年。', frameIdx: 0 },
            { speaker: '灭绝师太', text: '芷若！刺下去！此人是魔教教主，人人得而诛之！你若违抗师命，便不是我峨眉弟子！', frameIdx: 2 },
            { speaker: '周芷若', text: '（手颤抖，泪流满面）师父……我……', frameIdx: 1 },
            { speaker: '旁白', text: '周芷若一剑刺出——刺入了张无忌的胸膛。这一剑，也在她自己心上留下了永久的伤口。在极度压力下做出的行为，往往会在日后造成创伤后应激——那些在巨大压力下被逼迫做出违背本心之事的女性，尤需关注心理健康。', frameIdx: 3 },
          ],
          question: {
            type: 'multiple_choice',
            text: '周芷若在极端压力下刺伤张无忌——这一心理创伤影响了她此后的人生轨迹。关于创伤后应激与女性心理健康，以下哪一项是正确的？',
            options: [
              '心理创伤只是暂时的，时间可以治愈一切，不需要任何干预',
              '女性因生理和社会因素，创伤后应激障碍（PTSD）发病率约为男性的2倍',
              '中医认为情绪与身体健康无关',
              '创伤后应激反应越强烈说明心理素质越差',
            ],
            correctIndex: 1,
            explanation: '流行病学研究通常发现女性发生PTSD的风险高于男性，约可达到两倍，但具体比例随人群、创伤类型和研究方法而变；差异与创伤暴露类型、社会环境和生物学因素共同相关，不能归咎于"心理素质差"。PTSD核心症状包括闯入性再体验、回避、认知和情绪的负性改变以及警觉性增高。循证治疗以创伤聚焦心理治疗（如创伤聚焦CBT、EMDR等）为重要选择，部分患者需要规范药物治疗。中医可从惊悸、郁证等角度辨证辅助，但不能用固定方剂替代创伤评估与专业治疗；如有自伤念头或无法保证安全，应立即求助。',
            references: [
              "[1] American Psychiatric Association. Diagnostic and statistical manual of mental disorders: DSM-5-TR[M]. Washington, DC: American Psychiatric Publishing, 2022. DOI:10.1176/appi.books.9780890425787.",
              "[2] U.S. Department of Veterans Affairs. PTSD: DSM-5 criteria[EB/OL]. https://www.ptsd.va.gov/professional/treat/essentials/dsm5_ptsd.asp.",
              "[3] Hiscox LV, Sharp TH, Olff M, Seedat S, Halligan SL. Sex-based contributors to and consequences of post-traumatic stress disorder[J]. Current Psychiatry Reports, 2023, 25:233–245. DOI:10.1007/s11920-023-01421-z.",
              "[4] Merck Manual Professional Edition. Posttraumatic stress disorder (PTSD)[EB/OL]. https://www.merckmanuals.com/professional/psychiatric-disorders/anxiety-and-trauma-and-stressor-related-disorders/posttraumatic-stress-disorder-ptsd. (accessed 2026-06-18)",
            ],
          },
        },

        // --- 第四拍：万安寺誓 ---
        {
          paiName: '第四拍',
          title: '万安寺誓',
          images: [
            { src: '', frameIdx: 0, prompt: '【万安寺·塔内】万安寺高塔顶层，火焰从下方蔓延。灭绝师太将周芷若拉到角落，低声交代后事。其他武林人士在远处窗边。火光映红两人面庞。16:9。工笔人物。' },
            { src: '', frameIdx: 1, prompt: '【灭绝师太·临终】灭绝师太面容苍老而决绝，握着周芷若的手。她眼中燃烧着比塔下大火更炽烈的仇恨。16:9。工笔人物特写。' },
            { src: '', frameIdx: 2, prompt: '【周芷若·立誓】周芷若跪地立誓，泪流满面。一手被灭绝紧握，一手按在心口。窗外火光冲天。16:9。工笔人物。' },
            { src: '', frameIdx: 3, prompt: '【周芷若·噩梦】周芷若梦魇中的画面——灭绝师太的鬼影、倚天剑、血手印，重叠在一起。画面色调冷蓝与血红对比。16:9。写意怪诞风格。' },
            { src: '', frameIdx: 4, prompt: '【万安寺·塔顶】灭绝师太纵身跃下塔顶，周芷若伸手去抓，只抓住一缕衣角。画面充满绝望与无力感。16:9。水墨重彩。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '万安寺大火。灭绝师太在临终前将周芷若叫到身边，逼她立下毒誓——', frameIdx: 0 },
            { speaker: '灭绝师太', text: '芷若，你跪下！对为师发誓——第一，夺回倚天剑与屠龙刀，光复我峨眉派！第二，不得嫁给张无忌那个魔教妖人！若有违誓……', frameIdx: 1 },
            { speaker: '周芷若', text: '（浑身发抖，声音嘶哑）徒儿……发誓……若有违誓……天诛地灭，不得好死……', frameIdx: 2 },
            { speaker: '旁白', text: '在巨大精神压力下被迫立下的毒誓，如同梦魇一般缠绕周芷若。长期的精神压力可导致月经不调甚至闭经——中医称"气滞血瘀，冲任不通"。现代医学证实，下丘脑性闭经（FHA）与精神压力密切相关。', frameIdx: 3 },
          ],
          question: {
            type: 'short_answer',
            text: '周芷若在巨大精神压力下出现的身心反应，与现代医学中的"功能性下丘脑性闭经"（FHA）有相似之处。请从中医和西医角度，阐述精神压力如何影响女性月经周期，以及应如何调理。',
            deepseekPrompt: '你是一位在峨眉山修行、精通妇科的医尼。请用半文半白、带有禅意的语言，与求医者（可能是周芷若这样在巨大精神压力下身心失衡的女性）讨论情志与月经的关系及调理之法。每次回答150-300字，温和引导对方倾诉并给予专业建议。',
            chatOpening: '贫尼观施主面色——印堂发青，颧红如妆，此乃"肝郁化火"之象。施主近日是否月事不调，或经前乳胀、烦躁易怒？《女科经纶》云："妇人以血为本，以气为用。气行则血行，气滞则血瘀。"施主心中有何郁结，不妨道来。',
            explanation: '功能性下丘脑性闭经（FHA）是由于精神压力、过度节食/运动等因素抑制下丘脑GnRH脉冲式分泌，导致排卵障碍甚至闭经。中医认为"思则气结""恐则气下""怒则气上"，强烈或持续的情志刺激可导致：①肝气郁结→气滞血瘀→月经后期、痛经、闭经；②心脾两虚→气血生化不足→月经量少、色淡；③肾虚→冲任亏损→经水断绝。治疗：西医方面以去除诱因（减轻压力、恢复体重、心理治疗）为主，必要时激素治疗；中医以疏肝理气（逍遥散、柴胡疏肝散）、补肾调冲（左归丸、右归丸）、养心安神（甘麦大枣汤）为主。生活调理：规律作息、柔和运动（八段锦）、穴位按摩（太冲、三阴交）。',
            references: [
              "[1] 萧埙. 女科经纶[M/OL]. 清代医学古籍. 维基文库: https://zh.wikisource.org/zh-hans/女科經綸.",
              "[2] Gordon CM, Ackerman KE, Berga SL, et al. Functional hypothalamic amenorrhea: an endocrine society clinical practice guideline[J]. Journal of Clinical Endocrinology & Metabolism, 2017, 102(5):1413–1439. DOI:10.1210/jc.2017-00131.",
              "[3] Meczekalski B, et al. Functional hypothalamic amenorrhea: impact on bone and neuropsychiatric outcomes[J]. Frontiers in Endocrinology, 2022, 13:953180. DOI:10.3389/fendo.2022.953180.",
              "[4] Endocrine Society. Hypothalamic amenorrhea guideline resources[EB/OL]. https://www.endocrine.org/clinical-practice-guidelines/hypothalamic-amenorrhea. (accessed 2026-06-18)",
            ],
          },
        },

        // --- 第五拍：灵蛇毒计 ---
        {
          paiName: '第五拍',
          title: '灵蛇毒计',
          images: [
            { src: '', frameIdx: 0, prompt: '【灵蛇岛·夜色】灵蛇岛月夜，海面泛银光。周芷若独自站在海岸礁石上，手中握着一包药粉。月光将她的影子拉得很长。16:9。水墨写意。' },
            { src: '', frameIdx: 1, prompt: '【十香软筋散·特写】一包药粉——十香软筋散。粉末细腻，在月光下泛着微微荧光。旁边放着倚天剑和屠龙刀。16:9。工笔静物。' },
            { src: '', frameIdx: 2, prompt: '【殷离·被毁容】殷离（蛛儿）脸上被锐器划伤，鲜血流淌。她惊恐地捂着脸——但看不清是谁下的手。画面只展示结果。16:9。工笔人物。' },
            { src: '', frameIdx: 3, prompt: '【周芷若·苦肉计】周芷若割掉自己半边头发，削去左耳一块——血流满面。她在月光下对镜自伤，表情扭曲而决绝。16:9。工笔人物。' },
            { src: '', frameIdx: 4, prompt: '【灵蛇岛·黎明】天亮后，众人醒来发现变故。赵敏和殷离失踪（被抛入海），地上有刀剑和血迹。张无忌惊愕万分。16:9。水墨重彩。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '灵蛇岛上，倚天剑与屠龙刀首次聚齐。周芷若趁众人熟睡之际，以十香软筋散迷倒众人，划伤殷离的面容，嫁祸赵敏……', frameIdx: 0 },
            { speaker: '旁白', text: '十香软筋散——虽为小说中的虚构毒药，但"软筋"之意与现实中能导致肌肉松弛、呼吸抑制的神经毒素有相似之处。古今中外，毒物辨识始终是医学的重要分支。', frameIdx: 1 },
          ],
          question: {
            type: 'multiple_choice',
            text: '周芷若使用的"十香软筋散"虽为虚构，但药物安全是真实世界的重要议题。以下关于药物安全与毒理学的说法，哪一项是正确的？',
            options: [
              '中药都是天然的，不会有任何毒副作用',
              '附子、乌头等中药含乌头碱，过量可导致心律失常甚至死亡',
              '任何药物都可以随意加大剂量以增强疗效',
              '药物毒性与剂量无关',
            ],
            correctIndex: 1,
            explanation: '"天然"不等于安全。乌头类所含双酯型二萜生物碱可持续激活电压门控钠通道，引起感觉异常、低血压和恶性心律失常，严重时致死。规范炮制与煎煮可降低毒性，但不能把有毒药材变成可随意加量的保健品；具体降毒幅度受品种、工艺和检测方法影响，不宜用单一百分比概括。药物风险与剂量、炮制、配伍、基础疾病及合并用药有关。对乙酰氨基酚等西药超量同样可造成严重中毒，所有药物都应按说明或医嘱使用。',
            references: [
              "[1] 中国哲学书电子化计划. 神农本草经[EB/OL]. https://jicheng.tw/tcm/book/神農本草經_2/index.html.",
              "[2] 国家药品监督管理局, 国家卫生健康委员会. 关于颁布2025年版《中华人民共和国药典》的公告（2025年第29号）[S]. 2025-03-20. https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjyp/20250325183810122.html.",
              "[3] Centers for Disease Control and Prevention. Poisoning associated with consumption of a homemade medicinal drink — California, 2022[J/OL]. Morbidity and Mortality Weekly Report, 2022, 71(16). https://www.cdc.gov/mmwr/volumes/71/wr/mm7116a2.htm.",
              "[4] Lawson C, McCabe DJ, Feldman R. A narrative review of aconite poisoning and management[J]. Journal of Intensive Care Medicine, 2025, 40(8):811–817. PMID:38613376.",
            ],
          },
        },

        // --- 第六拍：裂裳之痛 ---
        {
          paiName: '第六拍',
          title: '裂裳之痛',
          images: [
            { src: '', frameIdx: 0, prompt: '【濠州·喜堂】大红喜字，红绸遍布。周芷若一身凤冠霞帔，貌若天仙。她与张无忌正在拜堂——第三拜正要弯腰。16:9横幅。工笔重彩。' },
            { src: '', frameIdx: 1, prompt: '【赵敏·闯入喜堂】赵敏白衣立于门口，手举谢逊头发。喜堂中的红色与赵敏的白色形成强烈对比。周芷若猛地回头。16:9。工笔重彩。' },
            { src: '', frameIdx: 2, prompt: '【周芷若·撕红裳】周芷若双手撕碎嫁衣红裳，碎片如血花在空中飘散。她眼中含泪，嘴角却挂着惨笑。手指被衣料割破，鲜血滴落。16:9。工笔重彩。' },
            { src: '', frameIdx: 3, prompt: '【周芷若·逃出喜堂】周芷若冲出喜堂，红裳破碎，长发散乱。她在濠州街道上狂奔，身后是追出来的峨眉弟子。16:9。水墨写意。' },
            { src: '', frameIdx: 4, prompt: '【空荡的喜堂】人去楼空后，喜堂内红绸散落一地，喜字歪斜。烛泪干涸，满地狼藉。16:9。水墨渲染。' },
          ],
          dialogues: [
            { speaker: '旁白', text: '濠州城。张无忌与周芷若的婚礼。满堂宾客，红绸高挂。就在第三拜即将完成之时——赵敏出现了。', frameIdx: 0 },
            { speaker: '赵敏', text: '张无忌！你义父谢逊的下落——只有我知道。你若今日拜了堂，今生休想再见他一面！', frameIdx: 1 },
            { speaker: '张无忌', text: '（神色大变）义父……', frameIdx: 0 },
            { speaker: '周芷若', text: '（凄然一笑，双手抓住嫁衣前襟，用力一撕——）既然如此——这婚，不成也罢！', frameIdx: 2 },
            { speaker: '旁白', text: '"新妇素手裂红裳"——这一撕，撕裂的不只是嫁衣，还有周芷若对爱情的最后一丝幻想。大喜变大悲，对女性身心的打击，不亚于一场重病。', frameIdx: 3 },
          ],
          question: {
            type: 'multiple_choice',
            text: '失恋、离异等重大情感创伤对女性身心健康影响深远。以下关于情感与女性健康的说法，哪一项是正确的？',
            options: [
              '被背叛的一方"不值得同情"，是她们自己不够好',
              '中医认为大喜大悲伤心伤肝，可致气机逆乱、月经失调',
              '经历情感创伤后，应立刻投入新恋情来治愈',
              '情感创伤只影响心理，对生理没有实质影响',
            ],
            correctIndex: 1,
            explanation: '中医经典《黄帝内经》明确指出："怒伤肝、喜伤心、思伤脾、悲伤肺、恐伤肾。"大喜（如婚礼）大悲（如被弃）的剧烈转换，最能扰乱气机——"惊则气乱""悲则气消"。心主血脉，心伤则血行失常；肝主疏泄，肝郁则月经不调。现代医学证实：重大情感创伤可激活HPA轴（下丘脑-垂体-肾上腺轴），导致皮质醇持续升高，进而抑制HPG轴（下丘脑-垂体-性腺轴），引起排卵障碍、月经紊乱。"心碎综合征"（Takotsubo心肌病）更是情感打击导致心肌功能障碍的极端例子。正确的疗愈方式：给时间、寻求社交支持、专业心理咨询，而非仓促进入新关系。',
            references: [
              "[1] 中国哲学书电子化计划. 黄帝内经·素问·阴阳应象大论[EB/OL]. https://ctext.org/huangdi-neijing/yin-yang-ying-xiang-da-lun/zhs.",
              "[2] Wittstein I S, Thiemann D R, Lima J A C, et al. Neurohumoral features of myocardial stunning due to sudden emotional stress[J]. New England Journal of Medicine, 2005, 352(6):539–548. DOI:10.1056/NEJMoa043046.",
              "[3] Sbarra D A, Whisman M A. Divorce, health, and socioeconomic status: An agenda for psychological science[J]. Current Opinion in Psychology, 2022, 43:75–78. DOI:10.1016/j.copsyc.2021.06.007.",
              "[4] StatPearls Publishing. Takotsubo cardiomyopathy[EB/OL]. National Library of Medicine, 2026. https://www.ncbi.nlm.nih.gov/books/NBK430798/.",
            ],
          },
        },

        // --- 后续关卡 7-18 请参见 game-data-part2.js ---
      ],

      ending: {
        title: '第十八拍 · 白莲重生',
        image: 'images/misc/empty_pharmacy.png',
        poem: '汉水悠悠去，白莲岁岁新。\n峨眉金顶上，云开见月明。\n曾为情所困，终得心安宁。\n愿世间女子，不困于深情。',
        message: '周芷若回到了峨眉山。在金顶之上，她望着云海翻涌、日出东方，终于放下了一切的执念。\n\n她曾是汉水渔船上那个失去父亲的小女孩，曾是灭绝师太座下最听话的弟子，曾是那个在婚礼上被抛弃的新娘，曾是那个练九阴白骨爪、走上歧途的峨眉掌门。\n\n如今，她只是周芷若。\n\n她开始著书立说，将峨眉派医学典籍整理成册，开设义诊，为四方女子诊治疾病。\n\n峨眉金顶的钟声日日响起——不是为了复仇，而是为了祝祷天下女子平安喜乐。\n\n蔡文姬以《胡笳十八拍》叹乱世流离——周芷若以十八道关卡走过自己的一生，最终明白：真正的归汉，不是回到汉水，而是回到自己的内心。',
      },
    },
  },
};
