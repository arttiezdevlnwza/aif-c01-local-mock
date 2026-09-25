(() => {
  const bank = window.LOCAL_SET_23_BANK = window.LOCAL_SET_23_BANK || [];
  const add = x => bank.push({ domain:5, ...x });

  add({task:'5.1',type:'single',target:'privatelink-ai-security',
    question:'A company wants traffic from its VPC to a supported AWS AI service to stay on private AWS networking instead of traversing the public internet. Which AWS capability is the closest fit?',
    questionTh:'บริษัทต้องการให้ traffic จาก VPC ไปยัง AWS AI service ที่รองรับวิ่งผ่านเครือข่ายส่วนตัวของ AWS แทนการออก public internet ควรใช้ capability ใด?',
    choices:{A:'AWS PrivateLink / VPC endpoint',B:'Amazon CloudFront',C:'AWS Artifact',D:'Amazon Personalize'},
    answer:['A'],
    exp:['✅ A — PrivateLink/VPC endpoints ให้ private connectivity ไปยัง supported AWS services โดยไม่ต้องออก public internet.','❌ B — CloudFront เป็น content delivery network.','❌ C — Artifact ให้ compliance reports/agreements.','❌ D — Personalize เป็น recommendation service.','🧠 จำสั้น ๆ — Private service path from VPC = PrivateLink/VPC endpoint.']});

  add({task:'5.1',type:'single',target:'agentcore-identity-vs-policy',
    question:'An agent needs short-lived credentials to access downstream services on behalf of an authorized user. The team wants credential handling outside the prompt logic. Which AgentCore capability BEST fits?',
    questionTh:'agent ต้องใช้ short-lived credentials เพื่อเข้าถึง downstream services ในนามผู้ใช้ที่ได้รับอนุญาต และทีมต้องการแยกการจัดการ credentials ออกจาก prompt logic ควรใช้ AgentCore capability ใด?',
    choices:{A:'AgentCore Identity',B:'AgentCore Policy',C:'AgentCore Memory',D:'AgentCore Evaluations'},
    answer:['A'],
    exp:['✅ A — Identity จัดการ identity/credential access สำหรับ agent และ downstream resources.','❌ B — Policy เน้น deterministic authorization decisions/allow-deny.','❌ C — Memory ใช้เก็บ context/knowledge ที่ต้องจำ.','❌ D — Evaluations ใช้ประเมิน agent behavior/quality.','🧠 จำสั้น ๆ — Credentials = Identity; Allow/Deny rules = Policy.']});

  add({task:'5.1',type:'single',target:'bedrock-invocation-logging-retest',
    question:'A governance team needs configured records of Bedrock model interactions for later investigation, including request and response details where permitted. Which capability is the direct match?',
    questionTh:'ทีม governance ต้องการเก็บ records ของ Bedrock model interactions ตาม configuration เพื่อใช้สืบสวนภายหลัง รวม request/response details ในขอบเขตที่อนุญาต ควรใช้ capability ใด?',
    choices:{A:'Model invocation logging',B:'AWS CloudTrail only',C:'Prompt Management',D:'AWS Config'},
    answer:['A'],
    exp:['✅ A — Model invocation logging ใช้ capture model-interaction details ตาม configuration.','❌ B — CloudTrail เน้น API activity เช่นใครเรียก API อะไร เมื่อไร ไม่ใช่ interaction content โดยตรง.','❌ C — Prompt Management เก็บ/version prompts.','❌ D — Config ติดตาม resource configuration/compliance.','🧠 จำสั้น ๆ — ใครเรียก API = CloudTrail; คุยอะไรกับ model = Invocation logging.']});

  add({task:'5.1',type:'single',target:'model-inversion-retest',
    question:'An attacker studies a model\'s outputs to infer whether particular sensitive records or attributes were present in the model\'s training data. Which threat BEST matches?',
    questionTh:'ผู้โจมตีวิเคราะห์ outputs ของ model เพื่ออนุมานว่ามี records หรือ attributes ที่อ่อนไหวบางอย่างอยู่ใน training data หรือไม่ threat ใดตรงที่สุด?',
    choices:{A:'Model inversion',B:'Model extraction',C:'Prompt injection',D:'Data drift'},
    answer:['A'],
    exp:['✅ A — Model inversion พยายามย้อนหรืออนุมานข้อมูลเกี่ยวกับ training data จาก model behavior/output.','❌ B — Model extraction มุ่งสร้าง substitute model ที่เลียนแบบ behavior ของ model เดิม.','❌ C — Prompt injection แทรก instructions เพื่อเปลี่ยน behavior ระหว่างใช้งาน.','❌ D — Data drift คือ input distribution เปลี่ยน.','🧠 จำสั้น ๆ — ย้อนหา training data = Inversion; ขโมย behavior ไปทำตัวเลียนแบบ = Extraction.']});

  add({task:'5.1',type:'single',target:'hallucination-output-validation',
    question:'A RAG system retrieves relevant evidence, but the application must block generated claims that are not supported by that evidence before showing them to users. Which additional control MOST directly addresses this requirement?',
    questionTh:'RAG system retrieve evidence ที่เกี่ยวข้องได้แล้ว แต่ application ต้อง block generated claims ที่ไม่มีหลักฐานรองรับก่อนแสดงให้ผู้ใช้ control เพิ่มเติมใดตรงกับ requirement นี้ที่สุด?',
    choices:{A:'Output validation against retrieved evidence',B:'Increase temperature',C:'Remove citations',D:'Disable logging'},
    answer:['A'],
    exp:['✅ A — Output validation ตรวจว่า claim ในคำตอบสอดคล้องกับ evidence ที่มีหรือไม่ก่อนปล่อยออกไป.','❌ B — Temperature สูงขึ้นไม่ได้เพิ่ม factual grounding.','❌ C — ลบ citations ทำให้ตรวจสอบที่มาลำบากขึ้น.','❌ D — Logging ไม่ใช่ hallucination validation control.','🧠 จำสั้น ๆ — Retrieve evidence แล้ว ยังต้อง Validate output ว่าไม่พูดเกินหลักฐาน.']});

  add({task:'5.2',type:'single',target:'retention-vs-residency',
    question:'A policy states that customer records must be deleted after seven years, regardless of the AWS Region in which they are stored. Which data-governance concept is being defined?',
    questionTh:'นโยบายระบุว่าต้องลบ customer records หลังครบ 7 ปี ไม่ว่าจะเก็บอยู่ใน AWS Region ใด นี่กำลังกำหนด data-governance concept ใด?',
    choices:{A:'Data retention',B:'Data residency',C:'Data lineage',D:'Data cataloging'},
    answer:['A'],
    exp:['✅ A — Retention กำหนดว่าเก็บข้อมูลไว้นานเท่าไรและเมื่อไรต้อง archive/delete.','❌ B — Residency กำหนดว่าข้อมูลเก็บหรือประมวลผลใน location ใดได้.','❌ C — Lineage ตามที่มาและ transformations.','❌ D — Cataloging จัด metadata เพื่อค้นหา/เข้าใจข้อมูล.','🧠 จำสั้น ๆ — เก็บนานแค่ไหน = Retention; อยู่ที่ไหน = Residency.']});

  add({task:'5.2',type:'multiple',target:'governance-service-framework-pairings',
    question:'Which TWO governance pairings are correct? (Select TWO.)',
    questionTh:'คู่ governance ใด 2 ข้อจับคู่ได้ถูกต้อง?',
    choices:{A:'AWS Audit Manager — collect and organize audit evidence against frameworks',B:'Generative AI Security Scoping Matrix — scope security responsibilities across GenAI consumption/build patterns',C:'AWS Artifact — continuously evaluate resource configuration rules',D:'AWS Config — download third-party SOC reports for AWS',E:'AWS CloudTrail — define data-retention periods for business records'},
    answer:['A','B'],
    exp:['✅ A — Audit Manager ช่วย map controls/frameworks และรวบรวม audit evidence.','✅ B — GenAI Security Scoping Matrix ช่วยจัด scope/use pattern เพื่อมอง security responsibilities/controls.','❌ C — Resource configuration rules เป็นบทบาทของ AWS Config ไม่ใช่ Artifact.','❌ D — Artifact ใช้ดาวน์โหลด AWS compliance reports/agreements ไม่ใช่ Config.','❌ E — CloudTrail บันทึก API activity ไม่ได้กำหนด business data retention policy.','🧠 จำสั้น ๆ — Evidence = Audit Manager; GenAI security scope = Scoping Matrix.']});

  add({task:'5.1',type:'multiple',target:'secure-data-engineering',
    question:'Which THREE practices directly support secure data engineering for an AI training dataset? (Select THREE.)',
    questionTh:'แนวปฏิบัติใด 3 อย่างสนับสนุน secure data engineering สำหรับ AI training dataset โดยตรง?',
    choices:{A:'Apply least-privilege access controls',B:'Use integrity checks such as hashes or versioning',C:'Minimize or protect sensitive personal data',D:'Increase model temperature',E:'Add duplicate records to enlarge the dataset',F:'Remove audit trails'},
    answer:['A','B','C'],
    exp:['✅ A — Least privilege จำกัดผู้ที่อ่าน/แก้ข้อมูลได้.','✅ B — Integrity checks ช่วยตรวจ unauthorized modifications.','✅ C — Data minimization/privacy protection ลด exposure ของ sensitive data.','❌ D — Temperature เป็น generation parameter.','❌ E — Duplicates ไม่ใช่ security control.','❌ F — การลบ audit trail ทำให้ governance/security แย่ลง.','🧠 จำสั้น ๆ — Access + Integrity + Privacy.']});

  add({task:'5.2',type:'ordering',target:'nist-ai-rmf-retest',
    question:'Order the four NIST AI Risk Management Framework functions in their standard recall sequence.',
    questionTh:'เรียง 4 functions ของ NIST AI Risk Management Framework ตามลำดับมาตรฐานที่ใช้จำ.',
    choices:{A:'Measure',B:'Manage',C:'Map',D:'Govern'},
    answer:['D','C','A','B'],
    exp:['✅ ลำดับสำหรับ recall คือ Govern → Map → Measure → Manage.','❌ Govern เป็น cross-cutting ในการใช้งานจริง แต่ลำดับจำมาตรฐานยังเป็น GMMM.','🧠 จำสั้น ๆ — GMMM = Govern → Map → Measure → Manage.']});
})();