(() => {
  const bank = window.LOCAL_SET_19_BANK = window.LOCAL_SET_19_BANK || [];
  const domain = 2;
  const add = item => bank.push({ domain, ...item });

  add({
    task:'2.1', type:'single',
    question:'A legal research assistant receives long policy documents. The system first divides each document into smaller coherent passages, converts those passages into numeric representations that preserve semantic similarity, and stores them for later retrieval. The team wants to distinguish the two preprocessing concepts because they solve different parts of the workflow. Which pair of concepts is being used?',
    questionTh:'ผู้ช่วยวิจัยกฎหมายแบ่งเอกสารยาวเป็นช่วงข้อความที่สัมพันธ์กัน แล้วแปลงแต่ละช่วงเป็นตัวเลขที่เก็บ semantic similarity เพื่อใช้ retrieval ภายหลัง แนวคิดสองอย่างคืออะไร?',
    choices:{A:'Chunking and embeddings',B:'Tokenization and temperature',C:'Fine-tuning and distillation',D:'Guardrails and model evaluation'},
    answer:['A'],
    explanation:'ตอบ A — Chunking แบ่งเนื้อหาเป็น retrieval units และ embeddings แปลงข้อความเป็น vector ที่แทนความหมาย. B เป็น token units กับ generation randomness; C เป็น customization; D เป็น safety/evaluation.'
  });

  add({
    task:'2.1', type:'matching',
    question:'A company is comparing several generative AI model families for different products. One product must understand text together with images, another must create new photorealistic images from text, a third focuses on natural-language generation, and a fourth is used to represent semantic similarity for retrieval. Match each requirement with the MOST appropriate model concept.',
    questionTh:'บริษัทกำลังเทียบ model families หลายแบบสำหรับ product ต่างกัน ทั้ง text+image, สร้างภาพจาก text, สร้างภาษา และ semantic retrieval ให้จับคู่ requirement กับ model concept ที่เหมาะสม',
    choices:{A:'Analyze text and images together in one interaction',B:'Generate a new image from a textual description',C:'Generate and understand natural-language documents',D:'Represent semantic similarity for retrieval'},
    matches:{'1':'Multimodal model','2':'Diffusion model','3':'Large language model','4':'Embedding model'},
    answer:['A:1','B:2','C:3','D:4'],
    explanation:'A→Multimodal model เพราะใช้หลาย modality, B→Diffusion model เพราะสร้างภาพผ่าน denoising, C→Large language model สำหรับภาษา, D→Embedding model สำหรับ representation และ semantic similarity.'
  });

  add({
    task:'2.1', type:'single',
    question:'A customer-support application sends the same 20-page operating manual with every request and then appends a different user question. The manual changes only a few times per year, while the application handles thousands of requests each day. The company wants to reduce repetitive processing of the shared prefix without changing the model weights. Which concept MOST directly addresses this pattern?',
    questionTh:'แอป customer support ส่ง manual 20 หน้าชุดเดิมไปกับทุก request แล้วต่อด้วยคำถามใหม่ manual เปลี่ยนน้อยแต่ request เยอะ ต้องการลดการประมวลผล prefix ซ้ำโดยไม่เปลี่ยน weights ควรใช้แนวคิดใด?',
    choices:{A:'Prompt caching',B:'Continued pre-training',C:'Model distillation',D:'Retrieval reranking'},
    answer:['A'],
    explanation:'ตอบ A — Prompt caching reuse ส่วน prefix/context ที่ซ้ำเพื่อลด repeated processing, cost และ latency. B/C เปลี่ยนหรือสร้าง model artifact; D จัดอันดับ retrieval results และไม่แก้ prefix ซ้ำ.'
  });

  add({
    task:'2.1', type:'multiple',
    question:'A foundation model application bills usage according to the number of tokens processed. A team keeps adding large conversation histories and long reference text to every request even when much of it is no longer relevant. Response quality is unchanged, but cost and latency continue to rise. Which TWO actions are MOST appropriate? (Select TWO.)',
    questionTh:'แอป FM คิดค่าใช้จ่ายตาม token แต่ทีมใส่ chat history และ reference text ยาว ๆ ทุก request แม้หลายส่วนไม่เกี่ยวข้อง ทำให้ cost/latency เพิ่มโดย quality ไม่ดีขึ้น ควรทำอะไร 2 อย่าง?',
    choices:{A:'Retrieve only relevant context for the current request',B:'Summarize or compact older context when appropriate',C:'Increase maximum output tokens for every request',D:'Duplicate the system instructions in multiple places',E:'Raise temperature to reduce input token count'},
    answer:['A','B'],
    explanation:'ตอบ A, B — context engineering ควรเลือก context ที่เกี่ยวข้องและ compact/summarize ส่วนเก่าเพื่อลด token/noise. C เพิ่ม output budget, D เพิ่ม input ซ้ำ, E temperature ไม่ได้ลด input token.'
  });

  add({
    task:'2.1', type:'ordering',
    question:'A team is documenting the lifecycle of a foundation model solution. It begins by selecting suitable data and a model approach, then customizes or trains as needed, evaluates the result, deploys it, and collects feedback from real usage. The team wants the lifecycle written in the correct high-level order rather than as implementation-specific console steps. Select and order the FIVE stages from earliest to latest.',
    questionTh:'ทีมกำลังเขียน FM lifecycle ระดับแนวคิด ตั้งแต่ data/model selection ไป training/customization, evaluation, deployment และ feedback โดยไม่ลงรายละเอียด console step จงเรียง 5 ขั้นตอน',
    choices:{A:'Deploy the model or application',B:'Evaluate the model',C:'Select data and the model approach',D:'Collect feedback and iterate',E:'Pre-train or customize the model as needed'},
    answer:['C','E','B','A','D'],
    explanation:'ลำดับคือ Select data/model → Pre-train/customize → Evaluate → Deploy → Feedback/iterate. เป็น lifecycle เชิงแนวคิด ไม่ใช่ implementation-specific deployment procedure.'
  });

  add({
    task:'2.1', type:'multiple',
    question:'A company uses several specialized agents to process complex support cases. One agent researches account history, another checks policy, and a coordinator assigns work and combines the results. The agents also need a standard way to connect to external tools and data sources without defining a different integration pattern for every tool. Which TWO concepts are MOST relevant? (Select TWO.)',
    questionTh:'บริษัทใช้ specialized agents หลายตัว โดยมี coordinator แจกงานและรวมผล และต้องการมาตรฐานเชื่อม agents กับ tools/data ภายนอก ข้อใดเกี่ยวข้องมากที่สุด 2 ข้อ?',
    choices:{A:'Orchestrator-worker multi-agent pattern',B:'Model Context Protocol (MCP)',C:'Diffusion sampling',D:'Batch Transform',E:'Feature scaling'},
    answer:['A','B'],
    explanation:'ตอบ A, B — Orchestrator-worker อธิบายการกระจายงาน/รวมผลระหว่างหลาย agents และ MCP เป็นมาตรฐานเชื่อม AI applications/agents กับ tools/data. C/D/E เป็นคนละบริบท.'
  });

  add({
    task:'2.2', type:'single',
    question:'A marketing team uses the same prompt several times and notices that a generative model can produce different valid wording on different runs. The team initially assumes the service is malfunctioning because the input has not changed. They need to identify the normal limitation before deciding whether stricter controls are required. Which GenAI characteristic BEST explains the behavior?',
    questionTh:'ทีม marketing ใช้ prompt เดิมหลายครั้งแต่ได้ wording ต่างกัน แม้แต่ละคำตอบจะยัง valid และ input ไม่เปลี่ยน ต้องการเข้าใจว่าพฤติกรรมนี้เป็น limitation ปกติของ GenAI อะไร?',
    choices:{A:'Nondeterminism',B:'Data residency',C:'Overfitting',D:'Data lineage'},
    answer:['A'],
    explanation:'ตอบ A — GenAI สามารถให้ output ต่างกันจาก prompt เดิมได้เพราะ nondeterministic generation. B คือสถานที่จัดเก็บ/ประมวลผลข้อมูล, C คือ train ดีแต่ generalize แย่, D คือที่มา/เส้นทางข้อมูล.'
  });

  add({
    task:'2.2', type:'multiple',
    question:'A company wants to use GenAI for a public-facing assistant. The model is highly adaptable and can answer varied questions, but the legal team is concerned that fluent responses may contain invented factual claims and that complex model behavior can be difficult to interpret. The team must recognize both advantages and limitations before launch. Which TWO are limitations that require mitigation? (Select TWO.)',
    questionTh:'บริษัทต้องการใช้ GenAI เป็น public assistant แม้จะ adaptable และตอบได้หลากหลาย แต่ legal team กังวล fluent response ที่อาจแต่ง factual claim และ behavior ที่อธิบายยาก ข้อใดเป็น limitations ที่ต้อง mitigate 2 ข้อ?',
    choices:{A:'Hallucination',B:'Limited interpretability',C:'Ability to generate content',D:'Conversational responsiveness',E:'Adaptability across tasks'},
    answer:['A','B'],
    explanation:'ตอบ A, B — Hallucination และ limited interpretability เป็นข้อจำกัด/ความเสี่ยง. C, D, E เป็นข้อดีหรือ capability ของ GenAI ไม่ใช่ limitation ตาม requirement.'
  });

  add({
    task:'2.2', type:'single',
    question:'An international customer-support company is selecting a foundation model for a new assistant. Users will send both text and images in Thai and English, responses must usually arrive within two seconds, and the company has strict compliance requirements in its operating regions. The team wants to compare models using criteria tied directly to the workload. Which set of factors is MOST appropriate?',
    questionTh:'บริษัท customer support ระหว่างประเทศกำลังเลือก FM ผู้ใช้ส่งทั้ง text+image ภาษาไทย/อังกฤษ ต้องตอบภายในราว 2 วินาทีและมี compliance requirement ตามภูมิภาค ควรใช้ factor ใดในการเลือกโมเดล?',
    choices:{A:'Modality, multilingual capability, latency, compliance, and cost',B:'Model release date and vendor popularity only',C:'Maximum parameter count regardless of latency',D:'Number of developers already using the model'},
    answer:['A'],
    explanation:'ตอบ A — model selection ต้องดู modality, language, latency, compliance, cost และ requirement อื่นร่วมกัน. B/C/D ใช้ปัจจัยเดียวหรือปัจจัยที่ไม่สะท้อน workload จึงไม่พอสำหรับการตัดสินใจ.'
  });



  add({
    task:'2.2', type:'single',
    question:'A company is considering GenAI to calculate monthly payroll from fixed salary tables and tax formulas. The same employee inputs must produce the same auditable result, and the formulas already define the exact answer. The company is attracted to the conversational interface but wants to choose technology based on the actual business requirement. Which approach is MOST appropriate?',
    questionTh:'บริษัทพิจารณา GenAI เพื่อคำนวณ payroll รายเดือนจาก salary table และสูตรภาษี โดย input เดิมต้องได้ผลเดิมและสูตรกำหนดคำตอบแน่นอน แม้ชอบ conversational UI ควรเลือกแนวทางใด?',
    choices:{A:'Use deterministic application logic for the payroll calculation',B:'Use a high-temperature foundation model',C:'Fine-tune a model on historical payslips',D:'Use an autonomous agent to infer the tax rules'},
    answer:['A'],
    explanation:'ตอบ A — งานมีสูตรแน่นอนและต้อง audit/reproduce จึงใช้ deterministic logic. B เพิ่มความแปรผัน, C/D เพิ่ม ML/GenAI complexity โดยไม่จำเป็นและไม่รับประกันผล exact.'
  });

  add({
    task:'2.3', type:'single',
    question:'A product team wants to build a generative AI application quickly by accessing multiple foundation models through managed APIs. The team also wants managed features for knowledge bases, guardrails, agents, prompt management, and model evaluation without operating the underlying model-serving infrastructure. Which AWS service BEST fits the requirement?',
    questionTh:'ทีม product ต้องการสร้าง GenAI app ผ่าน managed API ที่เข้าถึงหลาย FM และต้องการ Knowledge Bases, Guardrails, Agents, Prompt Management, Model Evaluation โดยไม่ดูแล model-serving infrastructure เอง ควรใช้บริการใด?',
    choices:{A:'Amazon Bedrock',B:'Amazon SageMaker AI',C:'Amazon EC2',D:'AWS Glue'},
    answer:['A'],
    explanation:'ตอบ A — Amazon Bedrock เป็น managed GenAI platform พร้อมหลาย FM และ feature ระดับ application ที่ระบุ. B ให้ control ลึกกับ ML lifecycle/train/deploy, C เป็น compute, D เน้น data integration/catalog/ETL.'
  });

  add({
    task:'2.3', type:'single',
    question:'A research team must train and tune custom machine learning models, control training jobs and deployment choices, and manage the broader ML lifecycle. Another team mainly wants ready-to-use foundation models and managed GenAI application features. The organization wants to choose the service that fits the research team\'s deeper level of control. Which AWS service is MOST appropriate for the research team?',
    questionTh:'ทีมวิจัยต้อง train/tune custom ML models คุม training/deployment และ ML lifecycle ลึกกว่า ขณะที่อีกทีมต้องการ ready FM และ managed GenAI feature สำหรับทีมวิจัยควรเลือก service ใด?',
    choices:{A:'Amazon Bedrock',B:'Amazon SageMaker AI',C:'Amazon Quick',D:'Amazon Polly'},
    answer:['B'],
    explanation:'ตอบ B — SageMaker AI เหมาะกับ custom ML lifecycle และ control ด้าน training/tuning/deployment. A เหมาะ managed FM application platform, C เป็น business AI workspace, D เป็น text-to-speech.'
  });

  add({
    task:'2.3', type:'single',
    question:'A development organization wants an AI-assisted engineering workflow where teams define requirements, design, and implementation tasks in a structured specification-driven process. The tool should also support project rules and context that guide the agent across development work, rather than acting only as a general business knowledge assistant. Which AWS offering is the BEST match?',
    questionTh:'องค์กรพัฒนาซอฟต์แวร์ต้องการ AI-assisted workflow แบบ spec-driven ที่มี requirements→design→tasks และมี project rules/context ช่วยกำกับ agent ไม่ใช่ business knowledge assistant ทั่วไป ควรใช้ offering ใด?',
    choices:{A:'Amazon Q Business',B:'Kiro',C:'Amazon Quick',D:'SageMaker JumpStart'},
    answer:['B'],
    explanation:'ตอบ B — Kiro เน้น spec-driven development พร้อมแนวคิด Specs/Steering/Hooks/MCP. A เป็น enterprise knowledge assistant, C เป็น business AI workspace/workflows, D เป็น curated model/solution hub ใน SageMaker.'
  });

  add({
    task:'2.3', type:'single',
    question:'A team has built agents with its preferred framework and model provider. For production, it needs managed capabilities to run and scale agents, expose existing APIs as tools, handle delegated identity, preserve memory, and observe traces and tool calls. The team does not want to rewrite the agents for one specific framework. Which AWS service family BEST fits?',
    questionTh:'ทีมสร้าง agents ด้วย framework/model ที่เลือกเอง แล้วต้องการ managed production capabilities สำหรับ run/scale, expose APIs เป็น tools, identity, memory และ observability โดยไม่อยากผูกกับ framework เดียว ควรใช้บริการใด?',
    choices:{A:'Amazon Bedrock AgentCore',B:'SageMaker Ground Truth',C:'Amazon Kendra',D:'AWS Artifact'},
    answer:['A'],
    explanation:'ตอบ A — AgentCore มี Runtime, Gateway, Identity, Memory, Observability และบริการประกอบสำหรับ production agents และรองรับหลาย framework/model. B ทำ labeling, C search, D compliance reports.'
  });

  add({
    task:'2.3', type:'single',
    question:'A company has two GenAI workloads. Workload X has highly variable demand and can tolerate capacity being allocated per request. Workload Y runs at a consistently high volume and needs predictable dedicated capacity. The architecture team wants to match each workload to the most appropriate Bedrock capacity approach while considering cost tradeoffs. Which pairing is correct?',
    questionTh:'บริษัทมี GenAI workload สองแบบ X demand แปรผัน ส่วน Y volume สูงสม่ำเสมอและต้องการ dedicated predictable capacity ต้องจับคู่ capacity approach อย่างไร?',
    choices:{A:'X: On-Demand; Y: Provisioned Throughput',B:'X: Provisioned Throughput; Y: On-Demand',C:'X: Batch Transform; Y: Data Wrangler',D:'X: Ground Truth; Y: A2I'},
    answer:['A'],
    explanation:'ตอบ A — On-Demand เหมาะ traffic ที่แปรผัน ส่วน Provisioned Throughput เหมาะ steady/high predictable usage ที่ต้องการ capacity คงที่. B สลับกัน; C/D เป็นคนละบริการ/บริบท.'
  });

  add({
    task:'2.3', type:'multiple',
    question:'A business operations organization is comparing AI tools for different employee groups. Business users need research with citations and routine workflow automation, while developers need coding assistance and AWS development support. Which TWO pairings are correct? (Select TWO.)',
    questionTh:'องค์กรกำลังเลือก AI tools ให้คนสองกลุ่ม โดย business users ต้องการ research+citations/workflow automation ส่วน developers ต้องการ coding/AWS development assistance ข้อใดจับคู่ถูก 2 ข้อ?',
    choices:{A:'Business users — Amazon Quick',B:'Developers — Amazon Q Developer',C:'Business users — Amazon Transcribe',D:'Developers — AWS Artifact',E:'Business users — SageMaker Ground Truth'},
    answer:['A','B'],
    explanation:'ตอบ A, B — Amazon Quick มุ่ง business research/workflows/automation และ Amazon Q Developer มุ่งงานพัฒนา/AWS assistance. C เป็น speech-to-text, D compliance documents, E data labeling.'
  });
})();