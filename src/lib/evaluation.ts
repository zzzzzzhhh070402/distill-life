export interface Criterion {
  id: string;
  dimension: number;
  dimensionTitle: string;
  text: string;
  description: string;
}

export interface DimensionInfo {
  num: number;
  title: string;
  criteria: Criterion[];
}

export const dimensions: DimensionInfo[] = [
  {
    num: 1, title: '命运轨迹与韧性',
    criteria: [
      { id: 'E01', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '起点评估', description: '出身阶层、家庭背景、初始资源（含地理位置、时代背景）' },
      { id: 'E02', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '转折点质量', description: '人生关键转折点的数量、抓住/错过/创造转折点的能力' },
      { id: 'E03', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '挫折与反弹', description: '面对重大挫折的应对方式、恢复时间、恢复后的状态（比原来更强/回到原点/不如从前）' },
      { id: 'E04', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '命运走向', description: '人生整体走势：上升/平台/下降/波动' },
      { id: 'E05', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '运气成分', description: '在关键节点上运气好还是差，好运vs努力的比例' },
      { id: 'E06', dimension: 1, dimensionTitle: '命运轨迹与韧性', text: '选择质量', description: '人生分叉路口的选择质量：主动决策还是被动接受' },
    ]
  },
  {
    num: 2, title: '事业与成就',
    criteria: [
      { id: 'E07', dimension: 2, dimensionTitle: '事业与成就', text: '专业高度', description: '职位的最高级别、行业影响力、在领域内达到的位置' },
      { id: 'E08', dimension: 2, dimensionTitle: '事业与成就', text: '独创性', description: '是否有独创贡献、创新程度、是否是原创性工作' },
      { id: 'E09', dimension: 2, dimensionTitle: '事业与成就', text: '财富积累', description: '财富最高峰值、积累速度、财富来源正当性' },
      { id: 'E10', dimension: 2, dimensionTitle: '事业与成就', text: '社会影响力', description: '直接/间接影响的人数及其影响范围' },
      { id: 'E11', dimension: 2, dimensionTitle: '事业与成就', text: '持续性', description: '高峰持续的时间、是昙花一现还是长期稳定' },
      { id: 'E12', dimension: 2, dimensionTitle: '事业与成就', text: '天赋匹配度', description: '天赋与职业的匹配程度，是否在做擅长/热爱的事' },
      { id: 'E13', dimension: 2, dimensionTitle: '事业与成就', text: '职业满意度', description: '对自己的职业成就是否满意、成就与自我预期的差距' },
    ]
  },
  {
    num: 3, title: '关系与爱',
    criteria: [
      { id: 'E14', dimension: 3, dimensionTitle: '关系与爱', text: '爱的能力', description: '表达爱的方式（质量、深度）、能否深度爱一个人' },
      { id: 'E15', dimension: 3, dimensionTitle: '关系与爱', text: '被爱的程度', description: '被多少人真正爱过、被爱的深度' },
      { id: 'E16', dimension: 3, dimensionTitle: '关系与爱', text: '家庭经营', description: '配偶/子女关系质量、家庭氛围' },
      { id: 'E17', dimension: 3, dimensionTitle: '关系与爱', text: '友谊质量', description: '是否有真心朋友、友谊的深度和持续性' },
      { id: 'E18', dimension: 3, dimensionTitle: '关系与爱', text: '关系网络', description: '社会支持系统是否强大、遇到困难时有人可依靠' },
      { id: 'E19', dimension: 3, dimensionTitle: '关系与爱', text: '关系修复力', description: '破裂的关系能否修复、是否会道歉、是否能原谅' },
      { id: 'E20', dimension: 3, dimensionTitle: '关系与爱', text: '影响力半径', description: '让周围的人变得更好还是更差' },
    ]
  },
  {
    num: 4, title: '性格与精神内核',
    criteria: [
      { id: 'E21', dimension: 4, dimensionTitle: '性格与精神内核', text: '韧性', description: '面对挫折和恐惧时的心理承受力、能否多次站起来' },
      { id: 'E22', dimension: 4, dimensionTitle: '性格与精神内核', text: '真实性', description: '对自己和他人是否诚实、真实程度' },
      { id: 'E23', dimension: 4, dimensionTitle: '性格与精神内核', text: '同理心', description: '站在别人角度看问题的能力' },
      { id: 'E24', dimension: 4, dimensionTitle: '性格与精神内核', text: '自律', description: '能否长期坚持做正确的事' },
      { id: 'E25', dimension: 4, dimensionTitle: '性格与精神内核', text: '好奇心', description: '是否保持持续学习和探索的心态' },
      { id: 'E26', dimension: 4, dimensionTitle: '性格与精神内核', text: '建设性', description: '面对逆境时是抱怨、逃避还是积极解决问题' },
      { id: 'E27', dimension: 4, dimensionTitle: '性格与精神内核', text: '内外一致性', description: '说的和做的是否一致' },
      { id: 'E28', dimension: 4, dimensionTitle: '性格与精神内核', text: '情绪管理', description: '是否容易失控、如何处理负面情绪' },
      { id: 'E29', dimension: 4, dimensionTitle: '性格与精神内核', text: '谦逊', description: '自我认知的准确度、是否承认错误' },
    ]
  },
  {
    num: 5, title: '价值与底线',
    criteria: [
      { id: 'E30', dimension: 5, dimensionTitle: '价值与底线', text: '道德底线', description: '是否有不可逾越的底线、是否守住了底线' },
      { id: 'E31', dimension: 5, dimensionTitle: '价值与底线', text: '利他vs利己', description: '为他人/社会贡献了什么' },
      { id: 'E32', dimension: 5, dimensionTitle: '价值与底线', text: '正义感', description: '面对不公时是沉默、发声还是行动' },
      { id: 'E33', dimension: 5, dimensionTitle: '价值与底线', text: '诚信', description: '承诺的兑现程度' },
      { id: 'E34', dimension: 5, dimensionTitle: '价值与底线', text: '对弱者的态度', description: '如何对待比你弱势的人，最能体现真实品格' },
      { id: 'E35', dimension: 5, dimensionTitle: '价值与底线', text: '社会责任', description: '对社会责任的认知和履行程度' },
    ]
  },
  {
    num: 6, title: '智慧与自知',
    criteria: [
      { id: 'E36', dimension: 6, dimensionTitle: '智慧与自知', text: '自我认知深度', description: '是否知道自己的优点、缺点和盲区' },
      { id: 'E37', dimension: 6, dimensionTitle: '智慧与自知', text: '世界观成熟度', description: '是否有超越个人经验的宏观视野' },
      { id: 'E38', dimension: 6, dimensionTitle: '智慧与自知', text: '从错误中学习', description: '是否重复犯同样的错误' },
      { id: 'E39', dimension: 6, dimensionTitle: '智慧与自知', text: '判断力', description: '面对重大选择时的判断是否基本正确' },
      { id: 'E40', dimension: 6, dimensionTitle: '智慧与自知', text: '对不确定性的容忍', description: '是否能接受模糊/不确定的状态' },
      { id: 'E41', dimension: 6, dimensionTitle: '智慧与自知', text: '换位思考', description: '能否理解不同立场、看问题是否单一视角' },
    ]
  },
  {
    num: 7, title: '身心健康',
    criteria: [
      { id: 'E42', dimension: 7, dimensionTitle: '身心健康', text: '身体健康', description: '是否有良好的身体基础和健康习惯' },
      { id: 'E43', dimension: 7, dimensionTitle: '身心健康', text: '心理健康', description: '是否经历过心理危机、恢复情况如何' },
      { id: 'E44', dimension: 7, dimensionTitle: '身心健康', text: '精力水平', description: '在同龄人中的精力水平' },
      { id: 'E45', dimension: 7, dimensionTitle: '身心健康', text: '衰老速度', description: '身体/认知/外貌的衰老速度' },
      { id: 'E46', dimension: 7, dimensionTitle: '身心健康', text: '生命力', description: '整体生命力和活力' },
    ]
  },
  {
    num: 8, title: '生命丰富度',
    criteria: [
      { id: 'E47', dimension: 8, dimensionTitle: '生命丰富度', text: '体验的广度', description: '是否尝试过多样化的人生体验（旅行/文化/技能等）' },
      { id: 'E48', dimension: 8, dimensionTitle: '生命丰富度', text: '体验的深度', description: '是否有深入的、非浅尝辄止的体验' },
      { id: 'E49', dimension: 8, dimensionTitle: '生命丰富度', text: '冒险精神', description: '是否敢于走出舒适区、尝试新事物的频率' },
      { id: 'E50', dimension: 8, dimensionTitle: '生命丰富度', text: '热爱的浓度', description: '心流状态的体验频率、是否有全心投入的事' },
      { id: 'E51', dimension: 8, dimensionTitle: '生命丰富度', text: '创造力', description: '是否有自己的创作（文字/艺术/思想/产品等）' },
      { id: 'E52', dimension: 8, dimensionTitle: '生命丰富度', text: '日常仪式感', description: '是否能在日常中找到美感和意义' },
    ]
  },
  {
    num: 9, title: '遗产与影响',
    criteria: [
      { id: 'E53', dimension: 9, dimensionTitle: '遗产与影响', text: '物质遗产', description: '留下了什么物质财富或资产' },
      { id: 'E54', dimension: 9, dimensionTitle: '遗产与影响', text: '思想遗产', description: '是否有被记住的观点或教导' },
      { id: 'E55', dimension: 9, dimensionTitle: '遗产与影响', text: '后代培养', description: '子女/学生的成长质量' },
      { id: 'E56', dimension: 9, dimensionTitle: '遗产与影响', text: '文化贡献', description: '作品、思想、行为对文化的贡献' },
      { id: 'E57', dimension: 9, dimensionTitle: '遗产与影响', text: '被记住的程度', description: '有多少人会在TA死后真正怀念TA' },
      { id: 'E58', dimension: 9, dimensionTitle: '遗产与影响', text: '行为遗产', description: '是否改变了周围人的人生轨迹' },
    ]
  },
  {
    num: 10, title: '幸福与满足',
    criteria: [
      { id: 'E59', dimension: 10, dimensionTitle: '幸福与满足', text: '主观幸福感', description: 'TA自己觉得自己幸福吗？' },
      { id: 'E60', dimension: 10, dimensionTitle: '幸福与满足', text: '内心安宁', description: '是否达到了内心的平静' },
      { id: 'E61', dimension: 10, dimensionTitle: '幸福与满足', text: '遗憾密度', description: '遗憾的数量和质量/大小' },
      { id: 'E62', dimension: 10, dimensionTitle: '幸福与满足', text: '意义感', description: '是否找到了自己的"为什么而活"' },
      { id: 'E63', dimension: 10, dimensionTitle: '幸福与满足', text: '当下的满足', description: '对现状的满意度 vs 对未来的焦虑比' },
      { id: 'E64', dimension: 10, dimensionTitle: '幸福与满足', text: '自由度', description: '在多大程度上活出了自己' },
    ]
  },
  {
    num: 11, title: '综合评分（1-10分）',
    criteria: [
      { id: 'E65', dimension: 11, dimensionTitle: '综合评分', text: '起点禀赋', description: '天赋/家境/初始条件' },
      { id: 'E66', dimension: 11, dimensionTitle: '综合评分', text: '事业成就', description: '事业发展综合评分' },
      { id: 'E67', dimension: 11, dimensionTitle: '综合评分', text: '财富状况', description: '财富积累综合评分' },
      { id: 'E68', dimension: 11, dimensionTitle: '综合评分', text: '亲密关系质量', description: '爱情/伴侣关系评分' },
      { id: 'E69', dimension: 11, dimensionTitle: '综合评分', text: '家庭幸福指数', description: '家庭整体幸福度评分' },
      { id: 'E70', dimension: 11, dimensionTitle: '综合评分', text: '身心状况', description: '身体和心理健康综合评分' },
      { id: 'E71', dimension: 11, dimensionTitle: '综合评分', text: '精神世界', description: '精神生活的丰富程度评分' },
      { id: 'E72', dimension: 11, dimensionTitle: '综合评分', text: '人格魅力/品格', description: '人格和品德综合评分' },
      { id: 'E73', dimension: 11, dimensionTitle: '综合评分', text: '智慧/自知深度', description: '智慧和自我认知评分' },
      { id: 'E74', dimension: 11, dimensionTitle: '综合评分', text: '生命丰富度', description: '人生体验丰富度评分' },
      { id: 'E75', dimension: 11, dimensionTitle: '综合评分', text: '社会影响力', description: '对他人和社会的影响评分' },
      { id: 'E76', dimension: 11, dimensionTitle: '综合评分', text: '遗产/传承', description: '留下遗产的价值评分' },
      { id: 'E77', dimension: 11, dimensionTitle: '综合评分', text: '主观幸福感', description: '自我感知的幸福程度' },
      { id: 'E78', dimension: 11, dimensionTitle: '综合评分', text: '人生平衡/无悔程度', description: '整体人生平衡度和无悔程度' },
    ]
  },
];

/** Generate evaluation report from answers */
export function generateReport(answers: Record<string, string>): {
  dimensionScores: { dimension: number; title: string; criteriaScores: { id: string; text: string; score: number; note: string }[]; avgScore: number }[];
  overallScore: number;
  summary: string;
} {
  const dimensionScores = dimensions.map(dim => {
    const criteriaScores = dim.criteria.map(c => ({
      id: c.id,
      text: c.text,
      score: calculateCriterionScore(c.id, answers),
      note: generateCriterionNote(c.id, answers),
    }));
    const avgScore = criteriaScores.reduce((s, c) => s + c.score, 0) / criteriaScores.length;
    return { dimension: dim.num, title: dim.title, criteriaScores, avgScore: Math.round(avgScore * 10) / 10 };
  });

  const overallScore = Math.round(dimensionScores.reduce((s, d) => s + d.avgScore, 0) / dimensionScores.length * 10) / 10;

  const summary = generateSummary(answers, dimensionScores, overallScore);

  return { dimensionScores, overallScore, summary };
}

function calculateCriterionScore(criterionId: string, answers: Record<string, string>): number {
  const answeredCount = Object.values(answers).filter(a => a && a.trim()).length;
  const totalQuestions = 261;
  const coverageRatio = answeredCount / totalQuestions;

  // Base score from coverage
  let baseScore = 5;

  // Adjust based on specific criterion and relevant answers
  const relevantAnswers = getRelevantAnswers(criterionId, answers);
  const positiveIndicators = countPositiveIndicators(criterionId, relevantAnswers);
  const negativeIndicators = countNegativeIndicators(criterionId, relevantAnswers);

  baseScore += positiveIndicators * 0.5;
  baseScore -= negativeIndicators * 0.5;
  baseScore += (coverageRatio - 0.3) * 2;

  return Math.max(1, Math.min(10, Math.round(baseScore)));
}

function getRelevantAnswers(criterionId: string, answers: Record<string, string>): Record<string, string> {
  // Map criteria to relevant question ranges
  const mapping: Record<string, string[]> = {
    'E01': ['Q001','Q002','Q003','Q004','Q008','Q009','Q012','Q013','Q015'],
    'E02': ['Q145','Q146','Q147','Q148','Q149','Q150'],
    'E03': ['Q041','Q042','Q119','Q120','Q132','Q133','Q148','Q154'],
    'E04': ['Q145','Q149','Q222','Q227'],
    'E05': ['Q004','Q015','Q152','Q153'],
    'E06': ['Q060','Q063','Q092','Q093','Q115','Q150','Q151'],
    'E07': ['Q085','Q091','Q114','Q115','Q117'],
    'E08': ['Q091','Q116','Q117','Q197'],
    'E09': ['Q081','Q089','Q118','Q162','Q163'],
    'E10': ['Q117','Q210','Q211','Q212','Q213','Q215'],
    'E11': ['Q091','Q114','Q121','Q122'],
    'E12': ['Q070','Q071','Q121','Q184','Q185','Q187'],
    'E13': ['Q121','Q122','Q164','Q222'],
    'E14': ['Q095','Q096','Q097','Q103','Q104'],
    'E15': ['Q095','Q096','Q202','Q203','Q207'],
    'E16': ['Q099','Q100','Q101','Q103','Q123','Q124','Q125','Q126','Q127'],
    'E17': ['Q034','Q064','Q202','Q203','Q204','Q206','Q209'],
    'E18': ['Q016','Q082','Q202','Q205','Q207'],
    'E19': ['Q102','Q204','Q217','Q218','Q220','Q221'],
    'E20': ['Q126','Q210','Q215','Q216'],
    'E21': ['Q041','Q119','Q132','Q148','Q154'],
    'E22': ['Q151','Q158','Q159','Q176'],
    'E23': ['Q023','Q028','Q178'],
    'E24': ['Q030','Q031','Q136','Q182','Q183'],
    'E25': ['Q033','Q073','Q188','Q195'],
    'E26': ['Q090','Q119','Q133','Q144','Q148','Q181'],
    'E27': ['Q151','Q158','Q159','Q176'],
    'E28': ['Q177','Q180','Q181'],
    'E29': ['Q173','Q174','Q175','Q183'],
    'E30': ['Q151','Q157','Q158','Q159'],
    'E31': ['Q156','Q162','Q212','Q213','Q216'],
    'E32': ['Q029','Q065','Q212','Q144'],
    'E33': ['Q099','Q151','Q218'],
    'E34': ['Q023','Q131','Q216'],
    'E35': ['Q212','Q213','Q214','Q230'],
    'E36': ['Q173','Q174','Q176','Q183'],
    'E37': ['Q155','Q156','Q160','Q161','Q192'],
    'E38': ['Q087','Q140','Q150','Q165','Q225'],
    'E39': ['Q060','Q063','Q092','Q145','Q147'],
    'E40': ['Q109','Q139','Q172','Q179'],
    'E41': ['Q028','Q067','Q161','Q178'],
    'E42': ['Q132','Q134','Q135','Q136','Q137'],
    'E43': ['Q133','Q137','Q138','Q180','Q181'],
    'E44': ['Q135','Q136'],
    'E45': ['Q134','Q135'],
    'E46': ['Q024','Q135','Q136','Q237'],
    'E47': ['Q191','Q193','Q194','Q195','Q196'],
    'E48': ['Q185','Q187','Q191','Q192'],
    'E49': ['Q045','Q108','Q154','Q196'],
    'E50': ['Q187','Q184','Q185','Q189'],
    'E51': ['Q197','Q198','Q199','Q200','Q201'],
    'E52': ['Q022','Q190','Q236','Q237'],
    'E53': ['Q118','Q230','Q231'],
    'E54': ['Q166','Q167','Q168','Q169','Q170','Q232'],
    'E55': ['Q124','Q125','Q126','Q232'],
    'E56': ['Q197','Q198','Q211','Q212'],
    'E57': ['Q202','Q203','Q233'],
    'E58': ['Q143','Q210','Q215'],
    'E59': ['Q242'],
    'E60': ['Q227','Q237','Q242'],
    'E61': ['Q069','Q140','Q226','Q228','Q229'],
    'E62': ['Q141','Q156','Q164','Q170'],
    'E63': ['Q236','Q237','Q238','Q242'],
    'E64': ['Q106','Q107','Q151','Q243','Q244'],
    'E65': ['Q001','Q002','Q003','Q008','Q009','Q012'],
    'E66': ['Q085','Q091','Q114','Q122'],
    'E67': ['Q118','Q162'],
    'E68': ['Q096','Q099','Q100','Q103'],
    'E69': ['Q016','Q100','Q123','Q125'],
    'E70': ['Q132','Q133','Q135','Q136'],
    'E71': ['Q155','Q156','Q168','Q184','Q197'],
    'E72': ['Q157','Q158','Q173','Q174'],
    'E73': ['Q165','Q166','Q170','Q172','Q175'],
    'E74': ['Q191','Q193','Q196','Q184'],
    'E75': ['Q117','Q210','Q211','Q215'],
    'E76': ['Q197','Q230','Q232','Q233'],
    'E77': ['Q237','Q242'],
    'E78': ['Q222','Q229','Q243','Q244'],
  };

  const relevantIds = mapping[criterionId] || [];
  const result: Record<string, string> = {};
  for (const id of relevantIds) {
    if (answers[id]) result[id] = answers[id];
  }
  return result;
}

function countPositiveIndicators(criterionId: string, answers: Record<string, string>): number {
  let count = 0;
  const answeredCount = Object.values(answers).filter(a => a && a.trim()).length;

  // More answers = more positive indicators (the person has lived a full life)
  if (answeredCount >= 3) count += 1;
  if (answeredCount >= 5) count += 1;
  if (answeredCount >= 8) count += 1;

  // Check for specific positive indicators
  for (const answer of Object.values(answers)) {
    const lower = answer.toLowerCase();
    if (['幸福', '快乐', '满意', '成功', '热爱', '温暖', '骄傲', '幸运', '值得', '有意义', '满足'].some(w => lower.includes(w))) {
      count += 1;
    }
    if (['是', '有', '会', '能', '可以'].some(w => lower.startsWith(w))) {
      count += 0.5;
    }
  }

  return count;
}

function countNegativeIndicators(criterionId: string, answers: Record<string, string>): number {
  let count = 0;
  for (const answer of Object.values(answers)) {
    const lower = answer.toLowerCase();
    if (['后悔', '遗憾', '痛苦', '失败', '不幸', '压抑', '恐惧', '迷茫', '孤独', '无法', '不能', '没有', '从未'].some(w => lower.includes(w))) {
      count += 1;
    }
  }
  return count;
}

function generateCriterionNote(criterionId: string, answers: Record<string, string>): string {
  const relevant = getRelevantAnswers(criterionId, answers);
  const answeredCount = Object.keys(relevant).length;
  if (answeredCount === 0) return '没有足够数据';
  if (answeredCount <= 2) return '基于少量信息评估';
  if (answeredCount <= 5) return '基于部分信息评估';
  return '基于较充分信息评估';
}

function generateSummary(
  answers: Record<string, string>,
  dimensionScores: { dimension: number; title: string; avgScore: number }[],
  overallScore: number
): string {
  const highDims = dimensionScores.filter(d => d.avgScore >= 7).map(d => d.title);
  const lowDims = dimensionScores.filter(d => d.avgScore < 4).map(d => d.title);

  let summary = '';

  if (overallScore >= 8) {
    summary += '综合来看，这是一个非常充实且有意义的人生。';
  } else if (overallScore >= 6) {
    summary += '综合来看，这是一个有收获也有遗憾的人生。';
  } else if (overallScore >= 4) {
    summary += '综合来看，这是一个经历了不少坎坷但仍然在坚持的人生。';
  } else {
    summary += '综合来看，这是一个充满挑战和困难的人生。';
  }

  if (highDims.length > 0) {
    summary += ` TA在${highDims.slice(0, 3).join('、')}方面表现尤为突出。`;
  }
  if (lowDims.length > 0) {
    summary += ` 在${lowDims.slice(0, 3).join('、')}方面则有较大的成长空间。`;
  }

  return summary;
}
