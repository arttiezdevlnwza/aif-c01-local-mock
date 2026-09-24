(() => {
  const bank = window.LOCAL_SET_21_22_BANK || [];
  const expectedDomains = {1:13,2:16,3:18,4:9,5:9};
  const expectedTypes = {single:40,multiple:15,ordering:5,matching:5};
  const requiredTasks = ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3','3.4','4.1','4.2','5.1','5.2'];
  const domainNames = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };

  const vocabBank = {
    'audit trail':'บันทึกหลักฐานย้อนหลังสำหรับการตรวจสอบ',
    'assurance':'การให้ความเชื่อมั่น / หลักฐานยืนยัน',
    'candidate':'ตัวเลือกที่นำมาเปรียบเทียบ',
    'compliance':'การปฏิบัติตามข้อกำกับหรือข้อกำหนด',
    'consequential':'มีผลกระทบสำคัญ',
    'curate':'คัดเลือกและจัดเตรียมอย่างมีคุณภาพ',
    'curated':'ที่ผ่านการคัดเลือกและจัดเตรียม',
    'degradation':'การเสื่อมลงของคุณภาพหรือประสิทธิภาพ',
    'deterministic':'ให้ผลหรือเส้นทางที่กำหนดแน่นอน',
    'disparity':'ความแตกต่างหรือความเหลื่อมล้ำระหว่างกลุ่ม',
    'evidence':'หลักฐาน',
    'exposure':'การเปิดเผย / การทำให้เสี่ยงต่อการเข้าถึง',
    'high-volume':'ปริมาณงานสูง',
    'immutable':'แก้ไขย้อนหลังไม่ได้ / ไม่เปลี่ยนแปลง',
    'infer':'อนุมาน',
    'infringe':'ละเมิดสิทธิ์',
    'mitigation':'การลดหรือบรรเทาความเสี่ยง',
    'nondeterministic':'ผลลัพธ์อาจแปรผันแม้ input เหมือนเดิม',
    'rather than':'แทนที่จะเป็น',
    'reproduce':'ทำซ้ำให้ได้ผลหรือเงื่อนไขเดิม',
    'reproducibility':'ความสามารถในการทำซ้ำให้ได้ผลเดิม',
    'representative':'เป็นตัวแทนของประชากรหรือกรณีที่ต้องการได้ดี',
    'residency':'ข้อกำหนดว่าข้อมูลต้องอยู่หรือประมวลผลที่ใด',
    'retention':'ระยะเวลาที่ต้องเก็บข้อมูล',
    'review cadence':'ความถี่หรือรอบเวลาของการทบทวน',
    'scoping':'การกำหนดขอบเขต',
    'subgroup':'กลุ่มย่อย',
    'throughput':'ปริมาณงานที่ระบบรองรับได้ในช่วงเวลา',
    'traceable':'ตรวจสอบย้อนกลับได้',
    'untouched':'ที่ยังไม่ถูกนำมาใช้ในการตัดสินใจหรือปรับแต่ง',
    'unbiased':'ไม่ลำเอียง',
    'under-represents':'มีตัวแทนของกลุ่มนั้นน้อยเกินไป'
  };

  function buildVocab(question, choices) {
    const stem = String(question || '').toLowerCase();
    const choiceText = Object.values(choices || {}).join(' ').toLowerCase();
    return Object.entries(vocabBank)
      .filter(([term]) => stem.includes(term.toLowerCase()) && !choiceText.includes(term.toLowerCase()))
      .slice(0, 3)
      .map(([term, th]) => ({term, th}));
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function buildSet(setNumber) {
    const questions = bank.map((item, index) => {
      const variant = item.v?.[setNumber];
      if (!variant) throw new Error(`Missing Set ${setNumber} variant for bank item ${index + 1}`);
      const [question, questionTh] = variant;
      const effectiveChoices = setNumber === 22 && item.choices22 ? item.choices22 : item.choices;
      const effectiveExplanation = setNumber === 22 && item.exp22 ? item.exp22 : item.exp;
      const q = {
        id:index + 1,
        domain:item.domain,
        domainName:domainNames[item.domain],
        question,
        questionTh,
        choices:clone(effectiveChoices),
        answer:clone(item.answer),
        explanation:(effectiveExplanation || []).join('\n'),
        type:item.type,
        vocab:buildVocab(question, effectiveChoices),
        task:item.task,
        _target:item.target
      };
      if (item.matches) q.matches = clone(item.matches);
      return q;
    });

    return {
      id:`local-set-${setNumber}`,
      title:`Local Mock Set ${setNumber}`,
      subtitle:setNumber === 21
        ? 'Targeted Weakness + Under-covered Topics · Retest A'
        : 'Targeted Weakness + Under-covered Topics · Retest B',
      questionCount:65,
      questions
    };
  }

  function validate(set) {
    const problems = [];
    if (set.questions.length !== 65) problems.push(`expected 65 questions, got ${set.questions.length}`);

    const domains = {};
    const types = {};
    const tasks = {};
    const ids = new Set();
    let lastId = 0;

    set.questions.forEach(q => {
      domains[q.domain] = (domains[q.domain] || 0) + 1;
      types[q.type] = (types[q.type] || 0) + 1;
      tasks[q.task] = (tasks[q.task] || 0) + 1;
      if (ids.has(q.id)) problems.push(`duplicate id ${q.id}`);
      ids.add(q.id);
      if (q.id !== lastId + 1) problems.push(`non-sequential id ${q.id}`);
      lastId = q.id;
      if (!q.questionTh || q.questionTh.length < 20) problems.push(`Q${q.id} missing natural Thai translation`);
      if (!q.explanation.includes('\n')) problems.push(`Q${q.id} explanation is not structured into readable lines`);
      if ((q.type === 'single' || q.type === 'multiple') && (!q.explanation.includes('✅') || !q.explanation.includes('❌'))) {
        problems.push(`Q${q.id} explanation must cover correct and incorrect choices`);
      }
      if (/The clue is/i.test(q.question)) problems.push(`Q${q.id} uses prohibited clue-style stem`);
      if (q.type === 'matching' && (!q.matches || q.answer.some(a => !/^[A-Z]:\d+$/.test(a)))) problems.push(`Q${q.id} invalid matching schema`);
    });

    Object.entries(expectedDomains).forEach(([d,n]) => {
      if ((domains[d] || 0) !== n) problems.push(`Domain ${d}: expected ${n}, got ${domains[d] || 0}`);
    });
    Object.entries(expectedTypes).forEach(([t,n]) => {
      if ((types[t] || 0) !== n) problems.push(`Type ${t}: expected ${n}, got ${types[t] || 0}`);
    });
    requiredTasks.forEach(task => {
      if (!tasks[task]) problems.push(`Missing task ${task}`);
    });

    set._blueprint = {
      purpose:'Targeted retest of repeated weaknesses, confidence gaps, and under-covered official AIF-C01 topics',
      domains,
      types,
      tasks,
      qualityProblems:problems
    };
    return problems;
  }

  const set21 = buildSet(21);
  const set22 = buildSet(22);
  const p21 = validate(set21);
  const p22 = validate(set22);
  if (p21.length || p22.length) {
    console.error('Set 21/22 validation failed', {set21:p21,set22:p22});
    return;
  }

  const quizSets = window.QUIZ_SETS = window.QUIZ_SETS || [];
  [set21,set22].forEach(set => {
    const i = quizSets.findIndex(existing => existing.id === set.id);
    if (i >= 0) quizSets[i] = set;
    else quizSets.push(set);
  });
})();