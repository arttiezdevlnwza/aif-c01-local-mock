(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:2,type:'single',...x});

  add({objective:'2.3.1',target:'amazon-nova-model-family-angle',
    q:'A product team is building a multimodal GenAI application on Amazon Bedrock and wants to evaluate foundation models developed by Amazon rather than choosing an AWS service for governance, document extraction, or monitoring. The architects need a model family that includes Amazon-developed generative models suitable for different modalities and capability levels. Which offering are they evaluating?',
    th:'ทีมผลิตภัณฑ์กำลังสร้าง multimodal GenAI application บน Amazon Bedrock และต้องการประเมิน foundation models ที่พัฒนาโดย Amazon เอง แทนการเลือก AWS service ด้าน governance, document extraction หรือ monitoring สถาปนิกต้องการ model family ที่ประกอบด้วย generative models ของ Amazon สำหรับ modality และระดับความสามารถที่แตกต่างกัน Offering ใดที่ทีมกำลังประเมิน?',
    ask:'ระบุ Amazon Nova ว่าเป็นตระกูล foundation models ของ Amazon ไม่ใช่ service ด้าน governance หรือ data processing.',
    choices:{A:'Amazon Nova',B:'AWS Config',C:'Amazon Textract',D:'Amazon Inspector'},
    answer:['A'],
    why:{A:'ถูก เพราะ Amazon Nova เป็นตระกูล foundation models ของ Amazon ที่ใช้งานกับ GenAI workloads ตามรุ่นและ modality ที่รองรับ.',B:'ผิด เพราะ AWS Config ใช้ด้าน resource configuration/compliance.',C:'ผิด เพราะ Textract ใช้ extract text/forms/tables จากเอกสาร.',D:'ผิด เพราะ Inspector เป็น vulnerability-management service.'},
    cue:'Nova = Amazon foundation models.'});

  add({objective:'2.3.1',target:'quick-research-vs-flows-vs-automate',type:'matching',
    q:'A business operations group is standardizing how employees use Amazon Quick because three teams need very different experiences. Strategy analysts need AI to investigate complex questions across approved enterprise information and synthesize a research brief. Individual teams want lightweight reusable routines for common work. A finance process requires a long-running workflow with branching, approvals, exception handling, and interaction across business applications. Match each requirement with the most appropriate Amazon Quick capability.',
    th:'กลุ่ม business operations กำลังทำมาตรฐานการใช้ Amazon Quick เพราะมีสามทีมที่ต้องการประสบการณ์ต่างกันมาก นักวิเคราะห์กลยุทธ์ต้องการให้ AI สืบค้นคำถามซับซ้อนจากข้อมูลองค์กรที่อนุมัติและสังเคราะห์เป็น research brief ทีมทั่วไปต้องการ routine แบบเบาที่นำกลับมาใช้ซ้ำได้ ส่วนกระบวนการฝ่ายการเงินต้องการ workflow ที่ทำงานยาว มี branching, approvals, exception handling และเชื่อมหลาย business applications จงจับคู่ requirement แต่ละข้อกับ Amazon Quick capability ที่เหมาะสมที่สุด.',
    ask:'แยก Quick Research, Quick Flows และ Quick Automate ตามความลึกของ research และความซับซ้อนของ workflow.',
    choices:{A:'Investigate and synthesize a complex business question into a research brief',B:'Create lightweight reusable routines for personal or team work',C:'Run a complex long-running enterprise process with branching and approvals'},
    matches:{'1':'Quick Research','2':'Quick Flows','3':'Quick Automate'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Deep research/synthesis → Quick Research.','✅ Lightweight reusable routine → Quick Flows.','✅ Complex enterprise workflow with branching/approvals → Quick Automate.'],
    cue:'Research = ค้นคว้า; Flows = เบา/routine; Automate = process ใหญ่ซับซ้อน.'});

  add({objective:'2.3.1',target:'agentcore-capability-map',type:'matching',
    q:'An enterprise agent platform is moving from prototype to production and needs several managed capabilities around the agent itself. The platform must host agent sessions, expose existing APIs as tools, preserve useful information across interactions, collect traces and operational signals, and evaluate agent quality over representative tasks. Match each production requirement with the most appropriate Amazon Bedrock AgentCore capability.',
    th:'enterprise agent platform กำลังย้ายจาก prototype ไป production และต้องการ managed capabilities หลายอย่างรอบตัว agent Platform ต้อง host agent sessions, expose APIs ที่มีอยู่ให้เป็น tools, เก็บข้อมูลที่มีประโยชน์ข้าม interactions, รวบรวม traces และ operational signals และประเมินคุณภาพ agent บน representative tasks จงจับคู่ production requirement กับ Amazon Bedrock AgentCore capability ที่เหมาะสมที่สุด.',
    ask:'แยก AgentCore Runtime, Gateway, Memory, Observability และ Evaluations.',
    choices:{A:'Host and run agent sessions',B:'Expose APIs and services as callable agent tools',C:'Persist useful information across interactions',D:'Collect traces, logs, and operational signals',E:'Assess agent quality and behavior over evaluation tasks'},
    matches:{'1':'AgentCore Runtime','2':'AgentCore Gateway','3':'AgentCore Memory','4':'AgentCore Observability','5':'AgentCore Evaluations'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ Run sessions → Runtime.','✅ APIs as tools → Gateway.','✅ Persist information → Memory.','✅ Traces/operations → Observability.','✅ Evaluate behavior/quality → Evaluations.'],
    cue:'Run / Connect tools / Remember / Observe / Evaluate.'});

  add({objective:'2.1.6',target:'strands-vs-agentcore',
    q:'A development team wants to build a custom AI agent in code using an SDK that provides agent abstractions and tool integration, while the platform team separately plans to use managed AWS capabilities for production runtime, identity, memory, gateways, and observability. Developers are confusing the agent-building framework with the production-services layer. Which statement most accurately distinguishes the two?',
    th:'ทีมพัฒนาต้องการสร้าง custom AI agent ด้วย code โดยใช้ SDK ที่มี agent abstractions และ tool integration ขณะที่ทีม platform วางแผนใช้ AWS managed capabilities สำหรับ production runtime, identity, memory, gateways และ observability นักพัฒนากำลังสับสนระหว่าง framework สำหรับสร้าง agent กับ production-services layer ข้อใดแยกสองสิ่งนี้ได้ถูกต้องที่สุด?',
    ask:'แยก Strands Agents ซึ่งเป็น SDK/framework สำหรับสร้าง agents ออกจาก Amazon Bedrock AgentCore ซึ่งเป็น managed production capabilities.',
    choices:{A:'Strands Agents is used to build agent logic, while AgentCore provides managed capabilities for running and operating agents in production',B:'AgentCore is a text-to-speech service and Strands is a data warehouse',C:'Strands replaces IAM and all production security controls automatically',D:'The two names refer to the exact same product and role'},
    answer:['A'],
    why:{A:'ถูก เพราะ Strands เป็น SDK/framework สำหรับ agent development ส่วน AgentCore เป็นชุด managed capabilities รอบ production agents.',B:'ผิด เพราะนิยามทั้งสองไม่เกี่ยวกับ speech/data warehouse.',C:'ผิด เพราะ SDK ไม่ยกเลิก IAM/security responsibilities.',D:'ผิด เพราะเป็น offerings คนละบทบาท.'},
    cue:'Strands = Build agent; AgentCore = Run/Operate/Secure agent.'});

  add({objective:'2.3.1',target:'aws-transform-modernization-angle',
    q:'A large enterprise has legacy applications that need modernization rather than a new customer-facing chatbot. The transformation program wants specialized AI agents that can analyze existing code and systems, assist migration planning, and accelerate modernization work across older application stacks. Which AWS offering is most closely associated with this agentic modernization and migration use case?',
    th:'องค์กรขนาดใหญ่มี legacy applications ที่ต้อง modernization ไม่ได้ต้องการ customer-facing chatbot ใหม่ โครงการ transformation ต้องการ specialized AI agents ที่วิเคราะห์ code และ systems เดิม ช่วยวางแผน migration และเร่งงาน modernization บน application stacks รุ่นเก่า AWS offering ใดสัมพันธ์โดยตรงที่สุดกับ agentic modernization และ migration use case นี้?',
    ask:'ระบุ AWS Transform จาก use case migration/application modernization.',
    choices:{A:'AWS Transform',B:'Amazon Polly',C:'AWS Artifact',D:'Amazon Personalize'},
    answer:['A'],
    why:{A:'ถูก เพราะ AWS Transform มุ่งใช้ agentic AI เพื่อช่วย migration และ modernization ของ workloads/applications/code ตาม capability ที่รองรับ.',B:'ผิด เพราะ Polly เป็น text-to-speech.',C:'ผิด เพราะ Artifact ใช้ compliance documents.',D:'ผิด เพราะ Personalize ทำ recommendations.'},
    cue:'Legacy migration/modernization + AI agents = AWS Transform.'});

  add({objective:'2.3.1',target:'amazon-q-enterprise-assistant-angle',
    q:'An enterprise wants employees to ask natural-language questions about approved internal information and receive assistance in everyday work without requiring each employee to build or operate an ML model. The organization is evaluating an AWS enterprise AI assistant rather than an ML training platform or a custom agent SDK. Which product family best matches this user-facing enterprise-assistant requirement?',
    th:'องค์กรต้องการให้พนักงานถามคำถามภาษาธรรมชาติเกี่ยวกับข้อมูลภายในที่อนุมัติและได้รับความช่วยเหลือในงานประจำ โดยไม่ต้องให้พนักงานแต่ละคนสร้างหรือ operate ML model เอง องค์กรกำลังประเมิน AWS enterprise AI assistant แทน ML training platform หรือ custom agent SDK Product family ใดตรงกับ user-facing enterprise-assistant requirement นี้ที่สุด?',
    ask:'ระบุ Amazon Q ในบทบาท enterprise AI assistant.',
    choices:{A:'Amazon Q',B:'Amazon SageMaker AI',C:'Strands Agents',D:'AWS Glue DataBrew'},
    answer:['A'],
    why:{A:'ถูก เพราะ Amazon Q เป็น product family ด้าน enterprise AI assistance สำหรับงานและข้อมูลขององค์กรตาม product capability.',B:'ผิด เพราะ SageMaker AI เป็น ML development platform สำหรับ technical teams.',C:'ผิด เพราะ Strands เป็น SDK/framework สำหรับสร้าง agents.',D:'ผิด เพราะ DataBrew เป็น visual data preparation.'},
    cue:'Enterprise assistant สำหรับพนักงาน = Amazon Q.'});

  add({objective:'2.1.6',target:'agent-memory-semantic-episodic-angle',type:'matching',
    q:'A long-lived customer agent needs several kinds of memory rather than storing every past message in one undifferentiated history. During a new conversation it must hold the current task state, remember a stable fact such as the customer’s preferred language, and recall what happened in one specific previous dispute when that past event becomes relevant. Match each example with the memory concept that best describes it.',
    th:'customer agent ที่ใช้งานระยะยาวต้องการ memory หลายชนิด แทนการเก็บทุกข้อความเก่าไว้รวมกันแบบไม่แยกประเภท ระหว่าง conversation ใหม่ ระบบต้องถือ current task state ไว้ จำข้อเท็จจริงที่คงที่ เช่น ภาษาที่ลูกค้าชอบ และ recall ว่าเกิดอะไรขึ้นใน dispute หนึ่งครั้งก่อนหน้าเมื่อเหตุการณ์นั้นเกี่ยวข้อง จงจับคู่ตัวอย่างแต่ละแบบกับ memory concept ที่ตรงที่สุด.',
    ask:'แยก Working/Short-term Memory, Semantic Memory และ Episodic Memory.',
    choices:{A:'Information needed only to complete the current interaction',B:'A stable fact or preference about the user',C:'Details of one specific past event or interaction'},
    matches:{'1':'Working / short-term memory','2':'Semantic memory','3':'Episodic memory'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Current task state → Working/short-term memory.','✅ Stable fact/preference → Semantic memory.','✅ Specific past event → Episodic memory.'],
    cue:'Now = Working; Fact = Semantic; Event = Episodic.'});
})();