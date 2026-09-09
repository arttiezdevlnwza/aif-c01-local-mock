(() => {
  const TARGET_SET_IDS = new Set(['local-set-8', 'local-set-9', 'local-set-10']);

  const VOCABULARY = [
    ['retailer', 'ร้านค้าปลีก'],
    ['churned', 'เลิกใช้/เลิกซื้อ/ยกเลิกแล้ว'],
    ['churn', 'การที่ลูกค้าเลิกใช้/เลิกซื้อ/ยกเลิก'],
    ['progressively', 'ทีละน้อย / ค่อย ๆ / มากขึ้นเรื่อย ๆ'],
    ['corrupted', 'ถูกทำให้เสีย/เพี้ยน'],
    ['individual', 'แต่ละรายการ / รายเดียว'],
    ['hundreds of megabytes', 'ขนาดหลายร้อยเมกะไบต์'],
    ['printed', 'ที่พิมพ์อยู่บนเอกสาร'],
    ['key-value', 'คู่ข้อมูลแบบชื่อช่องกับค่าของช่อง'],
    ['unsupported', 'ไม่มีหลักฐานรองรับ'],
    ['supplied', 'ที่ถูกส่ง/จัดให้'],
    ['broader', 'กว้างกว่า'],
    ['maximum', 'สูงสุด'],
    ['attached later', 'ถูกแนบเพิ่มภายหลัง'],
    ['in exchange for', 'เพื่อแลกกับ'],
    ['varied', 'หลากหลาย/แตกต่างกัน'],
    ['unchanged', 'ไม่เปลี่ยนแปลง'],
    ['rather than', 'แทนที่จะ / มากกว่าอีกทางเลือกหนึ่ง'],
    ['depending on', 'ขึ้นอยู่กับ'],
    ['intermediate results', 'ผลลัพธ์ระหว่างขั้นตอน'],
    ['claims', 'ข้อความอ้าง/ข้อกล่าวอ้าง'],
    ['faithful', 'ยึดตามข้อมูลต้นทางโดยไม่แต่งเพิ่ม']
  ];

  const PATCHES = {
    'local-set-8:33': {
      choices: {
        A: 'Prompt Optimization',
        B: 'Prompt Management',
        C: 'Prompt Flows',
        D: 'Prompt Caching'
      },
      answer: ['A'],
      explanation: 'โจทย์เน้นให้ Bedrock ช่วย rewrite/improve prompt และเปรียบเทียบผลก่อน/หลัง จึงเป็น Prompt Optimization. Prompt Management เน้นเก็บ/version/reuse, Flows เน้น workflow, Caching ลด repeated processing.'
    },
    'local-set-8:44': {
      choices: {
        A: 'Amazon OpenSearch Serverless',
        B: 'Amazon Aurora PostgreSQL',
        C: 'Amazon DynamoDB',
        D: 'Amazon S3',
        E: 'AWS Glue Data Catalog'
      },
      answer: ['A', 'B'],
      explanation: 'OpenSearch Serverless รองรับ vector search workloads และ Aurora PostgreSQL สามารถใช้ pgvector ได้. ตัวเลือกอื่นในข้อนี้ไม่ใช่คำตอบตรงสำหรับ vector similarity search ตามโจทย์.'
    },
    'local-set-9:32': {
      answer: ['B'],
      explanation: 'Prompt Management ใช้จัด prompt templates/versions centrally และ rollback ไป immutable version ก่อนหน้าได้. Prompt Optimization ใช้ช่วย rewrite/improve prompt ไม่ใช่ version rollback.'
    },
    'local-set-10:49': {
      choices: {
        A: 'Interpretability focuses on whether model behavior can be inspected directly; explainability focuses only on model accuracy',
        B: 'Interpretability is mainly about feature importance; explainability is mainly about dataset size and coverage',
        C: 'Interpretability applies only before deployment; explainability applies only after deployment',
        D: 'Interpretability means the model itself is understandable; explainability can use methods to explain a more complex model after the fact'
      },
      answer: ['D'],
      explanation: 'Interpretability = ตัว model/logic เองเข้าใจได้โดยตรง; explainability = ใช้วิธีช่วยอธิบาย behavior/output ของ model ที่ซับซ้อน ซึ่งมักเป็น post-hoc.'
    }
  };

  const normalize = value => String(value || '').toLowerCase();

  for (const set of window.QUIZ_SETS || []) {
    if (!TARGET_SET_IDS.has(set.id)) continue;

    for (const question of set.questions || []) {
      const patch = PATCHES[`${set.id}:${question.id}`];
      if (patch) {
        if (patch.choices) question.choices = { ...patch.choices };
        if (patch.answer) question.answer = [...patch.answer];
        if (patch.explanation) question.explanation = patch.explanation;
      }

      const stem = normalize(question.question);
      const choiceText = normalize(Object.values(question.choices || {}).join(' '));

      // Pre-answer Vocabulary is for reading the stem only. Never translate an
      // answer-choice term or a term that is not actually present in the stem.
      question.vocab = (question.vocab || []).filter(item => {
        const term = normalize(item.term);
        return term && stem.includes(term) && !choiceText.includes(term);
      });

      const existing = new Set(question.vocab.map(item => normalize(item.term)));
      for (const [term, th] of VOCABULARY) {
        const normalizedTerm = normalize(term);
        if (
          stem.includes(normalizedTerm) &&
          !choiceText.includes(normalizedTerm) &&
          !existing.has(normalizedTerm)
        ) {
          question.vocab.push({ term, th });
          existing.add(normalizedTerm);
        }
      }
    }
  }
})();
