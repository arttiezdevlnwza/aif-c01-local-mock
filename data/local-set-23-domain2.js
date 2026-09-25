(() => {
  const bank = window.LOCAL_SET_23_BANK = window.LOCAL_SET_23_BANK || [];
  const add = x => bank.push({ domain:2, ...x });

  add({task:'2.1',type:'single',target:'embedding-role',
    question:'A semantic-search system converts each document chunk into a numeric representation so that similar meanings can be compared by distance. What is this representation called?',
    questionTh:'ระบบ semantic search แปลง document chunk แต่ละส่วนเป็นตัวแทนเชิงตัวเลขเพื่อให้เปรียบเทียบความหมายที่คล้ายกันด้วยระยะห่างได้ ตัวแทนนี้เรียกว่าอะไร?',
    choices:{A:'Embedding vector',B:'Token price',C:'Prompt template',D:'Label schema'},
    answer:['A'],
    exp:['✅ A — Embedding คือ vector representation ที่เก็บความหมายเชิง semantic เพื่อใช้ similarity search.','❌ B — Token price เป็นเรื่องค่าใช้จ่าย inference.','❌ C — Prompt template คือโครงคำสั่ง reusable.','❌ D — Label schema คือโครงสร้าง target labels.','🧠 จำสั้น ๆ — ความหมาย → Vector = Embedding.']});

  add({task:'2.1',type:'single',target:'multimodal-model',
    question:'A model can accept both an image and accompanying text in the same request and reason over both inputs. Which description BEST fits?',
    questionTh:'โมเดลรับทั้งภาพและข้อความประกอบใน request เดียวกันและใช้ข้อมูลทั้งสองร่วมกันในการตอบ คำอธิบายใดตรงที่สุด?',
    choices:{A:'Multimodal foundation model',B:'Unimodal text classifier',C:'Clustering algorithm',D:'Time-series forecaster'},
    answer:['A'],
    exp:['✅ A — Multimodal model รองรับข้อมูลมากกว่าหนึ่ง modality เช่น text + image.','❌ B — Text classifier รับเฉพาะข้อความและ fixed labels.','❌ C — Clustering ใช้จัดกลุ่มข้อมูล.','❌ D — Forecasting เน้นข้อมูลตามเวลา.','🧠 จำสั้น ๆ — หลายชนิด input ใน model เดียว = Multimodal.']});

  add({task:'2.1',type:'single',target:'autoregressive-retest',
    question:'A code model produces a completion by repeatedly predicting the next token from the tokens already generated. Which generation pattern is being used?',
    questionTh:'code model สร้าง completion โดยทำนาย token ถัดไปซ้ำ ๆ จาก tokens ที่สร้างมาก่อนหน้า generation pattern นี้เรียกว่าอะไร?',
    choices:{A:'Autoregressive generation',B:'Diffusion denoising',C:'K-means clustering',D:'Principal component analysis'},
    answer:['A'],
    exp:['✅ A — การสร้าง sequence โดยทำนาย next token จาก context ก่อนหน้า คือ autoregressive generation.','❌ B — Diffusion ค่อย ๆ denoise จาก noise.','❌ C — K-means ใช้ clustering.','❌ D — PCA ใช้ลดมิติข้อมูล ไม่ใช่ sequence generation.','🧠 จำสั้น ๆ — Next token ทีละตัว = Autoregressive.']});

  add({task:'2.1',type:'single',target:'context-engineering-selection',
    question:'A chat application keeps appending every old message and every tool result until requests become expensive and important evidence is crowded out. The team wants a deliberate process for selecting, summarizing, and structuring only the information that should enter each model call. What is this practice called?',
    questionTh:'chat application ใส่ทุกข้อความเก่าและทุก tool result ต่อกันไปเรื่อย ๆ จน request แพงและ evidence สำคัญถูกเบียดออก ทีมต้องการกระบวนการที่ตั้งใจเลือก สรุป และจัดโครงเฉพาะข้อมูลที่ควรเข้า model call แต่ละครั้ง การทำแบบนี้เรียกว่าอะไร?',
    choices:{A:'Context engineering',B:'Knowledge distillation',C:'Batch transform',D:'Label encoding'},
    answer:['A'],
    exp:['✅ A — Context engineering จัดการว่า information ใดควรเข้า context window และควรจัดรูป/สรุปอย่างไร.','❌ B — Distillation ถ่ายทอด behavior จาก teacher ไป student model.','❌ C — Batch transform เป็นรูปแบบ inference แบบออฟไลน์.','❌ D — Label encoding เป็น data preprocessing สำหรับ labels/categories.','🧠 จำสั้น ๆ — เลือกและจัดของที่จะเข้า model call = Context engineering.']});

  add({task:'2.1',type:'ordering',target:'fm-lifecycle-current-guide',
    question:'Order these foundation-model lifecycle activities from initial model choice through improvement after production use.',
    questionTh:'เรียง foundation-model lifecycle ตั้งแต่การเลือก model เริ่มต้นจนถึงการปรับปรุงหลังนำไปใช้งานจริง.',
    choices:{A:'Deploy the accepted solution',B:'Select the model and data approach',C:'Collect feedback from production use',D:'Fine-tune or otherwise adapt if needed',E:'Evaluate the adapted solution'},
    answer:['B','D','E','A','C'],
    exp:['✅ ลำดับคือ Select → Adapt/Fine-tune → Evaluate → Deploy → Feedback.','❌ Deploy ต้องหลัง evaluation.','❌ Feedback จาก production เกิดหลัง deploy และนำไปใช้ปรับรอบถัดไป.','🧠 จำสั้น ๆ — Choose → Adapt → Check → Ship → Learn.']});

  add({task:'2.1',type:'matching',target:'agentic-foundations',
    question:'An agentic application is being decomposed into four building blocks. Pair each example with the concept it represents.',
    questionTh:'agentic application ถูกแยกเป็น building blocks 4 แบบ ให้จับคู่ตัวอย่างแต่ละแบบกับ concept ที่มันแทน.',
    choices:{A:'Call a ticketing API to create an incident',B:'Remember a user preference for later sessions',C:'Coordinate a fixed sequence of dependent steps',D:'Have specialist agents collaborate on research and validation'},
    matches:{'1':'Tool usage','2':'Memory management','3':'Workflow orchestration','4':'Multi-agent system'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ เรียก API เพื่อทำ action → Tool usage.','✅ จำ preference ข้าม session → Memory management.','✅ จัดลำดับ steps/dependencies → Workflow orchestration.','✅ หลาย specialist agents ร่วมงาน → Multi-agent system.','🧠 จำสั้น ๆ — Act / Remember / Coordinate steps / Coordinate agents.']});

  add({task:'2.2',type:'multiple',target:'genai-advantages',
    question:'Which THREE capabilities are typical advantages of generative AI for business applications? (Select THREE.)',
    questionTh:'ความสามารถใด 3 อย่างเป็นข้อได้เปรียบทั่วไปของ generative AI สำหรับ business applications?',
    choices:{A:'Generate new content from instructions',B:'Interact conversationally with users',C:'Adapt behavior from prompts and examples',D:'Guarantee deterministic factual correctness',E:'Eliminate the need for governance',F:'Produce fully interpretable internal reasoning'},
    answer:['A','B','C'],
    exp:['✅ A — Content generation เป็น core GenAI capability.','✅ B — Conversational interaction เป็นข้อได้เปรียบสำคัญ.','✅ C — Prompt/examples ช่วยปรับ behavior ได้โดยไม่ต้องสร้าง model ใหม่ทุกครั้ง.','❌ D — GenAI ไม่รับประกัน factual correctness แบบ deterministic.','❌ E — ยังต้องมี governance.','❌ F — Internal reasoning ไม่ได้ fully interpretable โดยทั่วไป.','🧠 จำสั้น ๆ — Generate / Converse / Adapt = Capability.']});

  add({task:'2.2',type:'multiple',target:'genai-limitations-close',
    question:'Which THREE issues are GenAI limitations or risks rather than benefits? (Select THREE.)',
    questionTh:'ประเด็นใด 3 อย่างเป็น limitations หรือ risks ของ GenAI มากกว่าจะเป็นข้อดี?',
    choices:{A:'Hallucinated information',B:'Nondeterministic responses',C:'Limited interpretability',D:'Summarization',E:'Content drafting',F:'Conversational interaction'},
    answer:['A','B','C'],
    exp:['✅ A — Hallucination คือการสร้างข้อมูลที่ดูน่าเชื่อแต่ผิด.','✅ B — Output อาจแปรผันแม้ prompt เหมือนกัน.','✅ C — การอธิบายกลไกภายในทำได้จำกัด.','❌ D/E/F — เป็น capabilities ของ GenAI.','🧠 จำสั้น ๆ — มั่ว / แปรผัน / อธิบายยาก = Risk.']});

  add({task:'2.2',type:'single',target:'fm-selection-compliance-latency',
    question:'Two models have similar quality. One is available only in Regions that do not satisfy a company residency policy, while the other is available in an approved Region with acceptable latency. Which factor should decide the choice first?',
    questionTh:'สองโมเดลมีคุณภาพใกล้กัน ตัวหนึ่งมีให้ใช้เฉพาะ Regions ที่ไม่ผ่านนโยบาย data residency ของบริษัท ส่วนอีกตัวอยู่ใน Region ที่อนุมัติและ latency ยอมรับได้ ปัจจัยใดควรเป็นตัวตัดสินก่อน?',
    choices:{A:'Compliance and regional availability',B:'Number of model parameters alone',C:'Marketing popularity',D:'Higher temperature support'},
    answer:['A'],
    exp:['✅ A — Residency/compliance เป็น hard constraint จึงต้องผ่านก่อนพิจารณาความชอบอื่น.','❌ B — Model size ไม่ override compliance requirement.','❌ C — Popularity ไม่ใช่ selection criterion ทางเทคนิค/ข้อกำกับ.','❌ D — Temperature support ไม่เกี่ยวกับ residency.','🧠 จำสั้น ๆ — Hard compliance constraint มาก่อน preference.']});

  add({task:'2.2',type:'single',target:'genai-business-value',
    question:'A shopping assistant is intended to increase completed purchases. Which metric MOST directly measures whether the application is creating the intended business value?',
    questionTh:'shopping assistant ถูกสร้างมาเพื่อเพิ่มจำนวนการซื้อที่เสร็จสมบูรณ์ metric ใดวัด business value ตามเป้าหมายนี้ได้ตรงที่สุด?',
    choices:{A:'Conversion rate',B:'Embedding dimension',C:'Number of attention heads',D:'Context-window size'},
    answer:['A'],
    exp:['✅ A — Conversion rate วัดสัดส่วนผู้ใช้ที่ทำ action เป้าหมาย เช่นซื้อสำเร็จ.','❌ B/C/D — เป็น technical/model properties ไม่ใช่ business outcome.','🧠 จำสั้น ๆ — เป้าหมายคือซื้อสำเร็จ → ดู Conversion.']});

  add({task:'2.3',type:'single',target:'bedrock-vs-jumpstart',
    question:'A team wants to build a GenAI application using managed access to foundation models through APIs without managing the underlying model infrastructure. Which AWS service is the closest fit?',
    questionTh:'ทีมต้องการสร้าง GenAI application โดยเรียก foundation models ผ่าน managed APIs และไม่ต้องดูแล model infrastructure เอง ควรใช้ AWS service ใด?',
    choices:{A:'Amazon Bedrock',B:'Amazon SageMaker JumpStart',C:'Amazon Transcribe',D:'AWS Audit Manager'},
    answer:['A'],
    exp:['✅ A — Amazon Bedrock ให้ managed access to foundation models ผ่าน APIs สำหรับสร้าง GenAI applications.','❌ B — JumpStart เป็น model hub/solution accelerator ใน SageMaker AI เหมาะกับงาน data science/ML ที่ต้องการควบคุมมากขึ้น.','❌ C — Transcribe เป็น speech-to-text.','❌ D — Audit Manager เป็น governance service.','🧠 จำสั้น ๆ — Managed FM APIs = Bedrock.']});

  add({task:'2.3',type:'single',target:'kiro-vs-strands',
    question:'A software team wants an AI development environment centered on spec-driven software development. Which in-scope AWS developer tool is the closest fit?',
    questionTh:'ทีม software ต้องการ AI development environment ที่เน้นแนวทาง spec-driven software development เครื่องมือ developer tool ในขอบเขตสอบใดตรงที่สุด?',
    choices:{A:'Kiro',B:'Strands Agents',C:'Amazon Polly',D:'AWS Artifact'},
    answer:['A'],
    exp:['✅ A — Kiro เน้น AI-assisted spec-driven software development.','❌ B — Strands Agents เป็น SDK/framework สำหรับสร้าง AI agents.','❌ C — Polly เป็น text-to-speech.','❌ D — Artifact ให้ compliance reports/agreements.','🧠 จำสั้น ๆ — Spec-driven dev = Kiro; Build agents = Strands.']});

  add({task:'2.3',type:'multiple',target:'aws-genai-building-services',
    question:'A company wants one service for managed FM APIs, one for agent runtime capabilities, and one SDK for building custom agents. Which THREE in-scope offerings map to these needs? (Select THREE.)',
    questionTh:'บริษัทต้องการ service หนึ่งสำหรับ managed FM APIs, อีกตัวสำหรับ agent runtime capabilities และ SDK สำหรับสร้าง custom agents ควรเลือก offerings ใด 3 ตัว?',
    choices:{A:'Amazon Bedrock',B:'Amazon Bedrock AgentCore',C:'Strands Agents',D:'Amazon Textract',E:'Amazon Personalize',F:'AWS Artifact'},
    answer:['A','B','C'],
    exp:['✅ A — Bedrock ให้ managed FM APIs.','✅ B — AgentCore ให้ managed capabilities สำหรับ production agents.','✅ C — Strands Agents ใช้สร้าง custom agents.','❌ D/E/F — เป็น document extraction, recommendation และ compliance-report services.','🧠 จำสั้น ๆ — FM APIs / Agent runtime / Agent SDK.']});

  add({task:'2.3',type:'multiple',target:'genai-cost-tradeoffs',
    question:'A GenAI team is estimating production cost. Which THREE factors can directly change inference cost or required capacity planning? (Select THREE.)',
    questionTh:'ทีม GenAI กำลังประเมิน production cost ปัจจัยใด 3 อย่างสามารถเปลี่ยนค่า inference หรือการวางแผน capacity ได้โดยตรง?',
    choices:{A:'Input/output token volume',B:'Provisioned throughput choices',C:'Model selection and size/capability tier',D:'Color of the application UI',E:'Number of dashboard tabs',F:'Logo resolution'},
    answer:['A','B','C'],
    exp:['✅ A — Token volume มีผลโดยตรงกับ token-based pricing.','✅ B — Provisioned throughput เป็น capacity/cost tradeoff.','✅ C — Model family/size มีราคาและ performance ต่างกัน.','❌ D/E/F — ไม่ใช่ inference cost drivers.','🧠 จำสั้น ๆ — Tokens + Capacity model + Model tier = Cost.']});

  add({task:'2.1',type:'single',target:'mcp-client-role',
    question:'An AI host connects to several MCP servers. Which MCP component inside the host maintains an individual protocol connection to a server?',
    questionTh:'AI host เชื่อมต่อ MCP servers หลายตัว component ใดภายใน host เป็นตัวรักษา protocol connection แยกไปยังแต่ละ server?',
    choices:{A:'MCP client',B:'MCP server',C:'MCP resource',D:'MCP prompt'},
    answer:['A'],
    exp:['✅ A — MCP client อยู่ฝั่ง host และจัดการ connection ไปยัง MCP server.','❌ B — Server expose capabilities ให้ clients.','❌ C — Resource คือข้อมูล/context ที่ server expose.','❌ D — Prompt คือ reusable interaction template.','🧠 จำสั้น ๆ — Host มี Client; Client ต่อ Server.']});

  add({task:'2.3',type:'single',target:'agentcore-gateway-vs-identity',
    question:'An agent must call several existing enterprise APIs as standardized tools. The team wants a managed component that exposes those APIs to the agent instead of embedding custom API integration logic in every agent. Which AgentCore capability is the closest fit?',
    questionTh:'agent ต้องเรียก enterprise APIs หลายตัวเป็น standardized tools ทีมต้องการ managed component ที่ expose APIs เหล่านั้นให้ agent แทนการเขียน custom integration logic ซ้ำในทุก agent ควรใช้ AgentCore capability ใด?',
    choices:{A:'AgentCore Gateway',B:'AgentCore Identity',C:'AgentCore Memory',D:'AgentCore Observability'},
    answer:['A'],
    exp:['✅ A — Gateway ช่วย expose/เชื่อม services หรือ APIs ให้ agent ใช้เป็น tools.','❌ B — Identity จัดการ identity/credential access.','❌ C — Memory จัดการข้อมูลที่ต้องจำ.','❌ D — Observability ใช้ traces/metrics/logs.','🧠 จำสั้น ๆ — APIs → Tools = Gateway.']});
})();