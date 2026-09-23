(() => {
  const bank = window.LOCAL_SET_21_22_BANK = window.LOCAL_SET_21_22_BANK || [];
  const add = x => bank.push({ domain: 2, ...x });

  add({
    task:'2.2', type:'multiple', target:'weakness: genai-capabilities-vs-limitations',
    v:{
      21:["A product team is documenting what generative AI is good at and what still requires mitigation. Which THREE characteristics are limitations or risks rather than core capabilities? (Select THREE.)","ทีม product กำลังแยกสิ่งที่ GenAI ทำได้ดีกับสิ่งที่ยังต้องมีมาตรการลดความเสี่ยง ข้อใด 3 อย่างเป็น limitation/risk มากกว่า capability?"],
      22:["A business sponsor asks why a generative AI assistant still needs controls even though it can write, summarize, and converse well. Which THREE characteristics BEST explain the remaining limitations? (Select THREE.)","ผู้สนับสนุนธุรกิจถามว่าทำไม GenAI assistant ยังต้องมี controls ทั้งที่สร้างข้อความ สรุป และสนทนาได้ดี ข้อใด 3 อย่างอธิบาย limitations ได้ตรงที่สุด?"]
    },
    choices:{A:'Hallucination',B:'Nondeterministic outputs',C:'Limited interpretability',D:'Ability to generate new content',E:'Conversational interaction',F:'Adaptability through prompting'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Hallucination คือการสร้างข้อความที่ฟังน่าเชื่อแต่ไม่มีหลักฐานหรือไม่ถูกต้อง.',
      '✅ B — Nondeterminism ทำให้ prompt เดิมอาจได้ wording หรือรายละเอียดต่างกันในแต่ละครั้ง.',
      '✅ C — Limited interpretability ทำให้การอธิบายกลไกภายในและเหตุผลของ output ทำได้ยาก.',
      '❌ D — การสร้างเนื้อหาใหม่เป็น capability หลักของ GenAI.',
      '❌ E — การสนทนาโต้ตอบเป็น capability ไม่ใช่ limitation.',
      '❌ F — การปรับพฤติกรรมผ่าน prompting เป็นข้อได้เปรียบด้าน adaptability.',
      '🧠 จำสั้น ๆ — Generate / adapt / converse = capability; hallucination / nondeterminism / interpretability = limitation.'
    ]
  });

  add({
    task:'2.1', type:'single', target:'weakness: model-families',
    v:{
      21:["A marketing team enters a text description and expects the system to create a brand-new product image that did not previously exist. Which model family is MOST closely associated with this generative task?","ทีม marketing ป้อนคำอธิบายเป็นข้อความและต้องการให้ระบบสร้างภาพสินค้าใหม่ที่ไม่เคยมีมาก่อน model family ใดเกี่ยวข้องกับงานนี้มากที่สุด?"],
      22:["A creative application starts from noise and iteratively produces a new image that matches a user's text prompt. Which model family BEST matches this behavior?","แอปสร้างสรรค์เริ่มจาก noise แล้วค่อย ๆ สร้างภาพใหม่ให้ตรงกับ text prompt ของผู้ใช้ model family ใดตรงกับพฤติกรรมนี้ที่สุด?"]
    },
    choices:{A:'Diffusion model',B:'Image classifier',C:'Embedding model',D:'Regression model'},
    answer:['A'],
    exp:[
      '✅ A — Diffusion models เป็น model family ที่ใช้สร้างภาพใหม่จาก prompt โดยกระบวนการ denoising.',
      '❌ B — Image classifier จัดหมวดหมู่ภาพที่มีอยู่แล้ว ไม่ได้สร้างภาพใหม่เป็นหลัก.',
      '❌ C — Embedding model สร้าง vector representation เพื่อ similarity/retrieval.',
      '❌ D — Regression ทำนายค่าตัวเลขต่อเนื่อง.',
      '🧠 จำสั้น ๆ — Text → ภาพใหม่ = Diffusion; ภาพเดิม → label = Classifier.'
    ]
  });

  add({
    task:'2.1', type:'ordering', target:'undercovered: fm-lifecycle',
    v:{
      21:["A team is documenting the high-level lifecycle of a foundation-model solution, from choosing data and a model approach through customization, evaluation, deployment, and feedback. Order the FIVE stages from earliest to latest.","ทีมกำลังเขียน lifecycle ระดับภาพรวมของ solution ที่ใช้ foundation model ตั้งแต่เลือกข้อมูล/โมเดล ไปจนปรับแต่ง ประเมิน deploy และรับ feedback จงเรียง 5 ขั้นตอนจากต้นไปปลาย"],
      22:["A governance review asks for the conceptual FM lifecycle rather than console steps. Put these activities in the order that reflects how a model solution is selected, customized, validated, released, and improved.","การ review ด้าน governance ต้องการ lifecycle เชิงแนวคิดของ FM ไม่ใช่ขั้นตอนใน console จงเรียงกิจกรรมให้สะท้อนการเลือก ปรับแต่ง ตรวจสอบ นำขึ้นใช้ และปรับปรุง"]
    },
    choices:{A:'Evaluate the model or application',B:'Collect feedback and iterate',C:'Select suitable data and model approach',D:'Deploy the approved model or application',E:'Pre-train or customize as needed'},
    answer:['C','E','A','D','B'],
    exp:[
      '✅ ลำดับที่ถูก — Select data/model → Pre-train or customize → Evaluate → Deploy → Feedback/iterate.',
      '1) เลือกข้อมูลและ model approach ให้เหมาะกับ requirement.',
      '2) Train/customize เมื่อจำเป็น.',
      '3) Evaluate ก่อน production เพื่อยืนยันคุณภาพและความเสี่ยง.',
      '4) Deploy หลังผ่านเกณฑ์.',
      '5) เก็บ feedback จากการใช้งานจริงแล้ววนกลับไปปรับปรุง.',
      '🧠 จำสั้น ๆ — Select → Customize → Evaluate → Deploy → Feedback.'
    ]
  });

  add({
    task:'2.1', type:'matching', target:'undercovered: agent-memory-types',
    v:{
      21:["An AI agent needs different kinds of memory. Match each memory type with the description that BEST fits it.","AI agent ต้องใช้ความจำหลายแบบ ให้จับคู่ memory type แต่ละแบบกับคำอธิบายที่ตรงที่สุด"],
      22:["A support agent remembers the current conversation, customer preferences across sessions, general facts, and a specific past incident. Match each example with the MOST appropriate memory concept.","support agent ต้องจำบทสนทนาปัจจุบัน ความชอบข้าม session ข้อเท็จจริงทั่วไป และเหตุการณ์เฉพาะในอดีต ให้จับคู่กับ memory concept ที่เหมาะที่สุด"]
    },
    choices:{A:'Short-term / working memory',B:'Long-term memory',C:'Semantic memory',D:'Episodic memory'},
    matches:{'1':'Context needed for the current interaction or active task','2':'Information preserved across sessions or interactions','3':'Facts, concepts, and stable preferences represented as knowledge','4':'A specific past event or experience and what happened'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ Short-term / working memory → บริบทที่ใช้กับงานหรือ session ปัจจุบัน.',
      '✅ Long-term memory → ข้อมูลที่ต้องคงอยู่ข้าม session.',
      '✅ Semantic memory → ข้อเท็จจริง ความรู้ หรือ preference ที่เก็บเป็นความหมายทั่วไป.',
      '✅ Episodic memory → เหตุการณ์หรือประสบการณ์เฉพาะที่เกิดขึ้นในอดีต.',
      '🧠 จำสั้น ๆ — Semantic = “รู้อะไร”; Episodic = “เคยเกิดอะไร”.'
    ]
  });

  add({
    task:'2.1', type:'single', target:'undercovered: mcp-host-client-server',
    v:{
      21:["A company adopts Model Context Protocol (MCP). The AI desktop application creates a component that maintains a connection to one external MCP server, while that server exposes tools and resources. What is the connecting component inside the application called?","บริษัทใช้ Model Context Protocol (MCP) โดยแอป AI สร้าง component ที่เชื่อมต่อกับ MCP server ภายนอกหนึ่งตัว และ server นั้นเปิด tools/resources ให้ใช้ component ที่เชื่อมต่อภายในแอปเรียกว่าอะไร?"],
      22:["In an MCP architecture, an AI application is the host. It creates one connection component for each server it communicates with. Which MCP role is that connection component?","ในสถาปัตยกรรม MCP แอป AI ทำหน้าที่เป็น host และสร้าง component สำหรับเชื่อมต่อกับแต่ละ server component ที่เป็นตัวเชื่อมนี้มีบทบาทใด?"]
    },
    choices:{A:'MCP Client',B:'MCP Resource',C:'MCP Prompt',D:'Foundation Model'},
    answer:['A'],
    exp:[
      '✅ A — MCP Client เป็น component ที่อยู่ฝั่ง host และจัดการ connection/session กับ MCP server.',
      '❌ B — Resource คือข้อมูลหรือ context ที่ server เปิดให้ client อ่านได้.',
      '❌ C — Prompt คือ template/instruction ที่ server สามารถเปิดให้เรียกใช้ซ้ำได้.',
      '❌ D — Foundation model อาจเป็นส่วนหนึ่งของ AI application แต่ไม่ใช่ MCP connection role.',
      '🧠 จำสั้น ๆ — Host มี Client; Client คุยกับ Server; Server เปิด Resource/Tool/Prompt.'
    ]
  });

  add({
    task:'2.1', type:'multiple', target:'stable-retest: multi-agent-patterns',
    v:{
      21:["A complex claims workflow uses a lead agent that decomposes a case, delegates research and policy checks to specialist agents in parallel, then combines their findings into one response. The agents also need a standard protocol to reach external tools and data. Which TWO concepts BEST match? (Select TWO.)","workflow เคลมใช้ lead agent แบ่งงาน ส่ง research/policy checks ให้ specialist agents ทำขนานกัน แล้วรวมผล พร้อมต้องมี protocol มาตรฐานเชื่อม tools/data ภายนอก ข้อใด 2 อย่างตรงที่สุด?"],
      22:["A coordinator receives a goal, assigns subtasks to several specialized agents, and merges their results. The system also wants a standard connection layer for tools rather than custom integration per tool. Which TWO concepts are MOST relevant? (Select TWO.)","coordinator รับ goal แจก subtasks ให้ specialized agents หลายตัวและรวมผล อีกทั้งต้องการมาตรฐานเชื่อม tools แทนการ integration แบบเฉพาะแต่ละตัว ข้อใด 2 อย่างเกี่ยวข้องที่สุด?"]
    },
    choices:{A:'Orchestrator-worker multi-agent pattern',B:'Model Context Protocol (MCP)',C:'Single agent with multiple tools only',D:'Diffusion sampling',E:'Batch inference'},
    answer:['A','B'],
    exp:[
      '✅ A — Orchestrator-worker มี coordinator/lead แจกงานให้ specialist workers แล้วรวมผล.',
      '✅ B — MCP เป็น protocol สำหรับเชื่อม AI applications/agents กับ external tools และ data sources.',
      '❌ C — Agent เดียวเรียกหลาย tools ยังไม่ใช่ multi-agent เพราะ reasoning roles ยังอยู่ใน agent ตัวเดียว.',
      '❌ D — Diffusion sampling เกี่ยวกับ generative model เช่นภาพ ไม่ใช่ coordination pattern.',
      '❌ E — Batch inference เป็นรูปแบบการประมวลผล ไม่ใช่การประสานหลาย agents.',
      '🧠 จำสั้น ๆ — หัวหน้าแจกงาน = Orchestrator-worker; เชื่อม tools แบบมาตรฐาน = MCP.'
    ]
  });

  add({
    task:'2.1', type:'single', target:'confidence: context-engineering',
    v:{
      21:["A support assistant already has a good base model. The team wants to decide which system instructions, relevant chat history, retrieved documents, and tool results should be included and in what order for each request. Which discipline is this?","support assistant มี base model ที่ดีอยู่แล้ว ทีมต้องเลือกว่าจะส่ง system instructions, chat history ที่เกี่ยวข้อง, retrieved documents และ tool results อะไรบ้างและเรียงอย่างไรในแต่ละ request แนวคิดนี้เรียกว่าอะไร?"],
      22:["A model's context window is filling with stale conversation history and irrelevant retrieved text. The team wants to retrieve selectively, summarize older content, and structure the remaining information before each call. What is the team practicing?","context window ของโมเดลเต็มไปด้วย history เก่าและ retrieved text ที่ไม่เกี่ยวข้อง ทีมต้องการเลือก retrieve, สรุปข้อมูลเก่า และจัดโครง context ใหม่ก่อนแต่ละ call กำลังทำแนวคิดใด?"]
    },
    choices:{A:'Context engineering',B:'Model distillation',C:'Data labeling',D:'Batch inference'},
    answer:['A'],
    exp:[
      '✅ A — Context engineering คือการคัด จัด และเรียงข้อมูลที่โมเดลเห็นใน request เพื่อให้ตอบได้ดีขึ้น.',
      '❌ B — Distillation ถ่ายทอดพฤติกรรมจาก teacher model ไป student model.',
      '❌ C — Data labeling สร้าง labels สำหรับ training data.',
      '❌ D — Batch inference คือการประมวลผลแบบ offline เป็นชุด.',
      '🧠 จำสั้น ๆ — Prompt engineering = เขียนคำสั่ง; Context engineering = จัดว่าโมเดล “เห็นอะไรบ้างตอนนี้”.'
    ]
  });

  add({
    task:'2.2', type:'single', target:'confidence: amazon-quick-family',
    v:{
      21:["A finance department wants an AI-driven business process that runs for hours, branches based on conditions, pauses for manager approval, handles errors, and continues across several enterprise applications. Which Amazon Quick capability BEST fits?","ฝ่ายการเงินต้องการ business process ที่รันได้นาน มี branching, หยุดรอ manager approval, จัดการ error และทำงานข้ามหลาย enterprise applications ควรใช้ Amazon Quick capability ใด?"],
      22:["An organization wants to automate a high-volume onboarding process across HR, identity, and finance systems. The process includes approvals, exception handling, and contextual decisions rather than a short personal productivity flow. Which Amazon Quick capability is the closest match?","องค์กรต้อง automate onboarding ปริมาณมากข้ามระบบ HR, identity และ finance โดยมี approvals, exception handling และ contextual decisions ไม่ใช่ flow สั้น ๆ สำหรับงานส่วนตัว ควรเลือก Amazon Quick capability ใด?"]
    },
    choices:{A:'Quick Research',B:'Quick Flows',C:'Quick Automate',D:'Quick Sight'},
    answer:['C'],
    exp:[
      '✅ C — Quick Automate เหมาะ business process ระดับองค์กรที่ซับซ้อน ยาว มี branching, approvals และ error handling.',
      '❌ A — Quick Research เน้นค้นคว้าและสร้างรายงานพร้อมแหล่งอ้างอิง.',
      '❌ B — Quick Flows เหมาะงานซ้ำ ๆ ที่เบากว่าในระดับ personal/team workflow.',
      '❌ D — Quick Sight ใช้ BI, visualization และ dashboards.',
      '🧠 จำสั้น ๆ — Research = ค้นคว้า; Flows = routine; Automate = enterprise process; Sight = BI.'
    ]
  });

  add({
    task:'2.3', type:'multiple', target:'confidence: agentcore-components',
    v:{
      21:["A production agent needs three controls: a managed place to run agent sessions, a way to connect APIs as callable tools, and deterministic authorization rules that can deny sensitive tool actions regardless of the model's reasoning. Which THREE AgentCore capabilities match? (Select THREE.)","production agent ต้องการ 3 อย่าง: ที่รัน agent sessions แบบ managed, ช่องทางเชื่อม API เป็น callable tools และกฎ authorization แบบ deterministic ที่ปฏิเสธ action สำคัญได้โดยไม่ขึ้นกับ reasoning ของโมเดล ควรใช้ AgentCore capabilities ใด 3 ข้อ?"],
      22:["An enterprise agent platform must host agents, expose internal APIs as tools, and enforce allow/deny decisions before a sensitive operation is executed. Which THREE Amazon Bedrock AgentCore components directly map to those needs? (Select THREE.)","agent platform ระดับองค์กรต้อง host agents, เปิด internal APIs เป็น tools และบังคับ allow/deny ก่อน action สำคัญถูก execute ควรใช้ AgentCore components ใด 3 ข้อ?"]
    },
    choices:{A:'Runtime',B:'Gateway',C:'Policy',D:'Memory',E:'Observability',F:'Identity'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Runtime ใช้ host และรัน agent/session.',
      '✅ B — Gateway ช่วยเชื่อม APIs หรือ external capabilities ให้ agent เรียกเป็น tools.',
      '✅ C — Policy ใช้กำหนดกฎ authorization แบบ deterministic ว่า action ใดอนุญาตหรือปฏิเสธ.',
      '❌ D — Memory เก็บ context/ข้อมูลที่ต้องจำ ไม่ได้เป็น authorization layer.',
      '❌ E — Observability ใช้ traces/metrics/debugging ไม่ได้ตัดสิน allow/deny.',
      '❌ F — Identity จัดการ authentication/credentials แต่โจทย์ถามกฎ authorization ของ action โดยตรง.',
      '🧠 จำสั้น ๆ — Run = Runtime; Tools = Gateway; Who = Identity; Can do what = Policy.'
    ]
  });

  add({
    task:'2.3', type:'multiple', target:'undercovered: agentcore-tools-evaluations',
    v:{
      21:["A team wants an agent to navigate web pages, execute code in a managed sandbox, and automatically assess task completion and tool-use quality. Which THREE Amazon Bedrock AgentCore capabilities are MOST relevant? (Select THREE.)","ทีมต้องการให้ agent ใช้งานเว็บ รันโค้ดใน sandbox แบบ managed และประเมินอัตโนมัติว่า agent ทำ task สำเร็จและใช้ tool ได้ถูกต้องหรือไม่ ควรใช้ AgentCore capabilities ใด 3 ข้อ?"],
      22:["A research agent must interact with websites, run calculations or scripts safely, and be scored after sessions for response quality and correct tool use. Which THREE AgentCore capabilities directly support these needs? (Select THREE.)","research agent ต้องโต้ตอบกับเว็บไซต์ รันการคำนวณหรือ script อย่างปลอดภัย และถูกให้คะแนนหลัง session เรื่อง response quality กับการใช้ tool ควรใช้ AgentCore capabilities ใด 3 ข้อ?"]
    },
    choices:{A:'Browser',B:'Code Interpreter',C:'Evaluations',D:'Memory',E:'Policy',F:'Identity'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Browser เป็น managed tool สำหรับ web interaction.',
      '✅ B — Code Interpreter ใช้ execute code ใน environment ที่จัดการให้.',
      '✅ C — Evaluations ใช้ประเมิน agent เช่น response quality, task completion และ tool usage.',
      '❌ D — Memory ใช้เก็บข้อมูลข้าม interaction ไม่ได้ทำ web browsing/code execution/evaluation.',
      '❌ E — Policy ใช้ authorization rules สำหรับ actions.',
      '❌ F — Identity ใช้ authentication และ delegated credentials.',
      '🧠 จำสั้น ๆ — Web = Browser; Run code = Code Interpreter; Score agent = Evaluations.'
    ]
  });

  add({
    task:'2.3', type:'single', target:'confidence: bedrock-capability-map',
    v:{
      21:["An internal assistant must answer from frequently updated company documents and show source citations. The company does not want to retrain the model whenever documents change. Which Amazon Bedrock capability BEST matches this requirement?","internal assistant ต้องตอบจากเอกสารบริษัทที่อัปเดตบ่อยและแสดง source citations โดยไม่ retrain โมเดลทุกครั้งที่เอกสารเปลี่ยน ควรใช้ Amazon Bedrock capability ใด?"],
      22:["A policy assistant needs managed retrieval and grounding over approved documents so answers can cite current sources. Which Bedrock feature is designed for this pattern?","policy assistant ต้องการ managed retrieval/grounding บนเอกสารที่อนุมัติแล้ว เพื่อให้คำตอบอ้างแหล่งข้อมูลปัจจุบันได้ Bedrock feature ใดออกแบบมาสำหรับ pattern นี้?"]
    },
    choices:{A:'Knowledge Bases for Amazon Bedrock',B:'Amazon Bedrock Guardrails',C:'Amazon Bedrock Model Evaluation',D:'Prompt Management only'},
    answer:['A'],
    exp:[
      '✅ A — Knowledge Bases รองรับ managed RAG เพื่อ retrieve, ground และอ้างอิงข้อมูลจากแหล่งความรู้.',
      '❌ B — Guardrails เน้น safety/control ของ input-output ไม่ใช่ระบบ retrieval หลัก.',
      '❌ C — Model Evaluation ใช้วัดคุณภาพของโมเดลหรือ output.',
      '❌ D — Prompt Management จัดการ prompt templates/versions แต่ไม่ได้ดึงเอกสารล่าสุดมา ground คำตอบ.',
      '🧠 จำสั้น ๆ — เอกสารองค์กร + current facts + citations = Knowledge Bases / RAG.'
    ]
  });

  add({
    task:'2.3', type:'single', target:'undercovered: converse-api',
    v:{
      21:["A developer wants one consistent message-based interface for multi-turn chat across several Amazon Bedrock models that support messages, so application code does not need a different basic request structure for every model. Which API is designed for this?","developer ต้องการ interface แบบ message ที่สม่ำเสมอสำหรับ multi-turn chat กับ Bedrock models หลายตัวที่รองรับ messages เพื่อไม่ต้องเขียนโครง request หลักใหม่ทุก model ควรใช้ API ใด?"],
      22:["A team is building a chat layer that may switch among supported Bedrock models. It wants a unified conversational request pattern instead of model-specific message formats. Which Amazon Bedrock API BEST fits?","ทีมสร้าง chat layer ที่อาจสลับใช้ Bedrock models หลายตัว ต้องการ request pattern สำหรับการสนทนาแบบ unified แทน format เฉพาะแต่ละ model ควรใช้ Amazon Bedrock API ใด?"]
    },
    choices:{A:'Converse API',B:'AWS Config API',C:'SageMaker Ground Truth',D:'Amazon Macie'},
    answer:['A'],
    exp:[
      '✅ A — Converse API ให้ interface แบบสม่ำเสมอสำหรับ models ที่รองรับ messages และเหมาะกับ conversational interactions.',
      '❌ B — AWS Config ใช้ resource configuration/compliance ไม่ใช่ model inference.',
      '❌ C — Ground Truth ใช้ data labeling.',
      '❌ D — Macie ใช้ค้นหา sensitive data ใน S3.',
      '🧠 จำสั้น ๆ — ต้องการคุยกับ Bedrock models หลายตัวผ่าน message interface เดียว = Converse.'
    ]
  });

  add({
    task:'2.3', type:'multiple', target:'undercovered: cost-routing-caching',
    v:{
      21:["A high-volume GenAI application sends a long identical policy prefix with most requests, workloads vary in complexity, and the team wants to balance latency, capacity, and cost across models and Regions. Which THREE capabilities or strategies MOST directly help? (Select THREE.)","GenAI app ปริมาณสูงส่ง policy prefix ยาวชุดเดิมแทบทุก request งานมีความซับซ้อนต่างกัน และทีมต้อง balance latency/capacity/cost ข้าม models และ Regions ข้อใด 3 อย่างช่วยตรงที่สุด?"],
      22:["A global GenAI workload has repeated context, simple and complex requests mixed together, and occasional regional capacity pressure. The team wants to reduce repeated token processing, avoid using an expensive model for every request, and improve available capacity. Which THREE approaches fit? (Select THREE.)","GenAI workload ระดับโลกมี context ซ้ำ มีทั้ง request ง่ายและยาก และบางครั้ง Region หนึ่งมี capacity pressure ทีมต้องลดการประมวลผล token ซ้ำ ไม่ใช้ model แพงกับทุก request และเพิ่ม capacity ข้อใด 3 อย่างเหมาะ?"]
    },
    choices:{A:'Prompt caching',B:'Intelligent prompt routing',C:'Cross-Region Inference',D:'Increase temperature for all requests',E:'Duplicate the same prefix twice',F:'Pre-train a new model for every region'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Prompt caching ช่วย reuse prefix/context ที่ซ้ำ เพื่อลด processing, latency และบางกรณีลด cost.',
      '✅ B — Intelligent prompt routing ช่วยเลือก model ตามลักษณะ request เพื่อ balance quality/cost/performance.',
      '✅ C — Cross-Region Inference ช่วยใช้ capacity ข้าม Region และเพิ่มความยืดหยุ่นด้าน availability.',
      '❌ D — Temperature เปลี่ยนความสุ่มของ output ไม่ได้แก้ repeated context หรือ capacity.',
      '❌ E — ทำ prefix ซ้ำเพิ่ม input tokens และ cost.',
      '❌ F — Pre-training ต่อ Region มีต้นทุนสูงและไม่ใช่กลยุทธ์ปกติสำหรับ capacity routing.',
      '🧠 จำสั้น ๆ — Context ซ้ำ = cache; งานง่าย/ยากต่างกัน = route; Region ตัน = cross-region.'
    ]
  });

  add({
    task:'2.3', type:'single', target:'undercovered: regional-coverage-tradeoff',
    v:{
      21:["A regulated workload can use capacity in more than one AWS Region, but requests must remain within an approved geography because of data-residency policy. Which design consideration is MOST important when choosing an inference profile or routing strategy?","workload ที่มีข้อกำกับสามารถใช้ capacity ได้หลาย AWS Regions แต่ request ต้องอยู่ภายใน geography ที่อนุมัติตาม data-residency policy การเลือก inference profile/routing strategy ควรให้ความสำคัญกับเรื่องใดมากที่สุด?"],
      22:["A company wants broader inference capacity but cannot allow model traffic to leave an approved geographic area. Which tradeoff must be checked before choosing a more globally distributed routing option?","บริษัทต้องการ inference capacity มากขึ้น แต่ห้าม model traffic ออกจากพื้นที่ทางภูมิศาสตร์ที่กำหนด ก่อนเลือก routing แบบกระจายกว้างขึ้นต้องตรวจ tradeoff ใด?"]
    },
    choices:{A:'Regional coverage and residency/compliance constraints',B:'Increasing temperature',C:'Changing the output font',D:'Using more training labels'},
    answer:['A'],
    exp:[
      '✅ A — การขยาย routing/capacity ต้องตรวจว่า Regions ที่ระบบอาจใช้ยังสอดคล้องกับ residency และ compliance requirements.',
      '❌ B — Temperature เป็น inference parameter ด้าน randomness ไม่ได้ควบคุม geography.',
      '❌ C — Font ไม่เกี่ยวกับ infrastructure/compliance.',
      '❌ D — Training labels ไม่ได้กำหนดเส้นทาง inference.',
      '🧠 จำสั้น ๆ — Capacity กว้างขึ้นต้องแลกกับการตรวจ regional coverage และ compliance ให้ชัด.'
    ]
  });

  add({
    task:'2.3', type:'single', target:'weakness: bedrock-data-boundary',
    v:{
      21:["A security reviewer asks whether customer prompts and completions sent to Amazon Bedrock are used to train the underlying base foundation models for other customers. Which statement BEST describes the managed-service data boundary?","security reviewer ถามว่า prompts และ completions ของลูกค้าที่ส่งเข้า Amazon Bedrock ถูกนำไป train base foundation models เพื่อใช้กับลูกค้ารายอื่นหรือไม่ ข้อใดอธิบาย data boundary ได้ดีที่สุด?"],
      22:["A company wants managed foundation-model access but is concerned that its private conversations might become training data for the base model shared with other customers. Which statement is the BEST match for Amazon Bedrock's customer-data handling?","บริษัทต้องการใช้ managed FM แต่กังวลว่าบทสนทนาส่วนตัวจะกลายเป็น training data ของ base model ที่ใช้ร่วมกับลูกค้ารายอื่น ข้อใดตรงกับการจัดการ customer data ของ Amazon Bedrock มากที่สุด?"]
    },
    choices:{A:'Customer prompts and completions are not used to train the base models for other customers',B:'All prompts automatically become public training data',C:'Bedrock requires customers to publish their prompts',D:'Only prompts with guardrails are excluded from public training'},
    answer:['A'],
    exp:[
      '✅ A — Amazon Bedrock ไม่ใช้ customer prompts/completions เพื่อฝึก base models ให้ลูกค้ารายอื่นตาม service privacy boundary.',
      '❌ B — ข้อความของลูกค้าไม่ได้ถูกทำให้เป็น public training data โดยอัตโนมัติ.',
      '❌ C — ไม่มี requirement ให้ลูกค้า publish prompts.',
      '❌ D — การไม่ใช้ข้อมูลลูกค้า train base model ไม่ได้ขึ้นกับว่าต้องเปิด Guardrails ก่อน.',
      '🧠 จำสั้น ๆ — Bedrock managed inference: ข้อมูลลูกค้าใช้ตอบ request ไม่ใช่เอาไป train base model ให้คนอื่น.'
    ]
  });

  add({
    task:'2.2', type:'multiple', target:'confidence: genai-business-metrics',
    v:{
      21:["A retailer deploys a GenAI shopping assistant. It wants to know whether the assistant creates business value, not merely whether outputs sound fluent. Which THREE metrics are MOST directly useful? (Select THREE.)","ร้านค้าปลีก deploy GenAI shopping assistant และต้องการรู้ว่าระบบสร้าง business value จริงหรือไม่ ไม่ใช่แค่ตอบลื่น ข้อใด 3 metrics มีประโยชน์ตรงที่สุด?"],
      22:["A company launches a GenAI sales assistant and needs measures tied to real outcomes. Which THREE metrics BEST reflect business value rather than only model-language quality? (Select THREE.)","บริษัทเปิด GenAI sales assistant และต้องการ metrics ที่ผูกกับผลลัพธ์จริง ข้อใด 3 อย่างสะท้อน business value มากกว่าคุณภาพภาษาอย่างเดียว?"]
    },
    choices:{A:'Conversion rate',B:'Return on investment (ROI)',C:'Customer lifetime value or revenue impact',D:'Number of attention heads',E:'Embedding vector dimension',F:'Model release name'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Conversion rate วัดว่าระบบช่วยเปลี่ยนผู้เยี่ยมชมเป็นการซื้อหรือ action ที่ต้องการได้หรือไม่.',
      '✅ B — ROI วัดผลตอบแทนเทียบกับต้นทุนของ solution.',
      '✅ C — CLV/revenue impact เชื่อมระบบกับคุณค่าทางธุรกิจในระยะยาว.',
      '❌ D — Attention heads เป็นรายละเอียดโมเดล ไม่ใช่ business outcome.',
      '❌ E — Vector dimension เป็น implementation detail ไม่ได้บอกคุณค่าธุรกิจโดยตรง.',
      '❌ F — ชื่อหรือรุ่นของโมเดลไม่ใช่ metric.',
      '🧠 จำสั้น ๆ — Business metric ต้องตอบว่า “ทำให้ธุรกิจ/ผู้ใช้ดีขึ้นไหม” ไม่ใช่ “โมเดลมีขนาดเท่าไร”.'
    ]
  });

})();