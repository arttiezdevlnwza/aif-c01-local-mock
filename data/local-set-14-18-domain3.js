(()=>{
  const bank=window.LOCAL_MOCK_14_18_BANK=window.LOCAL_MOCK_14_18_BANK||[];
  const add=(choices,explanation,variants,extra={})=>bank.push({domain:3,choices,explanation,variants,...extra});

  add(
    ['Amazon Bedrock','Amazon SageMaker AI','AWS Glue','Amazon EC2 Auto Scaling'],
    'Amazon Bedrock is the managed foundation-model service for building generative AI applications with model APIs and GenAI capabilities. SageMaker AI is the broader ML platform for building, training, tuning, and deploying models with deeper ML control. Glue is data integration, and EC2 Auto Scaling manages compute capacity.',
    [
      ['A developer wants managed access to multiple foundation models through APIs without managing model-training infrastructure. Which AWS service BEST fits?','developer ต้องการ managed access ไปหลาย foundation models ผ่าน API โดยไม่จัดการ model-training infrastructure ควรใช้ service ใด?',0],
      ['A data science team wants deep control over custom training jobs, notebooks, pipelines, and model deployment. Which AWS service is the closer fit?','data science team ต้องการ control custom training jobs, notebooks, pipelines และ model deployment service ใดตรงกว่า?',1],
      ['The workload needs Bedrock-native capabilities such as Knowledge Bases and Agents around managed FMs. Which service should the team choose?','workload ต้องใช้ Bedrock-native capabilities เช่น Knowledge Bases/Agents รอบ managed FMs ควรเลือก service ใด?',0],
      ['A company must train a custom ML model from its own algorithm and manage the full ML lifecycle. Which platform is MOST appropriate?','บริษัทต้อง train custom ML model จาก algorithm ของตัวเองและจัดการ full ML lifecycle platform ใดเหมาะที่สุด?',1],
      ['The clue is "managed foundation-model API and GenAI features," not "full custom ML platform." Which answer fits?','clue คือ managed foundation-model API และ GenAI features ไม่ใช่ full custom ML platform ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Knowledge Bases for Amazon Bedrock','Bedrock Flows','AgentCore Runtime','Prompt Management'],
    'Knowledge Bases for Amazon Bedrock supports managed RAG over enterprise data sources. Flows orchestrate explicitly defined steps. AgentCore Runtime hosts agent execution. Prompt Management versions and governs reusable prompts.',
    [
      ['A Bedrock application needs managed retrieval from approved enterprise documents to ground responses. Which capability BEST fits?','Bedrock app ต้องการ managed retrieval จาก approved enterprise documents เพื่อ ground response ควรใช้ capability ใด?',0],
      ['Which capability is the closer fit for managed RAG over internal documents rather than a fixed orchestration graph?','capability ใดตรงกับ managed RAG over internal docs มากกว่า fixed orchestration graph?',0],
      ['A policy assistant must ingest documents, retrieve relevant passages, and provide them as grounding context to an FM. Which feature is MOST direct?','policy assistant ต้อง ingest docs, retrieve relevant passages และส่งเป็น grounding context ให้ FM feature ใดตรงที่สุด?',0],
      ['The team already has a vector-backed enterprise knowledge source and wants Bedrock to retrieve from it for answers. Which capability should connect the knowledge to the FM?','ทีมมี vector-backed enterprise knowledge source แล้วและต้องการให้ Bedrock retrieve เพื่อใช้ตอบ ควรใช้ capability ใด?',0],
      ['The clue is "managed RAG knowledge source." Which answer fits?','clue คือ managed RAG knowledge source ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Agents for Amazon Bedrock','Bedrock Flows','Prompt Caching','Model Evaluation'],
    'Agents are suited to model-driven planning and dynamic tool selection. Bedrock Flows is suited to explicitly designed, more deterministic orchestration of known steps. Prompt Caching and Model Evaluation solve efficiency and assessment problems.',
    [
      ['A workflow must dynamically decide which tool to call next based on intermediate results. Which Bedrock capability BEST fits?','workflow ต้อง dynamically decide ว่าจะเรียก tool ใดถัดไปจาก intermediate results ควรใช้ capability ใด?',0],
      ['A process always runs classify → retrieve → summarize → save in a fixed developer-defined graph. Which capability is the closer fit?','process ทำ classify → retrieve → summarize → save ตาม fixed graph ที่ developer define ควรใช้ capability ใด?',1],
      ['The model must reason about a goal and choose among several actions instead of following a predetermined sequence. Which option BEST fits?','โมเดลต้อง reason จาก goal และเลือก actions เองแทนทำ predetermined sequence ควรเลือกอะไร?',0],
      ['A document pipeline uses explicit branches and steps defined in advance, with no need for autonomous planning. Which Bedrock feature should orchestrate it?','document pipeline ใช้ explicit branches/steps กำหนดล่วงหน้าและไม่ต้อง autonomous planning feature ใดควร orchestrate?',1],
      ['The clue is "fixed deterministic orchestration, not autonomous tool selection." Which answer fits?','clue คือ fixed deterministic orchestration ไม่ใช่ autonomous tool selection ควรตอบอะไร?',1]
    ],
    {vocab:[{term:'predetermined',th:'กำหนดไว้ล่วงหน้า'}]}
  );

  add(
    ['AgentCore Runtime','AgentCore Gateway','AgentCore Identity','AgentCore Observability'],
    'AgentCore Runtime provides a managed environment for running agents and sessions. Gateway exposes APIs/tools, Identity manages authentication and credentials, and Observability provides traces and operational visibility.',
    [
      ['A team needs a managed environment to host and execute an agent with isolated sessions. Which AgentCore capability BEST fits?','ทีมต้องการ managed environment เพื่อ host/execute agent พร้อม isolated sessions ควรใช้ AgentCore capability ใด?',0],
      ['Which AgentCore component is primarily about where the agent runs rather than how tools are exposed or credentials are obtained?','AgentCore component ใดเน้นว่า agent รันที่ไหน ไม่ใช่ expose tools หรือ credentials?',0],
      ['A platform engineer wants managed agent execution without building custom runtime infrastructure. Which component should be selected?','platform engineer ต้องการ managed agent execution โดยไม่สร้าง custom runtime infrastructure ควรเลือก component ใด?',0],
      ['An agent application needs managed session execution in a secure runtime. Which AgentCore feature is MOST direct?','agent app ต้องการ managed session execution ใน secure runtime feature ใดตรงที่สุด?',0],
      ['The clue is "host and run the agent." Which AgentCore component fits?','clue คือ host and run the agent AgentCore component ใดตรง?',0]
    ]
  );

  add(
    ['AgentCore Gateway','AgentCore Runtime','AgentCore Memory','AgentCore Evaluations'],
    'AgentCore Gateway provides a governed entry point that exposes APIs and tools to agents. Runtime executes agents, Memory stores short- or long-term context, and Evaluations assesses agent quality and behavior.',
    [
      ['A company has existing enterprise APIs and wants to expose them to agents as governed tools. Which AgentCore component BEST fits?','บริษัทมี enterprise APIs เดิมและต้องการ expose ให้ agents ใช้เป็น governed tools ควรใช้ component ใด?',0],
      ['Which AgentCore component sits at the tool/API exposure boundary rather than hosting the agent itself?','AgentCore component ใดอยู่ที่ boundary ของ tool/API exposure ไม่ใช่ host agent?',0],
      ['Developers want one controlled entry point for agent-accessible tools. Which capability is MOST direct?','developer ต้องการ controlled entry point เดียวสำหรับ tools ที่ agent access ได้ capability ใดตรงที่สุด?',0],
      ['An agent must call enterprise services through a managed gateway that can apply policy before tool invocation. Which component should be used?','agent ต้อง call enterprise services ผ่าน managed gateway ที่ apply policy ก่อน tool invocation ได้ ควรใช้ component ใด?',0],
      ['The clue is "expose and govern tools for agents." Which answer fits?','clue คือ expose และ govern tools for agents ควรตอบอะไร?',0]
    ]
  );

  add(
    ['AgentCore Identity','AgentCore Runtime','AgentCore Memory','AgentCore Policy'],
    'AgentCore Identity manages authentication and credentials for agents and downstream services. Runtime handles execution, Memory stores context, and Policy controls whether tool actions are allowed.',
    [
      ['An agent must obtain the correct credentials to call a protected service on behalf of a user. Which AgentCore capability BEST fits?','agent ต้องได้ credentials ที่ถูกต้องเพื่อ call protected service แทน user ควรใช้ capability ใด?',0],
      ['Which component addresses authentication and identity rather than agent execution or persistent context?','component ใดแก้ authentication/identity ไม่ใช่ agent execution หรือ persistent context?',0],
      ['A security team wants agents to use managed identities when accessing downstream APIs. Which capability is MOST relevant?','security team ต้องการให้ agents ใช้ managed identities ตอน access downstream APIs capability ใดเกี่ยวข้องที่สุด?',0],
      ['Credential handling should stay outside prompt logic while the agent accesses protected tools. Which AgentCore capability helps?','ต้องการให้ credential handling อยู่นอก prompt logic ตอน agent access protected tools capability ใดช่วย?',0],
      ['The clue is "credentials and authentication for agent access." Which answer fits?','clue คือ credentials และ authentication สำหรับ agent access ควรตอบอะไร?',0]
    ]
  );

  add(
    ['AgentCore Observability','AgentCore Gateway','AgentCore Memory','AgentCore Identity'],
    'AgentCore Observability provides traces, metrics, and visibility into agent behavior for debugging and monitoring. Gateway exposes tools, Memory persists context, and Identity handles credentials.',
    [
      ['Operations needs traces showing which agent steps and tool calls happened during a failed session. Which capability BEST fits?','operations ต้องการ traces ว่า agent ทำ steps/tool calls อะไรใน failed session ควรใช้ capability ใด?',0],
      ['Which AgentCore component helps debug agent behavior using traces and metrics?','AgentCore component ใดช่วย debug agent behavior ด้วย traces/metrics?',0],
      ['A developer wants to inspect execution paths across agent sessions to understand unexpected behavior. Which component is MOST direct?','developer ต้องการ inspect execution paths ข้าม agent sessions เพื่อเข้าใจ unexpected behavior component ใดตรงที่สุด?',0],
      ['A production agent occasionally chooses an unexpected tool path. Which capability helps investigate what happened?','production agent บางครั้งเลือก unexpected tool path capability ใดช่วย investigate?',0],
      ['The clue is "traces, metrics, debugging." Which AgentCore component fits?','clue คือ traces, metrics, debugging AgentCore component ใดตรง?',0]
    ]
  );

  add(
    ['AgentCore Memory','Prompt Caching','AgentCore Runtime','Knowledge Bases for Amazon Bedrock'],
    'AgentCore Memory supports short-term conversational state and long-term persistent insights or preferences across sessions. Prompt Caching reuses repeated prompt context for efficiency, Runtime hosts execution, and Knowledge Bases retrieves external documents.',
    [
      ['A personal assistant should remember a user’s stable preferences across separate sessions. Which capability BEST fits?','personal assistant ควรจำ stable preferences ของ user ข้ามหลาย session ควรใช้ capability ใด?',0],
      ['Which feature stores persistent agent context rather than merely reusing repeated prompt tokens?','feature ใดเก็บ persistent agent context ไม่ใช่แค่ reuse repeated prompt tokens?',0],
      ['An agent needs durable memory that survives beyond the current invocation. Which AgentCore capability is MOST relevant?','agent ต้องการ durable memory ที่อยู่ต่อหลัง current invocation capability ใดเกี่ยวข้องที่สุด?',0],
      ['A travel assistant should remember seating preferences next month without replaying every past chat into the prompt. Which feature should be used?','travel assistant ควรจำ seating preference เดือนหน้าโดยไม่ replay ทุก chat เก่าเข้า prompt ควรใช้ feature ใด?',0],
      ['The clue is "persistent preferences across sessions." Which answer fits?','clue คือ persistent preferences across sessions ควรตอบอะไร?',0]
    ]
  );

  add(
    ['AgentCore Policy','AgentCore Identity','AgentCore Memory','AgentCore Observability'],
    'AgentCore Policy applies centralized deterministic authorization-style controls to agent-tool interactions, integrating with AgentCore Gateway. Identity authenticates, Memory stores context, and Observability records behavior.',
    [
      ['A company wants deterministic rules that deny a high-risk tool call unless specific conditions are satisfied. Which AgentCore capability BEST fits?','บริษัทต้องการ deterministic rules ที่ deny high-risk tool call ถ้าเงื่อนไขไม่ผ่าน ควรใช้ capability ใด?',0],
      ['Which component can enforce allow/deny policy on tool invocations even if the model decides to try the action?','component ใด enforce allow/deny policy บน tool invocation ได้แม้ model ตัดสินใจลอง action?',0],
      ['Security wants centralized policy outside agent code for governing which gateway tools are allowed. Which capability is MOST direct?','security ต้องการ centralized policy นอก agent code เพื่อ govern ว่า gateway tools ใด allowed capability ใดตรงที่สุด?',0],
      ['A policy engine evaluates every applicable tool invocation and can block it before execution. Which AgentCore feature is being used?','policy engine evaluate tool invocation และ block ก่อน execute ได้ กำลังใช้ AgentCore feature ใด?',0],
      ['The clue is "deterministic action authorization for agent tools." Which answer fits?','clue คือ deterministic action authorization สำหรับ agent tools ควรตอบอะไร?',0]
    ],
    {vocab:[{term:'deterministic',th:'ให้ผลตามกฎที่กำหนด ไม่ขึ้นกับการสุ่มของโมเดล'}]}
  );

  add(
    ['AgentCore Evaluations','AgentCore Runtime','AgentCore Gateway','AgentCore Identity'],
    'AgentCore Evaluations provides automated assessment of agent quality and behavior, including dimensions such as task completion, response quality, safety, and tool usage. Runtime hosts agents, Gateway exposes tools, and Identity handles authentication.',
    [
      ['A team wants automated scoring of whether an agent completes tasks correctly and chooses the expected tools. Which AgentCore capability BEST fits?','ทีมต้องการ automated scoring ว่า agent complete task ถูกและเลือก tools ตาม expected หรือไม่ ควรใช้ capability ใด?',0],
      ['Which AgentCore capability is designed to assess agent performance rather than host or authenticate the agent?','AgentCore capability ใดออกแบบเพื่อ assess agent performance ไม่ใช่ host/authenticate agent?',0],
      ['A team needs built-in and custom evaluators to measure helpfulness, safety, and tool-use behavior. Which capability is MOST direct?','ทีมต้องการ built-in/custom evaluators เพื่อวัด helpfulness, safety, tool-use behavior capability ใดตรงที่สุด?',0],
      ['An agent is already deployed, and the team wants continuous quality assessment from observed behavior. Which AgentCore capability should it add?','agent deploy แล้วและทีมต้องการ continuous quality assessment จาก observed behavior ควรเพิ่ม capability ใด?',0],
      ['The clue is "automated quality assessment for agents and tools." Which answer fits?','clue คือ automated quality assessment สำหรับ agents/tools ควรตอบอะไร?',0]
    ]
  );

  add(
    ['MCP Resource','MCP Tool','MCP Prompt','AgentCore Runtime'],
    'In MCP, Resources expose data or context to read, Tools expose callable actions, and Prompts expose reusable prompt templates. AgentCore Runtime is an AWS runtime service, not an MCP primitive.',
    [
      ['An MCP server exposes a read-only product catalog so the client can retrieve context. Which MCP primitive BEST fits?','MCP server expose product catalog แบบ read-only ให้ client retrieve context ควรใช้ primitive ใด?',0],
      ['An MCP server exposes a function that creates a support ticket when invoked. Which primitive is this?','MCP server expose function ที่ create support ticket เมื่อ invoke เป็น primitive ใด?',1],
      ['An MCP server provides a reusable template for how a client should ask for a code review. Which primitive BEST fits?','MCP server มี reusable template ว่าควรถาม code review อย่างไร primitive ใดตรง?',2],
      ['A model must read a document from an MCP server but must not execute an operation. Which primitive should be used?','model ต้องอ่าน document จาก MCP server แต่ห้าม execute operation ควรใช้ primitive ใด?',0],
      ['The clue is "callable action," not "readable context." Which MCP primitive fits?','clue คือ callable action ไม่ใช่ readable context MCP primitive ใดตรง?',1]
    ]
  );

  add(
    ['Multi-agent system','Single agent with multiple tools','RAG pipeline','Bedrock Flow'],
    'A multi-agent system uses multiple agents with distinct roles that coordinate. One agent calling many tools is still a single-agent multi-tool design. RAG retrieves knowledge, and a Flow is explicit orchestration that does not by itself imply multiple agents.',
    [
      ['A supervisor agent delegates research, planning, and validation to three specialist agents. Which architecture is this?','supervisor agent delegate research/planning/validation ให้ specialist agents 3 ตัว architecture นี้คืออะไร?',0],
      ['One agent can call search, CRM, and email tools, but there are no other agents. How should this architecture be classified?','agent ตัวเดียวเรียก search, CRM, email tools ได้ แต่ไม่มี agent อื่น architecture นี้ควร classify อย่างไร?',1],
      ['A finance agent and a legal agent exchange results before an orchestrator synthesizes the final answer. Which pattern fits?','finance agent กับ legal agent แลกผลก่อน orchestrator synthesize final answer เป็น pattern ใด?',0],
      ['A customer-service agent chooses among ten tools but all reasoning belongs to that one agent. Which architecture is this?','customer-service agent เลือกได้ 10 tools แต่ reasoning ทั้งหมดอยู่ใน agent ตัวเดียว architecture นี้คืออะไร?',1],
      ['The clue is "multiple specialist agents with an orchestrator." Which answer fits?','clue คือ multiple specialist agents with an orchestrator ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Receive goal/state','Reason or plan','Select tool/action','Execute action','Observe result','Continue or finish'],
    'A normal tool-using agent loop receives the goal/state, reasons or plans, selects an action, executes it, observes the result, then decides whether to continue or finish.',
    [
      ['Before an agent can plan, what must it first receive or observe?','ก่อน agent วาง plan ได้ มันต้องรับหรือ observe อะไรก่อน?',0],
      ['After receiving the goal and current state, what cognitive step normally precedes selecting a tool?','หลังรับ goal/current state cognitive step ใดปกติมาก่อนเลือก tool?',1],
      ['An agent has formed a plan. What step chooses the concrete tool or action to take next?','agent วาง plan แล้ว step ใดเลือก concrete tool/action ถัดไป?',2],
      ['A tool has been selected. Which step actually performs the operation before feedback can be observed?','เลือก tool แล้ว step ใด execute operation ก่อน observe feedback?',3],
      ['The tool call has returned. Which step provides feedback for the next iteration?','tool call คืนผลแล้ว step ใดให้ feedback สำหรับ iteration ถัดไป?',4]
    ],
    {orderVariant:{setIndex:2,question:'Order the core agent tool-use loop from receiving a goal to deciding whether to continue.',questionTh:'เรียง core agent tool-use loop ตั้งแต่รับ goal จนตัดสินใจว่าจะทำต่อหรือจบ',choices:['Receive goal/state','Reason or plan','Select tool/action','Execute action','Observe result','Continue or finish'],answer:[0,1,2,3,4,5],explanation:'Receive the goal/state, reason, select and execute an action, observe the result, then iterate or finish.'}}
  );

  add(
    ['Amazon Q Business','Amazon Q Developer','Amazon Quick','Amazon Kendra'],
    'Amazon Q Business is an enterprise generative AI assistant over organizational knowledge. Amazon Q Developer focuses on software development. Amazon Quick supports fast business analysis and data-oriented assistance. Amazon Kendra is an intelligent enterprise search service.',
    [
      ['Employees need a generative AI assistant that answers questions over approved enterprise knowledge with access controls. Which service BEST fits?','พนักงานต้องการ generative AI assistant ที่ตอบจาก approved enterprise knowledge พร้อม access controls ควรใช้ service ใด?',0],
      ['A developer wants coding help, code explanations, and software-development assistance. Which Amazon Q offering BEST fits?','developer ต้องการ coding help, code explanation และ software-development assistance Amazon Q offering ใดตรงที่สุด?',1],
      ['A business user wants a fast AI-assisted way to explore and analyze business data rather than build software. Which service is the closer fit?','business user ต้องการ AI-assisted way ที่เร็วเพื่อ explore/analyze business data ไม่ใช่ build software service ใดตรงกว่า?',2],
      ['A company primarily needs enterprise search across indexed documents, not a generative employee assistant. Which service is the closest match?','บริษัทต้องการ enterprise search ข้าม indexed documents เป็นหลัก ไม่ใช่ generative employee assistant service ใดตรงที่สุด?',3],
      ['The clue is "enterprise generative assistant for employees over internal knowledge." Which answer fits?','clue คือ enterprise generative assistant สำหรับพนักงานบน internal knowledge ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Strands Agents SDK','Kiro','Amazon Q Developer','Bedrock Flows'],
    'Strands Agents SDK is a developer framework for building agents with models and tools in code. Kiro is associated with AI-assisted spec-driven software development. Q Developer assists software development broadly, while Bedrock Flows orchestrates defined application steps.',
    [
      ['A developer wants an SDK to build an agent in code by combining a model, tools, and agent logic. Which option BEST fits?','developer ต้องการ SDK เพื่อ build agent ใน code โดยรวม model, tools, agent logic ควรเลือกอะไร?',0],
      ['A team wants a spec-driven workflow that turns feature requirements into structured design and implementation tasks. Which tool BEST fits?','ทีมต้องการ spec-driven workflow ที่แปลง feature requirements เป็น design/tasks แบบมีโครงสร้าง ควรใช้ tool ใด?',1],
      ['A developer wants a general AI coding assistant for software-development tasks rather than a dedicated agent SDK. Which option fits?','developer ต้องการ general AI coding assistant สำหรับ software-development tasks ไม่ใช่ dedicated agent SDK ควรเลือกอะไร?',2],
      ['A workflow needs explicitly defined branches and steps rather than a developer SDK for autonomous agents. Which option is the closer fit?','workflow ต้องการ explicit branches/steps ไม่ใช่ developer SDK สำหรับ autonomous agents ควรเลือกอะไร?',3],
      ['The clue is "SDK for building agents with tools in code." Which answer fits?','clue คือ SDK สำหรับ build agents with tools in code ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Content filters','Contextual Grounding checks','Automated Reasoning checks','Sensitive information filters'],
    'Content filters screen categories of harmful or disallowed content. Contextual Grounding checks whether responses are supported by supplied reference context. Automated Reasoning checks validate claims against formalized logical rules. Sensitive information filters detect or block PII and other sensitive data.',
    [
      ['A company wants to block harmful content categories in model inputs and outputs. Which Guardrails control is MOST direct?','บริษัทต้องการ block harmful content categories ใน model input/output Guardrails control ใดตรงที่สุด?',0],
      ['A RAG assistant should be checked for whether its answer is supported by the retrieved reference text. Which Guardrails capability BEST fits?','RAG assistant ต้องถูกเช็กว่า answer supported by retrieved reference text หรือไม่ capability ใดตรงที่สุด?',1],
      ['A policy assistant must verify that its conclusion logically follows a formal set of business rules. Which Guardrails capability BEST fits?','policy assistant ต้อง verify ว่าข้อสรุป follow formal business rules อย่างมี logic capability ใดตรงที่สุด?',2],
      ['A chatbot must detect and mask personally identifiable information in requests and responses. Which control is MOST direct?','chatbot ต้อง detect/mask PII ใน request/response control ใดตรงที่สุด?',3],
      ['The clue is "formal logic and rules," not "supported by source context." Which answer fits?','clue คือ formal logic and rules ไม่ใช่ supported by source context ควรตอบอะไร?',2]
    ]
  );

  add(
    ['Amazon Textract','Amazon Rekognition','Amazon Nova Canvas','Amazon Transcribe'],
    'Textract extracts text, forms, and tables from documents. Rekognition analyzes images and video for visual objects/faces/content. Nova Canvas generates images from prompts. Transcribe converts speech audio to text.',
    [
      ['A company needs to extract printed text, form fields, and tables from scanned invoices. Which service BEST fits?','บริษัทต้อง extract printed text, form fields และ tables จาก scanned invoices ควรใช้ service ใด?',0],
      ['An application must detect objects and visual content in uploaded photos. Which service is the closest fit?','application ต้อง detect objects/visual content ใน uploaded photos service ใดตรงที่สุด?',1],
      ['A marketing team wants to generate new images from natural-language prompts. Which AWS model/service is MOST relevant?','marketing team ต้อง generate images ใหม่จาก natural-language prompts AWS model/service ใดเกี่ยวข้องที่สุด?',2],
      ['A call-center pipeline must convert recorded speech into text for downstream analysis. Which service BEST fits?','call-center pipeline ต้อง convert recorded speech เป็น text เพื่อ downstream analysis ควรใช้ service ใด?',3],
      ['The clue is "extract tables and form fields from a document image." Which answer fits?','clue คือ extract tables/form fields จาก document image ควรตอบอะไร?',0]
    ]
  );

  add(
    ['On-demand inference','Provisioned Throughput','Batch inference','Prompt Caching'],
    'On-demand inference fits variable usage paid per request/token. Provisioned Throughput provides committed model capacity for sustained predictable demand. Batch inference processes eligible offline workloads at batch economics. Prompt Caching reduces repeated prompt-context processing cost and latency.',
    [
      ['A new application has uncertain traffic and wants to pay for model usage without committing capacity. Which option BEST fits?','application ใหม่ traffic ยังไม่แน่นอนและต้องการจ่ายตาม usage โดยไม่ commit capacity ควรใช้ option ใด?',0],
      ['A production workload has steady high demand and needs predictable committed model capacity. Which option BEST fits?','production workload มี steady high demand และต้องการ predictable committed model capacity ควรใช้ option ใด?',1],
      ['A team can process a large offline set of prompts later rather than serving interactive users. Which pricing/inference option is the closest fit?','ทีม process prompts จำนวนมากแบบ offline ทีหลังได้ ไม่ต้อง serve interactive users option ใดตรงที่สุด?',2],
      ['Thousands of requests reuse the same long prompt prefix, and repeated context cost is the issue. Which optimization should be considered?','หลายพัน request reuse long prompt prefix เดิม และ repeated context cost เป็นปัญหา ควรพิจารณา optimization ใด?',3],
      ['The clue is "sustained predictable capacity." Which answer fits?','clue คือ sustained predictable capacity ควรตอบอะไร?',1]
    ],
    {vocab:[{term:'sustained',th:'ต่อเนื่องเป็นระยะเวลานาน'},{term:'committed',th:'จอง/ผูก capacity ไว้ล่วงหน้า'}]}
  );
})();
