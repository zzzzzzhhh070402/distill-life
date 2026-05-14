export interface Question {
  id: string;
  chapter: number;
  chapterTitle: string;
  section: string;
  text: string;
  inputType: 'text' | 'textarea' | 'select';
  options?: string[];
  dependsOn?: {
    questionId: string;
    /** answer_equals: show if answer equals value; answer_not_equals: show if answer doesn't equal value; has_any: show if has any answer */
    condition: 'answer_equals' | 'answer_not_equals' | 'has_answer' | 'has_no_answer';
    value?: string;
  };
}

export interface Chapter {
  num: number;
  title: string;
  sections: Section[];
}

export interface Section {
  title: string;
  questionIds: string[];
}

export const chapters: Chapter[] = [
  {
    num: 1, title: '起源和根基',
    sections: [
      { title: '1.1 出生的基本事实', questionIds: ['Q001','Q002','Q003','Q004','Q005','Q006','Q007'] },
      { title: '1.2 家族背景和根源', questionIds: ['Q008','Q009','Q010','Q011','Q012','Q013','Q014','Q015','Q016','Q017'] },
    ]
  },
  {
    num: 2, title: '童年（0-12岁）',
    sections: [
      { title: '2.1 生活环境与日常', questionIds: ['Q018','Q019','Q020','Q021','Q022','Q023','Q024','Q025'] },
      { title: '2.2 学校和学习', questionIds: ['Q026','Q027','Q028','Q029','Q030','Q031','Q032','Q033'] },
      { title: '2.3 玩耍和社交', questionIds: ['Q034','Q035','Q036','Q037','Q038','Q039'] },
      { title: '2.4 童年关键事件', questionIds: ['Q040','Q041','Q042','Q043','Q044','Q045','Q046'] },
    ]
  },
  {
    num: 3, title: '青春期（13-18岁）',
    sections: [
      { title: '3.1 自我意识觉醒', questionIds: ['Q047','Q048','Q049','Q050','Q051','Q052','Q053','Q054'] },
      { title: '3.2 学业与选择', questionIds: ['Q055','Q056','Q057','Q058','Q059','Q060','Q061','Q062','Q063'] },
      { title: '3.3 社交和情感', questionIds: ['Q064','Q065','Q066','Q067','Q068','Q069'] },
      { title: '3.4 兴趣和天赋萌芽', questionIds: ['Q070','Q071','Q072','Q073','Q074','Q075'] },
    ]
  },
  {
    num: 4, title: '青年期（18-30岁）',
    sections: [
      { title: '4.1 大学/高等教育', questionIds: ['Q076','Q077','Q078','Q079','Q080','Q081','Q082','Q083','Q084'] },
      { title: '4.2 职业生涯起步', questionIds: ['Q085','Q086','Q087','Q088','Q089','Q090','Q091','Q092','Q093','Q094'] },
      { title: '4.3 爱情与亲密关系', questionIds: ['Q095','Q096','Q097','Q098','Q099','Q100','Q101','Q102','Q103','Q104','Q105'] },
      { title: '4.4 独立与成长', questionIds: ['Q106','Q107','Q108','Q109','Q110','Q111','Q112','Q113'] },
    ]
  },
  {
    num: 5, title: '中年（30-55岁）',
    sections: [
      { title: '5.1 事业与成就', questionIds: ['Q114','Q115','Q116','Q117','Q118','Q119','Q120','Q121','Q122'] },
      { title: '5.2 家庭与养育', questionIds: ['Q123','Q124','Q125','Q126','Q127','Q128','Q129','Q130','Q131'] },
      { title: '5.3 身体与健康', questionIds: ['Q132','Q133','Q134','Q135','Q136','Q137','Q138'] },
      { title: '5.4 中年反思', questionIds: ['Q139','Q140','Q141','Q142','Q143','Q144'] },
    ]
  },
  {
    num: 6, title: '重大转折',
    sections: [
      { title: '人生的重大转折', questionIds: ['Q145','Q146','Q147','Q148','Q149','Q150','Q151','Q152','Q153','Q154'] },
    ]
  },
  {
    num: 7, title: '内在世界',
    sections: [
      { title: '7.1 价值观和信仰', questionIds: ['Q155','Q156','Q157','Q158','Q159','Q160','Q161','Q162','Q163','Q164'] },
      { title: '7.2 人生哲学与智慧', questionIds: ['Q165','Q166','Q167','Q168','Q169','Q170','Q171','Q172'] },
      { title: '7.3 性格和自我认知', questionIds: ['Q173','Q174','Q175','Q176','Q177','Q178','Q179','Q180','Q181','Q182','Q183'] },
    ]
  },
  {
    num: 8, title: '热爱与追求',
    sections: [
      { title: '8.1 兴趣爱好', questionIds: ['Q184','Q185','Q186','Q187','Q188','Q189','Q190'] },
      { title: '8.2 旅行与探索', questionIds: ['Q191','Q192','Q193','Q194','Q195','Q196'] },
      { title: '8.3 创造与表达', questionIds: ['Q197','Q198','Q199','Q200','Q201'] },
    ]
  },
  {
    num: 9, title: '关系网络',
    sections: [
      { title: '9.1 友谊', questionIds: ['Q202','Q203','Q204','Q205','Q206','Q207','Q208','Q209'] },
      { title: '9.2 社会联系和影响', questionIds: ['Q210','Q211','Q212','Q213','Q214','Q215','Q216'] },
      { title: '9.3 冲突与和解', questionIds: ['Q217','Q218','Q219','Q220','Q221'] },
    ]
  },
  {
    num: 10, title: '终点/尾声',
    sections: [
      { title: '10.1 回顾与反思', questionIds: ['Q222','Q223','Q224','Q225','Q226','Q227','Q228','Q229'] },
      { title: '10.2 遗产与传承', questionIds: ['Q230','Q231','Q232','Q233','Q234','Q235'] },
      { title: '10.3 现在与未来', questionIds: ['Q236','Q237','Q238','Q239','Q240','Q241','Q242','Q243','Q244'] },
    ]
  },
  {
    num: 11, title: '时代背景',
    sections: [
      { title: '11.1 时代与社会运动/历史事件', questionIds: ['Q245','Q246','Q247','Q248'] },
      { title: '11.2 社会身份与标签', questionIds: ['Q249','Q250','Q251'] },
      { title: '11.3 穿越与假设', questionIds: ['Q252','Q253','Q254','Q255','Q256'] },
      { title: '11.4 记忆中的感官细节', questionIds: ['Q257','Q258','Q259','Q260','Q261'] },
    ]
  },
];

export const questions: Question[] = [
  // ===== 第一章：起源和根基 =====
  // 1.1 出生的基本事实
  { id: 'Q001', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你在什么地方出生？什么日期？', inputType: 'text' },
  { id: 'Q002', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你的父母是什么民族？谁给你取的名字？有什么寓意吗？', inputType: 'textarea' },
  { id: 'Q003', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你出生时家庭经济状况如何？（富裕、温饱、贫困）住房和周围环境是怎样的？', inputType: 'textarea' },
  { id: 'Q004', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你知道自己出生时有什么特别的故事吗？（难产、意外、顺产、特殊天气等）', inputType: 'textarea' },
  { id: 'Q005', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你的家庭成员有哪些？排行第几？', inputType: 'text' },
  { id: 'Q006', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你小时候能记住的第一个画面是什么？', inputType: 'textarea' },
  { id: 'Q007', chapter: 1, chapterTitle: '起源和根基', section: '1.1 出生的基本事实', text: '你小时候能记住的第一种感觉/情绪是什么？', inputType: 'textarea' },
  // 1.2 家族背景和根源
  { id: 'Q008', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你父亲是做什么的？他是什么性格的人？', inputType: 'textarea' },
  { id: 'Q009', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你母亲是做什么的？她是什么性格的人？', inputType: 'textarea' },
  { id: 'Q010', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你父母怎么认识的？他们的关系怎么样？', inputType: 'textarea' },
  { id: 'Q011', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你有兄弟姐妹吗？和他们的关系如何？', inputType: 'textarea' },
  { id: 'Q012', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你们家在当地的阶层/地位是怎样的？（望族/普通/贫困）', inputType: 'select', options: ['望族/显赫', '中产/普通', '贫困/底层', '说不清'] },
  { id: 'Q013', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你祖父母/外祖父母是什么样的人？', inputType: 'textarea' },
  { id: 'Q014', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你家族里有没有代代相传的故事、传统或技艺？', inputType: 'textarea' },
  { id: 'Q015', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你的家族有没有经历过重大迁徙、逃难或发迹事件？', inputType: 'textarea' },
  { id: 'Q016', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '你成长的家庭氛围是温暖的还是压抑的？', inputType: 'select', options: ['温暖的', '压抑的', '时好时坏', '说不清'] },
  { id: 'Q017', chapter: 1, chapterTitle: '起源和根基', section: '1.2 家族背景和根源', text: '家族中谁对你影响最深？', inputType: 'text' },

  // ===== 第二章：童年（0-12岁） =====
  // 2.1 生活环境与日常
  { id: 'Q018', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候住在哪里？描述一下你的家和周围的环境。', inputType: 'textarea' },
  { id: 'Q019', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你童年的家是什么样子的？（平房/小院/楼房、农村、城市/楼房）', inputType: 'select', options: ['农村平房/小院', '城市楼房', '胡同/里弄', '其他'] },
  { id: 'Q020', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候的邻居是什么样的人？', inputType: 'textarea' },
  { id: 'Q021', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候最喜欢去的地方是哪里？', inputType: 'text' },
  { id: 'Q022', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候的日常作息是什么样的？', inputType: 'textarea' },
  { id: 'Q023', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候最喜欢吃什么？有什么特别难忘的食物味道？', inputType: 'textarea' },
  { id: 'Q024', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候穿什么样的衣服？', inputType: 'text' },
  { id: 'Q025', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.1 生活环境与日常', text: '你小时候的零花钱是多少？你是怎么花的？', inputType: 'text' },
  // 2.2 学校和学习
  { id: 'Q026', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你上的第一所学校是什么样的？', inputType: 'textarea' },
  { id: 'Q027', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你的学习成绩怎么样？最好的科目是什么？最差的呢？', inputType: 'textarea' },
  { id: 'Q028', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你最喜欢/最不喜欢的老师是谁？为什么？', inputType: 'textarea' },
  { id: 'Q029', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你在学校被霸凌过吗？或霸凌过别人吗？', inputType: 'textarea' },
  { id: 'Q030', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你小时候喜欢上学吗？为什么？', inputType: 'textarea' },
  { id: 'Q031', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你小时候是安静内向的还是活跃外向的学生？', inputType: 'select', options: ['安静内向', '活跃外向', '介于两者之间'] },
  { id: 'Q032', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你在学校有没有被特殊对待过？为什么？', inputType: 'textarea' },
  { id: 'Q033', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.2 学校和学习', text: '你小时候有没有特别擅长的学科或领域？', inputType: 'text' },
  // 2.3 玩耍和社交
  { id: 'Q034', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你小时候最好的朋友是谁？你们怎么成为朋友的？', inputType: 'textarea' },
  { id: 'Q035', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你小时候最常玩什么游戏？', inputType: 'textarea' },
  { id: 'Q036', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你小时候最喜欢和谁一起玩？', inputType: 'text' },
  { id: 'Q037', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你小时候养过宠物吗？', inputType: 'textarea' },
  { id: 'Q038', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你的童年有"秘密基地"吗？', inputType: 'textarea' },
  { id: 'Q039', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.3 玩耍和社交', text: '你小时候有没有经历过搬家？那次搬家对你有什么影响？', inputType: 'textarea' },
  // 2.4 童年关键事件
  { id: 'Q040', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '童年里最快乐的一个时刻是什么时候？发生了什么？', inputType: 'textarea' },
  { id: 'Q041', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '童年里最痛苦/最害怕的一个经历是什么？', inputType: 'textarea' },
  { id: 'Q042', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '童年里有没有让你觉得"一夜长大"的事件？', inputType: 'textarea' },
  { id: 'Q043', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '你小时候做过什么梦？', inputType: 'textarea' },
  { id: 'Q044', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '你小时候有没有经历过亲人去世？当时你的反应是什么？', inputType: 'textarea' },
  { id: 'Q045', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '你小时候有没有做过什么特别大胆的事？', inputType: 'textarea' },
  { id: 'Q046', chapter: 2, chapterTitle: '童年（0-12岁）', section: '2.4 童年关键事件', text: '你小时候有没有什么"秘密"？', inputType: 'textarea' },

  // ===== 第三章：青春期（13-18岁） =====
  // 3.1 自我意识觉醒
  { id: 'Q047', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你什么时候开始意识到"我"是一个独立的人？', inputType: 'textarea' },
  { id: 'Q048', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '青春期你对自己的身体满意吗？有什么困扰？（外貌、身高、体重、发育等）', inputType: 'textarea' },
  { id: 'Q049', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你在青春期有没有特别自卑的时刻？是因为什么？', inputType: 'textarea' },
  { id: 'Q050', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你在青春期有没有第一次感到特别骄傲/自信的时刻？', inputType: 'textarea' },
  { id: 'Q051', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你第一次"喜欢上一个人"是什么时候？那是什么感觉？', inputType: 'textarea' },
  { id: 'Q052', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你在青春期有没有经历过身份认同危机？（关于自己是谁、属于哪里、为什么而活等）', inputType: 'textarea' },
  { id: 'Q053', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你在青春期做过的最叛逆的一件事是什么？', inputType: 'textarea' },
  { id: 'Q054', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.1 自我意识觉醒', text: '你第一次喝酒/抽烟/接触"成人世界"是什么时候？', inputType: 'text' },
  // 3.2 学业与选择
  { id: 'Q055', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你的中学是怎么样度过的？喜欢吗？', inputType: 'textarea' },
  { id: 'Q056', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你在中学时成绩处于什么水平？（尖子/中等/普通/边缘）', inputType: 'select', options: ['尖子生', '中等偏上', '普通', '边缘/差生'] },
  { id: 'Q057', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你有没有参加过什么社团/课外活动？', inputType: 'textarea' },
  { id: 'Q058', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你在中学时最骄傲的成就是什么？', inputType: 'text' },
  { id: 'Q059', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你有没有被老师深刻影响过？', inputType: 'textarea' },
  { id: 'Q060', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你在文理分科/选专业时是怎么选的？为什么？', inputType: 'textarea' },
  { id: 'Q061', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '高考/升学对你影响大吗？当时的压力有多大？', inputType: 'textarea' },
  { id: 'Q062', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '高考成绩如何？和你预期一样吗？', inputType: 'textarea' },
  { id: 'Q063', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.2 学业与选择', text: '你选大学/专业时的考量是什么？', inputType: 'textarea' },

  // 3.3 社交和情感
  { id: 'Q064', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你在青春期最好的朋友是谁？现在还有联系吗？', inputType: 'textarea' },
  { id: 'Q065', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你有没有经历过被孤立/排挤的时期？', inputType: 'textarea' },
  { id: 'Q066', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你的初恋是什么时候？怎么发生的？结果如何？', inputType: 'textarea' },
  { id: 'Q067', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你和父母的关系在青春期有什么变化？', inputType: 'textarea' },
  { id: 'Q068', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你在青春期有没有被误解/冤枉的时刻？', inputType: 'textarea' },
  { id: 'Q069', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.3 社交和情感', text: '你在青春期最遗憾的事情是什么？', inputType: 'textarea' },
  // 3.4 兴趣和天赋萌芽
  { id: 'Q070', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你在青春期明显喜欢的爱好是什么？（音乐、游戏、运动、阅读、追星等）', inputType: 'textarea' },
  { id: 'Q071', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你什么时候开始发现自己的爱好/特长的？', inputType: 'textarea' },
  { id: 'Q072', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你在青春期有没有崇拜过某个偶像/榜样？', inputType: 'textarea' },
  { id: 'Q073', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你在青春期最沉迷的事情是什么？', inputType: 'text' },
  { id: 'Q074', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你在青春期对什么书影音印象最深？（电影/音乐/书等）', inputType: 'textarea' },
  { id: 'Q075', chapter: 3, chapterTitle: '青春期（13-18岁）', section: '3.4 兴趣和天赋萌芽', text: '你什么时候第一次意识到"死亡"这件事？对你的青春期有什么影响？', inputType: 'textarea' },

  // ===== 第四章：青年期（18-30岁） =====
  // 4.1 大学/高等教育
  { id: 'Q076', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你上大学了吗？上了哪所学校？什么专业？', inputType: 'textarea' },
  { id: 'Q077', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '大学生活和你想象中一样吗？第一天报到的感觉还记得吗？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q078', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你大学时住校吗？和室友的关系怎么样？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q079', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '大学里对你影响最大的一门课或一位老师是谁？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q080', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你大学期间有没有挂过科？有没有特别辉煌的时刻？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q081', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你大学时怎么赚钱的？（兼职、家教、创业等）', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q082', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你的大学社交圈是什么样的？参加过什么组织/社团？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q083', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '你大学期间谈过几次恋爱？印象最深的是哪一段？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_answer' } },
  { id: 'Q084', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.1 大学/高等教育', text: '如果你没上大学，你是怎么度过这段时间的？第一份工作是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q076', condition: 'has_no_answer' } },
  // 4.2 职业生涯起步
  { id: 'Q085', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你的第一份正式工作是什么？怎么找到的？', inputType: 'textarea' },
  { id: 'Q086', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '第一天上班的感觉是什么样的？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q087', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你工作中犯过的最大的错误是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q088', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你刚开始工作的时候最不适应的是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q089', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你第一次拿工资的时候做了什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q090', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你职业生涯中遇到过"天花板"或"瓶颈"吗？怎么突破的？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q091', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你工作中最引以为豪的成就是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q092', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你有没有经历过跳槽/转行？是什么让你做出决定的？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q093', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '你的职业路径是精心规划的还是随机应对的？', inputType: 'select', options: ['精心规划', '随机应对', '两者都有'], dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q094', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.2 职业生涯起步', text: '有没有一位领导/前辈深刻影响了你？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  // 4.3 爱情与亲密关系
  { id: 'Q095', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你什么时候谈的第一次恋爱？对方是什么样的人？', inputType: 'textarea' },
  { id: 'Q096', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你最长的一段感情是什么样的人？你们怎么认识的？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q097', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你选择伴侣时看重什么？（外貌、性格、家庭背景、能力等）', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q098', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你有没有经历过分手？那次分手对你有什么影响？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q099', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你什么时候结婚的？有没有犹豫过？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q100', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你的婚姻是什么样的？（包括未婚）', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q101', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你有没有经历过配偶之间的重大冲突？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q102', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你有没有经历过亲密关系的重大伤害/背叛？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q103', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你和伴侣的相处模式/分工是什么样的？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q104', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你在亲密关系中学到的最重要的东西是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  { id: 'Q105', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.3 爱情与亲密关系', text: '你有没有经历过"至暗时刻"的感情？', inputType: 'textarea', dependsOn: { questionId: 'Q095', condition: 'has_answer' } },
  // 4.4 独立与成长
  { id: 'Q106', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你什么时候开始觉得自己"长大了"？', inputType: 'textarea' },
  { id: 'Q107', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你第一次搬家/独立生活是什么感觉？', inputType: 'textarea' },
  { id: 'Q108', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你年轻时做过的最冒险/最冲动的事情是什么？', inputType: 'textarea' },
  { id: 'Q109', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你有没有经历过一段"迷茫期"？什么时候？持续了多久？', inputType: 'textarea' },
  { id: 'Q110', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你年轻时和父母的"心理断奶"过程是怎样的？', inputType: 'textarea' },
  { id: 'Q111', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你有没有经历过朋友背叛？', inputType: 'textarea' },
  { id: 'Q112', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你年轻时最得意和最灰暗的时刻分别是什么？', inputType: 'textarea' },
  { id: 'Q113', chapter: 4, chapterTitle: '青年期（18-30岁）', section: '4.4 独立与成长', text: '你20多岁的时候最害怕的事情是什么？', inputType: 'text' },

  // ===== 第五章：中年（30-55岁） =====
  // 5.1 事业与成就
  { id: 'Q114', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你职业生涯的巅峰是什么时候？在什么领域达到了什么高度？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q115', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你有没有经历过职业转型/行业转换？为什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q116', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你创业过吗？成功了还是失败了？你学到了什么教训？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q117', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你有没有管理过团队？你的管理哲学是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q118', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你有没有赚到过"第一桶金"？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q119', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你工作以来遇到的最大压力/危机是什么？怎么度过的？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q120', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你有没有经历过失业/裁员？那段经历对你有什么影响？', inputType: 'textarea', dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q121', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你现在的工作是你热爱的还是为了谋生？', inputType: 'select', options: ['热爱的事业', '主要为谋生', '两者兼顾'], dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  { id: 'Q122', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.1 事业与成就', text: '你觉得自己在事业上是否达到了自己的预期？', inputType: 'select', options: ['超出预期', '基本达到', '未达到'], dependsOn: { questionId: 'Q085', condition: 'has_answer' } },
  // 5.2 家庭与养育
  { id: 'Q123', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你有孩子吗？当父亲/母亲的那一刻是什么感觉？', inputType: 'textarea' },
  { id: 'Q124', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你养育孩子时最艰难的时候是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q123', condition: 'has_answer' } },
  { id: 'Q125', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你和孩子的关系怎么样？有没有经历过叛逆期？', inputType: 'textarea', dependsOn: { questionId: 'Q123', condition: 'has_answer' } },
  { id: 'Q126', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你有没有因为孩子而改变了自己？', inputType: 'textarea', dependsOn: { questionId: 'Q123', condition: 'has_answer' } },
  { id: 'Q127', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你是怎么平衡工作和家庭的？', inputType: 'textarea', dependsOn: { questionId: 'Q123', condition: 'has_answer' } },
  { id: 'Q128', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你有没有当过"留守儿童的父母"或"异地分居"？', inputType: 'textarea', dependsOn: { questionId: 'Q123', condition: 'has_answer' } },
  { id: 'Q129', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你为家庭做出的最大牺牲是什么？', inputType: 'textarea' },
  { id: 'Q130', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你有没有经历过家庭重大变故？（离婚、破产、家人重病等）', inputType: 'textarea' },
  { id: 'Q131', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.2 家庭与养育', text: '你照顾过年老父母吗？那段经历对你有什么影响？', inputType: 'textarea' },
  // 5.3 身体与健康
  { id: 'Q132', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你得过重病/做过手术吗？是怎么度过的？', inputType: 'textarea' },
  { id: 'Q133', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你有没有经历过心理健康危机/抑郁焦虑等？', inputType: 'textarea', dependsOn: { questionId: 'Q132', condition: 'has_answer' } },
  { id: 'Q134', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你有没有过劳肥/身材走样？', inputType: 'textarea' },
  { id: 'Q135', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你什么时候开始感觉到"身体不如以前了"？', inputType: 'text' },
  { id: 'Q136', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你有没有坚持运动/健康的生活习惯？', inputType: 'textarea' },
  { id: 'Q137', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你有过严重的睡眠问题吗？有没有经历过失眠/熬夜？', inputType: 'textarea' },
  { id: 'Q138', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.3 身体与健康', text: '你有过心理治疗经历吗？', inputType: 'textarea' },
  // 5.4 中年反思
  { id: 'Q139', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你有没有经历过中年危机？是什么触发的？', inputType: 'textarea' },
  { id: 'Q140', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你有没有后悔过某些人生决定？（职业、婚姻、生育等）', inputType: 'textarea', dependsOn: { questionId: 'Q139', condition: 'has_answer' } },
  { id: 'Q141', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你到中年时找到人生的意义了吗？', inputType: 'textarea' },
  { id: 'Q142', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你到目前为止学到的最深刻的人生教训是什么？', inputType: 'textarea' },
  { id: 'Q143', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你有没有经历过朋友的离世/离去？这件事对你的冲击是什么？', inputType: 'textarea' },
  { id: 'Q144', chapter: 5, chapterTitle: '中年（30-55岁）', section: '5.4 中年反思', text: '你有没有经历过被社会舆论/网络暴力？怎么应对的？', inputType: 'textarea' },

  // ===== 第六章：重大转折 =====
  { id: 'Q145', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你人生中最重要的几个转折点是什么？', inputType: 'textarea' },
  { id: 'Q146', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你有没有经历过"一切归零"的时刻？', inputType: 'textarea' },
  { id: 'Q147', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你人生中最难的一个决定是什么？', inputType: 'textarea' },
  { id: 'Q148', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你有没有经历过"至暗时刻"？那时你是怎么熬过来的？', inputType: 'textarea' },
  { id: 'Q149', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '有没有某件事彻底改变了你的人生轨迹？', inputType: 'textarea' },
  { id: 'Q150', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你有没有后悔过做某件事？', inputType: 'textarea' },
  { id: 'Q151', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你有没有做过违背自己原则/道德的事？为什么？', inputType: 'textarea' },
  { id: 'Q152', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你人生中最幸运的一件事是什么？', inputType: 'textarea' },
  { id: 'Q153', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你人生中最不幸的一件事是什么？', inputType: 'textarea' },
  { id: 'Q154', chapter: 6, chapterTitle: '重大转折', section: '人生的重大转折', text: '你有没有死里逃生的经历？那次经历让你有什么改变？', inputType: 'textarea' },

  // ===== 第七章：内在世界 =====
  // 7.1 价值观和信仰
  { id: 'Q155', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你有什么宗教/哲学/精神信仰吗？是怎么形成的？', inputType: 'textarea' },
  { id: 'Q156', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你对"人生的意义是什么"有自己的答案吗？', inputType: 'textarea' },
  { id: 'Q157', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你最不能容忍的行为/品质是什么？', inputType: 'textarea' },
  { id: 'Q158', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你人生中坚持自己价值观的一个例子是什么？', inputType: 'textarea' },
  { id: 'Q159', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你人生中违背自己价值观的一个例子是什么？', inputType: 'textarea' },
  { id: 'Q160', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你认为人性本善还是本恶？', inputType: 'select', options: ['人性本善', '人性本恶', '不善不恶', '说不清'] },
  { id: 'Q161', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你认为人生来平等还是生来不平等？', inputType: 'select', options: ['生来平等', '生来不平等', '说不清'] },
  { id: 'Q162', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你对金钱的态度是什么？', inputType: 'textarea' },
  { id: 'Q163', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你的金钱观是怎么形成的？', inputType: 'textarea' },
  { id: 'Q164', chapter: 7, chapterTitle: '内在世界', section: '7.1 价值观和信仰', text: '你觉得什么是"成功"？你做到了吗？', inputType: 'textarea' },
  // 7.2 人生哲学与智慧
  { id: 'Q165', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你走过最弯的路是什么？', inputType: 'textarea' },
  { id: 'Q166', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你人生中得到的最好的建议是什么？谁给的？', inputType: 'textarea' },
  { id: 'Q167', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你人生中最后悔被忽视的建议是什么？', inputType: 'textarea' },
  { id: 'Q168', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你有什么座右铭/人生格言吗？', inputType: 'textarea' },
  { id: 'Q169', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '如果你只能给年轻人一个建议，你会说什么？', inputType: 'textarea' },
  { id: 'Q170', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你人生中最重要的一个领悟是什么？什么时候领悟的？', inputType: 'textarea' },
  { id: 'Q171', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你是怎么面对"失去"的？（失去亲人、失去机会、失去青春）', inputType: 'textarea' },
  { id: 'Q172', chapter: 7, chapterTitle: '内在世界', section: '7.2 人生哲学与智慧', text: '你有没有一个至今没有想通的问题？', inputType: 'textarea' },
  // 7.3 性格和自我认知
  { id: 'Q173', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你认为自己身上最大的优点是什么？', inputType: 'text' },
  { id: 'Q174', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你认为自己身上最大的缺点是什么？', inputType: 'text' },
  { id: 'Q175', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你的性格是天生的还是后天形成的？被谁影响最深？', inputType: 'textarea' },
  { id: 'Q176', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你有没有一个"别人眼中的你"和"真实的你"之间的巨大差距？', inputType: 'textarea' },
  { id: 'Q177', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你最容易因为什么而发怒？', inputType: 'text' },
  { id: 'Q178', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你最舒服的社交方式是什么？', inputType: 'textarea' },
  { id: 'Q179', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你是一个乐观的人还是悲观的人？', inputType: 'select', options: ['乐观', '悲观', '时乐时悲', '现实主义者'] },
  { id: 'Q180', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你有没有什么深层的恐惧/不安全感？', inputType: 'textarea' },
  { id: 'Q181', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你怎么处理愤怒/悲伤/焦虑等负面情绪？', inputType: 'textarea' },
  { id: 'Q182', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你有没有什么"戒不掉"的东西？（烟、酒、糖、手机、某种习惯等）', inputType: 'textarea' },
  { id: 'Q183', chapter: 7, chapterTitle: '内在世界', section: '7.3 性格和自我认知', text: '你到现在都没改掉的一个毛病是什么？', inputType: 'text' },

  // ===== 第八章：热爱与追求 =====
  // 8.1 兴趣爱好
  { id: 'Q184', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你一直坚持最久的一个爱好是什么？', inputType: 'text' },
  { id: 'Q185', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你有没有一件做了几十年依然热爱的事？', inputType: 'textarea' },
  { id: 'Q186', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你有没有收藏什么东西的习惯？', inputType: 'textarea' },
  { id: 'Q187', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你什么时候体验过"心流"（flow状态）？', inputType: 'textarea' },
  { id: 'Q188', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你最近在学什么新东西？', inputType: 'text' },
  { id: 'Q189', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你有没有一个"旁人无法理解"的爱好？', inputType: 'textarea' },
  { id: 'Q190', chapter: 8, chapterTitle: '热爱与追求', section: '8.1 兴趣爱好', text: '你在不开心的时候喜欢做什么？', inputType: 'textarea' },
  // 8.2 旅行与探索
  { id: 'Q191', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你去过最远/印象最深的地方是哪里？', inputType: 'textarea' },
  { id: 'Q192', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你有没有一次改变你世界观的旅行？', inputType: 'textarea' },
  { id: 'Q193', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你去过多少个国家/城市？', inputType: 'text' },
  { id: 'Q194', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你有没有在海外工作/生活的经历？', inputType: 'textarea' },
  { id: 'Q195', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你最想再去一次的地方是哪里？', inputType: 'text' },
  { id: 'Q196', chapter: 8, chapterTitle: '热爱与追求', section: '8.2 旅行与探索', text: '你有没有一次"说走就走"的旅行？', inputType: 'textarea' },
  // 8.3 创造与表达
  { id: 'Q197', chapter: 8, chapterTitle: '热爱与追求', section: '8.3 创造与表达', text: '你有没有创作过什么作品？（日记、文章、诗歌、书、歌、绘画等）', inputType: 'textarea' },
  { id: 'Q198', chapter: 8, chapterTitle: '热爱与追求', section: '8.3 创造与表达', text: '你有没有运营过社交媒体/博客/公众号/短视频？', inputType: 'textarea', dependsOn: { questionId: 'Q197', condition: 'has_answer' } },
  { id: 'Q199', chapter: 8, chapterTitle: '热爱与追求', section: '8.3 创造与表达', text: '你有没有一个"一直想做但没开始"的创作？', inputType: 'textarea' },
  { id: 'Q200', chapter: 8, chapterTitle: '热爱与追求', section: '8.3 创造与表达', text: '你梦想过创作什么但没开始的东西吗？', inputType: 'textarea' },
  { id: 'Q201', chapter: 8, chapterTitle: '热爱与追求', section: '8.3 创造与表达', text: '你通常怎么表达自己的内心？（音乐、写作、运动、说话、沉默）', inputType: 'textarea' },

  // ===== 第九章：关系网络 =====
  // 9.1 友谊
  { id: 'Q202', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你一生中最好的朋友是谁？你们的友谊经历了多少年？', inputType: 'textarea' },
  { id: 'Q203', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你在什么情况下交到最好的朋友？', inputType: 'textarea', dependsOn: { questionId: 'Q202', condition: 'has_answer' } },
  { id: 'Q204', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你有没有失去过最好的朋友？因为什么？', inputType: 'textarea', dependsOn: { questionId: 'Q202', condition: 'has_answer' } },
  { id: 'Q205', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你的交友圈子从小到大是如何变化的？', inputType: 'textarea' },
  { id: 'Q206', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你喜欢朋友多还是朋友少而精？', inputType: 'select', options: ['朋友多好', '少而精', '顺其自然'] },
  { id: 'Q207', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你社交圈里有没有一个"贵人"？你们是怎么结识的？', inputType: 'textarea' },
  { id: 'Q208', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你有没有被最信任的人背叛过？', inputType: 'textarea' },
  { id: 'Q209', chapter: 9, chapterTitle: '关系网络', section: '9.1 友谊', text: '你现在还保持联系的最老朋友认识了多少年？', inputType: 'text' },
  // 9.2 社会联系和影响
  { id: 'Q210', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有当过别人的导师/引路人？', inputType: 'textarea' },
  { id: 'Q211', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有加入过什么组织/俱乐部/协会？', inputType: 'textarea' },
  { id: 'Q212', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有参加过公益/慈善活动？', inputType: 'textarea' },
  { id: 'Q213', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有做过志愿者？', inputType: 'textarea' },
  { id: 'Q214', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你在社区/邻里中扮演什么角色？', inputType: 'text' },
  { id: 'Q215', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有影响过别人的人生？（你知道的）', inputType: 'textarea' },
  { id: 'Q216', chapter: 9, chapterTitle: '关系网络', section: '9.2 社会联系和影响', text: '你有没有得到过陌生人的帮助？', inputType: 'textarea' },
  // 9.3 冲突与和解
  { id: 'Q217', chapter: 9, chapterTitle: '关系网络', section: '9.3 冲突与和解', text: '你有没有至今无法原谅的人？', inputType: 'textarea' },
  { id: 'Q218', chapter: 9, chapterTitle: '关系网络', section: '9.3 冲突与和解', text: '你有没有至今无法挽回的"对不起/抱歉"的事？', inputType: 'textarea' },
  { id: 'Q219', chapter: 9, chapterTitle: '关系网络', section: '9.3 冲突与和解', text: '你有没有和别人打过架？为什么？', inputType: 'textarea' },
  { id: 'Q220', chapter: 9, chapterTitle: '关系网络', section: '9.3 冲突与和解', text: '你有没有被别人长期伤害过？你是怎么应对的？', inputType: 'textarea' },
  { id: 'Q221', chapter: 9, chapterTitle: '关系网络', section: '9.3 冲突与和解', text: '你有没有经历过关系的破裂？原因是什么？', inputType: 'textarea' },

  // ===== 第十章：终点/尾声 =====
  // 10.1 回顾与反思
  { id: 'Q222', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你给自己到目前为止的人生打多少分？（1-10分）', inputType: 'select', options: ['1','2','3','4','5','6','7','8','9','10'] },
  { id: 'Q223', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你有没有对自己感到骄傲的部分？是什么？', inputType: 'textarea' },
  { id: 'Q224', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你有没有对自己感到失望的部分？是什么？', inputType: 'textarea' },
  { id: 'Q225', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你人生中最大的教训是什么？', inputType: 'textarea' },
  { id: 'Q226', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你有没有后悔过没有去做的事情？是什么？', inputType: 'textarea' },
  { id: 'Q227', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '如果你的人生是一本书，你会给它起什么名字？', inputType: 'text' },
  { id: 'Q228', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你有没有什么想实现但一直没做成的事？', inputType: 'textarea' },
  { id: 'Q229', chapter: 10, chapterTitle: '终点/尾声', section: '10.1 回顾与反思', text: '你有没有什么遗憾？', inputType: 'textarea' },
  // 10.2 遗产与传承
  { id: 'Q230', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你希望留下什么遗产？（物质/精神/作品等）', inputType: 'textarea' },
  { id: 'Q231', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你有没有写过遗嘱或考虑过这个问题？', inputType: 'textarea' },
  { id: 'Q232', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你最想传给下一代的东西是什么？（不一定是物质的东西）', inputType: 'textarea' },
  { id: 'Q233', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你希望后人记住你什么？', inputType: 'textarea' },
  { id: 'Q234', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你有没有什么话想对后人说但一直没找到机会说？', inputType: 'textarea' },
  { id: 'Q235', chapter: 10, chapterTitle: '终点/尾声', section: '10.2 遗产与传承', text: '你觉得你的人生值得被记录下来吗？为什么？', inputType: 'textarea' },
  // 10.3 现在与未来
  { id: 'Q236', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你现在每天的日常是什么样的？', inputType: 'textarea' },
  { id: 'Q237', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你现在生活的快乐来源是什么？', inputType: 'textarea' },
  { id: 'Q238', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你现在最牵挂的人/事是什么？', inputType: 'text' },
  { id: 'Q239', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你还要实现什么目标？', inputType: 'textarea' },
  { id: 'Q240', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你最想做还没做的一件事是什么？', inputType: 'textarea' },
  { id: 'Q241', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你现在最害怕什么？', inputType: 'text' },
  { id: 'Q242', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '你现在幸福吗？', inputType: 'select', options: ['幸福', '不幸福', '一般', '说不清'] },
  { id: 'Q243', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '如果人生可以重来一次，你想改变什么？', inputType: 'textarea' },
  { id: 'Q244', chapter: 10, chapterTitle: '终点/尾声', section: '10.3 现在与未来', text: '如果人生可以重来一次，你绝对不想改变的是什么？', inputType: 'textarea' },

  // ===== 第十一章：时代背景 =====
  // 11.1 时代与社会运动/历史事件
  { id: 'Q245', chapter: 11, chapterTitle: '时代背景', section: '11.1 时代与社会运动/历史事件', text: '你经历了什么重大历史事件？（战争、运动、改革、灾难等）', inputType: 'textarea' },
  { id: 'Q246', chapter: 11, chapterTitle: '时代背景', section: '11.1 时代与社会运动/历史事件', text: '你亲身经历最深刻的回忆是什么？', inputType: 'textarea', dependsOn: { questionId: 'Q245', condition: 'has_answer' } },
  { id: 'Q247', chapter: 11, chapterTitle: '时代背景', section: '11.1 时代与社会运动/历史事件', text: '那个事件如何改变了你的人生轨迹？', inputType: 'textarea', dependsOn: { questionId: 'Q245', condition: 'has_answer' } },
  { id: 'Q248', chapter: 11, chapterTitle: '时代背景', section: '11.1 时代与社会运动/历史事件', text: '你在大时代中做过哪些选择？后悔过吗？', inputType: 'textarea', dependsOn: { questionId: 'Q245', condition: 'has_answer' } },
  // 11.2 社会身份与标签
  { id: 'Q249', chapter: 11, chapterTitle: '时代背景', section: '11.2 社会身份与标签', text: '你一生中被贴过什么样的身份标签？你是怎么应对的？', inputType: 'textarea' },
  { id: 'Q250', chapter: 11, chapterTitle: '时代背景', section: '11.2 社会身份与标签', text: '你有没有因为身份被歧视/获得特权？', inputType: 'textarea' },
  { id: 'Q251', chapter: 11, chapterTitle: '时代背景', section: '11.2 社会身份与标签', text: '你的自我认同和社会给你的外部标签之间有什么矛盾？', inputType: 'textarea' },
  // 11.3 穿越与假设
  { id: 'Q252', chapter: 11, chapterTitle: '时代背景', section: '11.3 穿越与假设', text: '如果你没有经历过你经历的这一切，你的人生会有什么不同？', inputType: 'textarea' },
  { id: 'Q253', chapter: 11, chapterTitle: '时代背景', section: '11.3 穿越与假设', text: '如果你能回到过去，你最想回到哪一年？做什么？', inputType: 'textarea' },
  { id: 'Q254', chapter: 11, chapterTitle: '时代背景', section: '11.3 穿越与假设', text: '如果你现在可以和已故的某个人说一句话，你会说什么？', inputType: 'textarea' },
  { id: 'Q255', chapter: 11, chapterTitle: '时代背景', section: '11.3 穿越与假设', text: '如果你的人生只剩一年，你会怎么度过？', inputType: 'textarea' },
  { id: 'Q256', chapter: 11, chapterTitle: '时代背景', section: '11.3 穿越与假设', text: '如果有一个"重新开始"的按钮，你会按吗？', inputType: 'select', options: ['会', '不会', '不确定'] },
  // 11.4 记忆中的感官细节
  { id: 'Q257', chapter: 11, chapterTitle: '时代背景', section: '11.4 记忆中的感官细节', text: '请你闭上眼睛回忆一下童年时的家。（颜色、气味、光线）', inputType: 'textarea' },
  { id: 'Q258', chapter: 11, chapterTitle: '时代背景', section: '11.4 记忆中的感官细节', text: '童年里你最怀念的一种味道是什么？', inputType: 'text' },
  { id: 'Q259', chapter: 11, chapterTitle: '时代背景', section: '11.4 记忆中的感官细节', text: '你人生中第一首歌/一段旋律是什么？有什么故事？', inputType: 'textarea' },
  { id: 'Q260', chapter: 11, chapterTitle: '时代背景', section: '11.4 记忆中的感官细节', text: '你的第一张照片/全家福是什么样的？', inputType: 'textarea' },
  { id: 'Q261', chapter: 11, chapterTitle: '时代背景', section: '11.4 记忆中的感官细节', text: '你有没有一个一辈子都忘不掉的声音？是什么？', inputType: 'textarea' },
];

/** Get all questions that should be visible given a set of answered questions */
export function getVisibleQuestions(answeredMap: Map<string, string>): Question[] {
  return questions.filter(q => {
    if (!q.dependsOn) return true;
    const dep = q.dependsOn;
    const depAnswer = answeredMap.get(dep.questionId);

    switch (dep.condition) {
      case 'has_answer':
        return depAnswer !== undefined && depAnswer !== null && depAnswer.trim() !== '';
      case 'has_no_answer':
        return depAnswer === undefined || depAnswer === null || depAnswer.trim() === '';
      case 'answer_equals':
        return depAnswer === dep.value;
      case 'answer_not_equals':
        return depAnswer !== dep.value;
      default:
        return true;
    }
  });
}

/** Get all questions (for listing) — some may be hidden based on skip logic */
export function getAllQuestions(): Question[] {
  return questions;
}

/** Get question by ID */
export function getQuestion(id: string): Question | undefined {
  return questions.find(q => q.id === id);
}
