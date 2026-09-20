(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-20-set-8-13-and-17';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-17',
    label: 'Set 17',
    score: 54,
    total: 65,
    percent: 83,
    concept: 12,
    confidence: 6,
    language: 4,
    note: '11 incorrect. Q34 was correct but explicitly marked Concept/Recall Gap. Confidence includes 3 correct explain-more items (Q15/Q25/Q29) plus 3 correct clue/distractor gaps (Q6/Q7/Q48); wrong+flag Q44 is counted as concept, not confidence. 4 explicit English-unclear flags. Set 17 also contains 12 quiz/clue-style stems, so it should not be used as the design template for Set 19+.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-17', label: 'Set 17', count: 4 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'faithfully follows the supplied context / off-topic passages',
    'resilience to noisy or adversarial inputs / group disparity',
    'systematically under-measures one group',
    'fixed deterministic orchestration / autonomous tool selection'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-17'] = {
    title: 'Local Mock Set 17',
    note: '54/65 (83%); 11 incorrect; 4 explain-more flags; 4 explicit English-unclear flags. Historical question-quality note: 12 stems use direct clue/question phrasing and are not a template for Set 19+.',
    items: [
      { questionId: 8, type: 'concept', key: 'rl-core-terms', topic: 'Reinforcement Learning: State / Policy / Action / Reward' },
      { questionId: 9, type: 'concept', key: 'soc-reports', topic: 'SOC 1 vs SOC 2 vs SOC 3' },
      { questionId: 17, type: 'concept', key: 'q-business-kendra', topic: 'Amazon Q Business vs Amazon Kendra' },
      { questionId: 31, type: 'concept', key: 'data-governance', topic: 'Data Lineage vs Data Owner / Data Steward / Retention' },
      { questionId: 34, type: 'concept', key: 'single-agent-tools', topic: 'Single Agent with Multiple Tools vs Multi-Agent System', note: 'Answered correctly but explicitly marked Concept/Recall Gap.' },
      { questionId: 39, type: 'concept', key: 'bias-sources', topic: 'Measurement Bias vs Sampling Bias', note: 'Wrong and English unclear.' },
      { questionId: 44, type: 'concept', key: 'responsible-ai-lifecycle', topic: 'Responsible AI workflow: Define Intended Use vs Document Limitations', note: 'Wrong + Explain More; counted as concept, not confidence.' },
      { questionId: 57, type: 'concept', key: 'confusion-matrix', topic: 'False Positive / False Negative / True Positive / True Negative' },
      { questionId: 58, type: 'concept', key: 'classification-metrics', topic: 'Precision vs Accuracy / Recall / F1' },
      { questionId: 61, type: 'concept', key: 'rag-runtime-flow', topic: 'RAG runtime: Attach Context before Generate' },
      { questionId: 63, type: 'concept', key: 'security-service-map', topic: 'AWS Config vs Audit Manager / Artifact / Trusted Advisor' },
      { questionId: 64, type: 'concept', key: 'rag-runtime-flow', topic: 'RAG ingestion: Create Embeddings before Store / Index Vectors' },

      { questionId: 6, type: 'confidence', key: 'rag-evaluation', topic: 'RAG Retrieval Relevance vs Generation Faithfulness', note: 'Correct but explicitly marked clue/distractor gap.' },
      { questionId: 7, type: 'confidence', key: 'iam-permissions', topic: 'Identity Policy vs Permissions Boundary vs SCP', note: 'Correct but explicitly marked clue/distractor gap.' },
      { questionId: 15, type: 'confidence', key: 'regression-metrics', topic: 'MAE interpretation' },
      { questionId: 25, type: 'confidence', key: 'system-prompt', topic: 'System Prompt vs Few-shot / Metadata Filter / Prompt Caching' },
      { questionId: 29, type: 'confidence', key: 'production-monitoring-data', topic: 'Production Data vs Train / Validation / Test Data' },
      { questionId: 48, type: 'confidence', key: 'eu-ai-act', topic: 'EU AI Act — High Risk', note: 'Correct but explicitly marked clue/distractor gap.' },

      { questionId: 6, type: 'language', key: 'rag-evaluation', topic: 'RAG evaluation — English', note: '📘 faithfully follows supplied context / retrieved passages are off-topic' },
      { questionId: 24, type: 'language', key: 'adversarial-robustness', topic: 'Robustness — English', note: '📘 resilience to noisy or adversarial inputs / group disparity' },
      { questionId: 39, type: 'language', key: 'bias-sources', topic: 'Measurement Bias — English', note: '📘 systematically under-measures one group' },
      { questionId: 60, type: 'language', key: 'flows-vs-agents', topic: 'Bedrock Flows vs Agents — English', note: '📘 fixed deterministic orchestration / autonomous tool selection' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'rl-core-terms', topic: 'Reinforcement Learning: State / Policy / Action / Reward', status: 'open', priority: 'must', note: 'Set 17 Q8 เลือก Policy แทน State. State=สถานการณ์ปัจจุบัน; Policy=กลยุทธ์ที่ map state → action; Action=สิ่งที่เลือกทำ; Reward=feedback.' },
    { key: 'soc-reports', topic: 'SOC 1 / SOC 2 / SOC 3', status: 'open', priority: 'must', note: 'Set 17 Q9 เลือก SOC 2 แทน SOC 1. Financial-reporting controls = SOC 1; Trust Services Criteria = SOC 2; public/general-use summary = SOC 3.' },
    { key: 'q-business-kendra', topic: 'Amazon Q Business vs Amazon Kendra', status: 'open', priority: 'must', note: 'Set 17 Q17 เลือก Kendra แทน Q Business. Enterprise GenAI assistant over approved organizational knowledge + access controls = Q Business; Kendra = intelligent enterprise search.' },
    { key: 'data-governance', topic: 'Data Owner / Steward / Lineage / Retention', status: 'unstable', priority: 'must', note: 'Set 17 Q31 สลับ Data Steward กับ Data Lineage. Trace source + transformations = Lineage; Steward ดู quality/definitions/governance งานประจำวัน.' },
    { key: 'bias-sources', topic: 'Measurement Bias vs Sampling Bias', status: 'open', priority: 'must', note: 'Set 17 Q39 เลือก Sampling Bias แต่ sensor under-measures กลุ่มหนึ่งอย่างเป็นระบบ = Measurement Bias. ข้อนี้มี English gap ร่วมด้วย.' },
    { key: 'responsible-ai-lifecycle', topic: 'Responsible AI workflow / documentation', status: 'open', priority: 'must', note: 'Set 17 Q44 สลับ Define intended use กับ Document limitations. Known limits / intended-use boundaries ที่ต้อง record = Document limitations.' },
    { key: 'confusion-matrix', topic: 'TP / FP / TN / FN', status: 'open', priority: 'must', note: 'Set 17 Q57 fraud prediction=positive แต่จริง legitimate=negative จึงเป็น False Positive ไม่ใช่ True Negative.' },
    { key: 'classification-metrics', topic: 'Precision / Recall / F1 / Accuracy', status: 'repeated', priority: 'must', note: 'Set 17 Q58 เลือก Accuracy แทน Precision และ Q57 ยังสลับ FP/TN. “When predicted positive, how often right?” = Precision.' },
    { key: 'rag-runtime-flow', topic: 'RAG ingestion and runtime order', status: 'repeated', priority: 'must', note: 'Set 17 Q61/Q64 พลาดสองจุด: runtime ต้อง Attach selected context ก่อน Generate; ingestion ต้อง Create embeddings ก่อน Store/Index vectors.' },
    { key: 'security-service-map', topic: 'AWS Config / Audit Manager / Artifact / CloudTrail / Macie / KMS', status: 'unstable', priority: 'must', note: 'Set 17 Q63 เลือก Audit Manager แทน Config. Resource configuration history + rule compliance state = AWS Config; Audit Manager รวบรวม audit evidence.' },

    { key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', status: 'improving', priority: 'review', note: 'Set 17 Q6 ตอบ Retrieval relevance ถูก แต่มี clue/distractor gap + English unclear. Retrieved passages off-topic = retrieval relevance; answer ไม่ยึด context = generation faithfulness.' },
    { key: 'iam-permissions', topic: 'Identity Policy / Permissions Boundary / SCP', status: 'improving', priority: 'review', note: 'Set 17 Q7 ตอบ Permissions Boundary ถูก แต่ยังมี clue/distractor gap. Identity policy grants; Boundary caps an identity; SCP caps organization/account permissions.' },
    { key: 'regression-metrics', topic: 'Regression metrics: RMSE / MAE / R-squared', status: 'confidence', priority: 'review', note: 'Set 17 Q15 ตอบ MAE ถูกแต่ยัง Flag. MAE = average absolute error ในหน่วยเดียวกับ target; RMSE ให้น้ำหนัก large errors มากกว่า.' },
    { key: 'system-prompt', topic: 'System Prompt vs Metadata / Few-shot / Prompt Caching', status: 'confidence', priority: 'review', note: 'Set 17 Q25 ตอบ System Prompt ถูกแต่ยัง Flag. Role/tone/behavior ระดับสูง = System Prompt.' },
    { key: 'production-monitoring-data', topic: 'Production Data vs Train / Validation / Test', status: 'confidence', priority: 'review', note: 'Set 17 Q29 ตอบ Production Data ถูกแต่ยัง Flag. Live input distributions หลัง deploy = production data.' },
    { key: 'eu-ai-act', topic: 'EU AI Act risk tiers', status: 'improving', priority: 'review', note: 'Set 17 Q48 ตอบ High risk ถูกแต่ยังมี clue/distractor gap. Allowed but regulated high-impact use with strict obligations = High risk.' },
    { key: 'single-agent-tools', topic: 'Single Agent with Multiple Tools vs Multi-Agent System', status: 'confidence', priority: 'review', note: 'Set 17 Q34 ตอบถูกแต่ mark Concept/Recall Gap. Agent เดียวถือ reasoning และเรียกหลาย tools ยังเป็น single-agent multi-tool; multi-agent ต้องมีหลาย agents ที่มีบทบาท/coordination.' },
    { key: 'flows-vs-agents', topic: 'Bedrock Flows vs Agents', status: 'confidence', priority: 'review', note: 'Set 17 Q60 ตอบ Bedrock Flows ถูก แต่ English unclear. Fixed/deterministic orchestration = Flows; model-driven dynamic planning/tool selection = Agents.' },
    { key: 'adversarial-robustness', topic: 'Adversarial robustness', status: 'improving', priority: 'review', note: 'Set 17 Q24 ตอบ Robustness testing ถูก แต่ English unclear จากคำว่า resilience / noisy or adversarial inputs.' },

    { key: 'agentcore-components', topic: 'AgentCore Runtime / Gateway / Identity / Policy / Memory / Observability / Evaluations', status: 'recovered', priority: 'stable', note: 'Set 17 Q22/Q23/Q36/Q43/Q47/Q50/Q56 แยก AgentCore components ได้ถูกทั้งหมด.' },
    { key: 'mcp-primitives', topic: 'MCP Resource / Tool / Prompt', status: 'recovered', priority: 'stable', note: 'Set 17 Q41 ตอบ MCP Prompt=reusable prompt template ถูก.' },
    { key: 'ground-truth-a2i', topic: 'Ground Truth vs A2I', status: 'recovered', priority: 'stable', note: 'Set 17 Q1 ตอบ Ground Truth=human labeling before training ถูก; A2I=human review after inference.' },
    { key: 'governance-frameworks', topic: 'NIST AI RMF / ISO 27001 / ISO 42001 / CAF-AI / EU AI Act', status: 'improving', priority: 'review', note: 'Set 17 Q19 ตอบ NIST AI RMF=Govern/Map/Measure/Manage ถูก และ Q46 ตอบ ISO/IEC 42001=AIMS ถูก แต่ Q46 เป็น clue-style จึงยังไม่ถือว่าเป็นหลักฐาน recovery ที่แข็งแรงทั้งหมด.' },
    { key: 'overfitting-vs-drift', topic: 'Overfitting vs Data / Concept Drift', status: 'improving', priority: 'review', note: 'Set 17 Q49 ตอบ Overfitting ถูก แต่ stem เป็น clue-style โดยตรง (“great on training, weak on unseen data”) จึงยังไม่ยกระดับเป็น recovered จากข้อนี้ข้อเดียว.' }
  ].forEach(upsertTopic);
})();