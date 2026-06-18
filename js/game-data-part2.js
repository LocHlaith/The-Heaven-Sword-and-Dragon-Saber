/* ============================================================
   《倚天屠龙记》· 胡笳十八拍 —— 关卡数据（续）
   赵敏路线 11-18 + 周芷若路线 7-18
   ============================================================ */

(function() {

// ========================
// 赵敏 第11-18拍
// ========================
const zhaominExtra = [
  // --- 第十一拍：玄冥寒掌 ---
  {
    paiName: '第十一拍',
    title: '玄冥寒掌',
    images: [
      { src: '', frameIdx: 0, prompt: '【冰火岛·回忆】少年张无忌（约十岁）被玄冥二老以玄冥神掌击中，寒气入体，浑身颤抖，口吐白气。背景为冰雪覆盖的荒原。16:9。水墨写意，以蓝白色调为主。' },
      { src: '', frameIdx: 1, prompt: '【蝴蝶谷·胡青牛诊病】蝶谷医仙胡青牛（中年医者，清瘦儒雅）为张无忌诊脉，神色凝重。药庐中草药堆积，炉火正旺。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【寒热辨证·示意】左侧为寒证患者——面色㿠白、蜷缩畏寒；右侧为热证患者——面红目赤、烦躁不安。中医八纲辨证直观展示。16:9横幅。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【艾灸·特写】一根艾条燃烧着，烟雾缭绕。艾条靠近穴位——关元穴（脐下3寸），皮肤微红。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【张无忌·练九阳神功】张无忌在昆仑山山谷中打坐，运九阳神功逼出寒毒。周身热气腾腾，面色由青转红。16:9。水墨写意。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '张无忌幼年身中玄冥神掌，寒毒入体，命悬一线。胡青牛以毕生所学为他续命——这"寒热辨证"，正是中医八纲辨证的核心内容。', frameIdx: 1 },
      { speaker: '赵敏', text: '无忌曾说——玄冥寒掌之毒，发作时如坠冰窖，四肢百骸无不寒冷彻骨。我虽不懂武功，但知中医有"寒者热之"之法。他用九阳神功御寒，是不是便是此理？', frameIdx: 4 },
    ],
    question: {
      type: 'multiple_choice',
      text: '中医八纲辨证（阴阳、表里、寒热、虚实）是诊断的基础。关于"寒证"与"热证"在女性健康中的表现，以下哪一项是正确的？',
      options: [
        '痛经只有寒证一种类型，只需多喝热水',
        '寒证痛经（小腹冷痛、喜温喜按）与热证痛经（灼热痛、经色深红）治法不同，需辨证施治',
        '寒热辨证对女性疾病没有参考价值',
        '所有妇科疾病都用热性药治疗',
      ],
      correctIndex: 1,
      explanation: '妇科疾病中寒热辨证至关重要，治法截然相反。寒证痛经（宫寒型）：小腹冷痛、得热则减、经色暗有块、畏寒肢冷，治以温经散寒（艾附暖宫丸、少腹逐瘀汤）；常用艾灸关元、气海。热证痛经（湿热/郁热型）：小腹灼痛、经色深红质稠、口干舌红，治以清热凉血（清热调血汤）。若寒热不分，如宫寒者误用寒凉药则雪上加霜。西医对应：寒证痛经多与前列腺素升高+血管痉挛相关；热证痛经多与盆腔炎症充血相关。艾灸对宫寒型痛经有确切的温经散寒效果（临床RCT证实）。',
      references: [
        "《黄帝内经·素问·至真要大论》：“寒者热之，热者寒之。” https://www.ziyexing.com/files-5/huangdineijing/huangdineijing1_74.htm",
        "Kirsch E, Rahman S, Kerolus K, et al. Dysmenorrhea, a Narrative Review of Therapeutic Options. J Pain Res. 2024;17:2657-2666. DOI: 10.2147/JPR.S459584. PMID: 39161419.",
        "Yuan D, Liu Y, Chen Z, et al. Heat therapy for primary dysmenorrhea: a systematic review and meta-analysis. Front Med (Lausanne). 2026;12:1730505. DOI: 10.3389/fmed.2025.1730505. PMID: 41657584.",
        "《傅青主女科》（清代·傅山），“经水将来脐下疼痛（二十四）”篇。维基文库：https://zh.wikisource.org/zh-hans/傅青主女科",
      ],
    },
  },

  // --- 第十二拍：大都宫闱 ---
  {
    paiName: '第十二拍',
    title: '大都宫闱',
    images: [
      { src: '', frameIdx: 0, prompt: '【元大都·皇宫】元大都（今北京）皇宫内景，金碧辉煌，梁枋彩画。赵敏（蒙古贵族装束）穿过宫廊，远处可见太监宫女。16:9。工笔重彩，元代宫廷画风。' },
      { src: '', frameIdx: 1, prompt: '【御药房】元宫御药房，满墙药柜标注蒙汉双语。各种名贵药材——人参、鹿茸、麝香、朱砂、雄黄等。一位御医正在配药。16:9。工笔静物。' },
      { src: '', frameIdx: 2, prompt: '【毒药辨识】案上陈列多种有毒药材——乌头（附子）、马钱子、砒霜（砒石）、朱砂。旁边有银针试毒工具。标注每味药材的拉丁名和毒性。16:9。工笔静物。' },
      { src: '', frameIdx: 3, prompt: '【赵敏·识毒】赵敏手持一味药材对着烛光观察。她自幼在王府长大，耳濡目染学会辨识奇毒。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【大都会·俯瞰】元大都鸟瞰图——棋盘式城市格局，白塔寺白塔矗立，皇宫琉璃瓦在阳光下闪耀。16:9横幅。界画风格。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '大都皇宫中，赵敏自幼耳濡目染——蒙古贵族争权夺利，毒药暗杀时有发生。她虽不愿参与，却也学会了辨识各种毒物。', frameIdx: 0 },
      { speaker: '赵敏', text: '（对医师）先生，我父王府中有味药唤作"乌头"——据说治风湿有奇效，然用量稍过便能致命。此药究竟有毒无毒？', frameIdx: 3 },
      { speaker: '御医', text: '郡主问得好。乌头大热，有剧毒，然炮制得法、配伍得当，却是治疗风寒湿痹之要药。正如《神农本草经》所言——"药有酸咸甘苦辛五味，又有寒热温凉四气，及有毒无毒。"世间万物，用之得当即为良药，用之失当即为毒药。', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '御医所言"乌头有剧毒，炮制得法可为良药"，体现了中医"以毒攻毒"的思想。以下关于中药毒性认识的说法，哪一项是<strong>不正确</strong>的？',
      options: [
        '附子（乌头子根）经炮制后可大幅降低乌头碱含量',
        '朱砂（硫化汞）在中医中曾用于安神，但因含汞现已严格控制使用',
        '所有中草药都无毒副作用，可长期随意服用',
        '马钱子含士的宁（番木鳖碱），过量可致惊厥死亡',
      ],
      correctIndex: 2,
      explanation: '"是药三分毒"——这是中医最基本的用药安全理念。任何一种药物（包括中药、西药）都有治疗作用和不良反应。常见有毒中药：乌头类（含乌头碱→心律失常）、马钱子（含士的宁→惊厥）、朱砂（含硫化汞→肾损害）、雄黄（含砷→多器官毒性）。这些药物在现代临床中严格限制使用。安全用药原则：①经正规炮制减毒（如附子炮制后毒性降至1/100-1/1000）；②严格剂量控制；③合理配伍减毒（四逆汤中甘草配伍附子）；④在医师指导下使用。中成药如"六味地黄丸""加味逍遥丸"等常规剂量下安全，但也不宜长期滥用。',
      references: [
        "《神农本草经》：“药有酸咸甘苦辛五味，又有寒热温凉四气，及有毒无毒。”中医笈成：https://jicheng.tw/tcm/book/神農本草經_2/index.html",
        "国家药监局、国家卫生健康委. 关于颁布2025年版《中华人民共和国药典》的公告（2025年第29号）. 2025-03-20. https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjyp/20250325183810122.html",
        "Centers for Disease Control and Prevention. Poisoning Associated with Consumption of a Homemade Medicinal Drink — California, 2022. MMWR. https://www.cdc.gov/mmwr/volumes/71/wr/mm7116a2.htm",
        "Lawson C, McCabe DJ, Feldman R. A Narrative Review of Aconite Poisoning and Management. J Intensive Care Med. 2025 Aug. PMID: 38613376.",
      ],
    },
  },

  // --- 第十三拍：蝴蝶谷中 ---
  {
    paiName: '第十三拍',
    title: '蝴蝶谷中',
    images: [
      { src: '', frameIdx: 0, prompt: '【蝴蝶谷·全景】山谷中百花盛开，蝴蝶飞舞。谷中有一座朴素药庐，烟囱冒着青烟。远处山峦叠翠。16:9横幅。青绿山水。' },
      { src: '', frameIdx: 1, prompt: '【胡青牛药庐】药庐内景——药香弥漫，墙上挂满经络图，案上陈设脉枕和银针。胡青牛坐在蒲团上为病人诊脉。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【望闻问切·四诊图】示意中医四诊——望（观察面色舌苔）、闻（听声音嗅气味）、问（询问病史症状）、切（寸口脉诊）。四个分格展示。16:9横幅。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【舌诊·特写】几种典型舌象——正常舌（淡红舌薄白苔）、血瘀舌（紫暗有瘀斑）、阴虚舌（红绛少苔）、湿热舌（黄腻苔）。16:9。工笔写实。' },
      { src: '', frameIdx: 4, prompt: '【赵敏·学医】赵敏坐在胡青牛对面，认真记录。案上展开一本手抄医书。蝴蝶飞入窗来，停在她的肩上。16:9。工笔人物。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '蝴蝶谷——蝶谷医仙胡青牛隐居之所。当年他曾在此救治张无忌，今日赵敏踏访遗址，探寻医道真谛。', frameIdx: 0 },
      { speaker: '赵敏', text: '（抚摸着褪色的医书）胡先生当年教无忌——"望闻问切"四诊合参。我虽不学医，却也好奇：这"望"字，究竟能看出什么门道？', frameIdx: 1 },
      { speaker: '张无忌', text: '胡师教我，望诊首重"望面色"与"望舌"。女子面黄肌瘦、唇甲苍白——多是血虚；面红目赤、舌红苔黄——多是实热；面色晦暗、舌紫有瘀斑——多是血瘀。望而知之谓之神，切而知之谓之巧。', frameIdx: 2 },
    ],
    question: {
      type: 'short_answer',
      text: '中医"望闻问切"四诊是诊断的基础，其中"望诊"包括望面色、望舌苔等。作为女性，你可以通过观察面色和舌苔来初步了解自己的身体状况。请谈谈：你对"面色"与健康的理解是什么？你是否注意过自己或身边女性的面色变化（如面色萎黄、苍白、潮红、晦暗等），这些可能与什么身体状况有关？',
      deepseekPrompt: '你乃是胡青牛再传弟子，隐居于蝴蝶谷中。请用半文半白、深入浅出的语言，与求医者讨论"望诊"（特别是面色与舌诊）在女性健康中的应用。每次回答150-300字，象胡青牛一样既严谨又温和，适当时追问以了解对方更多症状。',
      chatOpening: '蝴蝶谷中，百花盛开。贫道观汝气色，便知来意——面色者，气血之华也。女子面若桃花，气血充足；面色萎黄如土，脾虚血亏也；面色㿠白如纸，气不摄血也。汝且说说——近日可曾留意自己面色变化？月事之时，面色可有不同？',
      explanation: '望诊是中医四诊之首，具有直观、无创的特点。女性自我望诊要点：①面色——红润有光泽为健康；苍白为血虚/贫血（查血红蛋白）；萎黄为脾虚/营养不良；潮红为阴虚内热/更年期；晦暗为肾虚/血瘀。②舌诊——淡红舌薄白苔为正常；舌淡胖有齿痕为脾虚湿盛（常见于月经稀发、带下病）；舌紫暗有瘀斑为血瘀（常见于痛经、子宫内膜异位症）；舌红少苔为阴虚（常见于更年期潮热盗汗）。③唇色——淡白为血虚；紫暗为血瘀或心功能不全。望诊可初步筛查问题，但确诊仍需结合其他三诊（闻、问、切）及现代医学检查。',
      references: [
        "《难经·六十一难》：“望而知之谓之神，闻而知之谓之圣，问而知之谓之工，切脉而知之谓之巧。”中国哲学书电子化计划：https://ctext.org/nan-jing/shen-sheng-gong-qiao/zh",
        "《黄帝内经·素问·金匮真言论》：“东方青色，入通于肝……南方赤色，入通于心……中央黄色，入通于脾……西方白色，入通于肺……北方黑色，入通于肾。”中国哲学书电子化计划：https://ctext.org/huangdi-neijing/jin-gui-zhen-yan-lun/zhs",
        "Matos LC, Machado JP, Monteiro FJ, Greten HJ. Can Traditional Chinese Medicine Diagnosis Be Parameterized and Standardized? A Narrative Review. Healthcare (Basel). 2021;9(2):177. PMID: 33562368. PMCID: PMC7914658.",
        "Feng L, Xiao W, Wen C, Deng Q. Objectification of Tongue Diagnosis in Traditional Medicine, Data Analysis, and Study Application. J Vis Exp. 2023;(194):e65140. DOI: 10.3791/65140. PMID: 37125807.",
      ],
    },
  },

  // --- 第十四拍：光明顶上 ---
  {
    paiName: '第十四拍',
    title: '光明顶上',
    images: [
      { src: '', frameIdx: 0, prompt: '【光明顶·总坛】明教光明顶总坛，高大的石殿中火盆燃烧。墙上刻有明教圣火图腾。光线从穹顶射入，形成光束。16:9横幅。水墨重彩。' },
      { src: '', frameIdx: 1, prompt: '【六大派·围攻】六大门派高手轮番上阵——少林、武当、峨眉、昆仑、崆峒、华山各展绝技。张无忌立于中央独战群雄。16:9。水墨写意。' },
      { src: '', frameIdx: 2, prompt: '【运动损伤·示意】人体经络图上标注常见运动损伤部位——肩（肩井穴）、腰（命门穴）、膝（膝眼穴）、腕（阳池穴）。附肌肉解剖图。16:9。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【推拿复位】胡青牛式的医者为伤者推拿——手法：揉、拿、点、按。配合拔罐和药酒。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【光明顶·战歇】激战间隙，张无忌打坐调息。真气运转，汗出如雨。赵敏以手巾为他擦汗。16:9。工笔人物。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '光明顶大战——张无忌以一己之力独战六大门派。乾坤大挪移虽威力无穷，但对身体消耗极大。', frameIdx: 0 },
      { speaker: '赵敏', text: '无忌，你这乾坤大挪移虽厉害，但每用一次都大汗淋漓、精疲力尽——这岂非与女子产后大伤元气相似？', frameIdx: 4 },
      { speaker: '张无忌', text: '你倒会比喻。不过确有相似之处——都是体力极度消耗，气血大亏。练武之人，尤其女子习武，更需注意运动适度，防止损伤经络筋骨。', frameIdx: 3 },
    ],
    question: {
      type: 'multiple_choice',
      text: '女性运动不当可导致运动损伤。以下关于女性运动与健康的说法，哪一项是正确的？',
      options: [
        '女性经期绝对不能运动',
        '凯格尔运动（盆底肌训练）对女性盆底健康尤其重要，可辅助防治尿失禁等盆底功能障碍',
        '运动量越大对健康越有利',
        '女性练力量运动会变得"太壮"，应避免',
      ],
      correctIndex: 1,
      explanation: '盆底功能障碍（尿失禁、盆腔器官脱垂）在经产妇与围绝经期女性中较常见，盆底肌训练（凯格尔运动）是尿失禁等问题的一线保守治疗和康复方法之一。它并非"女性特有"运动，男性也有盆底肌；但妊娠、分娩和绝经相关变化使女性尤其需要学习正确收缩与放松。关于其他选项：①经期可适度运动（散步、瑜伽、八段锦），但应避免剧烈运动和倒立类动作；②运动量应循序渐进，过度运动可导致功能性下丘脑性闭经（FHA，女性运动员三联征之一）；③女性适当力量训练可增加骨密度、提高基础代谢率、改善体成分。中医强调"动静结合"，八段锦、五禽戏、太极拳等为女性养生的上佳之选。',
      references: [
        "Woodley SJ, et al. Comparisons of approaches to pelvic floor muscle training for urinary incontinence in women. Cochrane Database Syst Rev. 2024;12:CD009508. PMID: 39704322.",
        "American College of Obstetricians and Gynecologists. Urinary Incontinence FAQ: Kegel exercises. https://www.acog.org/womens-health/faqs/urinary-incontinence",
        "National Institute for Health and Care Excellence. Urinary incontinence and pelvic organ prolapse in women: management (NG123). 2019, updated. https://www.nice.org.uk/guidance/ng123",
        "Mountjoy M, et al. 2023 International Olympic Committee consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023;57(17):1073-1098. DOI: 10.1136/bjsports-2023-106994.",
      ],
    },
  },

  // --- 第十五拍：波斯异术 ---
  {
    paiName: '第十五拍',
    title: '波斯异术',
    images: [
      { src: '', frameIdx: 0, prompt: '【波斯明教·总坛】波斯风格的华丽殿宇，穹顶镶嵌宝石，彩色玻璃窗洒下绚丽光影。小昭（波斯圣女装束）坐在圣火旁。16:9。异域重彩，融合波斯细密画风。' },
      { src: '', frameIdx: 1, prompt: '【波斯医药】案上陈列波斯特色药材——藏红花（番红花）、乳香、没药、玫瑰水、阿魏。旁边有波斯文药典。16:9。工笔静物。' },
      { src: '', frameIdx: 2, prompt: '【小昭·诊病】小昭用波斯流传的"体液学说"为病人诊病——观察面色和体液特征。旁边有中医生正在记录。16:9。工笔人物。' },
      { src: '', frameIdx: 3, prompt: '【丝绸之路·药商】丝绸之路上的商队，驼背上驮着药材——从波斯到中原，从印度到西藏。文化交流的壮阔图景。16:9横幅。重彩写意。' },
      { src: '', frameIdx: 4, prompt: '【藏红花·特写】藏红花（番红花）——红色柱头在水中散开，染出一片金黄。旁边标注其原产地（伊朗）、活性成分（藏红花素、藏红花酸）。16:9。工笔静物。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '小昭远赴波斯继任明教教主。赵敏与张无忌收到她托商队带来的书信和异域药材……', frameIdx: 0 },
      { speaker: '赵敏', text: '（拆开信）小昭说波斯医术与中原不同——他们以"四液"（血液、黏液、黄胆汁、黑胆汁）解释人体，倒是与我蒙古萨满的"三体液"之说有几分契合……还有一味唤作"番红花"的药材，说对女子经期颇有裨益。', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '波斯医学中常用的藏红花（番红花）在中医和现代医学中均有重要地位。以下关于藏红花的说法，哪一项是正确的？',
      options: [
        '藏红花与普通红花（草红花）完全相同',
        '藏红花可用于治疗经闭、痛经、产后瘀阻，但孕妇禁用',
        '藏红花价格便宜，可大量服用',
        '藏红花只在中国有产',
      ],
      correctIndex: 1,
      explanation: '藏红花（Crocus sativus，鸢尾科）与草红花（Carthamus tinctorius，菊科）是两种不同植物。藏红花取雌蕊柱头入药，产量极低（约15万朵花产1kg干柱头），故价格昂贵（"红色黄金"）。中医认为藏红花性甘微寒，归心肝经，功效活血化瘀、凉血解毒、解郁安神。现代研究证实其活性成分藏红花素（crocin）和藏红花醛（safranal）具有：①抗抑郁作用（多项RCT证实对轻中度抑郁有效）；②缓解经前期综合征（PMS）；③改善原发性痛经。因有活血化瘀和兴奋子宫作用，孕妇禁用。主要产自伊朗（>90%）、西班牙、印度克什米尔，中国西藏有少量种植。',
      references: [
        "国家药监局、国家卫生健康委. 关于颁布2025年版《中华人民共和国药典》的公告（2025年第29号）. 2025-03-20. https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjyp/20250325183810122.html",
        "Mohammadi MM, Karimi Z. Effect of saffron on premenstrual syndrome and dysmenorrhea: a systematic review and meta-analysis. Korean J Fam Med. 2026;47(1):69-80. DOI: 10.4082/kjfm.24.0259. PMID: 41151539. PMCID: PMC12835668.",
        "Hasheminasab FS, Azimi M, Raeiszadeh M, et al. Therapeutic effects of saffron (Crocus sativus L.) on female reproductive system disorders: A systematic review. Phytother Res. 2024. PMID: 38558480.",
        "卫生福利部国家中医药研究所. 番红花与红花. https://www.nricm.edu.tw/p/404-1000-5146.php?Lang=zh-tw",
      ],
    },
  },

  // --- 第十六拍：襄阳遗梦 ---
  {
    paiName: '第十六拍',
    title: '襄阳遗梦',
    images: [
      { src: '', frameIdx: 0, prompt: '【襄阳城·古城墙】襄阳古城墙巍峨伫立，砖石斑驳，记录着元宋战争的痕迹。夕阳西下，城墙被染成金色。城头旌旗猎猎。16:9横幅。水墨重彩。' },
      { src: '', frameIdx: 1, prompt: '【郭靖黄蓉·雕像】襄阳城中的郭靖黄蓉纪念碑——郭靖持弓，黄蓉持剑，并肩而立。碑文记载二人守城殉国的故事。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【战地救护·示意】战争场景中的救护——担架、绷带、夹板。一位女医者为伤兵包扎。画面强调急救四要素：止血、包扎、固定、搬运。16:9。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【赵敏·缅怀】赵敏站在城楼上，望着古战场，面色肃穆。风吹动她的衣袂。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【襄阳·汉水】汉水从襄阳城旁缓缓流过，江面上渔船往来。画面宁静而苍茫。16:9横幅。青绿山水。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '途经襄阳——这座曾由大侠郭靖、黄蓉镇守数十年的城池，见证了宋元交替的血雨腥风。赵敏身为蒙古郡主，面对这座被蒙古大军攻陷的城池，心绪复杂。', frameIdx: 0 },
      { speaker: '赵敏', text: '（抚着城砖，叹息道）郭大侠、黄女侠以死守城……乱世之中，女子在战火中最是受难。无忌，若有一日天下大乱，你教我的急救之法——止血、包扎、正骨——或许能救下几条人命。', frameIdx: 3 },
    ],
    question: {
      type: 'multiple_choice',
      text: '赵敏提到战地急救的基本技能。日常生活中，女性也需掌握一些急救知识，尤其是面对妇女儿童常见意外的处理。以下关于家庭急救的说法，哪一项是<strong>错误</strong>的？',
      options: [
        '鼻出血时应仰头并塞住鼻孔',
        '烫伤后应立即用流动清水冲洗至少20分钟',
        '心肺复苏（CPR）按压深度为5-6厘米，频率100-120次/分',
        '海姆立克急救法用于气道异物梗阻',
      ],
      correctIndex: 0,
      explanation: '鼻出血时仰头是常见的错误做法！仰头会使血液倒流至咽喉，可能引起呛咳、恶心甚至误吸入肺；塞住鼻孔只是暂时不流血，取出后往往再次出血。正确做法：①身体前倾，头稍低；②用拇指和食指捏住鼻翼（软骨部分）持续压迫10-15分钟；③同时张口呼吸；④可在前额或鼻根部冷敷帮助血管收缩。如果压迫15分钟仍不止血，或反复大量出血，需就医。其他选项正确：烫伤冷水冲、CPR按压深度5-6cm/频率100-120次/分、海姆立克法用于气道异物——这些都是国际通用的急救标准。',
      references: [
        "American Heart Association; American Red Cross. 2024 American Heart Association and American Red Cross Guidelines for First Aid. Circulation. 2024. DOI: 10.1161/CIR.0000000000001281.",
        "American Heart Association. 2025 Guidelines for CPR and Emergency Cardiovascular Care. Circulation. 2025;152(suppl 2). DOI: 10.1161/CIR.0000000000001372. PMID: 41122893. https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
        "Mayo Clinic. Nosebleeds: First aid. https://www.mayoclinic.org/first-aid/first-aid-nosebleeds/basics/art-20056683",
        "American Red Cross. First Aid Guidelines: Nosebleed. https://www.redcross.org/take-a-class/resources/guidelines",
      ],
    },
  },

  // --- 第十七拍：终南问道 ---
  {
    paiName: '第十七拍',
    title: '终南问道',
    images: [
      { src: '', frameIdx: 0, prompt: '【终南山·全貌】终南山群峰叠嶂，云雾缭绕。古木参天处隐约可见道观和古墓入口。山间溪流淙淙。16:9横幅。青绿重彩山水。' },
      { src: '', frameIdx: 1, prompt: '【古墓派·遗址】活死人墓入口——石壁上"活死人墓"四字斑驳。藤蔓垂挂，青苔遍布。一种幽静苍凉的氛围。16:9。水墨写意。' },
      { src: '', frameIdx: 2, prompt: '【养生·示意】中国传统养生方式——五禽戏、八段锦、太极拳的动作示意图。背景为终南山瀑布。16:9横幅。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【赵敏·打坐】赵敏在终南山古松下盘膝打坐，周围落英缤纷。她面色平和，呼吸均匀。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【终南·夕阳】终南山日落，层林尽染金色。远处有仙鹤飞过——"终南阴岭秀，积雪浮云端"。16:9横幅。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '终南山——当年杨过与小龙女隐居之地。赵敏寻访古墓遗址，问道于山中隐士。', frameIdx: 0 },
      { speaker: '赵敏', text: '道长远在终南修行，可知女子养生最重什么？我读了些医书，说是"女子以血为本，以肝为先天"——可这与养生有何关联？', frameIdx: 3 },
      { speaker: '隐士', text: '郡主好问。女子养生，贵在"养阴血、疏肝气、固肾精"三事。养阴血——避熬夜、忌过劳、适度食补（如四物汤、阿胶）；疏肝气——调情志、少嗔怒、常微笑；固肾精——节房劳、暖腰腹、灸关元。此三事若能持守，虽年至七七（四十九岁）天癸竭，亦可体健神清，老而不衰。', frameIdx: 2 },
    ],
    question: {
      type: 'short_answer',
      text: '中医养生学是中华民族的瑰宝。隐士所言"养阴血、疏肝气、固肾精"是女性养生的三大要义。请结合你自身或身边女性的经验，谈谈你对女性养生的理解。你认为现代女性在快节奏生活中，如何将中医养生智慧融入日常？',
      deepseekPrompt: '你是终南山修行的女冠（女道士），精通养生之道。请用带有道家智慧、半文半白的语言，与求教者讨论女性养生之法。回答150-300字。对方若有现代生活烦恼，给予理解的同时点出养生要义；若对方有独到见解，不吝称赞并深入探讨。',
      chatOpening: '无量寿福。贫道在这终南山上修行数十载，见的女子病症，十之八九与"不知养"有关。汝既来问道，贫道且问：汝以为，女子养生之要，与男子有何不同？平日里可有养护自身的习惯？',
      explanation: '女性养生三大核心：①养阴血——女性一生经历经、带、胎、产，耗血伤血，补血养血是终身功课。饮食：红枣、桂圆、当归、阿胶、黑芝麻、动物肝脏（富含铁和B12）。避免：熬夜（最伤阴血）、过度减肥节食。②疏肝气——女性情绪体验更丰富，"肝郁"是百病之源。方法：规律运动（八段锦、瑜伽、快走）、社交倾诉、培养爱好、按摩太冲穴。注意：长期压抑情绪→乳腺增生、甲状腺结节、月经不调。③固肾精——肾为先天之本，主生殖与衰老。方法：护腰腹保暖、艾灸关元/三阴交、避免房劳过度、入冬后食用黑色食物（黑豆、黑芝麻、黑木耳）。现代女性养生需与工作生活节奏结合——午休15分钟养心、通勤听舒缓音乐疏肝、睡前泡脚温肾。',
      references: [
        "《黄帝内经·素问·上古天真论》：“法于阴阳，和于术数，食饮有节，起居有常，不妄作劳。”中国哲学书电子化计划：https://ctext.org/huangdi-neijing/shang-gu-tian-zhen-lun/zhs",
        "National Center for Complementary and Integrative Health. Yoga for Health: What the Science Says. 2024. https://www.nccih.nih.gov/health/providers/digest/yoga-for-health-science",
        "National Center for Complementary and Integrative Health. Sleep Disorders and Complementary Health Approaches. https://www.nccih.nih.gov/health/sleep-disorders-and-complementary-health-approaches",
        "Li X, et al. Qigong and Tai Chi on Human Health: An Overview of Systematic Reviews. Am J Chin Med. 2022. PMID: 36266755.",
      ],
    },
  },

  // --- 第十八拍：天下归心 ---
  {
    paiName: '第十八拍',
    title: '天下归心',
    images: [
      { src: '', frameIdx: 0, prompt: '【冰火岛·归隐】冰火岛全景——冰雪与温泉共存，绿洲在白色世界中格外鲜艳。一座简朴木屋，炊烟袅袅。16:9横幅。青绿重彩。' },
      { src: '', frameIdx: 1, prompt: '【赵敏·牧羊】赵敏在草原上牧羊，蒙古袍在风中飘扬。远处雪山连绵，近处羊群如云。她脸上是安详满足的微笑。16:9横幅。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【张无忌·练功】张无忌在海边礁石上练太极——动作圆融，以柔克刚。远处海天相接，极光飘舞。16:9。水墨写意。' },
      { src: '', frameIdx: 3, prompt: '【冰火岛·日落】大漠夕阳，赵敏与张无忌并肩而坐。毡房外燃起篝火，映红两人面庞。画面宁静、辽阔、温暖。16:9横幅。写意重彩。' },
      { src: '', frameIdx: 4, prompt: '【终章·天下太平】象征性画面——病人康复（"架药生尘"）、儿童嬉戏、农田丰收。远处冰火岛如世外桃源。表达"人间无病、天下太平"的愿景。16:9横幅。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '十八道关卡，十八次考验。赵敏从蒙古郡主，到明教教主夫人，再到冰火岛的归隐者——她的每一步，都走在自己选择的路上。', frameIdx: 0 },
      { speaker: '赵敏', text: '（望着大漠夕阳，轻声道）无忌，我这一生，最庆幸的——便是当年在绿柳山庄地牢中遇见了你。那些江湖恩怨、家国纷争，都已成了前尘往事。如今只愿——天下太平，人间无病。', frameIdx: 3 },
      { speaker: '张无忌', text: '敏敏，你从不会医术，到如今通晓女子养生之道——若有一日，能将这十八关中所学的医道整理成书，传给天下女子，何尝不是一件功德？', frameIdx: 1 },
      { speaker: '赵敏', text: '（微微一笑）你倒提醒了我。我虽生在王侯之家，却见过太多民间女子的苦楚——经期无人关照、产后无人照料、老来孤苦伶仃……若有此书，愿她们能多爱惜自己一些。', frameIdx: 0 },
    ],
    question: {
      type: 'multiple_choice',
      text: '赵敏希望将十八关中所学医道整理成书，帮助天下女子。以下关于女性全生命周期健康管理的说法，哪一项最全面地概括了女性健康的核心要点？',
      options: [
        '女性只需要关注生育期的健康',
        '女性全生命周期健康管理应从青春期开始，涵盖育龄期、围绝经期和老年期，包括生理、心理和社会适应三个维度',
        '女性健康管理只需要做妇科检查',
        '女性过了生育年龄就不需要特别关注健康了',
      ],
      correctIndex: 1,
      explanation: '世界卫生组织（WHO）强调以全生命周期（life-course approach）理解健康：青春期、育龄期、围绝经期与老年期彼此相连，不应只在生病或备孕时才关注身体。各阶段重点：①青春期（10-19岁）——月经健康教育、HPV疫苗接种（9-14岁为重要窗口）、营养指导；②育龄期（20-49岁）——孕前保健、定期妇科体检、按国家指南进行宫颈癌筛查、乳腺筛查与乳房自我觉察；③围绝经期（45-55岁）——更年期症状管理（中医调补肝肾、西医个体化评估HRT）、骨质疏松筛查（DXA）、心血管风险评估；④老年期（60岁+）——防跌倒、认知功能维护、盆底功能障碍管理、肿瘤筛查。中医"治未病"思想与全生命周期管理高度契合——"圣人不治已病治未病，不治已乱治未乱"。',
      references: [
        "Every Woman Every Child / WHO. Global Strategy for Women's, Children's and Adolescents' Health (2016-2030). https://platform.who.int/data/maternal-newborn-child-adolescent-ageing/global-strategy-data",
        "World Health Organization. Women's health topic page. https://www.who.int/health-topics/women-s-health",
        "PAHO/WHO. Healthy Life Course. https://www.paho.org/en/topics/healthy-life-course",
        "国务院. 中国妇女发展纲要（2021—2030年）. 国发〔2021〕16号. 2021-09-08. https://www.mee.gov.cn/zcwj/gwywj/202109/t20210927_954260.shtml",
        "《黄帝内经·素问·四气调神大论》：“圣人不治已病，治未病，不治已乱，治未乱。”中国哲学书电子化计划：https://ctext.org/huangdi-neijing/si-qi-diao-shen-da-lun/zhs",
      ],
    },
  },
];

// ========================
// 周芷若 第7-18拍
// ========================
const zhouzhiruoExtra = [
  // --- 第七拍：九阴白骨 ---
  {
    paiName: '第七拍',
    title: '九阴白骨',
    images: [
      { src: '', frameIdx: 0, prompt: '【峨眉·密室】周芷若在密室中修炼九阴白骨爪。烛光摇曳中，她双手呈爪状，指尖泛着幽光。墙上投下狰狞的影子。16:9。水墨重彩。' },
      { src: '', frameIdx: 1, prompt: '【手部·特写】周芷若的双手——指尖有血迹，指甲变形。过度训练后骨骼和关节的损伤清晰可见。16:9。工笔写实。' },
      { src: '', frameIdx: 2, prompt: '【练功·后遗症】周芷若独自揉搓酸痛的指关节，表情痛苦。旁边放着一本翻开的《九阴真经》。16:9。工笔人物。' },
      { src: '', frameIdx: 3, prompt: '【过度训练·示意】人体骨骼肌肉图——标注腕管、指关节、肌腱等过度使用损伤部位。对比正常关节和关节炎关节。16:9。工笔写实。' },
      { src: '', frameIdx: 4, prompt: '【峨眉·月夜】月下峨眉山，周芷若独坐练功场。月光照着她疲惫的身影。远处传来钟声。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '失去爱情后的周芷若，将全部精力投入九阴白骨爪的修炼。但她不知道，过度训练正在摧毁她的双手——正如执念正在摧毁她的内心。', frameIdx: 0 },
      { speaker: '周芷若', text: '（揉着剧痛的指关节）这九阴白骨爪……每练一日，手指便痛上三分。可若不练，如何胜过赵敏？如何在武林中立足？', frameIdx: 2 },
    ],
    question: {
      type: 'multiple_choice',
      text: '周芷若的指关节疼痛可能与过度使用导致的腱鞘炎、关节炎有关。以下关于女性关节健康的说法，哪一项是正确的？',
      options: [
        '关节疼痛是小问题，忍一忍就过去了',
        '女性患类风湿关节炎和骨关节炎的风险高于男性，需重视早期症状',
        '运动对关节只有伤害没有益处',
        '关节疼痛只需热敷即可，无需就医',
      ],
      correctIndex: 1,
      explanation: '女性关节疾病负担显著高于男性：①类风湿关节炎（RA）——女性患病率为男性的2-3倍，与雌激素对免疫系统的调节有关，好发于30-50岁；②骨关节炎（OA）——尤其在绝经后，女性手部、膝部OA发病率显著上升（雌激素对软骨有保护作用）；③狭窄性腱鞘炎（"妈妈手"、De Quervain病）在女性中也更常见。早期症状：晨僵（>30分钟需警惕RA）、关节肿痛、活动受限。防治：①适度运动（游泳、太极拳）对关节有保护作用，而非伤害；②保持健康体重（减重1kg可减少膝OA风险4%）；③中医以"通络止痛"为法（独活寄生汤、针灸温针）；④及时就医，RA早期干预可改变疾病进程（"Window of Opportunity"概念）。',
      references: [
        "Di Matteo A, Bathon JM, Emery P. Rheumatoid arthritis. Lancet. 2023;402(10416):2019-2033. DOI: 10.1016/S0140-6736(23)01525-8. PMID: 38240831.",
        "Hunter DJ, Bierma-Zeinstra S. Osteoarthritis. Lancet. 2019;393(10182):1745-1759. DOI: 10.1016/S0140-6736(19)30417-9. PMID: 31034380.",
        "Tang S, Zhang C, Oo WM, et al. Osteoarthritis. Nat Rev Dis Primers. 2025;11(1):10. DOI: 10.1038/s41572-025-00594-6. PMID: 39948092.",
        "中华中医药学会骨伤科分会. 中医骨伤科临床诊疗指南·膝痹病（膝骨关节炎）. 康复学报, 2019, 29(3):1-7. https://guideline.whuznhmedj.com/content/8065",
      ],
    },
  },

  // --- 第八拍：峨眉掌门 ---
  {
    paiName: '第八拍',
    title: '峨眉掌门',
    images: [
      { src: '', frameIdx: 0, prompt: '【峨眉·掌门大殿】峨眉派大殿，周芷若身着掌门服饰（白衣金边）坐于正位。殿下峨眉弟子排列整齐。殿外云海翻涌。16:9横幅。工笔重彩。' },
      { src: '', frameIdx: 1, prompt: '【周芷若·批阅公文】周芷若深夜批阅公文，烛光映照她疲惫的面容。案上文书堆积如山——掌门之职，远非习武那么简单。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【峨眉·义诊】周芷若组织峨眉弟子为周边村民义诊——她虽练邪功，却初心未泯。老妇人感激地握着她的手。16:9。工笔人物。' },
      { src: '', frameIdx: 3, prompt: '【女性领导力·象征】周芷若独立于峨眉金顶，身后日光照亮云海。象征女性领导力的觉醒——孤独而高远。16:9。水墨写意。' },
      { src: '', frameIdx: 4, prompt: '【峨眉·晨练】峨眉女弟子晨练剑法，白衣翩跹如仙。周芷若在旁指导。16:9横幅。工笔重彩。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '周芷若成为峨眉掌门后，日夜操劳——既要处理派务，又要修炼武功，还要应对江湖风波。她常常半夜还在批阅文书，日渐憔悴。', frameIdx: 1 },
      { speaker: '周芷若', text: '（对镜自照，看到眼角的细纹）不过数月光景，却仿佛老了十年。掌门之职——比练九阴白骨爪更消磨人啊。', frameIdx: 0 },
    ],
    question: {
      type: 'multiple_choice',
      text: '中年职业女性——如同周芷若执掌峨眉——常面临职场压力、家庭责任与自我健康管理的三重挑战。以下关于职业女性健康管理的说法，哪一项是合理的？',
      options: [
        '为了事业成功牺牲健康是值得的',
        '合理安排作息、定期体检、保持社交支持是职业女性健康管理的关键',
        '女性领导应该像男性一样强硬，不能示弱',
        '熬夜和快餐是高效工作的合理代价',
      ],
      correctIndex: 1,
      explanation: '职业女性的健康管理是一个系统性课题：①定期体检——至少每年一次（包括妇科检查、乳腺超声、宫颈癌筛查、甲状腺功能、血糖血脂等基础项目）；②睡眠管理——子时（23:00）前入睡，保证7-8小时睡眠，睡眠不足与乳腺癌风险升高相关（国际癌症研究机构已将"涉及昼夜节律紊乱的轮班工作"列为2A类致癌物）；③压力管理——慢性压力导致皮质醇持续升高，影响甲状腺、卵巢功能，建议正念冥想、规律运动（每周≥150分钟中等强度）、培养兴趣爱好；④社交支持——研究表明，良好社交关系是女性健康的重要保护因素。中医角度，长期过劳→"劳则气耗"→气虚血亏→早衰。逍遥散类方剂可辅助调理。',
      references: [
        "International Agency for Research on Cancer. IARC Monographs Volume 124: Night Shift Work. 2020. https://publications.iarc.who.int/Book-And-Report-Series/Iarc-Monographs-On-The-Identification-Of-Carcinogenic-Hazards-To-Humans/Night-Shift-Work-2020",
        "Zhang Y, Papantoniou K. Night shift work and its carcinogenicity. Lancet Oncol. 2019;20(10):e550. DOI: 10.1016/S1470-2045(19)30578-9. PMID: 31578992.",
        "Shanafelt TD, et al. Changes in Burnout and Satisfaction With Work-Life Integration in Physicians During the First 2 Years of the COVID-19 Pandemic. Mayo Clin Proc. 2022;97(12):2248-2258. DOI: 10.1016/j.mayocp.2022.09.002. PMID: 36229269.",
        "World Health Organization. Burn-out an occupational phenomenon: International Classification of Diseases. https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon",
      ],
    },
  },

  // --- 第九拍：屠狮之会 ---
  {
    paiName: '第九拍',
    title: '屠狮之会',
    images: [
      { src: '', frameIdx: 0, prompt: '【少林·屠狮场】少林寺演武场万人围观，周芷若以九阴白骨爪连败数人。她面色苍白，眼神凌厉。16:9。水墨重彩。' },
      { src: '', frameIdx: 1, prompt: '【黄衫女子·出场】黄衫女子从天而降，衣袂飘飘。她身后跟着数名白衣侍女。周芷若抬头仰望，神色惊愕。16:9。工笔重彩。' },
      { src: '', frameIdx: 2, prompt: '【失眠·示意】深夜，周芷若辗转反侧。窗外月明，屋内烛灭。脑海中浮现各种画面——师父的遗言、赵敏的脸、张无忌的离开。16:9。水墨写意。' },
      { src: '', frameIdx: 3, prompt: '【安神茶·特写】一杯安神茶——酸枣仁、百合、茯神、夜交藤等药材在水中舒展。旁边焚着一炉沉香。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【少林·黎明】少林寺钟楼，晨钟响起。第一缕阳光照在塔尖——新的一天开始，但周芷若一夜未眠。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '屠狮大会上，周芷若以九阴白骨爪横扫群雄。然而白天越是强大，夜晚越是恐惧——她已连续多日失眠，噩梦不断。', frameIdx: 0 },
      { speaker: '周芷若', text: '（深夜独白）每一个夜晚，我都会梦到师父……梦到灵蛇岛上殷离的脸……梦到濠州喜堂上那一幕……我何尝不想安睡？可一闭眼，便是这些……', frameIdx: 2 },
    ],
    question: {
      type: 'short_answer',
      text: '失眠是许多女性面临的困扰——尤其是经历重大生活事件后。中医将失眠归为"不寐"范畴，认为与心、肝、脾、肾等脏腑功能失调有关。请谈谈：你在生活中是否经历过失眠？你认为女性的失眠与情绪（如周芷若的愧疚、愤怒、恐惧）有何关联？',
      deepseekPrompt: '你是少林药局的医僧，精通"不寐"（失眠）的辨证论治。请用慈悲温和、半文半白的语言，与求医者（可能是周芷若这样内心充满矛盾与痛苦的人）讨论失眠的原因和调治之法。每次150-300字，循循善诱。',
      chatOpening: '阿弥陀佛。施主深夜来访，必是心中有事。《景岳全书》云："不寐证虽有不一，然惟知邪正二字则尽之矣。"或以心事抑郁，或以气血不足，或以痰火上扰。贫僧观施主面色，当属肝郁化火、上扰心神——可有心烦易怒、口苦咽干、噩梦纷纭之状？',
      explanation: '失眠（不寐）的发病率女性约为男性的1.5-2倍，与女性激素波动（月经周期、妊娠、更年期）、更高的焦虑抑郁患病率以及社会角色压力有关。中医辨证分型：①肝郁化火型——入睡困难、心烦易怒、噩梦（龙胆泻肝汤加减）；②心脾两虚型——多梦易醒、心悸健忘（归脾汤）；③阴虚火旺型——潮热盗汗、口干心烦（黄连阿胶汤、天王补心丹）；④痰热内扰型——胸闷脘痞、噩梦惊恐（温胆汤）。非药物疗法包括：针灸（神门、三阴交、安眠穴）、耳穴压豆、睡前泡脚（加艾叶）、避免睡前使用电子产品（蓝光抑制褪黑素分泌）、保持作息规律。CBT-I（失眠认知行为疗法）是国际首选的非药物治疗。',
      references: [
        "《景岳全书》（明代·张介宾），“不寐”篇。维基文库：https://zh.wikisource.org/zh-hans/景岳全書_(四庫全書本)/卷18",
        "Edinger JD, et al. Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline. J Clin Sleep Med. 2021;17(2):255-262. DOI: 10.5664/jcsm.8986. PMID: 33164742. PMCID: PMC7853203.",
        "American Academy of Sleep Medicine. Behavioral and Psychological Treatments for Chronic Insomnia Disorder in Adults. 2021. https://www.guidelinecentral.com/guideline/309965/",
        "中国康复医学会等. 失眠中西医结合康复临床实践指南. 上海中医药杂志, 2025, 59(1):1-6. DOI: 10.16305/j.1007-1334.2025.z20240627013.",
      ],
    },
  },

  // --- 第十拍：黄衫女子 ---
  {
    paiName: '第十拍',
    title: '黄衫女子',
    images: [
      { src: '', frameIdx: 0, prompt: '【黄衫女子·亮相】黄衫女子（约三十岁，着明黄衣衫，面容端庄威严中带慈悲）立于场中。她周身仿佛有光——不是武功内力的光，而是一种精神的光芒。16:9。工笔重彩。' },
      { src: '', frameIdx: 1, prompt: '【黄衫女子·出手】黄衫女子以正宗九阴真经武功破解周芷若的九阴白骨爪——同样的武功，一正一邪，动作对比强烈。16:9。水墨重彩。' },
      { src: '', frameIdx: 2, prompt: '【黄衫女子·训诫】黄衫女子对周芷若说话——"终南山后，活死人墓。神雕侠侣，绝迹江湖。"表情严厉中带着惋惜。16:9。工笔人物。' },
      { src: '', frameIdx: 3, prompt: '【女性榜样·意象】黄衫女子与小龙女的意象叠影——古墓派传承，独立、强大、不与世俗同流。16:9。水墨写意。' },
      { src: '', frameIdx: 4, prompt: '【黄衫女子·离去】黄衫女子率侍女离去——衣袂飘飘，渐渐消失在少林寺的松林之间。留下周芷若跪在地上，神色复杂。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '黄衫女子出现——她以正宗九阴真经武功轻易击败周芷若的九阴白骨爪。她不仅是武功上的胜者，更是一种女性力量的象征——强大而慈悲，独立而从容。', frameIdx: 0 },
      { speaker: '黄衫女子', text: '周姑娘，你天赋极高，奈何心术不正。女子一生，不必依附于任何人——你执着于一个男子，可曾问过自己：没有他，你便不完整了吗？', frameIdx: 2 },
    ],
    question: {
      type: 'multiple_choice',
      text: '黄衫女子的话触及了一个深刻的问题——女性的自我价值与独立人格。研究表明，积极的女性榜样（role model）对女性心理健康有重要影响。以下关于女性自我价值与心理健康的说法，哪一项是正确的？',
      options: [
        '女性的价值取决于婚姻和家庭',
        '建立独立的自我认同、发展多元社会角色（而非仅局限于家庭）有利于女性心理健康',
        '独立女性不需要社交关系',
        '女性应该完全效仿男性才能成功',
      ],
      correctIndex: 1,
      explanation: '心理学家埃里克森（Erikson）提出"自我同一性"概念——健康的个体需要建立独立的、整合的自我认同。研究证实：女性拥有多元社会角色（职业、兴趣、社交等）与更好的心理健康相关。关键要素：①经济独立——是女性自主权的基础；②社会支持网络——不是"不需要关系"，而是拥有健康互惠的关系（非依附性关系）；③终身学习与成长——不断拓展自我边界。中医角度：独立不等于孤独——"独阴不生，独阳不长"，健康人格需要"阴阳调和"——既有独立的自我，也有连接他人的能力。古代女科医书将女性病证独立讨论，提醒医者认真看见女性身心处境；黄衫女子独立于终南山、小龙女独立于古墓，皆是金庸笔下"独立的女性力量"的象征。',
      references: [
        "Erikson EH. Identity and the Life Cycle. New York: International Universities Press; 1959. Internet Archive：https://archive.org/details/psychologicaliss0001erik",
        "World Health Organization. Women's health topic page. https://www.who.int/health-topics/women-s-health",
        "National Academies of Sciences, Engineering, and Medicine. Advancing Research on Chronic Conditions in Women. Washington, DC: The National Academies Press; 2024. DOI: 10.17226/27757. https://www.nationalacademies.org/publications/27757",
        "《女科经纶》（清代·萧壎），序。维基文库：https://zh.wikisource.org/zh-hans/女科經綸/序",
      ],
    },
  },

  // --- 第十一拍：问心有愧 ---
  {
    paiName: '第十一拍',
    title: '问心有愧',
    images: [
      { src: '', frameIdx: 0, prompt: '【峨眉·禅房】周芷若独自坐在禅房中，窗外月光如水。她面对一面铜镜，镜中人影憔悴。桌上放着一盏孤灯。16:9。水墨写意。' },
      { src: '', frameIdx: 1, prompt: '【周芷若·独白】周芷若的特写——眼中含泪，嘴唇微颤。"倘若我问心有愧呢"——这句内心独白化作字幕浮现。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【中医情志疗法·意象】古代中医情志疗法示意——以情胜情（悲胜怒、恐胜喜、怒胜思、喜胜忧、思胜恐）的五行相克图。16:9。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【甘麦大枣汤·特写】一碗药汤——甘草、小麦、大枣三味简单材料，却是治疗"脏躁"的千古名方。热气氤氲。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【峨眉·清晨】一夜独坐后，晨光熹微。周芷若推开窗，第一缕阳光照在她脸上。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '当张无忌问周芷若是否还恨他时，她答了一句——这句话成为金庸武侠中最令人心碎的台词之一。', frameIdx: 0 },
      { speaker: '周芷若', text: '（低声道）倘若我问心有愧呢？', frameIdx: 1 },
      { speaker: '旁白', text: '这句话里有多少执念、多少不甘、多少对自己的失望？《金匮要略》中有一方剂名"甘麦大枣汤"，专治"妇人脏躁，悲伤欲哭，象如神灵所作"——周芷若之症，与此何其相似。', frameIdx: 3 },
    ],
    question: {
      type: 'multiple_choice',
      text: '"脏躁"是中医特有的概念，与现代医学中的抑郁症、焦虑症有相似之处。张仲景《金匮要略》以甘麦大枣汤治"妇人脏躁"。以下关于"脏躁"与女性情志疾病的说法，哪一项是正确的？',
      options: [
        '脏躁只是女性"情绪化"，不需要认真对待',
        '围产期抑郁（产前/产后抑郁）是孕产期女性需重点筛查和支持的心理健康问题，发病率约10-15%',
        '中医的情志疾病与现代精神医学没有可对话之处',
        '治疗脏躁只需吃药，心理疏导没有用',
      ],
      correctIndex: 1,
      explanation: '脏躁首见于张仲景《金匮要略·妇人杂病脉证并治》："妇人脏躁，悲伤欲哭，象如神灵所作，数欠伸，甘麦大枣汤主之。"此方仅甘草、小麦、大枣三味，却成千古名方——体现了中医"简、便、验、廉"的特点。围产期抑郁可发生在妊娠期至产后一年内，症状包括持续情绪低落、兴趣丧失、自责、焦虑，严重时可有伤害自己或婴儿的念头。这是生物-心理-社会因素共同作用的结果，不是"矫情"或"不够坚强"！中西医结合治疗：①心理治疗（CBT、人际心理治疗）；②必要时规范药物治疗，哺乳期用药需医师评估；③中药（甘麦大枣汤、逍遥散加减）需辨证使用；④社会支持（家庭支持、母婴关爱）。ACOG建议孕期和产后进行抑郁、焦虑等心理健康筛查；如出现自杀/伤婴念头，应立即就医或寻求紧急帮助。',
      references: [
        "《金匮要略·妇人杂病脉证并治第二十二》：“妇人脏躁，喜悲伤欲哭……甘麦大枣汤主之。”中国哲学书电子化计划：https://ctext.org/jinkui-yaolue/22/zhs",
        "American College of Obstetricians and Gynecologists. Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum. Clinical Practice Guideline No. 4. Obstet Gynecol. 2023;141(6):1232-1261. DOI: 10.1097/AOG.0000000000005200. PMID: 37486660. https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum",
        "American College of Obstetricians and Gynecologists. Treatment and Management of Mental Health Conditions During Pregnancy and Postpartum. Clinical Practice Guideline No. 5. Obstet Gynecol. 2023;141(6):1262-1288. DOI: 10.1097/AOG.0000000000005202. PMID: 37486661. https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/treatment-and-management-of-mental-health-conditions-during-pregnancy-and-postpartum",
        "Howard LM, Khalifeh H. Perinatal mental health: a review of progress and challenges. World Psychiatry. 2020;19(3):313-327. DOI: 10.1002/wps.20769. PMID: 32931106. PMCID: PMC7491613.",
        "Stewart DE, Vigod SN. Postpartum Depression. N Engl J Med. 2019;380:2187-2196. DOI: 10.1056/NEJMcp1607649.",
      ],
    },
  },

  // --- 第十二拍：汉水归舟 ---
  {
    paiName: '第十二拍',
    title: '汉水归舟',
    images: [
      { src: '', frameIdx: 0, prompt: '【汉水·归乡】周芷若乘船沿汉水而下，回到故乡。江水依旧，人事已非。船头摆放着祭奠父亲的简单供品。16:9。水墨写意。' },
      { src: '', frameIdx: 1, prompt: '【渔村·新貌】汉水畔的小渔村，几户人家。有孕妇在河边洗衣，有老妇在织补渔网。生活气息浓厚。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【产后护理·示意】一位产妇坐月子——房中温暖避风，饮食以鸡汤、小米粥、红糖水为主。婆婆为她端来生化汤。16:9。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【生化汤·特写】产妇服用的生化汤——当归、川芎、桃仁、炮姜、甘草在药罐中煮沸。标注每味药物的功效。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【汉水·夕阳】江上夕阳，周芷若独立船头。她的表情比来时平静了许多。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '周芷若回到汉水——她的故乡。渔村中，有妇人正在坐月子，有新生儿在啼哭——这些最平常的生命场景，触动了她内心最柔软的地方。', frameIdx: 0 },
      { speaker: '周芷若', text: '（望着那产妇，轻声道）我母亲生我时，难产而死。我从未见过她……若当年有人懂些产科之术，或许——', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '产后护理（坐月子）是中医文化的重要组成部分。生化汤被誉为"产后第一汤"。以下关于产后护理的说法，哪一项是正确的？',
      options: [
        '坐月子期间完全不能洗头和洗澡',
        '生化汤（当归、川芎、桃仁、炮姜、甘草）用于产后恶露不行、小腹冷痛',
        '产后抑郁是矫情的表现，不需要在意',
        '产后妈妈只需关注婴儿，不需要关注自身恢复',
      ],
      correctIndex: 1,
      explanation: '生化汤出自《傅青主女科》，是产后常用方，主要作用是：养血化瘀、温经止痛——促进恶露排出、帮助子宫复旧。但需辨证使用：①适用于血虚寒凝型（恶露量少色暗、小腹冷痛）；②血热或感染者不宜（恶露量多色红、发热）。关于坐月子的科学观点：①可以洗头洗澡——保持清洁预防感染，注意保暖、及时吹干即可；②适当下床活动——预防静脉血栓，不能长期卧床；③均衡营养——高蛋白（鱼、鸡、蛋、瘦肉）、富含铁和VC、充足水分（哺乳需要），避免过于油腻；④关注心理健康——产后情绪低落（Baby Blues）很常见（发生率50-80%），持续超过2周需筛查产后抑郁；⑤产后42天复查——检查子宫复旧、伤口愈合、盆底功能。',
      references: [
        "《傅青主女科》（清代·傅山），“产后编”生化汤相关方论。识典古籍：https://www.shidianguji.com/book/YCM294300096/chapter/1l9ggh6dkjmer",
        "World Health Organization. WHO recommendations on maternal and newborn care for a positive postnatal experience. 2022. https://www.who.int/publications/i/item/9789240045989",
        "American College of Obstetricians and Gynecologists. Committee Opinion No. 736: Optimizing Postpartum Care. Obstet Gynecol. 2018;131(5):e140-e150; reaffirmed 2021. DOI: 10.1097/AOG.0000000000002633. PMID: 29683911.",
        "American College of Obstetricians and Gynecologists. Optimizing Postpartum Care. https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care",
      ],
    },
  },

  // --- 第十三拍：峨眉金顶 ---
  {
    paiName: '第十三拍',
    title: '峨眉金顶',
    images: [
      { src: '', frameIdx: 0, prompt: '【峨眉金顶·云海】峨眉山金顶，日出时分。金色阳光穿透云海，普照十方。周芷若独自站在金顶铜殿前。16:9横幅。青绿重彩。' },
      { src: '', frameIdx: 1, prompt: '【老年女居士·特写】一位白发苍苍的老居士，脊柱佝偻——典型的骨质疏松导致的身形改变。她扶着拐杖缓慢行走在金顶上。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【骨质疏松·示意图】正常骨骼与骨质疏松骨骼的显微对比图——正常骨小梁致密，骨质疏松骨小梁稀疏断裂。附DXA骨密度扫描示意图。16:9。工笔写实。' },
      { src: '', frameIdx: 3, prompt: '【补骨·食疗】中医补肾壮骨食疗——黑芝麻糊、核桃仁、山药排骨汤、牛奶。标注每种食物的钙含量和功效。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【峨眉金顶·晚霞】金顶晚霞，云海染成玫瑰色。老年女居士与周芷若并肩而坐——一老一少，仿佛时光的对话。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '峨眉金顶，周芷若遇到一位老居士——她弯腰驼背，每走一步都小心翼翼。骨质疏松，已悄悄夺走了她的身高和行动能力。', frameIdx: 0 },
      { speaker: '老居士', text: '周掌门，老身年轻时也曾健步如飞。如今年过六十，背也弯了，膝盖也疼了，连抱个孙子都难……大夫说是"骨质疏松"。老身年轻时若有今日的见识，早些补钙、多晒太阳，也不至于此。', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '骨质疏松被称为"沉默的疾病"——早期无症状，却在某天一摔就骨折。以下关于骨质疏松的预防，哪一项<strong>不完全正确</strong>？',
      options: [
        '每天补钙1000-1200mg和维生素D 800-1200IU是基础',
        '只有老年人才需要关注骨质疏松，年轻人无所谓',
        '绝经后女性应定期进行骨密度（DXA）检测',
        '负重运动（快走、爬楼梯、太极拳）有助于增加骨密度',
      ],
      correctIndex: 1,
      explanation: '骨质疏松的预防需从年轻时开始！峰值骨量在30岁左右达到最高——在此之前（尤其是青春期）充分的钙摄入和运动可以"储备"更多骨量，犹如往"骨银行"中存款。30岁后骨量开始缓慢下降，绝经后因雌激素缺乏骨量加速丢失。各年龄段预防策略：①儿童青少年——充分钙（牛奶、豆制品）+VD（户外活动）+运动，建立高峰值骨量；②育龄期——维持骨量，避免过度节食减肥（低体重→闭经→骨量流失）；③围绝经期——开始DXA筛查，考虑是否需要药物干预（如双膦酸盐、地舒单抗等）；④老年期——防跌倒（家庭安全评估、平衡训练）+持续补充钙/VD+必要时药物治疗。中医"肾主骨"理论指导下的补肾壮骨法（六味地黄丸、左归丸加减）对骨质疏松有辅助作用。',
      references: [
        "中华医学会骨质疏松和骨矿盐疾病分会. 原发性骨质疏松症诊疗指南（2022）[J]. 中国全科医学, 2023, 26(14):1671-1691. DOI: 10.12114/j.issn.1007-9572.2023.0121. https://www.chinagp.net/EN/10.12114/j.issn.1007-9572.2023.0121",
        "国家卫生健康委员会. 中国居民骨质疏松症流行病学调查报告（2018）. https://www.nhc.gov.cn/ewebeditor/uploadfile/2018/10/20181020192813503.pdf",
        "Lee DO, Hong YH, Cho MK, et al. The 2024 Guidelines for Osteoporosis - Korean Society of Menopause: Part I. J Menopausal Med. 2024;30(1):1-23. DOI: 10.6118/jmm.24000. PMID: 38714490.",
        "《黄帝内经·素问·痿论》：“肾主身之骨髓。”中国哲学书电子化计划：https://ctext.org/huangdi-neijing/wei-lun/zhs",
      ],
    },
  },

  // --- 第十四拍：药王谷中 ---
  {
    paiName: '第十四拍',
    title: '药王谷中',
    images: [
      { src: '', frameIdx: 0, prompt: '【药王谷·全景】隐于深山中的药王谷，梯田般的药圃层层叠叠。各种药材分类种植——当归区、黄芪区、白芍区等。谷中云雾缭绕。16:9横幅。青绿山水。' },
      { src: '', frameIdx: 1, prompt: '【药圃·辨识】周芷若跟随药王谷老者辨识草药。老者指着一株植物讲解，周芷若认真记录。阳光透过树叶洒下。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【妇科常用药·集锦】妇科常用中药展示——当归（补血调经）、白芍（柔肝止痛）、川芎（活血行气）、熟地（滋阴补血）、丹参（活血祛瘀）、益母草（调经利水）。每种药材标注性味归经。16:9。工笔静物。' },
      { src: '', frameIdx: 3, prompt: '【药王谷·制药】老者示范中药炮制——炒、炙、蒸、煮。炉火旺盛，药香弥漫。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【药王谷·藏书阁】药王谷藏书阁，满墙医书——从《神农本草经》到《本草纲目》。周芷若翻阅古籍，入神。16:9。工笔写实。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '周芷若行至传说中的药王谷——此处为唐代药王孙思邈晚年隐居采药之地（一说）。谷中药圃繁茂，本草典籍浩如烟海。', frameIdx: 0 },
      { speaker: '药王谷老者', text: '周掌门既来求教，老夫便先从这四味药讲起——当归、白芍、熟地、川芎。此四味便是"四物汤"——妇科第一方。你可知道它们各自的作用？', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '四物汤（当归、白芍、熟地、川芎）被誉为"妇科第一方"。以下关于四物汤的说法，哪一项是正确的？',
      options: [
        '四物汤对所有女性都适用，可以在经期随意服用',
        '四物汤的基本配伍是：当归补血活血、熟地滋阴补血、白芍养血柔肝、川芎活血行气',
        '四物汤中的当归主要作用是清热解毒',
        '四物汤只适用于老年女性',
      ],
      correctIndex: 1,
      explanation: '四物汤源自唐代《仙授理伤续断秘方》，宋代《太平惠民和剂局方》将其列为妇科通用方。四味药的精妙配伍：①当归（君）——补血活血、调经止痛；②熟地（臣）——滋阴补血、益精填髓；③白芍（佐）——养血柔肝、缓急止痛；④川芎（使）——活血行气、祛风止痛。全方"补血而不滞血，活血而不伤正"。临床上根据具体情况化裁：血热者熟地易生地（生四物汤）；血瘀者白芍易赤芍，加桃仁红花（桃红四物汤）；气虚者加人参黄芪（圣愈汤）；兼寒者加肉桂艾叶（艾附暖宫丸）。注意事项：①感冒发热、脾胃湿热时不宜；②经期量多者慎用（川芎活血）；③需遵医嘱辨证使用，不可盲目自行服用。',
      references: [
        "《太平惠民和剂局方》（宋代），四物汤条。维基文库：https://zh.wikisource.org/zh-hans/太平惠民和劑局方",
        "卫生福利部中医药司. 四物汤（出典：太平惠民和剂局方）. https://dep.mohw.gov.tw/DOCMAP/fp-866-5530-108.html",
        "国家药监局、国家卫生健康委. 关于颁布2025年版《中华人民共和国药典》的公告（2025年第29号）. 2025-03-20. https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjyp/20250325183810122.html",
        "妇科典籍运用四物汤治疗血虚与血瘀之药物剂量研究. J Chin Med. 2020;31(1):6-16. https://www.airitilibrary.com/Article/Detail?DocID=a0000082-202006-202007160013-202007160013-6-16",
      ],
    },
  },

  // --- 第十五拍：襄阳城墙 ---
  {
    paiName: '第十五拍',
    title: '襄阳城墙',
    images: [
      { src: '', frameIdx: 0, prompt: '【襄阳·春景】襄阳古城，春意盎然。城墙下桃花盛开，女子们在花下漫步。一只蝴蝶停在花瓣上。16:9横幅。青绿重彩。' },
      { src: '', frameIdx: 1, prompt: '【乳腺自查·示意】女性乳腺自查示意图——正确的触诊手法、观察要点。附正常乳腺解剖图。画面以柔和粉色为主调，以教育为目的。16:9。工笔写实（医学教育风格）。' },
      { src: '', frameIdx: 2, prompt: '【义诊·场景】周芷若在襄阳城中开设义诊，为妇女触诊把脉。周围聚集了许多前来求医的普通妇女。16:9。工笔人物。' },
      { src: '', frameIdx: 3, prompt: '【疏肝散结·中药】软坚散结常用中药——夏枯草、浙贝母、橘核、柴胡、郁金、青皮。旁边有一碗药汤。16:9。工笔静物。' },
      { src: '', frameIdx: 4, prompt: '【襄阳·希望】襄阳的春日桃花与新绿——象征希望与新生。远处城墙巍峨，近处生机勃勃。16:9。水墨渲染。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '襄阳城下，桃花盛开。周芷若在此偶遇一位正在求医的妇人——她乳房扪之有肿块，心中惶恐不安。', frameIdx: 0 },
      { speaker: '妇人', text: '周掌门……我这胸口有个硬块，不痛不痒的……我听说"乳岩"（乳腺癌）便是如此，心中日夜不安……', frameIdx: 2 },
      { speaker: '周芷若', text: '（为妇人诊脉后，神色郑重）大姐莫慌。乳房肿块未必便是恶疾——有些是良性的"乳癖"（乳腺增生），有些需进一步检查方能断定。中医认为此与肝气郁结有关——你可知女子情志不畅，最易伤乳？', frameIdx: 2 },
    ],
    question: {
      type: 'short_answer',
      text: '乳腺癌是女性最常见的恶性肿瘤之一。中医认为乳腺疾病与"肝气郁结"密切相关。请谈谈：你了解哪些乳腺癌的危险因素和早期发现方法？女性应如何进行乳房自我觉察并按风险定期筛查？',
      deepseekPrompt: '你是襄阳城中有名的女医，精通乳腺疾病的诊治。请用温和关爱、半文半白的语言，与求医的妇人讨论乳房健康的自我保健知识。语气需缓解其焦虑，同时给予专业的指导。每次150-300字。',
      chatOpening: '大妹子莫要惊慌。汝可知——十之八九的乳房肿块，皆为良性之"乳癖"（乳腺增生），而非"乳岩"（癌）。然则既来求医，贫医便细细道来——汝且说说，这肿块何时发现的？是否随月事而有变化（经前胀大、经后缩小）？平日心情如何，可有长期郁结之事？',
      explanation: '乳腺癌是女性最常见的恶性肿瘤，WHO数据显示2022年全球约230万女性确诊、约67万人死亡。危险因素：①不可改变——女性性别、年龄增长、BRCA1/2等遗传易感、一级亲属家族史、月经初潮早/绝经晚；②可改变——饮酒、绝经后肥胖、缺乏运动、长期使用雌孕激素联合HRT等。筛查建议需结合所在国家指南和个人风险：一般风险女性可与医生讨论从40岁起定期乳腺X线摄影（美国USPSTF建议40-74岁每2年一次）；中国指南常结合乳腺X线和超声。高风险女性（如BRCA突变、强家族史）需更早且更密集的MRI/钼靶筛查。日常更推荐"乳房自我觉察"：熟悉自己的乳房外观和触感，若出现新肿块、乳头凹陷或血性溢液、皮肤橘皮样改变、腋窝肿块等，应及时就医；自我触诊不能替代规范筛查。',
      references: [
        "World Health Organization. Breast cancer fact sheet. Updated 2026. https://www.who.int/news-room/fact-sheets/detail/breast-cancer",
        "U.S. Preventive Services Task Force. Breast Cancer: Screening. 2024. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening1",
        "国家卫生健康委员会. 乳腺癌诊疗指南（2022年版）. https://www.nhc.gov.cn/cms-search/downFiles/c001a73dfefc4ace889a1ea6e0230865.pdf",
        "中国抗癌协会乳腺癌专业委员会. 中国抗癌协会乳腺癌诊治指南与规范（2026年版）.",
        "Sung H, et al. Global Cancer Statistics 2020. CA Cancer J Clin. 2021;71:209-249. DOI: 10.3322/caac.21660.",
      ],
    },
  },

  // --- 第十六拍：终南古墓 ---
  {
    paiName: '第十六拍',
    title: '终南古墓',
    images: [
      { src: '', frameIdx: 0, prompt: '【终南·古墓入口】活死人墓入口，青苔覆盖的石门上刻有古篆。藤蔓垂挂，幽静神秘。一只白雕在天空盘旋。16:9。水墨写意。' },
      { src: '', frameIdx: 1, prompt: '【古墓·寒玉床】古墓内的寒玉床——一块巨大的天然玉石，散发寒气。传说睡在此床上可驻颜美容、延缓衰老。16:9。工笔重彩。' },
      { src: '', frameIdx: 2, prompt: '【中医美容·集锦】中医养颜外敷和内服材料——七白膏（白芷、白蔹、白术等七味白字药材）、珍珠粉、蜂蜜、玫瑰水。16:9。工笔静物。' },
      { src: '', frameIdx: 3, prompt: '【周芷若·对镜】周芷若对镜照面，镜中面容恬静。她不再是那个为了复仇不择手段的人——相由心生，面容也变得柔和。16:9。工笔人物。' },
      { src: '', frameIdx: 4, prompt: '【终南·春雪】终南山春雪，古墓外一片洁白。雪中红梅绽放——美得惊心动魄又清冷孤高。16:9。水墨重彩。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '周芷若寻至终南山活死人墓——当年小龙女在古墓中独居数十年，却容颜不老，传说与她睡的寒玉床和修炼的古墓派内功有关。', frameIdx: 0 },
      { speaker: '隐士', text: '周掌门，世人皆道古墓派驻颜有术——其实不在玉石，而在心静。小龙女之所以容颜不老，是因她心如止水、不染尘俗。女子养颜，五分在养身，五分在养心。心若焦躁，面便枯槁。', frameIdx: 1 },
    ],
    question: {
      type: 'multiple_choice',
      text: '中医美容强调整体调理——"以内养外"。以下关于女性皮肤健康与美容的说法，哪一项是<strong>不合理</strong>的？',
      options: [
        '充足睡眠和保持心情舒畅有助于皮肤健康',
        '追求"快速美白"而使用含汞、激素等违禁成分的美白产品是安全的',
        '中医养颜常用内服方包括当归芍药散、四物汤、玉容散等',
        '防晒是延缓皮肤光老化的最重要外用措施',
      ],
      correctIndex: 1,
      explanation: '含汞、铅、激素等违禁成分的美白产品可能导致：①汞中毒——损害肾脏和神经系统；②激素依赖性皮炎——停用后"反跳"加重，形成依赖；③铅中毒——损害造血和神经系统。这些成分在中国《化妆品安全技术规范》中被明令禁止。安全有效的美容方法：①防晒——全年使用SPF≥30的防晒霜，这是预防光老化和色斑最有效的措施；②保湿——保持皮肤屏障功能（含神经酰胺、透明质酸的产品）；③中医内调——根据体质选择（血虚者四物汤、肝郁者逍遥散、阴虚者六味地黄丸）；④充足睡眠——"美容觉"有科学依据（夜间生长激素和褪黑素分泌促进皮肤修复）；⑤心情舒畅——研究证实慢性压力可加速皮肤衰老（端粒缩短）。',
      references: [
        "国家药品监督管理局. 化妆品安全技术规范（2015年版）及2023年第41号、2024年第12号等修订通告. https://www.nmpa.gov.cn/",
        "World Health Organization. Radiation: Protecting against skin cancer. https://www.who.int/news-room/questions-and-answers/item/radiation-protecting-against-skin-cancer",
        "Krutmann J, et al. The skin aging exposome. J Dermatol Sci. 2017;85(3):152-161. PMID: 27720464.",
        "《医宗金鉴·外科心法要诀》（清代），玉容散相关方论。",
        "《中医美容学》（第2版，2021年），中国中医药出版社。",
      ],
    },
  },

  // --- 第十七拍：华山论剑 ---
  {
    paiName: '第十七拍',
    title: '华山论剑',
    images: [
      { src: '', frameIdx: 0, prompt: '【华山·全景】华山五峰如削，苍龙岭上的石阶蜿蜒如龙。云海在山间翻涌，朝阳初升——华山论剑的壮阔场景。16:9横幅。青绿重彩。' },
      { src: '', frameIdx: 1, prompt: '【华山·论剑台】华山之巅，各路武林人士齐聚。中间空出圆形场地——即将展开比试。气氛庄严。16:9。水墨重彩。' },
      { src: '', frameIdx: 2, prompt: '【HPV疫苗·意象】象征性画面——一把"倚天剑"斩向代表HPV病毒的阴影。剑刃上刻有"治未病"三字。16:9。工笔写意。' },
      { src: '', frameIdx: 3, prompt: '【宫颈癌筛查·示意】妇科检查示意图——以清新简洁的医学插画风格展示TCT和HPV检测过程。强调"无痛、快速、挽救生命"。16:9。工笔写实（医学风格）。' },
      { src: '', frameIdx: 4, prompt: '【华山·群芳】华山之巅各色山花在岩石缝中绽放——象征生命的顽强与美丽。远处群峰连绵。16:9。写意花鸟。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '华山论剑——武林中最负盛名的盛事。周芷若在此遇见来自各地的女侠，有人谈剑，有人论道，也有人说起了那个"不为人知的话题"。', frameIdx: 0 },
      { speaker: '女侠甲', text: '周掌门，你可知去年我师妹死于——宫颈癌？起因不过是一种极易感染的病毒（HPV），若是早些接种了疫苗，她本可活下去的……', frameIdx: 1 },
      { speaker: '女侠乙', text: '唉，此等"妇人隐秘之疾"，江湖上少有人敢公开谈论。可不说——便是害人！', frameIdx: 0 },
    ],
    question: {
      type: 'multiple_choice',
      text: '宫颈癌是目前最有希望通过HPV疫苗、规范筛查和早治走向公共卫生消除的癌症之一（WHO 2020年提出全球消除宫颈癌战略）。以下关于HPV疫苗和宫颈癌筛查的说法，哪一项是<strong>不正确</strong>的？',
      options: [
        'HPV疫苗最佳接种年龄为9-14岁（首次性行为前），但成年女性接种仍有益',
        '接种HPV疫苗后不需要再进行宫颈癌筛查',
        '宫颈癌筛查（TCT+HPV检测）推荐每3-5年进行一次',
        '宫颈癌是可以预防和治愈的——前提是早筛查、早发现、早治疗',
      ],
      correctIndex: 1,
      explanation: '接种HPV疫苗后仍需要进行宫颈癌筛查！原因：①现有疫苗覆盖主要高危HPV亚型，可预防多数宫颈癌，但并非覆盖所有致癌型别；②疫苗对接种前已感染的HPV亚型无治疗作用；③筛查可发现癌前病变并早期处理。WHO数据显示，2022年全球宫颈癌约66万新发、35万死亡；《全球消除宫颈癌战略》（2020）提出"90-70-90"目标：90%的女孩在15岁前完成HPV疫苗接种，70%的女性在35岁和45岁前接受高效筛查，90%的癌前病变和癌症患者得到治疗。接种+筛查+治疗——三步缺一不可。',
      references: [
        "World Health Organization. Cervical cancer fact sheet. Updated 2025. https://www.who.int/news-room/fact-sheets/detail/cervical-cancer",
        "World Health Organization. Global strategy to accelerate the elimination of cervical cancer as a public health problem. 2020. https://www.who.int/publications/i/item/9789240014107",
        "Centers for Disease Control and Prevention. HPV Vaccine Recommendations. Updated 2024. https://www.cdc.gov/hpv/hcp/vaccination-considerations/index.html",
        "Lei J, Ploner A, Elfström KM, et al. HPV Vaccination and the Risk of Invasive Cervical Cancer. N Engl J Med. 2020;383(14):1340-1348. DOI: 10.1056/NEJMoa1917338.",
        "China CDC Weekly. Accelerating Cervical Cancer Prevention and Control in China to Achieve Cervical Cancer Elimination Strategy Objectives. 2022;4(48):1067-1069. DOI: 10.46234/ccdcw2022.215.",
      ],
    },
  },

  // --- 第十八拍：白莲重生 ---
  {
    paiName: '第十八拍',
    title: '白莲重生',
    images: [
      { src: '', frameIdx: 0, prompt: '【峨眉金顶·新生】峨眉金顶，周芷若脱去掌门服饰，一身素衣，站在最高处。旭日东升，光芒万丈照亮她的面庞——这是全然的解脱与重生。16:9横幅。青绿重彩。' },
      { src: '', frameIdx: 1, prompt: '【峨眉·义诊堂】周芷若在峨眉山下开设的义诊堂——"芷若医庐"。门外排队等候的妇女儿童，门内她正在为老妇人把脉。16:9。工笔人物。' },
      { src: '', frameIdx: 2, prompt: '【白莲·特写】一池白莲在晨光中绽放——"出淤泥而不染，濯清涟而不妖"。水滴在莲叶上如珍珠般滚动。16:9。写意花鸟。' },
      { src: '', frameIdx: 3, prompt: '【汉水·新生】汉水江上，一叶扁舟。周芷若坐在船头，手中拿着一卷医书。江风轻拂她的发丝——与第一拍同样的汉水，却是完全不同的人。16:9。水墨写意。' },
      { src: '', frameIdx: 4, prompt: '【终章·人间无病】象征画面——药铺门外"架药生尘"（意为无人生病，药无人买），百姓安居乐业，女子们在阳光下自由行走。表达"愿人间无病、天下太平"的终极愿景。16:9横幅。写意重彩。' },
    ],
    dialogues: [
      { speaker: '旁白', text: '十八道关卡，十八次蜕变。周芷若走完了从汉水渔女→峨眉掌门→歧路失途→最终觉醒的全部旅程。她不再是谁的未婚妻、谁的徒弟、谁的对手——她只是她自己。', frameIdx: 0 },
      { speaker: '周芷若', text: '（立于峨眉金顶，望着云海日出，微笑道）我这一生，最幸运的——不是遇见张无忌，而是在失去一切之后，找回了自己。从今往后，峨眉山下将开设义诊——愿天下女子，不必如我一般，在黑暗中独自摸索。', frameIdx: 1 },
      { speaker: '旁白', text: '峨眉山的钟声响起——悠远、清澈、包容。这钟声曾经是复仇的战鼓，如今是祝福的梵音。', frameIdx: 0 },
    ],
    question: {
      type: 'multiple_choice',
      text: '纵观周芷若十八关的历程——从营养不良的渔家女到独当一面的峨眉掌门。以下哪一项最能总结女性健康的核心理念？',
      options: [
        '女性健康只是妇科问题',
        '"治未病"理念——预防优于治疗，女性全生命周期健康管理需要生理、心理、社会三位一体的综合关怀',
        '女性只要身体健康就好，不需要关注心理健康',
        '女性健康问题随着年龄增长自然会解决',
      ],
      correctIndex: 1,
      explanation: '周芷若的十八关涵盖了女性健康的多个维度：青春期发育（第二拍）、月经健康（第二/四拍）、精神压力与月经（第四拍）、药物安全（第五拍）、情感创伤（第六拍）、运动损伤（第七拍）、职业女性健康（第八拍）、失眠与焦虑（第九拍）、自我价值（第十拍）、产后护理（第十二拍）、更年期与骨质疏松（第十三拍）、乳腺健康（第十五拍）、宫颈癌预防（第十七拍）——这正是女性全生命周期健康管理的完整图景。中医"治未病"思想——"圣人不治已病治未病，不治已乱治未乱"——与WHO倡导的预防医学理念高度契合。女性健康≠妇科，而是涵盖心血管健康、骨骼健康、精神心理健康、肿瘤防治、性生殖健康等全方位的系统工程。愿每一位女性——如周芷若最终领悟的那样——先爱自己，再爱他人。',
      references: [
        "《黄帝内经·素问·四气调神大论》：“圣人不治已病治未病，不治已乱治未乱。”",
        "World Health Organization. Women's health topic page. https://www.who.int/health-topics/women-s-health",
        "PAHO/WHO. Healthy Life Course. https://www.paho.org/en/topics/healthy-life-course",
        "国务院. “健康中国2030”规划纲要. 2016. https://www.gov.cn/zhengce/2016-10/25/content_5124174.htm",
        "国务院. 中国妇女发展纲要（2021—2030年）. 国发〔2021〕16号. https://www.mee.gov.cn/zcwj/gwywj/202109/t20210927_954260.shtml",
      ],
    },
  },
];

// Append to existing routes
if (GAME_DATA && GAME_DATA.routes) {
  if (GAME_DATA.routes.zhaomin && GAME_DATA.routes.zhaomin.levels) {
    GAME_DATA.routes.zhaomin.levels.push(...zhaominExtra);
  }
  if (GAME_DATA.routes.zhouzhiruo && GAME_DATA.routes.zhouzhiruo.levels) {
    GAME_DATA.routes.zhouzhiruo.levels.push(...zhouzhiruoExtra);
  }
}

})();
