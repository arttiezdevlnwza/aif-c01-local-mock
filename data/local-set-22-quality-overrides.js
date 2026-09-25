(() => {
  const bank = window.LOCAL_SET_21_22_BANK || [];
  const q = id => bank[id - 1];
  const override = (id, config) => {
    const item = q(id);
    if (!item) throw new Error(`Missing Set 22 bank item Q${id}`);
    if (config.choices) item.choices22 = config.choices;
    if (config.answer) item.answer22 = config.answer;
    if (config.matches) item.matches22 = config.matches;
    if (config.exp) item.exp22 = config.exp;
    if (config.question || config.questionTh) {
      const current = item.v?.[22];
      if (!current) throw new Error(`Missing Set 22 variant Q${id}`);
      item.v[22] = [config.question || current[0], config.questionTh || current[1]];
    }
  };

  // Set 22 quality pass:
  // Keep Set 21 untouched, but replace easy/unrelated distractors with closer alternatives.
  override(1, {
    choices:{
      A:'A traditional supervised ML model',
      B:'A fine-tuned foundation model for classification',
      C:'A retrieval-augmented foundation-model application',
      D:'A general-purpose foundation model with few-shot examples'
    },
    exp:[
      '✅ A — ข้อมูลเป็น structured/tabular, งานเป็น classification ที่มี label ชัดเจน, ต้องอธิบายเหตุผลได้ และต้องรันจำนวนมากด้วยต้นทุนต่ำ จึงเหมาะกับ traditional supervised ML.',
      '❌ B — Fine-tuned FM สามารถทำ classification ได้ แต่เพิ่มความซับซ้อนและต้นทุน ทั้งที่โจทย์ไม่ได้ต้องการพฤติกรรม generative แบบกว้าง.',
      '❌ C — RAG ใช้ดึงความรู้มา grounding คำตอบ แต่ไม่ได้แทน supervised classifier สำหรับการทำนายจากข้อมูลตารางแบบงานแคบนี้.',
      '❌ D — Few-shot prompting ช่วยชี้นำ FM ได้ แต่โจทย์ไม่ต้องการ open-ended generation และให้ความสำคัญกับ cost/explainability มากกว่า.',
      '🧠 จำสั้น ๆ — งานแคบ + structured + labeled + explainable + cheap at scale = Traditional ML.'
    ]
  });

  override(6, {
    choices:{
      A:'Tokenization',
      B:'Attention',
      C:'Embedding lookup',
      D:'Positional encoding'
    },
    exp:[
      '✅ B — Attention ใช้คำนวณว่าส่วนต่าง ๆ ของ context ควรมีอิทธิพลต่อกันมากแค่ไหนตอนสร้าง representation.',
      '❌ A — Tokenization เกิดไปแล้วตอนข้อความถูกแบ่งและแปลงเป็น token IDs.',
      '❌ C — Embedding lookup แปลง token IDs เป็น vectors แต่ไม่ได้ตัดสินว่าส่วนไหนของ context ควรมีน้ำหนักต่อกันมากกว่า.',
      '❌ D — Positional encoding บอกลำดับ/ตำแหน่งของ token แต่ไม่ได้เป็นกลไกที่ชั่งความสัมพันธ์ระหว่าง token.',
      '🧠 จำสั้น ๆ — Tokenization = แบ่ง; Embedding = แปลงเป็น vector; Position = บอกลำดับ; Attention = ชั่งความสัมพันธ์.'
    ]
  });

  override(7, {
    choices:{
      A:'Deterministic business rules',
      B:'Supervised regression',
      C:'A decision-tree model trained on historical payroll outcomes',
      D:'A foundation model prompted with the legal formula'
    },
    exp:[
      '✅ A — สูตรตามกฎหมายถูกกำหนดไว้อยู่แล้ว deterministic rules จึงให้ผลที่ทำซ้ำได้ตรงเดิมและ audit ได้ชัดเจน.',
      '❌ B — Regression ใช้เรียนรู้ความสัมพันธ์เชิงตัวเลขที่ยังไม่รู้จากข้อมูล แต่โจทย์นี้มีสูตรคำตอบตายตัวอยู่แล้ว.',
      '❌ C — Decision tree จะเรียน pattern จากตัวอย่างในอดีต แทนที่จะคำนวณตามสูตรกฎหมายโดยตรง.',
      '❌ D — FM อาจอธิบายหรือทำตามสูตรได้ แต่เพิ่มความไม่แน่นอนในงานที่ต้องการผลคำนวณ exact ทุกครั้ง.',
      '🧠 จำสั้น ๆ — สูตรตายตัว + ต้องได้ผลเดิมทุกครั้ง = Rules ไม่ต้องใช้ ML.'
    ]
  });

  override(8, {
    choices:{
      A:'Computer vision',
      B:'Natural language processing',
      C:'Speech AI',
      D:'Time-series forecasting',
      E:'Recommendation systems'
    },
    exp:[
      '✅ A — การตรวจหาความเสียหายที่มองเห็นจากรูปภาพเป็นงาน Computer Vision.',
      '✅ B — การวิเคราะห์ sentiment และดึงข้อมูลสำคัญจากข้อความร้องเรียนเป็นงาน NLP.',
      '❌ C — Speech AI เหมาะกับข้อมูลเสียง/คำพูด ซึ่ง scenario นี้ไม่ได้ต้องการ.',
      '❌ D — Time-series forecasting ใช้ทำนายค่าจากข้อมูลตามเวลา ไม่ใช่ตรวจภาพหรือเข้าใจข้อความ.',
      '❌ E — Recommendation systems ใช้จัดอันดับหรือแนะนำสิ่งที่เหมาะกับผู้ใช้ ไม่ใช่งานสองอย่างในโจทย์.',
      '🧠 จำสั้น ๆ — ภาพ = CV; ภาษา/ข้อความ = NLP.'
    ]
  });

  override(13, {
    choices:{
      A:'Relevant model-quality metrics such as precision/recall',
      B:'Business/application outcomes such as task success, satisfaction, or ROI',
      C:'Training and validation loss only',
      D:'Infrastructure utilization and endpoint throughput only',
      E:'Foundation-model benchmark scores only'
    },
    exp:[
      '✅ A — Model-quality metrics บอกว่า classifier ทำงานเชิงเทคนิคได้ดีแค่ไหน เช่น precision/recall.',
      '✅ B — Business/application outcomes บอกว่าคุณภาพทางเทคนิคนั้นสร้างประโยชน์ต่อผู้ใช้หรือธุรกิจจริงหรือไม่.',
      '❌ C — Training/validation loss มีประโยชน์ตอนพัฒนาโมเดล แต่ไม่ได้ยืนยันว่าลูกค้าได้รับประโยชน์จริง.',
      '❌ D — Infrastructure metrics บอกประสิทธิภาพการใช้ระบบ แต่ไม่ได้บอกว่า application outcome มีคุณค่าหรือไม่.',
      '❌ E — Benchmark score ทั่วไปของ FM ไม่สามารถแทน task-specific model quality และ business outcome ของ application นี้ได้.',
      '🧠 จำสั้น ๆ — Technical quality + Business outcome ต้องดูคู่กัน.'
    ]
  });

  override(19, {
    choices:{
      A:'Orchestrator-worker multi-agent pattern',
      B:'Model Context Protocol (MCP)',
      C:'Single-agent multi-tool pattern',
      D:'Custom point-to-point integration for every tool',
      E:'Retrieval-augmented generation (RAG)'
    },
    exp:[
      '✅ A — มี coordinator แจก subtasks ให้ specialized agents หลายตัวแล้วรวมผลกลับมา ตรงกับ orchestrator-worker multi-agent pattern.',
      '✅ B — MCP เป็นมาตรฐานกลางสำหรับเชื่อม tools/context แทนการทำ integration แบบเฉพาะตัวต่อ tool.',
      '❌ C — Single-agent multi-tool มี agent เดียวเลือกใช้หลาย tools แต่โจทย์ระบุชัดว่ามี specialized agents หลายตัวที่ถูก coordinator จัดงาน.',
      '❌ D — Point-to-point integration คือวิธี custom integration ต่อ tool ที่ทีมต้องการหลีกเลี่ยง.',
      '❌ E — RAG ใช้ grounding ด้วยข้อมูลที่ retrieve มา แต่ไม่ได้อธิบายการแบ่งงานหลาย agent หรือมาตรฐานเชื่อม tool.',
      '🧠 จำสั้น ๆ — แจกงานหลาย agent = Orchestrator-worker; มาตรฐานเชื่อม tools/context = MCP.'
    ]
  });

  override(20, {
    choices:{
      A:'Context engineering',
      B:'Prompt engineering',
      C:'Retrieval-augmented generation (RAG)',
      D:'Fine-tuning'
    },
    exp:[
      '✅ A — Context engineering คือการจัดการว่าข้อมูลอะไรจะเข้า context window รวมถึงการเลือก สรุป จัดโครง และ refresh ข้อมูลก่อนแต่ละ call.',
      '❌ B — Prompt engineering เน้นการเขียน instructions/examples ใน prompt เป็นหลัก แต่โจทย์นี้จัดการทั้ง history และ retrieved context ด้วย.',
      '❌ C — RAG เป็นวิธีดึง external evidence เข้ามา แต่โจทย์ยังมีการสรุป history เก่าและจัด context ทั้งก้อนด้วย.',
      '❌ D — Fine-tuning เปลี่ยน model weights ไม่ได้ dynamically curate context ที่ส่งเข้าแต่ละ request.',
      '🧠 จำสั้น ๆ — Prompt = เขียนคำสั่ง; RAG = ดึงความรู้; Context engineering = จัดของทั้งหมดที่จะเข้า context.'
    ]
  });

  override(25, {
    choices:{
      A:'Converse API',
      B:'InvokeModel API',
      C:'InvokeModelWithResponseStream API',
      D:'Prompt Management'
    },
    exp:[
      '✅ A — Converse API ให้ message-based interface ที่สม่ำเสมอกับ Bedrock models ที่รองรับ จึงตรงกับ requirement ที่ต้องสลับโมเดลโดยไม่เปลี่ยนโครง request หลัก.',
      '❌ B — InvokeModel ใช้ invoke โมเดลโดยตรง แต่ request/response format อาจแตกต่างตามแต่ละ model.',
      '❌ C — InvokeModelWithResponseStream เพิ่ม streaming ให้ direct invocation แต่ไม่ได้ให้ unified conversational message schema แบบ Converse.',
      '❌ D — Prompt Management ใช้เก็บและ version prompts ไม่ใช่ runtime API สำหรับทำ multi-turn messages แบบเดียวกันข้ามหลาย models.',
      '🧠 จำสั้น ๆ — หลาย Bedrock models + message interface เดียว = Converse.'
    ]
  });

  override(27, {
    choices:{
      A:'Regional coverage and residency/compliance constraints',
      B:'Model-quality versus inference-cost tradeoffs',
      C:'Latency versus maximum-context-window tradeoffs',
      D:'Prompt-versioning versus prompt-caching tradeoffs'
    },
    exp:[
      '✅ A — ถ้า routing สามารถส่ง request ไปประมวลผลหลาย Regions ต้องตรวจว่า data ได้รับอนุญาตให้ถูกประมวลผลใน Regions เหล่านั้นหรือไม่.',
      '❌ B — Quality/cost เป็น tradeoff สำคัญตอนเลือก model แต่ไม่ใช่ประเด็นตัดสินเมื่อโจทย์มีข้อจำกัดด้านพื้นที่ประมวลผลข้อมูล.',
      '❌ C — Latency/context size เป็น model/runtime tradeoff ไม่ใช่ข้อจำกัดด้าน residency ที่โจทย์ถาม.',
      '❌ D — Prompt versioning/caching ไม่ได้กำหนดว่า inference traffic สามารถไปประมวลผลใน Region ใดได้.',
      '🧠 จำสั้น ๆ — กระจาย Region ได้กว้างขึ้น ต้องเช็ก Data residency/compliance ก่อน.'
    ]
  });

  override(28, {
    choices:{
      A:'Customer prompts and completions are not used to train shared base models for other customers',
      B:'Inference prompts may train a shared base model unless Bedrock Guardrails are enabled',
      C:'Only fine-tuning data is isolated; ordinary inference prompts may be shared with model providers',
      D:'Zero-retention mode is required before inference prompts are excluded from shared base-model training'
    },
    exp:[
      '✅ A — Amazon Bedrock ไม่ได้นำ customer inference inputs/outputs ไปฝึก shared base models สำหรับลูกค้ารายอื่น.',
      '❌ B — Guardrails เป็น safety controls ไม่ใช่เงื่อนไขที่ทำให้ prompts ถูกหรือไม่ถูกนำไปฝึก shared base models.',
      '❌ C — Bedrock ปกป้อง ordinary inference content ด้วย ไม่ได้มีเฉพาะ fine-tuning data ที่ถูกแยกออก.',
      '❌ D — Retention controls เป็นเรื่องการเก็บ request/response data ส่วนการนำข้อมูลไปฝึก shared base model เป็นคนละประเด็น.',
      '🧠 จำสั้น ๆ — Bedrock inference content ไม่ได้กลายเป็น shared base-model training data.'
    ]
  });

  override(29, {
    choices:{
      A:'Conversion rate',
      B:'Return on investment (ROI)',
      C:'Customer lifetime value or revenue impact',
      D:'ROUGE or BLEU score',
      E:'Faithfulness / groundedness score',
      F:'BERTScore or semantic similarity'
    },
    exp:[
      '✅ A — Conversion rate วัดว่า assistant ช่วยเปลี่ยน interaction ให้กลายเป็นการซื้อหรือ action ที่ต้องการได้มากแค่ไหน.',
      '✅ B — ROI เชื่อมประโยชน์ที่ได้จาก assistant เข้ากับต้นทุนที่ใช้ดำเนินระบบ.',
      '✅ C — CLV/revenue impact วัดมูลค่าเชิงธุรกิจที่เกิดจากลูกค้าหรือยอดขายในระยะต่อมา.',
      '❌ D — ROUGE/BLEU เป็น metrics สำหรับประเมิน model output ไม่ใช่ตัววัด business value โดยตรง.',
      '❌ E — Faithfulness/groundedness วัดคุณภาพคำตอบเทียบกับ evidence ไม่ได้วัดรายได้หรือมูลค่าลูกค้าโดยตรง.',
      '❌ F — Semantic similarity วัดความคล้ายกันของภาษา/ความหมาย ไม่ใช่ business outcome.',
      '🧠 จำสั้น ๆ — Business value = conversion / money / customer value; model-quality metrics วัดคนละชั้น.'
    ]
  });

  override(30, {
    choices:{
      A:'Lower the temperature',
      B:'Raise the temperature',
      C:'Reduce the maximum output tokens',
      D:'Increase the maximum output tokens'
    },
    exp:[
      '✅ A — Lower temperature ลดความแปรผันจากการ sampling ทำให้เมื่อ input เหมือนเดิม output มีความสม่ำเสมอมากขึ้น.',
      '❌ B — Higher temperature เพิ่ม variation/creativity ซึ่งตรงข้ามกับ requirement ที่ต้องการ predictable output.',
      '❌ C — ลด maximum output tokens ทำให้คำตอบสั้นลง แต่ไม่ได้ควบคุม randomness โดยตรง.',
      '❌ D — เพิ่ม maximum output tokens ทำให้ตอบได้ยาวขึ้น แต่ไม่ได้ทำให้ wording คงที่ขึ้น.',
      '🧠 จำสั้น ๆ — Consistency ↑ = Temperature ↓.'
    ]
  });

  override(33, {
    choices:{
      A:'Prompt injection',
      B:'Jailbreaking',
      C:'Prompt leakage/exposure',
      D:'Model inversion',
      E:'Model extraction',
      F:'Data poisoning'
    },
    exp:[
      '✅ A — Prompt injection คือการแทรก instructions เพื่อ override หรือเบี่ยงพฤติกรรมที่ application ตั้งใจไว้.',
      '✅ B — Jailbreaking คือการพยายามหลบ safeguards หรือ policy restrictions.',
      '✅ C — Prompt leakage/exposure คือการพยายามเปิดเผย system prompt หรือ hidden prompt content.',
      '❌ D — Model inversion พยายาม reconstruct ข้อมูลเกี่ยวกับ training examples จาก model behavior/output.',
      '❌ E — Model extraction พยายามเลียนแบบหรือขโมย model behavior ผ่านการ query ซ้ำ ๆ.',
      '❌ F — Data poisoning คือการปนเปื้อน training data เพื่อบิดพฤติกรรมของ model.',
      '🧠 จำสั้น ๆ — Injection = แทรกคำสั่ง; Jailbreak = แหกข้อจำกัด; Leakage = ล้วง prompt ที่ซ่อน.'
    ]
  });

  override(35, {
    choices:{
      A:'Metadata filtering',
      B:'Reranking',
      C:'Hybrid lexical-semantic retrieval',
      D:'Query rewriting or decomposition'
    },
    exp:[
      '✅ A — Tenant ID เป็น metadata constraint จึงควร filter candidate documents ตาม tenant ก่อน แล้วค่อยจัดอันดับ relevance ภายหลัง.',
      '❌ B — Reranking ใช้จัดลำดับ candidates ที่ retrieve มาแล้วตาม relevance แต่ไม่ได้ enforce tenant isolation ด้วยตัวเอง.',
      '❌ C — Hybrid retrieval ผสม lexical กับ semantic search แต่ไม่ได้รับประกัน tenant boundary ถ้าไม่มี metadata filtering.',
      '❌ D — Query rewriting ช่วยปรับ query ให้ retrieve ได้ดีขึ้น แต่ไม่ได้กำหนดว่า document ของ tenant ไหนมีสิทธิ์เข้า candidate set.',
      '🧠 จำสั้น ๆ — ใครมีสิทธิ์เข้า candidate set = Filter; ใครควรขึ้นก่อน = Rerank.'
    ]
  });

  override(37, {
    choices:{
      A:'Faithfulness / groundedness',
      B:'Retrieval relevance',
      C:'Answer relevance',
      D:'Context recall'
    },
    exp:[
      '✅ A — โจทย์บอกว่า retrieve policy sections ถูกแล้ว แต่ generated answer กลับขัดแย้งหรือแต่งเกิน evidence จึงเป็นปัญหา Faithfulness/Groundedness.',
      '❌ B — Retrieval relevance ถามว่า passages ที่ retrieve มาตรงกับคำถามหรือไม่ ซึ่งโจทย์บอกแล้วว่าดึงส่วนที่ถูกมาได้.',
      '❌ C — Answer relevance วัดว่าคำตอบตอบตรงคำถามหรือไม่ คำตอบอาจ relevant แต่ยังไม่ faithful ต่อ evidence ก็ได้.',
      '❌ D — Context recall วัดว่าหลักฐานที่จำเป็นถูก retrieve มาครบหรือไม่ แต่โจทย์ระบุว่าหลักฐานที่ต้องการอยู่ใน context แล้ว.',
      '🧠 จำสั้น ๆ — Retrieve ถูก แต่ Generate มั่ว = Faithfulness.'
    ]
  });

  override(38, {
    choices:{
      A:'Supported modalities',
      B:'Multilingual capability',
      C:'Inference latency',
      D:'Cost',
      E:'Maximum context window',
      F:'Model customization / fine-tuning support'
    },
    exp:[
      '✅ A — Requirement ที่รับ multimodal input ทำให้ supported modalities เป็นเกณฑ์เลือก model โดยตรง.',
      '✅ B — การใช้งานหลายภาษาทำให้ multilingual capability เป็นเกณฑ์โดยตรง.',
      '✅ C — Requirement ด้าน low latency ทำให้ inference latency เป็นเกณฑ์เลือก model.',
      '✅ D — Requirement ด้านการควบคุมค่าใช้จ่ายทำให้ cost/pricing เป็นเกณฑ์โดยตรง.',
      '❌ E — Maximum context window อาจสำคัญในบางงาน แต่โจทย์ไม่ได้บอกว่าต้องรองรับ long context.',
      '❌ F — Customization/fine-tuning support อาจสำคัญเมื่อจำเป็นต้อง update weights แต่ scenario นี้ไม่ได้ระบุ requirement ดังกล่าว.',
      '🧠 จำสั้น ๆ — เลือก criteria จาก requirement ที่โจทย์พูดจริง ไม่ใช่ทุก feature ที่ model มี.'
    ]
  });

  override(43, {
    question:'A benchmark has many open-ended responses whose quality cannot be judged reliably by string overlap. The team wants a scalable rubric-based evaluator and will calibrate it against a human-reviewed subset. Which evaluation approach BEST fits?',
    questionTh:'benchmark มีคำตอบปลายเปิดจำนวนมากที่วัดคุณภาพด้วย string overlap ได้ไม่ดี ทีมต้องการ evaluator ที่ใช้ rubric และทำงานได้ในปริมาณมาก โดยจะ calibrate กับ subset ที่มนุษย์ review แล้ว ควรใช้แนวทางใด?',
    choices:{
      A:'LLM-as-a-Judge',
      B:'Human evaluation for every sample',
      C:'Reference-based overlap metric only',
      D:'Rule-based exact-match evaluation'
    },
    exp:[
      '✅ A — LLM-as-a-Judge ใช้ LLM อีกตัวประเมินคำตอบตาม rubric ได้ในปริมาณมาก และใช้ human-reviewed subset ช่วย validate/calibrate evaluator.',
      '❌ B — Human evaluation มีคุณค่า แต่ถ้าตรวจทุก sample จะไม่ตอบ requirement ที่ต้องการ evaluator แบบ scalable.',
      '❌ C — Reference-based overlap metrics คือสิ่งที่โจทย์บอกว่าไม่เพียงพอสำหรับคำตอบปลายเปิด.',
      '❌ D — Exact-match rules เหมาะกับ output ที่มีคำตอบตายตัว ไม่เหมาะกับคำตอบปลายเปิดที่ wording ต่างกันแต่ยังถูกได้.',
      '🧠 จำสั้น ๆ — Open-ended + rubric + scale = LLM-as-a-Judge; ต้อง validate กับ human subset.'
    ]
  });

  override(44, {
    choices:{
      A:'Amazon Bedrock Model Evaluation',
      B:'SageMaker Clarify',
      C:'Amazon Augmented AI (A2I)',
      D:'SageMaker Ground Truth'
    },
    exp:[
      '✅ A — Bedrock Model Evaluation ถูกออกแบบมาเพื่อ compare/evaluate FM outputs ด้วย automatic metrics และสามารถใช้ human evaluation ได้.',
      '❌ B — SageMaker Clarify เน้น bias และ explainability เช่น feature attribution/SHAP ใน ML workflows.',
      '❌ C — A2I ใช้ส่ง prediction/content บางรายการไปให้มนุษย์ review หลัง inference ไม่ใช่ capability สำหรับ compare/evaluate foundation models โดยตรง.',
      '❌ D — Ground Truth ใช้สร้างและจัดการ labeled training datasets ไม่ใช่เปรียบเทียบ FM outputs ก่อนเลือก model.',
      '🧠 จำสั้น ๆ — FM output evaluation = Bedrock Model Evaluation; Bias/SHAP = Clarify; Human prediction review = A2I; Labeling = Ground Truth.'
    ]
  });

  override(45, {
    choices:{
      A:'Prompt Management with versioned prompts',
      B:'Prompt Optimization',
      C:'Prompt Caching',
      D:'Intelligent Prompt Routing'
    },
    exp:[
      '✅ A — Prompt Management รองรับ reusable prompts และ saved versions ทำให้ application pin ไปยัง version ที่อนุมัติสำหรับ production release ได้.',
      '❌ B — Prompt Optimization ใช้ปรับ/เขียน prompt ให้ดีขึ้น ไม่ใช่กลไกหลักสำหรับ version history และ release pinning.',
      '❌ C — Prompt Caching ลดการประมวลผล input ซ้ำเพื่อลด latency/cost แต่ไม่ได้จัดการ prompt versions.',
      '❌ D — Intelligent Prompt Routing ใช้เลือก model ตาม routing criteria ไม่ได้ทำ prompt versioning.',
      '🧠 จำสั้น ๆ — Save/version prompt = Prompt Management; Rewrite = Optimization; Reuse tokens = Caching; Choose model = Routing.'
    ]
  });

  override(46, {
    choices:{
      A:'Fine-tune for behavior/style and use RAG for current private facts',
      B:'Use RAG for the persistent style and fine-tune again for every product-document change',
      C:'Fine-tune once for both style and frequently changing facts, with no retrieval',
      D:'Use prompt engineering only for both requirements and remove retrieval'
    },
    exp:[
      '✅ A — Fine-tuning ช่วยให้ behavior/style ติดอยู่กับ model ส่วน RAG ใช้ดึง private facts ที่เปลี่ยนบ่อยและนำ evidence/citations มาใช้ตอน runtime.',
      '❌ B — สลับหน้าที่กัน: เอกสารที่เปลี่ยนบ่อยเหมาะกับ retrieval มากกว่าการ fine-tune ใหม่ทุกครั้ง.',
      '❌ C — Fine-tune facts ที่เปลี่ยนบ่อยทำให้ข้อมูลใน weights ล้าสมัย และยังเสีย retrieval path ที่ต้องใช้สำหรับ citations.',
      '❌ D — Prompt engineering อย่างเดียวไม่ได้ทำให้ model เข้าถึง private documentation ที่เปลี่ยนตามเวลาและไม่ได้ให้ grounded citations.',
      '🧠 จำสั้น ๆ — Behavior/style อยู่ใน weights; current private facts ใช้ RAG.'
    ]
  });

  override(47, {
    choices:{
      A:'Task completion rate',
      B:'User satisfaction',
      C:'Cost per interaction',
      D:'ROUGE/BERTScore on benchmark responses',
      E:'Faithfulness/groundedness score only',
      F:'Training loss'
    },
    exp:[
      '✅ A — Task completion rate วัดว่าผู้ใช้ทำ workflow ที่ตั้งใจไว้สำเร็จจริงหรือไม่.',
      '✅ B — User satisfaction วัดว่าประสบการณ์ใช้งาน application มีประโยชน์และยอมรับได้หรือไม่.',
      '✅ C — Cost per interaction เป็น application operating metric ที่มีผลต่อความคุ้มค่าในการใช้งานจริง.',
      '❌ D — ROUGE/BERTScore วัด output quality บน benchmark ไม่ได้บอก end-to-end application success ด้วยตัวมันเอง.',
      '❌ E — Groundedness มีประโยชน์ต่อการวัดคุณภาพคำตอบ แต่เพียงตัวเดียวไม่บอก task success, satisfaction หรือ operating economics.',
      '❌ F — Training loss เป็น model-development metric ไม่ใช่ application-level production outcome.',
      '🧠 จำสั้น ๆ — App evaluation = งานสำเร็จไหม + ผู้ใช้โอเคไหม + ใช้เงินจริงเท่าไร.'
    ]
  });

  override(48, {
    choices:{
      A:'Transparency',
      B:'Explainability',
      C:'Human oversight',
      D:'Recourse'
    },
    exp:[
      '✅ A — การเปิดเผย intended use, limitations และสิ่งที่ผู้ใช้ควรคาดหวังอย่างชัดเจน เป็นเรื่องของ Transparency เป็นหลัก.',
      '❌ B — Explainability เน้นอธิบายเหตุผลของ prediction หรือ decision เฉพาะรายการ.',
      '❌ C — Human oversight คือการให้คน review/approve/intervene ก่อน action สำคัญ.',
      '❌ D — Recourse คือการให้ผู้ได้รับผลกระทบมีช่องทาง challenge หรือ appeal ผลลัพธ์.',
      '🧠 จำสั้น ๆ — System บอกว่าทำอะไร/จำกัดอะไร = Transparency; ทำไม prediction นี้ออกแบบนี้ = Explainability.'
    ]
  });

  override(54, {
    choices:{
      A:'Intellectual property infringement risk',
      B:'Privacy / data-protection risk',
      C:'Bias / discrimination legal risk',
      D:'Safety / harmful-use risk'
    },
    exp:[
      '✅ A — การสร้าง content ที่อาจคัดลอกหรือละเมิดผลงานที่ได้รับความคุ้มครองของบุคคลอื่น เป็นความเสี่ยงด้าน intellectual property.',
      '❌ B — Privacy/data-protection risk เกี่ยวกับข้อมูลส่วนบุคคลหรือข้อมูลอ่อนไหว ซึ่งไม่ใช่ประเด็นในโจทย์.',
      '❌ C — Bias/discrimination risk เกี่ยวกับการปฏิบัติหรือผลลัพธ์ที่ไม่เท่าเทียมระหว่างกลุ่ม ไม่ใช่สิทธิ์ในผลงาน.',
      '❌ D — Safety/harmful-use risk เกี่ยวกับพฤติกรรมหรือ content ที่อันตราย ไม่ใช่ ownership/licensing rights.',
      '🧠 จำสั้น ๆ — Copyright/ownership/licensing = IP risk.'
    ]
  });

  override(55, {
    choices:{
      A:'Use the smaller model that meets the accepted quality requirement',
      B:'Use the largest model to preserve maximum capability headroom even without measured quality gain',
      C:'Keep the larger model and rely on longer batching windows to offset resource use',
      D:'Retrain a large model from scratch so the team controls the full model lifecycle'
    },
    exp:[
      '✅ A — ถ้าโมเดลเล็กทำ quality requirement ได้แล้ว การเลือกขนาดให้พอดีช่วยลด compute และพลังงานที่ไม่จำเป็น.',
      '❌ B — การใช้โมเดลใหญ่ขึ้นโดยไม่มี measured benefit เพิ่ม resource use โดยไม่มีคุณค่าที่พิสูจน์ได้.',
      '❌ C — Batching อาจช่วย utilization ในบาง workload แต่ไม่ได้แก้ต้นเหตุว่ากำลังเลือก model ใหญ่เกิน requirement.',
      '❌ D — การ train โมเดลใหญ่จาก scratch ใช้ทรัพยากรมากกว่ามากและไม่จำเป็นสำหรับ requirement นี้.',
      '🧠 จำสั้น ๆ — Sustainability = ใช้ model/compute เท่าที่ requirement ต้องการ ไม่ใช่ใหญ่สุด.'
    ]
  });

  override(60, {
    choices:{
      A:'Permissions boundary',
      B:'Identity-based policy',
      C:'Service control policy (SCP)',
      D:'Role trust policy'
    },
    exp:[
      '✅ A — Permissions boundary กำหนด maximum effective permissions ของ IAM identity โดยไม่ได้ grant permissions ให้เอง.',
      '❌ B — Identity-based policy ใช้ grant/deny permissions ให้ identity แต่ไม่ใช่ identity-level ceiling ที่โจทย์ต้องการ.',
      '❌ C — SCP จำกัด permissions ในระดับ organization/account ไม่ใช่ per-identity boundary.',
      '❌ D — Role trust policy กำหนดว่าใครสามารถ assume role ได้ ไม่ได้กำหนดว่า role ทำ actions อะไรได้หลัง assume แล้ว.',
      '🧠 จำสั้น ๆ — Identity policy = Grant; Boundary = identity ceiling; SCP = org/account ceiling; Trust = who can assume.'
    ]
  });

  override(61, {
    choices:{
      A:'Sensitive information filters in Bedrock Guardrails',
      B:'Content filters in Bedrock Guardrails',
      C:'Denied topics in Bedrock Guardrails',
      D:'Word filters in Bedrock Guardrails'
    },
    exp:[
      '✅ A — Sensitive information filters ใช้ detect, block หรือ mask sensitive entities เช่น PII ใน prompts และ responses.',
      '❌ B — Content filters ใช้จัดการ harmful content categories ไม่ใช่ control เฉพาะสำหรับ PII/entity masking.',
      '❌ C — Denied topics ใช้ block หัวข้อหรือ theme ที่ application กำหนด ไม่ใช่การ detect PII entities ทั่วไป.',
      '❌ D — Word filters ใช้ block คำหรือวลีแบบ exact/custom ไม่ได้แทน sensitive-entity detection และ masking.',
      '🧠 จำสั้น ๆ — PII/entity = Sensitive information; harmful category = Content; theme = Denied topic; exact word = Word filter.'
    ]
  });

  override(62, {
    choices:{
      A:'Model invocation logging',
      B:'AWS CloudTrail event history for Bedrock API calls',
      C:'CloudWatch service metrics only',
      D:'Prompt Management'
    },
    exp:[
      '✅ A — Model invocation logging ใช้ capture รายละเอียดการ invoke model เพื่อส่งต่อไปเก็บสำหรับ governance/investigation ตาม configuration.',
      '❌ B — CloudTrail เก็บ API activity เช่นใครเรียก API อะไร เมื่อไร แต่ไม่ใช่ Bedrock feature สำหรับเก็บ interaction content/details เช่น prompts/responses.',
      '❌ C — CloudWatch service metrics สรุป operational metrics เช่นจำนวน call, latency หรือ errors ไม่ได้เก็บรายละเอียด interaction ที่โจทย์ต้องการ.',
      '❌ D — Prompt Management ใช้เก็บและ version reusable prompts ไม่ใช่ invocation audit-log feature.',
      '🧠 จำสั้น ๆ — API activity = CloudTrail; model interaction detail = Model invocation logging.'
    ]
  });

  override(63, {
    choices:{
      A:'Privacy protection and data integrity',
      B:'Confidentiality and availability',
      C:'Data residency and data retention',
      D:'Explainability and fairness'
    },
    exp:[
      '✅ A — Privacy-enhancing techniques ลดการเปิดเผย identifiable data ที่ไม่จำเป็น ส่วน hashes/versioning ช่วยตรวจ unauthorized modification และสนับสนุน data integrity.',
      '❌ B — Confidentiality ใกล้กับ privacy แต่ control ตัวที่สองในโจทย์เน้นตรวจการเปลี่ยนแปลงข้อมูล ไม่ใช่ service availability.',
      '❌ C — Residency/retention กำหนดว่าข้อมูลอยู่ที่ไหนและเก็บนานแค่ไหน ส่วน hashes/versioning ไม่ได้กำหนด policies เหล่านี้.',
      '❌ D — Explainability/fairness เกี่ยวกับการตัดสินใจและผลลัพธ์ของ model ไม่ใช่การปกป้องและตรวจความถูกต้องของ source data.',
      '🧠 จำสั้น ๆ — ลด exposure = Privacy; ตรวจว่าข้อมูลโดนแก้ไหม = Integrity.'
    ]
  });

  override(64, {
    question:'A security team is classifying GenAI use cases according to how much of the solution the organization consumes versus builds, because the security responsibilities and controls change across those usage patterns. Which framework BEST matches this purpose?',
    questionTh:'ทีม security กำลังจัดประเภท GenAI use cases ตามระดับที่องค์กรเป็นผู้ใช้ solution สำเร็จรูปหรือเป็นผู้สร้างเอง เพราะ security responsibilities และ controls จะต่างกันตามรูปแบบการใช้งาน framework ใดตรงกับจุดประสงค์นี้มากที่สุด?',
    choices:{
      A:'Generative AI Security Scoping Matrix',
      B:'NIST AI Risk Management Framework (AI RMF)',
      C:'ISO/IEC 27001',
      D:'ISO/IEC 42001'
    },
    exp:[
      '✅ A — Generative AI Security Scoping Matrix ใช้จัดกลุ่มรูปแบบการใช้งาน/การสร้าง GenAI เพื่อช่วยระบุว่า security responsibilities และ controls เปลี่ยนไปอย่างไรตาม scope.',
      '❌ B — NIST AI RMF เป็น framework กว้างสำหรับ govern/manage AI risk ไม่ใช่ matrix ที่แบ่งตาม GenAI consumption/build scope.',
      '❌ C — ISO/IEC 27001 เป็นมาตรฐานระบบบริหารความมั่นคงปลอดภัยสารสนเทศ (ISMS) ไม่ใช่ GenAI use-case scoping model.',
      '❌ D — ISO/IEC 42001 เป็นมาตรฐานระบบบริหาร AI ไม่ใช่ framework สำหรับแบ่ง GenAI security scope แบบที่โจทย์อธิบาย.',
      '🧠 จำสั้น ๆ — Consume/build pattern + security responsibility = GenAI Security Scoping Matrix.'
    ]
  });


  // Full Set 22 independence pass — remaining questions that still reused Set 21 choices.
  override(2, {
    question:'A team wants to tune several candidate models without contaminating the final unbiased estimate. Which practice BEST preserves the role of each data split?',
    questionTh:'ทีมต้องการปรับ candidate models หลายตัวโดยไม่ทำให้ผลประเมินสุดท้ายลำเอียง แนวทางใดรักษาหน้าที่ของแต่ละ data split ได้ถูกต้องที่สุด?',
    choices:{
      A:'Tune hyperparameters on the training set and report the same score as final',
      B:'Use validation for model selection and reserve test data for the final estimate',
      C:'Check the test set after every tuning change and choose the best result',
      D:'Merge validation and test data before tuning so more examples are available'
    },
    answer:['B'],
    exp:[
      '✅ B — Validation ใช้เปรียบเทียบ candidate/tune hyperparameters ส่วน Test ต้องเก็บไว้ใช้ประเมินครั้งสุดท้ายหลังตัดสินใจทั้งหมดแล้ว.',
      '❌ A — Training set ใช้เรียนรู้ model parameters; ใช้คะแนนจากชุดเดียวกันเป็น final estimate จะประเมิน generalization ได้ไม่ดี.',
      '❌ C — ถ้าดู Test ซ้ำระหว่าง tuning ก็เท่ากับนำ Test มาใช้ตัดสินใจ ทำให้ผล final ไม่ unbiased.',
      '❌ D — การรวม Validation กับ Test ก่อน tuning ทำให้สูญเสียชุดข้อมูลอิสระสำหรับ final evaluation.',
      '🧠 จำสั้น ๆ — Train = เรียน, Validation = เลือก/ปรับ, Test = สอบรอบสุดท้าย.'
    ]
  });

  override(3, {
    choices:{
      A:'MAE because each absolute error contributes linearly',
      B:'RMSE because squaring makes large errors influence the score more strongly',
      C:'R-squared because it directly penalizes the largest individual misses',
      D:'F1 score because it balances large and small regression errors'
    },
    answer:['B'],
    exp:[
      '✅ B — RMSE ยกกำลังสอง error ก่อนเฉลี่ย จึงทำให้ error ขนาดใหญ่มีผลต่อคะแนนมากเป็นพิเศษ.',
      '❌ A — MAE รวม absolute error แบบเส้นตรง จึงไม่ลงโทษ outlier แรงเท่า RMSE.',
      '❌ C — R-squared วัดสัดส่วนความแปรปรวนที่โมเดลอธิบายได้ ไม่ได้ถูกออกแบบมาเพื่อให้น้ำหนัก error ใหญ่เป็นพิเศษ.',
      '❌ D — F1 เป็น classification metric ไม่ใช่ regression metric.',
      '🧠 จำสั้น ๆ — พลาดใหญ่ต้องเจ็บกว่า = RMSE.'
    ]
  });

  override(4, {
    question:'A screening model outputs “negative,” but the confirmed ground truth is “positive.” Which description matches this confusion-matrix case?',
    questionTh:'โมเดลคัดกรองทำนายว่า “negative” แต่ ground truth ยืนยันว่าเป็น “positive” คำอธิบายใดตรงกับกรณีนี้ใน confusion matrix?',
    choices:{
      A:'Predicted positive and actually positive',
      B:'Predicted positive but actually negative',
      C:'Predicted negative and actually negative',
      D:'Predicted negative but actually positive'
    },
    answer:['D'],
    exp:[
      '✅ D — ทาย negative แต่ความจริง positive คือ False Negative.',
      '❌ A — ทาย positive และจริง positive คือ True Positive.',
      '❌ B — ทาย positive แต่จริง negative คือ False Positive.',
      '❌ C — ทาย negative และจริง negative คือ True Negative.',
      '🧠 จำสั้น ๆ — FN = ของจริง positive แต่โมเดลปล่อยหลุดเป็น negative.'
    ]
  });

  override(5, {
    question:'A reinforcement-learning system controls a delivery drone. Match each RL concept with its role in the interaction loop.',
    questionTh:'ระบบ reinforcement learning ควบคุมโดรนส่งของ ให้จับคู่แนวคิด RL แต่ละตัวกับหน้าที่ใน interaction loop.',
    choices:{
      A:'Agent',
      B:'Environment',
      C:'Reward',
      D:'Policy'
    },
    matches:{
      '1':'The learner/decision-maker that chooses what to do',
      '2':'The external world that changes and returns observations',
      '3':'A feedback signal indicating how desirable an outcome was',
      '4':'The strategy used to choose an action from the current situation'
    },
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ Agent → ตัวที่ตัดสินใจเลือก action.',
      '✅ Environment → โลกภายนอกที่ agent โต้ตอบและรับ observation กลับมา.',
      '✅ Reward → feedback ว่าผลลัพธ์ดีหรือแย่เพียงใด.',
      '✅ Policy → กลยุทธ์ที่ใช้เลือก action จากสถานการณ์ปัจจุบัน.',
      '🧠 จำสั้น ๆ — Agent ทำ; Environment ตอบกลับ; Reward ให้คะแนน; Policy คือวิธีเลือก.'
    ]
  });

  override(9, {
    choices:{
      A:'Versioned model/data artifacts and repeatable deployment pipelines',
      B:'Production monitoring for quality, drift, latency, and failures',
      C:'Controlled retraining and promotion based on measured evidence',
      D:'A one-time notebook that is manually rerun whenever someone remembers',
      E:'Replacing evaluation gates with direct production deployment',
      F:'Keeping training data and model versions untracked to move faster'
    },
    answer:['A','B','C'],
    exp:[
      '✅ A — MLOps ต้องการ versioning และ repeatable pipelines เพื่อให้ lifecycle ทำซ้ำและตรวจสอบย้อนหลังได้.',
      '✅ B — Production monitoring เป็นแกนหลักสำหรับดู quality, drift, latency และ failures หลัง deploy.',
      '✅ C — Retraining/redeployment ควรถูกควบคุมและอิงหลักฐาน ไม่ใช่ ad hoc.',
      '❌ D — Manual notebook แบบไม่มี process ลด repeatability และ traceability.',
      '❌ E — การข้าม evaluation gate ทำให้ production governance แย่ลง.',
      '❌ F — ไม่ track data/model versions ทำให้ reproduce และ audit ไม่ได้.',
      '🧠 จำสั้น ๆ — MLOps = version → pipeline → deploy → monitor → retrain อย่างควบคุม.'
    ]
  });

  override(10, {
    choices:{
      A:'A continuously provisioned real-time endpoint with fixed baseline capacity',
      B:'Serverless inference that scales capacity for intermittent short requests',
      C:'Asynchronous inference for long-running requests with deferred results',
      D:'Offline batch transform over a prepared dataset'
    },
    answer:['B'],
    exp:[
      '✅ B — Traffic ต่ำและไม่แน่นอน, request สั้น และไม่อยากดูแล instance fleet ตรงกับ Serverless Inference.',
      '❌ A — Provisioned real-time endpoint เหมาะเมื่อมี traffic ต่อเนื่องหรือมี latency requirement ที่ต้องเปิด capacity รอ.',
      '❌ C — Asynchronous inference เหมาะ request ที่ใหญ่/นานและรับผลภายหลัง.',
      '❌ D — Batch transform เหมาะการประมวลผล dataset แบบ offline ไม่ใช่ request เป็นครั้ง ๆ.',
      '🧠 จำสั้น ๆ — สั้น + นาน ๆ มาที + ไม่อยาก provision = Serverless.'
    ]
  });

  override(11, {
    choices:{
      A:'The production input distribution has shifted — data drift',
      B:'The relationship between the same inputs and target has changed — concept drift',
      C:'Training examples accidentally reveal the target — label leakage',
      D:'The model memorized training data and fails to generalize — overfitting'
    },
    answer:['A'],
    exp:[
      '✅ A — โจทย์บอกว่า distribution ของ input/features เปลี่ยน แต่ยังไม่มีหลักฐานว่า X→Y เปลี่ยน จึงเป็น Data drift.',
      '❌ B — Concept drift ต้องมีการเปลี่ยนความสัมพันธ์ระหว่าง input กับ target.',
      '❌ C — Label leakage คือมีข้อมูลที่เผย target อย่างไม่เหมาะสมใน training data.',
      '❌ D — Overfitting คือ train ดีแต่ generalize ไม่ดี ไม่ได้หมายถึง production input distribution เปลี่ยน.',
      '🧠 จำสั้น ๆ — X เปลี่ยน = Data drift; X เดิมแต่ความหมายต่อ Y เปลี่ยน = Concept drift.'
    ]
  });

  override(12, {
    choices:{
      A:'Release the approved model into production',
      B:'Validate, clean, and prepare the training data/features',
      C:'Observe live quality/drift and feed evidence into the next iteration',
      D:'Fit candidate models on the prepared training data',
      E:'Compare candidates against defined evaluation criteria before release'
    },
    answer:['B','D','E','A','C'],
    exp:[
      '✅ ลำดับคือ Prepare data → Train candidates → Evaluate → Deploy → Monitor.',
      '❌ Deploy ต้องเกิดหลัง Evaluate ไม่ใช่ก่อน.',
      '❌ Monitoring เป็นกิจกรรมหลัง production เพื่อดู quality/drift และใช้เป็น feedback รอบถัดไป.',
      '🧠 จำสั้น ๆ — Data → Train → Evaluate → Deploy → Monitor.'
    ]
  });

  override(14, {
    choices:{
      A:'Confidently stated factual errors or fabricated details',
      B:'Different outputs across repeated runs with the same input',
      C:'Difficulty fully explaining why internal model behavior produced an answer',
      D:'Ability to draft or transform new content from instructions',
      E:'Ability to summarize and converse in natural language',
      F:'Ability to adapt behavior from examples and prompt instructions'
    },
    answer:['A','B','C'],
    exp:[
      '✅ A — การสร้างข้อเท็จจริงผิดหรือข้อมูลที่แต่งขึ้นคือ hallucination ซึ่งเป็น limitation/risk.',
      '✅ B — Output ที่แปรผันแม้ input เดิมสะท้อน nondeterministic behavior.',
      '✅ C — การอธิบายกลไกภายในได้ไม่ครบเป็น limited interpretability.',
      '❌ D — การสร้าง/แปลง content ใหม่เป็น core capability ของ GenAI.',
      '❌ E — การ summarize/converse เป็น capability ไม่ใช่ limitation.',
      '❌ F — การปรับ behavior ผ่าน examples/prompt เป็น capability.',
      '🧠 จำสั้น ๆ — Error/variation/อธิบายยาก = limitation; Generate/converse/adapt = capability.'
    ]
  });

  override(15, {
    choices:{
      A:'A diffusion model that iteratively denoises toward an image',
      B:'A vision transformer used only to classify an existing image',
      C:'A multimodal embedding model that maps image/text into vectors',
      D:'A convolutional classifier trained to assign image labels'
    },
    answer:['A'],
    exp:[
      '✅ A — การเริ่มจาก noise แล้วค่อย ๆ denoise เพื่อสร้างภาพใหม่เป็นลักษณะของ diffusion model.',
      '❌ B — Vision classifier วิเคราะห์ภาพที่มีอยู่แล้ว ไม่ได้สร้างภาพใหม่จาก noise.',
      '❌ C — Embedding model สร้าง vector representation สำหรับ similarity/search ไม่ใช่ image generation.',
      '❌ D — CNN classifier ใช้จำแนกภาพ ไม่ใช่สร้างภาพใหม่.',
      '🧠 จำสั้น ๆ — Noise → ค่อย ๆ denoise → ภาพใหม่ = Diffusion.'
    ]
  });

  override(16, {
    choices:{
      A:'Validate the candidate solution against quality, safety, and business criteria',
      B:'Collect production feedback and use it to improve the next iteration',
      C:'Choose the base model, data strategy, and overall solution approach',
      D:'Release the approved solution for production use',
      E:'Apply the needed customization or adaptation approach'
    },
    answer:['C','E','A','D','B'],
    exp:[
      '✅ ลำดับเชิงแนวคิดคือ Choose approach → Customize/Adapt → Evaluate → Deploy → Feedback/Iterate.',
      '❌ Evaluate ต้องมาก่อน production release เพื่อไม่ promote solution ที่ยังไม่ผ่านเกณฑ์.',
      '❌ Feedback เป็นข้อมูลหลังใช้งานจริงเพื่อนำไป iterate รอบถัดไป.',
      '🧠 จำสั้น ๆ — Select → Adapt → Evaluate → Deploy → Improve.'
    ]
  });

  override(17, {
    question:'A customer-support agent uses several memory concepts. Match each memory type with the example that BEST fits it.',
    questionTh:'customer-support agent ใช้ memory หลายแบบ ให้จับคู่ memory type กับตัวอย่างที่ตรงที่สุด.',
    choices:{
      A:'Episodic memory',
      B:'Short-term / working memory',
      C:'Semantic memory',
      D:'Long-term memory'
    },
    matches:{
      '1':'Remembering the details of a specific refund incident that happened last month',
      '2':'Holding the current conversation state needed to answer the next message',
      '3':'Remembering a general fact such as the customer’s preferred language',
      '4':'Persisting useful information across sessions instead of losing it when one chat ends'
    },
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ Episodic → เหตุการณ์เฉพาะที่เคยเกิดขึ้น เช่น refund incident ครั้งหนึ่ง.',
      '✅ Short-term/working → context ที่ต้องใช้ใน interaction ปัจจุบัน.',
      '✅ Semantic → facts/concepts/preferences ที่เป็นความรู้ทั่วไปเกี่ยวกับผู้ใช้.',
      '✅ Long-term → การเก็บข้อมูลข้าม session ในระยะยาว.',
      '🧠 จำสั้น ๆ — ตอนนี้ = Working; fact = Semantic; เหตุการณ์ = Episodic; ข้าม session = Long-term.'
    ]
  });

  window.LOCAL_SET_22_QUALITY_AUDIT = {
    focus:'Close distractors and reduced elimination-by-unrelated-choice risk',
    revisedQuestions:[1,6,7,8,13,19,20,25,27,28,29,30,33,35,37,38,43,44,45,46,47,48,54,55,60,61,62,63,64]
  };
})();