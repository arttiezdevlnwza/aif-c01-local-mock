(() => {
  const set=(window.QUIZ_SETS||[]).find(x=>x.id==="local-set-20");
  if(!set) return;
  set.title="Local Mock Set 20";
  set.subtitle="Current Guide · Scenario + Close Distractors · Mixed Formats";
  set.questionCount=65;

  const taskNames={
    "1.1":"Explain basic AI concepts and terminologies","1.2":"Identify practical use cases for AI","1.3":"Describe the AI/ML development lifecycle",
    "2.1":"Explain the basic concepts of generative AI (GenAI)","2.2":"Understand the capabilities and limitations of GenAI for solving business problems","2.3":"Describe AWS infrastructure and technologies for building GenAI applications",
    "3.1":"Describe design considerations for applications that use foundation models (FMs)","3.2":"Choose effective prompt engineering techniques","3.3":"Describe the training and fine-tuning process for FMs","3.4":"Describe methods to evaluate FM performance",
    "4.1":"Explain the development of AI systems that are responsible","4.2":"Recognize the importance of transparent and explainable models",
    "5.1":"Explain methods to secure AI systems","5.2":"Recognize governance and compliance regulations for AI systems"
  };
  const taskMap={
    1:"1.2",2:"1.1",3:"1.1",4:"1.1",5:"1.2",6:"1.2",7:"1.3",8:"1.2",9:"1.3",10:"1.1",11:"1.2",12:"1.3",13:"1.2",
    14:"2.1",15:"2.2",16:"2.2",17:"2.3",18:"2.1",19:"2.1",20:"2.3",21:"2.1",22:"2.1",23:"2.2",24:"2.2",25:"2.2",26:"2.1",27:"2.1",28:"2.3",29:"2.1",
    30:"3.1",31:"3.1",32:"3.2",33:"3.2",34:"3.3",35:"3.1",36:"3.4",37:"3.4",38:"3.1",39:"3.3",40:"3.3",41:"3.1",42:"3.2",43:"3.1",44:"3.4",45:"3.1",46:"3.2",47:"3.1",
    48:"4.2",49:"4.1",50:"4.1",51:"4.2",52:"4.2",53:"4.1",54:"4.1",55:"4.1",56:"4.1",
    57:"5.1",58:"5.1",59:"5.1",60:"5.1",61:"5.2",62:"5.1",63:"5.1",64:"5.2",65:"5.2"
  };
  const byId=new Map(set.questions.map(q=>[q.id,q]));
  const patch=(id,obj)=>Object.assign(byId.get(id),obj);
  set.questions.forEach(q=>{q.task=taskMap[q.id];q.taskName=taskNames[q.task];});

  patch(9,{
    question:"A financial company runs a fraud-detection model in production across several applications. Transaction patterns change over time, and the team releases updated model versions regularly. The company wants a repeatable process that detects performance degradation and reduces mistakes caused by manual model replacement. Which TWO practices are fundamental MLOps practices for this workload? (Select TWO.)",
    questionTh:"บริษัทการเงินใช้โมเดลตรวจจับ fraud ใน production หลายแอป รูปแบบธุรกรรมเปลี่ยนตามเวลาและทีมออกโมเดลเวอร์ชันใหม่เป็นระยะ บริษัทต้องการกระบวนการที่ทำซ้ำได้ ตรวจจับ performance degradation และลดความผิดพลาดจากการเปลี่ยนโมเดลด้วยมือ แนวปฏิบัติ MLOps พื้นฐานข้อใดถูกต้อง 2 ข้อ?",
    choices:{A:"Monitor production model quality and drift against defined thresholds",B:"Retrain whenever a developer notices a few unusual predictions, without a repeatable evaluation step",C:"Promote the newest experiment artifact directly to production after training finishes",D:"Use versioned, repeatable processes to evaluate, retrain, and redeploy models",E:"Increase model complexity whenever production traffic grows"},
    answer:["A","D"],
    explanation:"ตอบ A, D — MLOps เน้น monitoring ใน production และกระบวนการที่ repeatable/versioned สำหรับ evaluate, retrain และ redeploy. B และ C ทำให้ release ขาดการควบคุมและ reproducibility; E ปริมาณ traffic ไม่ได้แปลว่าต้องเพิ่ม model complexity."
  });
  patch(10,{
    question:"A media company is inventorying data before choosing storage and ML processing methods. It has recorded customer-service calls, daily temperature spreadsheets, product photographs, order tables, and customer tables. The team wants to identify the assets that do not have a fixed row-and-column schema. Which TWO are examples of unstructured data? (Select TWO.)",
    questionTh:"บริษัท media กำลัง inventory ข้อมูลก่อนเลือก storage และ ML processing มีไฟล์เสียง call center, spreadsheet อุณหภูมิ, รูปสินค้า, order table และ customer table ต้องการหา assets ที่ไม่มี schema แบบแถว/คอลัมน์ตายตัว ข้อใดเป็น unstructured data 2 อย่าง?"
  });
  patch(13,{
    question:"A company prefers managed AI services for common language and conversational tasks instead of training custom models. It needs sentiment/key-phrase detection, language translation, lifelike speech generation, and a voice/text chatbot. Match each AWS managed AI service with the task it is designed to perform.",
    questionTh:"บริษัทต้องการใช้ managed AI services สำหรับงานภาษา/สนทนาทั่วไปแทนการ train custom model โดยต้องทำ sentiment/key phrases, translation, text-to-speech และ voice/text chatbot ให้จับคู่ service กับงานที่ออกแบบมาเพื่อทำ"
  });
  patch(16,{
    question:"An online retailer adds a generative AI tool that writes product descriptions for thousands of catalog items. The marketing team is not trying to measure model size or token efficiency; it wants to know whether the new descriptions actually persuade a larger share of website visitors to complete a purchase. Which business metric should the team track?",
    questionTh:"ร้านค้าออนไลน์เพิ่ม GenAI เขียน product descriptions หลายพันรายการ ทีม marketing ไม่ได้ต้องการวัด model size หรือ token efficiency แต่ต้องการรู้ว่าคำอธิบายใหม่ทำให้ผู้เข้าชมสัดส่วนมากขึ้นซื้อสินค้าจริงหรือไม่ ควร track business metric ใด?"
  });
  patch(17,{
    question:"A financial-services company plans to use Amazon Bedrock for a customer assistant and for a small fine-tuning project. Security reviewers are concerned that prompts, completions, or customization data might be exposed to other customers or reused by model providers to improve their base models. The team needs to understand the managed-service data boundary before approval. Which statement is accurate?",
    questionTh:"บริษัท financial services จะใช้ Amazon Bedrock สำหรับ customer assistant และ fine-tuning ขนาดเล็ก ทีม security กังวลว่า prompts, completions หรือ customization data อาจถูกเปิดให้ลูกค้ารายอื่นหรือ model providers นำไปปรับ base model จึงต้องเข้าใจ data boundary ก่อนอนุมัติ ข้อใดถูกต้อง?"
  });
  patch(18,{
    question:"A customer-support agent handles users who return days or weeks after an earlier conversation. The company wants the agent to remember durable preferences such as language, product ownership, and recurring support issues across separate sessions, while avoiding the need to place the entire old conversation into every prompt. Which agentic AI concept MOST directly addresses this requirement?",
    questionTh:"customer-support agent ต้องรองรับผู้ใช้ที่กลับมาหลังหลายวันหรือหลายสัปดาห์ บริษัทต้องการให้จำ preferences ระยะยาว เช่น ภาษา สินค้าที่มี และปัญหาที่เกิดซ้ำข้ามหลาย sessions โดยไม่ต้องยัดบทสนทนาเก่าทั้งหมดลงทุก prompt แนวคิด agentic AI ใดตรงที่สุด?"
  });
  patch(20,{
    question:"A procurement department wants to automate a high-volume vendor-onboarding process that spans finance, security, and legal teams. The process can run for days, includes approvals, branching logic, error handling, and must continue independently of the employee who created it. Which Amazon Quick capability BEST fits this requirement?",
    questionTh:"ฝ่ายจัดซื้ออยาก automate กระบวนการ onboarding vendor ปริมาณมากที่เกี่ยวข้องกับ finance, security และ legal กระบวนการอาจทำงานหลายวัน มี approval, branching logic, error handling และต้องทำงานต่อได้โดยไม่ผูกกับ account ของพนักงานคนเดียว Amazon Quick capability ใดเหมาะที่สุด?",
    choices:{A:"Quick Research",B:"Quick Flows",C:"Quick Automate",D:"Quick Sight"},answer:["C"],
    explanation:"ตอบ C — Quick Automate เหมาะกับ end-to-end enterprise process ที่ซับซ้อนและทำงานอิสระจากผู้ใช้รายเดียว พร้อม control flow และ error handling. Quick Flows เหมาะงานส่วนบุคคล/ทีมที่สั้นกว่า; Quick Research เน้นค้นคว้า; Quick Sight เน้น BI และ dashboard."
  });
  patch(22,{
    question:"A lead agent receives a complex support case, breaks it into billing, policy, and technical subtasks, assigns those subtasks to specialist agents in parallel, and then combines their findings into one response. The specialists do not coordinate the overall plan themselves. Which multi-agent pattern BEST describes this design?",
    questionTh:"lead agent รับเคสซับซ้อน แบ่งเป็นงาน billing, policy และ technical แจกให้ specialist agents ทำพร้อมกัน แล้วรวมผลเป็นคำตอบเดียว โดย specialist ไม่ได้วางแผนภาพรวมกันเอง รูปแบบ multi-agent ใดตรงที่สุด?",
    choices:{A:"Orchestrator–worker",B:"Peer-to-peer swarm",C:"Sequential pipeline",D:"Single-agent tool use"},answer:["A"],
    explanation:"ตอบ A — Orchestrator–worker มีตัวกลางแตกงาน แจกให้ workers/specialists และรวมผล. Peer-to-peer swarm ไม่มี coordinator กลางแบบนี้; sequential pipeline ส่งงานต่อทีละขั้น; single-agent tool use ไม่มี specialist agents หลายตัว."
  });
  patch(23,{
    question:"A company is evaluating a generative AI assistant before a public launch. In testing, the same prompt sometimes produces different wording, some fluent answers contain invented facts, and reviewers cannot always determine why the model produced a particular answer. The team wants to identify the limitations that require mitigation rather than the capabilities that make GenAI useful. Which THREE limitations are illustrated? (Select THREE.)",
    questionTh:"บริษัทประเมิน GenAI assistant ก่อนเปิดใช้งานสาธารณะ พบว่า prompt เดิมบางครั้งได้ wording ต่างกัน บางคำตอบฟังน่าเชื่อแต่มีข้อเท็จจริงที่แต่งขึ้น และ reviewer อธิบายเหตุผลของ output บางครั้งไม่ได้ ข้อจำกัดใด 3 ข้อถูกแสดงในสถานการณ์นี้?",
    choices:{A:"Nondeterministic outputs for the same prompt",B:"Conversational natural-language interaction",C:"Ability to generate new content",D:"Limited interpretability of how an output was produced",E:"Adaptability to different tasks through prompting",F:"Hallucinations that produce plausible but incorrect content"},answer:["A","D","F"],
    explanation:"ตอบ A, D, F — output ที่เปลี่ยนได้คือ nondeterminism, อธิบายที่มาของ output ได้จำกัดคือ interpretability limitation, และข้อเท็จจริงที่แต่งขึ้นคือ hallucination. B, C, E เป็น capabilities/advantages ไม่ใช่ limitation ตาม scenario."
  });
  patch(27,{
    question:"A company standardizes agent access to internal systems by exposing tools through Model Context Protocol (MCP). A user asks the agent to check an order. The model must choose the appropriate MCP tool, the external system must execute the call, and the returned result becomes context for the final answer. Put the tool-use interaction in the MOST appropriate order.",
    questionTh:"บริษัทใช้ Model Context Protocol (MCP) เป็นมาตรฐานให้ agent เข้าถึงระบบภายใน เมื่อผู้ใช้ขอเช็ก order โมเดลต้องเลือก MCP tool ที่เหมาะ ระบบภายนอกต้อง execute และส่งผลกลับมาเป็น context ก่อนตอบ จงเรียงลำดับการทำงานที่เหมาะสมที่สุด",
    choices:{A:"The foundation model writes the final answer for the user",B:"The foundation model selects the MCP tool and supplies the required arguments",C:"The MCP-connected tool executes the request against the company system",D:"The tool result is returned to the model as context"},answer:["B","C","D","A"],
    explanation:"ลำดับคือ model เลือก tool/arguments → tool ที่เชื่อมผ่าน MCP execute กับระบบภายนอก → result กลับมาเป็น context → model สร้าง final answer. MCP ช่วย standardize การเชื่อม agent กับ external tools/data; ไม่ได้ทำให้ model เป็นผู้ execute API เอง."
  });
  patch(28,{
    question:"A solutions team is choosing AWS offerings for six different GenAI development needs. Match each offering with the capability it is primarily designed to provide.",
    questionTh:"ทีม solutions กำลังเลือก AWS offerings สำหรับความต้องการ GenAI หกแบบ ให้จับคู่แต่ละ offering กับ capability หลักที่ออกแบบมาเพื่อรองรับ",
    choices:{A:"Amazon Bedrock",B:"SageMaker JumpStart",C:"Amazon Quick",D:"Kiro",E:"Strands Agents",F:"Amazon Bedrock AgentCore"},
    matches:{"1":"Access multiple foundation models and managed GenAI application features through AWS","2":"Discover and deploy pre-trained models and solution templates in SageMaker AI","3":"Give business users AI-powered research, analytics, and workflow automation","4":"Use a spec-driven AI development environment with project context and automation","5":"Build agents with an open-source SDK and agent patterns","6":"Deploy, connect, secure, observe, and operate agents with managed production services"},
    answer:["A:1","B:2","C:3","D:4","E:5","F:6"],
    explanation:"Bedrock=managed FM/application platform; JumpStart=pre-trained models/solutions in SageMaker; Quick=business research/analytics/automation; Kiro=spec-driven AI development; Strands Agents=open-source agent SDK/patterns; AgentCore=managed production capabilities for running, connecting, securing and observing agents."
  });
  patch(29,{
    question:"A team is designing a RAG application and needs to distinguish the units a model processes, the vectors used for semantic similarity, the document passages stored for retrieval, and the maximum text the model can consider in one request. Match each generative AI concept with its description.",
    questionTh:"ทีมกำลังออกแบบ RAG app และต้องแยก concepts เรื่องหน่วยข้อความที่โมเดลประมวลผล, vector สำหรับ semantic similarity, การแบ่ง document passages และปริมาณข้อความสูงสุดต่อ request ให้จับคู่แต่ละ concept กับคำอธิบาย"
  });
  patch(30,{
    question:"A company already stores a large JSON product catalog in an Amazon DocumentDB (with MongoDB compatibility) cluster and wants to add semantic similarity search for a RAG application. The architecture team wants to avoid migrating the catalog to another database solely to support embeddings. Which option BEST fits this requirement?",
    questionTh:"บริษัทมี JSON product catalog ขนาดใหญ่ใน Amazon DocumentDB (MongoDB compatibility) อยู่แล้ว และอยากเพิ่ม semantic similarity search สำหรับ RAG โดยไม่ย้าย catalog ไปฐานข้อมูลอื่นเพียงเพื่อรองรับ embedding ตัวเลือกใดเหมาะที่สุด?",
    choices:{A:"Move the catalog to Amazon Neptune solely for vector search",B:"Use supported vector search in the existing Amazon DocumentDB cluster",C:"Export the catalog to Amazon CloudFront and search the cache",D:"Use AWS Glue Data Catalog as the vector index"},answer:["B"],
    explanation:"ตอบ B — Amazon DocumentDB รุ่น/cluster ที่รองรับสามารถทำ vector search ได้ จึงต่อยอดระบบเดิมโดยไม่ต้อง migrate ทั้ง catalog. Neptune เป็นอีกทางเลือกสำหรับ graph/vector use cases แต่โจทย์ต้องการคง DocumentDB; CloudFront และ Glue Data Catalog ไม่ใช่ vector stores."
  });
  patch(31,{
    question:"A RAG assistant searches a knowledge base that contains policies from many countries and years. For a request about the 2026 Thailand policy, the team wants documents from other countries or older versions excluded before semantic candidates are considered. It does not want merely to reorder already eligible results by relevance. Which retrieval technique is MOST appropriate?",
    questionTh:"RAG assistant ค้น knowledge base ที่มี policy หลายประเทศหลายปี สำหรับคำถามเรื่อง Thailand 2026 ทีมต้องการตัดเอกสารประเทศอื่นหรือเวอร์ชันเก่าออกก่อนพิจารณา semantic candidates ไม่ได้ต้องการเพียง reorder ผลที่ผ่านเงื่อนไขแล้ว เทคนิคใดเหมาะที่สุด?",
    choices:{A:"Increase the generation temperature",B:"Rerank all retrieved passages after generation",C:"Apply metadata filtering before or during retrieval",D:"Fine-tune the foundation model on the policy titles"},answer:["C"],
    explanation:"ตอบ C — metadata filtering จำกัด candidate set ตาม structured attributes เช่น country/year ก่อนหรือระหว่าง retrieval. Reranking จัดลำดับ candidates ที่มีอยู่แล้ว; temperature และ fine-tuning ไม่ได้ enforce eligibility ของเอกสาร."
  });
  patch(32,{
    question:"A public chatbot has system instructions that prohibit certain unsafe outputs. A user sends a carefully written role-play request that tells the chatbot to ignore those restrictions, adopt a fictional unrestricted persona, and provide content it was configured to refuse. The attack comes directly from the user prompt rather than from a retrieved document. Which prompt-engineering risk is MOST directly illustrated?",
    questionTh:"public chatbot มี system instructions ห้าม unsafe outputs แต่ผู้ใช้ส่ง role-play request ที่พยายามให้ chatbot ignore restrictions, สวม persona ที่ไม่ถูกจำกัด และสร้าง content ที่ควรปฏิเสธ โดย attack มาจาก user prompt โดยตรงไม่ใช่ retrieved document ความเสี่ยง prompt แบบใดตรงที่สุด?"
  });
  patch(34,{
    question:"A company has collected 8,000 high-quality instruction-and-answer pairs that were reviewed by its best support agents. The company wants a foundation model to consistently follow the same response style, structure, and task behavior even when the relevant business facts are not changing frequently. It is willing to update model weights rather than rely only on runtime context. Which approach is MOST appropriate?",
    questionTh:"บริษัทมี instruction-answer pairs คุณภาพสูง 8,000 ชุดที่ best support agents ตรวจแล้ว ต้องการให้ FM รักษา style, structure และ task behavior เดิมอย่างสม่ำเสมอ โดย business facts ไม่ได้เปลี่ยนบ่อย และยอม update model weights แทนการพึ่ง runtime context อย่างเดียว วิธีใดเหมาะที่สุด?"
  });
  patch(36,{
    question:"A team evaluates a summarization model against human-written reference summaries. Many generated summaries preserve the same meaning but use different wording, so exact token or n-gram overlap understates their quality. The team wants a metric that uses contextual representations to compare semantic similarity between generated and reference text. Which metric fits BEST?",
    questionTh:"ทีมประเมิน summarization model เทียบ human-written references แต่ generated summaries หลายอันความหมายเหมือนกันแม้ wording ต่าง ทำให้ exact token/n-gram overlap ประเมินต่ำเกินจริง ทีมต้องการ metric ที่ใช้ contextual representations วัด semantic similarity ควรใช้ metric ใด?"
  });
  patch(37,{
    question:"A company deploys a foundation-model assistant for customer-service agents. Offline language-quality scores are strong, but management needs to know whether the application actually helps the business. The team can measure task completion, average handling time, user satisfaction, latency, and cost per interaction. Which evaluation approach BEST determines whether the assistant meets the company's business objectives?",
    questionTh:"บริษัท deploy FM assistant ให้ customer-service agents แม้ offline language-quality scores ดี แต่ management ต้องการรู้ว่าแอปช่วยธุรกิจจริงหรือไม่ ทีมวัด task completion, average handling time, user satisfaction, latency และ cost per interaction ได้ ควรประเมินอย่างไรจึงตอบ business objective ได้ดีที่สุด?",
    choices:{A:"Use only a general FM benchmark because it is standardized",B:"Track application and business metrics tied to the intended workflow",C:"Use only the number of model parameters as a quality proxy",D:"Measure prompt length and ignore production outcomes"},answer:["B"],
    explanation:"ตอบ B — ต้องวัด application/business outcomes ที่ผูกกับ intended use เช่น task completion, handling time, satisfaction และ cost. Benchmark ของ base FM อย่างเดียวไม่ครอบคลุม workflow จริง; parameter count และ prompt length ไม่พิสูจน์ business value."
  });
  patch(40,{
    question:"A company will fine-tune a foundation model for a customer chatbot used across several regions, age groups, and customer segments. The raw conversation archive is large, but some groups are under-represented and label quality varies between teams. Before training, the company wants to reduce bias and avoid teaching the model noisy or unrepresentative behavior. Which data-preparation practice is MOST important?",
    questionTh:"บริษัทจะ fine-tune FM สำหรับ customer chatbot ที่ใช้หลาย regions, age groups และ customer segments แม้ raw archive ใหญ่แต่บางกลุ่ม under-represented และ label quality ต่างกันระหว่างทีม ก่อน training ต้องการลด bias และไม่ให้โมเดลเรียนจาก noisy/unrepresentative behavior ควรทำ data preparation แบบใดสำคัญที่สุด?"
  });
  patch(42,{
    question:"A support team is improving a prompt that must return a short incident summary in a fixed JSON structure. The current outputs sometimes omit required fields and include irrelevant details. The team wants prompt-level improvements before considering model customization. Which TWO actions are prompt engineering best practices for this situation? (Select TWO.)",
    questionTh:"ทีม support ปรับ prompt ที่ต้องคืน incident summary สั้น ๆ ใน JSON format ที่กำหนด แต่ output บางครั้งขาด field และมีรายละเอียดไม่เกี่ยวข้อง ทีมต้องการปรับที่ prompt ก่อนพิจารณา model customization ควรทำ 2 อย่างใด?",
    choices:{A:"Increase temperature so the model explores more output formats",B:"Include a few examples that demonstrate the required JSON structure",C:"Give clear, specific instructions and only the context relevant to the task",D:"Add every available runbook to each prompt regardless of relevance",E:"Use examples with several different output schemas so the model can choose freely"},answer:["B","C"],
    explanation:"ตอบ B, C — specific instructions/context และ few-shot examples ของ format ที่ต้องการช่วยลด ambiguity และทำให้ output สม่ำเสมอ. A เพิ่ม variability; D เพิ่ม noise/token cost; E ทำให้ format target ไม่ชัด."
  });
  patch(44,{
    question:"A team is evaluating a foundation model for summarizing long customer cases. It has a benchmark set with human-written reference summaries and also wants reviewers to judge factual coverage and usefulness when wording differs from the references. Which TWO evaluation approaches are MOST appropriate? (Select TWO.)",
    questionTh:"ทีมกำลังประเมิน FM สำหรับสรุปเคสลูกค้ายาว ๆ มี benchmark ที่มี human-written reference summaries และอยากให้ reviewers ประเมิน factual coverage/usefulness ในกรณี wording ต่างจาก reference ควรใช้วิธีใด 2 อย่าง?",
    choices:{A:"Measure retrieval context relevance even though the task has no retrieval component",B:"Use ROUGE or another reference-based summarization metric on the benchmark set",C:"Use human evaluation with a defined rubric for factual coverage and usefulness",D:"Use the base model's pre-training loss as the primary production quality metric",E:"Use VPC network throughput as a proxy for summary quality"},answer:["B","C"],
    explanation:"ตอบ B, C — reference-based metric เช่น ROUGE ช่วยเปรียบเทียบกับ reference summaries และ human rubric จับคุณภาพเชิง semantic/factual ที่ metric overlap อาจพลาด. A วัดคนละ component, D/E ไม่ใช่ output-quality evaluation ของ summarization app."
  });
  patch(45,{
    question:"A team is preparing documents for a RAG system. It wants a conceptual sequence that starts with source documents and ends with the foundation model receiving the most relevant evidence for a user question. Put the FIVE stages in the MOST appropriate order.",
    questionTh:"ทีมกำลังเตรียมเอกสารสำหรับ RAG และต้องการลำดับเชิงแนวคิดตั้งแต่ source documents จน FM ได้รับ evidence ที่เกี่ยวข้องที่สุดสำหรับคำถามผู้ใช้ จงเรียง 5 ขั้นตอนตามลำดับที่เหมาะสมที่สุด",
    choices:{A:"Store or index the document vectors in the vector store",B:"Split source documents into useful chunks",C:"Provide the retrieved chunks to the foundation model as context",D:"Create embeddings for the document chunks",E:"Retrieve chunks that are semantically relevant to the user query"},answer:["B","D","A","E","C"],
    explanation:"ลำดับคือ Chunk documents → Create embeddings → Store/index vectors → Retrieve relevant chunks at query time → Provide retrieved context to the FM. การสร้าง embedding ต้องเกิดก่อนเก็บ vector และ generation ต้องได้รับ context หลัง retrieval."
  });
  patch(47,{
    question:"An organization is reviewing Bedrock capabilities in an environment that includes an existing Amazon Bedrock Agents Classic workload. Match each capability with the job it is designed to perform.",
    questionTh:"องค์กรกำลังทบทวน Bedrock capabilities โดยมี workload เดิมที่ใช้ Amazon Bedrock Agents Classic อยู่แล้ว ให้จับคู่ capability กับงานที่ออกแบบมาเพื่อทำ",
    choices:{A:"Knowledge Bases for Amazon Bedrock",B:"Amazon Bedrock Agents Classic (existing customer)",C:"Amazon Bedrock Guardrails",D:"Amazon Bedrock Model Evaluation"},
    matches:{"1":"Compare model outputs by using automatic metrics or human evaluation","2":"Apply safeguards such as content, sensitive-information, and grounding controls","3":"Orchestrate an existing multi-step agent workflow that can call APIs","4":"Retrieve organizational knowledge to ground foundation-model responses"},
    answer:["A:4","B:3","C:2","D:1"],
    explanation:"Knowledge Bases=RAG/grounding; Agents Classic=existing-customer agent orchestration and API actions; Guardrails=safeguards; Model Evaluation=evaluate model outputs. Agents Classic is in maintenance mode for existing customers, while new agent development should consider AgentCore."
  });
  patch(48,{
    question:"An AI vendor is preparing material for customers and auditors before a new system is adopted. The documentation explains the system's intended use, the data sources and development process, known limitations, and situations where users should not rely on the output. The goal is to let stakeholders make informed decisions about how the system is used. Which responsible-AI dimension does this MOST directly support?",
    questionTh:"AI vendor เตรียมเอกสารให้ customers และ auditors ก่อนนำระบบไปใช้ โดยอธิบาย intended use, data sources/development process, known limitations และกรณีที่ไม่ควรพึ่ง output เพื่อให้ stakeholders ตัดสินใจโดยมีข้อมูล Responsible AI dimension ใดตรงที่สุด?"
  });
  patch(49,{
    question:"Before training a hiring model, a data science team discovers that historical applicant data contains substantially fewer examples from some gender groups. The team wants an AWS capability that can measure pre-training bias and help analyze whether the dataset or model creates unequal outcomes, rather than a service for labeling or post-inference human review. Which service should it use?",
    questionTh:"ก่อนฝึกโมเดลสำหรับคัดเลือกผู้สมัครงาน ทีมวิทยาศาสตร์ข้อมูลพบว่าข้อมูลผู้สมัครในอดีตมีตัวอย่างจากบางกลุ่มเพศน้อยกว่ากลุ่มอื่นอย่างมาก ทีมต้องการความสามารถของ AWS ที่สามารถวัดอคติก่อนการฝึก (pre-training bias) และช่วยวิเคราะห์ว่าชุดข้อมูลหรือโมเดลก่อให้เกิดผลลัพธ์ที่ไม่เท่าเทียมหรือไม่ โดยไม่ใช่บริการสำหรับติดป้ายกำกับข้อมูล (labeling) หรือให้มนุษย์ตรวจทานผลหลังการอนุมาน (post-inference human review) ควรใช้บริการใด?"
  });
  patch(50,{
    question:"A bank is an existing Amazon Augmented AI (Amazon A2I) customer. Its loan-review model sometimes returns low-confidence predictions, and policy requires those cases to be routed to an employee for a decision before the applicant is told the outcome. Which AWS capability BEST supports this existing human-review workflow?",
    questionTh:"ธนาคารเป็นลูกค้า Amazon Augmented AI (Amazon A2I) เดิม โมเดล loan review บางครั้งให้ low-confidence prediction และ policy กำหนดให้ส่งเคสเหล่านั้นให้พนักงานตัดสินใจก่อนแจ้งผลผู้สมัคร AWS capability ใดเหมาะกับ human-review workflow เดิมนี้ที่สุด?",
    choices:{A:"SageMaker Ground Truth",B:"SageMaker Model Monitor",C:"Amazon Augmented AI (Amazon A2I)",D:"SageMaker Clarify"},answer:["C"],
    explanation:"ตอบ C — A2I สร้าง human review loop ตามเงื่อนไข เช่น confidence threshold สำหรับ existing customers. Ground Truth เน้น labeling ก่อน training, Model Monitor เฝ้าคุณภาพ/drift และ Clarify วิเคราะห์ bias/explainability."
  });
  patch(51,{
    question:"A regulated company owns several custom ML models and wants governance reviewers to see a standardized record for each model. The record must include intended use, training-data details, evaluation results, approvals, and risk information, and it should be shareable across the model lifecycle. The company is not asking for AWS compliance reports or API event history. Which capability BEST fits?",
    questionTh:"บริษัท regulated มี custom ML models หลายตัวและต้องการ standardized record ต่อโมเดลสำหรับ governance review โดยมี intended use, training-data details, evaluation results, approvals และ risk information และแชร์ได้ตลอด model lifecycle ไม่ได้ต้องการ AWS compliance reports หรือ API history ควรใช้ capability ใด?"
  });
  patch(53,{
    question:"A company is preparing training data for a model that will serve customers across different regions, ages, and demographic groups. Historical data over-represents the largest customer segment, and labeling quality varies across teams. Which TWO actions BEST reduce responsible-AI risk before training? (Select TWO.)",
    questionTh:"บริษัทเตรียม training data สำหรับโมเดลที่ให้บริการลูกค้าหลายภูมิภาค อายุ และ demographic groups โดย historical data มี largest segment มากเกินไปและคุณภาพ label ต่างกันระหว่างทีม ควรทำ 2 อย่างใดเพื่อลด responsible-AI risk ก่อน training?",
    choices:{A:"Use only the most recent records even if the demographic mix becomes less representative",B:"Curate data so important customer groups are adequately represented",C:"Remove all subgroup attributes before any bias analysis is performed",D:"Force every subgroup to exactly the same size without checking data quality or business context",E:"Review label quality and measure imbalance across relevant subgroups"},answer:["B","E"],
    explanation:"ตอบ B, E — representativeness และ label quality/imbalance เป็นจุดสำคัญของ responsible training data. A อาจทำให้ representation แย่ลง; C ทำให้ตรวจ subgroup bias ยาก; D การ balance แบบตายตัวโดยไม่ดู quality/context ไม่ใช่แนวปฏิบัติที่ถูกเสมอ."
  });
  patch(54,{
    question:"A company plans to launch a generative AI feature that creates marketing copy from internal and third-party content. Legal and risk teams are reviewing issues that could create legal exposure or harm customer trust, rather than ordinary performance limitations such as latency or context size. Which THREE risks should they prioritize? (Select THREE.)",
    questionTh:"บริษัทจะเปิด GenAI feature ที่สร้าง marketing copy จากข้อมูลภายในและ third-party content ทีม legal/risk ต้องทบทวนความเสี่ยงที่อาจก่อ legal exposure หรือทำลาย customer trust ไม่ใช่ข้อจำกัด performance ทั่วไป ข้อใดควร prioritize 3 ข้อ?",
    choices:{A:"Variation in response latency during peak traffic",B:"A context window that limits how much text fits in one request",C:"Nondeterministic wording between otherwise acceptable responses",D:"Intellectual-property infringement from generated or source content",E:"Biased outputs that could discriminate against protected groups",F:"Hallucinated claims that could mislead end users and damage trust"},answer:["D","E","F"],
    explanation:"ตอบ D, E, F — IP infringement, discriminatory/bias outcomes และ hallucinated claims ที่กระทบ end users/trust เป็น legal/responsible-AI risks. A/B/C เป็น technical/behavioral limitations แต่ไม่ใช่ legal-risk focus ของโจทย์."
  });
  patch(55,{
    question:"A team is launching a high-impact AI feature under a governance process. Before training it must define the intended use and risks, then prepare representative data. Before production it must evaluate performance and bias and document known limitations. Human oversight and monitoring begin when the system is deployed. Put the FIVE activities in the MOST appropriate order.",
    questionTh:"ทีมกำลังเปิด high-impact AI feature ภายใต้ governance process โดยก่อน train ต้องกำหนด intended use/risks แล้วเตรียม representative data ก่อน production ต้อง evaluate performance/bias และ document limitations ส่วน human oversight/monitoring เริ่มเมื่อ deploy จงเรียง 5 กิจกรรมตามลำดับที่เหมาะสมที่สุด",
    choices:{A:"Prepare representative training data",B:"Deploy with human oversight and ongoing monitoring",C:"Document intended use, evaluation results, and known limitations",D:"Evaluate the model for performance and subgroup bias",E:"Define the intended use, affected users, and potential risks"},answer:["E","A","D","C","B"],
    explanation:"ลำดับเชิง governance คือ Define use/risks → Prepare representative data → Evaluate performance/bias → Document results/limitations → Deploy with oversight/monitoring. Stem ระบุ dependencies เพื่อให้ลำดับไม่ขึ้นกับ console implementation."
  });
  patch(56,{
    question:"A governance team is reviewing several responsible-AI concerns from different projects. Match each responsible-AI dimension with the scenario that BEST represents it.",
    questionTh:"ทีม governance กำลังทบทวน responsible-AI concerns จากหลายโครงการ ให้จับคู่แต่ละ dimension กับ scenario ที่ตรงที่สุด",
    choices:{A:"Fairness",B:"Explainability",C:"Privacy and security",D:"Veracity and robustness",E:"Environmental sustainability"},
    matches:{"1":"Each applicant receives understandable reason codes for an automated decision","2":"The model should remain accurate when inputs contain noise or unexpected variations","3":"Personal training and inference data must be protected from unauthorized access","4":"Comparable groups should not receive unjustifiably different outcomes","5":"A smaller model that meets the quality target is preferred to reduce compute and energy use"},
    answer:["A:4","B:1","C:3","D:2","E:5"],
    explanation:"Fairness=outcome parity/justification across groups; Explainability=understandable reasons; Privacy/security=protect data; Veracity/robustness=reliable truthful behavior under variation; Environmental sustainability=reduce unnecessary compute/energy when requirements are still met."
  });
  patch(57,{
    question:"A company stores several terabytes of training and evaluation data across many Amazon S3 buckets. Security teams do not know which buckets contain personally identifiable information (PII), and they want an AWS service that can discover and classify sensitive S3 data before tighter controls are applied. Which service should the company use?",
    questionTh:"บริษัทเก็บ training/evaluation data หลาย TB กระจายหลาย S3 buckets ทีม security ยังไม่รู้ว่า bucket ใดมี PII และต้องการ AWS service ที่ค้นหา/จัดประเภท sensitive data ใน S3 ก่อนเพิ่ม controls ควรใช้ service ใด?"
  });
  patch(58,{
    question:"A company builds a customer chatbot with Amazon Bedrock and is reviewing responsibilities before production launch. AWS operates the underlying facilities and managed service infrastructure, while the company controls who in its organization can invoke models and access its application data. Under the AWS shared responsibility model, which task belongs to the company?",
    questionTh:"บริษัทสร้าง customer chatbot ด้วย Amazon Bedrock และกำลังทบทวนความรับผิดชอบก่อนขึ้น production โดย AWS ดูแล facilities/managed-service infrastructure ส่วนบริษัทควบคุมผู้ที่ invoke models และเข้าถึง application data ภายใต้ shared responsibility model งานใดเป็นของบริษัท?"
  });
  patch(59,{
    question:"An enterprise agent can invoke several business tools through Amazon Bedrock AgentCore Gateway. The security team does not want the model's own reasoning to be the final authority for sensitive actions such as issuing refunds. It needs deterministic authorization rules that evaluate tool calls and conditions before the gateway allows the operation. Which AgentCore capability provides this control?",
    questionTh:"enterprise agent เรียก business tools ผ่าน AgentCore Gateway ได้หลายตัว ทีม security ไม่ต้องการให้ reasoning ของโมเดลเป็น authority สุดท้ายสำหรับ action สำคัญ เช่น refund แต่ต้องการ deterministic authorization rules ตรวจ tool calls/conditions ก่อน gateway อนุญาต AgentCore capability ใดทำหน้าที่นี้?"
  });
  patch(61,{
    question:"During an audit of a generative AI application, the security team must show which IAM principal invoked Amazon Bedrock APIs, which operation was called, and when the event occurred. The team is not asking for the current resource configuration or a vulnerability scan. Which AWS service is the primary source for this API activity record?",
    questionTh:"ระหว่าง audit GenAI app ทีม security ต้องแสดงว่า IAM principal ใดเรียก Amazon Bedrock API, เรียก operation อะไร และเวลาใด โดยไม่ได้ถาม current configuration หรือ vulnerability scan AWS service ใดเป็นแหล่งหลักของ API activity record?"
  });
  patch(62,{
    question:"A team is assembling a training dataset from several internal systems. The dataset will be updated over time, and auditors need evidence if records are changed unexpectedly. Only a small group of engineers should be able to modify the source data. Which TWO practices BEST protect data security and integrity? (Select TWO.)",
    questionTh:"ทีมกำลังรวม training dataset จากหลายระบบภายใน ชุดข้อมูลจะอัปเดตตามเวลาและ auditor ต้องมีหลักฐานเมื่อ record ถูกเปลี่ยนโดยไม่คาดคิด โดยมีเพียง engineer กลุ่มเล็กที่ควรแก้ source data ได้ ควรใช้แนวปฏิบัติใด 2 อย่าง?",
    choices:{A:"Encrypt only the final model artifact while leaving source training data broadly accessible",B:"Grant all analysts write access so reviews are never blocked by permissions",C:"Use versioning and integrity checks such as hashes/checksums to detect unauthorized changes",D:"Copy working datasets into personal storage locations as an additional backup path",E:"Restrict read and write permissions with least-privilege IAM roles"},answer:["C","E"],
    explanation:"ตอบ C, E — versioning/integrity checks ช่วยตรวจ tampering/unexpected changes และ least privilege จำกัดผู้ที่อ่าน/แก้ข้อมูลได้. A ปล่อย source data เสี่ยง, B กว้างเกินจำเป็น, D ทำให้ data governance และ access control แย่ลง."
  });
  patch(63,{
    question:"A generative AI chatbot handles customer records and retrieves information from internal systems. The security team wants controls that reduce the chance that sensitive data is exposed through retrieval, storage, network traffic, or generated responses. Which THREE measures MOST directly address data-leakage risk? (Select THREE.)",
    questionTh:"GenAI chatbot จัดการ customer records และ retrieve ข้อมูลจากระบบภายใน ทีม security ต้องการ controls ที่ลดโอกาส sensitive data รั่วผ่าน retrieval, storage/network หรือ generated responses ข้อใด 3 อย่างตรงที่สุด?",
    choices:{A:"Log every full prompt and response containing PII without masking because auditability is always higher priority",B:"Limit retrieval sources and tool access with least-privilege permissions",C:"Rely only on a private VPC endpoint and assume application-level access controls are no longer needed",D:"Encrypt sensitive data at rest and in transit",E:"Increase the context window so the model can receive more customer data per request",F:"Apply sensitive-information filtering or masking to model inputs and outputs"},answer:["B","D","F"],
    explanation:"ตอบ B, D, F — least privilege จำกัดข้อมูลที่ระบบเข้าถึง, encryption ป้องกันข้อมูลระหว่างเก็บ/ส่ง และ sensitive-information filters ช่วย block/mask PII ใน input/output. A เพิ่ม exposure, C network privacy ไม่แทน authorization, E เพิ่มข้อมูลที่อาจรั่วโดยไม่ใช่ control."
  });
  patch(64,{
    question:"A regulated company wants two continuous governance controls for its AI environment. One control must evaluate whether AWS resource configurations comply with defined rules over time. The other must scan supported workloads for software vulnerabilities that could expose the application. Which TWO AWS services should the company use? (Select TWO.)",
    questionTh:"บริษัท regulated ต้องการ governance controls สองอย่างแบบต่อเนื่อง อย่างแรกตรวจว่า AWS resource configurations สอดคล้องกับ rules หรือไม่ตามเวลา อีกอย่างสแกน supported workloads หา software vulnerabilities ที่อาจเปิดช่องให้แอปถูกโจมตี ควรใช้บริการใด 2 ตัว?",
    choices:{A:"AWS Audit Manager",B:"Amazon Inspector",C:"AWS Config",D:"AWS Artifact",E:"AWS Trusted Advisor"},answer:["B","C"],
    explanation:"ตอบ B, C — AWS Config ประเมิน resource configuration/compliance state ตาม rules และ Amazon Inspector ตรวจ vulnerabilities/exposure ของ supported workloads. Audit Manager รวบรวม audit evidence, Artifact ให้ AWS compliance reports, Trusted Advisor ให้ recommendations หลายหมวด."
  });
  patch(65,{
    question:"A governance committee is defining how AI data and governance processes will be controlled across the organization. Match each governance concept with the description that BEST fits it.",
    questionTh:"คณะกรรมการ governance กำลังกำหนดการควบคุมข้อมูลและกระบวนการ AI ทั่วองค์กร ให้จับคู่ governance concept กับคำอธิบายที่ตรงที่สุด",
    choices:{A:"Data lineage",B:"Data cataloging",C:"Data residency",D:"Data retention",E:"Review cadence"},
    matches:{"1":"Track where data came from and how it was transformed","2":"Organize metadata so datasets can be discovered and understood","3":"Define how long data is kept before deletion or archival","4":"Keep data stored or processed only in approved geographic locations","5":"Define how frequently governance reviews and reassessments must occur"},
    answer:["A:1","B:2","C:4","D:3","E:5"],
    explanation:"Lineage=origin/transformations; Cataloging=discoverable metadata; Residency=approved location; Retention=how long data is kept; Review cadence=scheduled frequency for governance reviews and reassessment."
  });

  const glossary={
    minimal:"น้อยที่สุด / ขั้นต่ำ",chunk:"ชิ้นส่วน / ช่วงข้อความ",chunks:"ชิ้นส่วน / ช่วงข้อความหลายส่วน",penalized:"ถูกลงโทษ / ถูกคิดโทษมากขึ้น",heavily:"อย่างมาก / อย่างหนัก",plausible:"สมเหตุสมผล / เป็นไปได้ในสถานการณ์จริง",protected:"ที่ได้รับการคุ้มครอง",demographic:"เกี่ยวกับกลุ่มประชากร",sustained:"ต่อเนื่องเป็นระยะเวลาหนึ่ง",intermittent:"มาเป็นช่วง ๆ / ไม่ต่อเนื่อง",underlying:"ที่อยู่เบื้องล่าง / เป็นโครงสร้างรองรับ",jurisdiction:"เขตอำนาจตามกฎหมาย",retailer:"ร้านค้าปลีก / บริษัทค้าปลีก",churn:"ลูกค้าเลิกใช้ / ยกเลิกบริการ",progressively:"ค่อย ๆ / เพิ่มขึ้นทีละน้อย",corrupted:"เสีย / เพี้ยน / ถูกทำให้ผิดปกติ",individual:"แต่ละรายการ / รายหนึ่ง",unsupported:"ไม่มีหลักฐานหรือแหล่งข้อมูลรองรับ",relevant:"เกี่ยวข้อง / ตรงกับเรื่อง",irrelevant:"ไม่เกี่ยวข้อง / ไม่ตรงกับเรื่อง",retrieve:"ดึงกลับมา / ค้นคืน",retrieval:"การค้นคืนข้อมูล",rerank:"จัดอันดับใหม่",reranking:"การจัดอันดับใหม่",ranking:"การจัดอันดับ",candidate:"ตัวเลือกที่นำมาเปรียบเทียบ",guardrail:"ขอบเขต / ข้อจำกัดเพื่อควบคุมความปลอดภัย","member accounts":"บัญชีสมาชิกภายใต้ AWS Organizations",approval:"การอนุมัติ",approved:"ที่ได้รับอนุมัติ",reusable:"นำกลับมาใช้ซ้ำได้",predictable:"คาดการณ์ได้",capacity:"ความสามารถรองรับงาน / ความจุ",explicitly:"อย่างชัดเจน / ระบุไว้ชัดเจน",deterministic:"ให้ผลหรือเส้นทางที่กำหนดแน่นอน",orchestration:"การควบคุมและจัดลำดับการทำงาน",outlier:"ค่าที่หลุดจากกลุ่ม / ค่าผิดปกติ",majority:"กลุ่มส่วนใหญ่",minority:"กลุ่มส่วนน้อย",curated:"คัดเลือกและจัดเตรียมอย่างมีคุณภาพ",baseline:"ค่าหรือสภาพตั้งต้นสำหรับใช้เปรียบเทียบ",degrade:"เสื่อมลง / ประสิทธิภาพลดลง",oversight:"การกำกับดูแล",recourse:"ช่องทางให้ผู้ได้รับผลกระทบขอทบทวนหรือแก้ไข",consistent:"สม่ำเสมอ",inconsistent:"ไม่สม่ำเสมอ",rare:"เกิดน้อย / มีสัดส่วนน้อย",broader:"กว้างกว่า / ครอบคลุมมากกว่า",unchanged:"ไม่เปลี่ยนแปลง",varied:"หลากหลาย / แตกต่างกัน",repetitive:"ซ้ำ ๆ",predictability:"ความคาดเดาได้","in exchange for":"แลกกับ","rather than":"แทนที่จะเป็น",expose:"เปิดให้เข้าถึง / เปิดเผยความสามารถ",discoverable:"ค้นพบหรือค้นหาเจอได้",confidential:"เป็นความลับ",obligation:"ข้อผูกพัน / หน้าที่ที่ต้องปฏิบัติ",prohibited:"ถูกห้าม",immutable:"แก้ไขย้อนหลังไม่ได้ / ไม่เปลี่ยนแปลง",disclose:"เปิดเผย / แจ้งให้ทราบ",adequate:"เพียงพอ / เหมาะสมตามความต้องการ",consequential:"มีผลกระทบสำคัญ",disparity:"ความแตกต่าง / ความเหลื่อมล้ำระหว่างกลุ่ม",rural:"ชนบท / พื้นที่ชนบท",
    auditable:"ตรวจสอบย้อนหลังได้",claim:"การเรียกร้องสินไหม / เคลมประกัน",cataloging:"การจัดหมวดหมู่และทำรายการข้อมูล",assets:"สินทรัพย์ / ทรัพยากรที่องค์กรมี",sharply:"อย่างมาก / เพิ่มขึ้นรวดเร็ว",cites:"อ้างอิง",confidently:"อย่างมั่นใจ",preferences:"ความชอบ / การตั้งค่าที่ชอบ",photorealistic:"สมจริงเหมือนภาพถ่าย",subtasks:"งานย่อย",specialist:"ผู้เชี่ยวชาญเฉพาะด้าน",specialists:"ผู้เชี่ยวชาญเฉพาะด้าน","customer-facing":"ที่ลูกค้าใช้งานโดยตรง",delegates:"มอบหมายงานให้ผู้อื่นทำ",branching:"การแตกแขนงตามเงื่อนไข",procurement:"ฝ่ายจัดซื้อ / งานจัดซื้อ",alongside:"ควบคู่กับ",bypassing:"หลีกเลี่ยง / ข้ามข้อจำกัด",restrictions:"ข้อจำกัด",competitor:"คู่แข่ง",wording:"ถ้อยคำ / รูปแบบการเขียน",ingests:"นำข้อมูลเข้า",align:"ปรับให้สอดคล้อง",imbalanced:"ไม่สมดุล",governance:"การกำกับดูแล",flagged:"ถูกทำเครื่องหมาย / ถูกแจ้งเตือน",enforce:"บังคับใช้",ungrounded:"ไม่มีหลักฐานจาก context รองรับ",invoked:"เรียกใช้งาน",integrity:"ความสมบูรณ์และไม่ถูกแก้ไขโดยไม่ได้รับอนุญาต",leakage:"การรั่วไหล",vulnerabilities:"ช่องโหว่",cadence:"รอบความถี่ / ความถี่ตามกำหนด",reassessment:"การประเมินซ้ำ",reassessments:"การประเมินซ้ำ",exposure:"ความเสี่ยงที่จะถูกเปิดเผย / ถูกเข้าถึง",mitigation:"การลดหรือบรรเทาความเสี่ยง",mitigate:"ลดหรือบรรเทาความเสี่ยง",representative:"เป็นตัวแทนของกลุ่มเป้าหมายได้ดี"
  };
  const extraSource=new Set(["forecast","overtime","searchable","subscription","interaction","offering","reference","preference","hiring","audit"]);
  const contains=(text,term)=>String(text||"").toLowerCase().includes(String(term).toLowerCase());
  set.questions.forEach(q=>{
    const old=Array.isArray(q.vocab)?q.vocab:[];
    const choiceText=Object.values(q.choices||{}).join(" ");
    const hints=[];
    for(const [term,th] of Object.entries(glossary)){
      if(contains(q.question,term)&&!contains(choiceText,term)) hints.push({term,th});
    }
    old.forEach(v=>{
      if(extraSource.has(String(v.term||"").toLowerCase())&&!contains(choiceText,v.term)&&!hints.some(x=>x.term.toLowerCase()===String(v.term).toLowerCase())) hints.push(v);
    });
    hints.sort((a,b)=>b.term.length-a.term.length);
    q.vocab=hints.slice(0,3);
  });

  const expectedDomains={1:13,2:16,3:18,4:9,5:9};
  const domainCounts={},typeCounts={},taskCounts={};
  const problems=[];
  set.questions.forEach(q=>{
    domainCounts[q.domain]=(domainCounts[q.domain]||0)+1;
    typeCounts[q.type]=(typeCounts[q.type]||0)+1;
    taskCounts[q.task]=(taskCounts[q.task]||0)+1;
    const keys=Object.keys(q.choices||{});
    if(q.type==="single"&&q.answer.length!==1) problems.push("Q"+q.id+" single answer count");
    if(q.type==="multiple"&&q.answer.length<2) problems.push("Q"+q.id+" multi answer count");
    if(q.type==="ordering"&&(q.answer.length!==keys.length||q.answer.some(k=>!keys.includes(k)))) problems.push("Q"+q.id+" ordering");
    if(q.type==="matching"){
      const right=Object.keys(q.matches||{});
      if(q.answer.length!==keys.length) problems.push("Q"+q.id+" matching length");
      q.answer.forEach(pair=>{const [l,r]=pair.split(":");if(!keys.includes(l)||!right.includes(r)) problems.push("Q"+q.id+" invalid match");});
    } else if(q.answer.some(k=>!keys.includes(k))) problems.push("Q"+q.id+" invalid answer");
    const choiceText=Object.values(q.choices||{}).join(" ").toLowerCase();
    (q.vocab||[]).forEach(v=>{if(choiceText.includes(String(v.term).toLowerCase())) problems.push("Q"+q.id+" vocab leak "+v.term);});
    if(/\bthe clue is\b/i.test(q.question||"")) problems.push("Q"+q.id+" clue-style");
  });
  Object.entries(expectedDomains).forEach(([d,n])=>{if(domainCounts[d]!==n) problems.push("D"+d+"="+domainCounts[d]);});
  Object.keys(taskNames).forEach(t=>{if(!taskCounts[t]) problems.push("missing task "+t);});
  if(set.questions.length!==65) problems.push("total="+set.questions.length);
  if(problems.length) console.error("Set 20 quality validation failed",problems);
  set._blueprint={domainCounts,typeCounts,taskCounts,qualityProblems:problems};
})();