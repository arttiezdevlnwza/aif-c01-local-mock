(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-21-set-8-13-and-17-18';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-18',
    label: 'Set 18',
    score: 54,
    total: 65,
    percent: 83,
    concept: 11,
    confidence: 1,
    language: 5,
    note: '11 incorrect, 1 explain-more flag, 5 explicit English-unclear flags. Domain accuracy: D1 11/13, D2 13/16, D3 14/18, D4 8/9, D5 8/9. D3 was the weakest domain in this attempt. Set 18 also contains 9 direct "The clue is..." stems, so it remains historical practice material and should not be used as the design template for Set 19+.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-18', label: 'Set 18', count: 5 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'final test set should remain untouched / earlier split',
    'focus more on some parts of the prompt than others',
    'credential handling should stay outside prompt logic',
    'penalizes a few very large misses more heavily',
    'remain reliable under perturbations'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-18'] = {
    title: 'Local Mock Set 18',
    note: '54/65 (83%); 11 incorrect; 1 explain-more flag; 5 explicit English-unclear flags. Historical question-quality note: 9 stems use direct "The clue is..." phrasing and are not a template for Set 19+.',
    items: [
      { questionId: 1, type: 'concept', key: 'textract-vs-rekognition', topic: 'Amazon Textract vs Amazon Rekognition' },
      { questionId: 5, type: 'concept', key: 'transformer-attention', topic: 'Attention vs Tokenization', note: 'Wrong and English unclear.' },
      { questionId: 12, type: 'concept', key: 'rag-runtime-flow', topic: 'RAG ingestion order: Embed before Store / Index' },
      { questionId: 17, type: 'concept', key: 'guardrails-filters', topic: 'Bedrock Guardrails: Sensitive Information Filters vs Content Filters' },
      { questionId: 24, type: 'concept', key: 'tokens-vs-prompts', topic: 'Tokens vs Prompts / Parameters / Embeddings' },
      { questionId: 28, type: 'concept', key: 'agentcore-components', topic: 'AgentCore Identity vs Policy', note: 'Wrong and English unclear.' },
      { questionId: 35, type: 'concept', key: 'automation-bias', topic: 'Automation Bias vs Measurement / Sampling Bias' },
      { questionId: 37, type: 'concept', key: 'regression-metrics', topic: 'RMSE vs MAE', note: 'Wrong and English unclear.' },
      { questionId: 41, type: 'concept', key: 'confusion-matrix', topic: 'False Negative vs True Negative' },
      { questionId: 62, type: 'concept', key: 'soc-reports', topic: 'SOC 1 vs SOC 2 vs SOC 3' },
      { questionId: 65, type: 'concept', key: 'developer-ai-tools', topic: 'Amazon Q Developer vs Kiro / Strands Agents SDK' },

      { questionId: 15, type: 'confidence', key: 'classification-metrics', topic: 'Precision vs Recall / Accuracy / F1', note: 'Correct but explicitly marked Explain More.' },

      { questionId: 2, type: 'language', key: 'validation-split', topic: 'Validation vs Test Set — English', note: '📘 final test set should remain untouched / which earlier split should support those choices' },
      { questionId: 5, type: 'language', key: 'transformer-attention', topic: 'Attention — English', note: '📘 focus more on some parts of the prompt than others' },
      { questionId: 28, type: 'language', key: 'agentcore-components', topic: 'AgentCore Identity — English', note: '📘 credential handling should stay outside prompt logic' },
      { questionId: 37, type: 'language', key: 'regression-metrics', topic: 'RMSE — English', note: '📘 penalizes a few very large misses more heavily' },
      { questionId: 49, type: 'language', key: 'adversarial-robustness', topic: 'Robustness — English', note: '📘 remain reliable under perturbations' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'textract-vs-rekognition', topic: 'Amazon Textract vs Amazon Rekognition', status: 'repeated', priority: 'must', note: 'Set 18 Q1 เลือก Rekognition แทน Textract. Document text/forms/tables/key-value fields = Textract; generic image/video objects/faces = Rekognition. หัวข้อนี้เคยมี language miss ตั้งแต่ Set 8 จึงถือว่าเป็น gap ซ้ำ.' },
    { key: 'transformer-attention', topic: 'Transformer Attention vs Tokenization', status: 'unstable', priority: 'must', note: 'Set 18 Q5 เลือก Tokenization แทน Attention และมี English gap. Attention ให้น้ำหนักความสัมพันธ์/ส่วนของ context; Tokenization แค่แบ่ง text เป็น token units/IDs.' },
    { key: 'rag-runtime-flow', topic: 'RAG ingestion and runtime order', status: 'repeated', priority: 'must', note: 'Set 18 Q12 สลับ Create embeddings กับ Store/index vectors. เป็น miss ซ้ำจาก Set 17 Q64. Ingestion: Load → Chunk → Embed → Store/Index.' },
    { key: 'guardrails-filters', topic: 'Bedrock Guardrails filter types', status: 'open', priority: 'must', note: 'Set 18 Q17 เลือก Content Filters แทน Sensitive Information Filters. PII/sensitive data = Sensitive Information Filters; harmful/disallowed categories = Content Filters.' },
    { key: 'tokens-vs-prompts', topic: 'Tokens vs Prompts / Parameters / Embeddings', status: 'open', priority: 'must', note: 'Set 18 Q24 เลือก Prompts แทน Tokens. Pricing/input-output usage units ของ language model = Tokens; prompt คือ instructions/context ที่ส่งเข้า model.' },
    { key: 'agentcore-components', topic: 'AgentCore Runtime / Gateway / Identity / Policy / Memory / Observability / Evaluations', status: 'unstable', priority: 'must', note: 'Set 18 ตอบ Runtime/Gateway/Memory/Policy/Observability/Evaluations ได้หลายข้อ แต่ Q28 สลับ Identity กับ Policy และมี English gap. Identity=authentication/credentials; Policy=deterministic allow/deny authorization.' },
    { key: 'automation-bias', topic: 'Automation Bias vs Measurement / Sampling Bias', status: 'open', priority: 'must', note: 'Set 18 Q35 เลือก Measurement Bias. ถ้าคนเชื่อ AI recommendation แม้ evidence ขัดแย้ง = Automation Bias; Measurement Bias เกิดจากวิธีวัด/proxy ผิดอย่างเป็นระบบ.' },
    { key: 'regression-metrics', topic: 'Regression metrics: RMSE / MAE / R-squared', status: 'repeated', priority: 'must', note: 'Set 18 Q37 เลือก MAE แทน RMSE และมี English gap. Large misses ต้องถูก penalize มากขึ้น = RMSE; MAE ให้น้ำหนัก absolute errors แบบเส้นตรง.' },
    { key: 'confusion-matrix', topic: 'TP / FP / TN / FN', status: 'repeated', priority: 'must', note: 'Set 18 Q41 เลือก True Negative ทั้งที่ model ทาย negative แต่จริง positive = False Negative. เป็น miss ซ้ำต่อจาก Set 17.' },
    { key: 'soc-reports', topic: 'SOC 1 / SOC 2 / SOC 3', status: 'repeated', priority: 'must', note: 'Set 18 Q62 เลือก SOC 1 แทน SOC 2. Detailed Trust Services controls report for customers = SOC 2; SOC 1 = financial-reporting controls; SOC 3 = public/general-use summary. เป็น miss ซ้ำจาก Set 17.' },
    { key: 'developer-ai-tools', topic: 'Amazon Q Developer vs Kiro vs Strands Agents SDK', status: 'open', priority: 'must', note: 'Set 18 Q65 เลือก Kiro แทน Amazon Q Developer. General AI coding/software-development assistant = Q Developer; Kiro = spec-driven development; Strands Agents SDK = agent-building SDK.' },

    { key: 'classification-metrics', topic: 'Precision / Recall / F1 / Accuracy', status: 'confidence', priority: 'review', note: 'Set 18 Q15 ตอบ Precision ถูกแต่ยัง Explain More. “สิ่งที่ถูก flag ว่า positive แล้วจริง ๆ เป็น positive กี่ส่วน” = Precision.' },
    { key: 'validation-split', topic: 'Training / Validation / Test split roles', status: 'improving', priority: 'review', note: 'Set 18 Q2 ตอบ Validation set ถูกแต่ English unclear. Validation ใช้ tuning/model selection; Test เก็บไว้ final unbiased evaluation.' },
    { key: 'adversarial-robustness', topic: 'Adversarial robustness', status: 'improving', priority: 'review', note: 'Set 18 Q49 ตอบ Robustness testing ถูก แต่ English unclear จาก phrase “remain reliable under perturbations”.' },

    { key: 'metadata-filtering', topic: 'Metadata Filtering / Reranking', status: 'recovered', priority: 'stable', note: 'Set 18 Q16 แยก metadata filtering จาก reranking/chunking/embedding ได้ถูกโดยไม่ Flag.' },
    { key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', status: 'recovered', priority: 'stable', note: 'Set 18 Q11 แยก generation faithfulness จาก retrieval relevance ได้ถูกโดยไม่ Flag.' },
    { key: 'mcp-primitives', topic: 'MCP Resource / Tool / Prompt', status: 'recovered', priority: 'stable', note: 'Set 18 Q63 ตอบ Resource สำหรับ read data/context โดยไม่ execute operation ได้ถูกโดยไม่ Flag.' }
  ].forEach(upsertTopic);
})();