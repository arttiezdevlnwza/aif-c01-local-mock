(() => {
  const bank = window.LOCAL_SET_19_BANK = window.LOCAL_SET_19_BANK || [];
  const domain = 5;
  const add = item => bank.push({ domain, ...item });

  add({
    task:'5.1', type:'multiple',
    question:'A company invokes an AWS-managed AI service from workloads inside a VPC. Security policy requires service traffic to stay off the public internet, sensitive data must be encrypted at rest with centrally managed keys, and the security team needs an audit record of AWS API activity. Which THREE AWS capabilities directly address these requirements? (Select THREE.)',
    questionTh:'บริษัทเรียก AWS-managed AI service จาก VPC โดยกำหนดว่า traffic ต้องไม่ผ่าน public internet, sensitive data ต้องเข้ารหัส at rest ด้วย managed keys และต้องมี audit record ของ AWS API activity ควรใช้ 3 capabilities ใด?',
    choices:{A:'AWS PrivateLink / VPC interface endpoint',B:'AWS Key Management Service (AWS KMS)',C:'AWS CloudTrail',D:'NAT Gateway',E:'Amazon Macie',F:'Amazon Bedrock Prompt Management'},
    answer:['A','B','C'],
    explanation:'ตอบ A, B, C — PrivateLink ให้ private service path, KMS จัดการ encryption keys, CloudTrail บันทึก AWS API activity. D ใช้ออกไป public destination, E ค้นหา/classify sensitive S3 data, F จัดการ prompt versions.'
  });

  add({
    task:'5.1', type:'single',
    question:'A regulated organization is reviewing how an AI model was produced. Auditors need to trace which datasets were used, how the data was transformed, and which model artifact was created from those steps. The goal is to document data origins and processing history, not merely list the current schema of a table. Which governance concept BEST fits?',
    questionTh:'องค์กร regulated ต้อง trace ว่า model มาจาก datasets อะไร ผ่าน transformations ใด แล้วได้ artifact ไหน เป้าหมายคือ document data origins/process history ไม่ใช่แค่ schema ปัจจุบัน แนวคิดใดตรงที่สุด?',
    choices:{A:'Data lineage',B:'Data retention',C:'Data residency',D:'Prompt caching'},
    answer:['A'],
    explanation:'ตอบ A — Data lineage บันทึก source → transformations → model/artifact provenance. B คือเก็บนานแค่ไหน, C คืออยู่หรือประมวลผลที่ไหน, D เป็น inference optimization.'
  });

  add({
    task:'5.1', type:'multiple',
    question:'A team is preparing confidential customer data for an AI system. It wants to reduce exposure of direct identifiers, ensure only authorized roles can access the dataset, detect unexpected data changes, and verify that the data is complete enough for its intended use before training. Which TWO practices MOST directly support secure data engineering? (Select TWO.)',
    questionTh:'ทีมเตรียม confidential customer data ต้องลดการเปิดเผย identifiers, จำกัด access, ตรวจ unexpected changes และเช็กความครบถ้วนก่อน train ข้อใดสนับสนุน secure data engineering มากที่สุด 2 ข้อ?',
    choices:{A:'Apply privacy-enhancing techniques such as masking or tokenization where appropriate',B:'Enforce access control and data-integrity checks',C:'Increase generation temperature',D:'Disable audit logging',E:'Store secrets directly in training examples'},
    answer:['A','B'],
    explanation:'ตอบ A, B — privacy-enhancing techniques ลด exposure ของ sensitive data และ access control/integrity controls ป้องกัน unauthorized access/changes. C ไม่เกี่ยวกับ data security, D ลด auditability, E เพิ่ม leakage risk.'
  });

  add({
    task:'5.1', type:'single',
    question:'A customer-service assistant retrieves information from external documents. One retrieved document contains malicious instructions telling the model to ignore policy and reveal secrets. The company wants to reduce the risk that untrusted content can override intended behavior and also validate outputs before they reach downstream systems. Which security concern is MOST directly illustrated?',
    questionTh:'customer-service assistant retrieve external document ที่มี malicious instructions ให้ ignore policy และเปิดเผย secrets ทีมต้องลดความเสี่ยงที่ untrusted content override behavior และ validate output ก่อนส่งต่อ ความเสี่ยงหลักคืออะไร?',
    choices:{A:'Prompt injection',B:'Model distillation',C:'Data normalization',D:'Feature scaling'},
    answer:['A'],
    explanation:'ตอบ A — instruction ที่พยายาม override behavior ผ่าน input/retrieved content คือ prompt injection. B เป็น customization, C/D เป็น data preprocessing ไม่ใช่ security threat.'
  });

  add({
    task:'5.1', type:'single',
    question:'A RAG application generates a confident answer about a policy change. The retrieved passages do not support one of the claims, and the business wants controls that improve output accuracy before a high-impact action is taken. The team can use trusted retrieval, validate outputs, calculate confidence, and request human review when evidence is weak. Which approach BEST matches AWS guidance?',
    questionTh:'RAG app ตอบอย่างมั่นใจแต่มี claim หนึ่งไม่มีหลักฐานจาก retrieved passages และคำตอบอาจนำไปสู่ high-impact action ทีมต้องเพิ่ม accuracy ด้วย trusted retrieval, validation, confidence และ human review เมื่อ evidence อ่อน ควรทำอย่างไร?',
    choices:{A:'Use grounding plus output validation, confidence checks, and human review when needed',B:'Increase temperature so the model considers more possibilities',C:'Remove citations so users focus on the answer',D:'Disable retrieval and rely on model memory only'},
    answer:['A'],
    explanation:'ตอบ A — grounding + output validation/confidence scoring และ human review ในกรณีสำคัญช่วยลด hallucination/unsupported claims. B เพิ่ม variability, C ลด verifiability, D ตัดแหล่ง current/trusted evidence.'
  });

  add({
    task:'5.1', type:'single',
    question:'An AI application needs to access a customer-record API on behalf of different signed-in users. The organization wants delegated credentials tied to the user identity and deterministic authorization rules that decide whether the agent is allowed to invoke a specific tool action. Which pairing is MOST appropriate?',
    questionTh:'AI app ต้องเรียก customer-record API ในนาม signed-in users หลายคน ต้องการ delegated credentials ตาม user identity และ deterministic authorization rules ว่า agent เรียก tool action ได้หรือไม่ ควรจับคู่ capability อย่างไร?',
    choices:{A:'AgentCore Identity for authentication/delegation; AgentCore Policy for authorization',B:'AgentCore Policy for authentication; AgentCore Memory for authorization',C:'AgentCore Runtime for user identity; Prompt Management for authorization',D:'SageMaker Model Registry for both'},
    answer:['A'],
    explanation:'ตอบ A — AgentCore Identity จัดการ authentication/delegated identity ส่วน Policy กำหนด authorization rules ของ actions. B/C/D สลับหน้าที่หรือใช้บริการคนละวัตถุประสงค์.'
  });

  add({
    task:'5.2', type:'single',
    question:'A healthcare company needs AWS-produced compliance reports and certifications to share with auditors. Separately, its internal audit team wants a service that helps collect and organize evidence about the company own controls. The company wants to choose the correct service for the first requirement. Which AWS service should it use?',
    questionTh:'บริษัท healthcare ต้องการ AWS-produced compliance reports/certifications เพื่อส่ง auditors และอีกเรื่องหนึ่งทีม internal audit ต้อง collect evidence ของ controls ตัวเอง คำถามนี้ถาม requirement แรก ควรใช้ service ใด?',
    choices:{A:'AWS Artifact',B:'AWS Audit Manager',C:'AWS Config',D:'Amazon Inspector'},
    answer:['A'],
    explanation:'ตอบ A — Artifact ให้ AWS compliance reports/agreements. B ช่วยรวบรวม evidence สำหรับ audit ขององค์กร, C ดู resource configuration/compliance, D ทำ vulnerability/exposure management.'
  });

  add({
    task:'5.2', type:'single',
    question:'A multinational company is reviewing two data-governance requirements. One policy specifies that customer data must remain and be processed within a particular geographic region. Another policy specifies that records must be retained for seven years and then deleted according to schedule. Which pair of governance concepts matches the requirements?',
    questionTh:'บริษัทข้ามชาติมีนโยบายสองเรื่อง: ข้อมูลต้องอยู่หรือประมวลผลในภูมิภาคที่กำหนด และ records ต้องเก็บ 7 ปีแล้วลบตาม schedule สอง requirement ตรงกับ concept ใด?',
    choices:{A:'Data residency and data retention',B:'Data lineage and model registry',C:'Data classification and prompt caching',D:'Data sovereignty and model distillation'},
    answer:['A'],
    explanation:'ตอบ A — Residency = ข้อมูลอยู่หรือประมวลผลที่ไหน; Retention = เก็บนานแค่ไหนและเมื่อไร archive/delete. B/C/D ไม่ตรงคู่ requirement ที่ให้มา.'
  });

  add({
    task:'5.2', type:'ordering',
    question:'An organization is establishing a governance program for AI systems. It first defines policies, responsibilities, and review criteria. It then schedules recurring reviews, evaluates evidence and risks with both technical and non-technical stakeholders, records decisions and required actions, and improves the program as new findings emerge. Select and order the FOUR governance activities from earliest to latest.',
    questionTh:'องค์กรกำลังสร้าง AI governance program โดยเริ่มจาก policies/roles/review criteria จากนั้นทำ review ตามรอบ ประเมิน evidence/risks กับ stakeholders บันทึก decision/actions และปรับปรุงต่อเนื่อง จงเรียง 4 กิจกรรม',
    choices:{A:'Document decisions, owners, and required remediation',B:'Define policies, roles, and review criteria',C:'Perform scheduled technical and non-technical reviews',D:'Use findings to improve controls and the governance process'},
    answer:['B','C','A','D'],
    explanation:'ลำดับคือ Define policy/roles/criteria → Perform recurring reviews → Document decisions/owners/actions → Continuous improvement. เป็น governance process ระดับแนวคิด ไม่ใช่ implementation-specific tool workflow.'
  });
})();