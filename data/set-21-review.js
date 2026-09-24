(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-24-set-8-13-and-17-21';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-21',
    label: 'Set 21',
    score: 56,
    total: 65,
    percent: 86,
    concept: 6,
    confidence: 7,
    language: 5,
    clue: 4,
    note: '9 incorrect; raw attempt flags were 7 Explain More and 5 English unclear. Counts here use the post-review interview as source of truth, not raw flags: Concept 6, Confidence 7, Language 5, Clue/Distractor 4. A question may have more than one reviewed cause. Domain accuracy: D1 11/13, D2 13/16, D3 17/18, D4 7/9, D5 8/9.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-21', label: 'Set 21', count: 5 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'customer lifetime value (CLV) / revenue impact = มูลค่าลูกค้าตลอดอายุความสัมพันธ์ / ผลกระทบต่อรายได้',
    'less randomness = สุ่มน้อยลง / output คงที่ขึ้น',
    'distorted measurements = ค่าการวัดที่เพี้ยน',
    'under-represents demographic groups = มีกลุ่มประชากรบางกลุ่มเป็นตัวแทนน้อยเกินไป',
    'labeling rules changed over time = เกณฑ์การติด label เปลี่ยนตามเวลา',
    'automatic or human evaluation of foundation-model outputs = การประเมิน output ของ FM แบบอัตโนมัติหรือโดยมนุษย์'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-21'] = {
    title: 'Local Mock Set 21',
    note: '56/65 (86%); 9 incorrect; raw flags: 7 Explain More + 5 English unclear. Final reviewed causes come from the one-by-one learner interview and can differ from the raw attempt flags.',
    items: [
      { questionId: 1, type: 'concept', key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation / Generative Models', rawFlags: ['english', 'concept'], reviewedCauses: ['concept'], note: 'Wrong. Learner said the main issue was not remembering what Traditional ML means. Structured/tabular + narrow classification + explainability + high-volume inference + no open-ended generation favors traditional supervised ML.' },
      { questionId: 21, type: 'concept', key: 'quick-family', topic: 'Amazon Quick: Flows vs Automate vs Research vs Sight', reviewedCauses: ['concept'], note: 'Wrong. Learner incorrectly used business-user vs developer as the boundary. The deciding boundary is workflow complexity: long-running enterprise process + branching + approvals + error handling = Quick Automate; lighter routine personal/team workflow = Quick Flows.' },
      { questionId: 34, type: 'concept', key: 'rag-lifecycle', topic: 'RAG ingestion and retrieval order', rawFlags: ['clue'], reviewedCauses: ['concept'], note: 'Wrong. Raw flag suggested clue/distractor, but interview showed the learner simply did not remember the process order precisely. Chunk → Embed → Store/Index → Retrieve → Attach context → Generate.' },
      { questionId: 49, type: 'concept', key: 'responsible-ai-lifecycle', topic: 'Responsible AI lifecycle ordering', reviewedCauses: ['concept'], note: 'Wrong. Learner was unfamiliar with the Responsible-AI/risk process order. Define use/risks → Representative data → Evaluate → Document → Deploy/Monitor.' },
      { questionId: 53, type: 'concept', key: 'fairness-metrics', topic: 'Fairness metrics: DPL vs DPPL', reviewedCauses: ['concept'], note: 'Wrong. Learner did not know DPL/DPPL and deliberately chose BLEU as a known-wrong option. DPL = label proportions before training; DPPL = predicted-label proportions after model prediction.' },
      { questionId: 64, type: 'concept', key: 'genai-security-scoping', topic: 'Generative AI Security Scoping Matrix vs NIST AI RMF', rawFlags: ['clue'], reviewedCauses: ['concept', 'clue'], note: 'Wrong. Learner remembered NIST AI RMF and followed the word “risk”, but did not remember the Generative AI Security Scoping Matrix. RMF = broad AI risk management; Scoping Matrix = GenAI security responsibility/risk scoping by consumption/build pattern.' },

      { questionId: 8, type: 'confidence', key: 'ai-capability-map', topic: 'Computer Vision vs NLP capability map', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct by partial recall/elimination. Computer Vision = image/video tasks; NLP = language/text tasks.' },
      { questionId: 25, type: 'confidence', key: 'converse-api', topic: 'Amazon Bedrock Converse API', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct mostly by eliminating unrelated choices; learner did not recall Converse API directly. Converse = consistent message-based interface for supported Bedrock models.' },
      { questionId: 29, type: 'confidence', key: 'business-evaluation', topic: 'Business metrics for GenAI applications', rawFlags: ['explainMore', 'concept'], reviewedCauses: ['confidence', 'language'], note: 'Wrong. Learner was confident in Conversion rate and ROI but uncertain on the third answer and did not understand CLV/revenue impact. The miss is not primarily a concept-recall failure.' },
      { questionId: 33, type: 'confidence', key: 'prompt-security', topic: 'Prompt Injection vs Jailbreaking vs Prompt Leakage', rawFlags: ['explainMore', 'english'], reviewedCauses: ['confidence', 'clue'], note: 'Correct. Learner recognized injection and leakage from the stem but selected Jailbreaking as the third answer mainly by elimination; boundary is not yet robust against closer distractors.' },
      { questionId: 39, type: 'confidence', key: 'fm-customization-types', topic: 'SFT / Continued Pre-training / Distillation / Transfer Learning', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct. Learner was confident in SFT, CPT and Distillation, but not Transfer Learning. Transfer learning = reuse pretrained knowledge for a related target task.' },
      { questionId: 44, type: 'confidence', key: 'fm-evaluation', topic: 'Bedrock Model Evaluation vs SageMaker Clarify', rawFlags: ['explainMore'], reviewedCauses: ['confidence', 'language'], note: 'Correct mostly by eliminating three choices; learner did not understand the English scenario well. FM output evaluation via automatic/human workflows = Bedrock Model Evaluation; SHAP/tabular bias analysis = Clarify.' },
      { questionId: 59, type: 'confidence', key: 'data-governance', topic: 'Data Cataloging vs Review Cadence', rawFlags: ['explainMore', 'concept'], reviewedCauses: ['confidence'], note: 'Correct overall, but learner was specifically unsure about Cataloging and Cadence. Cataloging = organize metadata for discovery/understanding; cadence = how often governance reviews occur.' },

      { questionId: 29, type: 'language', key: 'business-metrics-english', topic: 'Business Metrics — English', rawFlags: ['explainMore', 'concept'], reviewedCauses: ['confidence', 'language'], note: 'Reviewed language gap: customer lifetime value / revenue impact prevented confident selection of the third business-value metric.' },
      { questionId: 30, type: 'language', key: 'temperature-english', topic: 'Temperature — English', rawFlags: ['english'], reviewedCauses: ['language'], note: 'Correct concept; learner was unsure whether “less randomness” really meant less random output. Lower temperature = less randomness / more consistency.' },
      { questionId: 44, type: 'language', key: 'fm-evaluation-english', topic: 'FM Evaluation — English', rawFlags: ['explainMore'], reviewedCauses: ['confidence', 'language'], note: 'Learner did not understand much of the stem and relied on choice elimination.' },
      { questionId: 50, type: 'language', key: 'measurement-bias-english', topic: 'Measurement Bias — English', rawFlags: ['english'], reviewedCauses: ['language'], note: 'Correct from the phrase “contains distorted measurements” despite not understanding the scenario. systemically reads lower / calibrated mainly on another group / distorted measurements → Measurement bias.' },
      { questionId: 51, type: 'language', key: 'fairness-data-english', topic: 'Representative Data + Label Quality — English', rawFlags: ['english'], reviewedCauses: ['language'], note: 'Correct mostly by eliminating choices. under-represented groups → representation/rebalancing; changing labeling rules → label quality/consistency.' },

      { questionId: 2, type: 'clue', key: 'validation-split', topic: 'Validation vs Test Set', reviewedCauses: ['clue'], note: 'Wrong. Learner focused on “untouched dataset for the final” and answered Test, but the actual question asked which dataset is used during model selection. Validation = tune/select; Test = final unbiased check.' },
      { questionId: 14, type: 'clue', key: 'genai-limitations', topic: 'GenAI Capabilities vs Limitations', reviewedCauses: ['clue'], note: 'Wrong. Learner missed that the stem asked for limitations/risks and selected the capability side instead. Generate/adapt/converse = capabilities; hallucination/nondeterminism/limited interpretability = limitations.' },
      { questionId: 33, type: 'clue', key: 'prompt-security', topic: 'Prompt Injection vs Jailbreaking vs Prompt Leakage', rawFlags: ['explainMore', 'english'], reviewedCauses: ['confidence', 'clue'], note: 'Correct but distractor discrimination remains weak: learner got Jailbreaking mainly because the other choices were obviously unrelated.' },
      { questionId: 64, type: 'clue', key: 'genai-security-scoping', topic: 'Generative AI Security Scoping Matrix vs NIST AI RMF', rawFlags: ['clue'], reviewedCauses: ['concept', 'clue'], note: 'Wrong. Learner anchored on the word “risk” and chose NIST AI RMF after narrowing to two choices; the more specific scoping wording points to the Generative AI Security Scoping Matrix.' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'traditional-ml-vs-fm', topic: 'Traditional ML vs Foundation Models', status: 'repeated', priority: 'must', note: 'Set 20 Q11 พลาด Traditional ML vs FM และ Set 21 Q1 ยังพลาดเพราะจำความหมาย Traditional ML ไม่ได้. Structured/narrow/explainable/high-volume predictive task → Traditional ML.' },
    { key: 'validation-split', topic: 'Training / Validation / Test split roles', status: 'unstable', priority: 'must', note: 'Set 19 Q11 เคยเลือก Test ตอน model selection และ Set 21 Q2 พลาดอีกจากการจับ clue “final untouched” แทนคำถาม “during model selection”. Validation = tune/select; Test = final.' },
    { key: 'genai-limitations', topic: 'GenAI capabilities vs limitations', status: 'repeated', priority: 'must', note: 'พลาด family นี้ซ้ำ Set 19, Set 20 และ Set 21. รอบ Set 21 เป็น clue-reading miss: โจทย์ถาม limitations แต่เลือก capabilities.' },
    { key: 'quick-family', topic: 'Amazon Quick: Research / Flows / Automate / Sight', status: 'unstable', priority: 'must', note: 'Set 20 ตอบ Automate ถูกแต่ยัง recall gap; Set 21 Q21 กลับเลือก Flows เพราะใช้ business-user vs developer เป็น boundary. ให้ใช้ workflow complexity/enterprise approvals/branching/error handling เป็นตัวตัด.' },
    { key: 'business-evaluation', topic: 'Application / Business Evaluation Metrics', status: 'unstable', priority: 'must', note: 'Set 20 ยัง confidence gap; Set 21 Q29 รู้ Conversion + ROI แต่พลาด CLV/revenue impact เพราะ confidence + language. ต้องแยก business outcome metrics ออกจาก model architecture metrics.' },
    { key: 'rag-lifecycle', topic: 'RAG ingestion and runtime order', status: 'unstable', priority: 'must', note: 'Set 20 เรียงถูกแต่ยัง recall gap; Set 21 Q34 กลับสลับ Attach ก่อน Retrieve. จำ: Chunk → Embed → Store → Retrieve → Attach → Generate.' },
    { key: 'responsible-ai-lifecycle', topic: 'Responsible AI lifecycle ordering', status: 'repeated', priority: 'must', note: 'Set 20 Q55 และ Set 21 Q49 ยังพลาดลำดับ. Define use/risks → Representative data → Evaluate → Document → Deploy/Monitor.' },
    { key: 'fairness-metrics', topic: 'Fairness metrics: DPL / DPPL and group disparity', status: 'open', priority: 'must', note: 'Set 21 Q53 ไม่รู้ DPL/DPPL. DPL = positive proportions in dataset labels before training; DPPL = positive proportions in predicted labels after inference.' },
    { key: 'genai-security-scoping', topic: 'Generative AI Security Scoping Matrix vs broad governance frameworks', status: 'open', priority: 'must', note: 'Set 21 Q64 ไม่จำ Generative AI Security Scoping Matrix และเลือก NIST AI RMF จากคำว่า risk. Scoping Matrix = GenAI security scoping; NIST AI RMF = broad AI risk management.' },

    { key: 'ai-capability-map', topic: 'AI capability map: CV / NLP / forecasting / speech', status: 'improving', priority: 'review', note: 'Set 19 เคยพลาด CV/NLP mapping; Set 21 Q8 ตอบ CV + NLP ถูกจาก partial recall/elimination แต่ยังไม่มั่นใจ.' },
    { key: 'converse-api', topic: 'Amazon Bedrock Converse API', status: 'confidence', priority: 'review', note: 'Set 21 Q25 ตอบถูกด้วยการตัดตัวเลือก แต่จำไม่ได้ว่า Converse คือ consistent message-based interface สำหรับ supported Bedrock models.' },
    { key: 'prompt-security', topic: 'Prompt Injection / Jailbreaking / Prompt Leakage', status: 'confidence', priority: 'review', note: 'Set 21 Q33 รู้ Injection และ Leakage แต่ Jailbreaking ได้จาก elimination; closer distractors ยังมีความเสี่ยงพลาด.' },
    { key: 'fm-customization-types', topic: 'FM customization: SFT / CPT / Distillation / Transfer Learning', status: 'confidence', priority: 'review', note: 'Set 21 Q39 มั่นใจ SFT/CPT/Distillation แต่ยังไม่มั่นใจ Transfer Learning.' },
    { key: 'fm-evaluation', topic: 'Foundation Model Evaluation', status: 'confidence', priority: 'review', note: 'Set 21 Q44 ตอบ Bedrock Model Evaluation ถูกด้วยการตัดช้อยส์ แต่ไม่เข้าใจ scenario ภาษาอังกฤษชัด.' },
    { key: 'data-governance', topic: 'Data Owner / Steward / Lineage / Catalog / Residency / Retention / Review Cadence', status: 'improving', priority: 'must', note: 'Set 20 Q65 พลาด Cataloging/Cadence; Set 21 Q59 จับคู่ถูกแต่ยังไม่มั่นใจสองคำนี้ จึงดีขึ้นแต่ยังไม่ stable.' },
    { key: 'temperature', topic: 'Temperature: consistency vs creativity', status: 'improving', priority: 'review', note: 'Set 20 เคยพลาด direction; Set 21 Q30 ตอบ Lower temperature ถูก แต่ติดภาษา “less randomness”. Concept ดีขึ้น เหลือ language friction.' },
    { key: 'fairness-data', topic: 'Representative data / label quality for fairness', status: 'improving', priority: 'review', note: 'Set 21 Q51 ตอบ representation + label quality ถูก แต่ภาษาอังกฤษยังทำให้ต้องพึ่งการตัดช้อยส์.' }
  ].forEach(upsertTopic);
})();