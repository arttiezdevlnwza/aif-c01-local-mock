(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:1,type:'single',...x});

  add({objective:'1.2.5',target:'managed-ai-services-rare-map',type:'matching',
    q:'A retail company wants to use managed AWS AI services for four separate capabilities instead of training every model itself. The security-camera team needs image and video analysis, the operations team needs to extract text and structured fields from scanned forms, the merchandising team needs personalized product recommendations, and the customer-insights team needs to analyze sentiment and entities in written feedback. Match each requirement with the AWS managed AI service that most directly provides it.',
    th:'บริษัทค้าปลีกต้องการใช้ AWS managed AI services สำหรับความสามารถแยกกัน 4 แบบ แทนการ train model ทุกอย่างเอง ทีมกล้องวงจรปิดต้องการวิเคราะห์ภาพและวิดีโอ ทีมปฏิบัติการต้องการดึงข้อความและ structured fields จากเอกสารสแกน ทีม merchandising ต้องการ personalized product recommendations และทีม customer insights ต้องการวิเคราะห์ sentiment และ entities ใน feedback แบบข้อความ จงจับคู่ requirement แต่ละข้อกับ AWS managed AI service ที่ให้ความสามารถนั้นโดยตรงที่สุด.',
    ask:'แยก Amazon Rekognition, Amazon Textract, Amazon Personalize และ Amazon Comprehend จากชนิดงานที่แต่ละ service ทำ.',
    choices:{A:'Analyze objects, scenes, faces, or other visual content in images/video',B:'Extract text, forms, tables, and key-value data from documents',C:'Produce personalized recommendations or rankings for users',D:'Analyze written language for sentiment, entities, and meaning'},
    matches:{'1':'Amazon Rekognition','2':'Amazon Textract','3':'Amazon Personalize','4':'Amazon Comprehend'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Image/video analysis → Amazon Rekognition.','✅ Document text/forms/tables extraction → Amazon Textract.','✅ Personalized recommendations → Amazon Personalize.','✅ Text sentiment/entities → Amazon Comprehend.'],
    cue:'Rekognition = ภาพ, Textract = เอกสาร, Personalize = แนะนำ, Comprehend = เข้าใจข้อความ.'});

  add({objective:'1.3.4',target:'aws-data-preparation-services',type:'matching',
    q:'A data platform supports several AI and analytics teams that need different data-preparation capabilities. One team needs serverless ETL and a central data catalog, another wants a visual no-code tool for cleaning and transforming datasets, another needs centralized permissions and governance for a data lake, and another runs large-scale distributed data processing frameworks. Match each requirement with the AWS service that best fits the high-level role.',
    th:'data platform รองรับหลายทีม AI และ analytics ซึ่งต้องการความสามารถด้านการเตรียมข้อมูลต่างกัน ทีมหนึ่งต้องการ serverless ETL และ central data catalog อีกทีมต้องการ visual no-code tool สำหรับ clean และ transform datasets อีกทีมต้องการ permissions และ governance แบบรวมศูนย์สำหรับ data lake และอีกทีมรัน distributed data-processing frameworks ในขนาดใหญ่ จงจับคู่ requirement แต่ละข้อกับ AWS service ที่ตรงกับบทบาทระดับสูงมากที่สุด.',
    ask:'แยก AWS Glue, AWS Glue DataBrew, AWS Lake Formation และ Amazon EMR ในภาพรวมของ data pipeline.',
    choices:{A:'Serverless ETL and data catalog capabilities',B:'Visual data preparation without writing extensive code',C:'Centralized data-lake governance and permissions',D:'Managed large-scale distributed processing such as Spark/Hadoop workloads'},
    matches:{'1':'AWS Glue','2':'AWS Glue DataBrew','3':'AWS Lake Formation','4':'Amazon EMR'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Serverless ETL/catalog → AWS Glue.','✅ Visual no-code/low-code data preparation → AWS Glue DataBrew.','✅ Data-lake governance/permissions → AWS Lake Formation.','✅ Distributed processing frameworks → Amazon EMR.'],
    cue:'Glue = ETL/Catalog; DataBrew = Visual prep; Lake Formation = Govern lake; EMR = Big distributed processing.'});

  add({objective:'1.3.4',target:'aws-compute-hosting-services',type:'matching',
    q:'An AI platform team is reviewing compute choices for supporting services around its models. One workload needs virtual machines with operating-system control, another is an event-driven function that runs only when requests arrive, another packages long-running services as containers without requiring Kubernetes, and a fourth organization standardizes on Kubernetes orchestration. Match each workload with the most appropriate AWS compute service family.',
    th:'ทีม AI platform กำลังทบทวน compute choices สำหรับ supporting services รอบโมเดล Workload หนึ่งต้องการ virtual machines ที่ควบคุม operating system ได้ อีก workload เป็น event-driven function ที่รันเมื่อมี request เท่านั้น อีก workload บรรจุ long-running services เป็น containers โดยไม่จำเป็นต้องใช้ Kubernetes และอีกองค์กรหนึ่งกำหนดมาตรฐานเป็น Kubernetes orchestration จงจับคู่ workload แต่ละแบบกับ AWS compute service family ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon EC2, AWS Lambda, Amazon ECS และ Amazon EKS ในระดับพื้นฐานที่ AI Practitioner ควรรู้.',
    choices:{A:'Virtual machines with direct instance and OS control',B:'Event-driven serverless functions',C:'Managed container orchestration without requiring Kubernetes',D:'Managed Kubernetes service'},
    matches:{'1':'Amazon EC2','2':'AWS Lambda','3':'Amazon ECS','4':'Amazon EKS'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ VM/OS control → Amazon EC2.','✅ Event-driven function → AWS Lambda.','✅ AWS-native container orchestration → Amazon ECS.','✅ Managed Kubernetes → Amazon EKS.'],
    cue:'EC2 = VM; Lambda = Function; ECS = Containers; EKS = Kubernetes.'});

  add({objective:'1.3.4',target:'aws-data-source-storage-map',type:'matching',
    q:'An AI program uses several AWS data services as sources and supporting stores. One project needs a managed data warehouse for analytical SQL, another needs a marketplace-style way to obtain licensed third-party datasets, another uses object storage for training files and model artifacts, and a compliance archive must retain rarely accessed records for long periods at low storage cost. Match each requirement with the AWS service that best fits.',
    th:'โครงการ AI ใช้ AWS data services หลายแบบเป็นแหล่งข้อมูลและ supporting stores โครงการหนึ่งต้องการ managed data warehouse สำหรับ analytical SQL อีกโครงการต้องการวิธีแบบ marketplace เพื่อรับ licensed third-party datasets อีกโครงการใช้ object storage สำหรับ training files และ model artifacts ส่วน compliance archive ต้องเก็บ records ที่แทบไม่ถูกเข้าถึงเป็นเวลานานด้วยต้นทุน storage ต่ำ จงจับคู่ requirement แต่ละข้อกับ AWS service ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon Redshift, AWS Data Exchange, Amazon S3 และ S3 Glacier classes จากบทบาทข้อมูลระดับสูง.',
    choices:{A:'Managed cloud data warehouse for analytics',B:'Access licensed third-party datasets from data providers',C:'General-purpose object storage for datasets and artifacts',D:'Low-cost long-term archival storage for rarely accessed objects'},
    matches:{'1':'Amazon Redshift','2':'AWS Data Exchange','3':'Amazon S3','4':'Amazon S3 Glacier storage classes'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Analytical warehouse → Amazon Redshift.','✅ Third-party licensed datasets → AWS Data Exchange.','✅ Object storage → Amazon S3.','✅ Long-term archive → S3 Glacier storage classes.'],
    cue:'Redshift = Warehouse; Data Exchange = External data; S3 = Objects; Glacier = Archive.'});

  add({objective:'1.3.6',target:'aws-cost-management-budget-vs-explorer',
    q:'A GenAI product owner needs two different cost-management views. Before launch, finance wants a monthly spending threshold with alerts when actual or forecasted spend approaches the limit. After launch, analysts want to explore historical AWS cost and usage trends to understand which services and periods drove the bill. Which pairing of AWS tools best fits these two needs?',
    th:'product owner ของ GenAI ต้องการมุมมองด้าน cost management สองแบบ ก่อน launch ฝ่ายการเงินต้องการกำหนด monthly spending threshold พร้อม alerts เมื่อ actual หรือ forecasted spend เข้าใกล้ limit หลัง launch นักวิเคราะห์ต้องการสำรวจ historical AWS cost และ usage trends เพื่อดูว่า services และช่วงเวลาใดเป็นตัวขับค่าใช้จ่าย คู่ AWS tools ใดเหมาะกับสอง requirement นี้ที่สุด?',
    ask:'แยก AWS Budgets สำหรับ threshold/alerts ออกจาก AWS Cost Explorer สำหรับวิเคราะห์ historical cost/usage.',
    choices:{A:'AWS Budgets for thresholds and alerts; AWS Cost Explorer for historical cost and usage analysis',B:'AWS Cost Explorer for IAM permissions; AWS Budgets for model fine-tuning',C:'Amazon Inspector for cost trends; Amazon Macie for budget alerts',D:'AWS Artifact for token pricing; Amazon Polly for monthly budgets'},
    answer:['A'],
    why:{A:'ถูก เพราะ Budgets ใช้กำหนด budget/alerts ส่วน Cost Explorer ใช้วิเคราะห์ cost/usage trends.',B:'ผิด เพราะ Cost Explorer ไม่จัด IAM และ Budgets ไม่ fine-tune model.',C:'ผิด เพราะ Inspector/Macie เป็น security services.',D:'ผิด เพราะ Artifact/Polly ไม่ใช่ cost-management tools.'},
    cue:'Budget = ตั้งกรอบ/เตือน; Cost Explorer = เปิดดูและวิเคราะห์ค่าใช้จ่าย.'});

  add({objective:'1.3.4',target:'aws-database-supporting-services',type:'matching',
    q:'A solution architecture team supporting AI applications must select data stores for different supporting workloads. One service needs key-value access at very large scale, another stores JSON-like documents with document-database semantics, another requires a relational SQL database, and a latency-sensitive application wants an in-memory cache in front of slower data sources. Match each workload with the most appropriate AWS database or cache family.',
    th:'ทีม solution architecture ที่รองรับ AI applications ต้องเลือก data stores สำหรับ supporting workloads ต่างกัน Service หนึ่งต้องการ key-value access ใน scale สูงมาก อีก service เก็บข้อมูลแบบ JSON-like ด้วย document-database semantics อีก workload ต้องการ relational SQL database และ application ที่ไวต่อ latency ต้องการ in-memory cache ไว้หน้าข้อมูลที่ช้ากว่า จงจับคู่ workload กับ AWS database หรือ cache family ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon DynamoDB, Amazon DocumentDB, Amazon RDS และ Amazon ElastiCache ในระดับ service recognition.',
    choices:{A:'Highly scalable key-value and NoSQL access',B:'Managed document database compatible with document-oriented workloads',C:'Managed relational database service',D:'Managed in-memory caching'},
    matches:{'1':'Amazon DynamoDB','2':'Amazon DocumentDB','3':'Amazon RDS','4':'Amazon ElastiCache'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Key-value/NoSQL scale → DynamoDB.','✅ Document-oriented data → DocumentDB.','✅ Relational SQL → RDS.','✅ In-memory cache → ElastiCache.'],
    cue:'DynamoDB = Key-value; DocumentDB = Documents; RDS = Relational; ElastiCache = Cache.'});
})();