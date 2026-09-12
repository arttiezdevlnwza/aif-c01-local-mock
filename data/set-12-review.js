(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-12-set-8-12';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-12',
    label: 'Set 12',
    score: 59,
    total: 65,
    percent: 91,
    concept: 6,
    confidence: 5,
    language: 5,
    note: '6 incorrect; 6 explain-more flags; 5 explicit English-unclear flags. Wrong+flag Q64 is counted as concept, not confidence.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-12', label: 'Set 12', count: 5 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'one score falls if either Precision or Recall becomes poor',
    'fixed persona / persistent behavior',
    'faithfully / irrelevant documents',
    'fixed approval sequence / intermediate results',
    'granting broad actions / subset / effective permission'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-12'] = {
    title: 'Local Mock Set 12',
    note: '59/65 (91%); 6 incorrect; 6 explain-more flags; 5 explicit English-unclear flags.',
    items: [
      { questionId: 41, type: 'concept', key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness' },
      { questionId: 55, type: 'concept', key: 'model-cards', topic: 'Model Card vs AI Service Card' },
      { questionId: 58, type: 'concept', key: 'iam-permissions', topic: 'Identity Policy vs Permissions Boundary' },
      { questionId: 59, type: 'concept', key: 'iam-permissions', topic: 'Permissions Boundary vs SCP' },
      { questionId: 63, type: 'concept', key: 'governance-frameworks', topic: 'CAF-AI vs NIST AI RMF / ISO 27001 / EU AI Act' },
      { questionId: 64, type: 'concept', key: 'eu-ai-act', topic: 'EU AI Act — Limited vs Minimal Risk' },

      { questionId: 9, type: 'confidence', key: 'sagemaker-data-wrangler', topic: 'SageMaker Data Wrangler vs Canvas' },
      { questionId: 18, type: 'confidence', key: 'inference-controls', topic: 'Top-P / cumulative probability mass' },
      { questionId: 21, type: 'confidence', key: 'nova-models', topic: 'Amazon Nova model family' },
      { questionId: 48, type: 'confidence', key: 'interpretability-explainability', topic: 'Intrinsic Interpretability vs Post-hoc Explainability' },
      { questionId: 56, type: 'confidence', key: 'adversarial-robustness', topic: 'Adversarial robustness' },

      { questionId: 4, type: 'language', key: 'classification-metrics', topic: 'F1 / Precision / Recall — English', note: '📘 one score that falls if either Precision or Recall becomes poor' },
      { questionId: 31, type: 'language', key: 'system-prompt', topic: 'System Prompt / persona — English', note: '📘 fixed persona / persistent behavior' },
      { questionId: 41, type: 'language', key: 'rag-evaluation', topic: 'RAG evaluation — English', note: '📘 irrelevant documents / faithfully follows context' },
      { questionId: 45, type: 'language', key: 'flows-vs-agents', topic: 'Flows vs Agents — English', note: '📘 fixed approval sequence / intermediate results' },
      { questionId: 58, type: 'language', key: 'iam-permissions', topic: 'Boundary effective permissions — English', note: '📘 granting broad actions / subset / effective permission' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', status: 'repeated', priority: 'must', note: 'Set 12 Q41 สลับอีกครั้ง: retrieved documents ไม่ relevant = retrieval relevance; docs ถูกแต่ answer ขัด/แต่ง = generation faithfulness.' },
    { key: 'model-cards', topic: 'Model Card vs AI Service Card', status: 'unstable', priority: 'must', note: 'Set 12 Q55 เลือก AI Service Card แทน Model Card. Specific model intended use/results/limitations = Model Card.' },
    { key: 'iam-permissions', topic: 'Identity Policy / Permissions Boundary / SCP', status: 'repeated', priority: 'must', note: 'Set 12 Q58 และ Q59 ยังสลับ: Identity Policy grants; Boundary caps an identity; SCP caps organization/account permissions.' },
    { key: 'governance-frameworks', topic: 'CAF-AI / NIST AI RMF / ISO 27001 / EU AI Act', status: 'repeated', priority: 'must', note: 'Set 12 Q63 ยังตอบ NIST แทน CAF-AI. CAF-AI=enterprise adoption; NIST=AI risk; ISO27001=ISMS; EU AI Act=legal regulation.' },
    { key: 'eu-ai-act', topic: 'EU AI Act risk tiers', status: 'repeated', priority: 'must', note: 'Set 12 Q64 ยังสลับ Limited กับ Minimal. Chatbot disclosure/transparency duty = Limited risk in this exam framing.' },

    { key: 'sagemaker-data-wrangler', topic: 'SageMaker Canvas vs Data Wrangler', status: 'improving', priority: 'review', note: 'Set 12 Q9/Q10 ตอบถูกแล้ว; Q9 ยัง Flag. Data prep=Data Wrangler, no-code model=Canvas.' },
    { key: 'inference-controls', topic: 'Generation controls: Temperature / Top-P / Max tokens', status: 'confidence', priority: 'review', note: 'Set 12 Q18 ตอบ Top-P ถูกแต่ยัง Flag. Lower Top-P = narrower cumulative probability mass.' },
    { key: 'nova-models', topic: 'Amazon Nova model family', status: 'confidence', priority: 'review', note: 'Set 12 Q21 ตอบ Nova Canvas ถูกแต่ยัง Flag; Canvas=image, Reel=video, Sonic=speech/audio, Micro=text-oriented.' },
    { key: 'interpretability-explainability', topic: 'Interpretability vs Explainability', status: 'confidence', priority: 'review', note: 'Set 12 Q48/Q49 ตอบถูก; Q48 ยัง Flag. Intrinsic=inspect model logic directly; post-hoc=explain black box afterward.' },
    { key: 'adversarial-robustness', topic: 'Adversarial robustness', status: 'confidence', priority: 'review', note: 'Set 12 Q56 ตอบถูกแต่ยัง Flag; intentionally crafted inputs that cause errors = adversarial robustness testing.' },

    { key: 'regression-metrics', topic: 'Regression metrics: RMSE / MAE / R-squared', status: 'recovered', priority: 'stable', note: 'Set 12 Q5/Q6 แยก RMSE large-error sensitivity และ MAE units ได้ถูกโดยไม่ Flag.' },
    { key: 'async-vs-batch', topic: 'Asynchronous vs Batch Inference', status: 'recovered', priority: 'stable', note: 'Set 12 Q7/Q8 แยก one large/slow request=Async กับ whole offline dataset=Batch ได้ถูก.' },
    { key: 'ml-lifecycle', topic: 'ML lifecycle order', status: 'recovered', priority: 'stable', note: 'Set 12 Q13 เรียง Train → Evaluate → Deploy → Monitor ถูก.' },
    { key: 'fm-customization', topic: 'Continued pre-training / SFT / RAG', status: 'recovered', priority: 'stable', note: 'Set 12 Q35–37 แยก RAG, SFT และ CPT ได้ถูกต่อเนื่อง.' },
    { key: 'agentcore-components', topic: 'AgentCore components', status: 'recovered', priority: 'stable', note: 'Set 12 Q22–25 แยก Runtime/Gateway/Observability/Identity ถูกทั้งหมด.' },
    { key: 'mcp-primitives', topic: 'MCP Resources vs Tools', status: 'recovered', priority: 'stable', note: 'Set 12 Q26–27 แยก Resource=read/context และ Tool=callable action ถูก.' },
    { key: 'metadata-filtering', topic: 'Metadata Filtering / Reranking', status: 'recovered', priority: 'stable', note: 'Set 12 Q39–40 แยก reranking กับ metadata filtering ถูก.' },
    { key: 'shared-responsibility', topic: 'RDS vs EC2 Shared Responsibility', status: 'recovered', priority: 'stable', note: 'Set 12 Q60 ตอบ EC2 guest OS=customer / RDS host OS=AWS ถูก.' },
    { key: 'security-service-map', topic: 'KMS / Macie / CloudTrail / Config / Artifact / Audit Manager', status: 'recovered', priority: 'stable', note: 'Set 12 Q61–62 แยก KMS/Macie และ CloudTrail ได้ถูก.' },
    { key: 'private-connectivity', topic: 'PrivateLink / VPC endpoint vs governance controls', status: 'recovered', priority: 'stable', note: 'Set 12 Q65 แยก PrivateLink=network path และ data residency=location requirement ถูก.' }
  ].forEach(upsertTopic);
})();
