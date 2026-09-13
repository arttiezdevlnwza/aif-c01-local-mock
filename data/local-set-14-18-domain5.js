(()=>{
  const bank=window.LOCAL_MOCK_14_18_BANK=window.LOCAL_MOCK_14_18_BANK||[];
  const add=(choices,explanation,variants,extra={})=>bank.push({domain:5,choices,explanation,variants,...extra});

  add(
    ['Identity policy','Permissions boundary','Service control policy (SCP)','Resource policy'],
    'An identity policy can grant permissions to an IAM identity. A permissions boundary caps the maximum permissions of a specific identity and does not grant by itself. An SCP is an organization/account-level guardrail and also does not grant by itself. A resource policy is attached to a resource and can specify who may access it.',
    [
      ['An IAM role needs permissions granted directly to the role for specific actions. Which policy type is the normal grant mechanism?','IAM role ต้องการ permissions ที่ grant ตรงกับ role สำหรับ actions บางอย่าง policy type ใดเป็น grant mechanism ปกติ?',0],
      ['A company wants to cap the maximum permissions one IAM role can ever receive without granting permissions by that cap itself. Which control BEST fits?','บริษัทต้องการ cap maximum permissions ของ IAM role หนึ่งโดยตัว cap ไม่ grant permission ควรใช้ control ใด?',1],
      ['AWS Organizations must restrict what member accounts can do even if their local IAM policies allow more. Which control BEST fits?','AWS Organizations ต้อง restrict ว่า member accounts ทำอะไรได้แม้ local IAM policies allow มากกว่า ควรใช้ control ใด?',2],
      ['An S3 bucket needs a policy attached directly to the bucket that specifies which principals can access it. Which policy type is this?','S3 bucket ต้องการ policy attach ตรงกับ bucket เพื่อระบุ principals ที่ access ได้ เป็น policy type ใด?',3],
      ['The clue is "identity-level ceiling, not a grant." Which answer fits?','clue คือ identity-level ceiling และไม่ใช่ grant ควรตอบอะไร?',1]
    ]
  );

  add(
    ['AWS Shared Responsibility Model','NIST AI RMF','AWS CAF-AI','EU AI Act'],
    'The AWS Shared Responsibility Model divides security and operational duties between AWS and the customer depending on the service. NIST AI RMF structures AI risk management, CAF-AI guides enterprise AI adoption, and the EU AI Act is risk-based regulation.',
    [
      ['A customer patches the guest OS on EC2, while AWS manages the underlying host infrastructure. Which model explains this division?','customer patch guest OS บน EC2 ขณะที่ AWS ดูแล underlying host infrastructure model ใดอธิบายการแบ่งนี้?',0],
      ['For Amazon RDS, AWS manages more of the underlying infrastructure than it does for customer-managed software on EC2. Which concept explains why?','สำหรับ RDS AWS ดูแล underlying infrastructure มากกว่า software ที่ customer จัดการบน EC2 concept ใดอธิบาย?',0],
      ['An architect asks whether AWS or the customer is responsible for patching a specific layer of a cloud service. Which model should be applied first?','architect ถามว่า AWS หรือ customer responsible ต่อการ patch layer หนึ่งของ cloud service ควรใช้ model ใดก่อน?',0],
      ['A security review compares customer duties for IaaS and managed AWS services. Which model governs that comparison?','security review เทียบ customer duties ระหว่าง IaaS กับ managed AWS services model ใด govern comparison นี้?',0],
      ['The clue is "security of the cloud versus security in the cloud." Which answer fits?','clue คือ security of the cloud vs security in the cloud ควรตอบอะไร?',0]
    ]
  );

  add(
    ['AWS KMS','Amazon Macie','AWS CloudTrail','VPC endpoint with AWS PrivateLink'],
    'AWS KMS manages encryption keys. Amazon Macie discovers and classifies sensitive data in S3. AWS CloudTrail records AWS API activity. A VPC endpoint powered by AWS PrivateLink provides private connectivity to supported services without using the public internet path.',
    [
      ['A team needs centralized management and rotation of encryption keys used by AWS services. Which service BEST fits?','ทีมต้องการ centralized management/rotation ของ encryption keys ที่ AWS services ใช้ ควรใช้ service ใด?',0],
      ['A data-governance team wants to discover PII stored in S3 buckets. Which service BEST fits?','data-governance team ต้องการ discover PII ใน S3 buckets ควรใช้ service ใด?',1],
      ['An incident investigation needs to know which principal called an AWS API and when. Which service provides the most direct evidence?','incident investigation ต้องรู้ว่า principal ใด call AWS API เมื่อไร service ใดให้ evidence ตรงที่สุด?',2],
      ['A workload in a VPC must reach a supported AWS service without using the public internet path. Which network choice BEST fits?','workload ใน VPC ต้อง reach supported AWS service โดยไม่ใช้ public internet path network choice ใดตรงที่สุด?',3],
      ['The requirement is private network connectivity to a supported AWS service, not merely encryption or IAM authorization. Which answer fits?','requirement คือ private network connectivity ไป supported AWS service ไม่ใช่แค่ encryption/IAM authorization ควรตอบอะไร?',3]
    ]
  );

  add(
    ['AWS Artifact','AWS Audit Manager','AWS Config','AWS Trusted Advisor'],
    'AWS Artifact provides AWS compliance reports and agreements. Audit Manager helps collect and organize audit evidence from the customer environment. AWS Config tracks resource configuration and compliance against rules. Trusted Advisor provides best-practice recommendations across cost, performance, security, and related areas.',
    [
      ['An auditor wants to download AWS SOC reports and compliance agreements. Which service/resource BEST fits?','auditor ต้อง download AWS SOC reports และ compliance agreements ควรใช้ service/resource ใด?',0],
      ['A company wants automated collection and organization of evidence for its own audit assessments. Which service BEST fits?','บริษัทต้องการ automated collection/organization ของ evidence สำหรับ audit assessments ของตัวเอง ควรใช้ service ใด?',1],
      ['A security team needs a history of resource configuration changes and rule-compliance state. Which service BEST fits?','security team ต้องการ history ของ resource configuration changes และ rule-compliance state ควรใช้ service ใด?',2],
      ['An operations team wants AWS best-practice checks and recommendations across security, cost, and performance. Which service is the closest fit?','operations team ต้องการ AWS best-practice checks/recommendations ด้าน security, cost, performance service ใดตรงที่สุด?',3],
      ['The clue is "collect evidence for our audit," not "download AWS compliance reports." Which answer fits?','clue คือ collect evidence สำหรับ audit ของเรา ไม่ใช่ download AWS compliance reports ควรตอบอะไร?',1]
    ]
  );

  add(
    ['SOC 1','SOC 2','SOC 3','ISO/IEC 42001'],
    'SOC 1 focuses on controls relevant to user entities financial reporting. SOC 2 provides detailed assurance over trust-service criteria such as security, availability, confidentiality, processing integrity, and privacy. SOC 3 is a general-use summary report. ISO/IEC 42001 is an AI Management System standard, not a SOC report.',
    [
      ['An auditor focuses on service-organization controls relevant to customers financial reporting. Which SOC report is the BEST match?','auditor focus controls ของ service organization ที่ relevant ต่อ financial reporting ของ customer SOC report ใดตรงที่สุด?',0],
      ['A customer needs a detailed restricted report on security, availability, confidentiality, and privacy controls. Which SOC report BEST fits?','customer ต้องการ detailed restricted report เรื่อง security, availability, confidentiality, privacy controls SOC report ใดตรงที่สุด?',1],
      ['A company wants a general-use public summary of controls rather than the detailed restricted report. Which SOC report is the closer fit?','บริษัทต้องการ general-use public summary ของ controls ไม่ใช่ detailed restricted report SOC report ใดตรงกว่า?',2],
      ['A service provider is being assessed specifically for controls that can affect financial statements. Which SOC type is PRIMARY?','service provider ถูก assess เรื่อง controls ที่กระทบ financial statements โดยเฉพาะ SOC type ใดเป็นหลัก?',0],
      ['The clue is "detailed trust-services controls report for customers." Which answer fits?','clue คือ detailed trust-services controls report สำหรับ customers ควรตอบอะไร?',1]
    ]
  );

  add(
    ['ISO/IEC 27001','ISO/IEC 42001','NIST AI RMF','AWS CAF-AI'],
    'ISO/IEC 27001 specifies an Information Security Management System (ISMS). ISO/IEC 42001 specifies an AI Management System (AIMS). NIST AI RMF structures AI risk management. AWS CAF-AI guides enterprise AI adoption across strategy, people, governance, platform, and operating model.',
    [
      ['An organization wants a management-system standard for information security across the enterprise. Which standard BEST fits?','องค์กรต้องการ management-system standard สำหรับ information security ทั่ว enterprise standard ใดตรงที่สุด?',0],
      ['An organization wants a management-system standard specifically for governing AI across its lifecycle. Which standard BEST fits?','องค์กรต้องการ management-system standard เฉพาะสำหรับ govern AI ตลอด lifecycle standard ใดตรงที่สุด?',1],
      ['The governance team says "ISMS". Which standard should you associate with that abbreviation?','governance team บอก ISMS ควร associate กับ standard ใด?',0],
      ['The governance team says "AIMS" and AI-specific management responsibilities. Which standard is the closest match?','governance team บอก AIMS และ AI-specific management responsibilities standard ใดตรงที่สุด?',1],
      ['The clue is "AI Management System standard." Which answer fits?','clue คือ AI Management System standard ควรตอบอะไร?',1]
    ]
  );

  add(
    ['NIST AI RMF','AWS CAF-AI','Generative AI Security Scoping Matrix','EU AI Act'],
    'NIST AI RMF organizes AI risk work around Govern, Map, Measure, and Manage. AWS CAF-AI guides enterprise AI adoption across strategy, people, governance, platform, and operating model. The Generative AI Security Scoping Matrix helps reason about ownership/control and security responsibilities for different GenAI solution patterns. The EU AI Act creates legal risk-based obligations for AI in the EU.',
    [
      ['Which framework uses the functions Govern, Map, Measure, and Manage for AI risk?','framework ใดใช้ functions Govern, Map, Measure, Manage สำหรับ AI risk?',0],
      ['A company needs an enterprise adoption framework covering strategy, people, governance, platform, and operating model for AI. Which framework BEST fits?','บริษัทต้องการ enterprise adoption framework ครอบคลุม strategy, people, governance, platform, operating model สำหรับ AI ควรใช้ framework ใด?',1],
      ['A security architect wants to classify a GenAI solution pattern by how much of the model, application, and data stack the customer controls. Which framework/tool is MOST relevant?','security architect ต้อง classify GenAI solution pattern ตามระดับ control ของ customer ต่อ model/application/data stack ควรใช้ framework/tool ใด?',2],
      ['Legal counsel asks which framework creates risk-based legal obligations for AI systems used in the European Union. Which answer fits?','legal counsel ถามว่า framework ใดสร้าง risk-based legal obligations สำหรับ AI systems ใน EU ควรตอบอะไร?',3],
      ['The clue is "strategy + people + governance + platform + operating model for enterprise AI adoption." Which answer fits?','clue คือ strategy + people + governance + platform + operating model สำหรับ enterprise AI adoption ควรตอบอะไร?',1]
    ]
  );

  add(
    ['Unacceptable/prohibited risk','High risk','Limited/transparency risk','Minimal risk'],
    'Under the common exam framing, unacceptable uses are prohibited. High-risk systems may be allowed but face strict obligations. Limited/transparency-risk uses have disclosure or transparency duties. Minimal-risk uses generally have low regulatory burden.',
    [
      ['A use case falls into an explicitly prohibited AI practice under the EU AI Act. Which risk category BEST fits?','use case อยู่ใน AI practice ที่ถูกห้ามชัดเจนตาม EU AI Act risk category ใดตรงที่สุด?',0],
      ['An AI system is allowed but falls into a regulated high-impact category with strict risk-management and compliance obligations. Which tier BEST fits?','AI system ใช้ได้แต่เป็น high-impact category ที่มี strict risk-management/compliance obligations tier ใดตรงที่สุด?',1],
      ['A customer-service chatbot must disclose that users are interacting with AI, and the scenario says it is neither prohibited nor high risk. Which category BEST fits?','customer-service chatbot ต้อง disclose ว่ากำลัง interact กับ AI และ scenario บอกว่าไม่ prohibited/ไม่ high risk category ใดตรงที่สุด?',2],
      ['A low-impact AI feature has no special high-risk or transparency obligation in the scenario. Which category is the closest fit?','AI feature low-impact ไม่มี high-risk/transparency obligation พิเศษใน scenario category ใดใกล้ที่สุด?',3],
      ['The clue is "allowed, but transparency disclosure is required." Which EU risk category fits?','clue คือ allowed แต่ต้อง transparency disclosure EU risk category ใดตรง?',2]
    ],
    {vocab:[{term:'prohibited',th:'ถูกห้าม'},{term:'obligations',th:'ข้อผูกพันหรือหน้าที่ที่ต้องปฏิบัติ'}]}
  );

  add(
    ['Data owner','Data steward','Data lineage','Data retention'],
    'A data owner is accountable for a data domain and major access/use decisions. A data steward manages day-to-day data quality, definitions, and governance practices. Data lineage traces origin and transformations. Data retention defines how long data is kept before archival or deletion.',
    [
      ['An executive role is accountable for a data domain and approves major rules for how that data may be used. Which governance role BEST fits?','role ระดับ accountable ต่อ data domain และ approve major rules ว่า data ใช้อย่างไร governance role ใดตรงที่สุด?',0],
      ['A role maintains data definitions, quality standards, and day-to-day governance practices for a dataset. Which role BEST fits?','role ดูแล data definitions, quality standards และ day-to-day governance practices ของ dataset role ใดตรงที่สุด?',1],
      ['Auditors need to trace a training field back to its source and every transformation that occurred before training. Which governance concept BEST fits?','auditor ต้อง trace training field กลับ source และ transformations ก่อน training governance concept ใดตรงที่สุด?',2],
      ['A policy says training records must be deleted seven years after collection. Which governance concept is MOST directly involved?','policy บอกว่า training records ต้อง delete หลังเก็บ 7 ปี governance concept ใดเกี่ยวข้องโดยตรงที่สุด?',3],
      ['The clue is "trace origin and transformations through the pipeline." Which answer fits?','clue คือ trace origin และ transformations ผ่าน pipeline ควรตอบอะไร?',2]
    ],
    {vocab:[{term:'accountable',th:'เป็นผู้รับผิดชอบหลักต่อผลลัพธ์'},{term:'lineage',th:'เส้นทางที่มาของข้อมูลและการเปลี่ยนแปลง'},{term:'retention',th:'ระยะเวลาที่เก็บข้อมูล'}]}
  );
})();
