(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const add = x => bank.push({ domain:5, ...x });

  add({task:'5.1',type:'single',target:'iam-boundary-vs-scp-angle',
    question:'A security team wants to cap the maximum permissions of one IAM role even if administrators attach additional identity policies later. Which mechanism is designed for that identity-level ceiling?',
    questionTh:'ทีม security ต้องการจำกัด maximum permissions ของ IAM role หนึ่ง แม้ภายหลัง administrator จะ attach identity policies เพิ่ม กลไกใดถูกออกแบบมาเป็น identity-level ceiling?',
    choices:{A:'Permissions boundary',B:'Service control policy (SCP)',C:'Role trust policy',D:'Resource-based policy only'},
    answer:['A'],
    exp:['✅ A — Permissions boundary กำหนด maximum permissions ของ IAM identity โดยไม่ได้ grant permissions เอง.','❌ B — SCP เป็น ceiling ระดับ organization/account ไม่ใช่ per-identity boundary.','❌ C — Trust policy กำหนดว่าใคร assume role ได้.','❌ D — Resource policy ควบคุม access ที่ resource ไม่ใช่ maximum permission ceiling ของ role.','🧠 จำสั้น ๆ — Identity grant = policy; identity ceiling = Boundary; org ceiling = SCP.']});

  add({task:'5.1',type:'single',target:'guardrails-denied-topics-vs-content',
    question:'A chatbot must refuse conversations about a company-defined prohibited business topic even when the text is not generally toxic or violent. Which Bedrock Guardrails control is the closest fit?',
    questionTh:'chatbot ต้องปฏิเสธการสนทนาเกี่ยวกับหัวข้อธุรกิจที่บริษัทกำหนดว่าห้าม แม้ข้อความนั้นไม่ได้ toxic หรือ violent โดยทั่วไป Bedrock Guardrails control ใดตรงที่สุด?',
    choices:{A:'Denied topics',B:'Content filters',C:'Sensitive information filters',D:'Word filters only'},
    answer:['A'],
    exp:['✅ A — Denied topics ใช้กำหนด contextual topics/themes ที่ application ไม่ต้องการให้สนทนา.','❌ B — Content filters เน้น harmful content categories.','❌ C — Sensitive information filters เน้น PII/sensitive entities.','❌ D — Word filters บล็อกคำ/วลีเฉพาะ ไม่ครอบคลุม semantic topic ได้เท่า denied topics.','🧠 จำสั้น ๆ — Theme/topic = Denied Topics; harmful category = Content; PII = Sensitive Info.']});

  add({task:'5.1',type:'single',target:'model-invocation-logging-vs-cloudtrail',
    question:'Investigators need the configured record of Bedrock model interactions, including invocation details such as prompts and responses where policy permits. Which Bedrock capability is the direct match?',
    questionTh:'ทีม investigation ต้องการ record ของ Bedrock model interactions ตาม configuration รวม invocation details เช่น prompts/responses ในขอบเขตที่ policy อนุญาต Bedrock capability ใดตรงที่สุด?',
    choices:{A:'Model invocation logging',B:'AWS CloudTrail event history only',C:'Prompt Management',D:'AWS Artifact'},
    answer:['A'],
    exp:['✅ A — Model invocation logging ใช้ capture invocation details สำหรับ monitoring/governance ตาม configuration.','❌ B — CloudTrail เน้น API activity ว่าใครเรียกอะไรเมื่อไร ไม่ใช่ interaction content/details โดยตรง.','❌ C — Prompt Management เก็บ/version prompt templates.','❌ D — Artifact ให้ compliance reports/agreements.','🧠 จำสั้น ๆ — API call history = CloudTrail; model interaction details = Invocation logging.']});

  add({task:'5.2',type:'single',target:'soc1-angle',
    question:'An auditor needs a report specifically about a service organization’s controls that are relevant to customers’ internal control over financial reporting. Which SOC report is the direct match?',
    questionTh:'auditor ต้องการ report ที่เน้น controls ของ service organization ซึ่งเกี่ยวข้องกับ internal control over financial reporting ของลูกค้า SOC report ใดตรงที่สุด?',
    choices:{A:'SOC 1',B:'SOC 2',C:'SOC 3',D:'ISO/IEC 42001'},
    answer:['A'],
    exp:['✅ A — SOC 1 เน้น controls relevant to financial reporting.','❌ B — SOC 2 เน้น Trust Services Criteria เช่น security/availability/confidentiality.','❌ C — SOC 3 เป็น general-use public-style assurance report ตาม Trust Services Criteria.','❌ D — ISO 42001 เป็น AI management system standard ไม่ใช่ SOC report.','🧠 จำสั้น ๆ — Financial = SOC 1; Detailed Trust Services = SOC 2; Public Trust Services = SOC 3.']});

  add({task:'5.1',type:'single',target:'model-extraction-vs-inversion',
    question:'An adversary repeatedly queries a proprietary model and uses the input-output pairs to train a substitute model that mimics the service. Which threat BEST matches?',
    questionTh:'ผู้โจมตี query proprietary model ซ้ำ ๆ แล้วใช้คู่ input-output ไป train substitute model ให้เลียนแบบ service threat ใดตรงที่สุด?',
    choices:{A:'Model extraction',B:'Model inversion',C:'Data poisoning',D:'Prompt leakage'},
    answer:['A'],
    exp:['✅ A — Model extraction พยายามคัดลอก/เลียนแบบ model behavior จาก queries และ outputs.','❌ B — Model inversion พยายามย้อนข้อมูลเกี่ยวกับ training examples.','❌ C — Data poisoning ปน training data เพื่อเปลี่ยน model behavior.','❌ D — Prompt leakage เน้นเปิดเผย hidden/system prompt content.','🧠 จำสั้น ๆ — ขโมย behavior = Extraction; ย้อน training data = Inversion.']});

  add({task:'5.2',type:'multiple',target:'aws-governance-service-map',
    question:'A governance program needs one service to evaluate AWS resource configuration against rules and another to collect audit evidence against frameworks. Which TWO services map directly to those needs? (Select TWO.)',
    questionTh:'governance program ต้องการ service หนึ่งสำหรับประเมิน AWS resource configuration เทียบ rules และอีก service สำหรับรวบรวม audit evidence ตาม frameworks ควรเลือกอะไร 2 ข้อ?',
    choices:{A:'AWS Config',B:'AWS Audit Manager',C:'AWS Artifact',D:'AWS CloudTrail',E:'Amazon Macie'},
    answer:['A','B'],
    exp:['✅ A — Config ติดตาม configuration state และ rule-based compliance.','✅ B — Audit Manager map frameworks/controls และรวบรวม evidence.','❌ C — Artifact ให้ดาวน์โหลด AWS compliance reports/agreements.','❌ D — CloudTrail เก็บ API activity history.','❌ E — Macie ค้นหา/classify sensitive data ใน S3.','🧠 จำสั้น ๆ — Config = state/rules; Audit Manager = evidence.']});

  add({task:'5.2',type:'multiple',target:'data-governance-roles-and-controls',
    question:'A data-governance review asks who is accountable for a data domain, who handles day-to-day quality/definitions, and what tracks how data changed from source to downstream artifact. Which THREE concepts answer these questions? (Select THREE.)',
    questionTh:'data-governance review ถามว่าใคร accountable ต่อ data domain ใครดูแล quality/definitions ในงานประจำ และอะไรใช้ตามว่าข้อมูลเปลี่ยนจาก source ไป downstream artifact อย่างไร ควรเลือก concept ใด 3 ข้อ?',
    choices:{A:'Data owner',B:'Data steward',C:'Data lineage',D:'Data retention',E:'Data residency',F:'Review cadence'},
    answer:['A','B','C'],
    exp:['✅ A — Data owner รับ accountability เชิงธุรกิจของ data domain.','✅ B — Data steward ดูแล quality, definitions, metadata และ governance ประจำวัน.','✅ C — Data lineage ตาม source, movement และ transformations.','❌ D — Retention = เก็บนานแค่ไหน.','❌ E — Residency = อยู่/ประมวลผลที่ไหน.','❌ F — Review cadence = review บ่อยแค่ไหน.','🧠 จำสั้น ๆ — Owner = accountable; Steward = ดูแล; Lineage = เส้นทางข้อมูล.']});

  add({task:'5.1',type:'multiple',target:'secure-data-engineering-controls',
    question:'A team wants to reduce exposure of sensitive training data, detect unauthorized changes to source files, and ensure only approved roles can modify the dataset. Which THREE security goals or controls map directly to these needs? (Select THREE.)',
    questionTh:'ทีมต้องการลดการเปิดเผย sensitive training data ตรวจ unauthorized changes ของ source files และให้เฉพาะ approved roles แก้ dataset ได้ security goals/controls ใด 3 ข้อตรงกับ needs เหล่านี้?',
    choices:{A:'Privacy-enhancing techniques / minimization',B:'Integrity checks such as hashes/versioning',C:'Least-privilege IAM access',D:'Higher generation temperature',E:'Longer model outputs',F:'More embedding dimensions'},
    answer:['A','B','C'],
    exp:['✅ A — Privacy techniques/minimization ลด unnecessary exposure.','✅ B — Hashes/versioning ช่วยตรวจ tampering และ integrity.','✅ C — Least privilege จำกัดผู้ที่แก้ข้อมูลได้.','❌ D/E/F — เป็น generation/vector considerations ไม่ใช่ data-security controls เหล่านี้.','🧠 จำสั้น ๆ — ซ่อนเท่าที่จำเป็น + ตรวจว่าโดนแก้ไหม + จำกัดคนแก้.']});

  add({task:'5.2',type:'ordering',target:'nist-ai-rmf-order',
    question:'Put the four NIST AI Risk Management Framework functions in their standard recall order.',
    questionTh:'เรียง 4 functions ของ NIST AI Risk Management Framework ตามลำดับที่ใช้จำมาตรฐาน.',
    choices:{A:'Manage',B:'Measure',C:'Govern',D:'Map'},
    answer:['C','D','B','A'],
    exp:['✅ ลำดับสำหรับ recall คือ Govern → Map → Measure → Manage.','🧠 จำสั้น ๆ — GMMM: Govern, Map, Measure, Manage.']});
})();