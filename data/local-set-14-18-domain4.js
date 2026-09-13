(()=>{
  const bank=window.LOCAL_MOCK_14_18_BANK=window.LOCAL_MOCK_14_18_BANK||[];
  const add=(choices,explanation,variants,extra={})=>bank.push({domain:4,choices,explanation,variants,...extra});

  add(
    ['Fairness','Explainability','Robustness','Environmental sustainability'],
    'Fairness concerns unjustified differences in outcomes or performance across relevant groups. Explainability concerns understanding model decisions. Robustness concerns reliable behavior under perturbations or changing conditions. Environmental sustainability concerns compute, energy, and resource impact.',
    [
      ['A loan model has a much lower approval rate for one protected demographic group despite similar qualifications. Which Responsible AI dimension is MOST directly affected?','loan model มี approval rate ต่ำกว่ามากใน protected demographic group หนึ่งทั้งที่ qualification ใกล้กัน Responsible AI dimension ใดได้รับผลโดยตรง?',0],
      ['A regulator asks why a particular applicant received a negative model decision. Which Responsible AI dimension is MOST directly involved?','regulator ถามว่าทำไม applicant รายหนึ่งได้ negative decision จาก model Responsible AI dimension ใดเกี่ยวข้องโดยตรงที่สุด?',1],
      ['Small plausible perturbations to an input cause the model to change its prediction dramatically. Which Responsible AI property is weakest?','perturbation เล็ก ๆ ที่ plausible ทำให้ model เปลี่ยน prediction อย่างมาก Responsible AI property ใดอ่อน?',2],
      ['A team reduces unnecessary training compute while maintaining required model quality. Which Responsible AI consideration is MOST directly addressed?','ทีมลด training compute ที่ไม่จำเป็นโดยยังรักษา required model quality Responsible AI consideration ใดถูกแก้โดยตรง?',3],
      ['The clue is "group disparity in outcomes or error rates." Which Responsible AI principle fits?','clue คือ group disparity ใน outcomes หรือ error rates Responsible AI principle ใดตรง?',0]
    ],
    {vocab:[{term:'protected demographic group',th:'กลุ่มประชากรที่กฎหมาย/นโยบายให้ความคุ้มครอง'},{term:'plausible',th:'สมเหตุสมผล / มีโอกาสเกิดจริง'}]}
  );

  add(
    ['Sampling bias','Measurement bias','Automation bias','Prompt injection'],
    'Sampling bias occurs when collected data does not represent the target population. Measurement bias comes from systematically flawed measurement or proxies. Automation bias is over-reliance on automated outputs by people. Prompt injection is an adversarial instruction attack, not a dataset-bias category.',
    [
      ['A training dataset contains almost no rural users even though rural users are a major part of production traffic. Which bias is MOST likely?','training dataset แทบไม่มี rural users ทั้งที่ production มีจำนวนมาก bias ใดเป็นไปได้ที่สุด?',0],
      ['A health label is based on a sensor that systematically under-measures one group. Which bias source is the strongest concern?','health label มาจาก sensor ที่ under-measure กลุ่มหนึ่งอย่างเป็นระบบ bias source ใดน่ากังวลที่สุด?',1],
      ['Employees accept AI recommendations even when obvious evidence contradicts them. Which human-behavior risk does this describe?','พนักงานยอมรับ AI recommendations แม้มี evidence ชัดเจนว่าขัดแย้ง human-behavior risk นี้คืออะไร?',2],
      ['A user places malicious instructions inside retrieved content to make an assistant ignore its system rules. Which security attack is this?','user ใส่ malicious instructions ใน retrieved content เพื่อให้ assistant ignore system rules เป็น attack ใด?',3],
      ['The clue is "training sample does not represent the population." Which answer fits?','clue คือ training sample ไม่ represent population ควรตอบอะไร?',0]
    ],
    {vocab:[{term:'systematically',th:'เกิดแบบเป็นระบบและซ้ำในทิศทางเดิม'},{term:'contradicts',th:'ขัดแย้งกับ'}]}
  );

  add(
    ['Intrinsic interpretability','Post-hoc explainability','Transparency disclosure','Model monitoring'],
    'Intrinsic interpretability means the model itself is understandable by design, such as a simple rule list or shallow tree. Post-hoc explainability adds explanation methods after a complex model is trained. Transparency disclosure tells users relevant facts about AI use. Monitoring tracks behavior after deployment.',
    [
      ['A simple decision tree can be inspected directly to understand how features lead to a prediction. Which concept BEST fits?','simple decision tree inspect ได้ตรง ๆ ว่า features นำไป prediction อย่างไร concept ใดตรงที่สุด?',0],
      ['A complex black-box model is already trained, and analysts use SHAP-style feature attribution to explain predictions. Which concept BEST fits?','black-box model train แล้ว และ analyst ใช้ feature attribution แบบ SHAP เพื่ออธิบาย prediction concept ใดตรงที่สุด?',1],
      ['A chatbot tells users that they are interacting with an AI system. Which Responsible AI practice is MOST direct?','chatbot บอก user ว่ากำลัง interact กับ AI system practice ใดตรงที่สุด?',2],
      ['A deployed model is tracked for changes in quality and drift over time. Which operational practice is being applied?','deployed model ถูก track quality/drift ตามเวลา กำลังใช้ operational practice ใด?',3],
      ['The clue is "explanation technique added after training to a black-box model." Which answer fits?','clue คือ explanation technique ที่เพิ่มหลัง training ให้ black-box model ควรตอบอะไร?',1]
    ]
  );

  add(
    ['Robustness testing','Fairness testing','Prompt caching','Data retention policy'],
    'Robustness testing checks behavior under perturbations, edge cases, adversarial inputs, or shifts. Fairness testing compares outcomes across groups. Prompt caching is an efficiency feature. Retention policy controls how long data is kept.',
    [
      ['A team adds small perturbations to inputs and checks whether predictions remain stable. Which testing goal is PRIMARY?','ทีมเติม perturbations เล็ก ๆ ใน input แล้วเช็กว่า prediction stable หรือไม่ testing goal หลักคืออะไร?',0],
      ['The team compares false-negative rates across demographic groups. Which testing goal is PRIMARY?','ทีมเทียบ false-negative rate ระหว่าง demographic groups testing goal หลักคืออะไร?',1],
      ['A red-team exercise sends adversarially modified inputs to see whether the model behaves safely. Which Responsible AI property is being tested?','red-team ส่ง adversarially modified inputs เพื่อดูว่า model ยัง safe หรือไม่ กำลัง test property ใด?',0],
      ['The question is about resilience to noisy or adversarial inputs, not group disparity. Which test should be selected?','คำถามคือ resilience ต่อ noisy/adversarial inputs ไม่ใช่ group disparity ควรเลือก test ใด?',0],
      ['The clue is "remain reliable under perturbations." Which answer fits?','clue คือ remain reliable under perturbations ควรตอบอะไร?',0]
    ],
    {vocab:[{term:'resilience',th:'ความสามารถในการทนและกลับมาทำงานได้อย่างน่าเชื่อถือ'}]}
  );

  add(
    ['Privacy and security','Fairness','Explainability','Sustainability'],
    'Privacy and security covers protecting sensitive information and preventing unauthorized exposure or misuse. Fairness concerns group treatment, explainability concerns understanding decisions, and sustainability concerns resource impact.',
    [
      ['A model accidentally reveals personal information that appeared in training data. Which Responsible AI dimension is MOST directly affected?','model เผลอ reveal personal information จาก training data Responsible AI dimension ใดได้รับผลโดยตรง?',0],
      ['A team adds controls against model inversion that could expose training information. Which Responsible AI area does this support?','ทีมเพิ่ม controls ป้องกัน model inversion ที่อาจ expose training info สิ่งนี้ support Responsible AI area ใด?',0],
      ['An assistant handles PII and must collect only fields necessary for the task. Which Responsible AI concern is PRIMARY?','assistant จัดการ PII และต้อง collect เฉพาะ fields ที่จำเป็น concern ใดเป็นหลัก?',0],
      ['Access to sensitive prompts and outputs must be restricted to authorized users. Which Responsible AI dimension is MOST direct?','access sensitive prompts/outputs ต้อง restricted เฉพาะ authorized users Responsible AI dimension ใดตรงที่สุด?',0],
      ['The clue is "protect personal or sensitive data from exposure." Which answer fits?','clue คือ protect personal/sensitive data จาก exposure ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Human oversight','Model distillation','Prompt caching','Unsupervised clustering'],
    'Human oversight keeps qualified people involved in reviewing or approving consequential AI decisions. Distillation creates a smaller model, caching improves efficiency, and clustering groups unlabeled data.',
    [
      ['A medical AI may recommend treatment but cannot execute the action until a clinician approves it. Which safeguard is MOST direct?','medical AI แนะนำ treatment ได้แต่ execute ไม่ได้จน clinician approve safeguard ใดตรงที่สุด?',0],
      ['A high-impact loan rejection must be reviewed by a trained employee before it becomes final. Which control is being applied?','high-impact loan rejection ต้องผ่าน trained employee review ก่อน final control ใดถูกใช้?',0],
      ['An autonomous workflow pauses for manager approval before sending a large payment. Which safeguard does this represent?','autonomous workflow pause รอ manager approval ก่อนส่ง payment ใหญ่ safeguard นี้คืออะไร?',0],
      ['A company requires people to review uncertain predictions rather than letting the model act alone. Which Responsible AI practice fits?','บริษัทกำหนดให้คน review uncertain predictions แทนปล่อย model act alone practice ใดตรง?',0],
      ['The clue is "person must approve before a consequential action." Which answer fits?','clue คือ person must approve ก่อน consequential action ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Environmental sustainability','Transparency','Fairness','Data residency'],
    'Environmental sustainability concerns energy use, compute efficiency, and environmental impact. Transparency concerns disclosure and understandable information, fairness concerns equitable outcomes, and data residency concerns geographic data location.',
    [
      ['A team chooses a smaller adequate model to reduce energy use while preserving required quality. Which principle is MOST directly supported?','ทีมเลือก model ที่เล็กแต่เพียงพอเพื่อลด energy use โดยยังรักษา quality principle ใดถูก support โดยตรง?',0],
      ['A company measures carbon impact from repeated large-model training runs. Which Responsible AI area is this?','บริษัทวัด carbon impact จาก large-model training หลายรอบ Responsible AI area ใด?',0],
      ['Engineers avoid retraining an enormous model when a lighter adaptation method meets the same need. Which consideration is MOST relevant?','engineer หลีกเลี่ยง retrain model ใหญ่มากเมื่อ adaptation ที่เบากว่าตอบโจทย์ได้ consideration ใดเกี่ยวข้องที่สุด?',0],
      ['A design review explicitly evaluates compute and energy consumption alongside model quality. Which principle is being addressed?','design review evaluate compute/energy consumption ควบคู่ model quality กำลัง address principle ใด?',0],
      ['The clue is "reduce unnecessary compute and energy impact." Which answer fits?','clue คือ reduce unnecessary compute และ energy impact ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Model Card','AI Service Card','AWS Artifact report','CloudTrail event'],
    'A Model Card documents intended use, evaluation results, limitations, and risks for a specific model. An AI Service Card describes an AWS AI service at the service level. AWS Artifact provides AWS compliance reports and agreements. CloudTrail records API activity.',
    [
      ['A team needs a document describing intended use, evaluation results, and limitations for one specific model. Which artifact BEST fits?','ทีมต้องการ document intended use, evaluation results, limitations ของ model ตัวหนึ่ง artifact ใดตรงที่สุด?',0],
      ['A customer wants AWS-authored Responsible AI information about a managed AI service rather than a custom model. Which artifact is the closer fit?','customer ต้องการ AWS-authored Responsible AI info ของ managed AI service ไม่ใช่ custom model artifact ใดตรงกว่า?',1],
      ['An auditor wants to download AWS compliance reports and agreements. Which resource should be used?','auditor ต้อง download AWS compliance reports/agreements ควรใช้ resource ใด?',2],
      ['An investigation needs a history of who called an AWS API and when. Which evidence source is MOST direct?','investigation ต้องการ history ว่าใคร call AWS API เมื่อไร evidence source ใดตรงที่สุด?',3],
      ['The clue is "documentation for one model: purpose, evaluation, limitations, risks." Which answer fits?','clue คือ documentation สำหรับ model ตัวหนึ่ง: purpose, evaluation, limitations, risks ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Define intended use and affected users','Use representative data','Evaluate relevant groups and risks','Document limitations','Apply controls and human oversight','Monitor after deployment'],
    'A high-level Responsible AI workflow starts with intended use and affected users, uses representative data, evaluates groups and risks, documents limitations, applies controls and oversight before release, and monitors after deployment.',
    [
      ['Before selecting controls, which Responsible AI activity should happen near the start of a project?','ก่อนเลือก controls Responsible AI activity ใดควรเกิดช่วงต้น project?',0],
      ['After intended use is clear, which data-focused activity reduces the risk that important user groups are missing?','หลัง intended use ชัดแล้ว data-focused activity ใดลด risk ที่ important user groups หายไป?',1],
      ['Before deployment, the team must compare subgroup performance and assess known risks. Which stage is this?','ก่อน deploy ทีมต้อง compare subgroup performance และ assess risks เป็น stage ใด?',2],
      ['Known limits and intended-use boundaries must be recorded for reviewers and users. Which activity is this?','known limits และ intended-use boundaries ต้องถูก record สำหรับ reviewers/users เป็น activity ใด?',3],
      ['The model is already live. Which activity should continue to watch real-world behavior and emerging risks?','model live แล้ว activity ใดควรทำต่อเพื่อดู real-world behavior/emerging risks?',5]
    ],
    {orderVariant:{setIndex:2,question:'Order a high-level Responsible AI workflow from intended use through post-deployment monitoring.',questionTh:'เรียง high-level Responsible AI workflow ตั้งแต่ intended use จนถึง post-deployment monitoring',choices:['Define intended use and affected users','Use representative data','Evaluate relevant groups and risks','Document limitations','Apply controls and human oversight','Monitor after deployment'],answer:[0,1,2,3,4,5],explanation:'Start with intended use and users, use representative data, evaluate risks/groups, document limitations, apply controls/oversight, then monitor in production.'}}
  );
})();
