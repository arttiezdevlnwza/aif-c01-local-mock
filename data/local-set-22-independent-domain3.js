(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const add = x => bank.push({ domain:3, ...x });

  add({task:'3.1',type:'single',target:'knowledge-bases-grounding',
    question:'An internal assistant must answer from changing HR policies stored in approved enterprise sources and provide citations without retraining the foundation model. Which Amazon Bedrock capability is the direct fit?',
    questionTh:'internal assistant ต้องตอบจาก HR policies ที่เปลี่ยนได้ใน enterprise sources ที่อนุมัติ พร้อม citations โดยไม่ retrain foundation model ควรใช้ Amazon Bedrock capability ใด?',
    choices:{A:'Knowledge Bases for Amazon Bedrock',B:'Amazon Bedrock Guardrails',C:'Prompt Management',D:'Model Evaluation'},
    answer:['A'],
    exp:['✅ A — Knowledge Bases ทำ managed retrieval/RAG เพื่อ grounding คำตอบจากแหล่งข้อมูลปัจจุบันพร้อม citations.','❌ B — Guardrails เป็น safety/control layer.','❌ C — Prompt Management เก็บ/version prompt templates.','❌ D — Model Evaluation ใช้ประเมิน outputs/models.','🧠 จำสั้น ๆ — Current private knowledge + citations = Knowledge Bases.']});

  add({task:'3.1',type:'single',target:'metadata-filtering-access-boundary',
    question:'A knowledge base contains documents for many departments. Retrieval for a Finance user must consider only documents tagged department=finance before relevance scoring. Which technique should enforce this first?',
    questionTh:'knowledge base มีเอกสารหลายแผนก การ retrieval สำหรับผู้ใช้ Finance ต้องพิจารณาเฉพาะเอกสารที่ tag department=finance ก่อนจัด relevance ควรใช้ technique ใดก่อน?',
    choices:{A:'Metadata filtering',B:'Reranking',C:'Prompt caching',D:'Fine-tuning'},
    answer:['A'],
    exp:['✅ A — Metadata filtering จำกัด candidate set ตาม metadata constraint ก่อน relevance ordering.','❌ B — Reranking จัดลำดับ candidates ที่ผ่านการ retrieve/filter มาแล้ว.','❌ C — Prompt caching ลดการประมวลผล context ซ้ำ.','❌ D — Fine-tuning เปลี่ยน model weights ไม่ได้ enforce document eligibility.','🧠 จำสั้น ๆ — ใครเข้า candidate set ได้ = Filter.']});

  add({task:'3.1',type:'single',target:'reranking-angle',
    question:'A retriever already returns 30 semantically relevant passages, but the best evidence is often buried near the bottom. The team wants a second step to reorder those candidates by relevance before generation. What should it add?',
    questionTh:'retriever คืน passages ที่เกี่ยวข้องมาแล้ว 30 ชิ้น แต่ evidence ที่ดีที่สุดมักอยู่ท้ายรายการ ทีมต้องการขั้นตอนที่สองเพื่อจัดลำดับ candidates ใหม่ตาม relevance ก่อน generation ควรเพิ่มอะไร?',
    choices:{A:'Reranking',B:'Metadata filtering only',C:'Model distillation',D:'Tokenization'},
    answer:['A'],
    exp:['✅ A — Reranking ใช้ re-score/reorder retrieved candidates เพื่อให้ evidence ที่ดีที่สุดขึ้นมาก่อน.','❌ B — Metadata filtering ตัด candidates ตาม attributes ไม่ได้มีเป้าหมายหลักเพื่อจัด relevance ใหม่.','❌ C — Distillation เป็น model customization.','❌ D — Tokenization เป็น text preprocessing ของ model.','🧠 จำสั้น ๆ — Filter = ใครเข้าได้; Rerank = ใครขึ้นก่อน.']});

  add({task:'3.1',type:'multiple',target:'vector-store-selection',
    question:'A solution architect is choosing vector storage. One workload needs search-engine style hybrid keyword+semantic retrieval; another must keep relational data in PostgreSQL while adding vector similarity. Which TWO choices map directly to these needs? (Select TWO.)',
    questionTh:'solution architect กำลังเลือก vector storage งานหนึ่งต้องการ hybrid keyword+semantic retrieval แบบ search engine อีกงานต้องเก็บ relational data ใน PostgreSQL และเพิ่ม vector similarity ควรเลือกอะไร 2 ข้อ?',
    choices:{A:'Amazon OpenSearch Service / OpenSearch Serverless',B:'Aurora or RDS for PostgreSQL with pgvector',C:'Amazon SQS',D:'AWS Step Functions',E:'Amazon Kinesis Data Streams'},
    answer:['A','B'],
    exp:['✅ A — OpenSearch เหมาะกับ search-oriented hybrid/vector retrieval.','✅ B — PostgreSQL + pgvector เพิ่ม vector similarity โดยคง relational database family เดิม.','❌ C/D/E — Queue, workflow orchestration และ streaming ไม่ใช่ vector search stores.','🧠 จำสั้น ๆ — Search engine = OpenSearch; relational PostgreSQL + vectors = pgvector.']});

  add({task:'3.2',type:'single',target:'converse-vs-invokemodel',
    question:'A chat application may switch among several supported Bedrock models and wants the same message-oriented request structure for multi-turn conversations. Which API reduces model-specific message formatting?',
    questionTh:'chat application อาจสลับใช้ Bedrock models หลายตัวที่รองรับ และต้องการ request structure แบบ message เดียวกันสำหรับ multi-turn conversations API ใดช่วยลด model-specific message formatting?',
    choices:{A:'Converse API',B:'InvokeModel API',C:'StartModelCustomizationJob',D:'CreateKnowledgeBase'},
    answer:['A'],
    exp:['✅ A — Converse ให้ consistent message-based interface ข้าม supported Bedrock models.','❌ B — InvokeModel เป็น direct invocation ที่ payload อาจต่างตาม model.','❌ C — ใช้เริ่ม customization job.','❌ D — ใช้สร้าง Knowledge Base ไม่ใช่ chat runtime API.','🧠 จำสั้น ๆ — หลาย model + message schema เดียว = Converse.']});

  add({task:'3.2',type:'matching',target:'prompt-capability-map',
    question:'Match each Amazon Bedrock prompt-related capability with its primary purpose.',
    questionTh:'จับคู่ Amazon Bedrock prompt-related capability แต่ละตัวกับจุดประสงค์หลัก.',
    choices:{A:'Prompt Management',B:'Prompt Optimization',C:'Prompt Caching',D:'Intelligent Prompt Routing'},
    matches:{'1':'Store reusable prompt templates and versions','2':'Improve or rewrite a prompt for model use','3':'Reuse repeated input context to reduce processing cost/latency','4':'Route requests toward an appropriate model based on request characteristics'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Prompt Management → เก็บ templates/versions.','✅ Prompt Optimization → ช่วยปรับ prompt.','✅ Prompt Caching → reuse repeated context เพื่อลด processing.','✅ Intelligent Prompt Routing → เลือก model ตามลักษณะ request.','🧠 จำสั้น ๆ — Store / Improve / Reuse / Route.']});

  add({task:'3.2',type:'single',target:'rag-vs-sft-behavior-facts',
    question:'A support assistant needs a stable brand response style, but product facts change every few days and must be cited. Which design BEST separates these needs?',
    questionTh:'support assistant ต้องมี brand response style ที่คงที่ แต่ product facts เปลี่ยนทุกไม่กี่วันและต้อง cite ได้ design ใดแยกสอง requirement นี้ได้เหมาะที่สุด?',
    choices:{A:'Use supervised fine-tuning for behavior/style and RAG for changing facts',B:'Fine-tune all changing facts into the model every few days',C:'Use RAG to permanently change the model tone and remove prompting',D:'Use a higher temperature for both style and factual freshness'},
    answer:['A'],
    exp:['✅ A — SFT/fine-tuning เหมาะกับ persistent behavior/style ส่วน RAG เหมาะกับ current private facts + citations.','❌ B — Facts เปลี่ยนถี่ไม่ควร bake เข้า weights ซ้ำ ๆ.','❌ C — RAG supply knowledge ไม่ได้เปลี่ยน weights ให้ style ถาวร.','❌ D — Temperature ไม่แก้ knowledge freshness หรือ style persistence.','🧠 จำสั้น ๆ — Behavior in weights; changing facts via retrieval.']});

  add({task:'3.2',type:'single',target:'continued-pretraining-vs-sft',
    question:'A biomedical foundation model must absorb large volumes of unlabeled domain text so it better understands specialized terminology before task-specific instruction examples are introduced. Which customization method fits this stage?',
    questionTh:'biomedical foundation model ต้องเรียนรู้ unlabeled domain text ปริมาณมากเพื่อเข้าใจศัพท์เฉพาะดีขึ้น ก่อนจะมี task-specific instruction examples ควรใช้ customization method ใด?',
    choices:{A:'Continued pre-training',B:'Instruction tuning / SFT',C:'RAG only',D:'Prompt caching'},
    answer:['A'],
    exp:['✅ A — CPT ใช้ large domain corpus มักเป็น unlabeled text เพื่อปรับ domain knowledge/language patterns.','❌ B — SFT ใช้ labeled instruction-response examples เพื่อปรับ task behavior.','❌ C — RAG ดึงความรู้ตอน runtime ไม่ได้เปลี่ยน weights.','❌ D — Caching เป็น inference optimization.','🧠 จำสั้น ๆ — Corpus ใหญ่ไม่มี labels = CPT; Instruction-response labels = SFT.']});

  add({task:'3.2',type:'single',target:'distillation',
    question:'A company wants a smaller model that imitates the behavior of a much larger high-quality model to reduce serving cost. Which technique BEST matches?',
    questionTh:'บริษัทต้องการโมเดลเล็กที่เลียนแบบ behavior ของโมเดลใหญ่คุณภาพสูงเพื่อลด serving cost technique ใดตรงที่สุด?',
    choices:{A:'Knowledge distillation',B:'Continued pre-training',C:'Metadata filtering',D:'Prompt injection'},
    answer:['A'],
    exp:['✅ A — Distillation ถ่ายทอด behavior/knowledge จาก teacher model ไป student model ที่เล็กกว่า.','❌ B — CPT เพิ่ม domain learning ให้ model เดิม.','❌ C — Filtering เป็น retrieval technique.','❌ D — Prompt injection เป็น security risk.','🧠 จำสั้น ๆ — Teacher ใหญ่ → Student เล็ก = Distillation.']});

  add({task:'3.2',type:'multiple',target:'fine-tune-data-quality-governance',
    question:'Before supervised fine-tuning, which THREE dataset practices most directly improve both model quality and governance? (Select THREE.)',
    questionTh:'ก่อน supervised fine-tuning แนวปฏิบัติด้าน dataset ใด 3 ข้อช่วยทั้ง model quality และ governance โดยตรงที่สุด?',
    choices:{A:'Remove duplicates and obvious low-quality examples',B:'Check representation and label consistency',C:'Verify rights/privacy/permission for training use',D:'Move final test examples into training',E:'Ignore licensing for internal models',F:'Keep contradictory labels to maximize variety'},
    answer:['A','B','C'],
    exp:['✅ A — Cleaning ลด noise.','✅ B — Representation/label consistency ส่งผลต่อ quality/fairness.','✅ C — Rights/privacy/permission เป็น governance requirement.','❌ D — ทำ test contamination.','❌ E — Internal use ไม่ยกเลิก legal/governance obligations.','❌ F — Contradictory labels ที่ไม่ตั้งใจทำ signal แย่ลง.','🧠 จำสั้น ๆ — Clean + Representative/consistent + Permission.']});

  add({task:'3.2',type:'ordering',target:'customization-lifecycle-independent',
    question:'After choosing a base model, order the main stages of a controlled supervised fine-tuning workflow.',
    questionTh:'หลังเลือก base model แล้ว จงเรียงขั้นตอนหลักของ controlled supervised fine-tuning workflow.',
    choices:{A:'Promote the approved customized model',B:'Evaluate the customized result on held-out criteria',C:'Prepare and approve training examples',D:'Run the customization/fine-tuning job'},
    answer:['C','D','B','A'],
    exp:['✅ ลำดับคือ Prepare data → Fine-tune → Evaluate → Promote.','❌ Promote ต้องหลัง evaluation.','🧠 จำสั้น ๆ — Data → Tune → Check → Release.']});

  add({task:'3.3',type:'single',target:'rouge-vs-bleu-vs-bertscore',
    question:'A translation team wants a traditional reference-overlap metric based largely on matching n-grams between candidate and reference translations. Which metric is MOST associated with this use case?',
    questionTh:'ทีม machine translation ต้องการ traditional reference-overlap metric ที่อาศัยการเทียบ n-grams ระหว่าง candidate กับ reference translations metric ใดสัมพันธ์กับ use case นี้มากที่สุด?',
    choices:{A:'BLEU',B:'ROUGE',C:'BERTScore',D:'RMSE'},
    answer:['A'],
    exp:['✅ A — BLEU เชื่อมโยงกับ machine translation และ n-gram precision/overlap.','❌ B — ROUGE ใช้กับ summarization บ่อย.','❌ C — BERTScore ใช้ contextual embeddings เพื่อ semantic similarity.','❌ D — RMSE เป็น regression metric.','🧠 จำสั้น ๆ — Translation = BLEU; Summary = ROUGE; Meaning similarity = BERTScore.']});

  add({task:'3.3',type:'single',target:'llm-as-judge-calibration',
    question:'A team uses another LLM to score open-ended answers against a rubric at scale. What additional practice most directly improves confidence that this evaluator is behaving acceptably?',
    questionTh:'ทีมใช้ LLM อีกตัวให้คะแนน open-ended answers ตาม rubric ในปริมาณมาก แนวปฏิบัติใดช่วยเพิ่มความมั่นใจว่า evaluator ทำงานได้เหมาะสมที่สุด?',
    choices:{A:'Calibrate/validate it against a human-reviewed subset',B:'Increase the evaluated model temperature',C:'Remove the rubric',D:'Use only exact string match'},
    answer:['A'],
    exp:['✅ A — Human-reviewed subset ช่วยตรวจ/calibrate LLM judge และจับ bias/inconsistency.','❌ B — Temperature ของ evaluated model ไม่ validate judge.','❌ C — ไม่มี rubric จะยิ่งลด consistency.','❌ D — Exact match ไม่เหมาะกับ nuanced open-ended answers.','🧠 จำสั้น ๆ — LLM judge ต้องมี human anchor ตรวจความน่าเชื่อถือ.']});

  add({task:'3.3',type:'single',target:'bedrock-eval-vs-clarify',
    question:'A team wants a managed AWS capability to compare foundation-model responses using model-quality criteria and optional human evaluation. It is not asking for SHAP feature attribution. Which capability fits?',
    questionTh:'ทีมต้องการ managed AWS capability เพื่อเปรียบเทียบ foundation-model responses ด้วย model-quality criteria และ optional human evaluation โดยไม่ได้ต้องการ SHAP feature attribution ควรใช้ capability ใด?',
    choices:{A:'Amazon Bedrock Model Evaluation',B:'SageMaker Clarify',C:'SageMaker Model Monitor',D:'Amazon Textract'},
    answer:['A'],
    exp:['✅ A — Bedrock Model Evaluation ใช้ประเมิน/เปรียบเทียบ FM outputs ด้วย automatic/human evaluation.','❌ B — Clarify เน้น bias/explainability เช่น SHAP.','❌ C — Model Monitor เน้น post-deployment monitoring/drift.','❌ D — Textract ดึงข้อมูลจากเอกสาร.','🧠 จำสั้น ๆ — FM output evaluation = Bedrock Evaluation; Bias/SHAP = Clarify.']});

  add({task:'3.1',type:'multiple',target:'fm-selection-requirements',
    question:'A travel assistant must accept text and images, support Thai and English, respond interactively, and stay within a cost target. Which FOUR model-selection criteria map directly to these requirements? (Select FOUR.)',
    questionTh:'travel assistant ต้องรับ text และ images รองรับไทย/อังกฤษ ตอบแบบ interactive และอยู่ใน cost target เกณฑ์เลือก model ใด 4 ข้อตรงกับ requirements เหล่านี้?',
    choices:{A:'Supported modalities',B:'Multilingual capability',C:'Inference latency',D:'Cost',E:'Number of social-media mentions',F:'Logo style'},
    answer:['A','B','C','D'],
    exp:['✅ A — ต้องรับหลาย modality.','✅ B — ต้องรองรับหลายภาษา.','✅ C — Interactive response ต้องพิจารณา latency.','✅ D — มี cost target ชัดเจน.','❌ E/F — ไม่ใช่ technical selection criteria ของ requirement นี้.','🧠 จำสั้น ๆ — Requirement ไหนพูดมา ให้ map เป็น selection criterion ตรงนั้น.']});

  add({task:'3.4',type:'multiple',target:'genai-cost-optimization',
    question:'A high-volume GenAI service repeatedly sends the same long policy prefix, receives a mix of simple and hard requests, and sometimes hits regional capacity pressure. Which THREE approaches can directly address these three cost/capacity patterns? (Select THREE.)',
    questionTh:'GenAI service ปริมาณสูงส่ง policy prefix เดิมยาว ๆ ซ้ำ มีทั้ง request ง่าย/ยาก และบางครั้งเจอ regional capacity pressure วิธีใด 3 อย่างช่วยตรงกับสาม pattern นี้?',
    choices:{A:'Prompt caching',B:'Intelligent prompt routing',C:'Cross-Region Inference',D:'Increase temperature globally',E:'Duplicate the prefix twice',F:'Pre-train a new model per request'},
    answer:['A','B','C'],
    exp:['✅ A — Caching ลด repeated token processing.','✅ B — Routing ช่วยไม่ต้องใช้ expensive model กับทุก request.','✅ C — Cross-Region Inference ช่วยเพิ่ม access to capacity.','❌ D/E/F — ไม่แก้ pattern cost/capacity ตามโจทย์โดยตรง.','🧠 จำสั้น ๆ — Repeat = Cache; Easy/Hard = Route; Capacity = Cross-Region.']});

  add({task:'3.3',type:'multiple',target:'application-business-evaluation',
    question:'An AI support assistant has strong offline benchmark scores. Which THREE measures provide stronger evidence that the deployed application is actually useful and economically viable? (Select THREE.)',
    questionTh:'AI support assistant มี offline benchmark scores ดีมาก metrics ใด 3 ตัวให้หลักฐานดีกว่าว่า deployed application มีประโยชน์และคุ้มค่าจริง?',
    choices:{A:'Task completion/resolution rate',B:'User satisfaction',C:'Cost per successful interaction',D:'Number of attention heads',E:'Embedding dimension',F:'Model release codename'},
    answer:['A','B','C'],
    exp:['✅ A — วัดว่างานจริงสำเร็จไหม.','✅ B — วัดประสบการณ์/คุณค่าที่ผู้ใช้รับรู้.','✅ C — วัด economics ของการใช้งานจริง.','❌ D/E/F — เป็น model metadata/architecture ไม่ใช่ application outcome.','🧠 จำสั้น ๆ — App success = งานสำเร็จ + ผู้ใช้โอเค + cost คุ้ม.']});

  add({task:'3.3',type:'single',target:'rag-evaluation-faithfulness',
    question:'A RAG system retrieves passages that clearly contain the correct policy, but the generated answer adds an unsupported exception that is not present in those passages. Which quality dimension is failing most directly?',
    questionTh:'RAG system retrieve passages ที่มี policy ถูกต้องชัดเจน แต่ generated answer เพิ่มข้อยกเว้นที่ไม่มีอยู่ใน passages เหล่านั้น quality dimension ใดมีปัญหาโดยตรงที่สุด?',
    choices:{A:'Generation faithfulness / groundedness',B:'Retrieval relevance',C:'Vector-index availability',D:'Training accuracy'},
    answer:['A'],
    exp:['✅ A — Evidence ถูกแล้ว แต่ answer ไม่ยึด evidence จึงเป็น faithfulness/groundedness issue.','❌ B — Retrieval relevance ดีอยู่แล้วเพราะ passages ถูกต้อง.','❌ C — Index ใช้งานได้เพราะ retrieve สำเร็จ.','❌ D — Training accuracy ไม่ใช่ metric หลักของ RAG runtime issue นี้.','🧠 จำสั้น ๆ — Retrieve ถูก แต่ตอบเกิน evidence = Faithfulness.']});
})();