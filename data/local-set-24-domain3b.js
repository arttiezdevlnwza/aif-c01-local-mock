(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:3,type:'single',...x});

  add({objective:'3.2.4',target:'prompt-security-exposure-poisoning-jailbreak',type:'matching',
    q:'A security team is reviewing three separate prompt-related incidents because developers have been calling all of them “prompt injection.” In the first incident, a user tries to reveal hidden system instructions. In the second, malicious content is deliberately inserted into a reusable prompt or trusted prompt source so future requests are influenced. In the third, a user crafts instructions specifically to bypass the model’s safety restrictions. Match each incident with the most accurate risk category.',
    th:'ทีม security กำลังทบทวน incidents ด้าน prompt 3 แบบ เพราะนักพัฒนาเรียกทั้งหมดรวม ๆ ว่า “prompt injection” เหตุการณ์แรก ผู้ใช้พยายามเปิดเผย hidden system instructions เหตุการณ์ที่สอง มีการแทรกเนื้อหาอันตรายลงใน reusable prompt หรือแหล่ง prompt ที่เชื่อถือได้โดยตั้งใจ เพื่อให้ requests ในอนาคตได้รับผลกระทบ เหตุการณ์ที่สาม ผู้ใช้สร้าง instructions โดยเฉพาะเพื่อหลบ safety restrictions ของ model จงจับคู่แต่ละเหตุการณ์กับ risk category ที่แม่นที่สุด.',
    ask:'แยก Prompt Exposure/Leakage, Prompt Poisoning และ Jailbreaking.',
    choices:{A:'Attempt to reveal hidden system or developer instructions',B:'Maliciously alter reusable prompt content or a trusted prompt source',C:'Craft instructions intended to bypass model safeguards'},
    matches:{'1':'Prompt exposure / leakage','2':'Prompt poisoning','3':'Jailbreaking'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Reveal hidden instructions → Prompt exposure/leakage.','✅ Corrupt trusted reusable prompt content → Prompt poisoning.','✅ Bypass safeguards/restrictions → Jailbreaking.'],
    cue:'ล้วง prompt = Exposure; ปนเปื้อน prompt = Poisoning; แหกข้อจำกัด = Jailbreak.'});

  add({objective:'3.2.5',target:'bedrock-prompt-management-versioning',
    q:'A production team has dozens of prompt templates shared by several applications. Compliance requires a clear version history, reusable variables, controlled promotion of an approved prompt version, and the ability for applications to reference that approved version instead of copying prompt text into source code. Which Amazon Bedrock capability most directly addresses this need?',
    th:'ทีม production มี prompt templates หลายสิบชุดที่แชร์ระหว่างหลาย applications ฝ่าย compliance กำหนดให้มี version history ที่ชัด มี reusable variables มีการ promote approved prompt version อย่างควบคุม และให้ applications อ้างอิง version ที่อนุมัติแทนการ copy prompt text ลง source code โดยตรง Amazon Bedrock capability ใดตอบ requirement นี้ได้ตรงที่สุด?',
    ask:'ระบุ Amazon Bedrock Prompt Management สำหรับ reusable templates, variables และ versioning.',
    choices:{A:'Amazon Bedrock Prompt Management',B:'Amazon Bedrock Knowledge Bases',C:'Amazon Bedrock Guardrails only',D:'SageMaker Model Monitor'},
    answer:['A'],
    why:{A:'ถูก เพราะ Prompt Management ใช้เก็บ reusable prompt templates, variables และ versions สำหรับ application use.',B:'ผิด เพราะ Knowledge Bases จัดการ retrieval/grounding data.',C:'ผิด เพราะ Guardrails เป็น safety controls ไม่ใช่ prompt repository/version lifecycle.',D:'ผิด เพราะ Model Monitor ใช้ monitoring ML models หลัง deploy.'},
    cue:'Prompt Template + Variable + Version + Approve = Prompt Management.'});

  add({objective:'3.3.1',target:'fm-training-elements-map',type:'matching',
    q:'A model team is reviewing four adaptation activities and wants to avoid using “fine-tuning” as a catch-all term. One activity learns broad capabilities from a massive general corpus, another updates a model for a narrower task with labeled examples, another continues learning from a large domain corpus, and the last trains a smaller student to imitate a stronger teacher. Match each activity with the correct training concept.',
    th:'ทีม model กำลังทบทวน adaptation activities 4 แบบ และไม่ต้องการใช้คำว่า “fine-tuning” เรียกรวมทุกอย่าง กิจกรรมแรกเรียนรู้ความสามารถกว้างจาก general corpus ขนาดใหญ่มาก กิจกรรมที่สองปรับ model สำหรับงานแคบลงด้วย labeled examples กิจกรรมที่สามเรียนต่อจาก domain corpus ขนาดใหญ่ และกิจกรรมสุดท้าย train student model ที่เล็กกว่าให้เลียนแบบ teacher ที่แข็งแรงกว่า จงจับคู่กิจกรรมกับ training concept ที่ถูกต้อง.',
    ask:'แยก Pre-training, Fine-tuning, Continued pre-training และ Distillation.',
    choices:{A:'Learn broad capabilities from massive general data',B:'Adapt behavior for a narrower task using labeled examples',C:'Continue learning from a large domain-specific corpus',D:'Train a smaller student to imitate a larger teacher'},
    matches:{'1':'Pre-training','2':'Fine-tuning','3':'Continued pre-training','4':'Knowledge distillation'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ Broad general corpus → Pre-training.','✅ Labeled task adaptation → Fine-tuning.','✅ Domain corpus continuation → Continued pre-training.','✅ Teacher→Student imitation → Distillation.'],
    cue:'General corpus / Task labels / Domain corpus / Teacher→Student.'});

  add({objective:'3.3.1',target:'pretraining-vs-finetuning-resource',
    q:'An executive asks why the company should not casually decide to pre-train its own large foundation model when it only needs a specialized internal assistant. The ML team explains that broad pre-training typically requires far more data and compute than adapting an existing model, while fine-tuning or other adaptation methods can start from learned capabilities. Which statement best reflects the distinction?',
    th:'ผู้บริหารถามว่าทำไมบริษัทไม่ควรตัดสินใจง่าย ๆ ที่จะ pre-train foundation model ขนาดใหญ่เอง เมื่อความต้องการจริงคือ specialized internal assistant ทีม ML อธิบายว่า broad pre-training โดยทั่วไปต้องใช้ data และ compute มากกว่าการปรับโมเดลที่มีอยู่มาก ขณะที่ fine-tuning หรือ adaptation methods อื่นสามารถเริ่มจากความสามารถที่โมเดลเรียนรู้มาแล้ว ข้อใดสะท้อนความแตกต่างนี้ได้ถูกต้องที่สุด?',
    ask:'เปรียบเทียบ resource scope ของ Pre-training กับ Fine-tuning.',
    choices:{A:'Pre-training builds broad model capabilities from very large data/compute; fine-tuning adapts an existing model with much less task-specific data and compute',B:'Fine-tuning always requires more compute than training an FM from scratch',C:'Pre-training does not change model weights',D:'Fine-tuning can occur only before a model has learned any general capability'},
    answer:['A'],
    why:{A:'ถูก เพราะ pre-training เป็น broad large-scale learning ส่วน fine-tuning เริ่มจาก pretrained model และปรับ behavior/task.',B:'ผิด เพราะโดยทั่วไป pre-training ใหญ่กว่าและแพงกว่ามาก.',C:'ผิด เพราะ pre-training คือการเรียนรู้ weights หลักของ model.',D:'ผิด เพราะ fine-tuning เกิดหลังมี pretrained model แล้ว.'},
    cue:'Pre-train = สร้างฐานใหญ่; Fine-tune = ปรับฐานเดิมให้ตรงงาน.'});

  add({objective:'3.3.2',target:'instruction-tuning',
    q:'A company has a pretrained language model that knows the vocabulary of the domain but does not reliably follow business instructions. The team creates thousands of reviewed pairs such as “customer request → ideal assistant response” and wants to update the model so instruction-following behavior becomes persistent rather than supplied as demonstrations in every prompt. Which fine-tuning method best fits?',
    th:'บริษัทมี pretrained language model ที่รู้คำศัพท์ของ domain อยู่แล้ว แต่ยังทำตาม business instructions ได้ไม่สม่ำเสมอ ทีมสร้างคู่ข้อมูลที่ผ่านการ review หลายพันคู่ในรูป “customer request → ideal assistant response” และต้องการ update model ให้ instruction-following behavior ติดอยู่กับ model แบบถาวร แทนการใส่ demonstrations ซ้ำในทุก prompt วิธี fine-tuning ใดเหมาะที่สุด?',
    ask:'ระบุ Instruction Tuning / SFT จาก labeled instruction-response pairs.',
    choices:{A:'Instruction tuning / supervised fine-tuning',B:'Metadata filtering',C:'Prompt caching',D:'Vector database sharding'},
    answer:['A'],
    why:{A:'ถูก เพราะใช้ labeled instruction-response examples เพื่อปรับ behavior ให้ follow instructions.',B:'ผิด เพราะ metadata filtering เป็น retrieval control.',C:'ผิด เพราะ prompt caching reuse context processing ไม่ update behavior.',D:'ผิด เพราะ sharding เป็น storage architecture.'},
    cue:'Instruction → Ideal Response pairs = Instruction Tuning/SFT.'});

  add({objective:'3.3.2',target:'domain-adaptation-cpt',
    q:'A general foundation model struggles with specialized biomedical terminology even before it is asked to perform a particular labeled task. The organization owns a very large corpus of domain journals and clinical text but has relatively few high-quality instruction-response examples. The team wants the model to absorb domain language patterns first. Which method is most appropriate at this stage?',
    th:'foundation model ทั่วไปมีปัญหากับศัพท์ biomedical เฉพาะทาง แม้ก่อนจะถูกนำไปทำ labeled task ใดโดยเฉพาะ องค์กรมี corpus ขนาดใหญ่มากจากวารสารและข้อความทางคลินิก แต่มี instruction-response examples คุณภาพสูงค่อนข้างน้อย ทีมต้องการให้ model ซึมซับรูปแบบภาษาของ domain ก่อน วิธีใดเหมาะที่สุดในขั้นนี้?',
    ask:'เลือก Continued Pre-training / Domain adaptation เมื่อมี large domain corpus มากกว่าชุด instruction labels.',
    choices:{A:'Continued pre-training on the domain corpus',B:'Only increase temperature',C:'Use a smaller context window',D:'Apply prompt leakage'},
    answer:['A'],
    why:{A:'ถูก เพราะ CPT ใช้ large domain corpus เพื่อปรับ knowledge/language distribution ก่อน task-specific tuning.',B:'ผิด เพราะ temperature ไม่สอน domain terminology ใหม่ให้ weights.',C:'ผิด เพราะ context limit ไม่ใช่ training method.',D:'ผิด เพราะ prompt leakage เป็น security risk.'},
    cue:'Domain corpus ใหญ่ → CPT; Task instruction labels → SFT.'});

  add({objective:'3.3.2',target:'transfer-learning',
    q:'A vision team has a model that was pretrained on a very large image dataset and already learned reusable visual features. The company has only a moderate number of labeled images for a related industrial inspection task and wants to reuse the learned representations instead of starting from random weights. Which learning strategy best describes this reuse?',
    th:'ทีม computer vision มี model ที่ pre-trained บน image dataset ขนาดใหญ่มากและเรียนรู้ visual features ที่นำกลับมาใช้ได้แล้ว บริษัทมี labeled images จำนวนปานกลางสำหรับงานตรวจสอบในโรงงานซึ่งเป็นงานที่เกี่ยวข้องกัน และต้องการนำ learned representations เดิมมาใช้แทนการเริ่มจาก random weights กลยุทธ์การเรียนรู้นี้เรียกว่าอะไร?',
    ask:'ระบุ Transfer Learning จากการ reuse pretrained knowledge ไปยัง related target task.',
    choices:{A:'Transfer learning',B:'Data retention',C:'Prompt caching',D:'Batch inference'},
    answer:['A'],
    why:{A:'ถูก เพราะนำ knowledge/features จาก pretrained model ไปต่อยอดงานที่เกี่ยวข้อง.',B:'ผิด เพราะ retention เป็น governance policy.',C:'ผิด เพราะ caching เป็น inference optimization.',D:'ผิด เพราะ batch inference เป็น execution mode.'},
    cue:'Pretrained knowledge → Related task = Transfer Learning.'});

  add({objective:'3.3.3',target:'finetune-data-curation-size-labeling',
    q:'A team preparing a fine-tuning dataset combines examples from multiple internal sources. The raw collection contains duplicates, contradictory labels, incomplete responses, and a large number of near-identical easy examples but very few examples of important edge cases. Before training, which data-preparation approach is most appropriate?',
    th:'ทีมกำลังเตรียม fine-tuning dataset โดยรวม examples จาก internal sources หลายแหล่ง Raw collection มีข้อมูลซ้ำ labels ที่ขัดแย้งกัน responses ที่ไม่สมบูรณ์ และ easy examples ที่เกือบเหมือนกันจำนวนมาก แต่มี examples ของ important edge cases น้อยมาก ก่อน training แนวทาง data preparation ใดเหมาะสมที่สุด?',
    ask:'เลือก Data Curation ที่จัดการ quality, duplicates, labels, balance และ dataset size อย่างมีเหตุผล.',
    choices:{A:'Curate the dataset by removing low-quality duplicates, resolving label inconsistencies, and ensuring important cases are sufficiently represented',B:'Keep every record because more rows always guarantee better fine-tuning',C:'Remove all edge cases so the dataset is uniform',D:'Skip data review and compensate only by raising temperature'},
    answer:['A'],
    why:{A:'ถูก เพราะ curation ต้องดู quality, redundancy, labels และ coverage ไม่ใช่ volume อย่างเดียว.',B:'ผิด เพราะ noisy/duplicate/contradictory data สามารถทำให้ training signal แย่ลง.',C:'ผิด เพราะ important edge cases อาจจำเป็นต่อ behavior ที่ต้องการ.',D:'ผิด เพราะ temperature ไม่แก้ training-data quality.'},
    cue:'Fine-tune data = Clean + Consistent + Representative ไม่ใช่ “เยอะไว้ก่อน”.'});

  add({objective:'3.3.3',target:'finetune-data-governance-rights',
    q:'A marketing team proposes fine-tuning an FM on customer emails, licensed industry reports, scraped web pages, and internal documents. The data science team is ready to start training, but legal and privacy reviewers have not confirmed whether each source may be used for model training or whether personal data should be removed. What should happen before the training job starts?',
    th:'ทีมการตลาดเสนอให้ fine-tune FM ด้วย customer emails, industry reports ที่มี license, web pages ที่ scrape มา และ internal documents ทีม data science พร้อมเริ่ม training แล้ว แต่ทีมกฎหมายและ privacy ยังไม่ได้ยืนยันว่าแต่ละ source มีสิทธิ์นำไปใช้ train model หรือไม่ และข้อมูลส่วนบุคคลส่วนใดควรถูกลบ ก่อนเริ่ม training job ควรทำอะไร?',
    ask:'เน้น Data Governance, Privacy และ Rights ก่อนนำข้อมูลไป fine-tune.',
    choices:{A:'Verify governance, privacy, licensing, and permitted training use for each data source before training',B:'Train first and investigate rights only if a complaint occurs',C:'Assume internal use removes all copyright and privacy obligations',D:'Increase model size to reduce governance risk'},
    answer:['A'],
    why:{A:'ถูก เพราะ data governance ต้องครอบคลุม permission, privacy, licensing และ intended use ก่อน training.',B:'ผิด เพราะ post-hoc investigation ไม่ใช่ responsible data preparation.',C:'ผิด เพราะ internal use ไม่ยกเลิก legal/privacy obligations.',D:'ผิด เพราะ model size ไม่แก้ data rights.'},
    cue:'ก่อน Tune ต้องรู้ว่า “ข้อมูลนี้ใช้ Train ได้จริงไหม”.'});

  add({objective:'3.3.3',target:'finetune-representativeness',
    q:'A customer-support model will serve users across age groups, languages, and regions. The proposed fine-tuning dataset is large overall, but almost all examples come from one language and one geographic market. The team worries that a large row count may hide weak coverage of the real user population. Which dataset property should be examined before training?',
    th:'customer-support model จะให้บริการผู้ใช้หลายช่วงอายุ หลายภาษา และหลายภูมิภาค Proposed fine-tuning dataset มีจำนวน records มากโดยรวม แต่ examples เกือบทั้งหมดมาจากภาษาเดียวและตลาดภูมิศาสตร์เดียว ทีมกังวลว่าจำนวนแถวที่มากอาจซ่อนการครอบคลุมผู้ใช้จริงที่ไม่เพียงพอ ควรตรวจคุณสมบัติใดของ dataset ก่อน training?',
    ask:'ระบุ Representativeness/Inclusivity ของ fine-tuning data ไม่ใช่ดู dataset size อย่างเดียว.',
    choices:{A:'Representativeness of the intended user population and important subgroups',B:'Only total file size in gigabytes',C:'Only the number of model parameters',D:'Only the output token limit'},
    answer:['A'],
    why:{A:'ถูก เพราะ training data ควรเป็นตัวแทนของ population/use cases ที่ model จะเจอจริง.',B:'ผิด เพราะ file size มากไม่ได้แปลว่า coverage ของ groups ดี.',C:'ผิด เพราะ model parameters ไม่แก้ representation gap ใน data.',D:'ผิด เพราะ output length ไม่เกี่ยวกับ training population coverage.'},
    cue:'Dataset ใหญ่ ≠ Representative.'});

  add({objective:'3.3.3',target:'rlhf-preferences',
    q:'After supervised fine-tuning, a team wants the model to prefer responses that human reviewers judge as more helpful, safe, and aligned with policy. Reviewers compare candidate outputs and provide preference signals that are used to further optimize the model behavior. Which technique is most closely associated with this use of human preference feedback?',
    th:'หลัง supervised fine-tuning ทีมต้องการให้ model ให้ความสำคัญกับ responses ที่ human reviewers เห็นว่ามีประโยชน์ ปลอดภัย และสอดคล้องกับ policy มากกว่า Reviewers เปรียบเทียบ candidate outputs และให้ preference signals ซึ่งถูกใช้ปรับ behavior ของ model ต่อ เทคนิคใดสัมพันธ์กับการใช้ human preference feedback แบบนี้มากที่สุด?',
    ask:'ระบุ Reinforcement Learning from Human Feedback (RLHF).',
    choices:{A:'Reinforcement learning from human feedback (RLHF)',B:'K-means clustering',C:'Prompt caching',D:'Data cataloging'},
    answer:['A'],
    why:{A:'ถูก เพราะ RLHF ใช้ human preferences/feedback เพื่อปรับ model behavior.',B:'ผิด เพราะ clustering ไม่ใช้ human preference reward สำหรับ generation behavior.',C:'ผิด เพราะ caching ไม่เปลี่ยน model behavior.',D:'ผิด เพราะ cataloging จัด metadata.'},
    cue:'คนเปรียบเทียบ/ให้ preference → ปรับ model = RLHF.'});

  add({objective:'3.4.1',target:'human-benchmark-bedrock-eval',type:'multiple',
    q:'A team must choose between several foundation models for a customer assistant. The answers are partly open-ended, so the team wants both repeatable automated evidence and judgment about nuanced usefulness that simple string overlap may miss. Which THREE evaluation approaches are reasonable components of a strong evaluation plan? (Select THREE.)',
    th:'ทีมต้องเลือก foundation model จากหลาย candidate สำหรับ customer assistant คำตอบมีลักษณะ open-ended บางส่วน ทีมจึงต้องการทั้งหลักฐานแบบอัตโนมัติที่ทำซ้ำได้และการตัดสินด้านประโยชน์เชิง nuance ซึ่ง simple string overlap อาจวัดไม่ครบ แนวทาง evaluation ใด 3 ข้อเป็นองค์ประกอบที่เหมาะสมของแผนประเมินที่แข็งแรง?',
    ask:'เลือก Benchmark/automatic evaluation, Human-in-the-loop evaluation และ Amazon Bedrock Model Evaluation.',
    choices:{A:'Representative benchmark datasets with relevant metrics',B:'Human-in-the-loop evaluation using a defined rubric',C:'Amazon Bedrock Model Evaluation where appropriate',D:'Choose only by model parameter count',E:'Use training loss as the only production criterion'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ benchmarks ให้ comparison ที่ทำซ้ำได้.',B:'ถูก เพราะ human evaluators จับ nuance ที่ metric บางตัวไม่ครอบคลุม.',C:'ถูก เพราะ Bedrock Model Evaluation เป็น managed capability สำหรับ FM evaluation.',D:'ผิด เพราะ size ไม่ได้เท่ากับ quality/use-case fit.',E:'ผิด เพราะ training loss อย่างเดียวไม่บอก application quality.'},
    cue:'FM Evaluation ดี = Benchmark + Human judgment + Managed evaluation tools ตามเหมาะสม.'});

  add({objective:'3.4.1',target:'bedrock-model-evaluation-vs-clarify',
    q:'A GenAI team wants to compare responses from foundation models using automatic model-quality metrics and an optional human evaluation workflow. Another team in the company uses SageMaker Clarify for bias and SHAP-based explainability on traditional ML models. Which AWS capability is specifically aligned with the GenAI model-comparison requirement?',
    th:'ทีม GenAI ต้องการเปรียบเทียบ responses จาก foundation models โดยใช้ automatic model-quality metrics และ optional human evaluation workflow ขณะที่อีกทีมในบริษัทใช้ SageMaker Clarify สำหรับ bias และ SHAP-based explainability ของ traditional ML models AWS capability ใดตรงกับ requirement ด้านการเปรียบเทียบ GenAI models โดยเฉพาะ?',
    ask:'แยก Amazon Bedrock Model Evaluation จาก SageMaker Clarify.',
    choices:{A:'Amazon Bedrock Model Evaluation',B:'SageMaker Clarify',C:'Amazon Macie',D:'AWS Config'},
    answer:['A'],
    why:{A:'ถูก เพราะ Bedrock Model Evaluation ใช้ประเมิน/เปรียบเทียบ FM outputs/models ด้วย automatic และ human approaches ตาม capability.',B:'ผิด เพราะ Clarify เน้น bias/explainability เช่น SHAP ใน ML workflows.',C:'ผิด เพราะ Macie ค้นหา sensitive data ใน S3.',D:'ผิด เพราะ Config ประเมิน resource configuration.'},
    cue:'FM output/model evaluation = Bedrock Model Evaluation; Bias/SHAP = Clarify.'});

  add({objective:'3.4.2',target:'rouge-bleu-bertscore-map',type:'matching',
    q:'An evaluation team is building a dashboard for several text-generation tasks. One metric family is commonly associated with summarization overlap, another with reference-based machine translation using n-gram precision, and another uses contextual embeddings to compare semantic similarity even when wording differs. Match each description with the most appropriate metric.',
    th:'ทีม evaluation กำลังสร้าง dashboard สำหรับ text-generation tasks หลายแบบ Metric family หนึ่งมักใช้กับ overlap ของ summarization อีก metric ใช้กับ machine translation แบบมี reference และเน้น n-gram precision ส่วนอีก metric ใช้ contextual embeddings เพื่อเปรียบเทียบ semantic similarity แม้ wording จะต่างกัน จงจับคู่คำอธิบายกับ metric ที่เหมาะสมที่สุด.',
    ask:'แยก ROUGE, BLEU และ BERTScore ตามลักษณะการวัด.',
    choices:{A:'Summarization-oriented reference overlap',B:'Translation-oriented n-gram precision/overlap',C:'Contextual-embedding semantic similarity'},
    matches:{'1':'ROUGE','2':'BLEU','3':'BERTScore'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Summarization overlap → ROUGE.','✅ Translation n-gram overlap → BLEU.','✅ Semantic similarity with contextual embeddings → BERTScore.'],
    cue:'Summary = ROUGE; Translation = BLEU; Meaning similarity = BERTScore.'});

  add({objective:'3.4.2',target:'llm-as-judge',
    q:'A benchmark contains thousands of open-ended answers that cannot be judged reliably by exact string matching. The team defines a rubric for correctness, completeness, and helpfulness and wants a scalable evaluator, but it also plans to compare evaluator scores with a human-reviewed subset to detect systematic errors. Which evaluation approach best fits this design?',
    th:'benchmark มี open-ended answers หลายพันคำตอบซึ่งไม่สามารถประเมินได้อย่างน่าเชื่อถือด้วย exact string matching ทีมกำหนด rubric สำหรับ correctness, completeness และ helpfulness และต้องการ evaluator ที่ scale ได้ แต่ยังวางแผนเปรียบเทียบคะแนนของ evaluator กับ subset ที่มนุษย์ review เพื่อจับ systematic errors แนวทาง evaluation ใดเหมาะกับ design นี้ที่สุด?',
    ask:'ระบุ LLM-as-a-Judge และความสำคัญของการ calibrate/validate กับ human-reviewed subset.',
    choices:{A:'LLM-as-a-judge calibrated against human-reviewed examples',B:'Exact match only',C:'Model parameter count as the quality score',D:'Random scoring without a rubric'},
    answer:['A'],
    why:{A:'ถูก เพราะ LLM judge สามารถใช้ rubric ใน scale สูงและควร validate/calibrate กับ human judgment.',B:'ผิด เพราะ open-ended correct answers อาจ wording ต่างกันมาก.',C:'ผิด เพราะ parameter count ไม่ใช่ output-quality metric.',D:'ผิด เพราะไม่มี rubric/evidence ทำให้ evaluation ไม่น่าเชื่อถือ.'},
    cue:'Open-ended + Rubric + Scale = LLM-as-a-Judge; มี Human anchor ตรวจ.'});

  add({objective:'3.4.2',target:'metric-limitations',
    q:'A translation benchmark receives a high BLEU score, but human reviewers still report that some outputs are misleading or fail to preserve important meaning. The evaluation lead reminds the team that every automatic metric captures only part of quality and should be interpreted in context. What is the best conclusion?',
    th:'translation benchmark ได้ BLEU score สูง แต่ human reviewers ยังรายงานว่า outputs บางส่วนทำให้เข้าใจผิดหรือรักษาความหมายสำคัญไว้ไม่ครบ Evaluation lead เตือนทีมว่า automatic metric แต่ละตัววัดคุณภาพได้เพียงบางมิติและต้องตีความร่วมกับบริบท ข้อสรุปใดเหมาะสมที่สุด?',
    ask:'เข้าใจข้อจำกัดของ metric เดี่ยวและเหตุผลที่ต้องใช้หลายหลักฐานในการประเมิน FM.',
    choices:{A:'Do not treat one metric as a complete measure of application quality; combine task-appropriate metrics and qualitative evaluation',B:'A high BLEU score proves every output is correct and safe',C:'Human review should always be ignored when an automatic score exists',D:'All text-generation metrics are interchangeable'},
    answer:['A'],
    why:{A:'ถูก เพราะ metrics มี strengths/limitations ต่างกันและ application quality ต้องดูหลายมิติ.',B:'ผิด เพราะ BLEU วัด overlap ไม่รับประกัน truthfulness/safety/completeness ทุกมิติ.',C:'ผิด เพราะ human evaluation มีคุณค่าโดยเฉพาะ open-ended nuance.',D:'ผิด เพราะ ROUGE, BLEU, BERTScore และ judge approaches วัดต่างกัน.'},
    cue:'Metric เดียวไม่เท่ากับ “คุณภาพทั้งหมด”.'});

  add({objective:'3.4.3',target:'fm-business-objective-productivity-engagement',
    q:'An internal writing assistant produces fluent text and scores well on offline benchmarks, but leadership funded the project to reduce time employees spend drafting documents and to increase adoption of the knowledge portal. The team therefore needs evidence beyond model-quality scores. Which measurements are most aligned with whether the FM actually meets the stated business objectives?',
    th:'internal writing assistant สร้างข้อความได้ลื่นและได้คะแนน offline benchmarks ดี แต่ฝ่ายบริหารลงทุนโครงการนี้เพื่อให้พนักงานใช้เวลาในการร่างเอกสารน้อยลงและเพิ่มการใช้งาน knowledge portal ทีมจึงต้องการหลักฐานนอกเหนือจาก model-quality scores Measurements ใดสอดคล้องกับการตรวจว่า FM บรรลุ business objectives ที่กำหนดจริงหรือไม่?',
    ask:'เชื่อม Productivity และ User Engagement กับ business objective evaluation.',
    choices:{A:'Employee time saved/productivity and user engagement or adoption',B:'Only model parameter count',C:'Only embedding dimension',D:'Only training epoch count'},
    answer:['A'],
    why:{A:'ถูก เพราะตรงกับ objectives ที่ตั้งไว้คือ productivity และ engagement/adoption.',B:'ผิด เพราะ size ไม่วัด business outcome.',C:'ผิด เพราะ embedding dimension เป็น technical property.',D:'ผิด เพราะ epochs เป็น training setting.'},
    cue:'วัดความสำเร็จด้วย “สิ่งที่ธุรกิจตั้งใจให้ดีขึ้น”.'});

  add({objective:'3.4.4',target:'rag-application-evaluation',
    q:'A RAG assistant gives a wrong answer. Investigation shows that the generator faithfully summarized the passages it received, but retrieval selected documents about the wrong product version. The team wants to evaluate the application as a system rather than blame the foundation model alone. Which component-level metric or dimension should be examined first?',
    th:'RAG assistant ให้คำตอบผิด เมื่อสืบสวนพบว่า generator สรุป passages ที่ได้รับอย่าง faithful แต่ retrieval เลือกเอกสารของ product version ที่ผิด ทีมต้องการประเมิน application ในฐานะระบบ ไม่ใช่โทษ foundation model เพียงอย่างเดียว Metric หรือ dimension ระดับ component ใดควรถูกตรวจเป็นอันดับแรก?',
    ask:'แยก Retrieval Relevance/Quality จาก Generation Faithfulness ใน RAG evaluation.',
    choices:{A:'Retrieval relevance or retrieval quality',B:'Generation faithfulness only',C:'Model training loss only',D:'UI rendering latency only'},
    answer:['A'],
    why:{A:'ถูก เพราะ evidence ที่ retrieve มาผิดเรื่องตั้งแต่ต้น จึงเป็น retrieval problem.',B:'ผิด เพราะ generator faithful ต่อ passages ที่ได้รับแล้ว.',C:'ผิด เพราะ runtime retrieval failure ไม่ได้ชี้ตรงไป training loss.',D:'ผิด เพราะ UI latency ไม่ทำให้เลือก source ผิด.'},
    cue:'Context ผิด = Retrieval issue; Context ถูกแต่ตอบมั่ว = Faithfulness issue.'});

  add({objective:'3.4.4',target:'agent-workflow-evaluation',
    q:'A tool-using agent produces polite final answers, but production incidents show that it sometimes calls the wrong tool, repeats an action twice, or stops before completing the requested business workflow. The evaluation team wants to assess agent performance rather than score only the final text. Which evaluation evidence is most important to add?',
    th:'agent ที่ใช้ tools สร้าง final answers สุภาพและอ่านดี แต่ production incidents แสดงว่าบางครั้ง agent เรียก tool ผิด ทำ action เดิมซ้ำสองครั้ง หรือหยุดก่อนทำ business workflow ที่ผู้ใช้ขอให้เสร็จ ทีม evaluation ต้องการประเมิน agent performance ไม่ใช่ดูแค่ final text ควรเพิ่ม evidence แบบใดสำคัญที่สุด?',
    ask:'ประเมิน Agents/Workflows ผ่าน Task completion และ Tool-use/Execution behavior ไม่ใช่ final text อย่างเดียว.',
    choices:{A:'Task-completion and tool-use/execution-sequence evaluation',B:'Only BLEU on the final response',C:'Only model parameter count',D:'Only the color of the agent UI'},
    answer:['A'],
    why:{A:'ถูก เพราะ agent quality ต้องดูว่าเลือก tools ถูก ทำ sequence ถูก และทำ goal สำเร็จ.',B:'ผิด เพราะ final text overlap ไม่จับผิด tool/repeated action/incomplete workflow.',C:'ผิด เพราะ size ไม่สะท้อน execution behavior.',D:'ผิด เพราะ UI ไม่ใช่ agent-performance metric.'},
    cue:'Agent evaluation = “ทำงานสำเร็จไหม + ใช้ Tool ถูกไหม” ไม่ใช่แค่ตอบสวย.'});

  add({objective:'3.4.5',target:'business-alignment-task-satisfaction-cost',type:'multiple',
    q:'A production AI assistant has passed technical quality tests, and the product owner now wants three application-level metrics that reveal whether users actually finish the intended task, whether they are satisfied with the experience, and whether the economics remain sustainable at scale. Which THREE metrics directly align with these goals? (Select THREE.)',
    th:'production AI assistant ผ่าน technical quality tests แล้ว และ product owner ต้องการ application-level metrics สามตัวเพื่อดูว่าผู้ใช้ทำ task ที่ตั้งใจไว้สำเร็จจริงหรือไม่ พอใจกับประสบการณ์หรือไม่ และ economics ยังยั่งยืนเมื่อ scale หรือไม่ Metrics ใด 3 ตัวตรงกับ goals เหล่านี้โดยตรง?',
    ask:'เลือก Task Completion Rate, User Satisfaction และ Cost per Interaction.',
    choices:{A:'Task completion rate',B:'User satisfaction',C:'Cost per interaction',D:'Number of attention heads',E:'Embedding dimension',F:'Training batch size'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะวัด goal completion.',B:'ถูก เพราะวัด user experience/outcome.',C:'ถูก เพราะวัด economics ของ production usage.',D:'ผิด เพราะเป็น architecture detail.',E:'ผิด เพราะเป็น vector/model property.',F:'ผิด เพราะเป็น training setting.'},
    cue:'App success = งานเสร็จ + คนพอใจ + ต้นทุนไหว.'});

  add({objective:'3.4.5',target:'cost-per-successful-outcome',
    q:'Two agent designs have similar answer quality. Design A is cheaper per API call but frequently fails and requires retries, while Design B costs slightly more per interaction but completes the customer task on the first attempt much more often. Finance wants a metric that combines practical usefulness with economics rather than looking only at raw request price. Which measure is most informative?',
    th:'agent designs สองแบบมี answer quality ใกล้กัน Design A ถูกกว่าต่อ API call แต่ล้มเหลวบ่อยและต้อง retry ส่วน Design B แพงขึ้นเล็กน้อยต่อ interaction แต่ทำ customer task สำเร็จตั้งแต่ครั้งแรกได้บ่อยกว่ามาก ฝ่ายการเงินต้องการ metric ที่รวม practical usefulness กับ economics แทนการดู raw request price อย่างเดียว Measure ใดให้ข้อมูลมากที่สุด?',
    ask:'มอง business alignment ด้วย Cost per successful interaction/task ไม่ใช่ cost per API call อย่างเดียว.',
    choices:{A:'Cost per successful interaction or completed task',B:'Only cost per single API request',C:'Only model parameter count',D:'Only maximum context window'},
    answer:['A'],
    why:{A:'ถูก เพราะรวมทั้ง cost และ task outcome ทำให้เปรียบเทียบ economics ของ application ได้จริงกว่า.',B:'ผิด เพราะ request ถูกแต่ fail/retry มากอาจแพงกว่าต่อ outcome.',C:'ผิด เพราะ model size ไม่ใช่ business metric.',D:'ผิด เพราะ context window ไม่วัด outcome economics.'},
    cue:'ของถูกต่อ call อาจแพงต่อ “งานสำเร็จ”.'});
})();