window.EXAM_FAMILY_GUIDE = {
  updated: '2026-09-22',
  note: 'Grouped quick-reference for AIF-C01. Focuses on exam distinctions and common distractors rather than implementation depth.',
  groups: [
    {
      id: 'bedrock-core',
      title: 'Amazon Bedrock — ตัวหลักมีอะไรบ้าง',
      summary: 'คิดว่า Bedrock = managed GenAI platform; แล้วแยก feature ตามงานที่ต้องทำ',
      items: [
        { name: 'Knowledge Bases', use: 'RAG / ดึงข้อมูลขององค์กรมา ground คำตอบ', cue: 'เอกสารองค์กร + citations/current knowledge = Knowledge Bases', confuse: 'ไม่ใช่ Prompt Management และไม่ใช่ fine-tuning' },
        { name: 'Guardrails', use: 'กรอง/ควบคุม input-output เช่น harmful content, denied topics, sensitive information, prompt attacks', cue: 'ป้องกัน input-output = Guardrails', confuse: 'Macie หา sensitive data ใน S3; Guardrails ป้องกันตอน model interaction' },
        { name: 'Prompt Management', use: 'เก็บ prompt template, variables, variants และ versions', cue: 'เก็บ/version/rollback prompt = Management', confuse: 'Optimization = ปรับ prompt ให้ดีขึ้น; Caching = ลดงานซ้ำ' },
        { name: 'Prompt Optimization', use: 'ช่วย rewrite/ปรับ prompt ให้ได้ผลดีขึ้น', cue: 'ปรับ prompt = Optimization', confuse: 'ไม่ได้มีหน้าที่เก็บ version เป็นหลัก' },
        { name: 'Prompt Caching', use: 'reuse long prompt prefix/context ที่ซ้ำเพื่อลด latency/input-token cost', cue: 'context ซ้ำ = Caching', confuse: 'ไม่เพิ่ม knowledge ถาวร และไม่ใช่ fine-tuning' },
        { name: 'Flows', use: 'ต่อ Bedrock features/AWS services เป็น workflow ที่กำหนด steps/branches ไว้', cue: 'กำหนด flow/steps ไว้ = Bedrock Flows', confuse: 'Agent = model-driven planning; Quick Flows = business-user automation ใน Amazon Quick' },
        { name: 'Model Evaluation', use: 'ประเมิน model output ด้วย automatic/human evaluation', cue: 'วัดคุณภาพ FM = Model Evaluation', confuse: 'AgentCore Evaluations เน้น agent behavior/tool-use' },
        { name: 'Model Customization', use: 'Fine-tuning, Continued Pre-training, Distillation ตาม use case', cue: 'เปลี่ยน weights = customization', confuse: 'RAG/Prompting ไม่ได้เปลี่ยน weights' },
        { name: 'Inference capacity', use: 'On-Demand สำหรับ demand แปรผัน; Provisioned Throughput สำหรับ steady/predictable capacity', cue: 'แปรผัน = On-Demand · คงที่สูง = Provisioned', confuse: 'Batch คือ offline workload; ไม่ใช่ capacity commitment แบบเดียวกัน' },
        { name: 'Agents Classic', use: 'agent orchestration เดิมสำหรับ existing customers', cue: 'ของเดิม = Agents Classic', confuse: 'งาน agent ใหม่ให้มอง AgentCore เป็นหลัก' }
      ]
    },
    {
      id: 'agentcore',
      title: 'Amazon Bedrock AgentCore — จำหน้าที่แต่ละตัว',
      summary: 'ถ้าโจทย์ถาม production agent ให้แยกว่า รันที่ไหน / เรียก tool / credential / memory / allow-deny / debug / evaluate',
      items: [
        { name: 'Runtime', use: 'host/run agent และ sessions บน managed runtime', cue: 'Agent รันที่ไหน = Runtime', confuse: 'Gateway ไม่ได้ host agent; Gateway เป็นทางเข้าไปหา tools' },
        { name: 'Gateway', use: 'expose APIs/Lambda/MCP targets เป็น tools ให้ agent เรียก', cue: 'Agent เรียก tool ภายนอก = Gateway', confuse: 'Identity จัดการ credential; Policy ตัดสิน allow/deny' },
        { name: 'Identity', use: 'authentication, delegated identity, credentials ไปยัง AWS/3rd-party resources', cue: 'ใครเป็นใคร / credential = Identity', confuse: 'Policy = อนุญาต action ไหม' },
        { name: 'Memory', use: 'เก็บ context ข้าม interaction/session เช่น preference/summary/semantic memory', cue: 'จำข้าม session = Memory', confuse: 'Prompt Caching แค่ลด processing ซ้ำ' },
        { name: 'Policy', use: 'deterministic authorization rules สำหรับ tool invocation', cue: 'อนุญาต/ปฏิเสธ action = Policy', confuse: 'Identity authenticate; Policy authorize' },
        { name: 'Observability', use: 'traces, spans, metrics, errors, latency, tool calls', cue: 'Trace/metric/debug = Observability', confuse: 'Evaluations วัด quality; Observability ดู behavior/telemetry' },
        { name: 'Evaluations', use: 'วัด response quality, safety, task completion, tool usage', cue: 'ให้คะแนน agent = Evaluations', confuse: 'Model Evaluation ใน Bedrock เน้น FM/model output' },
        { name: 'Registry', use: 'discover/manage agentic resources เช่น agents, MCP servers, tools, skills', cue: 'ทะเบียน resource ของ agent = Registry', confuse: 'SageMaker Model Registry = model versions + approval' },
        { name: 'Browser / Code Interpreter', use: 'built-in tools สำหรับ web interaction และ execute code', cue: 'ให้ agent ใช้ browser/code แบบ managed = Built-in tools', confuse: 'ไม่ใช่ Gateway ซึ่งเชื่อม tools ภายนอกของเรา' }
      ]
    },
    {
      id: 'quick',
      title: 'Amazon Quick — Research / Flow / Automate / Sight ต่างกันยังไง',
      summary: 'Quick = business workspace; ถามว่าผู้ใช้กำลัง “ค้นคว้า / วิเคราะห์ / automate งานสั้น / automate process ใหญ่”',
      items: [
        { name: 'Quick Research', use: 'research หลายแหล่งและสร้างรายงานพร้อม citations/source tracing', cue: 'ค้นคว้าลึก + citations = Research', confuse: 'Quick Sight = BI/dashboard' },
        { name: 'Quick Flows', use: 'no-code workflow สำหรับ repetitive/routine personal-team tasks', cue: 'งานสั้น/ทีม/ทำซ้ำ = Flows', confuse: 'Quick Automate = enterprise process ยาวและซับซ้อนกว่า' },
        { name: 'Quick Automate', use: 'end-to-end enterprise process, high-volume/long-running, branching, approvals, error handling', cue: 'งานองค์กรยาว/หลายแผนก = Automate', confuse: 'Flows เหมาะ personal/team productivity มากกว่า' },
        { name: 'Quick Sight', use: 'BI, dashboards, visual analytics', cue: 'Dashboard/BI = Quick Sight', confuse: 'ไม่ใช่ research report และไม่ใช่ workflow automation' },
        { name: 'Quick Index', use: 'connect/index organizational documents and data เพื่อ ground AI responses', cue: 'คลังข้อมูลของ Quick = Index', confuse: 'Bedrock Knowledge Bases = RAG feature ใน Bedrock' },
        { name: 'Apps in Quick', use: 'สร้าง interactive web apps ด้วย natural language', cue: 'business app จากคำอธิบาย = Apps', confuse: 'ไม่ใช่ Kiro ซึ่งเน้น software development' }
      ]
    },
    {
      id: 'q-dev',
      title: 'Amazon Q / Developer tools — Q Developer, Q Business, Kiro, Strands',
      summary: 'กลุ่มนี้ชอบหลอกด้วยคำว่า developer/assistant/agent ให้ดู “ผู้ใช้คือใคร และต้องการอะไร”',
      items: [
        { name: 'Amazon Q Developer', use: 'coding, AWS development/operations assistance, code explanation และ developer workflows', cue: 'coding/AWS assistant = Q Developer', confuse: 'Kiro = structured/spec-driven development; Strands = SDK สร้าง agent' },
        { name: 'Amazon Q Business', use: 'enterprise knowledge assistant บนข้อมูลขององค์กร พร้อม access controls/citations', cue: 'ถามความรู้ในองค์กร = Q Business', confuse: 'ปัจจุบันไม่เปิดลูกค้าใหม่; capability ใกล้เคียงให้มอง Amazon Quick' },
        { name: 'Kiro', use: 'spec-driven development: requirements → design → tasks, steering, hooks, MCP', cue: 'Specs/Steering/Hooks = Kiro', confuse: 'Q Developer = general coding/AWS assistant' },
        { name: 'Strands Agents', use: 'open-source SDK/framework สำหรับ build autonomous agents ด้วย model + tools', cue: 'เขียน agent ใน code = Strands', confuse: 'AgentCore = managed production services สำหรับ agent; Strands = SDK/framework' }
      ]
    },
    {
      id: 'sagemaker',
      title: 'SageMaker Family — ของคล้ายกันที่ข้อสอบชอบสลับ',
      summary: 'จำจาก “ช่วงไหนของ lifecycle” และ “ทำกับ data/model/inference อะไร”',
      items: [
        { name: 'SageMaker AI', use: 'build/train/tune/deploy custom ML และควบคุม ML lifecycle ลึก', cue: 'custom ML lifecycle = SageMaker AI', confuse: 'Bedrock = managed FM/GenAI application platform' },
        { name: 'JumpStart', use: 'discover/deploy pre-trained models และ solution templates ใน SageMaker', cue: 'model/solution hub = JumpStart', confuse: 'ไม่ใช่ Bedrock model API platform' },
        { name: 'Canvas', use: 'visual/no-code ML สำหรับ analyst', cue: 'Analyst + no-code ML = Canvas', confuse: 'Data Wrangler เน้น data preparation' },
        { name: 'Data Wrangler', use: 'visual clean/transform/inspect data ก่อน training', cue: 'เตรียม/แปลง data = Data Wrangler', confuse: 'Ground Truth = labeling' },
        { name: 'Ground Truth', use: 'สร้าง/จัด workflow สำหรับ data labeling ก่อน training', cue: 'Label ก่อน train = Ground Truth', confuse: 'A2I = human review หลัง inference' },
        { name: 'Amazon A2I', use: 'ส่ง prediction บางกรณีให้คน review หลัง inference (existing-customer context)', cue: 'Human review หลัง inference = A2I', confuse: 'Ground Truth = label training data' },
        { name: 'Clarify', use: 'bias analysis และ feature attribution/explainability', cue: 'Bias + SHAP = Clarify', confuse: 'Model Monitor = เฝ้าหลัง deploy' },
        { name: 'Model Monitor', use: 'monitor data/model quality และ drift หลัง deploy', cue: 'หลัง deploy + drift = Monitor', confuse: 'Clarify ไม่ได้เป็น production drift monitor หลัก' },
        { name: 'Model Registry', use: 'model versions/packages + approval status', cue: 'Version + approval ของ model = Registry', confuse: 'Lineage = trace ที่มาและ transformations' },
        { name: 'Feature Store', use: 'เก็บ/reuse feature definitions สำหรับ training และ inference', cue: 'Feature กลางใช้ซ้ำ = Feature Store', confuse: 'ไม่ใช่ Model Registry' }
      ]
    },
    {
      id: 'security-governance',
      title: 'Security / Governance Services — ถามอะไรตอบตัวไหน',
      summary: 'กลุ่มนี้จำจากคำกริยา: download report / collect evidence / track config / log API / recommend / discover PII / scan vulnerability',
      items: [
        { name: 'AWS Artifact', use: 'ดาวน์โหลด AWS compliance reports/agreements', cue: 'AWS มีใบอะไร = Artifact', confuse: 'Audit Manager = หลักฐานจาก environment ของเรา' },
        { name: 'AWS Audit Manager', use: 'collect/organize audit evidence และ map กับ frameworks', cue: 'ระบบเรามีหลักฐานอะไร = Audit Manager', confuse: 'Artifact ให้เอกสาร compliance ของ AWS' },
        { name: 'AWS Config', use: 'resource configuration history + compliance against rules', cue: 'ของถูก config ยังไง = Config', confuse: 'CloudTrail = ใครเรียก API อะไรเมื่อไร' },
        { name: 'AWS CloudTrail', use: 'API/account activity history', cue: 'Who did what API when = CloudTrail', confuse: 'Config ไม่ได้เป็น API activity log' },
        { name: 'AWS Trusted Advisor', use: 'best-practice recommendations ด้าน cost/performance/security ฯลฯ', cue: 'ควรปรับอะไร = Trusted Advisor', confuse: 'Config = compliance state ไม่ใช่ recommendation service' },
        { name: 'Amazon Macie', use: 'discover/classify sensitive data ใน S3', cue: 'หา PII ใน S3 = Macie', confuse: 'Inspector = vulnerability; KMS = encryption key' },
        { name: 'Amazon Inspector', use: 'vulnerability/exposure management ของ supported workloads', cue: 'CVE/ช่องโหว่ = Inspector', confuse: 'Macie = sensitive data discovery' },
        { name: 'AWS KMS', use: 'สร้าง/จัดการ encryption keys', cue: 'Key/Encryption = KMS', confuse: 'Secrets Manager เก็บ secrets; Macie ค้น sensitive data' },
        { name: 'VPC Endpoint / PrivateLink', use: 'private service path โดยไม่ออก public internet', cue: 'Private service path = PrivateLink', confuse: 'NAT Gateway ยังเป็นทางออก public endpoint' }
      ]
    },
    {
      id: 'rag',
      title: 'RAG Family — ingestion, retrieval, evaluation',
      summary: 'แยก “เตรียม index” ออกจาก “ตอน query” และแยก “ดึงผิด” ออกจาก “ตอบหลุด”',
      items: [
        { name: 'Chunking', use: 'แบ่ง document เป็น retrieval units', cue: 'แบ่งเอกสาร = Chunking', confuse: 'Tokenization แบ่ง text เป็น token สำหรับ model' },
        { name: 'Embeddings', use: 'แปลง content/query เป็น vectors ที่เก็บ semantic similarity', cue: 'Meaning → vector = Embedding', confuse: 'Chunking เกิดก่อน embedding ใน ingestion flow' },
        { name: 'Vector store/index', use: 'เก็บ/index vectors สำหรับ similarity search', cue: 'Embed ก่อน Store/Index', confuse: 'อย่าสลับลำดับ RAG ingestion' },
        { name: 'Metadata Filtering', use: 'จำกัด candidate ที่มีสิทธิ์ถูกดึง เช่น country/status/tenant', cue: 'ดึงอะไรได้ = Filter', confuse: 'Reranking = ได้ candidate แล้วค่อยเรียงใหม่' },
        { name: 'Reranking', use: 'จัดอันดับ retrieved candidates ใหม่ตาม relevance', cue: 'ได้มาแล้ว เรียงใหม่ = Reranking', confuse: 'ไม่ได้กำหนด eligibility แบบ metadata filter' },
        { name: 'Retrieval Relevance', use: 'วัดว่า retrieved context ตรงคำถามหรือไม่', cue: 'Docs ถูกเรื่องไหม = Retrieval relevance', confuse: 'Faithfulness ดู final answer ยึด context ไหม' },
        { name: 'Faithfulness / Groundedness', use: 'วัดว่า generated answer มีหลักฐานจาก retrieved context รองรับหรือไม่', cue: 'Docs ถูก แต่คำตอบหลุด = Faithfulness', confuse: 'retrieval relevance อาจดีแต่ generation ยัง hallucinate ได้' }
      ]
    },
    {
      id: 'prompt-customization',
      title: 'Prompt / Customization — เปลี่ยน prompt หรือเปลี่ยน weights?',
      summary: 'ข้อสอบชอบเอา prompting, RAG และ customization มาปนกัน ให้ถามก่อนว่า “มีการ train weights ไหม”',
      items: [
        { name: 'Zero-shot', use: 'instruction แต่ไม่มี example', cue: '0 example = Zero-shot', confuse: 'Few-shot มี examples' },
        { name: 'Few-shot', use: 'ใส่ตัวอย่าง input-output ใน prompt', cue: 'มี examples = Few-shot', confuse: 'ไม่ใช่ fine-tuning เพราะ weights ไม่เปลี่ยน' },
        { name: 'Prompt Template', use: 'โครง prompt reusable + variables', cue: 'โครงเดิมเปลี่ยนค่า = Template', confuse: 'Prompt Management คือ service จัดเก็บ/version template' },
        { name: 'Negative Prompting', use: 'ระบุสิ่งที่ไม่ต้องการให้ generate', cue: 'ห้ามสร้างอะไร = Negative Prompt', confuse: 'ไม่ใช่ Guardrails ซึ่งเป็น managed safety control' },
        { name: 'RAG', use: 'ดึง external/current/private context ตอน inference โดยไม่ retrain', cue: 'ความรู้เปลี่ยนบ่อย + citations = RAG', confuse: 'Fine-tuning เปลี่ยน behavior/weights' },
        { name: 'SFT / Instruction Tuning', use: 'train ด้วย labeled instruction-response examples เพื่อเปลี่ยน task behavior/style', cue: 'คู่ instruction-answer = SFT', confuse: 'CPT ใช้ corpus ใหญ่ที่มัก unlabeled' },
        { name: 'Continued Pre-training', use: 'เรียนต่อจาก large domain corpus เพื่อ absorb domain language/knowledge', cue: 'unlabeled domain corpus ใหญ่ = CPT', confuse: 'SFT เน้น labeled examples' },
        { name: 'Distillation', use: 'transfer behavior จาก teacher ใหญ่ไป student เล็ก', cue: 'Teacher → Student = Distillation', confuse: 'Transfer learning กว้างกว่าและไม่ได้หมายถึง teacher-student เสมอ' },
        { name: 'Transfer Learning', use: 'reuse knowledge จาก pre-trained model ไป related target task', cue: 'ความรู้เดิม → งานใหม่ที่เกี่ยวข้อง = Transfer Learning', confuse: 'Distillation โฟกัส teacher-student' }
      ]
    }
  ]
};

window.EXAM_FAMILY_GUIDE.updated = '2026-09-23';
window.EXAM_FAMILY_GUIDE.groups.push(
  {
    id: 'compliance-reports',
    title: 'SOC / ISO / Frameworks — เอกสารกับมาตรฐานที่ชอบสับสน',
    summary: 'แยกให้ออกว่าเป็น “รายงานตรวจสอบ”, “มาตรฐานระบบบริหาร”, “framework บริหารความเสี่ยง” หรือ “กฎหมาย”',
    items: [
      { name: 'SOC 1', use: 'รายงาน controls ของ service organization ที่เกี่ยวข้องกับ internal control over financial reporting (ICFR) ของลูกค้า', cue: 'Financial reporting controls = SOC 1', confuse: 'SOC 2 เน้น Trust Services Criteria ไม่ได้โฟกัส financial reporting' },
      { name: 'SOC 2', use: 'รายงานแบบละเอียดเกี่ยวกับ controls ตาม Trust Services Criteria เช่น security, availability, confidentiality, privacy', cue: 'Detailed trust-services report = SOC 2', confuse: 'SOC 3 ใช้เกณฑ์คล้ายกันแต่เป็น general-use/public summary ที่รายละเอียดน้อยกว่า' },
      { name: 'SOC 3', use: 'general-use report ตาม Trust Services Criteria สำหรับเผยแพร่กว้างกว่า', cue: 'Public/general summary = SOC 3', confuse: 'SOC 2 คือ detailed report สำหรับผู้ใช้ที่ต้องการรายละเอียด control มากกว่า' },
      { name: 'ISO/IEC 27001', use: 'มาตรฐาน Information Security Management System (ISMS)', cue: 'Information Security Management = ISO 27001', confuse: 'ISO 42001 คือ AI Management System' },
      { name: 'ISO/IEC 42001', use: 'มาตรฐาน AI Management System (AIMS) สำหรับ governance/management ของ AI ในองค์กร', cue: 'AI Management System = ISO 42001', confuse: 'ISO 27001 เน้น information security management' },
      { name: 'NIST AI RMF', use: 'framework บริหาร AI risk ด้วย Govern, Map, Measure, Manage', cue: 'Govern · Map · Measure · Manage = NIST AI RMF', confuse: 'ไม่ใช่กฎหมายแบบ EU AI Act' },
      { name: 'EU AI Act', use: 'กฎหมายแบบ risk-based แบ่ง prohibited/high/transparency/minimal obligations ตาม use case', cue: 'Risk tier + legal obligation = EU AI Act', confuse: 'NIST AI RMF เป็น voluntary risk-management framework' },
      { name: 'AWS CAF-AI', use: 'guidance สำหรับ enterprise AI adoption/transformation ด้าน strategy, people, governance, platform, operating model', cue: 'Enterprise AI adoption = CAF-AI', confuse: 'ไม่ใช่ compliance report และไม่ใช่มาตรฐาน certification' }
    ]
  },
  {
    id: 'iam-family',
    title: 'IAM / Permissions — Grant, Ceiling, Resource, Trust',
    summary: 'เวลาโจทย์ถาม permission ให้ถามก่อนว่า “ใคร grant?”, “ใครเป็นเพดาน?”, “ผูกกับ identity หรือ resource?”',
    items: [
      { name: 'Identity-based Policy', use: 'ผูกกับ user/role/group และ grant permissions ให้ identity', cue: 'Identity นี้ทำอะไรได้ = Identity Policy', confuse: 'Permissions Boundary/SCP ไม่ grant สิทธิ์เอง' },
      { name: 'Resource-based Policy', use: 'ผูกกับ resource และระบุว่า principal ใดเข้าถึง resource ได้', cue: 'Resource นี้ยอมให้ใคร = Resource Policy', confuse: 'Identity policy มองจากฝั่ง user/role' },
      { name: 'Permissions Boundary', use: 'กำหนด maximum permissions ของ IAM identity', cue: 'Boundary = Ceiling ของ identity', confuse: 'ไม่ grant permission' },
      { name: 'Service Control Policy (SCP)', use: 'permission guardrail ระดับ AWS Organizations/account', cue: 'SCP = Ceiling ระดับ Organization', confuse: 'ไม่ grant permission และไม่ใช่ policy ที่ผูกกับ resource' },
      { name: 'IAM Role', use: 'identity ที่มี permission set และถูก assume เพื่อรับ temporary credentials', cue: 'Role = ชุดสิทธิ์ที่สวมได้', confuse: 'Role ไม่มี long-term credential แบบ user' },
      { name: 'Trust Policy', use: 'กำหนดว่าใคร/อะไรสามารถ assume role ได้', cue: 'ใครสวม Role ได้ = Trust Policy', confuse: 'Permission policy บอกว่า role ทำอะไรได้หลัง assume แล้ว' },
      { name: 'Explicit Deny', use: 'Deny ที่เขียนชัดเจนและมี precedence เหนือ Allow', cue: 'Explicit Deny ชนะ Allow', confuse: 'Implicit deny คือไม่มี Allow จึงไม่ได้สิทธิ์' }
    ]
  },
  {
    id: 'inference-modes',
    title: 'Inference Modes — Real-Time / Serverless / Async / Batch',
    summary: 'ดู 3 อย่าง: มีคนรอไหม, งานต่อ request ใหญ่/นานไหม, หรือเป็น dataset ก้อนใหญ่ offline',
    items: [
      { name: 'Real-Time Inference', use: 'interactive request ที่ต้องการ response latency ต่ำและ endpoint พร้อมรับงาน', cue: 'คนรอผลทันที = Real-Time', confuse: 'Async เหมาะ request ที่ใหญ่/นานและรับผลทีหลัง' },
      { name: 'Serverless Inference', use: 'request สั้น ๆ ที่ traffic มาเป็นช่วงหรือคาดเดายาก และไม่อยาก provision instance', cue: 'traffic ไม่สม่ำเสมอ + request ไม่หนัก = Serverless', confuse: 'Async ก็ traffic กระตุกได้ แต่เด่นที่ payload ใหญ่/processing นาน' },
      { name: 'Asynchronous Inference', use: 'single request/payload ใหญ่หรือใช้เวลานาน แล้วมารับผลภายหลัง', cue: 'งานเดี่ยวใหญ่/นาน + รับผลทีหลัง = Async', confuse: 'Batch Transform คือ dataset offline หลาย records' },
      { name: 'Batch Transform', use: 'ประมวลผล dataset ขนาดใหญ่แบบ offline ไม่มี user รอ response ราย request', cue: 'กองข้อมูล offline = Batch', confuse: 'Async ยังเป็น request/job รายงานที่ต้องคืนผลแต่ละงาน' }
    ]
  },
  {
    id: 'ml-metrics',
    title: 'Metrics — Classification / Regression จำยังไง',
    summary: 'Classification ให้คิด TP/FP/FN; Regression ให้ดูว่าอยากอ่านง่ายหรืออยากลงโทษ error ใหญ่',
    items: [
      { name: 'Accuracy', use: 'สัดส่วนทายถูกทั้งหมด', cue: 'ถูกทั้งหมดกี่ % = Accuracy', confuse: 'อาจหลอกเมื่อ class imbalance มาก' },
      { name: 'Precision', use: 'ในสิ่งที่ทายว่า positive ทั้งหมด มีของจริง positive กี่ส่วน', cue: 'ทายว่าใช่แล้ว ถูกจริงแค่ไหน = Precision', confuse: 'false positive เยอะ → Precision ต่ำ' },
      { name: 'Recall', use: 'จาก positive จริงทั้งหมด โมเดลจับเจอได้กี่ส่วน', cue: 'ของจริงทั้งหมด จับได้กี่ส่วน = Recall', confuse: 'false negative เยอะ → Recall ต่ำ' },
      { name: 'F1 Score', use: 'harmonic mean ของ Precision และ Recall', cue: 'อยาก balance Precision + Recall = F1', confuse: 'ไม่ใช่ตัวชี้วัด regression' },
      { name: 'AUC-PR', use: 'ดู tradeoff Precision-Recall หลาย threshold และเหมาะกับ positive class ที่หายาก', cue: 'Rare positive + หลาย threshold = AUC-PR', confuse: 'Accuracy อาจดูสูงเกินจริงใน imbalanced data' },
      { name: 'MAE', use: 'average absolute error ในหน่วยเดียวกับ target', cue: 'ผิดเฉลี่ยกี่หน่วย = MAE', confuse: 'RMSE ลงโทษ large error แรงกว่า' },
      { name: 'RMSE', use: 'squared error ทำให้ large misses มีน้ำหนักสูงขึ้น แล้วแปลงกลับหน่วย target', cue: 'แพ้ error ใหญ่ = RMSE', confuse: 'MAE เป็น linear penalty' },
      { name: 'R-squared (R²)', use: 'สัดส่วน variance ของ target ที่โมเดลอธิบายได้', cue: 'อธิบาย variance ได้แค่ไหน = R²', confuse: 'ไม่ใช่ average error ในหน่วย target' }
    ]
  },
  {
    id: 'data-governance',
    title: 'Data Governance — Owner / Steward / Lineage / Residency / Retention',
    summary: 'กลุ่มนี้ข้อสอบชอบเปลี่ยนคำกริยา: ใครรับผิดชอบ / มาจากไหน / อยู่ที่ไหน / เก็บนานแค่ไหน',
    items: [
      { name: 'Data Owner', use: 'รับผิดชอบภาพรวมของ data domain และ major decisions เรื่อง access/use', cue: 'เจ้าของภาพรวม = Data Owner', confuse: 'Steward ดู governance/quality รายวัน' },
      { name: 'Data Steward', use: 'ดู quality, definitions, metadata และ governance operation รายวัน', cue: 'ผู้ดูแลรายวัน = Steward', confuse: 'Owner ถือ accountability ระดับสูงกว่า' },
      { name: 'Data Lineage', use: 'trace source → transformations → downstream/model artifact', cue: 'มาจากไหน ผ่านอะไร = Lineage', confuse: 'Residency = อยู่ที่ไหน; Retention = เก็บนานเท่าไร' },
      { name: 'Data Catalog', use: 'จัด metadata ให้ dataset ค้นหาและเข้าใจได้', cue: 'หา dataset ให้เจอ = Catalog', confuse: 'Lineage เน้นเส้นทางที่มา/การเปลี่ยนแปลง' },
      { name: 'Data Residency', use: 'ข้อกำหนดว่าข้อมูลต้องเก็บ/ประมวลผลใน geographic location ใด', cue: 'ข้อมูลอยู่ที่ไหน = Residency', confuse: 'Retention = เวลา; Sovereignty = อยู่ภายใต้กฎหมายเขตใด' },
      { name: 'Data Retention', use: 'กำหนดระยะเวลาที่เก็บข้อมูล ก่อน archive/delete', cue: 'เก็บกี่ปี = Retention', confuse: 'Residency ไม่ได้พูดเรื่องเวลา' },
      { name: 'Data Sovereignty', use: 'ข้อกำกับตาม jurisdiction/law ที่มีอำนาจเหนือข้อมูล', cue: 'กฎหมายของเขตไหนครอบข้อมูล = Sovereignty', confuse: 'Residency คือ physical/logical location requirement' }
    ]
  },
  {
    id: 'responsible-ai',
    title: 'Responsible AI — Fairness / Transparency / Explainability / Oversight',
    summary: 'ถามว่าปัญหาอยู่ที่ “ความเป็นธรรม”, “การเปิดเผย”, “อธิบายเหตุผล”, “คนคุม”, หรือ “สิทธิ์ขอทบทวน”',
    items: [
      { name: 'Fairness', use: 'ลด unjustified disparity ระหว่างกลุ่มที่เทียบเคียงกัน', cue: 'ผลลัพธ์ต่างกันระหว่างกลุ่ม = Fairness', confuse: 'Explainability ถามว่าทำไม decision นี้เกิดขึ้น' },
      { name: 'Transparency', use: 'เปิดเผยว่าใช้ AI, intended use, limitations และข้อมูลสำคัญต่อผู้ใช้', cue: 'บอกว่าเป็น AI / บอกข้อจำกัด = Transparency', confuse: 'Explainability คือเหตุผลของ prediction/decision' },
      { name: 'Explainability', use: 'ให้เหตุผลที่เข้าใจได้สำหรับ prediction/decision', cue: 'ทำไมถึงตัดสินแบบนี้ = Explainability', confuse: 'Interpretability คือความเข้าใจได้จากโครงสร้าง model เอง' },
      { name: 'Interpretability', use: 'ตัว model/logic เข้าใจได้โดยตรง เช่น simple linear model/tree/rules', cue: 'เข้าใจตัว model เอง = Interpretability', confuse: 'SHAP เป็น post-hoc explainability' },
      { name: 'Privacy & Security', use: 'ปกป้อง personal/sensitive data และป้องกัน unauthorized access/exposure', cue: 'ข้อมูลลับ/PII = Privacy & Security', confuse: 'Fairness ไม่ใช่เรื่องการปกป้องข้อมูล' },
      { name: 'Robustness', use: 'model ยัง reliable เมื่อ input มี noise/perturbation/shift ที่เหมาะสม', cue: 'input เปลี่ยนนิดหน่อยยังไว้ใจได้ = Robustness', confuse: 'Fairness ดู subgroup outcomes' },
      { name: 'Environmental Sustainability', use: 'ลด compute/energy/resource impact โดยยังตอบ requirement ได้', cue: 'เล็กพอแล้ว อย่าใช้ใหญ่เกิน = Sustainability', confuse: 'ไม่ใช่ cost optimization อย่างเดียว' },
      { name: 'Human Oversight', use: 'ให้คน review/approve/intervene ก่อน high-impact action', cue: 'คนตรวจ ก่อน final = Oversight', confuse: 'Recourse คือช่องทางหลัง/รอบ decision ให้ผู้ได้รับผลกระทบขอทบทวน' },
      { name: 'Recourse', use: 'ช่องทางให้ผู้ได้รับผลกระทบ question/appeal/request review', cue: 'ขอทบทวน/อุทธรณ์ = Recourse', confuse: 'Transparency แค่แจ้งข้อมูล ไม่เท่ากับให้สิทธิ์ appeal' }
    ]
  },
  {
    id: 'aws-ai-services',
    title: 'AWS AI Services — งานนี้ใช้บริการไหน',
    summary: 'พวกนี้เป็น managed AI service สำเร็จรูป ให้จำจากชนิด input/output',
    items: [
      { name: 'Amazon Comprehend', use: 'NLP เช่น sentiment, entities, key phrases, language analysis', cue: 'Text เข้า → วิเคราะห์ภาษา = Comprehend', confuse: 'Transcribe = speech-to-text' },
      { name: 'Amazon Transcribe', use: 'speech/audio → text', cue: 'เสียงเป็นข้อความ = Transcribe', confuse: 'Polly ทำกลับกัน' },
      { name: 'Amazon Polly', use: 'text → lifelike speech', cue: 'ข้อความเป็นเสียง = Polly', confuse: 'Transcribe คือเสียงเป็นข้อความ' },
      { name: 'Amazon Translate', use: 'machine translation ระหว่างภาษา', cue: 'แปลภาษา = Translate', confuse: 'Comprehend วิเคราะห์ความหมาย/อารมณ์ ไม่ได้เป็น translator หลัก' },
      { name: 'Amazon Textract', use: 'extract text, forms, tables, key-value pairs จากเอกสาร/ภาพเอกสาร', cue: 'เอกสาร + table/form = Textract', confuse: 'Rekognition วิเคราะห์ภาพ/วิดีโอทั่วไป' },
      { name: 'Amazon Rekognition', use: 'image/video analysis เช่น objects, scenes, faces, labels', cue: 'ภาพ/วิดีโอมีอะไร = Rekognition', confuse: 'Textract = document text/forms/tables' },
      { name: 'Amazon Kendra', use: 'intelligent enterprise search/retrieval', cue: 'enterprise search = Kendra', confuse: 'Q/Quick ให้ assistant/workspace behavior มากกว่า search อย่างเดียว' },
      { name: 'Amazon Personalize', use: 'managed personalized recommendations', cue: 'แนะนำของเฉพาะบุคคล = Personalize', confuse: 'Comprehend วิเคราะห์ text' },
      { name: 'Amazon Lex', use: 'build conversational interfaces/chatbot ด้วย text/voice', cue: 'Conversational bot = Lex', confuse: 'Polly/Transcribe เป็น speech components ไม่ใช่ bot orchestration' }
    ]
  },
  {
    id: 'model-learning-types',
    title: 'Model / Learning Types — งานแบบนี้คืออะไร',
    summary: 'แยก classical ML, learning paradigm และ GenAI model family จากรูปแบบ input/output',
    items: [
      { name: 'Supervised Classification', use: 'มี labeled categories และต้องทำนาย class', cue: 'มี label + ทายหมวด = Classification', confuse: 'Regression ทายค่าต่อเนื่อง' },
      { name: 'Regression', use: 'ทำนายค่าตัวเลขต่อเนื่อง เช่น price/time/demand', cue: 'ทายตัวเลขต่อเนื่อง = Regression', confuse: 'Classification ทาย category' },
      { name: 'Clustering', use: 'ไม่มี label แล้วหา natural groups/patterns', cue: 'ไม่มี label + หากลุ่ม = Clustering', confuse: 'Classification ต้องมี labeled class' },
      { name: 'Self-supervised Learning', use: 'สร้าง training signal จากข้อมูลดิบเอง เช่น masked-token prediction', cue: 'ข้อมูล unlabeled แต่สร้าง target เอง = Self-supervised', confuse: 'Supervised ใช้ label จากภายนอก' },
      { name: 'Reinforcement Learning', use: 'agent เลือก action จาก state แล้วเรียนจาก reward/penalty', cue: 'State → Action → Reward = RL', confuse: 'ไม่ใช่ supervised labels ต่อ record' },
      { name: 'Large Language Model', use: 'understand/generate natural language', cue: 'งานภาษาแบบ generative = LLM', confuse: 'Embedding model เน้น representation ไม่ได้สร้างข้อความยาวเป็นหลัก' },
      { name: 'Embedding Model', use: 'สร้าง vector representation สำหรับ semantic similarity/retrieval', cue: 'Meaning → vector = Embedding Model', confuse: 'LLM สร้างภาษา; embedding model สร้าง vectors' },
      { name: 'Multimodal Model', use: 'รับ/เข้าใจ/สร้างมากกว่าหนึ่ง modality เช่น text+image', cue: 'หลาย modality = Multimodal', confuse: 'Text-only LLM รับภาษาเป็นหลัก' },
      { name: 'Diffusion Model', use: 'generative model ที่ค่อย ๆ denoise เพื่อสร้าง image/sample', cue: 'noise → image = Diffusion', confuse: 'Embedding model ไม่ได้สร้างภาพ' }
    ]
  },
  {
    id: 'evaluation-metrics',
    title: 'FM / RAG Evaluation — metric ไหนวัดอะไร',
    summary: 'อย่าสับสน reference similarity, semantic similarity, benchmark knowledge, RAG retrieval และ grounded generation',
    items: [
      { name: 'BLEU', use: 'reference-based n-gram overlap โดยนิยมกับ machine translation', cue: 'Translation overlap = BLEU', confuse: 'ROUGE พบได้บ่อยใน summarization' },
      { name: 'ROUGE', use: 'reference-based overlap metric ที่นิยมกับ summarization', cue: 'Summary vs reference = ROUGE', confuse: 'BERTScore เน้น semantic similarity มากกว่า exact overlap' },
      { name: 'BERTScore', use: 'semantic similarity ด้วย contextual embeddings ระหว่าง candidate กับ reference', cue: 'คำต่างแต่ความหมายใกล้ = BERTScore', confuse: 'BLEU/ROUGE พึ่ง overlap มากกว่า' },
      { name: 'MMLU', use: 'benchmark multiple-choice วัด broad academic knowledge across subjects', cue: 'ความรู้กว้างหลายวิชา = MMLU', confuse: 'ไม่ใช่ business KPI ของ application' },
      { name: 'LLM-as-a-Judge', use: 'ใช้ LLM evaluator ให้คะแนน output ตาม rubric ใน scale', cue: 'ประเมินหลายพัน answer ตาม rubric = LLM-as-a-Judge', confuse: 'ต้องระวัง judge/position bias และ validate evaluator' },
      { name: 'Retrieval Relevance', use: 'retrieved documents/context ตรง query หรือไม่', cue: 'ดึง docs ถูกเรื่องไหม = Retrieval Relevance', confuse: 'Faithfulness ดู final answer ยึด docs หรือไม่' },
      { name: 'Faithfulness / Groundedness', use: 'generated claims มี evidence ใน supplied context หรือไม่', cue: 'คำตอบแต่งเพิ่มไหม = Faithfulness', confuse: 'retrieval relevance อาจดีแต่ generation ยัง hallucinate ได้' },
      { name: 'Business / Application Metrics', use: 'task completion, satisfaction, conversion, handling time, ROI ฯลฯ', cue: 'โมเดลดีแล้วธุรกิจดีไหม = Business metrics', confuse: 'offline benchmark สูงไม่ได้รับประกัน business outcome' }
    ]
  }
);
