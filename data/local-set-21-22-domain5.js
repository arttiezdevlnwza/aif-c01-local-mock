(() => {
  const bank = window.LOCAL_SET_21_22_BANK = window.LOCAL_SET_21_22_BANK || [];
  const add = x => bank.push({ domain: 5, ...x });

  add({
    task:'5.2', type:'single', target:'weakness: soc-reports',
    v:{
      21:["A customer asks for a detailed report describing a service organization's controls against Trust Services Criteria such as security, availability, and confidentiality. The report is intended for customers and auditors who need detailed control information, not a public summary. Which report is the BEST match?","ลูกค้าต้องการรายงานแบบละเอียดเกี่ยวกับ controls ของ service organization ตาม Trust Services Criteria เช่น security, availability และ confidentiality โดยผู้ใช้รายงานคือ customers/auditors ที่ต้องการรายละเอียด ไม่ใช่ public summary ควรเป็นรายงานใด?"],
      22:["An enterprise procurement team wants a detailed assurance report about a provider's Trust Services controls. It is not asking specifically about financial-reporting controls and does not want the shorter general-public version. Which SOC report should it request?","ทีมจัดซื้อองค์กรต้องการ assurance report แบบละเอียดเกี่ยวกับ Trust Services controls ของ provider โดยไม่ได้เน้น financial-reporting controls และไม่ต้องการ public summary ที่สั้นกว่า ควรขอ SOC report ใด?"]
    },
    choices:{A:'SOC 1',B:'SOC 2',C:'SOC 3',D:'ISO/IEC 42001 certificate only'},
    answer:['B'],
    exp:[
      '✅ B — SOC 2 เป็น detailed report เกี่ยวกับ controls ตาม Trust Services Criteria สำหรับผู้ใช้ที่ต้องการรายละเอียด.',
      '❌ A — SOC 1 เน้น controls ที่เกี่ยวข้องกับ internal control over financial reporting.',
      '❌ C — SOC 3 ใช้เกณฑ์คล้าย SOC 2 แต่เป็น general-use/public summary ที่รายละเอียดน้อยกว่า.',
      '❌ D — ISO/IEC 42001 เป็นมาตรฐาน AI management system ไม่ใช่ SOC assurance report.',
      '🧠 จำสั้น ๆ — SOC 1 = Financial; SOC 2 = Detailed trust-services; SOC 3 = Public summary.'
    ]
  });

  add({
    task:'5.2', type:'single', target:'weakness: security-governance-service-map',
    v:{
      21:["A regulated company needs to continuously evaluate whether AWS resource configurations comply with defined rules over time. It is not asking for API activity history, downloadable AWS compliance reports, or vulnerability scanning. Which service is the direct match?","บริษัทที่มีข้อกำกับต้องตรวจอย่างต่อเนื่องว่า AWS resource configurations สอดคล้องกับ rules ที่กำหนดหรือไม่ตามเวลา โดยไม่ได้ถาม API activity history, compliance reports ของ AWS หรือ vulnerability scan ควรใช้ service ใด?"],
      22:["A governance team wants historical configuration state and rule-based compliance evaluation for AWS resources. Which service should it choose instead of Audit Manager or CloudTrail?","ทีม governance ต้องการ historical configuration state และการประเมิน compliance ตาม rules ของ AWS resources ควรเลือก service ใดแทน Audit Manager หรือ CloudTrail?"]
    },
    choices:{A:'AWS Config',B:'AWS Audit Manager',C:'AWS CloudTrail',D:'AWS Artifact'},
    answer:['A'],
    exp:[
      '✅ A — AWS Config ติดตาม resource configuration และประเมิน compliance state เทียบกับ rules.',
      '❌ B — Audit Manager ช่วยรวบรวม/จัด evidence สำหรับ audit และ frameworks.',
      '❌ C — CloudTrail บันทึกว่าใครเรียก AWS API อะไร เมื่อไร.',
      '❌ D — Artifact ให้ดาวน์โหลด AWS compliance reports และ agreements.',
      '🧠 จำสั้น ๆ — Config = resource state; CloudTrail = API activity; Audit Manager = evidence; Artifact = AWS reports.'
    ]
  });

  add({
    task:'5.2', type:'matching', target:'weakness: data-governance',
    v:{
      21:["A governance committee is defining controls for AI data across the organization. Match each governance concept with the description that BEST fits it.","คณะกรรมการ governance กำลังกำหนด controls สำหรับข้อมูล AI ทั่วองค์กร ให้จับคู่ governance concept แต่ละตัวกับคำอธิบายที่ตรงที่สุด"],
      22:["An audit asks the team to distinguish where data came from, how datasets are discovered, where data may reside, how long it is kept, and how often reviews occur. Match each concept correctly.","การ audit ต้องแยกว่า data มาจากไหน, datasets ถูกค้นพบอย่างไร, data อยู่ที่ไหน, เก็บนานแค่ไหน และ review บ่อยแค่ไหน จับคู่ concept ให้ถูกต้อง"]
    },
    choices:{A:'Data lineage',B:'Data cataloging',C:'Data residency',D:'Data retention',E:'Review cadence'},
    matches:{'1':'Track data origins and transformations','2':'Organize metadata so datasets can be discovered and understood','3':'Define approved geographic locations for storage or processing','4':'Define how long records are kept before archival or deletion','5':'Define how frequently governance reviews and reassessments occur'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    exp:[
      '✅ Data lineage → ติดตามต้นทางและ transformations ของข้อมูล.',
      '✅ Data cataloging → จัด metadata เพื่อให้ค้นหาและเข้าใจ dataset ได้.',
      '✅ Data residency → กำหนดว่าข้อมูลต้องอยู่/ประมวลผลใน location ใด.',
      '✅ Data retention → กำหนดระยะเวลาที่เก็บข้อมูลก่อน archive/delete.',
      '✅ Review cadence → กำหนดความถี่ของ governance review.',
      '🧠 จำสั้น ๆ — มาจากไหน = Lineage; หา dataset = Catalog; อยู่ที่ไหน = Residency; เก็บนาน = Retention; review บ่อย = Cadence.'
    ]
  });

  add({
    task:'5.1', type:'single', target:'weakness: iam-grant-vs-ceiling',
    v:{
      21:["An IAM role has an identity policy that allows several model-invocation actions. The security team wants to set the maximum permissions that this role can ever receive, even if additional identity policies are attached later. Which mechanism BEST fits?","IAM role มี identity policy ที่ allow model-invocation actions หลายอย่าง ทีม security ต้องการกำหนดเพดานสิทธิ์สูงสุดที่ role นี้จะได้รับ แม้ภายหลังมี identity policies เพิ่ม ควรใช้กลไกใด?"],
      22:["A developer role can receive permissions from multiple policies, but governance requires an identity-level ceiling that those grants cannot exceed. Which IAM feature should be used?","developer role อาจได้รับ permissions จากหลาย policies แต่ governance ต้องการเพดานระดับ identity ที่ grants เหล่านั้นห้ามเกิน ควรใช้ IAM feature ใด?"]
    },
    choices:{A:'Permissions boundary',B:'Identity-based policy',C:'Trust policy',D:'Resource tag only'},
    answer:['A'],
    exp:[
      '✅ A — Permissions boundary กำหนด maximum permissions ของ IAM identity และไม่ได้ grant สิทธิ์เอง.',
      '❌ B — Identity-based policy ใช้ grant permissions ให้ identity ภายใต้เพดานที่เกี่ยวข้อง.',
      '❌ C — Trust policy กำหนดว่าใครสามารถ assume role ได้ ไม่ได้กำหนด action ceiling หลัง assume.',
      '❌ D — Resource tag อย่างเดียวไม่ใช่ permission ceiling.',
      '🧠 จำสั้น ๆ — Identity policy = Grant; Permissions boundary = Ceiling ของ identity; SCP = Ceiling ระดับ org/account.'
    ]
  });

  add({
    task:'5.1', type:'single', target:'weakness: guardrails-filter-map',
    v:{
      21:["A Bedrock application must detect and mask personally identifiable information in model inputs and outputs. The requirement is specifically about PII, not general harmful-topic categories or sensitive data discovery across S3 buckets. Which control BEST fits?","Bedrock application ต้องตรวจและ mask PII ใน model inputs/outputs โดย requirement เน้น PII ไม่ใช่ harmful-topic categories ทั่วไป และไม่ใช่การค้นหา sensitive data ทั่ว S3 buckets ควรใช้ control ใด?"],
      22:["A chatbot should prevent customer identifiers from being exposed in generated responses. Which Amazon Bedrock Guardrails feature directly addresses sensitive information in prompts and responses?","chatbot ต้องป้องกัน customer identifiers ไม่ให้ถูกเปิดเผยใน generated responses Amazon Bedrock Guardrails feature ใดจัดการ sensitive information ใน prompts/responses โดยตรง?"]
    },
    choices:{A:'Sensitive information filters in Bedrock Guardrails',B:'Content filters only',C:'Amazon Macie only',D:'AWS Artifact'},
    answer:['A'],
    exp:[
      '✅ A — Sensitive information filters ใน Guardrails ใช้ตรวจ/บล็อก/ปกปิดข้อมูลอ่อนไหว เช่น PII ใน model interactions.',
      '❌ B — Content filters เน้น harmful/disallowed content categories ไม่ได้แทน PII-specific control.',
      '❌ C — Macie ใช้ discover/classify sensitive data ใน S3 ไม่ได้ทำ runtime filtering ของ model input/output.',
      '❌ D — Artifact เป็นแหล่ง compliance reports.',
      '🧠 จำสั้น ๆ — PII ระหว่างคุยกับ model = Guardrails Sensitive Information; PII ใน S3 = Macie.'
    ]
  });

  add({
    task:'5.1', type:'single', target:'undercovered: model-invocation-logging',
    v:{
      21:["A security team needs an audit trail of model interactions for a generative AI application, including prompts and responses according to the organization's logging policy. Which capability is MOST directly related to recording Amazon Bedrock model invocations for review?","ทีม security ต้องการ audit trail ของ model interactions สำหรับ GenAI app รวม prompts/responses ตาม logging policy ขององค์กร capability ใดเกี่ยวข้องโดยตรงกับการบันทึก Amazon Bedrock model invocations เพื่อ review?"],
      22:["An organization must retain logs of Bedrock inference interactions for investigation and governance, subject to its privacy policy. Which Bedrock feature should be considered for capturing invocation details?","องค์กรต้องเก็บ logs ของ Bedrock inference interactions สำหรับ investigation/governance ตาม privacy policy ควรพิจารณา Bedrock feature ใดเพื่อ capture invocation details?"]
    },
    choices:{A:'Model invocation logging',B:'Prompt temperature',C:'SageMaker Ground Truth',D:'Quick Sight'},
    answer:['A'],
    exp:[
      '✅ A — Model invocation logging ใช้บันทึกรายละเอียดการ invoke โมเดลเพื่อ audit/monitoring ตาม configuration และ policy.',
      '❌ B — Temperature ควบคุม randomness ของ output ไม่ใช่ logging.',
      '❌ C — Ground Truth ใช้ data labeling.',
      '❌ D — Quick Sight ใช้ BI/analytics ไม่ใช่ Bedrock invocation logging.',
      '🧠 จำสั้น ๆ — ต้องการหลักฐาน interaction ของ model = Model invocation logging.'
    ]
  });

  add({
    task:'5.1', type:'single', target:'undercovered: privacy-enhancing-data-integrity',
    v:{
      21:["A team must train on sensitive records while reducing unnecessary exposure of identifiable information. It also needs evidence if source records are changed unexpectedly. Which pair of security goals is being addressed?","ทีมต้อง train จาก sensitive records โดยลดการเปิดเผย identifiable information ที่ไม่จำเป็น และต้องมีหลักฐานหาก source records ถูกแก้โดยไม่คาดคิด เป้าหมาย security สองเรื่องนี้คืออะไร?"],
      22:["A secure data-engineering design applies privacy-enhancing techniques before model development and uses hashes/versioning to detect unauthorized changes to source data. What two concerns are these controls addressing?","secure data-engineering design ใช้ privacy-enhancing techniques ก่อนพัฒนา model และใช้ hashes/versioning เพื่อตรวจ unauthorized changes ใน source data controls เหล่านี้กำลังจัดการ concern สองเรื่องใด?"]
    },
    choices:{A:'Privacy protection and data integrity',B:'Higher temperature and longer output',C:'Prompt versioning and model distillation',D:'Batch throughput and UI design'},
    answer:['A'],
    exp:[
      '✅ A — PETs ลด exposure ของ sensitive data ส่วน hashes/versioning ช่วยตรวจ integrity/tampering.',
      '❌ B — Temperature/output length เป็น generation controls ไม่ใช่ secure data engineering.',
      '❌ C — Prompt versioning/distillation ไม่ตอบโจทย์ privacy + integrity ของ source data.',
      '❌ D — Throughput/UI ไม่ใช่ security goals ในโจทย์.',
      '🧠 จำสั้น ๆ — ซ่อน/ลด exposure = Privacy; ตรวจว่าข้อมูลถูกแก้ไหม = Integrity.'
    ]
  });

  add({
    task:'5.2', type:'single', target:'undercovered: genai-security-scoping-matrix',
    v:{
      21:["A governance team wants a structured framework for scoping generative-AI security responsibilities and risks across different ways an organization may consume or build GenAI solutions. Which framework named in the AIF-C01 governance objectives is the closest match?","ทีม governance ต้องการ framework แบบมีโครงสร้างเพื่อกำหนดขอบเขต security responsibilities/risks ของ GenAI ตามรูปแบบการใช้งานหรือสร้าง solution ที่ต่างกัน framework ใดที่อยู่ใน AIF-C01 governance objectives ตรงที่สุด?"],
      22:["An organization is defining governance protocols for GenAI and wants a framework specifically focused on security scoping rather than a general AI-risk framework or information-security management standard. Which concept BEST fits?","องค์กรกำลังกำหนด governance protocols สำหรับ GenAI และต้องการ framework ที่เน้น security scoping โดยเฉพาะ ไม่ใช่ general AI-risk framework หรือ ISMS standard ควรเลือกอะไร?"]
    },
    choices:{A:'Generative AI Security Scoping Matrix',B:'NIST AI RMF only',C:'ISO/IEC 27001 only',D:'SOC 3'},
    answer:['A'],
    exp:[
      '✅ A — Generative AI Security Scoping Matrix เป็น governance framework ที่ใช้ช่วยวางขอบเขต security considerations สำหรับ GenAI use patterns.',
      '❌ B — NIST AI RMF เป็น framework บริหาร AI risk แบบกว้าง ไม่ได้เป็น GenAI security-scoping matrix โดยเฉพาะ.',
      '❌ C — ISO/IEC 27001 เป็นมาตรฐาน information security management system.',
      '❌ D — SOC 3 เป็น general-use assurance report ไม่ใช่ governance scoping framework.',
      '🧠 จำสั้น ๆ — ถ้าโจทย์พูด “GenAI + security scoping” ให้คิดถึง Generative AI Security Scoping Matrix.'
    ]
  });

  add({
    task:'5.1', type:'single', target:'undercovered: ai-threats',
    v:{
      21:["An attacker repeatedly queries a deployed model and uses the outputs to infer sensitive characteristics of records that may have appeared in the training data. Which attack is MOST closely associated with this behavior?","ผู้โจมตี query deployed model ซ้ำ ๆ แล้วใช้ outputs เพื่ออนุมานลักษณะ sensitive ของ records ที่อาจอยู่ใน training data attack ใดเกี่ยวข้องที่สุด?"],
      22:["A privacy review finds that an adversary is trying to reconstruct information about training examples from a model's responses rather than stealing the model itself or poisoning the training set. Which threat BEST matches?","privacy review พบว่าผู้โจมตีพยายาม reconstruct ข้อมูลเกี่ยวกับ training examples จาก responses ของ model ไม่ได้ขโมย model หรือปนเปื้อน training set threat ใดตรงที่สุด?"]
    },
    choices:{A:'Model inversion',B:'Model extraction',C:'Data poisoning',D:'Prompt injection'},
    answer:['A'],
    exp:[
      '✅ A — Model inversion พยายามอนุมานหรือ reconstruct ข้อมูลเกี่ยวกับ training examples จาก model behavior/output.',
      '❌ B — Model extraction เน้นเลียนแบบ/คัดลอก model behavior เพื่อสร้าง substitute model.',
      '❌ C — Data poisoning ปนเปื้อน training data เพื่อบิดพฤติกรรม model.',
      '❌ D — Prompt injection แทรกคำสั่งใน input เพื่อเปลี่ยน behavior ของ application/model.',
      '🧠 จำสั้น ๆ — ย้อนข้อมูลจาก output = Inversion; ขโมยตัว model = Extraction; ปนข้อมูล train = Poisoning.'
    ]
  });
})();