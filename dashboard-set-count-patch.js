(() => {
  function applySet11Review() {
    const review = window.REVIEW_INSIGHTS;
    if (!review) return;

    review.version = '2026-09-11-set-8-11';
    review.history = review.history || [];
    review.languageTrend = review.languageTrend || [];
    review.languageFocus = review.languageFocus || [];
    review.topicStatus = review.topicStatus || [];
    review.sets = review.sets || {};

    const set11History = {
      setId: 'local-set-11',
      label: 'Set 11',
      score: 58,
      total: 65,
      percent: 89,
      concept: 7,
      confidence: 9,
      language: 8,
      note: 'Language count uses the learner’s explicit 📘 English-unclear marks; it does not mean all 8 caused wrong answers.'
    };
    const historyIndex = review.history.findIndex(item => item.setId === set11History.setId);
    if (historyIndex >= 0) review.history[historyIndex] = set11History;
    else review.history.push(set11History);

    const set11Language = { setId: 'local-set-11', label: 'Set 11', count: 8 };
    const languageIndex = review.languageTrend.findIndex(item => item.setId === set11Language.setId);
    if (languageIndex >= 0) review.languageTrend[languageIndex] = set11Language;
    else review.languageTrend.push(set11Language);

    [
      'penalized more heavily',
      'protected demographic groups',
      'guardrail / member accounts',
      'legal counsel / jurisdiction',
      'perturbations / plausible'
    ].forEach(word => {
      if (!review.languageFocus.includes(word)) review.languageFocus.push(word);
    });

    review.sets['local-set-11'] = {
      title: 'Local Mock Set 11',
      note: '58/65 (89%); 14 explain-more flags; 8 explicit English-unclear flags.',
      items: [
        { questionId: 5, type: 'concept', key: 'regression-metrics', topic: 'RMSE vs MAE' },
        { questionId: 7, type: 'concept', key: 'async-vs-batch', topic: 'Asynchronous vs Batch Inference' },
        { questionId: 9, type: 'concept', key: 'sagemaker-canvas', topic: 'SageMaker Canvas vs Data Wrangler' },
        { questionId: 13, type: 'concept', key: 'ml-lifecycle', topic: 'ML lifecycle order' },
        { questionId: 39, type: 'concept', key: 'rag-runtime-flow', topic: 'RAG preparation/runtime order' },
        { questionId: 59, type: 'concept', key: 'iam-permissions', topic: 'SCP vs Permissions Boundary' },
        { questionId: 63, type: 'concept', key: 'governance-frameworks', topic: 'NIST AI RMF / CAF-AI / ISO 27001 / EU AI Act' },

        { questionId: 6, type: 'confidence', key: 'regression-metrics', topic: 'R-squared' },
        { questionId: 23, type: 'confidence', key: 'multimodality', topic: 'Multimodality' },
        { questionId: 31, type: 'confidence', key: 'system-prompt', topic: 'System Prompt vs Metadata' },
        { questionId: 35, type: 'confidence', key: 'fm-customization', topic: 'Continued pre-training vs SFT / RAG' },
        { questionId: 45, type: 'confidence', key: 'flows-vs-agents', topic: 'Bedrock Flows vs Agents' },
        { questionId: 48, type: 'confidence', key: 'interpretability-explainability', topic: 'Interpretability vs Explainability' },
        { questionId: 49, type: 'confidence', key: 'fairness-metrics', topic: 'Fairness / group disparity metrics' },
        { questionId: 53, type: 'confidence', key: 'model-cards', topic: 'Model Card vs AI Service Card' },
        { questionId: 60, type: 'confidence', key: 'shared-responsibility', topic: 'RDS vs EC2 Shared Responsibility' },

        { questionId: 5, type: 'language', key: 'regression-metrics', topic: 'RMSE vs MAE — English', note: '📘 penalized more heavily' },
        { questionId: 6, type: 'language', key: 'regression-metrics', topic: 'R-squared — English', note: '📘 marked English unclear' },
        { questionId: 40, type: 'language', key: 'rag-chunking', topic: 'RAG chunking — English', note: '📘 marked English unclear' },
        { questionId: 45, type: 'language', key: 'flows-vs-agents', topic: 'Flows vs Agents — English', note: '📘 explicitly / deterministic orchestration' },
        { questionId: 49, type: 'language', key: 'fairness-metrics', topic: 'Fairness metrics — English', note: '📘 protected demographic groups' },
        { questionId: 50, type: 'language', key: 'robustness', topic: 'Robustness — English', note: '📘 perturbations / plausible' },
        { questionId: 59, type: 'language', key: 'iam-permissions', topic: 'SCP vs Boundary — English', note: '📘 organization guardrail / member accounts' },
        { questionId: 64, type: 'language', key: 'data-governance', topic: 'Residency vs Sovereignty — English', note: '📘 geographic location / legal jurisdiction' }
      ]
    };

    function upsertTopic(item) {
      const index = review.topicStatus.findIndex(existing => existing.key === item.key);
      if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
      else review.topicStatus.push(item);
    }

    [
      { key: 'regression-metrics', topic: 'Regression metrics: RMSE / MAE / R-squared', status: 'unstable', priority: 'must', note: 'Set 11 สลับ MAE กับ RMSE และ R-squared ยัง Flag; ต้องแยก “large errors ถูกลงโทษแรง” = RMSE.' },
      { key: 'async-vs-batch', topic: 'Asynchronous vs Batch Inference', status: 'repeated', priority: 'must', note: 'Set 8 เคยมี language miss และ Set 11 เลือก Batch แทน Async ใน individual large/long request.' },
      { key: 'sagemaker-canvas', topic: 'SageMaker Canvas vs Data Wrangler', status: 'repeated', priority: 'must', note: 'Set 11 ยังสลับ Canvas (no-code modeling) กับ Data Wrangler (prepare/transform).' },
      { key: 'sagemaker-data-wrangler', topic: 'SageMaker Canvas vs Data Wrangler', status: 'repeated', priority: 'must', note: 'Set 9 พลาด Data Wrangler และ Set 11 ยังสลับคู่ Canvas/Data Wrangler.' },
      { key: 'ml-lifecycle', topic: 'ML lifecycle order', status: 'repeated', priority: 'must', note: 'Set 11 ยังวาง Deploy ก่อน Evaluate; จำ Train → Evaluate → Deploy → Monitor.' },
      { key: 'rag-runtime-flow', topic: 'RAG preparation/runtime order', status: 'repeated', priority: 'must', note: 'Set 9 และ Set 11 ยังสลับลำดับ: Chunk → Embed/Index → Retrieve → Generate.' },
      { key: 'iam-permissions', topic: 'Identity Policy / Permissions Boundary / SCP', status: 'unstable', priority: 'must', note: 'Set 11 ตอบ Identity Policy และ Boundary ถูก แต่ยังสลับ SCP ซึ่งเป็น ceiling ระดับ Organization/account.' },
      { key: 'governance-frameworks', topic: 'CAF-AI / NIST AI RMF / ISO 27001 / EU AI Act', status: 'repeated', priority: 'must', note: 'Set 11 framework matching ยังผิดทั้งชุด: NIST=AI risk, CAF-AI=adoption, ISO27001=ISMS, EU AI Act=legal risk obligations.' },
      { key: 'eu-ai-act', topic: 'EU AI Act risk tiers', status: 'repeated', priority: 'must', note: 'Set 11 ยังพลาดการแยก EU AI Act ออกจาก NIST/CAF/ISO; risk-tier detail ยังควรทวนต่อ.' },
      { key: 'fairness-metrics', topic: 'Fairness / group disparity metrics', status: 'improving', priority: 'must', note: 'Set 11 ตอบ fairness ถูกแล้ว แต่ยัง Flag และติ๊ก English unclear ที่ protected demographic groups.' },

      { key: 'interpretability-explainability', topic: 'Interpretability vs Explainability', status: 'confidence', priority: 'review', note: 'Set 11 ตอบถูก แต่ยัง Flag; concept ดีขึ้นแต่ confidence ยังไม่จบ.' },
      { key: 'flows-vs-agents', topic: 'Bedrock Flows vs Agents', status: 'confidence', priority: 'review', note: 'Set 11 ตอบ Flows ถูก แต่ Flag + English unclear เมื่อเจอ explicitly defined/deterministic orchestration.' },
      { key: 'shared-responsibility', topic: 'RDS vs EC2 Shared Responsibility', status: 'confidence', priority: 'review', note: 'Set 11 ตอบคู่ RDS host OS / EC2 guest OS ถูก แต่ยัง Flag.' },
      { key: 'fm-customization', topic: 'Continued pre-training / SFT / RAG', status: 'confidence', priority: 'review', note: 'Set 11 แยกได้ถูก แต่ CPT ยัง Flag; unlabeled domain corpus + weights = CPT.' },
      { key: 'multimodality', topic: 'Multimodality', status: 'confidence', priority: 'review', note: 'Set 11 ตอบ image + text = Multimodality ถูก แต่ยัง Flag.' },
      { key: 'system-prompt', topic: 'System Prompt vs Metadata', status: 'confidence', priority: 'review', note: 'Set 11 ตอบ behavior=system prompt / retrieval scope=metadata ถูก แต่ยัง Flag.' },
      { key: 'model-cards', topic: 'Model Card vs AI Service Card', status: 'confidence', priority: 'review', note: 'Set 11 ตอบถูก แต่ยัง Flag; Model Card=เฉพาะ model, AI Service Card=managed AWS AI service.' },

      { key: 'agentcore-components', topic: 'AgentCore components', status: 'recovered', priority: 'stable', note: 'Set 11 Q24–27 แยก Runtime/Gateway/Identity/Observability ถูกทั้งหมดโดยไม่ Flag.' },
      { key: 'mcp-primitives', topic: 'MCP Resources vs Tools', status: 'recovered', priority: 'stable', note: 'Set 11 Q28 เลือก Tools/Resources/Prompts ถูกครบโดยไม่ Flag.' },
      { key: 'inference-controls', topic: 'Generation controls: Temperature / Top-P / Max tokens', status: 'recovered', priority: 'stable', note: 'Set 11 Q18–20 ตอบ Temperature, Top-P และ max output tokens ถูกโดยไม่ Flag.' },
      { key: 'classification-metrics', topic: 'Precision / Recall / F1 / Accuracy', status: 'recovered', priority: 'stable', note: 'Set 11 Q2–4 แยก Precision/Recall/F1 ถูกต่อเนื่องโดยไม่ Flag.' },
      { key: 'unsupervised-learning', topic: 'Clustering / Unsupervised Learning', status: 'recovered', priority: 'stable', note: 'Set 10 เคยพลาด แต่ Set 11 Q1 ตอบ no labels + natural groups = clustering ถูกโดยไม่ Flag.' },
      { key: 'metadata-filtering', topic: 'Metadata Filtering / Reranking', status: 'recovered', priority: 'stable', note: 'Set 11 Q41–42 แยก filtering กับ reranking ถูกทั้งคู่โดยไม่ Flag.' },
      { key: 'rag-evaluation', topic: 'RAG retrieval relevance vs generation faithfulness', status: 'recovered', priority: 'stable', note: 'Set 11 Q43 ตอบ docs relevant + unsupported answer = generation faithfulness ถูกโดยไม่ Flag.' },
      { key: 'private-connectivity', topic: 'NAT Gateway vs PrivateLink', status: 'recovered', priority: 'stable', note: 'Set 11 Q65 เลือก VPC endpoint / PrivateLink สำหรับ no-public-internet requirement ถูกโดยไม่ Flag.' },
      { key: 'security-service-map', topic: 'KMS / TLS / Macie service map', status: 'recovered', priority: 'stable', note: 'Set 11 Q61 จับ KMS/TLS/Macie ถูกครบ.' },
      { key: 'tokenization-embeddings', topic: 'Tokenization vs Embeddings', status: 'recovered', priority: 'stable', note: 'Set 11 Q14–15 แยก Tokenization และ Embeddings ถูกโดยไม่ Flag.' }
    ].forEach(upsertTopic);
  }

  function reviewRangeLabel() {
    const history = window.REVIEW_INSIGHTS?.history || [];
    if (!history.length) return 'Reviewed Sets';
    const first = String(history[0].label || '').replace(/^Set\s+/i, '');
    const last = String(history[history.length - 1].label || '').replace(/^Set\s+/i, '');
    return first && last ? `Set ${first}–${last}` : 'Reviewed Sets';
  }

  function syncDashboardLabels() {
    const cards = [...document.querySelectorAll('#dashboardOverview .dashboard-stat-card')];
    const completed = cards.find(card => card.querySelector('span')?.textContent.trim() === 'Completed sets');
    const completedSmall = completed?.querySelector('small');
    if (completedSmall) completedSmall.textContent = `Local Mock Set 1–${(window.QUIZ_SETS || []).length}`;

    const language = cards.find(card => card.querySelector('span')?.textContent.trim() === 'Language gaps');
    const languageSmall = language?.querySelector('small');
    if (languageSmall) languageSmall.textContent = 'English unclear / language gap จากผล review';

    const range = reviewRangeLabel();
    document.querySelectorAll('#dashboardView h3, #dashboardView p, #dashboardView small').forEach(node => {
      node.textContent = node.textContent.replace(/Set 8[–-]10/g, range);
    });
  }

  applySet11Review();

  const originalRender = window.renderStudyDashboard;
  if (typeof originalRender === 'function') {
    window.renderStudyDashboard = function () {
      originalRender();
      syncDashboardLabels();
    };
  }

  document.getElementById('dashboardBtn')?.addEventListener('click', () => {
    setTimeout(syncDashboardLabels, 0);
  });
})();