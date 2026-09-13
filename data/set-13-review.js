(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-13-set-8-13';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-13',
    label: 'Set 13',
    score: 61,
    total: 65,
    percent: 94,
    concept: 4,
    confidence: 4,
    language: 6,
    note: '4 incorrect; 4 explain-more flags, all on correct answers; 6 explicit English-unclear flags.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-13', label: 'Set 13', count: 6 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'of all alerts the model sends us',
    'less sensitive to extreme values',
    'variation in the target / individual errors',
    'route uncertain production outputs',
    'permissions boundary vs SCP',
    'effective result when an SCP denies an action'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-13'] = {
    title: 'Local Mock Set 13',
    note: '61/65 (94%); wrong Q12/Q41/Q48/Q58; 4 correct-but-flagged questions; 6 explicit English-unclear flags.',
    items: [
      { questionId: 12, type: 'concept', key: 'overfitting-vs-drift', topic: 'Overfitting vs Data / Concept Drift' },
      { questionId: 41, type: 'concept', key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness' },
      { questionId: 48, type: 'concept', key: 'interpretability-explainability', topic: 'Interpretability vs Explainability', note: '🧩 Clue/distractor gap: simple model readable by itself = interpretability.' },
      { questionId: 58, type: 'concept', key: 'iam-permissions', topic: 'Permissions Boundary vs SCP', note: '🧠 Concept/recall gap plus English unclear.' },

      { questionId: 2, type: 'confidence', key: 'classification-metrics', topic: 'Precision vs Recall' },
      { questionId: 5, type: 'confidence', key: 'regression-metrics', topic: 'MAE vs RMSE / outlier sensitivity' },
      { questionId: 63, type: 'confidence', key: 'governance-frameworks', topic: 'NIST AI RMF / CAF-AI / ISO 27001 / EU AI Act' },
      { questionId: 64, type: 'confidence', key: 'eu-ai-act', topic: 'EU AI Act — Limited Risk / transparency obligation' },

      { questionId: 2, type: 'language', key: 'classification-metrics', topic: 'Precision / Recall — English', note: '📘 of all alerts the model sends us, too many are wrong' },
      { questionId: 5, type: 'language', key: 'regression-metrics', topic: 'MAE vs RMSE — English', note: '📘 less sensitive to extreme values / outlier errors' },
      { questionId: 6, type: 'language', key: 'regression-metrics', topic: 'R-squared / RMSE — English', note: '📘 variation in the target / individual errors' },
      { questionId: 10, type: 'language', key: 'ground-truth-a2i', topic: 'Ground Truth vs A2I — English', note: '📘 route uncertain production outputs to people for review' },
      { questionId: 58, type: 'language', key: 'iam-permissions', topic: 'Permissions Boundary vs SCP — English', note: '📘 caps an individual identity / organization accounts' },
      { questionId: 59, type: 'language', key: 'iam-permissions', topic: 'SCP effective permissions — English', note: '📘 effective result when identity policy allows but SCP denies' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', status: 'repeated', priority: 'must', note: 'Set 13 Q41 พลาดซ้ำ: generator faithful แต่ retrieved docs ไม่เกี่ยวข้อง = retrieval relevance/coverage. Docs ถูกแต่ answer แต่ง/ขัด context = generation faithfulness.' },
    { key: 'iam-permissions', topic: 'Identity Policy / Permissions Boundary / SCP', status: 'repeated', priority: 'must', note: 'Set 13 Q57 แยก Policy vs Boundary ถูก แต่ Q58 ยังสลับ Boundary กับ SCP. Boundary = identity ceiling; SCP = organization/account guardrail; neither grants by itself.' },
    { key: 'interpretability-explainability', topic: 'Interpretability vs Explainability', status: 'unstable', priority: 'must', note: 'Set 13 Q48 เลือก Explainability ทั้งที่ model ถูกออกแบบให้อ่าน decision path ได้ในตัว = Interpretability; Q49 post-hoc SHAP = Explainability ตอบถูก.' },
    { key: 'overfitting-vs-drift', topic: 'Overfitting vs Data / Concept Drift', status: 'unstable', priority: 'review', note: 'Set 13 Q12 เลือก Data drift ทั้งที่ train สูง + validation ต่ำก่อน deploy = Overfitting; Q13 production input distribution เปลี่ยน = Data drift ตอบถูก.' },

    { key: 'classification-metrics', topic: 'Precision / Recall / F1 / Accuracy', status: 'confidence', priority: 'review', note: 'Set 13 Q2/Q3 ตอบ Precision/Recall ถูก แต่ Q2 ยัง Flag + English unclear. มองจาก predicted positives → Precision; มองจาก actual positives → Recall.' },
    { key: 'regression-metrics', topic: 'Regression metrics: RMSE / MAE / R-squared', status: 'confidence', priority: 'review', note: 'Set 13 Q5/Q6 ตอบถูกแล้ว แต่ Q5 ยัง Flag และทั้ง Q5/Q6 มี English unclear. MAE ไวต่อ outlier น้อยกว่า RMSE; R² บอก variance explained.' },
    { key: 'governance-frameworks', topic: 'CAF-AI / NIST AI RMF / ISO 27001 / EU AI Act', status: 'improving', priority: 'review', note: 'Set 13 Q63 matching ถูกครบ แต่ยัง Flag. NIST=Govern/Map/Measure/Manage; CAF-AI=enterprise adoption; ISO27001=ISMS; EU AI Act=law.' },
    { key: 'eu-ai-act', topic: 'EU AI Act risk tiers', status: 'improving', priority: 'review', note: 'Set 13 Q64 ตอบ Limited risk ถูกแล้วแต่ยัง Flag. Transparency/disclosure duty โดยไม่ใช่ prohibited/high-risk → Limited in this exam framing.' },

    { key: 'async-vs-batch', topic: 'Asynchronous vs Batch Inference', status: 'recovered', priority: 'stable', note: 'Set 13 Q7/Q8 แยก one large/slow request=Async กับ whole offline dataset=Batch ถูกโดยไม่ Flag.' },
    { key: 'sagemaker-data-wrangler', topic: 'SageMaker Canvas vs Data Wrangler', status: 'recovered', priority: 'stable', note: 'Set 13 Q9 แยก Data Wrangler=prepare/transform กับ Canvas=no-code modeling ถูก.' },
    { key: 'ground-truth-a2i', topic: 'Ground Truth vs A2I', status: 'improving', priority: 'stable', note: 'Set 13 Q10 ตอบ Ground Truth=training labels / A2I=post-inference human review ถูก แม้ English ยังสะดุด.' },
    { key: 'agentcore-components', topic: 'AgentCore Runtime / Gateway / Identity / Observability', status: 'recovered', priority: 'stable', note: 'Set 13 Q23–26 แยก core AgentCore components ถูกทั้งหมดโดยไม่ Flag.' },
    { key: 'mcp-primitives', topic: 'MCP Resources vs Tools', status: 'recovered', priority: 'stable', note: 'Set 13 Q27 ตอบ Resource=read/context และ Tool=callable action ถูก.' },
    { key: 'metadata-filtering', topic: 'Metadata Filtering / Reranking', status: 'recovered', priority: 'stable', note: 'Set 13 Q39 แยก Filter=restrict eligibility กับ Rerank=reorder eligible candidates ถูก.' },
    { key: 'private-connectivity', topic: 'PrivateLink / VPC endpoint vs IAM / data location', status: 'recovered', priority: 'stable', note: 'Set 13 Q65 เลือก VPC endpoint with PrivateLink สำหรับ no-public-internet network requirement ถูก.' }
  ].forEach(upsertTopic);
})();
