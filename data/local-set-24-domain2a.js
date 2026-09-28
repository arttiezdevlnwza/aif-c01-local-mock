(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:2,type:'single',...x});

  add({objective:'2.1.1',target:'token-chunk-embedding-pipeline',
    q:'A legal-search team is preparing thousands of long policy documents for a generative AI assistant. The engineers plan to split each document into smaller passages, convert those passages into numerical representations that preserve semantic meaning, and store the representations for similarity search. A project manager is confused about which concepts correspond to each preparation step. Which sequence of concepts best matches the planned pipeline?',
    th:'ทีมระบบค้นหาด้านกฎหมายกำลังเตรียมเอกสารนโยบายยาวหลายพันฉบับสำหรับ generative AI assistant วิศวกรวางแผนแบ่งเอกสารแต่ละฉบับออกเป็นข้อความย่อย จากนั้นแปลงข้อความย่อยเหล่านั้นเป็นตัวแทนเชิงตัวเลขที่รักษาความหมายเชิง semantic แล้วเก็บตัวแทนเหล่านั้นไว้เพื่อทำ similarity search ผู้จัดการโครงการสับสนว่าขั้นตอนแต่ละช่วงเรียกว่าอะไร ลำดับแนวคิดใดตรงกับ pipeline ที่วางแผนไว้ที่สุด?',
    ask:'แยก Chunking, Embeddings และ Vector storage/search ตามลำดับเตรียมข้อมูลสำหรับ semantic retrieval.',
    choices:{A:'Chunking → Embeddings/Vectors → Vector storage/search',B:'Fine-tuning → Token pricing → Classification',C:'Guardrails → Distillation → Batch inference',D:'Clustering → RLHF → Prompt leakage'},
    answer:['A'],
    why:{A:'ถูก เพราะต้องแบ่งเอกสารเป็น chunks ก่อน แล้วสร้าง embeddings/vectors เพื่อใช้ similarity search ใน vector store.',B:'ผิด เพราะสามแนวคิดนี้ไม่ได้อธิบาย pipeline เตรียม retrieval data.',C:'ผิด เพราะเป็นเรื่อง safety/customization/inference ไม่ใช่ semantic indexing pipeline.',D:'ผิด เพราะเป็นคนละกลุ่มแนวคิดกับ retrieval preparation.'},
    cue:'Document → Chunk → Embed → Store/Search.'});

  add({objective:'2.1.1',target:'tokens-context-cost',
    q:'A team sends a large instruction block, retrieved evidence, conversation history, and a user request to a foundation model on every turn. The application becomes expensive and occasionally exceeds the model input limit even though the visible user question is short. The architect explains that all of these pieces are converted into model processing units before inference. Which concept most directly explains both the input limit and much of the usage-based cost?',
    th:'ทีมหนึ่งส่ง instruction block ขนาดใหญ่ หลักฐานที่ดึงมา conversation history และคำถามผู้ใช้เข้า foundation model ในทุก turn แอปเริ่มมีค่าใช้จ่ายสูงและบางครั้งเกิน input limit ของโมเดล ทั้งที่คำถามที่ผู้ใช้มองเห็นมีความยาวเพียงเล็กน้อย สถาปนิกอธิบายว่าข้อมูลทั้งหมดเหล่านี้จะถูกแปลงเป็นหน่วยที่โมเดลใช้ประมวลผลก่อน inference แนวคิดใดอธิบายทั้ง input limit และค่าใช้จ่ายตามการใช้งานส่วนใหญ่ได้ตรงที่สุด?',
    ask:'ระบุบทบาทของ Tokens ต่อ context limit และ pricing.',
    choices:{A:'Tokens',B:'Labels',C:'Clusters',D:'IAM roles'},
    answer:['A'],
    why:{A:'ถูก เพราะ prompt, context และ output ถูกประมวลผลเป็น tokens ซึ่งสัมพันธ์กับ context window และ token-based pricing.',B:'ผิด เพราะ labels เป็น target categories/values ใน supervised learning.',C:'ผิด เพราะ clusters เป็นกลุ่มที่ค้นพบใน unsupervised learning.',D:'ผิด เพราะ IAM roles เป็น security identity mechanism.'},
    cue:'Context และราคา inference จำนวนมากคิดบน “Tokens”.'});

  add({objective:'2.1.1',target:'transformer-attention-concept',
    q:'A product team asks why a modern language model can use words that appeared much earlier in a prompt when generating a later response. The ML engineer describes an architecture that processes token representations and uses attention mechanisms to weigh relationships among different parts of the sequence rather than relying only on a fixed rule table. Which model family is the engineer describing?',
    th:'ทีมผลิตภัณฑ์ถามว่าทำไม language model สมัยใหม่จึงสามารถใช้คำหรือข้อมูลที่ปรากฏก่อนหน้านานแล้วใน prompt ขณะสร้างคำตอบช่วงท้ายได้ วิศวกร ML อธิบายสถาปัตยกรรมที่ประมวลผล representation ของ tokens และใช้ attention mechanism เพื่อชั่งน้ำหนักความสัมพันธ์ระหว่างส่วนต่าง ๆ ของ sequence แทนการอาศัยตารางกฎตายตัว วิศวกรกำลังอธิบาย model family ใด?',
    ask:'เชื่อม attention-based sequence processing กับ transformer-based LLM.',
    choices:{A:'Transformer-based large language model',B:'K-means clustering model',C:'Linear regression model',D:'Deterministic decision table'},
    answer:['A'],
    why:{A:'ถูก เพราะ transformer architecture ใช้ attention เพื่อ model relationships ใน sequence และเป็นพื้นฐานของ LLM จำนวนมาก.',B:'ผิด เพราะ K-means ใช้จัดกลุ่มข้อมูล ไม่ได้สร้าง sequence ด้วย attention.',C:'ผิด เพราะ linear regression ทำนายค่าตัวเลขต่อเนื่องและไม่มี attention architecture.',D:'ผิด เพราะ deterministic table ไม่ได้เรียน token relationships.'},
    cue:'Tokens + Attention + Sequence = Transformer.'});

  add({objective:'2.1.1',target:'multimodal-vs-diffusion',
    q:'A creative platform evaluates two foundation-model capabilities. One model can accept text, images, and video in the same request and reason across those inputs. Another image-generation model starts from random noise and gradually removes noise until a new image emerges. Which pairing correctly names these two concepts?',
    th:'แพลตฟอร์มด้านงานสร้างสรรค์กำลังประเมินความสามารถของ foundation models สองแบบ โมเดลแรกสามารถรับข้อความ ภาพ และวิดีโอใน request เดียวกันและใช้ข้อมูลหลายชนิดร่วมกันในการ reasoning ส่วนโมเดลสร้างภาพอีกตัวเริ่มจาก random noise แล้วค่อย ๆ ลด noise จนเกิดเป็นภาพใหม่ ข้อใดเรียกแนวคิดทั้งสองได้ถูกต้อง?',
    ask:'แยก Multimodal model ออกจาก Diffusion model จากลักษณะ input และวิธีสร้างภาพ.',
    choices:{A:'Multimodal model for the first; diffusion model for the second',B:'Diffusion model for the first; regression model for the second',C:'Clustering model for both',D:'Traditional rules engine for the first; classification for the second'},
    answer:['A'],
    why:{A:'ถูก เพราะ multimodal รองรับหลาย modality ส่วน diffusion สร้างข้อมูลใหม่ด้วย iterative denoising.',B:'ผิด เพราะโมเดลแรกไม่ได้อธิบาย diffusion และ regression ไม่ใช่ image generation.',C:'ผิด เพราะ clustering ไม่ตรงกับทั้งสองความสามารถ.',D:'ผิด เพราะ rule engine/classification ไม่ใช่แนวคิดที่โจทย์บรรยาย.'},
    cue:'หลาย modality = Multimodal; Noise → Denoise → New image = Diffusion.'});

  add({objective:'2.1.1',target:'prompt-engineering-foundation',
    q:'A customer-service team uses the same foundation model but notices that response quality changes significantly depending on how the request states the role, context, constraints, examples, and desired output format. The team wants a disciplined way to design and iterate these instructions without changing the model weights. What foundational GenAI practice is being described?',
    th:'ทีมบริการลูกค้าใช้ foundation model ตัวเดิม แต่พบว่าคุณภาพคำตอบเปลี่ยนอย่างมากตามวิธีที่ request ระบุบทบาท บริบท ข้อจำกัด ตัวอย่าง และรูปแบบ output ที่ต้องการ ทีมต้องการวิธีที่เป็นระบบในการออกแบบและปรับ instructions เหล่านี้ โดยไม่เปลี่ยน model weights แนวปฏิบัติพื้นฐานของ GenAI ใดกำลังถูกอธิบาย?',
    ask:'ระบุ Prompt Engineering จากการปรับ instructions/context/examples โดยไม่ update weights.',
    choices:{A:'Prompt engineering',B:'Continued pre-training',C:'Model distillation',D:'Data cataloging'},
    answer:['A'],
    why:{A:'ถูก เพราะ prompt engineering ปรับรูปแบบคำสั่ง บริบท ตัวอย่าง และ constraints ที่ส่งเข้า model โดยไม่เปลี่ยน weights.',B:'ผิด เพราะ continued pre-training เปลี่ยน weights ด้วย corpus เพิ่มเติม.',C:'ผิด เพราะ distillation สร้าง student model ให้เลียนแบบ teacher.',D:'ผิด เพราะ cataloging เป็นงานจัด metadata ของข้อมูล.'},
    cue:'เปลี่ยน “สิ่งที่บอกโมเดล” ไม่เปลี่ยน weights = Prompt Engineering.'});

  add({objective:'2.1.2',target:'genai-media-generation-usecases',type:'matching',
    q:'A digital-media company wants to decide which generative capability to use for four new products. The products include creating marketing illustrations from text, generating short promotional video clips, producing synthetic narration audio, and drafting textual summaries of long interviews. The team wants to classify the output modality correctly before evaluating models. Match each product requirement with the most appropriate GenAI use case.',
    th:'บริษัทสื่อดิจิทัลต้องการตัดสินใจว่าจะใช้ความสามารถของ generative AI แบบใดกับผลิตภัณฑ์ใหม่ 4 รายการ ได้แก่ การสร้างภาพประกอบการตลาดจากข้อความ การสร้างคลิปวิดีโอโปรโมตสั้น ๆ การสร้างเสียงบรรยายสังเคราะห์ และการร่างสรุปข้อความจากบทสัมภาษณ์ยาว ทีมต้องการจัดประเภท output modality ให้ถูกต้องก่อนประเมินโมเดล จงจับคู่ requirement แต่ละข้อกับ GenAI use case ที่เหมาะสมที่สุด.',
    ask:'แยก Image generation, Video generation, Audio generation และ Summarization.',
    choices:{A:'Create a new illustration from a written description',B:'Generate a short video sequence from a creative brief',C:'Produce synthetic spoken narration',D:'Condense a long interview into a concise written brief'},
    matches:{'1':'Image generation','2':'Video generation','3':'Audio generation','4':'Summarization'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ A → Image generation.','✅ B → Video generation.','✅ C → Audio generation.','✅ D → Summarization.'],
    cue:'ดูที่ชนิด output ที่ต้อง “สร้างใหม่”.'});

  add({objective:'2.1.2',target:'genai-assistant-translation-code',
    q:'A multinational software company wants one set of GenAI capabilities to help employees. Engineers need draft code and explanations, support agents need a conversational assistant that can summarize cases, and regional teams need first-pass translations of internal content. Which statement best characterizes these requested uses of GenAI?',
    th:'บริษัทซอฟต์แวร์ข้ามชาติต้องการชุดความสามารถ GenAI เพื่อช่วยพนักงาน วิศวกรต้องการให้ช่วยร่าง code และอธิบาย code เจ้าหน้าที่ support ต้องการ conversational assistant ที่สรุปเคสได้ และทีมในภูมิภาคต่าง ๆ ต้องการคำแปลเบื้องต้นของเนื้อหาภายใน ข้อใดอธิบายการใช้งาน GenAI ที่ร้องขอได้ถูกต้องที่สุด?',
    ask:'ระบุว่า Code generation, AI assistants/summarization และ Translation เป็น use cases ของ GenAI.',
    choices:{A:'These are all common GenAI use cases: code generation, AI assistance/summarization, and translation',B:'Only translation is GenAI; code and assistants require deterministic rules only',C:'Only code generation is GenAI; summarization is always traditional regression',D:'None are suitable because GenAI can generate images only'},
    answer:['A'],
    why:{A:'ถูก เพราะ code generation, assistant/summarization และ translation อยู่ในกลุ่ม use cases ของ GenAI.',B:'ผิด เพราะ code generation และ conversational assistants เป็น use cases ทั่วไปของ FM/GenAI.',C:'ผิด เพราะ summarization เป็น generative language task ไม่ใช่ regression.',D:'ผิด เพราะ GenAI ครอบคลุม text, code, image, audio และ modality อื่นตาม model.'},
    cue:'GenAI ไม่ได้มีแค่ภาพ—Text, Code, Assistant, Translation ก็เป็น core use cases.'});

  add({objective:'2.1.2',target:'genai-search-recommendation-customer-agent',
    q:'An e-commerce company plans three AI experiences: a customer-service agent that can converse and use tools to solve account issues, a semantic search experience that finds relevant products from natural-language queries, and a personalized feature that ranks items each shopper is likely to value. Which option correctly identifies the three GenAI-related application patterns?',
    th:'บริษัท e-commerce วางแผนประสบการณ์ AI 3 แบบ ได้แก่ customer-service agent ที่สนทนาและใช้ tools เพื่อแก้ปัญหาบัญชี ระบบ semantic search ที่ค้นสินค้าที่เกี่ยวข้องจากคำถามภาษาธรรมชาติ และความสามารถแบบ personalized ที่จัดอันดับสินค้าซึ่งผู้ซื้อแต่ละคนมีแนวโน้มสนใจ ข้อใดระบุ application patterns ที่เกี่ยวข้องกับ GenAI ทั้งสามได้ถูกต้อง?',
    ask:'แยก Customer service agent, Search และ Recommendation engine.',
    choices:{A:'Customer service agent + search + recommendation engine',B:'Regression + clustering + batch inference only',C:'Image generation + OCR + deterministic payroll',D:'Data retention + encryption + audit logging'},
    answer:['A'],
    why:{A:'ถูก เพราะทั้ง agent, search และ recommendation ถูกระบุเป็น use cases ที่ GenAI สามารถสนับสนุนได้.',B:'ผิด เพราะเป็น ML techniques/inference pattern ไม่ใช่ application patterns ที่ถาม.',C:'ผิด เพราะไม่ตรงกับสามประสบการณ์ใน scenario.',D:'ผิด เพราะเป็น governance/security controls.'},
    cue:'Agent ช่วยทำงาน, Search หา, Recommendation จัดอันดับสิ่งที่เหมาะกับผู้ใช้.'});

  add({objective:'2.1.3',target:'fm-lifecycle-order',type:'ordering',
    q:'A company is establishing a governance checkpoint for a foundation-model project. The project should begin by choosing appropriate data and a base model, perform broad training or use an already pre-trained model, adapt it when needed, evaluate the result against defined criteria, deploy only an accepted solution, and then collect production feedback for the next iteration. Order the lifecycle stages below.',
    th:'บริษัทกำลังกำหนด governance checkpoint สำหรับโครงการ foundation model โครงการควรเริ่มจากการเลือกข้อมูลและ base model ที่เหมาะสม จากนั้นทำ broad training หรือใช้โมเดลที่ pre-trained แล้ว ปรับ model เมื่อต้องการ ประเมินผลตามเกณฑ์ที่กำหนด deploy เฉพาะ solution ที่ผ่าน และเก็บ production feedback สำหรับรอบต่อไป จงเรียง lifecycle stages ต่อไปนี้.',
    ask:'เรียง FM lifecycle จาก Data/Model Selection ไปจนถึง Feedback.',
    choices:{A:'Evaluate the candidate solution',B:'Deploy the approved solution',C:'Select data and model approach',D:'Pre-train or start from a pre-trained FM and fine-tune/adapt as needed',E:'Collect feedback from production use'},
    answer:['C','D','A','B','E'],
    explain:['✅ ลำดับคือ Select data/model → Train/Adapt → Evaluate → Deploy → Feedback.','Evaluation ต้องเกิดก่อน deployment เพื่อให้มี quality/safety gate.','Feedback หลัง production จะถูกใช้ปรับ data/model/prompt ในรอบถัดไป.'],
    cue:'Select → Train/Adapt → Evaluate → Deploy → Feedback.'});

  add({objective:'2.1.3',target:'fm-feedback-loop',
    q:'A generative assistant was deployed after passing its initial evaluation. Three months later, user feedback shows that a new type of question frequently receives poor answers. The team wants to treat the feedback as part of the FM lifecycle rather than as an isolated support issue. Which action best reflects that lifecycle view?',
    th:'generative assistant ถูก deploy หลังผ่าน initial evaluation แล้ว สามเดือนต่อมา user feedback แสดงว่าคำถามประเภทใหม่มักได้รับคำตอบที่ไม่ดี ทีมต้องการใช้ feedback นี้เป็นส่วนหนึ่งของ FM lifecycle แทนการมองเป็น support issue แยกต่างหาก การกระทำใดสะท้อนแนวคิด lifecycle ได้ดีที่สุด?',
    ask:'อธิบายว่า Feedback หลัง deploy ควรย้อนกลับไปสู่การปรับ data/model/prompt และ evaluation รอบใหม่.',
    choices:{A:'Use feedback to identify the gap, adjust the data/model/prompt approach, re-evaluate, and release an improved version if it meets criteria',B:'Ignore feedback because deployment ends the FM lifecycle',C:'Change production outputs manually without re-evaluation',D:'Delete evaluation history so the new behavior becomes the baseline'},
    answer:['A'],
    why:{A:'ถูก เพราะ feedback เป็น input สำหรับ iteration รอบถัดไปและต้องผ่าน evaluation ก่อน release.',B:'ผิด เพราะ lifecycle มี feedback/iteration หลัง deployment.',C:'ผิด เพราะการเปลี่ยน behavior โดยไม่ evaluate เพิ่ม risk.',D:'ผิด เพราะ evaluation history สำคัญต่อ traceability.'},
    cue:'Deploy ไม่ใช่จบ—Feedback → Improve → Evaluate → Release.'});

  add({objective:'2.1.4',target:'token-pricing-tradeoff',
    q:'A company uses a token-priced foundation model for a high-volume support assistant. A new prompt design adds thousands of repeated instruction and history tokens to every request even though the answer quality improves only slightly. Finance asks why the monthly bill increased and why latency may also worsen. Which explanation best connects token-based pricing with performance?',
    th:'บริษัทใช้ foundation model ที่คิดค่าบริการตามจำนวน token สำหรับ support assistant ปริมาณสูง การออกแบบ prompt ใหม่เพิ่ม instruction และ history ที่ซ้ำกันหลายพัน tokens ในทุก request ทั้งที่คุณภาพคำตอบดีขึ้นเพียงเล็กน้อย ฝ่ายการเงินถามว่าทำไมค่าใช้จ่ายรายเดือนจึงเพิ่มและทำไม latency อาจแย่ลงด้วย คำอธิบายใดเชื่อม token-based pricing กับ performance ได้ดีที่สุด?',
    ask:'อธิบายว่าจำนวน input/output tokens มีผลต่อค่าใช้จ่ายและการประมวลผล inference.',
    choices:{A:'More input/output tokens generally increase token-based cost and can increase processing time, so unnecessary context should be controlled',B:'Token count affects storage only and has no relationship to inference cost',C:'More tokens always make the model cheaper because requests are larger',D:'Token pricing applies only during model training, not inference'},
    answer:['A'],
    why:{A:'ถูก เพราะหลาย FM คิดราคาตาม input/output tokens และ context ที่ยาวขึ้นเพิ่มงานประมวลผล.',B:'ผิด เพราะ token count เป็นตัวขับ cost ของ inference ใน pricing models จำนวนมาก.',C:'ผิด เพราะโดยทั่วไป token มากขึ้นไม่ได้ทำให้ถูกลงอัตโนมัติ.',D:'ผิด เพราะ objective นี้กล่าวถึง token-based pricing สำหรับ inference โดยตรง.'},
    cue:'Tokens มาก = Cost มากขึ้น และอาจ Latency มากขึ้น.'});

  add({objective:'2.1.5',target:'context-engineering-role',
    q:'A long-running enterprise assistant has access to years of chat history, retrieved documents, user preferences, and tool outputs. Sending everything to the foundation model causes context-window pressure, high cost, and irrelevant information that distracts the model. The application team designs a policy to select relevant history, summarize older turns, prioritize trusted evidence, and structure the final context for each call. What practice is this?',
    th:'enterprise assistant ที่ใช้งานต่อเนื่องสามารถเข้าถึง chat history หลายปี เอกสารที่ retrieve มา ความชอบของผู้ใช้ และ tool outputs หากส่งทุกอย่างเข้า foundation model จะทำให้ context window แน่น ค่าใช้จ่ายสูง และมีข้อมูลไม่เกี่ยวข้องรบกวนโมเดล ทีมแอปจึงออกแบบนโยบายเพื่อเลือก history ที่เกี่ยวข้อง สรุป turns เก่า จัดลำดับ trusted evidence และจัดโครง context สุดท้ายสำหรับแต่ละ call แนวปฏิบัตินี้เรียกว่าอะไร?',
    ask:'ระบุ Context Engineering จากการคัดเลือก สรุป และจัดโครงข้อมูลทั้งหมดที่จะเข้า context window.',
    choices:{A:'Context engineering',B:'Model distillation',C:'Unsupervised clustering',D:'Provisioned throughput'},
    answer:['A'],
    why:{A:'ถูก เพราะ context engineering จัดการ information set ที่เข้า model call ทั้งหมด ไม่ได้จำกัดเพียง wording ของ prompt.',B:'ผิด เพราะ distillation เปลี่ยน model โดย teacher→student.',C:'ผิด เพราะ clustering จัดกลุ่มข้อมูล.',D:'ผิด เพราะ provisioned throughput เป็น capacity/cost option.'},
    cue:'Prompt engineering = เขียนคำสั่ง; Context engineering = จัด “ของทั้งหมด” ที่จะเข้า model.'});

  add({objective:'2.1.6',target:'multi-agent-pattern',
    q:'A complex due-diligence application has one coordinator that receives a research goal, sends financial analysis to a finance specialist agent, legal analysis to a legal specialist agent, market analysis to a research agent, and then combines their outputs into one report. The specialists do not all solve the entire problem independently. Which agentic pattern best describes the design?',
    th:'แอปทำ due diligence ที่ซับซ้อนมี coordinator หนึ่งตัวรับ research goal จากนั้นส่งงานวิเคราะห์การเงินให้ finance specialist agent ส่งงานกฎหมายให้ legal specialist agent ส่งงานตลาดให้ research agent แล้วรวบรวม outputs ของทุก agent เป็นรายงานเดียว specialist แต่ละตัวไม่ได้แก้ปัญหาทั้งหมดด้วยตนเอง รูปแบบ agentic ใดอธิบาย design นี้ได้ดีที่สุด?',
    ask:'ระบุ multi-agent coordinator/orchestrator-worker pattern จากการแบ่งงานให้ specialist agents.',
    choices:{A:'Orchestrator-worker multi-agent pattern',B:'Single deterministic rule table',C:'One-shot prompting only',D:'Batch classification pipeline'},
    answer:['A'],
    why:{A:'ถูก เพราะ orchestrator แบ่ง subtasks ให้ specialized workers แล้วรวมผลกลับมา.',B:'ผิด เพราะไม่มี rule table เดียวที่ทำงานตาม scenario.',C:'ผิด เพราะ one-shot เป็น prompting technique ไม่ใช่ multi-agent architecture.',D:'ผิด เพราะ batch classification ไม่ได้อธิบาย agent delegation.'},
    cue:'Coordinator แจกงาน → Specialists ทำ → Coordinator รวม = Orchestrator/Worker.'});

  add({objective:'2.1.6',target:'mcp-host-client-server',
    q:'A desktop AI application wants to connect to three external systems through Model Context Protocol (MCP). The desktop application creates separate protocol connections to each external provider, while each provider exposes capabilities that the AI can discover and use. The architecture team wants to label the host, client, and server roles correctly. Which statement is accurate?',
    th:'desktop AI application ต้องการเชื่อมต่อระบบภายนอกสามระบบผ่าน Model Context Protocol (MCP) แอปบน desktop สร้าง protocol connection แยกไปยัง provider แต่ละราย ขณะที่ provider แต่ละราย expose capabilities ให้ AI ค้นพบและใช้งาน ทีมสถาปัตยกรรมต้องการเรียกบทบาท host, client และ server ให้ถูกต้อง ข้อใดถูกต้อง?',
    ask:'แยก MCP Host, MCP Client และ MCP Server ตามตำแหน่งและหน้าที่ในการเชื่อมต่อ.',
    choices:{A:'The AI application is the host, it contains MCP clients for server connections, and external providers act as MCP servers',B:'Every external provider is an MCP client and the AI application is always the server',C:'MCP has only servers and no host/client distinction',D:'The host is the vector database and the client is always the foundation model provider'},
    answer:['A'],
    why:{A:'ถูก เพราะ host เป็นแอปหลักที่จัดการ clients; client แต่ละตัวเชื่อมไปยัง MCP server ซึ่ง expose capabilities.',B:'ผิด เพราะสลับบทบาทฝั่งที่ initiate/hold connection กับฝั่งที่ expose capability.',C:'ผิด เพราะ MCP architecture แยก host/client/server roles.',D:'ผิด เพราะ role ไม่ได้ถูกกำหนดตายตัวด้วยชนิด database หรือ FM provider.'},
    cue:'Host มี Clients; Client ต่อ Server; Server expose capabilities.'});

  add({objective:'2.1.6',target:'mcp-primitives',type:'matching',
    q:'An enterprise team is designing an MCP server for an internal AI assistant. The server needs to expose read-only business context, executable operations such as creating tickets, and reusable interaction templates that can guide the model for common workflows. The developers want to use the correct MCP primitive for each capability. Match each example with the most appropriate primitive category.',
    th:'ทีมองค์กรกำลังออกแบบ MCP server สำหรับ internal AI assistant Server ต้อง expose business context แบบอ่านอย่างเดียว operations ที่เรียกทำงานได้ เช่น การสร้าง ticket และ reusable interaction templates ที่ใช้แนะนำ model สำหรับ workflow ทั่วไป นักพัฒนาต้องการใช้ MCP primitive ให้ถูกกับแต่ละ capability จงจับคู่ตัวอย่างกับ primitive category ที่เหมาะสมที่สุด.',
    ask:'แยก MCP Resources, Tools และ Prompts ตาม Read / Execute / Reusable interaction template.',
    choices:{A:'Read-only customer-policy content',B:'Create or update a ticket in an external system',C:'A reusable template that guides a standard incident investigation'},
    matches:{'1':'MCP Resource','2':'MCP Tool','3':'MCP Prompt'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Read-only/context data → MCP Resource.','✅ Executable operation → MCP Tool.','✅ Reusable interaction template → MCP Prompt.'],
    cue:'Resource = Read; Tool = Do; Prompt = Reusable guidance.'});

  add({objective:'2.1.6',target:'agent-memory-tool-workflow',
    q:'A customer-service agent needs to remember the user’s preferred language across sessions, call a refund API when authorized, and follow a required sequence that verifies identity before issuing money. The architecture review asks which agentic concepts address each requirement instead of treating all three as “memory.” Which mapping is correct?',
    th:'customer-service agent ต้องจำภาษาที่ผู้ใช้ชอบข้าม session เรียก refund API เมื่อได้รับอนุญาต และทำตามลำดับที่บังคับให้ verify identity ก่อนคืนเงิน architecture review ต้องการแยกแนวคิด agentic ที่ใช้กับแต่ละ requirement แทนการเรียกทั้งหมดว่า “memory” ข้อใดจับคู่ได้ถูกต้อง?',
    ask:'แยก Memory management, Tool usage และ Workflow orchestration.',
    choices:{A:'Memory for the preference, tool usage for the API call, workflow orchestration for the required sequence',B:'Workflow orchestration for the preference, memory for the API call, clustering for the sequence',C:'Prompt leakage for the preference, regression for the API call, RAG for the sequence',D:'All three requirements are only examples of tokenization'},
    answer:['A'],
    why:{A:'ถูก เพราะแต่ละ requirement map ไปยัง memory, tool และ orchestration โดยตรง.',B:'ผิด เพราะสลับหน้าที่ของ concepts และ clustering ไม่ได้จัดลำดับ workflow.',C:'ผิด เพราะเป็นแนวคิดคนละกลุ่มกับ agentic requirements ที่ถาม.',D:'ผิด เพราะ tokenization ไม่ได้จัดการ state/action/workflow.'},
    cue:'จำ = Memory; ลงมือกับระบบภายนอก = Tool; คุมลำดับงาน = Orchestration.'});

  add({objective:'2.2.1',target:'genai-advantages-adaptability-conversation',type:'multiple',
    q:'A consulting firm is deciding whether GenAI can improve a knowledge-worker application. The desired system should draft new content, respond conversationally to follow-up questions, and adapt its response style or task behavior from clear instructions and examples without building a separate narrow model for every wording variation. Which THREE GenAI advantages most directly support the business case? (Select THREE.)',
    th:'บริษัทที่ปรึกษากำลังตัดสินใจว่า GenAI จะช่วยปรับปรุงแอปสำหรับ knowledge workers ได้หรือไม่ ระบบที่ต้องการควรร่างเนื้อหาใหม่ ตอบคำถามต่อเนื่องแบบสนทนา และปรับ style หรือ behavior ของคำตอบตาม instructions และ examples ที่ชัดเจน โดยไม่ต้องสร้างโมเดลแคบแยกสำหรับทุกความแตกต่างของ wording ข้อได้เปรียบของ GenAI ใด 3 ข้อสนับสนุน business case นี้โดยตรง?',
    ask:'เลือก Adaptability, Conversational capability และ Content generation เป็นข้อดีของ GenAI.',
    choices:{A:'Ability to generate new content',B:'Conversational responsiveness across turns',C:'Adaptability through instructions and examples',D:'Guaranteed deterministic factual correctness',E:'Complete elimination of governance requirements'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ generation เป็น core capability.',B:'ถูก เพราะ GenAI รองรับ conversational interaction ได้ดี.',C:'ถูก เพราะ prompts/examples สามารถปรับ behavior ใน context ได้.',D:'ผิด เพราะ GenAI ไม่รับประกัน factual correctness แบบ deterministic.',E:'ผิด เพราะยังต้องมี governance/safety controls.'},
    cue:'GenAI strengths = Generate + Converse + Adapt.'});

  add({objective:'2.2.1',target:'genai-responsiveness-efficiency',
    q:'A sales operations team spends hours turning meeting notes into follow-up emails, proposal summaries, and first-draft customer responses. The content still requires employee review, but leadership wants employees to receive useful drafts within seconds so they can handle more accounts. Which GenAI advantage is the clearest business benefit in this scenario?',
    th:'ทีมปฏิบัติการฝ่ายขายใช้เวลาหลายชั่วโมงในการเปลี่ยนบันทึกการประชุมให้เป็นอีเมลติดตาม สรุปข้อเสนอ และร่างคำตอบลูกค้าเบื้องต้น เนื้อหายังต้องผ่านการตรวจจากพนักงาน แต่ฝ่ายบริหารต้องการให้พนักงานได้รับร่างที่ใช้งานได้ภายในไม่กี่วินาที เพื่อให้ดูแลลูกค้าได้มากขึ้น ข้อได้เปรียบของ GenAI ใดเป็น business benefit ที่ชัดที่สุดในสถานการณ์นี้?',
    ask:'ระบุประโยชน์ด้าน responsiveness/efficiency ของ GenAI ในงานสร้าง draft เพื่อช่วยคนทำงาน.',
    choices:{A:'Fast content generation can improve responsiveness and employee efficiency while humans remain in the review loop',B:'GenAI guarantees every draft is final and needs no review',C:'The main benefit is that GenAI converts every task into deterministic rules',D:'The value comes only from replacing all employees'},
    answer:['A'],
    why:{A:'ถูก เพราะ scenario เน้นสร้าง draft เร็วขึ้นเพื่อเพิ่ม throughput และ responsiveness โดยยังมี human review.',B:'ผิด เพราะ GenAI output ยังอาจผิดหรือไม่เหมาะสมและไม่ควรถือว่า final เสมอ.',C:'ผิด เพราะ GenAI ไม่ได้เปลี่ยนทุกงานเป็น deterministic logic.',D:'ผิด เพราะ use case นี้เน้น augmentation ไม่ใช่ต้องแทนคนทั้งหมด.'},
    cue:'GenAI ช่วย “ร่างเร็ว” ให้คนทำงานได้มากขึ้น ไม่ได้แปลว่าไม่ต้อง review.'});
})();