(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-22-set-8-13-and-17-19';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-19',
    label: 'Set 19',
    score: 60,
    total: 65,
    percent: 92,
    concept: 9,
    confidence: 8,
    language: 9,
    note: '5 incorrect. Concept count = 5 wrong questions + 4 correct questions explicitly marked Concept/Recall Gap (Q17/Q22/Q63/Q64). Confidence count = 8 correct Explain More items; wrong+flag Q1 is counted as concept, not confidence. 9 explicit English-unclear flags. Domain accuracy: D1 10/13, D2 15/16, D3 18/18, D4 9/9, D5 8/9. Set 19 has no direct "The clue is..." stems and is suitable as the newer scenario-style benchmark.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-19', label: 'Set 19', count: 9 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'legally defined formula / reproduce exactly / predictions are not required',
    'recurring reviews / required remediation / findings emerge',
    'substantially lower rate than comparable applicants',
    'unlabeled domain text / absorb more domain language',
    'under-represents demographic groups / inconsistent labels',
    'same auditable result / formulas already define the exact answer',
    'consequential decisions / performance-interpretability tradeoff',
    'narrowly scoped predictive model',
    'retrieved passages do not support a claim / evidence is weak'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-19'] = {
    title: 'Local Mock Set 19',
    note: '60/65 (92%); 5 incorrect; 9 explain-more flags; 9 explicit English-unclear flags; 6 explicit Concept/Recall flags. D3 and D4 were perfect; D1 was the weakest domain at 10/13.',
    items: [
      { questionId: 1, type: 'concept', key: 'deterministic-vs-ml', topic: 'Deterministic Business Rules vs Predictive ML', note: 'Wrong + Explain More + English unclear. Fixed legal formula + reproducible/auditable exact output = deterministic rules, not regression.' },
      { questionId: 8, type: 'concept', key: 'data-governance', topic: 'Data Lineage vs Residency / Retention', note: 'Wrong. Source → transformations → artifact = lineage. This is a repeat of the lineage/residency family of misses.' },
      { questionId: 11, type: 'concept', key: 'validation-split', topic: 'Validation vs Test Set', note: 'Wrong. Validation is for tuning/model selection; test stays untouched for final unbiased evaluation.' },
      { questionId: 17, type: 'concept', key: 'secure-data-engineering', topic: 'Secure Data Engineering: Access / Integrity / Privacy Techniques', note: 'Answered correctly but explicitly marked Concept/Recall Gap.' },
      { questionId: 22, type: 'concept', key: 'ai-governance-process', topic: 'AI Governance Review Cycle', note: 'Answered correctly but explicitly marked Concept/Recall Gap and English unclear.' },
      { questionId: 53, type: 'concept', key: 'ai-capability-map', topic: 'Computer Vision / NLP / Forecasting Capability Map', note: 'Wrong + explicit Concept/Recall Gap. Visible defects = computer vision; summarize technician notes = NLP.' },
      { questionId: 54, type: 'concept', key: 'genai-limitations', topic: 'GenAI Capabilities vs Limitations', note: 'Wrong + explicit Concept/Recall Gap. Hallucination + limited interpretability are limitations; conversational responsiveness is a capability.' },
      { questionId: 63, type: 'concept', key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation Models', note: 'Answered correctly but explicitly marked Concept/Recall Gap and English unclear.' },
      { questionId: 64, type: 'concept', key: 'grounding-validation-human-review', topic: 'Grounding / Output Validation / Confidence / Human Review', note: 'Answered correctly but explicitly marked Concept/Recall Gap and English unclear.' },

      { questionId: 4, type: 'confidence', key: 'fm-selection', topic: 'Foundation Model Selection Criteria' },
      { questionId: 24, type: 'confidence', key: 'fm-customization-types', topic: 'SFT / Continued Pre-training / Distillation / Transfer Learning' },
      { questionId: 38, type: 'confidence', key: 'fm-customization-lifecycle', topic: 'FM Customization Lifecycle' },
      { questionId: 43, type: 'confidence', key: 'agentcore-components', topic: 'AgentCore Identity vs Policy' },
      { questionId: 46, type: 'confidence', key: 'deterministic-vs-ml', topic: 'Deterministic Logic vs GenAI for Fixed Formula', note: 'Correct but Explain More + English unclear; same boundary as Q1, so not yet stable.' },
      { questionId: 50, type: 'confidence', key: 'human-centered-ai', topic: 'Transparency / Recourse / Explainability / Human Oversight' },
      { questionId: 52, type: 'confidence', key: 'prompting-techniques', topic: 'Zero-shot / Few-shot / Template / Negative Prompting' },
      { questionId: 65, type: 'confidence', key: 'model-families', topic: 'Multimodal / Diffusion / LLM / Embedding Models' },

      { questionId: 1, type: 'language', key: 'deterministic-vs-ml', topic: 'Deterministic Rules — English', note: '📘 legally defined formula / reproduce exactly / predictions are not required' },
      { questionId: 22, type: 'language', key: 'ai-governance-process', topic: 'Governance Process — English', note: '📘 recurring reviews / required remediation / findings emerge' },
      { questionId: 31, type: 'language', key: 'fairness-metrics', topic: 'Fairness — English', note: '📘 substantially lower rate than comparable applicants' },
      { questionId: 36, type: 'language', key: 'continued-pretraining', topic: 'Continued Pre-training — English', note: '📘 unlabeled domain text / absorb more domain language' },
      { questionId: 37, type: 'language', key: 'fairness-data', topic: 'Dataset Fairness — English', note: '📘 under-represents demographic groups / inconsistent labels' },
      { questionId: 46, type: 'language', key: 'deterministic-vs-ml', topic: 'Deterministic Payroll — English', note: '📘 same auditable result / formulas already define the exact answer' },
      { questionId: 58, type: 'language', key: 'interpretability-explainability', topic: 'Interpretability Tradeoff — English', note: '📘 consequential decisions / performance-interpretability tradeoff' },
      { questionId: 63, type: 'language', key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs FM — English', note: '📘 narrowly scoped predictive model' },
      { questionId: 64, type: 'language', key: 'grounding-validation-human-review', topic: 'Grounded RAG Controls — English', note: '📘 retrieved passages do not support a claim / evidence is weak' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'deterministic-vs-ml', topic: 'Deterministic Business Rules vs Predictive ML / GenAI', status: 'unstable', priority: 'must', note: 'Set 19 Q1 เลือก regression แทน deterministic rules เมื่อโจทย์มี fixed legal formula + exact reproducibility. Q46 ตอบ deterministic payroll ถูกภายหลัง แต่ยัง Explain More + English unclear จึงยังไม่ถือว่า recovered.' },
    { key: 'data-governance', topic: 'Data Owner / Steward / Lineage / Residency / Retention', status: 'repeated', priority: 'must', note: 'Set 19 Q8 สลับ Data Residency กับ Data Lineage. Source → transformations → artifact provenance = Lineage. เป็น gap ซ้ำจาก Set 17.' },
    { key: 'validation-split', topic: 'Training / Validation / Test split roles', status: 'unstable', priority: 'must', note: 'Set 18 Q2 ตอบ Validation ถูกแต่ English unclear; Set 19 Q11 กลับเลือก Test สำหรับ model selection. Validation = tune/select; Test = final unbiased evaluation.' },
    { key: 'ai-capability-map', topic: 'AI capability map: CV / NLP / forecasting / speech', status: 'open', priority: 'must', note: 'Set 19 Q53 พลาดการ map task: visible product defects = Computer Vision; summarize technician notes = NLP.' },
    { key: 'genai-limitations', topic: 'GenAI capabilities vs limitations', status: 'open', priority: 'must', note: 'Set 19 Q54 เลือก conversational responsiveness เป็น limitation. Hallucination และ limited interpretability เป็น limitations; conversational flexibility/responsiveness เป็น capability.' },

    { key: 'secure-data-engineering', topic: 'Secure Data Engineering', status: 'confidence', priority: 'review', note: 'Set 19 Q17 ตอบ access/integrity + privacy-enhancing techniques ถูก แต่ mark Concept/Recall Gap.' },
    { key: 'ai-governance-process', topic: 'AI Governance review cycle', status: 'confidence', priority: 'review', note: 'Set 19 Q22 เรียง Define → Review → Document/Remediate → Improve ถูก แต่ mark Concept/Recall Gap + English unclear.' },
    { key: 'fm-selection', topic: 'Foundation Model selection criteria', status: 'confidence', priority: 'review', note: 'Set 19 Q4 ตอบ modality/language/latency/compliance/cost ถูก แต่ Explain More.' },
    { key: 'fm-customization-types', topic: 'FM customization: SFT / CPT / Distillation / Transfer Learning', status: 'confidence', priority: 'review', note: 'Set 19 Q24 จับคู่ถูกทั้งหมดแต่ Explain More.' },
    { key: 'fm-customization-lifecycle', topic: 'FM customization lifecycle', status: 'confidence', priority: 'review', note: 'Set 19 Q38 เรียง Prepare → Customize → Evaluate → Deploy ถูก แต่ Explain More.' },
    { key: 'agentcore-components', topic: 'AgentCore Runtime / Gateway / Identity / Policy / Memory / Observability / Evaluations', status: 'improving', priority: 'review', note: 'Set 18 Q28 สลับ Identity/Policy; Set 19 Q43 จับคู่ Identity=authentication/delegation และ Policy=authorization ได้ถูก แต่ยัง Explain More.' },
    { key: 'human-centered-ai', topic: 'Human-centered AI: Transparency / Recourse / Explainability / Oversight', status: 'confidence', priority: 'review', note: 'Set 19 Q50 จับคู่ทั้ง 4 concept ถูก แต่ Explain More.' },
    { key: 'prompting-techniques', topic: 'Prompting techniques', status: 'confidence', priority: 'review', note: 'Set 19 Q52 จับคู่ Zero-shot / Few-shot / Template / Negative prompting ถูก แต่ Explain More.' },
    { key: 'model-families', topic: 'GenAI model families', status: 'confidence', priority: 'review', note: 'Set 19 Q65 จับคู่ Multimodal / Diffusion / LLM / Embedding ถูก แต่ Explain More.' },
    { key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation Models', status: 'confidence', priority: 'review', note: 'Set 19 Q63 เลือก traditional supervised classification ถูกสำหรับ structured/narrow/explainable task แต่ mark Concept/Recall Gap + English unclear.' },
    { key: 'grounding-validation-human-review', topic: 'Grounding / output validation / confidence / human review', status: 'confidence', priority: 'review', note: 'Set 19 Q64 เลือก grounded retrieval + validation + confidence + human review ถูก แต่ mark Concept/Recall Gap + English unclear.' },
    { key: 'continued-pretraining', topic: 'Continued Pre-training', status: 'improving', priority: 'review', note: 'Set 19 Q36 ตอบ CPT ถูกจาก unlabeled domain corpus + weight update แต่ English unclear.' },
    { key: 'fairness-data', topic: 'Representative data / label quality for fairness', status: 'improving', priority: 'review', note: 'Set 19 Q37 เลือก subgroup representation + label consistency ถูก แต่ English unclear.' },
    { key: 'interpretability-explainability', topic: 'Interpretability vs Explainability / performance tradeoff', status: 'improving', priority: 'review', note: 'Set 19 Q44 แยก intrinsic interpretability vs post-hoc SHAP ได้ถูก และ Q58 เลือก performance-interpretability tradeoff + human review ถูก แต่ Q58 English unclear.' },

    { key: 'developer-ai-tools', topic: 'Amazon Q Developer vs Kiro vs Strands Agents SDK', status: 'recovered', priority: 'stable', note: 'Set 18 Q65 สลับ Kiro กับ Q Developer; Set 19 Q2 เลือก Kiro สำหรับ spec-driven development และ Q32 เลือก Amazon Q Developer สำหรับ coding/AWS assistance ได้ถูกโดยไม่ Flag.' },
    { key: 'multi-agent-patterns', topic: 'Multi-agent patterns / MCP', status: 'recovered', priority: 'stable', note: 'Set 19 Q47 เลือก Orchestrator-worker + MCP ถูกใน scenario ที่ coordinator แจกงาน specialist agents และต้องเชื่อม tools/data.' },
    { key: 'private-connectivity', topic: 'PrivateLink / VPC endpoint', status: 'recovered', priority: 'stable', note: 'Set 19 Q55 เลือก PrivateLink/VPC endpoint + KMS + CloudTrail ได้ถูกใน combined security scenario.' },
    { key: 'classification-metrics', topic: 'Precision / Recall / F1 / Accuracy', status: 'improving', priority: 'review', note: 'Set 19 Q56 เลือก precision/recall ควบคู่ business metrics ได้ถูกโดยไม่ Flag; แต่ Set 18 Q15 ยังมี Explain More จึงคงเป็น improving ไม่ใช่ recovered.' }
  ].forEach(upsertTopic);
})();