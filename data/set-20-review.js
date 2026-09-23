(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-23-set-8-13-and-17-20';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-20',
    label: 'Set 20',
    score: 57,
    total: 65,
    percent: 88,
    concept: 13,
    confidence: 6,
    language: 8,
    note: '8 incorrect. Concept count = 8 wrong questions + 5 additional correct questions explicitly marked Concept/Recall Gap (Q19/Q20/Q24/Q37/Q45). Confidence count = 6 correct Explain More items; wrong+flag Q21/Q23 are counted as concept. 8 explicit English-unclear flags. Domain accuracy: D1 12/13, D2 13/16, D3 17/18, D4 7/9, D5 8/9. D4 was the weakest domain, followed by D2.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-20', label: 'Set 20', count: 8 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'A supermarket chain records ... = chain เป็นคำนามขยาย supermarket; records เป็นคำกริยา',
    'confidently cites a court case that does not exist',
    'persuade a larger share of website visitors to complete a purchase',
    'limitations that require mitigation rather than capabilities',
    'explicit instruction that lists what the model should NOT include',
    'as consistent and predictable as possible when the same prompt is sent repeatedly',
    'benchmark set / factual coverage and usefulness / wording differs',
    'legal exposure or harm customer trust rather than ordinary performance limitations',
    'final authority for sensitive actions / deterministic authorization rules'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-20'] = {
    title: 'Local Mock Set 20',
    note: '57/65 (88%); 8 incorrect; 8 explain-more flags; 8 explicit English-unclear flags; 9 explicit Concept/Recall flags plus one Clue/Distactor gap. D4 7/9 was weakest, followed by D2 13/16.',
    items: [
      { questionId: 11, type: 'concept', key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation Models', note: 'Wrong + Concept/Recall Gap. Structured tabular target + explainability + low cost/latency at high volume favor traditional ML; long free-form generation favors an FM.' },
      { questionId: 17, type: 'concept', key: 'bedrock-data-boundary', topic: 'Amazon Bedrock customer-data boundary', note: 'Wrong + Concept/Recall Gap. Customer prompts/completions are not used to train base models; customization is isolated to the customer context.' },
      { questionId: 21, type: 'concept', key: 'model-families', topic: 'Diffusion vs Image Classifier / LLM / Recommendation Model', note: 'Wrong + Explain More. Text-to-image generation points to a diffusion model; an image classifier classifies an existing image.' },
      { questionId: 23, type: 'concept', key: 'genai-limitations', topic: 'GenAI Capabilities vs Limitations', note: 'Wrong + Explain More + English unclear. Nondeterminism, hallucination, and limited interpretability are limitations; generating new content is a capability.' },
      { questionId: 35, type: 'concept', key: 'temperature', topic: 'Temperature: Consistency vs Creativity', note: 'Wrong + English unclear. Lower temperature reduces randomness and improves consistency; raising it increases variation.' },
      { questionId: 48, type: 'concept', key: 'transparency-vs-explainability', topic: 'Transparency vs Explainability', note: 'Wrong. Documentation of intended use, data sources/process, limitations, and appropriate use supports transparency; explaining a specific prediction is explainability.' },
      { questionId: 55, type: 'concept', key: 'responsible-ai-lifecycle', topic: 'Responsible AI lifecycle ordering', note: 'Wrong + Concept/Recall Gap. Define use/risks → representative data → evaluate performance/bias → document results/limitations → deploy with oversight/monitoring.' },
      { questionId: 65, type: 'concept', key: 'data-governance', topic: 'Lineage / Cataloging / Residency / Retention / Review Cadence', note: 'Wrong + Concept/Recall Gap. Cataloging = discoverable metadata; review cadence = how often governance reviews occur.' },

      { questionId: 19, type: 'concept', key: 'context-engineering', topic: 'Context Engineering', note: 'Correct but explicitly marked Concept/Recall Gap. Selecting/structuring instructions, retrieved data, history, and tool results for the context window = context engineering.' },
      { questionId: 20, type: 'concept', key: 'quick-family', topic: 'Amazon Quick: Flows vs Automate vs Research vs Sight', note: 'Correct but explicitly marked Concept/Recall Gap. Long-running, multi-team, approval/branch/error-handling enterprise process = Quick Automate.' },
      { questionId: 24, type: 'concept', key: 'genai-capabilities', topic: 'Generative AI capabilities', note: 'Correct but explicitly marked Concept/Recall Gap. Adaptability through prompting + conversational interaction + generation of new content are capabilities.' },
      { questionId: 37, type: 'concept', key: 'business-evaluation', topic: 'Application / Business Metrics vs Offline Model Metrics', note: 'Correct but explicitly marked Concept/Recall Gap. Use task completion, handling time, satisfaction, latency, and cost tied to the intended workflow.' },
      { questionId: 45, type: 'concept', key: 'rag-lifecycle', topic: 'RAG ingestion and retrieval order', note: 'Correct but explicitly marked Concept/Recall Gap. Chunk → Embed → Store/Index → Retrieve → Attach evidence to FM.' },

      { questionId: 9, type: 'confidence', key: 'mlops', topic: 'MLOps: Monitoring + Repeatable Versioned Lifecycle', note: 'Correct + Explain More. Monitor production quality/drift and use versioned repeatable evaluation/retrain/redeploy processes.' },
      { questionId: 34, type: 'confidence', key: 'instruction-fine-tuning', topic: 'Instruction Fine-tuning vs CPT / RAG / Zero-shot', note: 'Correct + Explain More + Clue/Distactor Gap. Labeled instruction-answer pairs + persistent style/behavior + willingness to update weights point to instruction fine-tuning.' },
      { questionId: 44, type: 'confidence', key: 'fm-evaluation', topic: 'Reference Metric + Human Evaluation', note: 'Correct + Explain More + English unclear. Reference-based metric plus a human rubric covers both overlap and factual/useful quality when wording differs.' },
      { questionId: 47, type: 'confidence', key: 'bedrock-capability-map', topic: 'Knowledge Bases / Agents Classic / Guardrails / Model Evaluation', note: 'Correct + Explain More. Distinguish RAG grounding, legacy agent orchestration, safeguards, and evaluation.' },
      { questionId: 53, type: 'confidence', key: 'fairness-data', topic: 'Representative Data + Label Quality', note: 'Correct + Explain More. Measure subgroup imbalance/label quality and curate adequate representation before training.' },
      { questionId: 62, type: 'confidence', key: 'secure-data-engineering', topic: 'Data Integrity + Least Privilege', note: 'Correct + Explain More. Versioning/hashes detect unauthorized changes; least-privilege IAM restricts who can modify source data.' },

      { questionId: 15, type: 'language', key: 'hallucination', topic: 'Hallucination — English', note: '📘 confidently cites a court case that does not exist' },
      { questionId: 16, type: 'language', key: 'business-metrics', topic: 'Conversion Rate — English', note: '📘 persuade a larger share of website visitors to complete a purchase' },
      { questionId: 23, type: 'language', key: 'genai-limitations', topic: 'GenAI Limitations — English', note: '📘 limitations that require mitigation rather than the capabilities that make GenAI useful' },
      { questionId: 33, type: 'language', key: 'negative-prompting', topic: 'Negative Prompting — English', note: '📘 explicit instruction that lists what the model should NOT include' },
      { questionId: 35, type: 'language', key: 'temperature', topic: 'Temperature — English', note: '📘 as consistent and predictable as possible when the same prompt is sent repeatedly' },
      { questionId: 44, type: 'language', key: 'fm-evaluation', topic: 'Evaluation — English', note: '📘 benchmark set / factual coverage and usefulness / wording differs from references' },
      { questionId: 54, type: 'language', key: 'responsible-ai-legal-risks', topic: 'Legal / Responsible-AI Risks — English', note: '📘 legal exposure or harm customer trust rather than ordinary performance limitations' },
      { questionId: 59, type: 'language', key: 'agentcore-components', topic: 'AgentCore Policy — English', note: '📘 final authority for sensitive actions / deterministic authorization rules' },
      { questionId: 4, type: 'language', key: 'chain-records-grammar', topic: 'A supermarket chain records — English parsing', note: 'English Note: “chain records” is not one phrase here. “A supermarket chain” = เครือซูเปอร์มาร์เก็ต (subject), “records” = บันทึก (verb).' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation Models', status: 'repeated', priority: 'must', note: 'Set 19 Q63 ตอบ traditional ML ถูกแต่ mark Concept/Recall Gap; Set 20 Q11 พลาด boundary นี้. Structured/narrow/explainable/low-cost-high-volume → traditional ML; broad generative tasks → FM.' },
    { key: 'bedrock-data-boundary', topic: 'Amazon Bedrock customer-data boundary', status: 'open', priority: 'must', note: 'Set 20 Q17 พลาดเรื่อง prompt/completion/customization isolation. ต้องทวน privacy boundary ของ managed Bedrock use.' },
    { key: 'model-families', topic: 'GenAI model families', status: 'unstable', priority: 'must', note: 'Set 19 Q65 จับคู่ model families ถูกแต่ยัง Explain More; Set 20 Q21 เลือก image classifier แทน diffusion สำหรับ text-to-image.' },
    { key: 'genai-limitations', topic: 'GenAI capabilities vs limitations', status: 'repeated', priority: 'must', note: 'Set 19 Q54 และ Set 20 Q23 พลาด family เดียวกัน. Limitations: hallucination, nondeterminism, limited interpretability; capabilities: generate/adapt/converse.' },
    { key: 'temperature', topic: 'Temperature: consistency vs creativity', status: 'open', priority: 'must', note: 'Set 20 Q35 เลือก raise temperature ทั้งที่โจทย์ต้องการ output consistent/predictable. ต่ำ = deterministic-like มากขึ้น; สูง = variation/creativity มากขึ้น.' },
    { key: 'transparency-vs-explainability', topic: 'Transparency vs Explainability', status: 'open', priority: 'must', note: 'Set 20 Q48 สลับ Explainability กับ Transparency. System documentation/intended use/limitations = Transparency; reason for a particular prediction = Explainability.' },
    { key: 'responsible-ai-lifecycle', topic: 'Responsible AI lifecycle ordering', status: 'unstable', priority: 'must', note: 'Set 20 Q55 สลับ Deploy ขึ้นมาก่อน Evaluate/Document. จำ: Define → Data → Evaluate → Document → Deploy/Monitor.' },
    { key: 'data-governance', topic: 'Data Owner / Steward / Lineage / Catalog / Residency / Retention / Review Cadence', status: 'repeated', priority: 'must', note: 'Set 19 Q8 สลับ Lineage/Residency และ Set 20 Q65 สลับ Cataloging/Review Cadence. กลุ่ม data governance ยังเป็น gap ซ้ำ.' },

    { key: 'context-engineering', topic: 'Context Engineering', status: 'confidence', priority: 'review', note: 'Set 20 Q19 ตอบถูกแต่ mark Concept/Recall Gap. Context engineering = คัด/จัด instructions, history, retrieved documents และ tool results ที่เข้า context window.' },
    { key: 'quick-family', topic: 'Amazon Quick: Research / Flows / Automate / Sight', status: 'confidence', priority: 'review', note: 'Set 20 Q20 ตอบ Quick Automate ถูกแต่ mark Concept/Recall Gap. Enterprise long-running/multi-team approvals/errors = Automate.' },
    { key: 'business-evaluation', topic: 'Application / Business Evaluation Metrics', status: 'confidence', priority: 'review', note: 'Set 20 Q37 ตอบถูกแต่ mark Concept/Recall Gap. Offline FM benchmark ไม่พอ ต้องวัด workflow/business outcomes.' },
    { key: 'rag-lifecycle', topic: 'RAG ingestion and runtime order', status: 'improving', priority: 'review', note: 'Set 17/18 เคยมี RAG-order miss; Set 20 Q45 เรียงถูกแต่ยัง mark Concept/Recall Gap จึงดีขึ้นแต่ยังไม่ stable.' },
    { key: 'mlops', topic: 'MLOps monitoring and repeatable lifecycle', status: 'confidence', priority: 'review', note: 'Set 20 Q9 ตอบ monitoring + versioned repeatable process ถูก แต่ Explain More.' },
    { key: 'instruction-fine-tuning', topic: 'Instruction Fine-tuning vs CPT / RAG / Prompting', status: 'confidence', priority: 'review', note: 'Set 20 Q34 ตอบ Instruction fine-tuning ถูกแต่ mark Clue/Distactor Gap. Labeled instruction-answer pairs + update weights = SFT/instruction tuning.' },
    { key: 'fm-evaluation', topic: 'FM Evaluation: reference metrics + human review', status: 'confidence', priority: 'review', note: 'Set 20 Q44 ตอบ reference metric + human rubric ถูก แต่ Explain More + English unclear.' },
    { key: 'bedrock-capability-map', topic: 'Bedrock capability map', status: 'confidence', priority: 'review', note: 'Set 20 Q47 จับคู่ Knowledge Bases / Agents Classic / Guardrails / Model Evaluation ถูก แต่ Explain More.' },
    { key: 'fairness-data', topic: 'Representative data / label quality for fairness', status: 'improving', priority: 'review', note: 'Set 19 Q37 และ Set 20 Q53 ตอบแนว representativeness + label quality ถูก; Set 20 ยัง Explain More.' },
    { key: 'secure-data-engineering', topic: 'Secure Data Engineering', status: 'improving', priority: 'review', note: 'Set 19 Q17 และ Set 20 Q62 ตอบ access/integrity controls ถูก; Set 20 ยัง Explain More.' },
    { key: 'agentcore-components', topic: 'AgentCore Runtime / Gateway / Identity / Policy / Memory / Observability / Evaluations', status: 'improving', priority: 'review', note: 'Set 18 เคยสลับ Identity/Policy; Set 19 เริ่มแยกได้; Set 20 Q59 ตอบ Policy ถูกแต่ English unclear.' }
  ].forEach(upsertTopic);
})();