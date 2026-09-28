(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:2,type:'single',...x});

  add({objective:'2.2.2',target:'genai-hallucination-inaccuracy',
    q:'A public-facing travel assistant answers a user with a confident description of a visa rule that does not exist in the trusted source material. The wording sounds natural and authoritative, so the user is likely to believe it unless the application checks the claim. The product team wants to classify this failure correctly before selecting mitigations. Which GenAI limitation is most directly illustrated?',
    th:'travel assistant ที่ให้บริการสาธารณะตอบผู้ใช้ด้วยคำอธิบายกฎวีซ่าที่ไม่มีอยู่จริงในแหล่งข้อมูลที่เชื่อถือได้ คำตอบใช้ภาษาที่เป็นธรรมชาติและมั่นใจจนผู้ใช้อาจเชื่อ หากแอปไม่ได้ตรวจสอบ claim ทีมผลิตภัณฑ์ต้องการจัดประเภท failure นี้ให้ถูกต้องก่อนเลือกมาตรการลดความเสี่ยง GenAI limitation ใดถูกแสดงอย่างชัดเจนที่สุด?',
    ask:'แยก Hallucination/Inaccuracy จากข้อจำกัดอื่นของ GenAI.',
    choices:{A:'Hallucination or factual inaccuracy',B:'Guaranteed determinism',C:'Perfect interpretability',D:'Supervised classification drift'},
    answer:['A'],
    why:{A:'ถูก เพราะโมเดลสร้างข้อเท็จจริงที่ดูน่าเชื่อแต่ไม่มีหลักฐานรองรับ.',B:'ผิด เพราะ determinism ไม่ใช่ failure ที่อธิบาย และ GenAI ไม่รับประกัน output คงที่.',C:'ผิด เพราะ interpretability เป็นอีก limitation แต่ scenario เน้นข้อมูลที่แต่งขึ้น.',D:'ผิด เพราะ scenario ไม่ได้อธิบาย classifier หรือ drift.'},
    cue:'ตอบมั่นใจแต่ “แต่งข้อเท็จจริง” = Hallucination.'});

  add({objective:'2.2.2',target:'nondeterminism-interpretability',type:'multiple',
    q:'A compliance team tests a generative assistant by sending the same approved prompt several times. The wording and details vary between runs, and reviewers also find it difficult to provide a complete human-readable explanation of the internal model reasoning that produced each answer. Which TWO GenAI limitations are most directly demonstrated by these observations? (Select TWO.)',
    th:'ทีม compliance ทดสอบ generative assistant โดยส่ง prompt ที่อนุมัติแล้วเหมือนกันหลายครั้ง พบว่า wording และรายละเอียดเปลี่ยนไปในแต่ละรอบ และผู้ทบทวนยังพบว่าไม่สามารถให้คำอธิบายที่มนุษย์เข้าใจได้อย่างสมบูรณ์เกี่ยวกับ internal model reasoning ที่ทำให้เกิดคำตอบแต่ละแบบได้ ข้อจำกัดของ GenAI ใด 2 ข้อถูกแสดงโดยตรงที่สุด?',
    ask:'เลือก Nondeterminism และ Limited interpretability จากอาการ output แปรผันและอธิบายกลไกภายในได้จำกัด.',
    choices:{A:'Nondeterministic outputs',B:'Limited interpretability',C:'Guaranteed reproducibility',D:'Perfect causal explanation',E:'Deterministic business rules'},
    answer:['A','B'],
    why:{A:'ถูก เพราะ prompt เดิมให้ output แตกต่างกันระหว่าง runs.',B:'ถูก เพราะอธิบาย internal reasoning/causal mechanism ได้จำกัด.',C:'ผิด เพราะตรงข้ามกับอาการที่พบ.',D:'ผิด เพราะ scenario บอกว่าการอธิบายเต็มรูปแบบทำได้ยาก.',E:'ผิด เพราะระบบเป็น generative model ไม่ใช่ rule engine.'},
    cue:'คำตอบเปลี่ยน = Nondeterminism; ข้างในอธิบายยาก = Limited interpretability.'});

  add({objective:'2.2.3',target:'genai-selection-modality-language-latency',
    q:'A global field-support application must accept text plus equipment photos, support users in Thai, Japanese, and English, and respond interactively while technicians are standing beside machinery. Several candidate foundation models have similar benchmark quality but differ in supported inputs, language coverage, and response speed. Which selection criteria should the team prioritize for this requirement?',
    th:'แอป field support ระดับโลกต้องรับทั้งข้อความและรูปเครื่องจักร รองรับผู้ใช้ภาษาไทย ญี่ปุ่น และอังกฤษ และตอบแบบโต้ตอบในขณะที่ช่างยืนอยู่ข้างเครื่อง Candidate foundation models หลายตัวมี benchmark quality ใกล้กัน แต่แตกต่างกันด้านชนิด input ที่รองรับ ขอบเขตภาษา และความเร็วในการตอบ ทีมควรให้ความสำคัญกับ selection criteria ใดสำหรับ requirement นี้?',
    ask:'เลือก Modality, Multilingual capability และ Latency จาก requirement ที่ระบุโดยตรง.',
    choices:{A:'Supported modalities, multilingual capability, and inference latency',B:'Only the number of model parameters',C:'Only the model launch date',D:'Only training dataset size, regardless of product requirements'},
    answer:['A'],
    why:{A:'ถูก เพราะ requirement บอกชัดเรื่อง text+image, หลายภาษา และ interactive response.',B:'ผิด เพราะ parameter count อย่างเดียวไม่ยืนยันความสามารถ/latency ที่ต้องการ.',C:'ผิด เพราะความใหม่ไม่ใช่ requirement.',D:'ผิด เพราะ training-data size อย่างเดียวไม่ map กับ constraints ที่ระบุ.'},
    cue:'เลือก model จาก requirement จริง: Input type + Language + Latency.'});

  add({objective:'2.2.3',target:'genai-selection-compliance-cost',
    q:'A financial institution compares two GenAI models for an internal assistant. One candidate has slightly higher benchmark quality but is available only through an inference path that violates the company’s data-residency policy and would exceed the approved operating budget. The second candidate meets the residency requirement and the accepted quality threshold at a sustainable cost. What should drive the decision?',
    th:'สถาบันการเงินกำลังเปรียบเทียบ GenAI models สองตัวสำหรับ internal assistant Candidate ตัวแรกมี benchmark quality สูงกว่าเล็กน้อย แต่ใช้งานได้ผ่าน inference path ที่ไม่ผ่านนโยบาย data residency ของบริษัท และค่าใช้จ่ายจะเกินงบดำเนินงานที่อนุมัติ ส่วน candidate ตัวที่สองผ่านข้อกำหนด residency และผ่าน quality threshold ที่ยอมรับได้ด้วยต้นทุนที่ยั่งยืน ปัจจัยใดควรเป็นตัวขับการตัดสินใจ?',
    ask:'ตัดสินจาก Compliance constraints และ Cost แทนการเลือก benchmark สูงสุดอย่างเดียว.',
    choices:{A:'Select a model that satisfies hard compliance constraints and acceptable quality within cost limits',B:'Always select the highest benchmark score even if policy is violated',C:'Ignore cost because GenAI pricing cannot affect architecture',D:'Choose based only on the model name or provider popularity'},
    answer:['A'],
    why:{A:'ถูก เพราะ compliance เป็น hard constraint และ cost/quality ต้องเหมาะกับ business requirement.',B:'ผิด เพราะ benchmark ไม่ override regulation/policy.',C:'ผิด เพราะ cost เป็น selection factor สำคัญและมีผลต่อ production viability.',D:'ผิด เพราะ popularity ไม่แทน requirement fit.'},
    cue:'Quality สูงสุดไม่ชนะถ้า “ผิด policy หรือแพงเกิน budget”.'});

  add({objective:'2.2.3',target:'genai-selection-complexity-capability',
    q:'A team is choosing between a small cost-efficient model and a much larger model with advanced reasoning. Most production requests are short classification-style decisions, but a small percentage require complex multi-step analysis. Leadership wants to avoid paying for maximum capability on every request. Which model-selection principle best reflects the tradeoff?',
    th:'ทีมกำลังเลือกระหว่างโมเดลขนาดเล็กที่ประหยัดต้นทุนกับโมเดลขนาดใหญ่ซึ่งมีความสามารถด้าน reasoning สูงกว่า Request ส่วนใหญ่ใน production เป็นการตัดสินใจสั้น ๆ คล้าย classification แต่มีส่วนน้อยที่ต้องวิเคราะห์หลายขั้นตอน ฝ่ายบริหารต้องการหลีกเลี่ยงการจ่ายค่าความสามารถสูงสุดกับทุก request หลักการเลือก model ใดสะท้อน tradeoff นี้ได้ดีที่สุด?',
    ask:'พิจารณา Model complexity/capability เทียบกับ workload requirement และ cost.',
    choices:{A:'Match model complexity and capability to request requirements instead of always using the largest model',B:'Use the largest model for every request because capability has no cost tradeoff',C:'Choose models only by context-window size even when context is short',D:'Ignore workload variation because every request should use identical compute'},
    answer:['A'],
    why:{A:'ถูก เพราะ model selection ควร balance capability, complexity, quality และ cost ตาม workload.',B:'ผิด เพราะ larger models มักมี cost/latency tradeoffs.',C:'ผิด เพราะ context length เป็นเพียงหนึ่ง criterion และไม่ใช่ deciding requirement ใน scenario.',D:'ผิด เพราะ workload variation เป็นข้อมูลสำคัญต่อ architecture/routing.'},
    cue:'Right-size model ให้ “พอดีกับงาน” ไม่ใช่ใหญ่สุดเสมอ.'});

  add({objective:'2.2.4',target:'genai-business-roi-efficiency-conversion',type:'multiple',
    q:'An online retailer deploys a GenAI shopping assistant and wants to justify continued investment after the pilot. Executives care whether the assistant helps customers complete purchases, reduces employee effort for routine questions, and creates enough financial benefit to justify implementation and operating expenses. Which THREE metrics or outcomes most directly measure those business objectives? (Select THREE.)',
    th:'ร้านค้าออนไลน์ deploy GenAI shopping assistant และต้องการตัดสินใจว่าจะลงทุนต่อหลังช่วง pilot หรือไม่ ผู้บริหารสนใจว่า assistant ช่วยให้ลูกค้าซื้อสินค้าเสร็จมากขึ้นหรือไม่ ลดแรงงานพนักงานสำหรับคำถามทั่วไปได้หรือไม่ และสร้างผลประโยชน์ทางการเงินมากพอเทียบกับค่า implement และ operating expenses หรือไม่ metrics หรือ outcomes ใด 3 ข้อวัด business objectives เหล่านี้ได้ตรงที่สุด?',
    ask:'เลือก Conversion rate, Efficiency และ ROI เป็น business value metrics.',
    choices:{A:'Conversion rate',B:'Operational efficiency or time saved',C:'Return on investment (ROI)',D:'Number of attention heads',E:'Embedding vector dimension',F:'Model parameter count'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะวัดว่าการสนทนานำไปสู่ purchase/action เป้าหมายมากขึ้นหรือไม่.',B:'ถูก เพราะสะท้อนการลด effort/time จาก automation/assistance.',C:'ถูก เพราะเปรียบเทียบ financial benefit กับ cost.',D:'ผิด เพราะเป็น architecture detail ไม่ใช่ business outcome.',E:'ผิด เพราะเป็น technical representation property.',F:'ผิด เพราะ parameter count ไม่วัด business value.'},
    cue:'Business value = ซื้อเพิ่ม / ทำงานเร็วขึ้น / เงินคุ้ม.'});

  add({objective:'2.2.4',target:'genai-arpu-clv-crossdomain',
    q:'A subscription company uses a GenAI concierge across sales, onboarding, and retention. Leadership does not want to judge success only from answer accuracy because the application spans several business domains. The company wants to know whether assisted users generate more revenue over time and remain valuable customers longer. Which metrics are most relevant to that business-value question?',
    th:'บริษัท subscription ใช้ GenAI concierge ครอบคลุมงานขาย onboarding และ retention ฝ่ายบริหารไม่ต้องการตัดสินความสำเร็จจาก answer accuracy เพียงอย่างเดียว เพราะแอปทำงานข้ามหลาย business domains บริษัทต้องการทราบว่าผู้ใช้ที่ได้รับความช่วยเหลือสร้างรายได้มากขึ้นเมื่อเวลาผ่านไปและยังเป็นลูกค้าที่มีมูลค่ายาวนานขึ้นหรือไม่ metrics ใดเกี่ยวข้องกับคำถามด้าน business value นี้มากที่สุด?',
    ask:'เชื่อม Average Revenue per User และ Customer Lifetime Value กับมูลค่าธุรกิจระยะยาว.',
    choices:{A:'Average revenue per user and customer lifetime value',B:'Only BLEU and ROUGE',C:'Only context-window length and token count',D:'Only model temperature and embedding dimension'},
    answer:['A'],
    why:{A:'ถูก เพราะ ARPU และ CLV วัดรายได้ต่อผู้ใช้และมูลค่าลูกค้าในระยะยาวโดยตรง.',B:'ผิด เพราะ BLEU/ROUGE เป็น model-output evaluation metrics.',C:'ผิด เพราะเป็น technical/cost characteristics ไม่ใช่ revenue value.',D:'ผิด เพราะเป็น model/inference properties.'},
    cue:'ARPU = รายได้ต่อผู้ใช้; CLV = มูลค่าลูกค้าตลอดความสัมพันธ์.'});

  add({objective:'2.3.1',target:'aws-genai-platform-map',type:'matching',
    q:'A cloud architecture board is reviewing four GenAI development paths and wants to prevent teams from choosing services based only on familiar names. One team wants managed FM APIs, another wants a full ML platform with deeper data-science control, another wants a catalog of pre-trained models and solution starters inside SageMaker, and another wants an enterprise assistant that can work with organizational information. Match each need with the most appropriate AWS offering.',
    th:'คณะกรรมการสถาปัตยกรรม cloud กำลังทบทวนแนวทางพัฒนา GenAI 4 แบบ และต้องการป้องกันไม่ให้ทีมเลือก service จากชื่อที่คุ้นเคยเพียงอย่างเดียว ทีมหนึ่งต้องการ managed FM APIs อีกทีมต้องการ ML platform แบบครบวงจรที่ควบคุมงาน data science ได้ลึกกว่า อีกทีมต้องการ catalog ของ pre-trained models และ solution starters ภายใน SageMaker และอีกทีมต้องการ enterprise assistant ที่ทำงานกับข้อมูลองค์กรได้ จงจับคู่แต่ละความต้องการกับ AWS offering ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon Bedrock, SageMaker AI, SageMaker JumpStart และ Amazon Q.',
    choices:{A:'Managed access to foundation models through APIs',B:'Full ML development platform for building, training, and managing models',C:'Pre-trained model and solution hub within the SageMaker ecosystem',D:'Enterprise AI assistant for organizational work and information'},
    matches:{'1':'Amazon Bedrock','2':'Amazon SageMaker AI','3':'Amazon SageMaker JumpStart','4':'Amazon Q'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Managed FM APIs → Amazon Bedrock.','✅ ML platform/data science control → Amazon SageMaker AI.','✅ Pre-trained model hub → SageMaker JumpStart.','✅ Enterprise assistant → Amazon Q.'],
    cue:'Bedrock API / SageMaker build ML / JumpStart start from models / Q enterprise assistant.'});

  add({objective:'2.3.1',target:'quick-kiro-strands-transform-map',type:'matching',
    q:'An enterprise technology group is cataloging several newer AWS AI offerings because teams keep confusing their purposes. Business analysts want AI-powered research and workflow experiences, developers want a spec-driven AI development environment, an agent team wants a lightweight SDK for building custom agents, and a modernization program wants specialized agentic assistance for migrating and transforming legacy applications and code. Match each need with the most appropriate offering.',
    th:'กลุ่มเทคโนโลยีขององค์กรกำลังจัดหมวดหมู่ AWS AI offerings รุ่นใหม่หลายตัว เพราะทีมต่าง ๆ มักสับสนหน้าที่ นักวิเคราะห์ธุรกิจต้องการ AI สำหรับงาน research และ workflow นักพัฒนาต้องการสภาพแวดล้อมพัฒนาแบบ spec-driven ทีม agent ต้องการ SDK ที่เบาและยืดหยุ่นสำหรับสร้าง custom agents และโครงการ modernization ต้องการ agentic assistance ที่เชี่ยวชาญด้านการย้ายและแปลงระบบ legacy รวมถึง source code จงจับคู่แต่ละความต้องการกับ offering ที่เหมาะสมที่สุด.',
    ask:'แยก Amazon Quick, Kiro, Strands Agents และ AWS Transform.',
    choices:{A:'Business research and AI-powered workflow experiences',B:'Spec-driven AI software development environment',C:'SDK/framework for building custom AI agents',D:'Agentic service for migration and application/code modernization'},
    matches:{'1':'Amazon Quick','2':'Kiro','3':'Strands Agents','4':'AWS Transform'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Business research/workflow → Amazon Quick.','✅ Spec-driven software development → Kiro.','✅ Custom agent SDK/framework → Strands Agents.','✅ Migration/modernization with specialized agents → AWS Transform.'],
    cue:'Quick = business AI; Kiro = spec-driven dev; Strands = build agents; Transform = modernize/migrate.'});

  add({objective:'2.3.1',target:'agentcore-purpose',
    q:'A company has built agents with an open-source framework and now needs production capabilities around those agents rather than another foundation model. The platform team wants managed runtime hosting, memory, identity for downstream credentials, gateways that expose tools, observability, evaluations, and policy-based authorization. Which AWS offering is designed around this production-agent requirement?',
    th:'บริษัทสร้าง agents ด้วย open-source framework แล้ว และตอนนี้ต้องการความสามารถสำหรับ production รอบตัว agents เหล่านั้น มากกว่าต้องการ foundation model เพิ่มอีกตัว ทีม platform ต้องการ managed runtime hosting, memory, identity สำหรับ downstream credentials, gateway ที่ expose tools, observability, evaluations และ policy-based authorization AWS offering ใดถูกออกแบบมาเพื่อ requirement ด้าน production agents นี้?',
    ask:'ระบุ Amazon Bedrock AgentCore จากชุด capability สำหรับ deploy/operate/secure/evaluate agents.',
    choices:{A:'Amazon Bedrock AgentCore',B:'Amazon Polly',C:'Amazon Textract',D:'AWS Data Exchange'},
    answer:['A'],
    why:{A:'ถูก เพราะ AgentCore เป็นชุด managed capabilities สำหรับ production agents เช่น Runtime, Memory, Identity, Gateway, Observability, Evaluations และ Policy.',B:'ผิด เพราะ Polly เป็น text-to-speech.',C:'ผิด เพราะ Textract ดึงข้อความ/forms/tables จากเอกสาร.',D:'ผิด เพราะ Data Exchange เป็นบริการแลกเปลี่ยน/เข้าถึง datasets.'},
    cue:'มี agent แล้ว ต้อง “run, remember, connect, secure, observe, evaluate” = AgentCore.'});

  add({objective:'2.3.1',target:'amazon-nova-role',
    q:'A team building on Amazon Bedrock wants an Amazon family of foundation models rather than a separate AWS service for labeling, logging, or networking. The use case may require text and multimodal capabilities, and the architects want to evaluate model variants according to task complexity and modality. Which in-scope offering represents Amazon’s foundation-model family for this purpose?',
    th:'ทีมที่สร้างแอปบน Amazon Bedrock ต้องการ foundation model family ของ Amazon เอง ไม่ใช่ AWS service แยกสำหรับ labeling, logging หรือ networking Use case อาจต้องใช้ความสามารถด้านข้อความและ multimodal และสถาปนิกต้องการประเมิน model variants ตามความซับซ้อนของงานและ modality Offering ใดในขอบเขตสอบเป็น foundation-model family ของ Amazon สำหรับจุดประสงค์นี้?',
    ask:'ระบุ Amazon Nova ว่าเป็นตระกูล foundation models ของ Amazon ที่ใช้งานผ่าน Bedrock ตามรุ่นที่รองรับ.',
    choices:{A:'Amazon Nova',B:'AWS Config',C:'Amazon Inspector',D:'AWS Glue DataBrew'},
    answer:['A'],
    why:{A:'ถูก เพราะ Amazon Nova เป็นตระกูล foundation models ของ Amazon สำหรับ use cases ต่าง ๆ รวมถึง multimodal ตามรุ่น.',B:'ผิด เพราะ Config เป็น governance/configuration service.',C:'ผิด เพราะ Inspector เป็น vulnerability management service.',D:'ผิด เพราะ DataBrew เป็น data preparation service.'},
    cue:'Nova = Amazon foundation-model family; ไม่ใช่ governance/data-prep service.'});

  add({objective:'2.3.1',target:'quick-family-highlevel',
    q:'A business organization wants an AI experience for employees who are not building ML models. One group needs deep research across approved enterprise sources, another wants reusable routine flows, a third needs more complex long-running business automation with branching and approvals, and leaders still need analytics insights. Which AWS product family is designed to bring these business AI capabilities together?',
    th:'องค์กรธุรกิจต้องการ AI experience สำหรับพนักงานที่ไม่ได้สร้าง ML model โดยตรง กลุ่มหนึ่งต้องการ deep research จาก enterprise sources ที่อนุมัติ อีกกลุ่มต้องการ routine flows ที่ใช้ซ้ำได้ กลุ่มที่สามต้องการ business automation ที่ซับซ้อนและใช้เวลานานพร้อม branching และ approvals ขณะที่ผู้บริหารยังต้องการ analytics insights AWS product family ใดถูกออกแบบมาเพื่อรวม business AI capabilities เหล่านี้?',
    ask:'ระบุ Amazon Quick ในภาพรวม โดยไม่สับสนกับ developer/ML platform.',
    choices:{A:'Amazon Quick',B:'Amazon SageMaker AI',C:'Amazon EKS',D:'AWS Secrets Manager'},
    answer:['A'],
    why:{A:'ถูก เพราะ Amazon Quick เป็น business AI experience ที่รวม research, flows/automation และ analytics capabilities.',B:'ผิด เพราะ SageMaker AI เน้นการสร้าง/ฝึก/จัดการ ML สำหรับ technical teams.',C:'ผิด เพราะ EKS เป็น managed Kubernetes service.',D:'ผิด เพราะ Secrets Manager จัดการ secrets/credentials.'},
    cue:'Business users + Research/Flows/Automate/Insights = Amazon Quick.'});

  add({objective:'2.3.2',target:'aws-genai-lower-barrier-speed',
    q:'A midsize company wants to pilot a generative assistant but has no team capable of pre-training or operating large foundation models. The company can use managed AWS GenAI capabilities, existing foundation models, and service APIs instead of building a full model-serving stack from scratch. Which benefit of AWS GenAI services is most relevant to this situation?',
    th:'บริษัทขนาดกลางต้องการทดลอง generative assistant แต่ไม่มีทีมที่สามารถ pre-train หรือดูแล foundation model ขนาดใหญ่ได้ บริษัทสามารถใช้ managed AWS GenAI capabilities, foundation models ที่มีอยู่ และ service APIs แทนการสร้าง model-serving stack ทั้งหมดเองตั้งแต่ต้น ประโยชน์ของ AWS GenAI services ข้อใดเกี่ยวข้องกับสถานการณ์นี้มากที่สุด?',
    ask:'เชื่อม Managed GenAI services กับ lower barrier to entry และ speed to market.',
    choices:{A:'Lower barrier to entry and faster time to market by using managed capabilities',B:'A requirement to build every model from scratch',C:'Elimination of all security and governance responsibilities',D:'Guaranteed zero cost for any production workload'},
    answer:['A'],
    why:{A:'ถูก เพราะ managed services ลด infrastructure/model-building burden และช่วยเริ่มต้น/ส่งมอบได้เร็วขึ้น.',B:'ผิด เพราะจุดเด่นคือไม่จำเป็นต้อง train ทุก model เอง.',C:'ผิด เพราะ customer responsibilities ยังมีตาม service/shared responsibility.',D:'ผิด เพราะ production services มีค่าใช้จ่ายตามการใช้งาน/รูปแบบ capacity.'},
    cue:'Managed GenAI = เริ่มง่ายขึ้น + ส่งของเร็วขึ้น ไม่ใช่ฟรีหรือไร้ governance.'});

  add({objective:'2.3.2',target:'aws-genai-efficiency-business-objectives',
    q:'A product group compares spending six months building a custom generative stack with using managed AWS services that provide model access, security integrations, monitoring options, and reusable platform capabilities. The team’s primary objective is to deliver a customer feature quickly while keeping engineering effort focused on differentiating business logic. Which AWS-service advantage does this tradeoff illustrate?',
    th:'ทีมผลิตภัณฑ์กำลังเปรียบเทียบระหว่างการใช้เวลาหกเดือนสร้าง generative stack เองทั้งหมด กับการใช้ managed AWS services ที่มี model access, security integrations, monitoring options และ platform capabilities ที่นำกลับมาใช้ได้ เป้าหมายหลักคือส่ง customer feature ออกให้เร็วและให้วิศวกรโฟกัสที่ business logic ที่สร้างความแตกต่าง Tradeoff นี้แสดงข้อดีของ AWS services ด้านใด?',
    ask:'ระบุ Efficiency/Cost-effectiveness/Business focus จากการใช้ managed building blocks แทนสร้างทุกอย่างเอง.',
    choices:{A:'Improved engineering efficiency and speed by reusing managed building blocks',B:'A guarantee that managed services always outperform every custom design',C:'A requirement to remove all custom business logic',D:'A guarantee that operating cost is always zero'},
    answer:['A'],
    why:{A:'ถูก เพราะ managed building blocks ลดงาน platform ที่ไม่สร้าง differentiation และช่วยทีมโฟกัส business objective.',B:'ผิด เพราะ performance ต้องประเมินตาม workload ไม่ได้การันตีเสมอ.',C:'ผิด เพราะ business logic ยังเป็นส่วนสำคัญของ application.',D:'ผิด เพราะ managed services ยังมี usage/capacity costs.'},
    cue:'ใช้ managed ของที่ไม่ใช่จุดขาย เพื่อเอาเวลาไปทำ business value.'});

  add({objective:'2.3.3',target:'aws-infrastructure-security-compliance',
    q:'A regulated company wants to build a GenAI application on AWS but worries that using generative models will force it to abandon familiar cloud security controls. The security architect notes that the application can still use IAM, encryption, private networking, logging, compliance programs, and service-specific guardrails around the GenAI components. Which benefit of AWS infrastructure is the architect emphasizing?',
    th:'บริษัทที่อยู่ภายใต้ข้อกำกับต้องการสร้าง GenAI application บน AWS แต่กังวลว่าการใช้ generative models จะทำให้ต้องละทิ้ง cloud security controls ที่คุ้นเคย สถาปนิกด้าน security อธิบายว่าแอปยังสามารถใช้ IAM, encryption, private networking, logging, compliance programs และ service-specific guardrails รอบ GenAI components ได้ สถาปนิกกำลังเน้นประโยชน์ใดของ AWS infrastructure?',
    ask:'เชื่อม AWS infrastructure กับ Security และ Compliance สำหรับ GenAI applications.',
    choices:{A:'Security and compliance capabilities can be integrated around the GenAI workload',B:'GenAI workloads are exempt from security controls',C:'Using an FM automatically satisfies every regulation',D:'Private data must always be sent over the public internet'},
    answer:['A'],
    why:{A:'ถูก เพราะ AWS GenAI workloads สามารถใช้ security/compliance building blocks ของ AWS ร่วมกันได้.',B:'ผิด เพราะ GenAI ยังต้องถูก secure ตาม risk และ service model.',C:'ผิด เพราะ compliance ต้องออกแบบและกำกับ ไม่ได้เกิดอัตโนมัติจากการใช้ FM.',D:'ผิด เพราะ AWS มี private networking options สำหรับ supported architectures.'},
    cue:'GenAI อยู่บน cloud controls เดิมได้: IAM + Encrypt + Private + Log + Guardrails.'});

  add({objective:'2.3.3',target:'aws-infrastructure-responsibility-safety',
    q:'A healthcare application will use a foundation model to draft patient-facing explanations. The architecture board does not consider model quality alone sufficient; it also wants safety filtering, privacy controls, access boundaries, auditability, and a clear understanding of what AWS manages versus what the customer must configure. Which infrastructure benefit and design principle is most relevant?',
    th:'แอปด้านสุขภาพจะใช้ foundation model ร่างคำอธิบายสำหรับผู้ป่วย คณะกรรมการสถาปัตยกรรมเห็นว่าคุณภาพของโมเดลเพียงอย่างเดียวไม่เพียงพอ และต้องการ safety filtering, privacy controls, access boundaries, auditability รวมถึงความเข้าใจชัดเจนว่า AWS จัดการส่วนใดและลูกค้าต้องกำหนดส่วนใดเอง ประโยชน์และหลักการออกแบบใดเกี่ยวข้องที่สุด?',
    ask:'เชื่อม Responsibility/Safety กับการใช้ AWS infrastructure และ shared responsibility.',
    choices:{A:'Use AWS security and safety capabilities while applying the shared responsibility model to customer configuration and data use',B:'Assume AWS owns all application-level safety decisions automatically',C:'Disable auditing because the model is managed',D:'Treat a managed FM as outside normal cloud governance'},
    answer:['A'],
    why:{A:'ถูก เพราะ managed service ช่วยเรื่อง infrastructure/safety capabilities แต่ customer ยังรับผิดชอบ configuration, data, access และ application use ตาม model.',B:'ผิด เพราะ customer responsibilities ไม่หายไป.',C:'ผิด เพราะ auditability สำคัญยิ่งกับ sensitive workload.',D:'ผิด เพราะ GenAI workload ยังอยู่ภายใต้ governance/security architecture.'},
    cue:'Managed ไม่ได้แปลว่า “AWS รับผิดชอบทุกอย่าง”.'});

  add({objective:'2.3.4',target:'genai-availability-region-redundancy',
    q:'A global customer assistant must remain responsive during traffic spikes and meet a corporate requirement for service resilience. The team is considering regional availability, whether capacity can be accessed across approved locations, and whether the design needs redundancy rather than optimizing only for the cheapest single endpoint. Which cost tradeoff is the team evaluating?',
    th:'global customer assistant ต้องตอบสนองได้ดีในช่วง traffic spike และต้องผ่านข้อกำหนดของบริษัทด้าน resilience ทีมกำลังพิจารณา regional availability การเข้าถึง capacity ใน locations ที่อนุมัติ และความจำเป็นของ redundancy แทนการ optimize เฉพาะ endpoint เดียวที่ถูกที่สุด ทีมกำลังประเมิน cost tradeoff ใด?',
    ask:'อธิบาย tradeoff ระหว่าง Cost กับ Responsiveness/Availability/Redundancy/Regional coverage.',
    choices:{A:'Paying for architecture that improves responsiveness, availability, redundancy, and acceptable regional coverage',B:'Assuming the cheapest single path always provides the highest resilience',C:'Ignoring regional coverage because model access is identical everywhere',D:'Treating redundancy as unrelated to cost or availability'},
    answer:['A'],
    why:{A:'ถูก เพราะ higher availability/capacity/redundancy อาจเพิ่ม cost แต่ช่วย meet resilience/performance requirements.',B:'ผิด เพราะ lowest cost path อาจไม่มี redundancy/capacity ตาม requirement.',C:'ผิด เพราะ model/service availability แตกต่างตาม Region และ routing option.',D:'ผิด เพราะ redundancy เป็น architecture/cost tradeoff โดยตรง.'},
    cue:'ถูกที่สุด ≠ resilient ที่สุด; ดู Cost + Capacity + Region + Redundancy.'});

  add({objective:'2.3.4',target:'provisioned-token-custom-cost',
    q:'A GenAI platform has three workload groups. One has steady high traffic and needs predictable capacity, another has low variable usage billed primarily by tokens, and a research group wants to customize models, which adds training and model-hosting considerations. Finance wants an architecture discussion rather than a single “price per request.” Which statement best captures the cost tradeoffs?',
    th:'GenAI platform มี workload 3 กลุ่ม กลุ่มแรกมี traffic สูงและคงที่พร้อมต้องการ capacity ที่คาดการณ์ได้ กลุ่มที่สองมีการใช้งานต่ำและแปรผันโดยคิดค่าใช้จ่ายหลักตาม tokens ส่วนกลุ่มวิจัยต้องการ customize models ซึ่งเพิ่มเรื่อง training และ model-hosting ฝ่ายการเงินต้องการการวิเคราะห์ architecture ไม่ใช่แค่ “ราคาต่อ request” ค่าเดียว ข้อใดสรุป cost tradeoffs ได้ถูกต้องที่สุด?',
    ask:'เชื่อม Token pricing, Provisioned throughput และ Custom model costs กับ workload ต่างกัน.',
    choices:{A:'Evaluate token usage, provisioned-capacity options, and customization/training costs separately because each workload has different economics',B:'Use one fixed cost assumption because all GenAI workloads are priced identically',C:'Ignore provisioned throughput because capacity planning never affects cost',D:'Assume customized models have no training or serving cost considerations'},
    answer:['A'],
    why:{A:'ถูก เพราะ token-based on-demand, provisioned capacity และ customization มี cost model/tradeoffs ต่างกัน.',B:'ผิด เพราะ pricing/architecture แตกต่างตาม service/model/capacity option.',C:'ผิด เพราะ provisioned capacity มี cost/performance implications.',D:'ผิด เพราะ customization เพิ่ม training/storage/serving considerations ตาม approach.'},
    cue:'GenAI cost ต้องแยก: Tokens / Capacity / Customization.'});
})();