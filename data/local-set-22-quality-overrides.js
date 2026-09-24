(() => {
  const bank = window.LOCAL_SET_21_22_BANK || [];
  const q = id => bank[id - 1];
  const override = (id, config) => {
    const item = q(id);
    if (!item) throw new Error(`Missing Set 22 bank item Q${id}`);
    if (config.choices) item.choices22 = config.choices;
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
      '✅ A — Structured tabular inputs + narrow labeled classification + explainability + low inference cost at scale favor traditional supervised ML.',
      '❌ B — A fine-tuned FM could classify, but it adds model complexity/cost without a requirement for broad generative behavior.',
      '❌ C — RAG helps ground answers in retrieved knowledge; it does not replace a narrow supervised classifier for tabular renewal prediction.',
      '❌ D — Few-shot prompting can steer an FM, but the task does not need open-ended generation and has stronger cost/explainability constraints.',
      '🧠 จำสั้น ๆ — Narrow + structured + labeled + explainable + cheap at scale = Traditional ML.'
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
      '✅ B — Attention computes how strongly parts of the context should influence one another when building representations.',
      '❌ A — Tokenization already happened when the text was converted into token IDs.',
      '❌ C — Embedding lookup maps token IDs to vectors, but it does not decide which context elements should influence each other more strongly.',
      '❌ D — Positional encoding represents token order/position; it is not the mechanism that weights relationships across the context.',
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
      '✅ A — The exact statutory formula is already known, so deterministic rules provide reproducible and auditable results.',
      '❌ B — Regression estimates an unknown numeric relationship from data; no estimation is needed when the legal formula already defines the answer.',
      '❌ C — A decision tree would learn patterns from examples instead of directly executing the authoritative formula.',
      '❌ D — An FM can restate or reason about the formula, but it adds nondeterminism where exact calculation is required.',
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
      '✅ A — Detecting visible defects in uploaded photos is a computer-vision task.',
      '✅ B — Sentiment analysis and information extraction from written complaints are NLP tasks.',
      '❌ C — Speech AI is relevant to audio/speech input, which the scenario does not require.',
      '❌ D — Forecasting predicts future values from time-oriented data, not image defects or written-text meaning.',
      '❌ E — Recommendation systems rank or suggest items/users/content rather than performing these two requested analyses.',
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
      '✅ A — Model-quality metrics show whether the classifier performs technically as intended.',
      '✅ B — Business/application outcomes show whether that technical quality actually creates user or business value.',
      '❌ C — Loss is useful during model development but does not by itself establish real-world customer benefit.',
      '❌ D — Infrastructure metrics describe operational efficiency, not whether the application outcome is useful.',
      '❌ E — Generic benchmark scores do not replace task-specific model quality plus business outcomes for this application.',
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
      '✅ A — A coordinator that delegates subtasks to specialized agents and merges results is an orchestrator-worker multi-agent pattern.',
      '✅ B — MCP provides a standardized connection layer for exposing tools/context instead of bespoke integration per tool.',
      '❌ C — A single-agent multi-tool pattern has one agent choosing tools; the scenario explicitly uses several specialized agents coordinated by another component.',
      '❌ D — Point-to-point integration is the custom integration approach the team wants to avoid.',
      '❌ E — RAG grounds generation with retrieved knowledge; it does not describe the multi-agent delegation or standard tool protocol.',
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
      '✅ A — Context engineering manages what information enters the context window and how it is selected, summarized, structured, and refreshed before each call.',
      '❌ B — Prompt engineering focuses mainly on instructions/examples in the prompt; the scenario also manages history and retrieved context as a whole.',
      '❌ C — RAG is one way to retrieve external evidence, but the scenario additionally summarizes stale history and structures the entire context window.',
      '❌ D — Fine-tuning changes model weights; it does not dynamically curate the per-request context window.',
      '🧠 จำสั้น ๆ — Prompt = เขียนคำสั่ง; RAG = ดึงความรู้; Context engineering = จัดของทั้งหมดที่จะยัดเข้า context.'
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
      '✅ A — Converse provides a consistent message-based interface across supported Bedrock models, which is exactly the portability requirement.',
      '❌ B — InvokeModel provides direct model invocation but can require model-specific request/response formats.',
      '❌ C — InvokeModelWithResponseStream adds streaming to direct invocation; it does not provide the same unified conversational message schema.',
      '❌ D — Prompt Management stores and versions reusable prompts; it is not the runtime API that standardizes multi-turn messages across models.',
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
      '✅ A — A routing option that can process requests in more Regions must be checked against where data is allowed to be processed.',
      '❌ B — Quality/cost matters for model choice, but it is not the deciding issue when the hard requirement is geographic processing boundaries.',
      '❌ C — Latency/context size is a model/runtime tradeoff, not the residency constraint described.',
      '❌ D — Prompt lifecycle and caching do not determine which geographic Regions may process inference traffic.',
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
      '✅ A — Amazon Bedrock does not use customer inference inputs/outputs to train shared base models for other customers.',
      '❌ B — Guardrails are safety controls; enabling them is not what determines whether prompts are used to train shared base models.',
      '❌ C — Bedrock protects ordinary inference content as well; model providers do not get customer prompts/completions simply because the call is normal inference.',
      '❌ D — Retention controls govern whether request/response data may be retained; shared base-model training is a separate data-use question.',
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
      '✅ A — Conversion rate measures whether the assistant helps turn interactions into purchases/actions.',
      '✅ B — ROI connects benefits from the assistant to the cost of operating it.',
      '✅ C — CLV/revenue impact measures downstream commercial value created by customers or sales.',
      '❌ D — ROUGE/BLEU are model-output evaluation metrics, not direct measures of business value.',
      '❌ E — Faithfulness/groundedness measures answer quality relative to evidence, not revenue or customer value directly.',
      '❌ F — Semantic similarity measures language/output similarity rather than a business outcome.',
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
      '✅ A — Lower temperature reduces sampling variability and makes repeated outputs more consistent.',
      '❌ B — Higher temperature increases variation/creativity, the opposite of the requirement.',
      '❌ C — Fewer output tokens limits response length; it does not directly control sampling randomness.',
      '❌ D — More output tokens allows longer responses but does not make wording more predictable.',
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
      '✅ A — Prompt injection attempts to insert instructions that override or redirect intended behavior.',
      '✅ B — Jailbreaking attempts to bypass safeguards or policy restrictions.',
      '✅ C — Prompt leakage/exposure attempts to reveal hidden/system prompt content.',
      '❌ D — Model inversion tries to reconstruct information about training examples from model behavior/output.',
      '❌ E — Model extraction tries to reproduce or steal model behavior/parameters via queries.',
      '❌ F — Data poisoning manipulates training data before or during model training.',
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
      '✅ A — Tenant ID is a metadata constraint, so filtering should restrict the candidate set before relevance ordering.',
      '❌ B — Reranking reorders already retrieved candidates by relevance; it does not enforce tenant isolation by itself.',
      '❌ C — Hybrid retrieval combines lexical and semantic matching but does not guarantee a tenant boundary without metadata filtering.',
      '❌ D — Query rewriting can improve retrieval quality but does not enforce which tenant documents are eligible.',
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
      '✅ A — The evidence was retrieved correctly, but the generated answer contradicts or invents beyond it; that is a faithfulness/groundedness problem.',
      '❌ B — Retrieval relevance asks whether retrieved passages match the question; the stem says the right policy sections were fetched.',
      '❌ C — Answer relevance asks whether the response addresses the user question; a response can be relevant yet still unfaithful to evidence.',
      '❌ D — Context recall concerns whether needed evidence was retrieved; the required policy sections are already present.',
      '🧠 จำสั้น ๆ — Retrieved right, generated wrong = Faithfulness.'
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
      '✅ A — Multimodal input directly requires support for the needed modalities.',
      '✅ B — Global multilingual use directly requires language coverage.',
      '✅ C — A low-latency requirement directly makes inference latency a selection criterion.',
      '✅ D — Controlled operating cost directly makes pricing/cost a criterion.',
      '❌ E — Context-window size can matter in other scenarios, but no long-context requirement is stated here.',
      '❌ F — Customization support can matter when weight updates are required, but this scenario does not state that need.',
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
      '✅ A — LLM-as-a-Judge uses a model to apply a rubric at scale, while human-reviewed examples can be used to validate/calibrate the evaluator.',
      '❌ B — Human evaluation is valuable but does not satisfy the stated need for a scalable automated rubric-based evaluator across many samples.',
      '❌ C — Overlap metrics are exactly what the scenario says are insufficient for open-ended quality.',
      '❌ D — Exact-match rules work for deterministic outputs, not nuanced open-ended responses with acceptable wording variation.',
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
      '✅ A — Bedrock Model Evaluation is designed to compare/evaluate foundation-model outputs with automatic metrics and optional human evaluation.',
      '❌ B — Clarify focuses on bias and explainability such as feature attribution/SHAP for ML workflows.',
      '❌ C — A2I routes individual ML predictions/content to human review workflows; it is not the managed FM comparison/evaluation capability asked for.',
      '❌ D — Ground Truth creates/manages labeled training datasets rather than comparing FM outputs before model selection.',
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
      '✅ A — Prompt Management supports reusable prompts and saved versions that an application can pin to for controlled releases.',
      '❌ B — Prompt Optimization rewrites/improves prompts; it is not the primary version-history and release-pinning mechanism.',
      '❌ C — Prompt Caching reduces repeated input processing latency/cost; it does not provide prompt version governance.',
      '❌ D — Intelligent Prompt Routing chooses among models based on routing criteria; it does not version prompts.',
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
      '✅ A — Fine-tuning can make behavior/style persistent, while RAG supplies frequently changing private facts and evidence/citations at runtime.',
      '❌ B — The responsibilities are reversed: frequently changing documents are better retrieved than repeatedly baked into weights.',
      '❌ C — Fine-tuning facts that change often creates staleness and removes the direct retrieval path needed for citations.',
      '❌ D — Prompting alone does not provide access to changing private documentation or grounded citations.',
      '🧠 จำสั้น ๆ — Behavior/style in weights; current private facts via RAG.'
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
      '✅ A — Task completion measures whether users actually finish the intended workflow.',
      '✅ B — User satisfaction measures whether the application experience is useful/acceptable in practice.',
      '✅ C — Cost per interaction is an application operating metric that matters for production viability.',
      '❌ D — Text-similarity metrics evaluate output quality on a benchmark, not end-to-end application success by themselves.',
      '❌ E — Groundedness is valuable model/application quality evidence, but alone it does not establish task success, satisfaction, or operational economics.',
      '❌ F — Training loss is a model-development metric and is not an application-level production outcome.',
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
      '✅ A — Clear disclosure of intended use, limitations, and what users should expect is primarily transparency.',
      '❌ B — Explainability focuses on understandable reasons for a specific prediction or decision.',
      '❌ C — Human oversight means a person can review/approve/intervene in important actions.',
      '❌ D — Recourse gives affected users a way to challenge or appeal an outcome.',
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
      '✅ A — Generating content that may copy or infringe protected third-party work is an intellectual-property legal risk.',
      '❌ B — Privacy/data-protection risk concerns personal or sensitive information, which is not the issue described.',
      '❌ C — Bias/discrimination risk concerns unequal treatment or outcomes across groups, not protected creative work.',
      '❌ D — Safety/harmful-use risk concerns dangerous or harmful behavior/content rather than ownership/licensing rights.',
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
      '✅ A — Right-sizing to the smaller model that already meets quality requirements avoids unnecessary compute and energy use.',
      '❌ B — Extra capacity without a measured requirement adds resource use without demonstrated value.',
      '❌ C — Batching can improve utilization in some workloads, but it does not remove the unnecessary model-size choice described in the stem.',
      '❌ D — Training a large model from scratch would consume substantially more resources and is unnecessary for the stated requirement.',
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
      '✅ A — A permissions boundary sets the maximum effective permissions for that IAM identity without granting permissions by itself.',
      '❌ B — An identity-based policy grants/denies permissions to the identity; it is not the identity-level maximum ceiling requested.',
      '❌ C — An SCP constrains permissions at organization/account scope rather than acting as the per-identity boundary described.',
      '❌ D — A role trust policy controls who can assume the role, not what actions the role may perform after assumption.',
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
      '✅ A — Sensitive information filters are designed to detect, block, or mask sensitive entities such as PII in prompts and responses.',
      '❌ B — Content filters classify harmful content categories; they are not the PII/entity-specific masking control.',
      '❌ C — Denied topics block contextual topics/themes configured by the application, not general PII entity detection.',
      '❌ D — Word filters block exact/custom words or phrases; they do not replace sensitive-entity detection and masking.',
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
      '✅ A — Model invocation logging captures model-invocation details and can deliver logs for governance/investigation according to configuration.',
      '❌ B — CloudTrail records API activity such as who called which API, but it is not the Bedrock feature for capturing invocation content/details such as prompts/responses.',
      '❌ C — Service metrics summarize operational behavior such as counts/latency/errors; they do not capture the interaction details requested.',
      '❌ D — Prompt Management stores/versions reusable prompts; it is not an invocation audit-log feature.',
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
      '✅ A — Privacy-enhancing techniques reduce unnecessary exposure of identifiable data, while hashes/versioning detect unauthorized modification and support integrity.',
      '❌ B — Confidentiality is adjacent to privacy, but the second control is detecting data changes rather than improving service availability.',
      '❌ C — Residency and retention govern where data is processed/stored and how long it is kept; hashes/versioning do not define those policies.',
      '❌ D — Explainability and fairness concern model decisions/outcomes rather than protecting and validating source data.',
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
      '✅ A — The Generative AI Security Scoping Matrix classifies GenAI use patterns/scopes so organizations can understand how security responsibilities and controls change across them.',
      '❌ B — NIST AI RMF is a broad framework for governing and managing AI risk, not a matrix organized around GenAI consumption/build scopes.',
      '❌ C — ISO/IEC 27001 is an information-security management system standard, not a GenAI use-case scoping model.',
      '❌ D — ISO/IEC 42001 is an AI management-system standard, not the AWS GenAI security scope classification described.',
      '🧠 จำสั้น ๆ — Consume/build pattern + security responsibility = GenAI Security Scoping Matrix.'
    ]
  });

  window.LOCAL_SET_22_QUALITY_AUDIT = {
    focus:'Close distractors and reduced elimination-by-unrelated-choice risk',
    revisedQuestions:[1,6,7,8,13,19,20,25,27,28,29,30,33,35,37,38,43,44,45,46,47,48,54,55,60,61,62,63,64]
  };
})();