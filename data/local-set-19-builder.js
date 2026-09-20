(() => {
  const bank = window.LOCAL_SET_19_BANK || [];
  const sets = window.QUIZ_SETS = window.QUIZ_SETS || [];
  if (sets.some(set => set.id === 'local-set-19')) return;

  const DOMAIN_NAMES = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };

  const TASK_NAMES = {
    '1.1':'Explain basic AI concepts and terminologies',
    '1.2':'Identify practical use cases for AI',
    '1.3':'Describe the AI/ML development lifecycle',
    '2.1':'Explain the basic concepts of generative AI (GenAI)',
    '2.2':'Understand the capabilities and limitations of GenAI for solving business problems',
    '2.3':'Describe AWS infrastructure and technologies for building GenAI applications',
    '3.1':'Describe design considerations for applications that use foundation models (FMs)',
    '3.2':'Choose effective prompt engineering techniques',
    '3.3':'Describe the training and fine-tuning process for FMs',
    '3.4':'Describe methods to evaluate FM performance',
    '4.1':'Explain the development of AI systems that are responsible',
    '4.2':'Recognize the importance of transparent and explainable models',
    '5.1':'Explain methods to secure AI systems',
    '5.2':'Recognize governance and compliance regulations for AI systems'
  };

  const KNOWN_VOCAB = {
    intermittent:'มาเป็นช่วง ๆ / ไม่ต่อเนื่อง',
    dedicated:'จัดสรรเฉพาะ / สงวนไว้เฉพาะ',
    auditors:'ผู้ตรวจสอบ / ผู้ตรวจประเมิน',
    materially:'อย่างมีนัยสำคัญ / มากพอที่จะมีผล',
    persistent:'คงอยู่ต่อเนื่อง / ไม่หายเมื่อจบช่วงสั้น ๆ',
    substantially:'อย่างมาก / อย่างมีนัยสำคัญ',
    downstream:'ขั้นตอนหรืองานที่นำผลไปใช้ต่อ',
    jurisdiction:'เขตอำนาจตามกฎหมาย',
    plausible:'สมเหตุสมผล / เป็นไปได้ในสถานการณ์จริง',
    repetitive:'ซ้ำ ๆ',
    predictable:'คาดการณ์ได้',
    reusable:'นำกลับมาใช้ซ้ำได้',
    curated:'คัดเลือกและจัดเตรียมอย่างมีคุณภาพ',
    oversight:'การกำกับดูแล',
    recourse:'ช่องทางให้ผู้ได้รับผลกระทบขอทบทวนหรือแก้ไข',
    immutable:'แก้ไขย้อนหลังไม่ได้ / ไม่เปลี่ยนแปลง',
    disclose:'เปิดเผย / แจ้งให้ทราบ',
    confidential:'เป็นความลับ',
    obligation:'ข้อผูกพัน / หน้าที่ที่ต้องปฏิบัติ',
    prohibited:'ถูกห้าม',
    baseline:'ค่าหรือสภาพตั้งต้นสำหรับใช้เปรียบเทียบ',
    degrade:'เสื่อมลง / ประสิทธิภาพลดลง',
    representative:'เป็นตัวแทนของกลุ่มเป้าหมายได้ดี',
    consequential:'มีผลกระทบสำคัญ',
    disparity:'ความแตกต่าง / ความเหลื่อมล้ำระหว่างกลุ่ม',
    rural:'ชนบท / พื้นที่ชนบท',
    retailer:'ร้านค้าปลีก / บริษัทค้าปลีก',
    churn:'ลูกค้าเลิกใช้ / ยกเลิกบริการ',
    unsupported:'ไม่มีหลักฐานหรือแหล่งข้อมูลรองรับ',
    relevant:'เกี่ยวข้อง / ตรงกับเรื่อง',
    irrelevant:'ไม่เกี่ยวข้อง / ไม่ตรงกับเรื่อง',
    candidate:'ตัวเลือกที่นำมาเปรียบเทียบ',
    approval:'การอนุมัติ',
    capacity:'ความสามารถรองรับงาน / ความจุ',
    explicitly:'อย่างชัดเจน / ระบุไว้ชัดเจน',
    deterministic:'ให้ผลหรือเส้นทางที่กำหนดแน่นอน',
    orchestration:'การควบคุมและจัดลำดับการทำงาน',
    outlier:'ค่าที่หลุดจากกลุ่ม / ค่าผิดปกติ',
    majority:'กลุ่มส่วนใหญ่',
    minority:'กลุ่มส่วนน้อย',
    broader:'กว้างกว่า / ครอบคลุมมากกว่า',
    unchanged:'ไม่เปลี่ยนแปลง',
    varied:'หลากหลาย / แตกต่างกัน',
    'rather than':'แทนที่จะเป็น',
    expose:'เปิดให้เข้าถึง / เปิดเผยความสามารถ',
    eligible:'มีสิทธิ์ / ผ่านเกณฑ์ที่จะถูกนำมาพิจารณา',
    prior:'ก่อนหน้า / ที่เกิดขึ้นหรืออยู่มาก่อน',
    factual:'เป็นข้อเท็จจริง / ถูกต้องตามข้อเท็จจริง',
    uncertain:'ไม่แน่ใจ / มีความมั่นใจต่ำ',
    legitimate:'ถูกต้องตามปกติ / ไม่ใช่ธุรกรรมทุจริต',
    cumulative:'สะสมรวมกัน / รวมต่อเนื่อง',
    'intended use':'วัตถุประสงค์การใช้งานที่ตั้งใจไว้',
    persistently:'อย่างต่อเนื่อง / แบบคงอยู่',
    narrower:'แคบลง / จำกัดมากขึ้น',
    elsewhere:'ที่อื่น / ในส่วนอื่น',
    confidently:'อย่างมั่นใจ',
    approximates:'เลียนแบบ / ให้ผลใกล้เคียงกับ',
    citations:'การอ้างอิง / แหล่งอ้างอิง'
  };

  function vocabFor(question) {
    const stem = String(question.question || '').toLowerCase();
    const choiceText = Object.values(question.choices || {}).join(' ').toLowerCase();
    const result = [];
    for (const [term, th] of Object.entries(KNOWN_VOCAB)) {
      const key = term.toLowerCase();
      if (!stem.includes(key)) continue;
      if (choiceText.includes(key)) continue;
      result.push({ term, th });
    }
    return result.slice(0, 3);
  }

  function seededShuffle(items, seed) {
    const out = [...items];
    let state = seed >>> 0;
    for (let i = out.length - 1; i > 0; i--) {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      const j = state % (i + 1);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  const expectedDomains = {1:13,2:16,3:18,4:9,5:9};
  const expectedTypes = {single:40,multiple:15,ordering:5,matching:5};
  const domainCounts = {};
  const typeCounts = {};
  const taskCounts = {};

  bank.forEach(q => {
    domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    taskCounts[q.task] = (taskCounts[q.task] || 0) + 1;
  });

  const validDomains = bank.length === 65 &&
    Object.entries(expectedDomains).every(([key, count]) => domainCounts[key] === count);
  const validTypes = Object.entries(expectedTypes).every(([key, count]) => typeCounts[key] === count);
  const missingTasks = Object.keys(TASK_NAMES).filter(task => !taskCounts[task]);
  const clueStyle = bank.filter(q => /\bthe clue is\b/i.test(q.question || ''));

  if (!validDomains || !validTypes || missingTasks.length || clueStyle.length) {
    console.error('Set 19 blueprint validation failed', {
      total: bank.length,
      domainCounts,
      expectedDomains,
      typeCounts,
      expectedTypes,
      missingTasks,
      clueStyle: clueStyle.map(q => q.question)
    });
    return;
  }

  const questions = seededShuffle(bank, 19092026).map((q, index) => ({
    id:index + 1,
    domain:q.domain,
    domainName:DOMAIN_NAMES[q.domain],
    task:q.task,
    taskName:TASK_NAMES[q.task],
    question:q.question,
    questionTh:q.questionTh,
    choices:q.choices,
    answer:q.answer,
    explanation:q.explanation,
    type:q.type,
    ...(q.matches ? { matches:q.matches } : {}),
    vocab:vocabFor(q)
  }));

  sets.push({
    id:'local-set-19',
    title:'Local Mock Set 19',
    subtitle:'Exam-Guide Coverage · Scenario + Close Distractors · Mixed Formats',
    questionCount:65,
    questions
  });
})();