(() => {
  const review = window.REVIEW_INSIGHTS;
  if (!review) return;

  review.version = '2026-09-26-set-8-13-and-17-22';
  review.history = review.history || [];
  review.languageTrend = review.languageTrend || [];
  review.languageFocus = review.languageFocus || [];
  review.topicStatus = review.topicStatus || [];
  review.sets = review.sets || {};

  const history = {
    setId: 'local-set-22',
    label: 'Set 22',
    score: 58,
    total: 65,
    percent: 89,
    concept: 6,
    confidence: 4,
    language: 2,
    clue: 3,
    note: '7 incorrect; raw attempt flags were 4 Explain More and 1 English unclear. Reviewed counts use the post-review interview as source of truth: Concept 6, Confidence 4, Language 2, Clue/Distractor 3. Counts can overlap.'
  };
  const historyIndex = review.history.findIndex(item => item.setId === history.setId);
  if (historyIndex >= 0) review.history[historyIndex] = history;
  else review.history.push(history);

  const language = { setId: 'local-set-22', label: 'Set 22', count: 2 };
  const languageIndex = review.languageTrend.findIndex(item => item.setId === language.setId);
  if (languageIndex >= 0) review.languageTrend[languageIndex] = language;
  else review.languageTrend.push(language);

  [
    'train a substitute model that mimics the service = ฝึกโมเดลทดแทนให้เลียนแบบพฤติกรรมของบริการเดิม',
    'a mix of simple and hard requests = มี request ทั้งแบบง่ายและยากปะปนกัน'
  ].forEach(item => {
    if (!review.languageFocus.includes(item)) review.languageFocus.push(item);
  });

  review.sets['local-set-22'] = {
    title: 'Local Mock Set 22',
    note: '58/65 (89%); 7 incorrect; raw flags: 4 Explain More + 1 English unclear. Final reviewed causes come from the one-by-one learner interview and can differ from raw attempt flags.',
    details: [
      {
        questionId: 15,
        result: 'Wrong',
        topic: 'Autoregressive generation',
        selected: 'Linear regression',
        correct: 'Autoregressive generation',
        rawFlags: ['Concept / Recall'],
        reviewedCauses: ['Concept / Recall', 'Clue / Distractor'],
        userReasoning: 'จำไม่ได้ว่า Autoregressive generation คืออะไร เห็นคำว่า Linear แล้วนึกว่าเกี่ยวกับเส้นตรง และไม่ได้อ่าน/นึกต่อว่า Linear regression คือการทำนายตัวเลข.',
        diagnosis: 'จำ Autoregressive generation ไม่ได้ และหยุดตีความ choice ที่คำว่า Linear โดยไม่ได้พิจารณาความหมายเต็มของ Linear regression.',
        memoryCue: 'Next token ทีละตัว / left-to-right = Autoregressive.'
      },
      {
        questionId: 39,
        result: 'Wrong',
        topic: 'SFT dataset preparation',
        selected: 'Keep contradictory labels to maximize variety',
        correct: 'Remove duplicates and obvious low-quality examples',
        rawFlags: [],
        reviewedCauses: ['Clue / Distractor'],
        userReasoning: 'เห็นคำว่า Remove แล้วตีความว่าจะลบข้อมูลดี ๆ ออก จึงไม่เลือก โดยไม่ได้อ่านต่อว่าเป็น duplicates และ obvious low-quality examples.',
        diagnosis: 'ไม่พบหลักฐานว่า concept data cleaning ผิด แต่พลาดจากการอ่าน choice ไม่ครบ.',
        memoryCue: 'เจอ Remove ให้ดู object ต่อ — duplicates / low-quality = ควรลบ.'
      },
      {
        questionId: 40,
        result: 'Wrong',
        topic: 'SFT lifecycle',
        selected: 'Promote → Prepare data → Fine-tune → Evaluate',
        correct: 'Prepare data → Fine-tune → Evaluate → Promote',
        rawFlags: [],
        reviewedCauses: ['Concept / Recall'],
        userReasoning: 'ไม่รู้ว่า Promote ควรวางไว้ตรงไหนในลำดับ.',
        diagnosis: 'ยังจำตำแหน่งของ Promote ใน controlled SFT lifecycle ไม่ได้.',
        memoryCue: 'Data → Tune → Check → Release.'
      },
      {
        questionId: 56,
        result: 'Wrong',
        topic: 'DPL vs DPPL',
        selected: 'DPPL',
        correct: 'DPL',
        rawFlags: [],
        reviewedCauses: ['Concept / Recall'],
        userReasoning: 'เห็นคำว่า Label แล้วจำว่าเป็น DPPL.',
        diagnosis: 'จำ boundary ของ DPL กับ DPPL สลับกัน และไม่ได้ใช้ clue ว่ายังไม่มี model training/prediction.',
        memoryCue: 'DPL = Data Labels ก่อน train; DPPL = Predicted Labels หลัง model ทำนาย.'
      },
      {
        questionId: 59,
        result: 'Wrong',
        topic: 'Bedrock model invocation logging',
        selected: 'AWS CloudTrail event history only',
        correct: 'Model invocation logging',
        rawFlags: [],
        reviewedCauses: ['Concept / Recall'],
        userReasoning: 'เห็นว่าโจทย์ถามหา log ของ service จึงนึกถึง CloudTrail.',
        diagnosis: 'รู้จัก CloudTrail ในฐานะ logging service แต่ยังแยก API activity logging ออกจาก Bedrock model interaction logging ไม่ชัด.',
        memoryCue: 'CloudTrail = ใครเรียกอะไร; Invocation logging = คุยอะไรกับ model.'
      },
      {
        questionId: 61,
        result: 'Wrong',
        topic: 'Model extraction vs Model inversion',
        selected: 'Model inversion',
        correct: 'Model extraction',
        rawFlags: ['English unclear', 'Clue / Distractor'],
        reviewedCauses: ['Concept / Recall', 'Language', 'Clue / Distractor'],
        userReasoning: 'อ่านแล้วเข้าใจว่าเป็นการยิง input ซ้ำ ๆ หา output แล้วพยายามจับคู่หรือย้อนกลับไปหา input.',
        diagnosis: 'เข้าใจ flow ของ scenario คลาดเคลื่อน และ boundary ระหว่าง Model extraction กับ Model inversion ยังไม่ชัด.',
        memoryCue: 'Extraction = ขโมย behavior ของ model; Inversion = ย้อนหาร่องรอย training data.'
      },
      {
        questionId: 65,
        result: 'Wrong',
        topic: 'NIST AI RMF order',
        selected: 'Govern → Measure → Map → Manage',
        correct: 'Govern → Map → Measure → Manage',
        rawFlags: ['Clue / Distractor'],
        reviewedCauses: ['Concept / Recall'],
        userReasoning: 'รู้ว่า NIST AI RMF มี 4 functions เหล่านี้ แต่จำลำดับไม่ค่อยได้.',
        diagnosis: 'จำองค์ประกอบครบ แต่ recall ลำดับมาตรฐานยังไม่แม่น ไม่ใช่ปัญหาการแยก distractor.',
        memoryCue: 'GMMM = Govern → Map → Measure → Manage.'
      },
      {
        questionId: 5,
        result: 'Correct',
        topic: 'Data drift vs Concept drift',
        selected: 'Concept drift',
        correct: 'Concept drift',
        rawFlags: ['Explain More'],
        reviewedCauses: ['Confidence'],
        userReasoning: 'ไม่ค่อยแน่ใจระหว่าง Concept drift กับ Data drift แต่พออ่านโจทย์แล้วคิดว่าน่าจะเป็น Concept drift.',
        diagnosis: 'เข้าใจ boundary และใช้ scenario ตัดสินได้ถูก แต่ confidence ยังไม่เต็ม.',
        memoryCue: 'Data drift = X เปลี่ยน; Concept drift = ความสัมพันธ์ X→Y เปลี่ยน.'
      },
      {
        questionId: 10,
        result: 'Correct',
        topic: 'ML reproducibility and promotion evidence',
        selected: 'Version model/data/code artifacts + Record evaluation results and promotion decisions',
        correct: 'Version model/data/code artifacts + Record evaluation results and promotion decisions',
        rawFlags: ['Explain More'],
        reviewedCauses: ['Confidence'],
        userReasoning: 'ใช้การตัดช้อยส์และรู้สึกว่าสองข้อนี้ดูเหมาะกว่าตัวอื่น.',
        diagnosis: 'ตอบถูกจาก elimination มากกว่า direct recall ของ reproducibility/promotion evidence.',
        memoryCue: 'Reproduce = Version; Why promoted = Evidence.'
      },
      {
        questionId: 25,
        result: 'Correct',
        topic: 'Agent vs Flow',
        selected: 'Dynamic planning/tool selection = Agent + Deterministic sequence = Flow',
        correct: 'Dynamic planning/tool selection = Agent + Deterministic sequence = Flow',
        rawFlags: ['Explain More'],
        reviewedCauses: ['Confidence'],
        userReasoning: 'จำได้ว่า Deterministic หมายถึงสิ่งที่แน่นอน ส่วน Agent เลือกเพราะคิดว่าเหมาะกับการตัดสินใจเลือกสิ่งที่จะใช้แบบ dynamic.',
        diagnosis: 'เข้าใจทิศทาง Agent vs Flow ถูก แต่ยังอาศัยความสมเหตุสมผลของ choices มากกว่า direct recall.',
        memoryCue: 'Fixed path = Flow; Decide path at runtime = Agent.'
      },
      {
        questionId: 45,
        result: 'Correct',
        topic: 'Intelligent Prompt Routing',
        selected: 'Prompt caching + Intelligent prompt routing + Cross-Region Inference',
        correct: 'Prompt caching + Intelligent prompt routing + Cross-Region Inference',
        rawFlags: ['Explain More'],
        reviewedCauses: ['Confidence', 'Language'],
        userReasoning: 'ไม่แน่ใจประโยค “receives a mix of simple and hard requests” แต่คิดว่าน่าจะเกี่ยวกับ request ที่เข้ามา จึงโยงไปเรื่อง routing.',
        diagnosis: 'Concept routing ถูก แต่ความไม่เข้าใจวลีอังกฤษทำให้ confidence ลดลง.',
        memoryCue: 'Repeat = Cache; Simple/Hard = Route; Capacity = Cross-Region.'
      }
    ],
    items: [
      { questionId: 15, type: 'concept', key: 'autoregressive-generation', topic: 'Autoregressive generation', rawFlags: ['concept'], reviewedCauses: ['concept','clue'], note: 'Wrong. Learner did not remember autoregressive generation and anchored on the word “Linear”. Next-token generation from left to right = autoregressive.' },
      { questionId: 40, type: 'concept', key: 'sft-lifecycle', topic: 'SFT lifecycle', reviewedCauses: ['concept'], note: 'Wrong. Learner did not know where Promote belongs. Controlled sequence: Prepare data → Fine-tune → Evaluate → Promote.' },
      { questionId: 56, type: 'concept', key: 'fairness-metrics', topic: 'DPL vs DPPL', reviewedCauses: ['concept'], note: 'Wrong again after Set 21. DPL = dataset labels before training; DPPL = predicted labels after model inference.' },
      { questionId: 59, type: 'concept', key: 'bedrock-invocation-logging', topic: 'Bedrock model invocation logging vs CloudTrail', reviewedCauses: ['concept'], note: 'Wrong. Learner associated service logging with CloudTrail but did not distinguish API activity from Bedrock model interaction details.' },
      { questionId: 61, type: 'concept', key: 'model-extraction-vs-inversion', topic: 'Model extraction vs Model inversion', rawFlags: ['english','clue'], reviewedCauses: ['concept','language','clue'], note: 'Wrong. Learner misunderstood the scenario flow and still lacks the boundary: extraction = steal/mimic model behavior; inversion = infer/reconstruct training-data information.' },
      { questionId: 65, type: 'concept', key: 'nist-ai-rmf', topic: 'NIST AI RMF function order', rawFlags: ['clue'], reviewedCauses: ['concept'], note: 'Wrong. Learner knows the four functions but not their standard recall order: Govern → Map → Measure → Manage.' },

      { questionId: 5, type: 'confidence', key: 'data-vs-concept-drift', topic: 'Data drift vs Concept drift', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct. Learner used the scenario correctly but was not confident between data drift and concept drift.' },
      { questionId: 10, type: 'confidence', key: 'ml-reproducibility-governance', topic: 'ML reproducibility and promotion evidence', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct mostly by elimination rather than direct recall. Reproduce = version artifacts; why promoted = evaluation/promotion evidence.' },
      { questionId: 25, type: 'confidence', key: 'agent-vs-flow', topic: 'Agent vs Flow', rawFlags: ['explainMore'], reviewedCauses: ['confidence'], note: 'Correct. Learner understands fixed/deterministic versus dynamic direction but still relies on plausibility rather than direct recall.' },
      { questionId: 45, type: 'confidence', key: 'intelligent-prompt-routing', topic: 'Intelligent Prompt Routing', rawFlags: ['explainMore'], reviewedCauses: ['confidence','language'], note: 'Correct. Routing concept was right, but English phrase “a mix of simple and hard requests” reduced confidence.' },

      { questionId: 61, type: 'language', key: 'model-extraction-english', topic: 'Model extraction — English', rawFlags: ['english','clue'], reviewedCauses: ['concept','language','clue'], note: 'Language friction: “train a substitute model that mimics the service” = train another model to imitate the original model/service behavior.' },
      { questionId: 45, type: 'language', key: 'intelligent-routing-english', topic: 'Intelligent Prompt Routing — English', rawFlags: ['explainMore'], reviewedCauses: ['confidence','language'], note: 'Language friction: “a mix of simple and hard requests” = requests of different complexity, a clue for routing.' },

      { questionId: 15, type: 'clue', key: 'autoregressive-generation', topic: 'Autoregressive generation', rawFlags: ['concept'], reviewedCauses: ['concept','clue'], note: 'Wrong. Learner anchored on the word “Linear” without considering the full choice “Linear regression”.' },
      { questionId: 39, type: 'clue', key: 'sft-data-preparation', topic: 'SFT dataset preparation', reviewedCauses: ['clue'], note: 'Wrong. Learner stopped at the word “Remove” and did not read its object: duplicates / obvious low-quality examples are appropriate to remove.' },
      { questionId: 61, type: 'clue', key: 'model-extraction-vs-inversion', topic: 'Model extraction vs Model inversion', rawFlags: ['english','clue'], reviewedCauses: ['concept','language','clue'], note: 'Wrong. Both concept boundary and scenario parsing contributed.' }
    ]
  };

  function upsertTopic(item) {
    const index = review.topicStatus.findIndex(existing => existing.key === item.key);
    if (index >= 0) review.topicStatus[index] = { ...review.topicStatus[index], ...item };
    else review.topicStatus.push(item);
  }

  [
    { key: 'fairness-metrics', topic: 'Fairness metrics: DPL / DPPL and group disparity', status: 'repeated', priority: 'must', note: 'Set 21 Q53 ไม่รู้ DPL/DPPL และ Set 22 Q56 ยังเลือก DPPL แทน DPL. เป็น gap ซ้ำโดยตรง. DPL = dataset labels ก่อน train; DPPL = predicted labels หลัง model ทำนาย.' },
    { key: 'autoregressive-generation', topic: 'Autoregressive generation', status: 'open', priority: 'must', note: 'Set 22 Q15 จำ Autoregressive generation ไม่ได้. Next-token generation ทีละ token / left-to-right = autoregressive.' },
    { key: 'sft-lifecycle', topic: 'Supervised fine-tuning lifecycle', status: 'open', priority: 'must', note: 'Set 22 Q40 ไม่รู้ตำแหน่ง Promote. จำ controlled flow: Prepare data → Fine-tune → Evaluate → Promote.' },
    { key: 'bedrock-invocation-logging', topic: 'Bedrock model invocation logging vs CloudTrail', status: 'open', priority: 'must', note: 'Set 22 Q59 เลือก CloudTrail เพราะเห็นคำว่า log. CloudTrail = API activity; model invocation logging = model interaction details.' },
    { key: 'model-extraction-vs-inversion', topic: 'Model extraction vs Model inversion', status: 'open', priority: 'must', note: 'Set 22 Q61 พลาดทั้ง concept boundary และ scenario language. Extraction = ขโมย/เลียนแบบ model behavior; Inversion = ย้อนหาร่องรอย training data.' },
    { key: 'nist-ai-rmf', topic: 'NIST AI RMF: Govern / Map / Measure / Manage', status: 'open', priority: 'must', note: 'Set 22 Q65 รู้ชื่อทั้ง 4 functions แต่เรียงผิด. Recall order: Govern → Map → Measure → Manage (GMMM).' },
    { key: 'data-vs-concept-drift', topic: 'Data drift vs Concept drift', status: 'confidence', priority: 'review', note: 'Set 22 Q5 ตอบ Concept drift ถูกจาก scenario แต่ยังลังเลกับ Data drift. Data drift = X เปลี่ยน; Concept drift = ความสัมพันธ์ X→Y เปลี่ยน.' },
    { key: 'ml-reproducibility-governance', topic: 'ML reproducibility and promotion evidence', status: 'confidence', priority: 'review', note: 'Set 22 Q10 ตอบถูกด้วย elimination มากกว่า direct recall. Reproduce = version data/code/model artifacts; promotion rationale = evaluation/promotion evidence.' },
    { key: 'agent-vs-flow', topic: 'Agent vs Flow', status: 'confidence', priority: 'review', note: 'Set 22 Q25 ตอบถูกและเข้าใจ Fixed path = Flow / dynamic decision at runtime = Agent แต่ direct recall ยังไม่เต็ม.' },
    { key: 'intelligent-prompt-routing', topic: 'Intelligent Prompt Routing', status: 'confidence', priority: 'review', note: 'Set 22 Q45 ตอบ routing ถูก แต่ phrase “a mix of simple and hard requests” ทำให้ลังเล. Simple/hard request mix is a routing clue.' }
  ].forEach(upsertTopic);
})();