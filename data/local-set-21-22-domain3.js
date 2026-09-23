(() => {
  const bank = window.LOCAL_SET_21_22_BANK = window.LOCAL_SET_21_22_BANK || [];
  const add = x => bank.push({ domain: 3, ...x });

  add({
    task:'3.1', type:'single', target:'weakness: temperature',
    v:{
      21:["A compliance assistant should produce nearly the same wording whenever it receives the same approved prompt. The team wants less randomness and more consistency without retraining the model. Which change is MOST appropriate?","compliance assistant ควรตอบใกล้เคียงเดิมเมื่อได้รับ approved prompt เดิม ทีมต้องการลด randomness และเพิ่ม consistency โดยไม่ retrain โมเดล ควรปรับอะไร?"],
      22:["A reporting application produces noticeably different phrasing across repeated runs with identical inputs. The business prefers predictable output over creativity. Which inference setting should the team adjust?","แอปรายงานให้ wording ต่างกันพอสมควรทั้งที่ input เหมือนเดิม ธุรกิจต้องการ predictable output มากกว่า creativity ควรปรับ inference setting ใด?"]
    },
    choices:{A:'Lower the temperature',B:'Raise the temperature',C:'Increase vector dimensions',D:'Switch to batch inference'},
    answer:['A'],
    exp:[
      '✅ A — Lower temperature ลด randomness ทำให้ output คงเส้นคงวาและคาดเดาง่ายขึ้น.',
      '❌ B — Higher temperature เพิ่มความหลากหลายและ randomness.',
      '❌ C — Vector dimensions ไม่ได้ควบคุม generation randomness.',
      '❌ D — Batch inference เปลี่ยนรูปแบบการประมวลผล ไม่ได้ทำให้ wording deterministic ขึ้น.',
      '🧠 จำสั้น ๆ — Temperature ต่ำ = consistency สูง; Temperature สูง = creativity/variation สูง.'
    ]
  });

  add({
    task:'3.2', type:'single', target:'undercovered: prompt-management-vs-optimization-caching',
    v:{
      21:["A team has many prompt templates with variables and needs immutable versions so a production release can be reproduced or rolled back. It is not asking the service to rewrite the prompt or cache repeated context. Which Bedrock capability BEST fits?","ทีมมี prompt templates หลายแบบพร้อม variables และต้องการ numbered/immutable versions เพื่อ reproduce หรือ rollback production release โดยไม่ได้ต้องการให้ service ช่วย rewrite prompt หรือ cache context ซ้ำ ควรใช้ Bedrock capability ใด?"],
      22:["Developers want a central place to store reusable prompt templates, compare variants, and pin production to a specific version. Which Amazon Bedrock feature is designed for this?","developer ต้องการที่กลางสำหรับเก็บ reusable prompt templates, เปรียบเทียบ variants และผูก production กับ version ที่ระบุ Bedrock feature ใดตรงที่สุด?"]
    },
    choices:{A:'Prompt Management',B:'Prompt Optimization',C:'Prompt Caching',D:'Knowledge Bases'},
    answer:['A'],
    exp:[
      '✅ A — Prompt Management ใช้เก็บ templates, variables, variants และ versions สำหรับ reuse/reproducibility.',
      '❌ B — Prompt Optimization เน้นช่วยปรับหรือ rewrite prompt ให้ได้ผลดีขึ้น.',
      '❌ C — Prompt Caching เน้น reuse prefix/context ซ้ำเพื่อลด latency/cost.',
      '❌ D — Knowledge Bases ใช้ RAG และ grounding จากข้อมูลภายนอก.',
      '🧠 จำสั้น ๆ — เก็บ/version prompt = Management; ช่วยเขียนให้ดี = Optimization; context ซ้ำ = Caching.'
    ]
  });

  add({
    task:'3.2', type:'single', target:'confidence: prompting-techniques',
    v:{
      21:["A model is asked to classify support tickets into four labels. The prompt includes three labeled examples that demonstrate the expected input-output format before the new ticket appears. Which prompting technique is being used?","โมเดลต้องจัด support ticket เป็น 4 labels โดย prompt ใส่ตัวอย่างที่มี label 3 ตัวอย่างเพื่อสาธิต input-output format ก่อนส่ง ticket ใหม่ เทคนิค prompting ใดกำลังถูกใช้?"],
      22:["A prompt teaches a model a desired writing style by showing several short examples before asking it to generate a new response. No model weights are updated. Which technique BEST describes this?","prompt สอนรูปแบบการเขียนโดยยกตัวอย่างหลายชุดก่อนให้สร้างคำตอบใหม่ และไม่ได้ update model weights เทคนิคใดตรงที่สุด?"]
    },
    choices:{A:'Few-shot prompting',B:'Zero-shot prompting',C:'Continued pre-training',D:'Model distillation'},
    answer:['A'],
    exp:[
      '✅ A — Few-shot prompting ใส่ตัวอย่างหลายตัวอย่างใน context เพื่อชี้รูปแบบที่ต้องการ.',
      '❌ B — Zero-shot ไม่มีตัวอย่าง.',
      '❌ C — Continued pre-training เปลี่ยน weights ด้วย corpus ขนาดใหญ่.',
      '❌ D — Distillation ถ่ายทอด behavior จาก teacher ไป student.',
      '🧠 จำสั้น ๆ — มี examples ใน prompt แต่ไม่ train weights = Few-shot.'
    ]
  });

  add({
    task:'3.2', type:'multiple', target:'undercovered: prompt-risks',
    v:{
      21:["A public chatbot accepts arbitrary user input. The security team is reviewing prompt-engineering risks that could cause the model to ignore instructions or reveal hidden information. Which THREE risks are MOST relevant? (Select THREE.)","public chatbot รับ user input อิสระ ทีม security ต้องการทบทวน prompt-engineering risks ที่อาจทำให้โมเดลละเลยคำสั่งหรือเปิดเผยข้อมูลที่ซ่อนอยู่ ข้อใด 3 อย่างเกี่ยวข้องที่สุด?"],
      22:["A team is threat-modeling an LLM application. Attackers may try to override higher-priority instructions, bypass safeguards, or extract hidden prompt content. Which THREE prompt-related risks should be considered? (Select THREE.)","ทีมกำลังทำ threat model สำหรับ LLM app ผู้โจมตีอาจพยายาม override คำสั่งระดับสูง หลบ safeguard หรือดึง hidden prompt content ข้อใด 3 อย่างเป็น prompt-related risks?"]
    },
    choices:{A:'Prompt injection',B:'Jailbreaking',C:'Prompt leakage/exposure',D:'RMSE',E:'Batch inference',F:'Data cataloging'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Prompt injection พยายามแทรกคำสั่งเพื่อเปลี่ยนพฤติกรรมหรือ override instructions.',
      '✅ B — Jailbreaking พยายามหลบข้อจำกัดหรือ safety policy ของโมเดล.',
      '✅ C — Prompt leakage/exposure คือการเปิดเผย system prompt หรือข้อมูลที่ไม่ควรถูกเปิดเผย.',
      '❌ D — RMSE เป็น regression metric.',
      '❌ E — Batch inference เป็น inference mode.',
      '❌ F — Data cataloging เป็น governance/data-management concept.',
      '🧠 จำสั้น ๆ — Injection = แทรกคำสั่ง; Jailbreak = หลบข้อจำกัด; Leakage = ดึงข้อมูล/คำสั่งที่ซ่อน.'
    ]
  });

  add({
    task:'3.1', type:'ordering', target:'weakness: rag-order',
    v:{
      21:["A team is building a retrieval-augmented generation pipeline. Order the ingestion and retrieval activities from preparing documents through attaching evidence to the model request.","ทีมกำลังสร้าง RAG pipeline จงเรียงกิจกรรมตั้งแต่เตรียมเอกสารจนถึงนำหลักฐานที่ค้นได้ไปแนบให้โมเดล"],
      22:["A knowledge assistant must prepare documents for vector search, then answer user questions using retrieved evidence. Put the main RAG steps in the correct conceptual order.","knowledge assistant ต้องเตรียมเอกสารสำหรับ vector search แล้วตอบคำถามจาก retrieved evidence จงเรียงขั้นตอนหลักของ RAG ให้ถูกต้อง"]
    },
    choices:{A:'Retrieve relevant chunks for a user query',B:'Create embeddings for the chunks',C:'Split documents into chunks',D:'Store/index the vectors',E:'Attach retrieved evidence to the model context'},
    answer:['C','B','D','A','E'],
    exp:[
      '✅ ลำดับที่ถูก — Chunk → Embed → Store/Index → Retrieve → Attach context.',
      '1) Chunk แบ่งเอกสารเป็น retrieval units.',
      '2) Embed แปลงแต่ละ chunk เป็น vector representation.',
      '3) Store/Index เก็บ vectors เพื่อค้นหาได้.',
      '4) Retrieve ค้น chunks ที่เกี่ยวข้องเมื่อมี query.',
      '5) Attach evidence เข้า context ก่อนให้ FM generate.',
      '🧠 จำสั้น ๆ — เตรียมก่อน: Chunk → Embed → Store; ใช้จริง: Retrieve → Attach → Generate.'
    ]
  });

  add({
    task:'3.1', type:'single', target:'stable-retest: metadata-filtering-vs-reranking',
    v:{
      21:["A RAG system retrieves documents for many business units. Before ranking by semantic relevance, it must exclude every document whose department metadata does not match the current user's allowed department. Which technique should be applied?","RAG system ค้นเอกสารจากหลาย business units ก่อนจัดอันดับ semantic relevance ต้องตัดเอกสารที่ department metadata ไม่ตรงกับสิทธิ์ของผู้ใช้ออกทั้งหมด ควรใช้เทคนิคใด?"],
      22:["A tenant-aware assistant must ensure retrieval considers only documents tagged with the current tenant ID. After that restriction, it may reorder candidates by relevance. What is the FIRST technique?","assistant แบบ multi-tenant ต้องให้ retrieval พิจารณาเฉพาะเอกสารที่ tag ด้วย tenant ID ปัจจุบัน แล้วค่อยเรียง candidates ตาม relevance ขั้นแรกควรใช้เทคนิคใด?"]
    },
    choices:{A:'Metadata filtering',B:'Reranking',C:'Fine-tuning',D:'Prompt caching'},
    answer:['A'],
    exp:[
      '✅ A — Metadata filtering จำกัด candidate set ตาม metadata condition ก่อนหรือระหว่าง retrieval.',
      '❌ B — Reranking จัดลำดับ candidates ที่ผ่านเข้ามาแล้ว ไม่ได้เป็น access/eligibility filter หลัก.',
      '❌ C — Fine-tuning เปลี่ยน model weights.',
      '❌ D — Prompt caching reuse context ที่ซ้ำ ไม่ได้กรองเอกสาร.',
      '🧠 จำสั้น ๆ — “ดึงอะไรได้บ้าง” = Filter; “ของที่ดึงมาแล้ว อันไหนควรอยู่บน” = Rerank.'
    ]
  });

  add({
    task:'3.1', type:'multiple', target:'undercovered: vector-store-chooser',
    v:{
      21:["A company compares vector-store options for different applications. It needs one solution for hybrid keyword+vector search and another for relational PostgreSQL data that should also support vector similarity. Which TWO choices BEST match? (Select TWO.)","บริษัทกำลังเทียบ vector-store options โดยต้องการ solution หนึ่งสำหรับ hybrid keyword+vector search และอีก solution สำหรับข้อมูล relational PostgreSQL ที่ต้องทำ vector similarity ได้ด้วย ควรเลือกอะไร 2 ข้อ?"],
      22:["Two teams need vector search. Team A wants search-engine capabilities with keyword and semantic retrieval. Team B already uses PostgreSQL and wants to add vector similarity without moving relational data to a different database family. Which TWO AWS options fit? (Select TWO.)","สองทีมต้องการ vector search ทีม A ต้องการทั้ง keyword และ semantic retrieval ส่วนทีม B ใช้ PostgreSQL อยู่แล้วและอยากเพิ่ม vector similarity โดยยังคง relational data เดิม ควรเลือก AWS options ใด 2 ข้อ?"]
    },
    choices:{A:'Amazon OpenSearch Service',B:'Amazon Aurora/RDS for PostgreSQL with pgvector',C:'Amazon ElastiCache only',D:'Amazon SQS',E:'Amazon DynamoDB Streams'},
    answer:['A','B'],
    exp:[
      '✅ A — OpenSearch เหมาะ search workloads และรองรับ vector/semantic รวมถึง hybrid patterns.',
      '✅ B — Aurora/RDS PostgreSQL + pgvector เหมาะเมื่อมี relational PostgreSQL และต้องเพิ่ม vector similarity.',
      '❌ C — ElastiCache เป็น cache ไม่ใช่ vector store หลักตาม requirement นี้.',
      '❌ D — SQS เป็น message queue.',
      '❌ E — DynamoDB Streams เป็น change data capture stream ไม่ใช่ vector-search engine.',
      '🧠 จำสั้น ๆ — Search/hybrid = OpenSearch; PostgreSQL + vector = pgvector.'
    ]
  });

  add({
    task:'3.4', type:'single', target:'confidence: rag-evaluation',
    v:{
      21:["A RAG application retrieves highly relevant source passages, but the final answer introduces claims that are not supported by those passages. Which evaluation dimension is MOST directly failing?","RAG app retrieve source passages ที่เกี่ยวข้องมาก แต่ final answer เพิ่ม claims ที่ไม่มีหลักฐานจาก passages เหล่านั้น evaluation dimension ใดกำลังมีปัญหาตรงที่สุด?"],
      22:["A chatbot fetches the right policy sections, yet the generated response contradicts or invents details beyond the retrieved evidence. Which metric or quality dimension should the team focus on?","chatbot ดึง policy sections ถูกต้อง แต่ generated response ขัดหรือแต่งรายละเอียดเกิน retrieved evidence ควรโฟกัส metric/quality dimension ใด?"]
    },
    choices:{A:'Faithfulness / groundedness',B:'Retrieval relevance only',C:'Inference throughput',D:'Training accuracy'},
    answer:['A'],
    exp:[
      '✅ A — Faithfulness/groundedness วัดว่า generated claims ยึดกับ context/evidence ที่ให้มาหรือไม่.',
      '❌ B — Retrieval relevance อาจดีอยู่แล้วตามโจทย์ เพราะ retrieved passages ถูกเรื่อง.',
      '❌ C — Throughput วัด performance ของระบบ ไม่ได้วัดความถูกต้องเชิง evidence.',
      '❌ D — Training accuracy ไม่ใช่ metric หลักของ RAG generation quality.',
      '🧠 จำสั้น ๆ — Docs ถูกเรื่องแต่คำตอบหลุด = Faithfulness.'
    ]
  });

  add({
    task:'3.1', type:'multiple', target:'confidence: fm-selection',
    v:{
      21:["A support application must accept text and screenshots, support Thai and English, respond within a strict latency target, and stay within a fixed monthly inference budget. Which FOUR model-selection criteria should receive the most weight? (Select FOUR.)","support app ต้องรับ text+screenshot รองรับไทย/อังกฤษ ตอบภายใน latency target และมีงบ inference ต่อเดือนจำกัด ควรให้น้ำหนัก model-selection criteria ใด 4 ข้อมากที่สุด?"],
      22:["A global assistant needs multimodal input, multilingual support, low latency, and controlled cost. Which FOUR foundation-model selection criteria map directly to those requirements? (Select FOUR.)","global assistant ต้องรองรับ multimodal, หลายภาษา, latency ต่ำ และควบคุม cost ควรใช้ FM selection criteria ใด 4 ข้อโดยตรง?"]
    },
    choices:{A:'Supported modalities',B:'Multilingual capability',C:'Inference latency',D:'Cost',E:'Popularity on social media',F:'Logo design'},
    answer:['A','B','C','D'],
    exp:[
      '✅ A — Modality ต้องตรงกับ text+image requirement.',
      '✅ B — Multilingual capability ต้องรองรับภาษาที่ใช้จริง.',
      '✅ C — Latency เป็น production requirement โดยตรง.',
      '✅ D — Cost/token และ inference cost ต้องอยู่ใน budget.',
      '❌ E — Popularity ไม่รับประกัน suitability.',
      '❌ F — Logo ไม่เกี่ยวกับ model selection.',
      '🧠 จำสั้น ๆ — เลือก model จาก workload requirements ไม่ใช่จากชื่อดังหรือขนาดใหญ่.'
    ]
  });

  add({
    task:'3.3', type:'matching', target:'confidence: customization-types',
    v:{
      21:["A team compares four ways to adapt foundation models. Match each description with the MOST appropriate technique.","ทีมกำลังเทียบวิธีปรับ foundation model 4 แบบ ให้จับคู่คำอธิบายกับ technique ที่เหมาะที่สุด"],
      22:["A governance review needs clear distinctions among instruction tuning, continued pre-training, distillation, and transfer learning. Match each technique to its defining pattern.","การ review ต้องแยก Instruction tuning, Continued pre-training, Distillation และ Transfer learning ให้ชัด จับคู่แต่ละ technique กับรูปแบบที่นิยามมัน"]
    },
    choices:{A:'Instruction tuning / supervised fine-tuning',B:'Continued pre-training',C:'Model distillation',D:'Transfer learning'},
    matches:{'1':'Use labeled instruction-response examples to change task behavior','2':'Continue learning from a large domain corpus, often unlabeled','3':'Transfer behavior from a larger teacher model to a smaller student model','4':'Reuse knowledge from a pretrained model for a related target task'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ Instruction tuning/SFT → ใช้ labeled instruction-response examples เพื่อปรับ behavior/task.',
      '✅ Continued pre-training → เรียนต่อจาก corpus domain ขนาดใหญ่เพื่อซึมซับภาษา/ความรู้ domain.',
      '✅ Distillation → teacher model ถ่ายทอด behavior ไป student model ที่เล็กกว่า.',
      '✅ Transfer learning → นำความรู้จาก pretrained model ไปใช้กับ related task.',
      '🧠 จำสั้น ๆ — Labeled pairs = SFT; unlabeled domain corpus = CPT; teacher→student = Distillation.'
    ]
  });

  add({
    task:'3.3', type:'multiple', target:'undercovered: fine-tune-data-rlhf',
    v:{
      21:["A team prepares data for fine-tuning a foundation model used in customer support. Which THREE practices are MOST important before starting the tuning job? (Select THREE.)","ทีมกำลังเตรียม data สำหรับ fine-tune foundation model ด้าน customer support ข้อใด 3 practices สำคัญที่สุดก่อนเริ่ม tuning job?"],
      22:["A company wants a high-quality supervised fine-tuning dataset. Which THREE actions MOST directly improve the dataset's suitability and governance? (Select THREE.)","บริษัทต้องการ supervised fine-tuning dataset คุณภาพสูง ข้อใด 3 actions ช่วยเรื่อง suitability และ governance ของ dataset โดยตรงที่สุด?"]
    },
    choices:{A:'Curate and clean examples',B:'Check representativeness and label quality',C:'Verify permission/governance for training data',D:'Increase temperature during data collection',E:'Mix test data into training to improve score',F:'Ignore licensing because the model is private'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Curated/clean examples ลด noise และ inconsistency.',
      '✅ B — Representativeness และ label quality ส่งผลต่อ behavior/fairness ของ customized model.',
      '✅ C — ต้องตรวจสิทธิ์ การใช้ข้อมูล และ governance ก่อนนำไป train.',
      '❌ D — Temperature เป็น inference control ไม่ใช่ data-quality practice.',
      '❌ E — เอา test data เข้า training ทำให้ evaluation leakage.',
      '❌ F — Licensing/permission ยังสำคัญแม้ใช้งานภายใน.',
      '🧠 จำสั้น ๆ — Fine-tune data = clean + representative + correctly labeled + governed.'
    ]
  });

  add({
    task:'3.3', type:'ordering', target:'confidence: customization-lifecycle',
    v:{
      21:["After selecting a base foundation model, a team must prepare approved examples, run customization, evaluate the customized model on held-out data, and only then promote it to production. Order the FOUR stages.","หลังเลือก base FM แล้ว ทีมต้องเตรียม examples ที่อนุมัติ, run customization, evaluate ด้วย held-out data แล้วค่อย promote production จงเรียง 4 ขั้นตอน"],
      22:["A controlled fine-tuning process must prevent production promotion before evaluation. Put the customization stages after base-model selection in the correct order.","กระบวนการ fine-tuning แบบควบคุมต้องห้าม promote production ก่อน evaluation จงเรียง stages หลังเลือก base model ให้ถูกต้อง"]
    },
    choices:{A:'Evaluate the customized model',B:'Prepare and curate training examples',C:'Deploy/promote the approved artifact',D:'Run fine-tuning/customization'},
    answer:['B','D','A','C'],
    exp:[
      '✅ ลำดับที่ถูก — Prepare data → Fine-tune/customize → Evaluate → Deploy/promote.',
      '1) เตรียมและ curate training examples.',
      '2) รัน customization job.',
      '3) Evaluate บน held-out data เพื่อดู quality/risk.',
      '4) Deploy/promote หลังผ่านเกณฑ์.',
      '🧠 จำสั้น ๆ — Prepare → Tune → Evaluate → Deploy.'
    ]
  });

  add({
    task:'3.4', type:'single', target:'undercovered: rouge-bleu-bertscore',
    v:{
      21:["A summarization team wants a reference-based metric that compares generated summaries with reference summaries by measuring overlap of important text units. Which metric is MOST commonly associated with this use case?","ทีม summarization ต้องการ reference-based metric ที่เทียบ generated summary กับ reference summary โดยวัด overlap ของข้อความสำคัญ metric ใดสัมพันธ์กับ use case นี้มากที่สุด?"],
      22:["A model generates summaries and the team wants a traditional overlap metric widely used for summarization rather than a semantic embedding metric. Which metric should it choose?","โมเดลสร้าง summary และทีมต้องการ traditional overlap metric ที่นิยมใช้กับ summarization ไม่ใช่ semantic embedding metric ควรเลือกอะไร?"]
    },
    choices:{A:'ROUGE',B:'BLEU',C:'BERTScore',D:'RMSE'},
    answer:['A'],
    exp:[
      '✅ A — ROUGE เป็น reference-based overlap metric ที่นิยมกับ summarization.',
      '❌ B — BLEU มักเชื่อมโยงกับ machine translation และ n-gram overlap.',
      '❌ C — BERTScore ใช้ contextual embeddings เพื่อวัด semantic similarity มากกว่า exact overlap.',
      '❌ D — RMSE เป็น regression metric.',
      '🧠 จำสั้น ๆ — Summary = ROUGE; Translation = BLEU; ความหมายใกล้แม้คำต่าง = BERTScore.'
    ]
  });

  add({
    task:'3.4', type:'single', target:'confidence: llm-as-a-judge',
    v:{
      21:["A company must score thousands of generated answers against a detailed qualitative rubric. Human reviewers can inspect only a small sample, so the team wants a scalable evaluator while acknowledging judge bias and position bias. Which approach BEST fits?","บริษัทต้องให้คะแนน generated answers หลายพันรายการตาม qualitative rubric แต่คนตรวจได้เพียง sample จึงต้องการ evaluator ที่ scale ได้พร้อมยอมรับความเสี่ยง judge bias/position bias ควรใช้ approach ใด?"],
      22:["A benchmark contains many open-ended responses that cannot be judged well by string overlap alone. The team wants another LLM to apply a rubric at scale, then validate the evaluator on a human-reviewed subset. What is this approach called?","benchmark มี open-ended responses จำนวนมากที่ string overlap ประเมินได้ไม่ดี ทีมต้องการใช้ LLM อีกตัวประเมินตาม rubric ที่ scale ได้ แล้ว validate ด้วย human-reviewed subset approach นี้เรียกว่าอะไร?"]
    },
    choices:{A:'LLM-as-a-Judge',B:'Accuracy only',C:'Data labeling',D:'Batch inference only'},
    answer:['A'],
    exp:[
      '✅ A — LLM-as-a-Judge ใช้ LLM evaluator ให้คะแนนตาม rubric ได้ในปริมาณมาก แต่ต้องระวัง bias ของ evaluator.',
      '❌ B — Accuracy ใช้กับคำตอบที่มี ground-truth แบบชัดเจนและไม่ครอบคลุม open-ended quality rubric.',
      '❌ C — Data labeling คือการสร้าง label ไม่ใช่วิธีประเมิน generated outputs หลัง model ทำงาน.',
      '❌ D — Batch inference เป็นวิธีรันงานจำนวนมาก ไม่ใช่ evaluation methodology.',
      '🧠 จำสั้น ๆ — Rubric + scale มาก + validate judge bias = LLM-as-a-Judge.'
    ]
  });

  add({
    task:'3.4', type:'single', target:'confidence: bedrock-evaluation-vs-clarify',
    v:{
      21:["A team wants a managed AWS workflow to compare foundation-model outputs using automatic or human evaluation. It is not specifically asking for SHAP feature attribution or tabular-model bias analysis. Which service capability BEST fits?","ทีมต้องการ managed AWS workflow เพื่อเปรียบเทียบ FM outputs ด้วย automatic หรือ human evaluation โดยไม่ได้ต้องการ SHAP feature attribution หรือ bias analysis ของ tabular model โดยเฉพาะ ควรใช้ capability ใด?"],
      22:["A product team needs to evaluate several Bedrock foundation models before choosing one, using quality criteria and optional human review. Which AWS capability is the direct match?","ทีม product ต้อง evaluate Bedrock foundation models หลายตัวก่อนเลือก โดยใช้ quality criteria และอาจมี human review ควรใช้ AWS capability ใดตรงที่สุด?"]
    },
    choices:{A:'Amazon Bedrock Model Evaluation',B:'SageMaker Clarify',C:'AWS Config',D:'Amazon Macie'},
    answer:['A'],
    exp:[
      '✅ A — Bedrock Model Evaluation ออกแบบมาสำหรับประเมิน foundation models และ outputs ด้วย evaluation workflows.',
      '❌ B — SageMaker Clarify เน้น bias analysis และ explainability/feature attribution.',
      '❌ C — AWS Config ตรวจ resource configuration/compliance.',
      '❌ D — Macie ค้นหา sensitive data ใน S3.',
      '🧠 จำสั้น ๆ — FM quality comparison = Bedrock Model Evaluation; Bias/SHAP = Clarify.'
    ]
  });

  add({
    task:'3.2', type:'single', target:'undercovered: prompt-versioning',
    v:{
      21:["A production prompt worked well last month, but a new revision performs worse. The team must reproduce exactly which prompt template was used in the previous release and roll back if necessary. Which practice is MOST important?","production prompt เดือนก่อนทำงานดี แต่ revision ใหม่แย่ลง ทีมต้อง reproduce ให้ได้ว่า release ก่อนใช้ prompt template ไหนและ rollback ได้ practice ใดสำคัญที่สุด?"],
      22:["A regulated application needs an audit trail of prompt changes and must pin each production release to an immutable prompt version. Which strategy BEST supports this?","แอปที่มีข้อกำกับต้องมี audit trail ของ prompt changes และผูกแต่ละ production release กับ immutable prompt version strategy ใดช่วยได้ตรงที่สุด?"]
    },
    choices:{A:'Prompt versioning and management',B:'Increasing temperature',C:'Deleting old prompts',D:'Changing the vector dimension'},
    answer:['A'],
    exp:[
      '✅ A — Versioning/management ทำให้ trace, reproduce และ rollback prompt ที่ใช้จริงได้.',
      '❌ B — Temperature ไม่ได้แก้ traceability ของ prompt.',
      '❌ C — ลบ old prompts ทำให้ audit/reproduction แย่ลง.',
      '❌ D — Vector dimension ไม่เกี่ยวกับ prompt release management.',
      '🧠 จำสั้น ๆ — Prompt + version + rollback/reproduce = Prompt Management.'
    ]
  });

  add({
    task:'3.1', type:'single', target:'undercovered: rag-plus-finetune',
    v:{
      21:["A legal assistant must always write in a strict internal format, but it also needs current private policies that change weekly and must cite them. Which design BEST combines the two needs?","legal assistant ต้องเขียนตาม internal format แบบคงที่ และต้องใช้ private policies ล่าสุดที่เปลี่ยนทุกสัปดาห์พร้อม citations ควรออกแบบอย่างไรให้ตอบสอง requirement นี้พร้อมกัน?"],
      22:["A support model needs a persistent brand response style plus access to frequently changing product documentation with citations. Which combination is MOST appropriate?","support model ต้องมี brand response style แบบถาวร และเข้าถึง product documentation ที่เปลี่ยนบ่อยพร้อม citations combination ใดเหมาะที่สุด?"]
    },
    choices:{A:'Fine-tune for behavior/style and use RAG for current private facts',B:'Fine-tune on every document update and remove retrieval',C:'Use only high temperature',D:'Use only batch inference'},
    answer:['A'],
    exp:[
      '✅ A — Fine-tuning เหมาะปรับ behavior/style ที่ต้องการความสม่ำเสมอ ส่วน RAG เหมาะ facts ปัจจุบัน/private และ citations.',
      '❌ B — Fine-tune ทุกครั้งที่เอกสารเปลี่ยนมีต้นทุนสูงและไม่เหมาะกับ knowledge ที่เปลี่ยนบ่อย.',
      '❌ C — Temperature ไม่เพิ่ม current/private knowledge.',
      '❌ D — Batch inference ไม่ได้แก้ style หรือ grounding.',
      '🧠 จำสั้น ๆ — Behavior คงที่ = Fine-tune; Facts เปลี่ยนบ่อย = RAG; ใช้ร่วมกันได้.'
    ]
  });

  add({
    task:'3.4', type:'multiple', target:'confidence: application-evaluation',
    v:{
      21:["A customer-service FM application is ready for pilot. The team wants evaluation tied to the real workflow rather than only offline model benchmarks. Which THREE measures are MOST useful? (Select THREE.)","customer-service FM app พร้อม pilot ทีมต้องการ evaluation ที่ผูกกับ workflow จริง ไม่ใช่ดู offline benchmark อย่างเดียว ข้อใด 3 measures มีประโยชน์ที่สุด?"],
      22:["A company has strong benchmark scores for an FM assistant but needs evidence that the application works in practice. Which THREE application-level measures should it track? (Select THREE.)","บริษัทมี benchmark scores ของ FM assistant ที่ดี แต่ต้องการหลักฐานว่า application ใช้งานจริงได้ดี ข้อใด 3 application-level measures ควรติดตาม?"]
    },
    choices:{A:'Task completion rate',B:'User satisfaction',C:'Cost per interaction',D:'Number of hidden layers only',E:'Model release date',F:'Color of the UI'},
    answer:['A','B','C'],
    exp:[
      '✅ A — Task completion rate บอกว่าผู้ใช้ทำเป้าหมายสำเร็จจริงหรือไม่.',
      '✅ B — User satisfaction สะท้อนประสบการณ์และ usefulness.',
      '✅ C — Cost per interaction เชื่อม application quality กับ economics.',
      '❌ D — Hidden layers ไม่ใช่ application outcome.',
      '❌ E — Release date ไม่ใช่ performance metric.',
      '❌ F — UI color ไม่ใช่ metric ของ FM effectiveness.',
      '🧠 จำสั้น ๆ — Evaluate app จาก outcome ของงานและผู้ใช้ ไม่ใช่ benchmark อย่างเดียว.'
    ]
  });
})();