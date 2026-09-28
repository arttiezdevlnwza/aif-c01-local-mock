(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:5,type:'single',...x});

  add({objective:'5.1.1',target:'iam-least-privilege-ai',
    q:'A production AI application runs under an IAM role that can invoke a foundation model, read approved documents, and call a small set of business APIs. During a security review, the team discovers that the role also has broad administrator permissions inherited from an old prototype even though the application never uses them. The reviewers want to reduce the blast radius without breaking required actions. Which security practice should be applied?',
    th:'production AI application ทำงานภายใต้ IAM role ที่สามารถ invoke foundation model อ่านเอกสารที่อนุมัติ และเรียก business APIs จำนวนเล็กน้อย ระหว่าง security review ทีมพบว่า role นี้ยังมี administrator permissions กว้าง ๆ ที่ตกค้างมาจาก prototype เก่า ทั้งที่ application ไม่ได้ใช้ permissions เหล่านั้น ผู้ตรวจทานต้องการลด blast radius โดยไม่ทำให้ actions ที่จำเป็นเสีย ควรใช้ security practice ใด?',
    ask:'ใช้หลัก Least Privilege กับ IAM roles, policies และ permissions ของ AI workload.',
    choices:{A:'Reduce the role to least-privilege permissions required by the application',B:'Keep administrator access because AI systems always need full permissions',C:'Move permissions into the prompt instead of IAM',D:'Disable authentication so the agent can call any service freely'},
    answer:['A'],
    why:{A:'ถูก เพราะ IAM ควร grant เฉพาะ actions/resources ที่ workload ต้องใช้จริง เพื่อลดผลกระทบหาก credential หรือ agent ถูก misuse.',B:'ผิด เพราะ AI ไม่จำเป็นต้องมี admin permission โดยอัตโนมัติ.',C:'ผิด เพราะ prompt ไม่ใช่ security authorization mechanism.',D:'ผิด เพราะการไม่มี authentication เพิ่มความเสี่ยงอย่างรุนแรง.'},
    cue:'Agent ฉลาดแค่ไหนก็ต้อง Least Privilege.'});

  add({objective:'5.1.1',target:'aws-ai-security-capability-map',type:'matching',
    q:'A security architect is designing controls around an AI workload and needs several different AWS capabilities. The design must discover sensitive data in S3, keep supported service traffic private from a VPC, protect encryption keys, manage outbound agent credentials, and enforce deterministic authorization rules before an agent invokes sensitive tools. Match each need with the most appropriate AWS service or feature.',
    th:'security architect กำลังออกแบบ controls รอบ AI workload และต้องใช้ AWS capabilities หลายแบบ Design ต้องค้นหา sensitive data ใน S3 ทำให้ traffic ไปยัง supported services จาก VPC วิ่งแบบ private ปกป้อง encryption keys จัดการ outbound credentials ของ agent และบังคับ authorization rules แบบ deterministic ก่อน agent เรียก sensitive tools จงจับคู่แต่ละความต้องการกับ AWS service หรือ feature ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon Macie, AWS PrivateLink, AWS KMS, AgentCore Identity และ Policy in AgentCore.',
    choices:{A:'Discover and classify sensitive data in Amazon S3',B:'Provide private connectivity from a VPC to supported AWS services',C:'Create and control cryptographic keys for encryption',D:'Manage credentials and identity for agent access to downstream systems',E:'Evaluate deterministic allow/deny rules for agent actions'},
    matches:{'1':'Amazon Macie','2':'AWS PrivateLink / VPC endpoints','3':'AWS Key Management Service (AWS KMS)','4':'Amazon Bedrock AgentCore Identity','5':'Policy in AgentCore'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ Sensitive S3 data discovery → Amazon Macie.','✅ Private VPC service path → AWS PrivateLink/VPC endpoints.','✅ Encryption keys → AWS KMS.','✅ Agent outbound credentials/identity → AgentCore Identity.','✅ Deterministic tool authorization → Policy in AgentCore.'],
    cue:'Macie หา PII, PrivateLink ทำ private path, KMS ถือ keys, Identity ถือ credentials, Policy ตัดสิน allow/deny.'});

  add({objective:'5.1.1',target:'shared-responsibility-ai',
    q:'A company uses a managed foundation-model service and assumes that AWS will therefore decide who in the company can access prompts, classify all customer data correctly, configure every application guardrail, and determine whether generated content is legally appropriate. The cloud security lead says this misunderstands the AWS shared responsibility model. Which statement best corrects the misunderstanding?',
    th:'บริษัทใช้ managed foundation-model service และจึงคิดว่า AWS จะเป็นผู้ตัดสินทั้งหมดว่าใครในบริษัทเข้าถึง prompts ได้ จัดประเภท customer data ให้ถูกต้อง ตั้งค่า application guardrails ทุกอย่าง และตัดสินว่า generated content เหมาะสมทางกฎหมายหรือไม่ Cloud security lead บอกว่านี่เป็นความเข้าใจผิดเกี่ยวกับ AWS shared responsibility model ข้อใดแก้ความเข้าใจนี้ได้ถูกต้องที่สุด?',
    ask:'อธิบาย Shared Responsibility ว่า AWS ดูแล cloud/service infrastructure ตามขอบเขต ส่วน customer ยังรับผิดชอบ data, access, configuration และ application use.',
    choices:{A:'AWS manages responsibilities for the cloud service itself, while customers still configure access, data handling, application controls, and appropriate use according to the service model',B:'A managed AI service transfers every security and governance decision to AWS',C:'Customers are responsible for AWS data-center physical security',D:'Shared responsibility means neither party needs to manage security controls'},
    answer:['A'],
    why:{A:'ถูก เพราะ managed service ไม่ได้ลบ customer responsibilities ด้าน IAM, data, configuration, prompts, application behavior และ governance.',B:'ผิด เพราะหลาย controls ยังต้องออกแบบและตั้งค่าโดย customer.',C:'ผิด เพราะ physical data-center security อยู่ฝั่ง AWS ตาม service model.',D:'ผิด เพราะ shared responsibility แปลว่าแบ่งหน้าที่ ไม่ใช่ไม่มีหน้าที่.'},
    cue:'Managed ≠ AWS รับผิดชอบทุกอย่าง; Customer ยังรับผิดชอบ “สิ่งที่ใส่และวิธีใช้”.'});

  add({objective:'5.1.1',target:'encryption-at-rest-transit',
    q:'A healthcare AI system stores embeddings, source documents, logs, and model-related artifacts while also sending requests between application components and managed AWS services. Security policy requires protection both when data is stored and when it moves across network connections. Which design most directly satisfies the two encryption requirements?',
    th:'healthcare AI system เก็บ embeddings, source documents, logs และ model-related artifacts พร้อมทั้งส่ง requests ระหว่าง application components กับ managed AWS services Security policy กำหนดให้ปกป้องข้อมูลทั้งตอนที่ถูกจัดเก็บและตอนที่เคลื่อนผ่าน network connections Design ใดตอบข้อกำหนด encryption สองด้านนี้ได้ตรงที่สุด?',
    ask:'แยก Encryption at Rest และ Encryption in Transit และเชื่อมกับ KMS/TLS ตามเหมาะสม.',
    choices:{A:'Use encryption at rest with managed keys such as AWS KMS where supported and encryption in transit such as TLS for network communication',B:'Encrypt data only while stored and send all network traffic in plaintext',C:'Use TLS but leave sensitive stored data unprotected regardless of policy',D:'Replace encryption with prompt instructions telling the model not to leak data'},
    answer:['A'],
    why:{A:'ถูก เพราะ policy ต้องการทั้ง data at rest และ data in transit protection.',B:'ผิด เพราะขาด in-transit protection.',C:'ผิด เพราะขาด at-rest protection.',D:'ผิด เพราะ prompt ไม่ใช่ cryptographic control.'},
    cue:'Stored = Encrypt at rest; Moving = Encrypt in transit.'});

  add({objective:'5.1.2',target:'source-citation-data-origin',
    q:'An enterprise RAG assistant is used for compliance questions. Reviewers do not want only a fluent answer; they need to see which approved document and passage supported each important claim so they can verify the response and trace information back to its origin. Which security and governance practice is most directly being requested?',
    th:'enterprise RAG assistant ถูกใช้ตอบคำถามด้าน compliance ผู้ตรวจทานไม่ต้องการเพียงคำตอบที่อ่านลื่น แต่ต้องเห็นว่า approved document และ passage ใดรองรับแต่ละ claim สำคัญ เพื่อให้ตรวจสอบคำตอบและย้อนข้อมูลกลับไปยังแหล่งกำเนิดได้ Security and governance practice ใดถูกขอโดยตรงที่สุด?',
    ask:'ระบุ Source Citation และการบันทึก Data Origins/Provenance.',
    choices:{A:'Source citation and documentation of data origins',B:'Increase temperature to make answers more creative',C:'Delete document metadata after indexing',D:'Hide retrieval sources from reviewers'},
    answer:['A'],
    why:{A:'ถูก เพราะ citations และ provenance ทำให้ตรวจว่า answer อ้างอิงแหล่งไหนและข้อมูลมาจากไหน.',B:'ผิด เพราะ creativity ไม่ช่วย traceability.',C:'ผิด เพราะการลบ metadata ทำให้ตรวจ provenance ยากขึ้น.',D:'ผิด เพราะตรงข้ามกับ requirement ด้าน verification.'},
    cue:'ตอบจากไหน ต้องชี้กลับได้ = Citation + Data Origin.'});

  add({objective:'5.1.2',target:'lineage-vs-cataloging',
    q:'A governance team has two separate needs for training data. First, it must trace how a field moved from an original source through transformations into the final training dataset. Second, analysts need a searchable inventory that describes datasets, owners, schemas, classifications, and other metadata so they can discover what data exists. Which pairing correctly names these two practices?',
    th:'ทีม governance มีความต้องการสองอย่างที่แยกกันสำหรับ training data อย่างแรก ต้อง trace ว่าฟิลด์หนึ่งเดินทางจาก original source ผ่าน transformations จนมาอยู่ใน final training dataset อย่างไร อย่างที่สอง นักวิเคราะห์ต้องการ inventory ที่ค้นหาได้ซึ่งอธิบาย datasets, owners, schemas, classifications และ metadata อื่น เพื่อให้ค้นพบว่ามีข้อมูลอะไรอยู่บ้าง ข้อใดเรียก practices สองอย่างนี้ได้ถูกต้อง?',
    ask:'แยก Data Lineage จาก Data Cataloging.',
    choices:{A:'The transformation history is data lineage; the searchable metadata inventory is data cataloging',B:'The transformation history is prompt caching; the inventory is model distillation',C:'Both needs are only data retention',D:'Lineage means deleting old data and cataloging means encrypting network traffic'},
    answer:['A'],
    why:{A:'ถูก เพราะ lineage ตามเส้นทางและ transformations ส่วน cataloging จัด metadata เพื่อ discovery/understanding.',B:'ผิด เพราะเป็นคนละแนวคิด.',C:'ผิด เพราะ retention ตอบว่าเก็บข้อมูลนานเท่าไร.',D:'ผิด เพราะนิยามทั้งสองถูกสลับกับเรื่องอื่น.'},
    cue:'Lineage = มาจากไหน/ผ่านอะไร; Catalog = มีข้อมูลอะไรและอยู่ตรงไหน.'});

  add({objective:'5.1.2',target:'model-cards-data-origin',
    q:'A model governance committee wants one review package that combines model purpose, owners, evaluation results, limitations, and references to the governed datasets and lineage used to create the model. The committee already tracks raw data metadata elsewhere but wants a model-centered artifact that makes this information visible during approval. Which SageMaker feature is most appropriate?',
    th:'คณะกรรมการ model governance ต้องการ review package ที่รวม model purpose, owners, evaluation results, limitations และ references ไปยัง governed datasets กับ lineage ที่ใช้สร้าง model คณะกรรมการติดตาม raw data metadata ไว้ที่อื่นแล้ว แต่ต้องการ artifact ที่มี model เป็นศูนย์กลางเพื่อทำให้ข้อมูลเหล่านี้มองเห็นได้ระหว่าง approval ควรใช้ SageMaker feature ใด?',
    ask:'ระบุ SageMaker Model Cards ในบทบาท model documentation ที่เชื่อมข้อมูลการสร้าง/evaluation/provenance.',
    choices:{A:'SageMaker Model Cards',B:'Amazon S3 Glacier',C:'Amazon Lex',D:'AWS Budgets'},
    answer:['A'],
    why:{A:'ถูก เพราะ Model Cards เป็น artifact สำหรับ documentation ของ model, intended use, evaluation, risk/limitations และ governance context.',B:'ผิด เพราะ Glacier เป็น archival storage.',C:'ผิด เพราะ Lex ใช้ conversational interfaces.',D:'ผิด เพราะ Budgets ใช้ติดตาม/ควบคุมค่าใช้จ่าย.'},
    cue:'Data มี Catalog/Lineage; Model มี Model Card เป็นเอกสารประจำตัว.'});

  add({objective:'5.1.3',target:'secure-data-engineering-four-pillars',type:'multiple',
    q:'A security review finds that an AI training dataset contains duplicate and corrupted records, excessive personal information that is not required for the task, permissions that allow too many developers to edit the dataset, and no reliable way to detect unauthorized modifications. Which FOUR secure data-engineering practices directly address these findings? (Select FOUR.)',
    th:'security review พบว่า AI training dataset มี records ซ้ำและเสียหาย มีข้อมูลส่วนบุคคลมากเกินกว่าที่งานต้องใช้ Permissions เปิดให้นักพัฒนาจำนวนมากแก้ dataset ได้ และไม่มีวิธีที่เชื่อถือได้ในการตรวจ unauthorized modifications Secure data-engineering practices ใด 4 ข้อตอบ findings เหล่านี้โดยตรง?',
    ask:'ครอบคลุม Data Quality, Privacy-enhancing/Minimization, Access Control และ Data Integrity.',
    choices:{A:'Assess and improve data quality',B:'Apply privacy-enhancing techniques or data minimization',C:'Enforce appropriate access controls and least privilege',D:'Use integrity controls such as hashes, versioning, or controlled change records',E:'Increase model temperature',F:'Remove audit evidence'},
    answer:['A','B','C','D'],
    why:{A:'ถูก เพราะ corrupted/duplicate data เป็น quality issue.',B:'ถูก เพราะ unnecessary personal data ควรถูกลดหรือปกป้องตาม privacy need.',C:'ถูก เพราะ broad edit access ต้องถูกจำกัด.',D:'ถูก เพราะ integrity controls ช่วยตรวจ/ป้องกัน unauthorized change.',E:'ผิด เพราะ temperature ไม่ใช่ data-security control.',F:'ผิด เพราะ audit evidence มีประโยชน์ต่อ governance/security.'},
    cue:'Secure Data = Quality + Privacy + Access + Integrity.'});

  add({objective:'5.1.3',target:'privacy-enhancing-techniques',
    q:'A research group needs useful aggregate signals from a sensitive dataset but wants to reduce unnecessary exposure of identifiable individuals during preparation and analysis. The security team considers techniques such as masking, tokenization of identifiers, minimization, or other privacy-preserving transformations before wider use. Which secure data-engineering objective are these controls primarily addressing?',
    th:'กลุ่มวิจัยต้องการ aggregate signals ที่มีประโยชน์จาก sensitive dataset แต่ต้องการลดการเปิดเผยตัวบุคคลโดยไม่จำเป็นระหว่างการเตรียมและวิเคราะห์ข้อมูล ทีม security พิจารณา techniques เช่น masking, tokenization ของ identifiers, data minimization หรือ privacy-preserving transformations อื่นก่อนเปิดให้ใช้งานกว้างขึ้น Controls เหล่านี้กำลังตอบ secure data-engineering objective ใดเป็นหลัก?',
    ask:'ระบุ Privacy-enhancing Technologies/Practices จากการลด exposure ของ identifiable data.',
    choices:{A:'Privacy protection through privacy-enhancing techniques',B:'Model extraction',C:'Prompt routing',D:'Batch inference'},
    answer:['A'],
    why:{A:'ถูก เพราะ controls ถูกใช้ลด exposure ของ personal/sensitive data ขณะยังรักษาประโยชน์บางส่วนของข้อมูล.',B:'ผิด เพราะ model extraction เป็นการขโมย/เลียนแบบ behavior.',C:'ผิด เพราะ routing เลือก model/request path.',D:'ผิด เพราะ batch เป็น inference mode.'},
    cue:'ลดการเห็นข้อมูลส่วนบุคคล แต่ยังใช้ข้อมูลได้ = Privacy-enhancing technique.'});

  add({objective:'5.1.4',target:'appsec-threat-vulnerability-infra',
    q:'An AI application is packaged in containers and exposes an API to the internet. Security scanning discovers a vulnerable dependency in the container image, network rules allow unnecessary inbound access, and the team has no continuous process for identifying newly disclosed software vulnerabilities. The risk is in the application and infrastructure around the model rather than the model output itself. Which security areas should the team address first?',
    th:'AI application ถูกบรรจุใน containers และเปิด API สู่ internet Security scanning พบ dependency ที่มีช่องโหว่ใน container image, network rules อนุญาต inbound access ที่ไม่จำเป็น และทีมไม่มี continuous process สำหรับตรวจ newly disclosed software vulnerabilities ความเสี่ยงอยู่ที่ application และ infrastructure รอบ model มากกว่าที่ model output โดยตรง ทีมควรแก้ security areas ใดก่อน?',
    ask:'เน้น Application Security, Vulnerability Management, Threat Detection และ Infrastructure Protection ซึ่งเป็นหัวข้อ Exam Guide ที่ไม่เคยถามตรง ๆ.',
    choices:{A:'Application security, vulnerability management, threat detection, and infrastructure protection',B:'Only prompt wording and temperature',C:'Only text-generation metrics such as BLEU',D:'Only data-retention policy'},
    answer:['A'],
    why:{A:'ถูก เพราะ vulnerable packages, excessive network exposure และ lack of scanning/monitoring เป็น app/infrastructure security issues โดยตรง.',B:'ผิด เพราะ prompt settings ไม่ patch dependency หรือ network exposure.',C:'ผิด เพราะ text metrics ไม่ใช่ security controls.',D:'ผิด เพราะ retention ไม่แก้ vulnerabilities.'},
    cue:'AI security ไม่ได้มีแค่ Prompt—ยังต้อง Patch, Scan, Protect Infrastructure.'});

  add({objective:'5.1.4',target:'inspector-vulnerability-management',
    q:'A company runs AI application components on supported AWS compute resources and wants an AWS service focused on continuously identifying software vulnerabilities and unintended network exposure in workloads rather than classifying sensitive S3 objects or downloading compliance reports. The security team specifically wants a vulnerability-management capability. Which service is the closest fit?',
    th:'บริษัทใช้งาน AI application components บน AWS compute resources ที่รองรับ และต้องการ AWS service ที่มุ่งตรวจ software vulnerabilities และ unintended network exposure ของ workloads อย่างต่อเนื่อง ไม่ใช่การจัดประเภท sensitive objects ใน S3 หรือดาวน์โหลด compliance reports ทีม security ต้องการ capability ด้าน vulnerability management โดยเฉพาะ Service ใดตรงที่สุด?',
    ask:'ระบุ Amazon Inspector ซึ่ง coverage เดิมไม่เคยออกเป็นแกน.',
    choices:{A:'Amazon Inspector',B:'Amazon Macie',C:'AWS Artifact',D:'Amazon Polly'},
    answer:['A'],
    why:{A:'ถูก เพราะ Amazon Inspector เป็น vulnerability management service สำหรับ supported workloads/resources.',B:'ผิด เพราะ Macie เน้น sensitive data discovery/classification ใน S3.',C:'ผิด เพราะ Artifact ให้ compliance reports/agreements.',D:'ผิด เพราะ Polly เป็น text-to-speech.'},
    cue:'Vulnerability/CVE exposure = Inspector; Sensitive S3 data = Macie.'});

  add({objective:'5.1.4',target:'prompt-injection-dlp-output-filtering',type:'multiple',
    q:'A customer-facing GenAI application accepts untrusted user text and can call internal tools. Security testing shows that users may try to insert instructions that override system policy, generated responses may accidentally contain confidential data, and some outputs should be blocked before display when they violate policy. Which THREE controls or risk areas most directly correspond to these findings? (Select THREE.)',
    th:'customer-facing GenAI application รับ untrusted user text และสามารถเรียก internal tools ได้ Security testing พบว่าผู้ใช้อาจพยายามแทรก instructions เพื่อ override system policy, generated responses อาจมี confidential data หลุดออกมาโดยไม่ตั้งใจ และ outputs บางแบบควรถูก block ก่อนแสดงหากละเมิด policy Controls หรือ risk areas ใด 3 ข้อตรงกับ findings เหล่านี้โดยตรง?',
    ask:'ครอบคลุม Prompt Injection, Data Leakage Prevention และ Output Filtering/Validation.',
    choices:{A:'Prompt-injection defenses and instruction-boundary controls',B:'Data leakage prevention for sensitive information',C:'Output filtering and validation before responses are released',D:'Increase temperature to make attacks less predictable',E:'Disable authentication to simplify tool access'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ untrusted instructions ที่พยายาม override policy คือ prompt-injection risk.',B:'ถูก เพราะ confidential data ใน output เป็น data-leakage concern.',C:'ถูก เพราะ policy-violating output ควรถูก filter/validate ก่อน release.',D:'ผิด เพราะ temperature ไม่ใช่ security defense.',E:'ผิด เพราะยิ่งเพิ่ม unauthorized access risk.'},
    cue:'Input Attack = Injection; Secret หลุด = DLP; ก่อนส่งออก = Filter/Validate.'});

  add({objective:'5.1.4',target:'ai-audit-logging-cloudtrail-invocation',
    q:'An incident-response team investigates an AI interaction that produced a sensitive result. The team needs two different kinds of evidence: who called the Bedrock API and when, and—where logging policy permits—details about the model interaction such as the request and response. Which logging approach best separates these needs?',
    th:'incident-response team กำลังสืบสวน AI interaction ที่สร้างผลลัพธ์ sensitive ทีมต้องการ evidence สองชนิดต่างกัน ได้แก่ ใครเรียก Bedrock API และเรียกเมื่อไร รวมถึงรายละเอียด model interaction เช่น request และ response ในกรณีที่ logging policy อนุญาต แนวทาง logging ใดแยกสองความต้องการนี้ได้ถูกต้องที่สุด?',
    ask:'แยก AWS CloudTrail API Activity จาก Bedrock Model Invocation Logging สำหรับ AI interaction details.',
    choices:{A:'Use AWS CloudTrail for API activity and Bedrock model invocation logging for configured interaction details',B:'Use only prompt text as the audit trail and disable service logging',C:'Use Amazon Polly for API identity records',D:'Use token temperature as a substitute for audit logs'},
    answer:['A'],
    why:{A:'ถูก เพราะ CloudTrail บันทึก API activity/caller/time ส่วน invocation logging ใช้เก็บ model-interaction details ตาม configuration.',B:'ผิด เพราะ prompt อย่างเดียวไม่ใช่ complete audit trail.',C:'ผิด เพราะ Polly เป็น speech synthesis.',D:'ผิด เพราะ temperature ไม่มีหน้าที่ logging.'},
    cue:'CloudTrail = ใครเรียกอะไรเมื่อไร; Invocation Logging = คุยอะไรกับ Model.'});

  add({objective:'5.1.4',target:'toxicity-detection',
    q:'A community platform uses an FM to draft replies. Even when responses contain no personal data and no prompt injection, some generated text includes abusive, hateful, or toxic language that violates community standards and could harm users. The safety team wants to detect and reduce this output category before messages are published. What security and privacy consideration is most directly involved?',
    th:'community platform ใช้ FM ร่าง replies แม้ responses จะไม่มีข้อมูลส่วนบุคคลและไม่มี prompt injection แต่ generated text บางส่วนมีภาษาที่ abusive, hateful หรือ toxic ซึ่งละเมิด community standards และอาจทำร้ายผู้ใช้ ทีม safety ต้องการตรวจและลด output category นี้ก่อนเผยแพร่ Security and privacy consideration ใดเกี่ยวข้องโดยตรงที่สุด?',
    ask:'ระบุ Toxicity detection/filtering ซึ่งเป็นหัวข้อที่ Exam Guide ระบุแต่ coverage เดิมเป็นศูนย์.',
    choices:{A:'Toxicity detection and content safety filtering',B:'Data retention only',C:'Model distillation',D:'Vector indexing'},
    answer:['A'],
    why:{A:'ถูก เพราะ issue คือ harmful/toxic language ใน generated output และต้องมี safety filtering/evaluation.',B:'ผิด เพราะ retention ไม่ควบคุมความเป็นพิษของเนื้อหา.',C:'ผิด เพราะ distillation เป็น model adaptation.',D:'ผิด เพราะ vector indexing เป็น retrieval infrastructure.'},
    cue:'ข้อความ abusive/hateful/harmful = Toxicity/Safety filtering.'});

  add({objective:'5.1.5',target:'hallucination-rag-grounding',
    q:'A legal assistant frequently answers from general model knowledge even when company policy differs from public information. The team wants generated claims to be based on the latest approved internal documents and wants reviewers to see the supporting passages. Which hallucination-reduction technique should form the primary grounding layer?',
    th:'legal assistant มักตอบจาก general model knowledge แม้ company policy จะต่างจากข้อมูลสาธารณะ ทีมต้องการให้ generated claims อิง latest approved internal documents และให้ reviewers เห็น supporting passages Technique สำหรับลด hallucination ใดควรเป็น grounding layer หลัก?',
    ask:'ระบุ RAG Grounding จากการ retrieve approved evidence แล้วใส่ใน context.',
    choices:{A:'Retrieval-Augmented Generation (RAG) grounding',B:'Raise temperature',C:'Remove all source documents',D:'Use only a larger model without evidence'},
    answer:['A'],
    why:{A:'ถูก เพราะ RAG ดึง current trusted evidence มา grounding generation และรองรับ citation.',B:'ผิด เพราะ temperature สูงขึ้นไม่ได้เพิ่ม factual grounding.',C:'ผิด เพราะไม่มี source ยิ่งตรวจความจริงยาก.',D:'ผิด เพราะ model ใหญ่ขึ้นยัง hallucinate ได้และไม่แทน evidence.'},
    cue:'ลด Hallucination ด้วย “เอาหลักฐานจริงเข้ามาให้ตอบ”.'});

  add({objective:'5.1.5',target:'output-validation-confidence-scoring',
    q:'A RAG application already retrieves relevant evidence, but safety reviewers want an additional gate before high-impact answers are shown. The system should check whether key claims are supported by the retrieved evidence and assign a confidence or reliability signal so low-confidence cases can be escalated to a human. Which approach best addresses the requirement?',
    th:'RAG application retrieve relevant evidence ได้อยู่แล้ว แต่ safety reviewers ต้องการ gate เพิ่มก่อนแสดงคำตอบที่มีผลกระทบสูง ระบบควรตรวจว่า key claims มี evidence รองรับหรือไม่ และให้ confidence หรือ reliability signal เพื่อส่งเคสที่ confidence ต่ำไปให้มนุษย์ตรวจ แนวทางใดตอบ requirement นี้ได้ดีที่สุด?',
    ask:'ครอบคลุม Output Validation + Confidence Scoring ซึ่งเป็น Objective 5.1.5 ใหม่และแทบไม่เคยออก.',
    choices:{A:'Validate outputs against evidence and use confidence scoring to route uncertain cases for review',B:'Increase temperature so the model expresses more possibilities',C:'Delete retrieval context after generation and accept every response',D:'Judge confidence only from response length'},
    answer:['A'],
    why:{A:'ถูก เพราะ output validation ตรวจ grounding และ confidence scoring ช่วยแยก uncertain/high-risk cases.',B:'ผิด เพราะ temperature ไม่ใช่ reliability score.',C:'ผิด เพราะรับทุก response โดยไม่ validate ขัดกับ requirement.',D:'ผิด เพราะ response length ไม่ใช่หลักฐานความถูกต้อง.'},
    cue:'RAG แล้วก็ยังต้อง “Validate + Score confidence” ได้ โดยเฉพาะงานเสี่ยงสูง.'});

  add({objective:'5.2.1',target:'governance-services-map',type:'matching',
    q:'A central governance team is creating a service map because several compliance tools are being confused with one another. It needs one service for resource-configuration compliance rules, one for vulnerability management, one for collecting audit evidence against frameworks, one for downloading AWS compliance reports and agreements, one for recording API activity, and one for best-practice recommendations across AWS environments. Match each need with the correct AWS service.',
    th:'ทีม governance ส่วนกลางกำลังสร้าง service map เพราะ compliance tools หลายตัวถูกสับสนกัน ทีมต้องการ service หนึ่งสำหรับ resource-configuration compliance rules, หนึ่งสำหรับ vulnerability management, หนึ่งสำหรับรวบรวม audit evidence ตาม frameworks, หนึ่งสำหรับดาวน์โหลด AWS compliance reports และ agreements, หนึ่งสำหรับบันทึก API activity และอีกหนึ่งสำหรับ best-practice recommendations ของ AWS environment จงจับคู่แต่ละความต้องการกับ AWS service ที่ถูกต้อง.',
    ask:'แยก AWS Config, Amazon Inspector, AWS Audit Manager, AWS Artifact, AWS CloudTrail และ AWS Trusted Advisor.',
    choices:{A:'Evaluate AWS resource configurations against desired rules',B:'Find software vulnerabilities and unintended network exposure in supported workloads',C:'Collect and organize audit evidence against control frameworks',D:'Access AWS compliance reports and agreements',E:'Record account/API activity such as who called which API and when',F:'Provide AWS best-practice checks and recommendations'},
    matches:{'1':'AWS Config','2':'Amazon Inspector','3':'AWS Audit Manager','4':'AWS Artifact','5':'AWS CloudTrail','6':'AWS Trusted Advisor'},
    answer:['A:1','B:2','C:3','D:4','E:5','F:6'],
    explain:['✅ Configuration state/rules → AWS Config.','✅ Vulnerability management → Amazon Inspector.','✅ Audit evidence/frameworks → AWS Audit Manager.','✅ AWS compliance documents → AWS Artifact.','✅ API activity history → AWS CloudTrail.','✅ Best-practice checks/recommendations → AWS Trusted Advisor.'],
    cue:'Config=State, Inspector=Vuln, Audit Manager=Evidence, Artifact=Reports, CloudTrail=API, Trusted Advisor=Recommendations.'});

  add({objective:'5.2.1',target:'trusted-advisor-ai-governance',
    q:'An AI platform team wants a broad AWS best-practice review that can surface recommendations across areas such as cost optimization, security, fault tolerance, performance, and service limits. The requirement is not to collect formal audit evidence or scan a container for CVEs; it is to receive advisory checks that help the team improve its AWS environment. Which service is the closest fit?',
    th:'ทีม AI platform ต้องการ best-practice review ของ AWS ในภาพกว้าง ซึ่งสามารถให้ recommendations ด้านต่าง ๆ เช่น cost optimization, security, fault tolerance, performance และ service limits Requirement ไม่ใช่การรวบรวม formal audit evidence หรือสแกน container หา CVEs แต่เป็นการรับ advisory checks เพื่อช่วยปรับปรุง AWS environment Service ใดตรงที่สุด?',
    ask:'ระบุ AWS Trusted Advisor ซึ่งไม่เคยเป็นแกนในชุดก่อน.',
    choices:{A:'AWS Trusted Advisor',B:'AWS Audit Manager',C:'Amazon Inspector',D:'Amazon Transcribe'},
    answer:['A'],
    why:{A:'ถูก เพราะ Trusted Advisor ให้ best-practice checks/recommendations หลายด้านสำหรับ AWS environment.',B:'ผิด เพราะ Audit Manager เน้น audit evidence/framework controls.',C:'ผิด เพราะ Inspector เน้น vulnerabilities/exposure.',D:'ผิด เพราะ Transcribe เป็น speech-to-text.'},
    cue:'อยากได้ “คำแนะนำ best practice ของ AWS environment” = Trusted Advisor.'});

  add({objective:'5.2.2',target:'data-retention-residency-lifecycle',type:'matching',
    q:'A multinational company is writing an AI data-governance policy and has three separate requirements. Personal records must be deleted after seven years, regulated training data may be stored and processed only in approved geographic locations, and teams must define what happens from data creation through active use, archival, and disposal. Match each requirement with the most appropriate governance concept.',
    th:'บริษัทข้ามชาติกำลังเขียน AI data-governance policy และมี requirements แยกกันสามแบบ Personal records ต้องถูกลบหลังเจ็ดปี regulated training data เก็บและประมวลผลได้เฉพาะ geographic locations ที่อนุมัติ และแต่ละทีมต้องกำหนดสิ่งที่เกิดขึ้นตั้งแต่ข้อมูลถูกสร้าง ผ่านช่วงใช้งาน การ archive และการกำจัด จงจับคู่ requirement กับ governance concept ที่เหมาะสมที่สุด.',
    ask:'แยก Data Retention, Data Residency และ Data Lifecycle.',
    choices:{A:'Delete records after a defined period',B:'Restrict storage/processing to approved geographic locations',C:'Manage data from creation through use, archive, and disposal'},
    matches:{'1':'Data retention','2':'Data residency','3':'Data lifecycle'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ เก็บนานเท่าไร → Retention.','✅ อยู่/ประมวลผลที่ไหน → Residency.','✅ ตั้งแต่เกิดจน dispose → Lifecycle.'],
    cue:'Retention = นานเท่าไร; Residency = ที่ไหน; Lifecycle = ตั้งแต่เกิดจนจบ.'});

  add({objective:'5.2.2',target:'logging-monitoring-observation',
    q:'An AI governance policy requires teams to retain relevant logs, continuously watch model and application behavior, and periodically inspect operational evidence for unexpected changes or incidents. The policy is broader than one specific AWS service and is intended to make production AI behavior visible over time. Which governance strategy is being emphasized?',
    th:'AI governance policy กำหนดให้แต่ละทีมเก็บ logs ที่เกี่ยวข้อง เฝ้าดู model และ application behavior อย่างต่อเนื่อง และตรวจ operational evidence เป็นระยะเพื่อหาการเปลี่ยนแปลงหรือ incidents ที่ไม่คาดคิด Policy นี้กว้างกว่าการใช้ AWS service ใด service หนึ่ง และมีเป้าหมายทำให้ production AI behavior มองเห็นได้ตามเวลา Governance strategy ใดถูกเน้น?',
    ask:'ครอบคลุม Logging, Monitoring และ Observation ใน data/AI governance.',
    choices:{A:'Ongoing logging, monitoring, and observation',B:'One-time model training with no production visibility',C:'Removing operational logs to reduce storage',D:'Relying only on the model provider name'},
    answer:['A'],
    why:{A:'ถูก เพราะ governance ต้องมี evidence/visibility ต่อเนื่องหลัง deploy.',B:'ผิด เพราะไม่มี post-production control.',C:'ผิด เพราะการลบ log ทำให้ audit/incident review แย่ลง.',D:'ผิด เพราะ provider name ไม่ใช่ monitoring strategy.'},
    cue:'Governance หลัง Deploy = Log + Monitor + Observe.'});

  add({objective:'5.2.3',target:'policy-review-cadence-strategy',
    q:'A company approved an AI policy once two years ago and has not revisited it even though models, use cases, regulations, and security threats have changed. The governance committee wants every policy to have an owner, a defined periodic review schedule, criteria for triggering an out-of-cycle review, and a documented method for assessing whether controls still work. Which governance concepts is the committee introducing?',
    th:'บริษัทอนุมัติ AI policy ครั้งหนึ่งเมื่อสองปีก่อนและไม่เคยทบทวนอีก ทั้งที่ models, use cases, regulations และ security threats เปลี่ยนไป คณะ governance ต้องการให้ทุก policy มี owner, มีตาราง review เป็นระยะที่กำหนดชัด มี criteria สำหรับ trigger review นอกตาราง และมีวิธีที่บันทึกไว้สำหรับประเมินว่า controls ยังทำงานได้หรือไม่ คณะกำลังเพิ่ม governance concepts ใด?',
    ask:'ระบุ Review Cadence และ Review Strategy ซึ่ง coverage เดิมไม่เคยออกตรง ๆ.',
    choices:{A:'Defined review cadence and review strategy for governance policies',B:'Prompt caching and token routing',C:'Model distillation and clustering',D:'Only data residency'},
    answer:['A'],
    why:{A:'ถูก เพราะ cadence กำหนดความถี่/เวลา review ส่วน strategy กำหนดวิธีและ trigger/criteria ของ review.',B:'ผิด เพราะเป็น GenAI optimization concepts.',C:'ผิด เพราะเป็น model techniques.',D:'ผิด เพราะ residency เป็นเพียง data-location policy.'},
    cue:'Cadence = รีวิวบ่อยแค่ไหน; Strategy = รีวิวอย่างไร/เมื่อไรต้องเปิดรอบพิเศษ.'});

  add({objective:'5.2.3',target:'genai-security-scoping-matrix',
    q:'A security organization manages several GenAI use cases ranging from employees consuming a managed AI application to teams building custom solutions with foundation models and agentic components. The security responsibilities and controls differ depending on how much of the GenAI stack the organization consumes versus builds. Which governance framework is specifically designed to help scope these GenAI security responsibility patterns?',
    th:'องค์กรด้าน security ดูแล GenAI use cases หลายแบบ ตั้งแต่พนักงานใช้ managed AI application ไปจนถึงทีมที่สร้าง custom solutions ด้วย foundation models และ agentic components Security responsibilities และ controls แตกต่างกันตามระดับที่องค์กรเป็นผู้ใช้ของสำเร็จรูปหรือเป็นผู้สร้างส่วนต่าง ๆ ของ GenAI stack Governance framework ใดถูกออกแบบมาเพื่อช่วย scope รูปแบบความรับผิดชอบด้าน GenAI security เหล่านี้โดยเฉพาะ?',
    ask:'ระบุ Generative AI Security Scoping Matrix แทน broad risk framework.',
    choices:{A:'Generative AI Security Scoping Matrix',B:'BLEU',C:'F1 score',D:'SageMaker Feature Store'},
    answer:['A'],
    why:{A:'ถูก เพราะ Scoping Matrix ใช้ช่วยจัด scope/use patterns ของ GenAI เพื่อมอง security responsibilities/controls.',B:'ผิด เพราะ BLEU เป็น text-generation metric.',C:'ผิด เพราะ F1 เป็น classification metric.',D:'ผิด เพราะ Feature Store จัดการ ML features.'},
    cue:'Consume vs Build GenAI + Security Responsibility = Scoping Matrix.'});

  add({objective:'5.2.3',target:'transparency-standards-team-training',type:'multiple',
    q:'A company publishes AI governance policies but finds that teams apply them inconsistently. Some product owners do not know when to disclose AI use to customers, and developers are unfamiliar with the organization’s required review and escalation processes. Leadership wants governance to become an operating practice rather than a document stored on a shared drive. Which TWO actions most directly address this gap? (Select TWO.)',
    th:'บริษัทเผยแพร่ AI governance policies แล้ว แต่พบว่าแต่ละทีมนำไปใช้ไม่สม่ำเสมอ Product owners บางคนไม่รู้ว่าควรเปิดเผยการใช้ AI ต่อลูกค้าเมื่อไร และ developers ไม่คุ้นกับกระบวนการ review และ escalation ที่องค์กรบังคับใช้ ฝ่ายบริหารต้องการให้ governance เป็นวิธีปฏิบัติจริง ไม่ใช่เอกสารที่เก็บไว้ใน shared drive Actions ใด 2 ข้อแก้ gap นี้โดยตรงที่สุด?',
    ask:'เน้น Transparency Standards และ Team Training Requirements ซึ่งเป็นหัวข้อ Exam Guide ที่ coverage เดิมเป็นศูนย์.',
    choices:{A:'Define and enforce transparency standards for relevant AI use',B:'Require role-appropriate AI governance and security training for teams',C:'Hide governance requirements so teams can move faster',D:'Replace policy reviews with model temperature changes'},
    answer:['A','B'],
    why:{A:'ถูก เพราะ transparency standards ทำให้ทีมรู้ว่าต้องสื่อสาร AI use/limitations อย่างไร.',B:'ถูก เพราะ team training ทำให้ผู้มีบทบาทต่าง ๆ เข้าใจกระบวนการและ responsibilities.',C:'ผิด เพราะการซ่อน requirements ทำให้ governance ใช้จริงไม่ได้.',D:'ผิด เพราะ temperature ไม่ใช่ governance process.'},
    cue:'Policy จะมีผลจริงต้องมี “มาตรฐานที่ชัด + คนที่ถูกฝึกให้ทำตาม”.'});

  add({objective:'5.2.3',target:'governance-protocol-lifecycle',type:'ordering',
    q:'A new high-impact AI use case is proposed in a regulated business unit. The company requires teams to follow a governance protocol rather than deploy first and ask for approval later. The protocol starts with identifying the applicable policy and ownership, performs risk/control review, documents required transparency and evidence, obtains approval and trains responsible teams, and then establishes recurring monitoring and review. Order the stages below.',
    th:'มีการเสนอ high-impact AI use case ใหม่ใน business unit ที่อยู่ภายใต้ข้อกำกับ บริษัทกำหนดให้ทีมทำตาม governance protocol แทนการ deploy ก่อนแล้วค่อยขออนุมัติภายหลัง Protocol เริ่มจากระบุ policy และ ownership ที่ใช้กับงาน ทำ risk/control review บันทึก transparency requirements และ evidence ที่ต้องมี ขอ approval พร้อมฝึกทีมที่รับผิดชอบ แล้วจึงตั้ง recurring monitoring และ review จงเรียง stages ต่อไปนี้.',
    ask:'เรียง Governance Protocol ตั้งแต่ Policy/Owner → Risk Review → Documentation → Approval/Training → Monitor/Review.',
    choices:{A:'Establish recurring monitoring, review cadence, and escalation',B:'Identify applicable policies, ownership, and scope',C:'Perform risk assessment and control review',D:'Document evidence, transparency requirements, and decisions',E:'Obtain required approval and ensure responsible teams are trained'},
    answer:['B','C','D','E','A'],
    explain:['✅ ลำดับคือ Scope/Policy → Risk/Controls → Document → Approve/Train → Monitor/Review.','การฝึกและ approval ต้องมาก่อน production operation ใน high-impact governed process.','Recurring review เป็นวงจรหลัง deployment และย้อนกลับมาเปิด review ใหม่เมื่อมี trigger.'],
    cue:'Scope → Assess → Document → Approve/Train → Monitor/Review.'});
})();