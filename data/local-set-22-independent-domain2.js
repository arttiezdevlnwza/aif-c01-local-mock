(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const add = x => bank.push({ domain:2, ...x });

  add({task:'2.1',type:'single',target:'pretraining-vs-inference',
    question:'A team is reading about how a large language model originally learned broad language patterns from a massive corpus before it was adapted for downstream use. Which lifecycle stage is being described?',
    questionTh:'ทีมกำลังอ่านว่าก่อนนำ LLM ไปปรับใช้กับงานปลายทาง โมเดลเรียนรู้รูปแบบภาษาทั่วไปจาก corpus ขนาดใหญ่มากในขั้นใดของ lifecycle?',
    choices:{A:'Pre-training',B:'Inference',C:'Prompt caching',D:'Reranking'},
    answer:['A'],
    exp:['✅ A — Pre-training คือการฝึกโมเดลพื้นฐานจากข้อมูลขนาดใหญ่มากเพื่อเรียนรู้ pattern ทั่วไป.','❌ B — Inference คือช่วงนำโมเดลที่ฝึกแล้วมาสร้างผลลัพธ์.','❌ C — Prompt caching เป็น optimization ตอนใช้งาน.','❌ D — Reranking เป็นขั้นตอนจัดลำดับ retrieval candidates.','🧠 จำสั้น ๆ — เรียนโลกกว้างก่อน = Pre-training; ใช้งานหลังฝึก = Inference.']});

  add({task:'2.1',type:'single',target:'model-family-autoregressive-vs-diffusion',
    question:'A text model predicts the next token repeatedly to generate a response from left to right. Which model behavior is MOST closely associated with this generation pattern?',
    questionTh:'โมเดลข้อความสร้างคำตอบโดยทำนาย token ถัดไปซ้ำ ๆ ต่อเนื่องจากซ้ายไปขวา พฤติกรรมนี้สัมพันธ์กับ model generation แบบใดมากที่สุด?',
    choices:{A:'Autoregressive generation',B:'Diffusion denoising',C:'K-means clustering',D:'Linear regression'},
    answer:['A'],
    exp:['✅ A — Autoregressive models สร้าง sequence โดยทำนาย next token จาก context ก่อนหน้า.','❌ B — Diffusion generation ค่อย ๆ denoise จาก noise และพบบ่อยในงานสร้างภาพ.','❌ C — K-means ใช้ clustering.','❌ D — Linear regression ทำนายค่าตัวเลขต่อเนื่อง.','🧠 จำสั้น ๆ — Next token ทีละตัว = Autoregressive.']});

  add({task:'2.1',type:'single',target:'tokens-context-window',
    question:'A prompt contains instructions, retrieved passages, chat history, and a user question. Why can adding too much of this material become a problem even before considering output quality?',
    questionTh:'prompt มี instructions, retrieved passages, chat history และคำถามผู้ใช้ ทำไมการใส่ข้อมูลมากเกินไปจึงเป็นปัญหาได้แม้ยังไม่พูดถึงคุณภาพคำตอบ?',
    choices:{A:'The combined tokens can exceed the model context window',B:'The model permanently retrains on every prompt',C:'Embeddings stop being vectors after a fixed number of turns',D:'Temperature automatically becomes zero'},
    answer:['A'],
    exp:['✅ A — Input ทุกส่วนใช้ tokens และรวมกันต้องอยู่ภายใน context window ของ model.','❌ B — Normal inference ไม่ได้ retrain weights ทุกครั้ง.','❌ C — Embeddings ยังเป็น vectors ไม่ได้เปลี่ยนชนิดตามจำนวน turns.','❌ D — Temperature ไม่ได้ลดเป็นศูนย์อัตโนมัติเมื่อ prompt ยาว.','🧠 จำสั้น ๆ — Context window = งบพื้นที่ token ของ request.']});

  add({task:'2.1',type:'multiple',target:'genai-core-capabilities',
    question:'A communications team is considering GenAI for daily work. Which THREE activities are core generative-AI capabilities rather than governance controls or evaluation methods? (Select THREE.)',
    questionTh:'ทีม communications กำลังพิจารณา GenAI สำหรับงานประจำวัน กิจกรรมใด 3 อย่างเป็น core GenAI capabilities มากกว่าจะเป็น governance control หรือ evaluation method?',
    choices:{A:'Draft new marketing copy from instructions',B:'Summarize a long report',C:'Answer questions conversationally',D:'Enforce an IAM permissions boundary',E:'Collect audit evidence against a framework',F:'Measure RMSE on a regression model'},
    answer:['A','B','C'],
    exp:['✅ A — การสร้างข้อความใหม่จาก instructions เป็น generative capability.','✅ B — Summarization เป็น GenAI capability.','✅ C — Conversational Q&A เป็น capability.','❌ D — IAM boundary เป็น security control.','❌ E — Audit evidence collection เป็น governance/compliance activity.','❌ F — RMSE เป็น regression evaluation metric.','🧠 จำสั้น ๆ — Generate / Summarize / Converse = GenAI capabilities.']});

  add({task:'2.1',type:'multiple',target:'genai-risks',
    question:'A legal team is reviewing a customer-facing generative assistant. Which THREE issues are inherent GenAI risks or limitations that should be mitigated? (Select THREE.)',
    questionTh:'ทีมกฎหมายกำลัง review generative assistant ที่ลูกค้าใช้งานโดยตรง ปัญหาใด 3 อย่างเป็น GenAI risks/limitations ที่ควรมีมาตรการลดความเสี่ยง?',
    choices:{A:'Hallucinated factual claims',B:'Potentially inconsistent outputs for the same prompt',C:'Limited interpretability of internal reasoning',D:'Ability to rewrite text in a requested tone',E:'Ability to summarize documents',F:'Ability to respond in natural language'},
    answer:['A','B','C'],
    exp:['✅ A — Hallucination เป็นความเสี่ยงจากข้อมูลที่โมเดลสร้างขึ้นแต่ไม่จริง.','✅ B — Nondeterminism ทำให้ output เดิมอาจไม่คงที่.','✅ C — Limited interpretability เป็นข้อจำกัดสำคัญ.','❌ D/E/F — เป็น capabilities ของ GenAI ไม่ใช่ limitation โดยตัวมันเอง.','🧠 จำสั้น ๆ — มั่ว / แปรผัน / อธิบายภายในยาก = Risk; เขียน/สรุป/คุย = Capability.']});

  add({task:'2.2',type:'single',target:'system-prompt',
    question:'A team wants a chatbot to consistently act as a concise technical-support assistant, avoid making refund promises, and follow the same high-level behavior across all users. Where should this persistent role guidance primarily be placed?',
    questionTh:'ทีมต้องการให้ chatbot ทำหน้าที่เป็น technical-support assistant แบบกระชับ ห้ามสัญญา refund และรักษาพฤติกรรมระดับสูงเหมือนกันกับผู้ใช้ทุกคน ควรวาง guidance นี้ไว้ที่ใดเป็นหลัก?',
    choices:{A:'System prompt',B:'A retrieved document chunk',C:'Temperature setting',D:'Vector-store metadata filter'},
    answer:['A'],
    exp:['✅ A — System prompt ใช้กำหนด role, tone และ high-level behavior ที่ควรใช้ตลอด conversation.','❌ B — Retrieved chunk เป็น knowledge/evidence ไม่ใช่ตัวหลักสำหรับ role policy.','❌ C — Temperature ควบคุม randomness.','❌ D — Metadata filter จำกัด retrieval candidates.','🧠 จำสั้น ๆ — Role/behavior ระดับบน = System prompt.']});

  add({task:'2.2',type:'single',target:'one-shot-vs-few-shot',
    question:'A prompt includes exactly one example of the desired input-output format before the new task. Which prompting technique is this?',
    questionTh:'prompt มีตัวอย่าง input-output ที่ต้องการเพียง 1 ตัวอย่างก่อนโจทย์ใหม่ เทคนิค prompting นี้เรียกว่าอะไร?',
    choices:{A:'Zero-shot prompting',B:'One-shot prompting',C:'Few-shot prompting',D:'Continued pre-training'},
    answer:['B'],
    exp:['✅ B — มีตัวอย่างเดียว = One-shot prompting.','❌ A — Zero-shot ไม่มีตัวอย่าง.','❌ C — Few-shot มีหลายตัวอย่าง.','❌ D — Continued pre-training เปลี่ยน model weights ด้วย corpus เพิ่มเติม.','🧠 จำสั้น ๆ — 0 = Zero; 1 = One; หลาย = Few.']});

  add({task:'2.2',type:'single',target:'temperature-creativity',
    question:'A brainstorming assistant is producing repetitive ideas. The team is willing to trade some predictability for more variation. Which change is MOST aligned with that goal?',
    questionTh:'brainstorming assistant ให้ไอเดียซ้ำ ๆ ทีมยอมแลกความ predictable บางส่วนเพื่อให้ output หลากหลายขึ้น ควรปรับอะไร?',
    choices:{A:'Raise the temperature moderately',B:'Lower the temperature toward zero',C:'Reduce the context window',D:'Switch from tokens to embeddings'},
    answer:['A'],
    exp:['✅ A — Higher temperature เพิ่ม sampling variation/creativity.','❌ B — Lower temperature ทำให้ output predictable มากขึ้น.','❌ C — Context window size ไม่ใช่ creativity control.','❌ D — Tokens กับ embeddings ไม่ใช่ setting ที่สลับเพื่อเพิ่ม creativity.','🧠 จำสั้น ๆ — Creativity ↑ → Temperature ↑; Consistency ↑ → Temperature ↓.']});

  add({task:'2.2',type:'single',target:'grounding-vs-finetune',
    question:'An assistant must answer from policies that change every week and show evidence for each answer. The company does not want to update model weights whenever a policy changes. Which approach BEST addresses the knowledge requirement?',
    questionTh:'assistant ต้องตอบจาก policy ที่เปลี่ยนทุกสัปดาห์และแสดง evidence ของคำตอบ บริษัทไม่ต้องการ update model weights ทุกครั้งที่ policy เปลี่ยน ควรใช้แนวทางใด?',
    choices:{A:'Retrieval-augmented generation',B:'Continued pre-training every week',C:'Model distillation',D:'Increase temperature'},
    answer:['A'],
    exp:['✅ A — RAG ดึงข้อมูลปัจจุบันตอน runtime และแนบ evidence โดยไม่ต้อง retrain ทุกครั้ง.','❌ B — CPT ทุกสัปดาห์ช้า/แพงและไม่เหมาะกับ knowledge ที่เปลี่ยนถี่.','❌ C — Distillation เน้นถ่ายทอด behavior จาก teacher ไป student.','❌ D — Temperature ไม่เพิ่มความรู้ปัจจุบันให้ model.','🧠 จำสั้น ๆ — Facts เปลี่ยนบ่อย + citations = RAG.']});

  add({task:'2.3',type:'single',target:'bedrock-data-boundary-angle',
    question:'A security review asks which statement BEST reflects the isolation expected when an organization uses Amazon Bedrock for normal inference with its private prompts and outputs.',
    questionTh:'security review ถามว่าข้อใดสะท้อน data isolation ที่คาดหวังได้ดีที่สุดเมื่อองค์กรใช้ Amazon Bedrock สำหรับ normal inference ด้วย private prompts และ outputs?',
    choices:{A:'Inference content is automatically published to improve public base models',B:'Customer inference content is not used to train shared base models for other customers',C:'Prompts are shared with every model provider for manual review',D:'Only requests using Guardrails receive data isolation'},
    answer:['B'],
    exp:['✅ B — Customer prompts/completions ใน Bedrock ไม่ถูกนำไป train shared base models สำหรับลูกค้ารายอื่น.','❌ A/C — ไม่ใช่ behavior ของ managed Bedrock data boundary.','❌ D — Data boundary ไม่ได้ขึ้นกับว่าต้องเปิด Guardrails ก่อน.','🧠 จำสั้น ๆ — Bedrock inference content ไม่กลายเป็น training data ของ shared base models.']});

  add({task:'2.3',type:'single',target:'quick-research-vs-automate',
    question:'A strategy team wants an AI capability to gather information from approved enterprise sources, analyze a complex question, and produce a synthesized research brief. It does not need a long-running approval workflow. Which Amazon Quick capability is the closest fit?',
    questionTh:'ทีม strategy ต้องการ AI ที่รวบรวมข้อมูลจาก enterprise sources ที่อนุมัติ วิเคราะห์คำถามซับซ้อน และสังเคราะห์เป็น research brief โดยไม่ได้ต้องการ workflow ที่รันยาวพร้อม approvals ควรใช้ Amazon Quick capability ใด?',
    choices:{A:'Quick Research',B:'Quick Automate',C:'Quick Flows',D:'Quick Sight'},
    answer:['A'],
    exp:['✅ A — Quick Research เหมาะกับงานค้นคว้า วิเคราะห์ และสังเคราะห์ข้อมูลเป็น research output.','❌ B — Quick Automate เน้น complex long-running enterprise processes.','❌ C — Quick Flows เน้น workflow/routine ที่เบากว่า.','❌ D — Quick Sight เน้น analytics/BI.','🧠 จำสั้น ๆ — Research brief = Research; enterprise process = Automate.']});

  add({task:'2.2',type:'single',target:'context-engineering-angle',
    question:'A support assistant has a context window limit. Before each call, the application selects only relevant chat history, compresses older turns, inserts retrieved evidence, and includes recent tool results. What discipline does this describe?',
    questionTh:'support assistant มี context window จำกัด ก่อนแต่ละ call application เลือกเฉพาะ chat history ที่เกี่ยวข้อง สรุป turns เก่า ใส่ retrieved evidence และ tool results ล่าสุด การทำแบบนี้เรียกว่าอะไร?',
    choices:{A:'Context engineering',B:'Model distillation',C:'Label engineering',D:'Batch inference'},
    answer:['A'],
    exp:['✅ A — Context engineering คือการคัด/จัด/บีบ/วาง information ที่จะเข้า context ของ model ในแต่ละ call.','❌ B — Distillation เปลี่ยน model โดย teacher→student.','❌ C — Label engineering เกี่ยวกับ target labels ใน ML data.','❌ D — Batch inference เป็น execution mode.','🧠 จำสั้น ๆ — จัดของที่จะเข้า context ทั้งก้อน = Context engineering.']});

  add({task:'2.3',type:'multiple',target:'flows-vs-agents',
    question:'A company is comparing a fixed approval workflow with an AI assistant that should dynamically choose tools based on a goal. Which TWO statements are correct? (Select TWO.)',
    questionTh:'บริษัทกำลังเทียบ fixed approval workflow กับ AI assistant ที่ควรเลือก tools แบบ dynamic ตาม goal ข้อใด 2 ข้อถูกต้อง?',
    choices:{A:'A deterministic known sequence is a good fit for a flow/workflow approach',B:'Dynamic model-driven planning and tool selection are a good fit for an agent approach',C:'Agents require every step to be hard-coded before execution',D:'Flows are primarily used to change foundation-model weights',E:'RAG is required for every agent action'},
    answer:['A','B'],
    exp:['✅ A — Fixed/deterministic orchestration เหมาะกับ flow/workflow.','✅ B — Dynamic planning/tool selection เหมาะกับ agent.','❌ C — Agent มีจุดเด่นที่ไม่ต้อง hard-code ทุก step.','❌ D — Flow ไม่ได้มีหน้าที่เปลี่ยน model weights.','❌ E — Agent ไม่ได้จำเป็นต้องใช้ RAG ทุก action.','🧠 จำสั้น ๆ — Fixed path = Flow; Decide path at runtime = Agent.']});

  add({task:'2.3',type:'matching',target:'agent-memory-boundaries',
    question:'Match each example with the MOST appropriate agent-memory concept.',
    questionTh:'จับคู่ตัวอย่างแต่ละแบบกับ agent-memory concept ที่เหมาะที่สุด.',
    choices:{A:'The steps and values needed only while solving the current ticket',B:'A customer preference retained for later sessions',C:'A general fact learned about a product category',D:'What happened in one specific prior troubleshooting incident'},
    matches:{'1':'Working / short-term memory','2':'Long-term memory','3':'Semantic memory','4':'Episodic memory'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Current task state → Working memory.','✅ ข้าม sessions → Long-term memory.','✅ General facts/concepts → Semantic memory.','✅ เหตุการณ์เฉพาะที่เคยเกิด → Episodic memory.','🧠 จำสั้น ๆ — Now / Across sessions / Facts / Events.']});

  add({task:'2.3',type:'multiple',target:'mcp-primitives',
    question:'An MCP server exposes capabilities to an AI host. Which THREE primitive categories can the server expose for data access, executable operations, and reusable interaction templates? (Select THREE.)',
    questionTh:'MCP server expose capabilities ให้ AI host หมวด primitive ใด 3 อย่างใช้แทน data access, executable operations และ reusable interaction templates?',
    choices:{A:'Resources',B:'Tools',C:'Prompts',D:'Validation sets',E:'Model weights',F:'Training epochs'},
    answer:['A','B','C'],
    exp:['✅ A — Resources ใช้ expose data/context ที่อ่านได้.','✅ B — Tools เป็น operations ที่เรียก execute ได้.','✅ C — Prompts เป็น reusable prompt templates/interactions.','❌ D/E/F — เป็นแนวคิด ML training ไม่ใช่ MCP primitives.','🧠 จำสั้น ๆ — Read = Resource; Do = Tool; Reuse instruction = Prompt.']});

  add({task:'2.3',type:'multiple',target:'agentcore-runtime-identity-observability',
    question:'A production agent platform needs a managed place to run sessions, secure credential/identity handling for downstream access, and traces to investigate failures. Which THREE AgentCore capabilities map directly to those needs? (Select THREE.)',
    questionTh:'production agent platform ต้องการ managed place สำหรับรัน sessions, จัดการ credential/identity อย่างปลอดภัยสำหรับ downstream access และ traces เพื่อสืบสวน failures ควรใช้ AgentCore capabilities ใด 3 อย่าง?',
    choices:{A:'Runtime',B:'Identity',C:'Observability',D:'Memory only',E:'Browser only',F:'Code Interpreter only'},
    answer:['A','B','C'],
    exp:['✅ A — Runtime ใช้ host/run agent sessions.','✅ B — Identity จัดการ identity/credential access context.','✅ C — Observability ใช้ traces/metrics/logs เพื่อ monitor/debug.','❌ D — Memory แก้เรื่องจำข้อมูล ไม่ใช่ credential/tracing.','❌ E/F — เป็น specialized tools ไม่ครอบคลุมสาม requirements นี้.','🧠 จำสั้น ๆ — Run = Runtime; Credentials = Identity; Trace = Observability.']});

  add({task:'2.1',type:'ordering',target:'fm-solution-lifecycle',
    question:'Order these high-level steps for adopting a foundation-model solution from initial selection through continuous improvement.',
    questionTh:'เรียงขั้นตอนระดับสูงของการนำ foundation-model solution มาใช้ ตั้งแต่เลือกแนวทางจนถึง continuous improvement.',
    choices:{A:'Deploy the approved solution',B:'Evaluate against quality/safety/business criteria',C:'Select an appropriate model and solution approach',D:'Customize or prompt-engineer as needed',E:'Monitor feedback and iterate'},
    answer:['C','D','B','A','E'],
    exp:['✅ ลำดับคือ Select → Adapt → Evaluate → Deploy → Monitor/Iterate.','❌ Evaluate ต้องมาก่อน production release.','❌ Monitoring/feedback เกิดหลัง deploy และใช้ปรับรอบถัดไป.','🧠 จำสั้น ๆ — Choose → Adapt → Check → Ship → Improve.']});
})();