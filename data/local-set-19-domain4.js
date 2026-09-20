(() => {
  const bank = window.LOCAL_SET_19_BANK = window.LOCAL_SET_19_BANK || [];
  const domain = 4;
  const add = item => bank.push({ domain, ...item });

  add({
    task:'4.1', type:'single',
    question:'A public-sector AI system recommends applicants for a social support program. The organization discovers that qualified applicants from one rural demographic group receive positive recommendations at a substantially lower rate than comparable applicants from other groups. The team wants to identify the responsible AI concern before changing the model. Which principle is MOST directly involved?',
    questionTh:'ระบบ AI ภาครัฐแนะนำผู้สมัคร social support แต่พบว่ากลุ่ม rural demographic หนึ่งได้ positive recommendation ต่ำกว่ากลุ่มเทียบเคียงอย่างมีนัยสำคัญ ความกังวล Responsible AI หลักคืออะไร?',
    choices:{A:'Fairness',B:'Sustainability',C:'Availability',D:'Token efficiency'},
    answer:['A'],
    explanation:'ตอบ A — outcome disparity ระหว่างกลุ่มที่เทียบเคียงกันเป็น fairness concern. B เกี่ยวกับ resource/environment, C reliability ของ service, D cost/performance optimization.'
  });

  add({
    task:'4.1', type:'single',
    question:'A generative AI application must block harmful categories, prevent discussion of several prohibited topics, detect sensitive information, and reduce prompt-attack risk before responses reach end users. The company wants managed controls that can be applied to model inputs and outputs. Which AWS capability BEST fits?',
    questionTh:'GenAI app ต้อง block harmful content, prohibited topics, sensitive info และลด prompt attacks ทั้ง input/output ต้องการ managed control ของ AWS ควรใช้ capability ใด?',
    choices:{A:'Amazon Bedrock Guardrails',B:'Amazon Macie',C:'AWS Artifact',D:'SageMaker Model Registry'},
    answer:['A'],
    explanation:'ตอบ A — Bedrock Guardrails ใช้ content filters, denied topics, sensitive information และ prompt-attack detection ตาม capability. B ค้นหา sensitive data ใน S3, C compliance documents, D model version/approval governance.'
  });

  add({
    task:'4.1', type:'single',
    question:'A company can meet a summarization requirement with either a very large model or a smaller model that passes the same quality threshold. The larger model uses materially more compute and increases inference cost and energy consumption, while the business receives no measurable quality benefit. Which responsible AI practice is MOST appropriate?',
    questionTh:'บริษัททำ summarization ได้ทั้งโมเดลใหญ่มากและโมเดลเล็กที่ผ่าน quality threshold เท่ากัน แต่โมเดลใหญ่ใช้ compute/cost/energy มากกว่าโดยไม่มี benefit วัดได้ ควรทำอย่างไรตาม Responsible AI?',
    choices:{A:'Use the smaller model that meets the requirement',B:'Always use the largest model for safety',C:'Pre-train a new model for every request',D:'Increase output length regardless of need'},
    answer:['A'],
    explanation:'ตอบ A — right-sizing model/compute เป็น sustainability practice เมื่อคุณภาพถึง requirement แล้ว. B/C/D เพิ่ม resource usage โดยไม่มีเหตุผลจากโจทย์.'
  });

  add({
    task:'4.1', type:'multiple',
    question:'A hiring model is trained on historical data from a workforce that under-represents several important demographic groups. Labeling guidelines also changed across years, causing inconsistent labels between groups. Before training a new version, the team wants to reduce fairness risk originating in the dataset. Which TWO actions are MOST appropriate? (Select TWO.)',
    questionTh:'hiring model ใช้ historical data ที่บาง demographic groups มี representation ต่ำ และ labeling guideline เปลี่ยนทำให้ labels ไม่สม่ำเสมอ ต้องการลด fairness risk จาก dataset ก่อน train ใหม่ ควรทำอะไร 2 อย่าง?',
    choices:{A:'Assess subgroup representation and rebalance or curate data where appropriate',B:'Review label quality and consistency across groups',C:'Increase model temperature',D:'Hide demographic analysis from reviewers',E:'Evaluate only aggregate accuracy'},
    answer:['A','B'],
    explanation:'ตอบ A, B — representativeness และ label quality เป็น dataset factors ที่ก่อ bias/fairness gaps ได้. C ไม่แก้ training-data bias, D/E ทำให้มองไม่เห็น subgroup problems.'
  });

  add({
    task:'4.1', type:'multiple',
    question:'A lender wants to monitor a deployed model for changes in fairness over time and route selected low-confidence or high-impact predictions to people for review. The team also wants a capability that can analyze bias and feature attribution during model development. Which THREE SageMaker capabilities are relevant? (Select THREE.)',
    questionTh:'ผู้ให้กู้ต้อง monitor fairness/bias หลัง deploy, ส่ง selected predictions ให้คน review และต้องการ bias+feature attribution ระหว่างพัฒนา ควรใช้ SageMaker capabilities ใด 3 ตัว?',
    choices:{A:'SageMaker Clarify',B:'SageMaker Model Monitor',C:'Amazon Augmented AI (A2I)',D:'SageMaker Data Wrangler',E:'SageMaker JumpStart',F:'SageMaker Canvas'},
    answer:['A','B','C'],
    explanation:'ตอบ A, B, C — Clarify ช่วย bias/SHAP analysis, Model Monitor เฝ้าคุณภาพและ bias drift หลัง deploy, A2I ทำ human review หลัง inference. D เน้น data preparation, E เป็น model/solution hub, F เป็น no-code ML UI.'
  });

  add({
    task:'4.2', type:'single',
    question:'A credit-risk team must explain individual decisions to affected customers. One candidate model is a simple logistic regression whose coefficients can be inspected directly. Another is a complex ensemble that requires post-hoc techniques such as SHAP to explain individual predictions. Which statement BEST distinguishes the two?',
    questionTh:'ทีม credit risk ต้องอธิบาย decision รายบุคคล โมเดลหนึ่งเป็น logistic regression ที่ inspect coefficients ได้ตรง ๆ อีกโมเดลซับซ้อนต้องใช้ SHAP ภายหลัง ข้อใดอธิบายความต่างถูกที่สุด?',
    choices:{A:'The first is intrinsically interpretable; the second relies on post-hoc explainability',B:'Both are equally transparent because both output a probability',C:'The ensemble is intrinsically interpretable because it is more accurate',D:'SHAP makes the original model structure simple'},
    answer:['A'],
    explanation:'ตอบ A — simple linear/logistic models มักมี intrinsic interpretability ขณะที่ complex model ใช้ post-hoc explanation เช่น SHAP. B output probability ไม่ทำให้ internal logic transparent, C accuracy ไม่เท่ากับ interpretability, D SHAP อธิบายแต่ไม่ได้ทำให้ structure เดิมง่ายลง.'
  });

  add({
    task:'4.2', type:'single',
    question:'A product team is preparing documentation for a model it trained and owns. Stakeholders need the intended use, evaluation results, limitations, and known risks of that specific model. The team is not asking for AWS general responsible-use documentation for a managed AI service. Which artifact is MOST appropriate?',
    questionTh:'ทีม product ต้องทำเอกสารสำหรับโมเดลที่ตน train/own โดยระบุ intended use, evaluation, limitations และ risks ของโมเดลนั้น ไม่ได้ถาม AWS service-level responsible-use docs ควรใช้ artifact ใด?',
    choices:{A:'SageMaker Model Card',B:'AWS AI Service Card',C:'AWS Artifact compliance report',D:'CloudTrail event history'},
    answer:['A'],
    explanation:'ตอบ A — Model Card บันทึก intended use, evaluation, limitations และ risk ของโมเดลของเรา. B เป็น responsible-use information ของ AWS-managed AI service, C เป็น compliance documents, D เป็น API activity.'
  });

  add({
    task:'4.2', type:'single',
    question:'A medical decision-support system can improve raw predictive performance by using a much more complex model, but clinicians would have less ability to understand the factors influencing recommendations. Because decisions are consequential, the organization must balance performance with transparency and human oversight. Which approach is MOST appropriate?',
    questionTh:'medical decision-support อาจเพิ่ม raw performance ได้ด้วยโมเดลซับซ้อนขึ้นแต่ clinician เข้าใจปัจจัยยากลง และ decision มีผลกระทบสูง ต้อง balance performance/transparency/human oversight ควรทำอย่างไร?',
    choices:{A:'Evaluate the performance-interpretability tradeoff and preserve meaningful human review',B:'Choose the most complex model automatically',C:'Remove explanations to avoid confusing clinicians',D:'Automate every decision once aggregate accuracy is high'},
    answer:['A'],
    explanation:'ตอบ A — high-impact use case ต้องชั่ง performance กับ interpretability/explainability และคง human oversight ที่เหมาะสม. B/C/D ละเลย transparency, oversight และความเสี่ยงรายกรณี.'
  });

  add({
    task:'4.2', type:'matching',
    question:'A company is designing a human-centered explanation experience for an AI eligibility system. Users need to know that AI contributed to the decision, understand important limitations, and have a practical path to question or appeal a consequential outcome rather than receiving only a technical confidence score. Match each design need with the MOST appropriate concept.',
    questionTh:'บริษัทออกแบบ human-centered explanation สำหรับ eligibility system ผู้ใช้ต้องรู้ว่าใช้ AI, เข้าใจ limitations และมีช่องทาง review/appeal แทนการให้แค่ technical score ให้จับคู่ design need กับ concept',
    choices:{A:'Tell users that AI is involved and communicate important limitations',B:'Provide a way to request review or appeal a consequential outcome',C:'Provide understandable reasons for a model prediction',D:'Allow a person to approve or intervene before a high-impact action'},
    matches:{'1':'Transparency','2':'Recourse','3':'Explainability','4':'Human oversight'},
    answer:['A:1','B:2','C:3','D:4'],
    explanation:'A→Transparency, B→Recourse, C→Explainability, D→Human oversight. ทั้งสี่ช่วยให้ระบบมีความหมายต่อผู้ใช้ ไม่ใช่เพียงแสดง technical score.'
  });
})();