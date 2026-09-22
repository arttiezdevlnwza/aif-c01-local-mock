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