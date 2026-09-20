(() => {
  const bank = window.LOCAL_SET_19_BANK = window.LOCAL_SET_19_BANK || [];
  const domain = 3;
  const add = item => bank.push({ domain, ...item });

  add({
    task:'3.1', type:'single',
    question:'A bank is building an internal assistant that answers questions about policies stored in confidential documents. The documents change several times each month, answers must reflect the latest approved version, and employees need citations so they can verify the source. The bank does not want to retrain a foundation model whenever a policy changes. Which design is MOST appropriate?',
    questionTh:'ธนาคารสร้าง internal assistant จาก confidential policy documents ที่เปลี่ยนทุกเดือน ต้องตอบจากเวอร์ชันล่าสุดและมี citations โดยไม่ retrain ทุกครั้ง ควรออกแบบอย่างไร?',
    choices:{A:'Use RAG with a managed knowledge base over the approved documents',B:'Perform continued pre-training after every document change',C:'Increase temperature so the model explores more answers',D:'Use only a longer system prompt without retrieval'},
    answer:['A'],
    explanation:'ตอบ A — RAG เหมาะข้อมูล private/current ที่เปลี่ยนบ่อยและต้องการ grounding/citations โดยไม่เปลี่ยน weights. B หนักและไม่เหมาะกับ update ถี่; C เพิ่ม randomness; D ไม่ทำให้เข้าถึงเอกสารล่าสุดแบบ retrieval.'
  });

  add({
    task:'3.1', type:'multiple',
    question:'A global support application must choose between several foundation models. It handles English and Thai, accepts text plus screenshots, requires responses within a tight latency target, and has a strict monthly inference budget. The team wants to compare candidates using criteria that could materially affect production suitability. Which FOUR criteria should the team prioritize? (Select FOUR.)',
    questionTh:'global support app ต้องเลือก FM ที่รองรับ English/Thai, text+screenshot, latency ต่ำ และมีงบ inference จำกัด ต้อง prioritize criteria ใด 4 ข้อ?',
    choices:{A:'Supported modalities',B:'Multilingual capability',C:'Inference latency',D:'Cost',E:'Model release month',F:'Popularity on social media'},
    answer:['A','B','C','D'],
    explanation:'ตอบ A, B, C, D — modality, multilingual, latency และ cost เป็น selection criteria โดยตรง. E/F ไม่ใช่ production requirement ที่รับประกันความเหมาะสม.'
  });

  add({
    task:'3.1', type:'single',
    question:'A content team wants product descriptions to be more varied while keeping the same factual input. Current outputs are too repetitive and nearly identical across runs. The team is willing to accept somewhat less predictability but does not want to change the model or its training data. Which inference parameter should the team adjust?',
    questionTh:'ทีม content อยากให้ product descriptions หลากหลายขึ้น เพราะ output เดิม repetitive มาก ยอมรับ predictability ลดลงได้แต่ไม่ต้องการเปลี่ยน model/training data ควรปรับ parameter ใด?',
    choices:{A:'Increase temperature moderately',B:'Decrease maximum output tokens to zero',C:'Change the vector database',D:'Enable model fine-tuning automatically'},
    answer:['A'],
    explanation:'ตอบ A — temperature ที่สูงขึ้นเพิ่ม randomness/variety ของ generation. B จำกัดความยาวและอาจตัด output, C ไม่เกี่ยวกับ generation diversity โดยตรง, D เปลี่ยน customization และเกิน requirement.'
  });

  add({
    task:'3.1', type:'single',
    question:'An enterprise search team already stores structured business records in PostgreSQL and wants to add semantic similarity search while keeping relational data and vector representations together. The team prefers an AWS relational database option that supports a vector extension rather than operating a separate search cluster. Which option BEST fits?',
    questionTh:'ทีม enterprise search มีข้อมูล relational ใน PostgreSQL และอยากเพิ่ม semantic vector search โดยเก็บ relational+vector ใกล้กัน ต้องการ AWS relational DB ที่รองรับ vector extension แทนการแยก search cluster ควรเลือกอะไร?',
    choices:{A:'Amazon Aurora PostgreSQL-compatible edition',B:'Amazon DynamoDB',C:'Amazon ElastiCache',D:'Amazon S3 Glacier Deep Archive'},
    answer:['A'],
    explanation:'ตอบ A — Aurora PostgreSQL-compatible สามารถใช้ pgvector สำหรับ relational + vector use case. B เป็น NoSQL key-value/document, C เป็น cache, D เป็น archival object storage.'
  });

  add({
    task:'3.1', type:'single',
    question:'A company has a general-purpose foundation model and needs to answer questions from frequently changing internal manuals. Another proposal is to fine-tune the model on the manuals every month. The architecture team wants the lower-effort approach that keeps knowledge current and avoids changing model weights whenever documents are updated. Which approach provides the BEST tradeoff?',
    questionTh:'บริษัทมี general FM ต้องตอบจาก internal manuals ที่เปลี่ยนบ่อย มีข้อเสนอ fine-tune ทุกเดือน แต่ทีมอยากลด effort และไม่เปลี่ยน weights ทุกครั้ง วิธีใดเหมาะกว่า?',
    choices:{A:'Retrieval Augmented Generation (RAG)',B:'Full pre-training from scratch',C:'Supervised fine-tuning each time the manuals change',D:'Model distillation'},
    answer:['A'],
    explanation:'ตอบ A — RAG อัปเดต external knowledge โดยเปลี่ยน index/context ไม่ต้องเปลี่ยน weights จึงเหมาะข้อมูลเปลี่ยนบ่อย. B/C ใช้ training effort สูงกว่า, D เน้นสร้าง student model เล็กลง ไม่ใช่อัปเดต knowledge สด.'
  });

  add({
    task:'3.1', type:'single',
    question:'A travel company wants an assistant that can check a booking system, compare policy rules, request a refund through an API when conditions are met, and ask the customer for missing information before continuing. The sequence of actions can change depending on tool results, so a fixed workflow is not sufficient. Which concept BEST fits the requirement?',
    questionTh:'บริษัทท่องเที่ยวต้องการ assistant ที่ตรวจ booking, เช็ก policy, เรียก refund API และถามข้อมูลเพิ่มตามผลระหว่างทาง ลำดับ action เปลี่ยนได้จึงไม่เหมาะ fixed workflow แนวคิดใดตรงที่สุด?',
    choices:{A:'AI agent with tool use',B:'Static prompt template',C:'Embedding model only',D:'Batch inference job'},
    answer:['A'],
    explanation:'ตอบ A — agent สามารถ reason/choose tools/actions แบบ dynamic ตาม intermediate results. B เป็นโครง prompt คงที่, C แค่ representation/retrieval, D ประมวลผล offline batch.'
  });

  add({
    task:'3.1', type:'single',
    question:'A media company needs to search a large document corpus using both semantic similarity and traditional keyword matching. The team wants a managed AWS search service that can support vector search and hybrid retrieval patterns at scale. Existing relational constraints are not the primary concern. Which AWS service is the BEST fit?',
    questionTh:'บริษัท media ต้อง search document corpus ด้วยทั้ง semantic similarity และ keyword matching ต้องการ managed AWS search service ที่รองรับ vector/hybrid retrieval ใน scale โดย relational constraint ไม่ใช่ประเด็นหลัก ควรใช้บริการใด?',
    choices:{A:'Amazon OpenSearch Service',B:'Amazon RDS for MySQL',C:'Amazon SQS',D:'AWS Lambda'},
    answer:['A'],
    explanation:'ตอบ A — OpenSearch รองรับ vector search และ keyword/hybrid search use cases. B เป็น relational database แต่ไม่ใช่ตัวเลือกหลักสำหรับ hybrid search แบบนี้; C เป็น queue; D เป็น compute.'
  });

  add({
    task:'3.2', type:'multiple',
    question:'A support team is improving prompts for a model that must produce a concise incident summary in a fixed structure. The team wants to test different instructions, include examples where useful, keep prompts specific, and preserve safe behavior. They also want to avoid treating prompt engineering as a substitute for evaluating outputs. Which TWO practices are MOST appropriate? (Select TWO.)',
    questionTh:'ทีม support ปรับ prompt เพื่อสรุป incident ตาม format ต้องการทดลอง instruction, ใช้ examples เมื่อเหมาะ, เขียนให้ specific และรักษา safety โดยไม่ถือว่า prompt แทน evaluation ได้ ข้อใดเหมาะ 2 ข้อ?',
    choices:{A:'Use specific, concise instructions and test variants',B:'Use guardrails and evaluate resulting outputs',C:'Make every prompt as long as possible',D:'Remove context to avoid all ambiguity',E:'Assume one successful example proves the prompt is production-ready'},
    answer:['A','B'],
    explanation:'ตอบ A, B — prompt engineering ที่ดีเน้น specific/concise, experimentation และ guardrails/evaluation. C ยาวไม่ได้แปลว่าดี, D อาจทำให้ข้อมูลไม่พอ, E ไม่มีหลักฐานพอสำหรับ production quality.'
  });

  add({
    task:'3.2', type:'matching',
    question:'A design team is standardizing several prompting patterns. One workflow gives the model no examples, another supplies several input-output examples, a third uses a reusable structure with variables, and an image-generation workflow specifies elements that must not appear in the result. Match each requirement with the MOST appropriate technique.',
    questionTh:'ทีม design มี prompting patterns หลายแบบ: ไม่มี example, มีหลาย examples, template มี variables และ image prompt ที่ระบุสิ่งห้ามปรากฏ ให้จับคู่กับ technique ที่เหมาะสม',
    choices:{A:'Perform the task with instructions but no examples',B:'Demonstrate the desired pattern using several examples',C:'Reuse a common prompt structure with variables',D:'Specify visual elements that should not be generated'},
    matches:{'1':'Zero-shot prompting','2':'Few-shot prompting','3':'Prompt template','4':'Negative prompting'},
    answer:['A:1','B:2','C:3','D:4'],
    explanation:'A→Zero-shot, B→Few-shot, C→Prompt template, D→Negative prompting. ทั้งสี่เป็น prompt techniques ที่ไม่ต้องเปลี่ยน model weights.'
  });

  add({
    task:'3.2', type:'single',
    question:'A company stores production prompts in multiple documents and teams keep overwriting one another\'s changes. The organization wants reusable prompt templates, variables, side-by-side variants for testing, and numbered versions that remain immutable after publication so a production release can be reproduced later. Which Bedrock capability BEST fits?',
    questionTh:'บริษัทเก็บ production prompts กระจัดกระจายและมีการ overwrite กัน ต้องการ template reuse, variables, variants สำหรับ test และ numbered versions ที่ immutable เพื่อ reproduce production release ควรใช้ Bedrock capability ใด?',
    choices:{A:'Amazon Bedrock Prompt Management',B:'Amazon Bedrock Knowledge Bases',C:'Amazon Bedrock Guardrails',D:'Amazon Bedrock Provisioned Throughput'},
    answer:['A'],
    explanation:'ตอบ A — Prompt Management รองรับ reusable templates, variables, variants และ versioning. B ทำ RAG, C ทำ safety controls, D จัด capacity สำหรับ inference.'
  });

  add({
    task:'3.2', type:'single',
    question:'A public chatbot retrieves a web page that contains hidden text telling the model to ignore its system instructions and disclose confidential configuration. The text came from an external source rather than directly from the user\'s message. The team needs to classify the prompt-related risk before selecting controls. Which risk is MOST directly illustrated?',
    questionTh:'public chatbot retrieve web page ที่มี hidden instruction ให้ ignore system prompt และเปิดเผย confidential config โดย instruction มาจาก external content ไม่ใช่ user ตรง ๆ ความเสี่ยง prompt แบบใด?',
    choices:{A:'Indirect prompt injection',B:'Model distillation',C:'Data drift',D:'Tokenization error'},
    answer:['A'],
    explanation:'ตอบ A — malicious instruction ที่เข้ามาผ่าน retrieved/external content คือ indirect prompt injection. B เป็น customization, C คือ input distribution เปลี่ยนหลัง deploy, D ไม่ใช่ security pattern นี้.'
  });

  add({
    task:'3.2', type:'single',
    question:'A company has a reusable prompt that works well in development, but production teams keep changing wording manually and cannot determine which version produced a specific output. The company wants a controlled process to test variants, preserve published versions, and reuse approved prompts across applications. Which strategy BEST addresses the problem?',
    questionTh:'บริษัทมี reusable prompt ที่ใช้ได้ดีแต่ production teams แก้ wording เองจนตามไม่ได้ว่า output มาจาก version ใด ต้องการ test variants, preserve version และ reuse approved prompts ควรใช้ strategy ใด?',
    choices:{A:'Use Amazon Bedrock Prompt Management with versioned prompts',B:'Store prompts only in user browser history',C:'Fine-tune a new model for each wording change',D:'Increase the context window'},
    answer:['A'],
    explanation:'ตอบ A — Prompt Management ออกแบบมาสำหรับสร้าง/ทดสอบ/จัด version/reuse prompt. B traceability แย่, C หนักเกินปัญหา wording, D ไม่แก้ version management.'
  });

  add({
    task:'3.3', type:'single',
    question:'A medical organization has a large corpus of unlabeled domain text containing specialized terminology. It wants an existing foundation model to absorb more domain language before later adapting it to specific tasks. The organization is prepared to update model weights and accepts a higher training cost than prompting or RAG. Which customization approach is MOST appropriate?',
    questionTh:'องค์กรการแพทย์มี corpus domain text ขนาดใหญ่ที่ไม่มี label และอยากให้ FM ซึมซับศัพท์โดเมนก่อนนำไปปรับงานเฉพาะ ยอม update weights และ training cost สูงกว่า prompting/RAG ควรใช้วิธีใด?',
    choices:{A:'Continued pre-training',B:'Retrieval Augmented Generation',C:'Zero-shot prompting',D:'Prompt caching'},
    answer:['A'],
    explanation:'ตอบ A — Continued pre-training ใช้ corpus โดเมนขนาดใหญ่ซึ่งมัก unlabeled เพื่อเพิ่ม domain knowledge/language และเปลี่ยน weights. B/C/D ไม่ได้ฝึก weights แบบนี้.'
  });

  add({
    task:'3.3', type:'single',
    question:'A company wants a model to follow a specialized response style and perform a narrow support task. It has a curated set of high-quality instruction-response examples reviewed by domain experts. The company does not merely need current facts; it wants the model\'s task behavior itself to change. Which method BEST fits?',
    questionTh:'บริษัทต้องการเปลี่ยน behavior/style ของโมเดลสำหรับ support task เฉพาะ มี curated instruction-response examples ที่ผู้เชี่ยวชาญตรวจแล้ว ไม่ได้ต้องการแค่ current facts ควรใช้วิธีใด?',
    choices:{A:'Supervised fine-tuning / instruction tuning',B:'RAG only',C:'Prompt caching',D:'Vector reranking'},
    answer:['A'],
    explanation:'ตอบ A — labeled instruction-response examples เหมาะกับ SFT/instruction tuning เพื่อปรับ behavior/task. B เพิ่ม context ไม่เปลี่ยน weights, C ลด repeated prompt processing, D ปรับ retrieval ranking.'
  });

  add({
    task:'3.3', type:'multiple',
    question:'A model customization team is preparing data for fine-tuning. The training examples were collected from several business units, and the team is concerned about inaccurate labels, duplicated records, missing permission to use some data, and poor coverage of important customer groups. Which THREE actions should the team take before fine-tuning? (Select THREE.)',
    questionTh:'ทีมกำลังเตรียม fine-tuning data จากหลาย business units กังวล label ผิด, duplicate, permission และ coverage ของ customer groups ควรทำ 3 อย่างใดก่อน fine-tune?',
    choices:{A:'Curate and clean the examples',B:'Verify data governance and usage permissions',C:'Check representativeness and label quality',D:'Maximize temperature during training',E:'Ignore duplicates because the model can resolve them',F:'Use production test data as training labels without review'},
    answer:['A','B','C'],
    explanation:'ตอบ A, B, C — fine-tuning data ควร curated/clean, governed/authorized และ representative พร้อม label quality ที่ดี. D เป็น generation control ไม่ใช่ data prep, E/F เพิ่ม quality/leakage risk.'
  });

  add({
    task:'3.3', type:'matching',
    question:'A team is comparing four model-customization techniques. One adapts a model using instruction-response examples, one continues learning from a large domain corpus, one transfers behavior from a larger teacher to a smaller student, and one reuses knowledge from a pre-trained model for a related target task. Match each description with the MOST appropriate technique.',
    questionTh:'ทีมกำลังเทียบ customization techniques: instruction-response examples, domain corpus ขนาดใหญ่, teacher→student และ reuse pretrained knowledge ไป task ใหม่ ให้จับคู่ technique',
    choices:{A:'Use labeled instruction-response examples to change task behavior',B:'Continue training on a large domain-specific corpus',C:'Transfer behavior from a larger teacher to a smaller student',D:'Reuse a pre-trained model\'s knowledge for a related target task'},
    matches:{'1':'Instruction tuning / supervised fine-tuning','2':'Continued pre-training','3':'Model distillation','4':'Transfer learning'},
    answer:['A:1','B:2','C:3','D:4'],
    explanation:'A→Instruction tuning/SFT, B→Continued pre-training, C→Distillation, D→Transfer learning. จุดต่างหลักคือชนิดข้อมูลและเป้าหมายของ customization.'
  });

  add({
    task:'3.3', type:'ordering',
    question:'A team is documenting a simplified foundation-model customization process for governance review. It starts with a selected base model, prepares approved training examples, runs customization, evaluates the customized behavior on held-out data, and only then promotes the resulting artifact for production use. Select and order the FOUR stages that occur after the base model has been selected.',
    questionTh:'ทีมกำลังเขียน customization process หลังเลือก base FM แล้ว เริ่มจากเตรียม approved examples, customize, evaluate ด้วย held-out data แล้วจึง promote/deploy artifact จงเรียง 4 ขั้นตอน',
    choices:{A:'Evaluate the customized model on held-out data',B:'Prepare and curate the training examples',C:'Deploy or promote the approved model artifact',D:'Run the fine-tuning/customization job'},
    answer:['B','D','A','C'],
    explanation:'ลำดับคือ Prepare/curate data → Fine-tune/customize → Evaluate → Deploy/promote. การ evaluate ต้องเกิดก่อน production promotion เพื่อไม่ใช้ production เป็นพื้นที่ทดลอง.'
  });

  add({
    task:'3.4', type:'single',
    question:'A company needs to compare thousands of generated answers against a detailed quality rubric. Human reviewers can evaluate only a small sample, so the team wants a scalable automated approach. The team understands that the evaluator itself can introduce judge bias and position bias and plans to validate the method. Which evaluation approach BEST fits?',
    questionTh:'บริษัทต้องประเมิน generated answers หลายพันรายการตาม rubric แต่ human review ได้แค่ sample จึงต้องการ scalable automated method และยอมรับว่ามี judge/position bias ควรใช้ approach ใด?',
    choices:{A:'LLM-as-a-Judge',B:'BLEU only',C:'Human evaluation only',D:'Training accuracy'},
    answer:['A'],
    explanation:'ตอบ A — LLM-as-a-Judge ใช้ rubric ประเมิน output จำนวนมากได้ แต่ต้องระวัง judge/position bias. B เหมาะ n-gram translation-like comparison, C scale ไม่ตรง requirement, D ไม่ใช่ FM output evaluation ของ application.'
  });

  add({
    task:'3.4', type:'single',
    question:'A translation team wants an automatic metric that compares generated translations with reference translations using n-gram overlap. A summarization team, by contrast, focuses on overlap between generated summaries and reference summaries. The teams want to use the conventional metrics associated with these tasks. Which pairing is correct?',
    questionTh:'ทีม translation ต้องการ metric แบบ n-gram overlap กับ reference ส่วนทีม summarization ต้องการ overlap กับ reference summary ควรจับคู่ metric อย่างไร?',
    choices:{A:'Translation: BLEU; Summarization: ROUGE',B:'Translation: ROUGE; Summarization: BLEU',C:'Translation: Accuracy; Summarization: R-squared',D:'Translation: F1; Summarization: RMSE'},
    answer:['A'],
    explanation:'ตอบ A — BLEU ใช้บ่อยกับ translation และ ROUGE ใช้บ่อยกับ summarization. B สลับกัน; C/D เป็น metrics คนละประเภท.'
  });

  add({
    task:'3.4', type:'ordering',
    question:'A RAG evaluation team wants to investigate a quality complaint systematically. It first checks whether useful evidence was retrieved, then checks whether the generated answer is supported by that evidence, and finally looks at presentation quality such as readability. The goal is to separate retrieval failure from generation failure instead of treating all errors as one issue. Select and order the THREE evaluation checks from earliest to latest.',
    questionTh:'ทีม RAG evaluation ต้องการไล่ปัญหาเป็นลำดับ โดยดู retrieval ก่อน แล้วดูว่า answer ยึด evidence หรือไม่ และสุดท้ายดู readability จงเรียง 3 checks',
    choices:{A:'Assess fluency/readability of the final answer',B:'Assess retrieval relevance of the returned context',C:'Assess faithfulness/groundedness of the generated answer'},
    answer:['B','C','A'],
    explanation:'ลำดับเชิงวิเคราะห์คือ Retrieval relevance → Faithfulness/groundedness → Fluency. ต้องรู้ก่อนว่า evidence ที่ดึงมาถูกไหม แล้วจึงดูว่า generation ยึด evidence หรือไม่ ก่อนพิจารณาความลื่นไหลของภาษา.'
  });

  add({
    task:'3.4', type:'multiple',
    question:'A company pilots an AI support agent. Offline model scores look strong, but management wants to know whether the deployed application actually resolves user requests efficiently. The team can track whether the requested task finishes successfully, user satisfaction after the interaction, latency, and cost per interaction. Which TWO metrics MOST directly measure business/application success? (Select TWO.)',
    questionTh:'บริษัท pilot AI support agent แม้ offline model score ดี แต่ผู้บริหารอยากรู้ว่า app แก้ user request ได้จริงหรือไม่ มีข้อมูล task success, satisfaction, latency, cost ควรเลือก metric ใด 2 ตัวที่สะท้อน business/application success โดยตรง?',
    choices:{A:'Task completion rate',B:'User satisfaction',C:'Model parameter count',D:'Embedding vector dimension',E:'Maximum output tokens'},
    answer:['A','B'],
    explanation:'ตอบ A, B — task completion และ user satisfaction สะท้อน outcome ของ application ต่อผู้ใช้โดยตรง. C/D/E เป็น implementation/model properties ไม่ได้บอกว่าธุรกิจ/ผู้ใช้บรรลุเป้าหมายหรือไม่.'
  });

  add({
    task:'3.4', type:'multiple',
    question:'An evaluation team is deciding how to assess a customer-facing foundation model. Some criteria are subjective, such as tone and helpfulness, and the team wants nuanced judgments on a representative sample. For broader repeatable comparisons, it also wants standardized datasets that can be run consistently across candidate models. Which TWO evaluation approaches should the team combine? (Select TWO.)',
    questionTh:'ทีม evaluation ต้องวัด criteria เชิง subjective เช่น tone/helpfulness ด้วย nuanced judgment บน sample และต้องการ standardized datasets สำหรับเทียบ candidate models ซ้ำได้ ควรใช้ 2 approach ใดร่วมกัน?',
    choices:{A:'Human evaluation',B:'Benchmark datasets',C:'Only training loss',D:'Only infrastructure utilization',E:'Randomly increasing temperature'},
    answer:['A','B'],
    explanation:'ตอบ A, B — human evaluation เหมาะ nuance/subjective quality และ benchmark datasets เหมาะ repeatable standardized comparison. C/D ไม่ครอบคลุม output quality; E เป็น generation adjustment ไม่ใช่ evaluation method.'
  });

  add({
    task:'3.4', type:'single',
    question:'A research team compares two candidate foundation models. One produces answers that are semantically close to high-quality reference answers even when the wording differs substantially. The team wants a metric that captures contextual semantic similarity rather than relying mainly on exact token or n-gram overlap. Which metric is MOST appropriate?',
    questionTh:'ทีมวิจัยเทียบ FM สองตัวและต้องการวัด semantic similarity กับ reference แม้ wording ต่างกันมาก ไม่อยากพึ่ง exact token/n-gram overlap เป็นหลัก ควรใช้ metric ใด?',
    choices:{A:'BERTScore',B:'BLEU',C:'ROUGE-1 only',D:'Accuracy'},
    answer:['A'],
    explanation:'ตอบ A — BERTScore ใช้ contextual embeddings เพื่อวัด semantic similarity. BLEU/ROUGE เน้น overlap มากกว่า, Accuracy ไม่ใช่ metric หลักสำหรับ generated text semantics แบบนี้.'
  });
})();