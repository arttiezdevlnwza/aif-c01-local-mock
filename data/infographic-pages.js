window.AIF_INFOGRAPHIC_PAGES = [
  {page:1,title:'GenAI Platform Families',tags:['Bedrock','AgentCore','Quick','Q / Dev'],sections:[
    {title:'Amazon Bedrock',items:['Knowledge Bases = RAG/grounding','Guardrails = input/output safety','Prompt Management / Optimization / Caching','Flows / Model Evaluation / Model Customization','On-Demand vs Provisioned Throughput','Converse API = unified model conversation API','Agents Classic = older orchestration for existing customers']},
    {title:'Amazon Bedrock AgentCore',items:['Runtime = run agent','Gateway = tools/APIs','Identity = credentials/authentication','Memory = cross-session memory','Policy = allow/deny actions','Observability = traces/metrics/debug','Evaluations = agent quality','Registry = manage agent resources','Browser / Code Interpreter / Runtime Harness']},
    {title:'Amazon Quick',items:['Research = research + citations','Flows = short repetitive workflows','Automate = enterprise process automation','Quick Sight = BI dashboards','Index = company knowledge','Apps = business apps']},
    {title:'Q / Dev Tools',items:['Q Developer = coding + AWS assistant','Kiro = spec-driven development','Strands Agents = agent SDK','Q Business = enterprise knowledge assistant']}
  ]},
  {page:2,title:'SageMaker, Inference & Metrics',tags:['SageMaker','Inference','Metrics'],sections:[
    {title:'SageMaker Family',items:['SageMaker AI = custom ML lifecycle','JumpStart = model hub','Canvas = no-code ML','Data Wrangler = data prep','Ground Truth = labeling','A2I = human review after inference','Clarify = bias + explainability','Model Monitor = drift/quality after deploy','Model Registry = model versions + approval','Feature Store = reusable features']},
    {title:'Inference Modes',items:['Real-Time = low-latency interactive','Serverless = uneven traffic','Async = one large/long request','Batch Transform = offline dataset']},
    {title:'Metrics',items:['Precision = predicted positive, how many true','Recall = actual positive, how many found','F1 = balance Precision + Recall','MAE = average absolute error','RMSE = penalize large misses','R² = explained variance']}
  ]},
  {page:3,title:'Security, Governance & Compliance',tags:['SOC','IAM','Governance'],sections:[
    {title:'Security / Governance Services',items:['Artifact = AWS compliance reports','Audit Manager = audit evidence','Config = resource config/compliance','CloudTrail = who did what API when','Trusted Advisor = recommendations','Macie = sensitive data in S3','Inspector = vulnerabilities','KMS = encryption keys','PrivateLink = private service path']},
    {title:'IAM Family',items:['Identity policy = grant to identity','Resource policy = resource grants access','Permissions Boundary = ceiling of identity','SCP = org/account ceiling','Role = assumable identity','Trust policy = who can assume','Explicit Deny wins']},
    {title:'SOC / ISO / Frameworks',items:['SOC 1 = financial reporting controls','SOC 2 = detailed trust-services report','SOC 3 = public/general summary','ISO 27001 = ISMS','ISO 42001 = AI management system','NIST AI RMF = Govern/Map/Measure/Manage','EU AI Act = risk-based law','AWS CAF-AI = enterprise AI adoption guidance']},
    {title:'Data Governance',items:['Owner = accountability','Steward = day-to-day governance','Lineage = source → transformations → artifact','Catalog = searchable metadata','Residency = where data stays','Retention = how long','Sovereignty = which jurisdiction/law']}
  ]},
  {page:4,title:'RAG, Prompting & Responsible AI',tags:['RAG','Prompting','Responsible AI'],sections:[
    {title:'RAG Family',items:['Chunking = split documents','Embeddings = meaning → vector','Vector Store / Index = store/search vectors','Metadata Filtering = restrict eligible docs','Reranking = reorder retrieved candidates','Retrieval Relevance = docs on-topic?','Faithfulness = answer supported by docs?']},
    {title:'Prompting vs Customization',items:['Zero-shot = no examples','Few-shot = examples in prompt','Template = reusable prompt structure','Negative prompting = what not to generate','RAG = external knowledge at inference','SFT = labeled instruction-response','CPT = large domain corpus','Distillation = teacher → student','Transfer learning = reuse learned knowledge']},
    {title:'Responsible AI',items:['Fairness','Transparency','Explainability','Interpretability','Privacy & Security','Robustness','Sustainability','Human Oversight','Recourse']}
  ]},
  {page:5,title:'AI Services, Model Types & Evaluation',tags:['AI Services','Model Types','Evaluation'],sections:[
    {title:'AWS AI Services',items:['Comprehend = NLP','Transcribe = speech → text','Polly = text → speech','Translate = translation','Textract = document text/forms/tables','Rekognition = image/video','Kendra = enterprise search','Personalize = recommendations','Lex = conversational bot']},
    {title:'Learning & Model Types',items:['Classification = predict class','Regression = continuous value','Clustering = groups without labels','Self-supervised = targets from raw data','RL = state/action/reward','LLM = language generation','Embedding = semantic vectors','Multimodal = multiple modalities','Diffusion = noise → generated sample']},
    {title:'Evaluation Metrics',items:['BLEU = translation overlap','ROUGE = summarization overlap','BERTScore = semantic similarity','MMLU = broad knowledge benchmark','LLM-as-a-Judge = rubric evaluator','Retrieval Relevance','Faithfulness / Groundedness','Business/Application metrics']}
  ]},
  {page:6,title:'Lifecycles, Ordering & Core Flows',tags:['Ordering','Lifecycle','Flow'],sections:[
    {title:'ML Lifecycle',items:['Define Objective → Collect/Prepare Data → Train → Validate/Evaluate → Deploy → Monitor → Retrain/Improve','Train = learn parameters','Validation = tune/select','Test = final unbiased evaluation','Overfitting: train good, validation/test bad','Underfitting: train + validation bad']},
    {title:'FM Lifecycle',items:['Data Selection → Model Selection → Pre-training → CPT/Domain Adaptation → SFT/Instruction Tuning → Alignment/RLHF → Evaluate → Deploy → Inference → Feedback/Monitor']},
    {title:'Transformer / Text Flow',items:['Text → Tokenization → Token IDs → Embeddings → Attention → Output','Context Window = max context considered','Max Output Tokens = output length limit']},
    {title:'Ordering Clues',items:['Async = one large/long request, result later','Batch = offline dataset','RAG ingestion: Chunk → Embed → Index','Prompting ≠ changing weights']}
  ]},
  {page:7,title:'Agent Loops, Memory & MCP',tags:['Agent','Memory','MCP'],sections:[
    {title:'Agent Loop',items:['Goal/State → Reason/Plan → Select Tool/Action → Execute → Observe → Re-plan or Finish','ReAct = reason/act/observe loop','Plan-and-Execute = plan first','Static = fixed path','Dynamic/Agentic = path changes with context/results']},
    {title:'Loop Controls',items:['Max iterations','Timeout','Retry','Guardrails','Termination conditions']},
    {title:'Memory of Agents',items:['Short-term / Working = current session','Long-term = across sessions','Semantic = facts/knowledge/preferences','Episodic = events/experiences/results','Techniques: summarization, compaction, retrieval, eviction/forgetting','Context window ≠ memory']},
    {title:'MCP',items:['Host = AI app/container','Client = component connecting to one server','Server = exposes capabilities','Resource = readable context/data','Tool = callable action/function','Prompt = reusable prompt template']},
    {title:'Multi-agent Patterns',items:['Orchestrator-Worker','Sequential','Collaborative / Peer-to-peer','Hierarchical','One agent with many tools ≠ multi-agent']}
  ]},
  {page:8,title:'Context, Tokens & Similarity',tags:['Context','Tokens','Similarity'],sections:[
    {title:'Prompt vs Context Engineering',items:['Prompt Engineering = design instruction text','Context Engineering = decide what information the model sees now and in what order','Large context ≠ good context']},
    {title:'Sources of Context',items:['System Instructions','Current Query','History / Memory','RAG','Tool Definitions / Results','Retrieve relevant → summarize/compact → structure/order → filter/prune']},
    {title:'Token & FM Concepts',items:['Token / Tokenization','Embedding','Attention','Context Window','Max Output Tokens','Prompt Caching','Token Pricing']},
    {title:'Vector Similarity',items:['Semantic similarity','Cosine similarity = vector direction/angle','Dot product = similarity score','Practitioner level: know what they measure, not the formula']}
  ]},
  {page:9,title:'Prompting, Parameters & Customization',tags:['Prompt','Parameters','Customization'],sections:[
    {title:'Prompting Basics',items:['Zero-shot','Single-shot','Few-shot','Chain-of-thought','Negative prompting','Template','Prompt chaining','Prompt tuning']},
    {title:'Inference Parameters',items:['Temperature','Top-K','Top-P','Max output tokens','Stop sequences','Top-K = fixed number of candidates','Top-P = cumulative probability mass']},
    {title:'Prompt vs Context vs Tuning',items:['Prompt engineering = adjust instructions','Context engineering = control current information','Prompt tuning = train small prompt-related parameters']},
    {title:'Customization Ladder',items:['Prompt/In-context → RAG → SFT/Fine-tune → CPT → Pre-training','Typical effort: Pre-training > CPT > SFT > RAG > Prompt engineering']},
    {title:'RAG vs Fine-tune',items:['RAG = current/private/changing facts + citations','Fine-tune = stable style/format/behavior/task mapping','Can be combined']},
    {title:'Management vs Optimization vs Caching',items:['Management = version/rollback/reuse','Optimization = improve prompt','Caching = repeated long prefix/context']}
  ]},
  {page:10,title:'Responsible AI Deep Dive',tags:['Bias','Fairness','Guardrails'],sections:[
    {title:'Responsible AI Principles',items:['Fairness','Inclusivity','Explainability/Transparency','Privacy & Security','Safety','Controllability','Veracity/Robustness','Governance','Sustainability']},
    {title:'Responsible AI Lifecycle',items:['Define intended use/users → Representative data → Evaluate groups/risks → Document limits → Controls + Human oversight → Monitor']},
    {title:'Bias Types',items:['Sampling/Selection','Measurement/Label','Historical','Proxy','Automation bias','Class/Subgroup imbalance']},
    {title:'Explainability & Transparency',items:['Intrinsic interpretability','Post-hoc explainability','Black box','Model Card = our model','AI Service Card = AWS-managed AI service documentation']},
    {title:'Fairness Metrics',items:['DPL = before training / labels in dataset','DPPL = after training / predictions','Recall Difference','Specificity Difference','Accuracy Difference','Treatment Equality','Disparate Impact']},
    {title:'Bedrock Guardrails',items:['Content filters','Denied topics','Word/Phrase filters','Sensitive information','Prompt attack','Contextual grounding','Automated Reasoning','ApplyGuardrail API','Grounding = evidence/context; Automated Reasoning = formal rules/logic','Guardrails ≠ Macie']}
  ]},
  {page:11,title:'AI Security & Protection',tags:['AI Threats','IAM','Encryption'],sections:[
    {title:'AI Threats',items:['Prompt injection','Prompt leakage','Jailbreak','Data poisoning','Model inversion','Model extraction','Adversarial input','Toxicity']},
    {title:'Threat Boundaries',items:['Injection vs Jailbreak vs Leakage','Poisoning vs Inversion vs Extraction']},
    {title:'IAM & Permission Logic',items:['Identity policy','Resource policy','Implicit Deny','Explicit Deny','Permissions Boundary','SCP','IAM Role','Trust policy','MFA']},
    {title:'Encryption & Private Network',items:['KMS','TLS / HTTPS','Customer-managed key (CMK)','PrivateLink / Interface VPC Endpoint','S3 Gateway Endpoint','NAT Gateway','Secrets Manager','Data residency']},
    {title:'Secure AI System',items:['Access control','Encrypt at rest/in transit','Prompt/output filtering','Logging & monitoring','Trusted data/grounding','Output validation','Confidence score','Human review','Model invocation logging','Data integrity checks']},
    {title:'Bedrock & Agent Security',items:['AgentCore Identity','AgentCore Policy','Least privilege','Approval for high-impact actions','Shared Responsibility','PETs / Privacy-Enhancing Technologies']}
  ]},
  {page:12,title:'Governance, Compliance & Exam Traps',tags:['Governance','Compliance','EU AI Act'],sections:[
    {title:'Audit / Compliance Services',items:['Artifact','Audit Manager','Config','CloudTrail','Inspector','Trusted Advisor','Well-Architected Tool']},
    {title:'Data Governance Terms',items:['Owner','Steward','Lineage','Retention','Residency','Sovereignty','Classification','Glue Data Catalog / Lake Formation','ML Lineage vs Registry']},
    {title:'S3 Lifecycle / Storage',items:['Standard','Standard-IA','One Zone-IA','Intelligent-Tiering','Glacier / Deep Archive']},
    {title:'Frameworks & Standards',items:['NIST AI RMF','AWS CAF-AI','GenAI Security Scoping Matrix','SOC 1','SOC 2','SOC 3','ISO 27001','ISO 42001']},
    {title:'EU AI Act',items:['Unacceptable / Prohibited','High risk','Limited / Transparency','Minimal','Focus on use case + impact on rights/safety']},
    {title:'Governance Process',items:['Policies → Review cadence → Review strategy → Transparency standards → Team training']}
  ]},
  {page:13,title:'AI / ML Fundamentals Map',tags:['AI/ML','Fundamentals','Learning Types'],sections:[
    {title:'Concept Ladder',items:['AI → ML → DL','GenAI = create new content','LLM = language-focused FM','Agentic AI = goal → plan → act → observe']},
    {title:'Core Terms',items:['Algorithm = learning method','Model = result after training','Training = learn parameters','Inference = use trained model','Deterministic = same rule/output','Probabilistic = probability-based output']},
    {title:'Feature / Label / Parameter',items:['Feature = input','Label/Target = supervised ground truth','Parameter = learned values','Hyperparameter = set before training']},
    {title:'Data Types',items:['Structured','Semi-structured','Unstructured','Time-series','Labeled / Unlabeled']},
    {title:'Learning Types',items:['Supervised','Unsupervised','Self-supervised','Reinforcement Learning: State → Action → Reward/Penalty → Policy']},
    {title:'CV / NLP / Speech',items:['CV = image/video','NLP = text/language','Speech = spoken audio','Neural network: Input → Hidden layers → Output']}
  ]},
  {page:14,title:'Data Prep, Leakage, Drift & Model Fit',tags:['Leakage','Drift','Model Fit'],sections:[
    {title:'Data Prep',items:['Feature Engineering','Scaling','Profiling']},
    {title:'Split Data',items:['Train = learn parameters','Validation = tune/select','Test = final unbiased evaluation','Never tune with test data']},
    {title:'Leakage',items:['Data leakage = feature/preprocess knows target/future/test','Label leakage = production-unavailable signal reveals target during training']},
    {title:'Drift',items:['Data drift = input X distribution changes','Concept drift = X→Y relationship changes']},
    {title:'Data Issues',items:['Missing values','Outliers','Class imbalance']},
    {title:'Model Fit',items:['Overfitting = train good, validation/test bad','Underfitting = train and validation bad','Fix overfit: regularization/simplify/feature selection/more data/early stop','Fix underfit: more capacity/better training/better features']},
    {title:'Imbalance',items:['Oversampling','SMOTE','Class weights','Rare positive: F1 / AUC-PR often more useful than Accuracy']}
  ]},
  {page:15,title:'Bedrock Inference, Cost & Model Selection',tags:['Bedrock','Cost','Model Selection'],sections:[
    {title:'Inference Options',items:['On-Demand','Provisioned Throughput','Batch Inference','Prompt Caching','Intelligent Prompt Routing','Cross-Region Inference']},
    {title:'Geographic vs Global',items:['Geographic profile = route within geography, useful for residency/compliance','Global profile = broader routing for capacity, not for strict geo residency']},
    {title:'FM Selection Criteria',items:['Modality','Multilingual','Quality/performance','Model size/complexity','Context length','Latency','Cost/token','Customization','Prompt caching','Security/compliance','Regional availability']},
    {title:'Key Rule',items:['Best model = model that best meets workload requirements, not the biggest model']},
    {title:'Inference Parameters',items:['Temperature','Top-K','Top-P','Max output tokens','Stop sequences']},
    {title:'Cost Trade-offs',items:['Responsiveness','Availability','Redundancy','Performance','Regional coverage','Token pricing','Provisioned capacity','Custom models']}
  ]},
  {page:16,title:'RAG Deep Dive & Vector Stores',tags:['RAG','Vector Store','Retrieval'],sections:[
    {title:'RAG',items:['Retrieve relevant information first, then ground the answer in that context']},
    {title:'Ingestion Flow',items:['Load → Chunk → Embed → Store / Index vectors']},
    {title:'Runtime Flow',items:['Represent query → Retrieve candidates → Metadata filter / Rerank → Attach context → Generate']},
    {title:'Knowledge Bases',items:['Managed RAG: ingest/chunk/embed/index/retrieve/ground/cite/filter']},
    {title:'Chunking / Retrieval',items:['Smaller coherent chunks = finer granularity','Overlap preserves cross-boundary context','Top-k too high can add noise','If retrieval irrelevant: reduce top-k, rerank, adjust chunks/embedding']},
    {title:'Vector Stores',items:['OpenSearch = keyword + vector / hybrid','Aurora/RDS pgvector = relational + vector','S3 Vectors = large-scale cost-efficient vectors','Neptune Analytics = graph / GraphRAG + vectors','DocumentDB = document/JSON + vector']}
  ]},
  {page:17,title:'FM Training, Fine-tuning & Adaptation',tags:['Fine-tune','RLHF','LoRA'],sections:[
    {title:'Training / Adaptation Ladder',items:['Pre-training = broad knowledge','CPT = large domain corpus, often unlabeled','SFT / Instruction tuning = labeled instruction-response','RLHF = human preference reward signal / alignment']},
    {title:'Extra Methods',items:['Distillation = teacher → smaller student','Transfer learning','Domain adaptation','PEFT / LoRA','ReFT']},
    {title:'Catastrophic Forgetting',items:['Narrow tuning can degrade old skills','Mitigate with mixed/multitask/replay data or PEFT']},
    {title:'Fine-tune Data Prep',items:['Curate + clean','Correct labels/desired responses','Representative data','Enough data','Governance/permission/licensing','Held-out validation/eval']},
    {title:'Bedrock Trap',items:['CPT = unlabeled domain data','Fine-tuning = labeled instruction-response data']},
    {title:'Cost / Effort Ladder',items:['Pre-training > CPT > SFT > RAG > Prompt/In-context']},
    {title:'Fine-tune + RAG',items:['Fine-tune = stable behavior/style/format','RAG = current/private/changing facts + citations','Use together when needed']},
    {title:'RLHF 3H',items:['Helpfulness','Honesty','Harmlessness']}
  ]},
  {page:18,title:'FM & Application Evaluation',tags:['Evaluation','Benchmarks','Business Metrics'],sections:[
    {title:'Reference Metrics',items:['ROUGE = summarization overlap','BLEU = translation n-gram overlap','BERTScore = semantic similarity']},
    {title:'Human / Judge',items:['Human evaluation = nuanced but slow/expensive','LLM-as-a-Judge = scalable rubric evaluator; watch judge/position bias']},
    {title:'Benchmarks',items:['GLUE / SuperGLUE','MMLU','BIG-bench','HELM','Benchmark score may not match real use case']},
    {title:'AWS Evaluation Tools',items:['Bedrock Model Evaluation','SageMaker Clarify = bias + explainability','SageMaker fmeval','AgentCore Evaluations']},
    {title:'Evaluate FM Apps',items:['Retrieval relevance','Context coverage','Faithfulness / Groundedness','Fluency','Citation precision / coverage']},
    {title:'Business Metrics',items:['Task completion','User satisfaction','Engagement','Productivity','Latency','Cost per interaction','Tool efficiency/safety','ROI','Model metric good ≠ business objective achieved']}
  ]},
  {page:19,title:'GenAI Capabilities, Limitations & Business Value',tags:['GenAI','Business Value','Limitations'],sections:[
    {title:'Common Use Cases',items:['Text / image / video / audio / code generation','Summarization','Translation','Assistants / agents','Customer service','Search / recommendation']},
    {title:'Strengths',items:['Adaptability','Responsiveness','Conversational UX','Content creation','Speed-to-market','Efficiency / cost-effectiveness / accessibility']},
    {title:'Limitations / Risks',items:['Hallucination','Inaccuracy','Nondeterminism','Interpretability limitations','Cost / latency']},
    {title:'Business Metrics',items:['ROI','Efficiency','Conversion','ARPU','CLV','Task success','Customer feedback','Accuracy','Cross-domain performance']},
    {title:'Traditional ML vs FM',items:['Traditional ML = narrow/cheaper/more interpretable','FM = broad/reusable/flexible/general-purpose']},
    {title:'Quick Selection Cue',items:['If a simple deterministic audited rule already defines the exact answer, AI/ML may be unnecessary','Business metric ≠ model metric','Choose technique by task, not model size']}
  ]},
  {page:20,title:'AWS Service Finder / Exam Clue Map',tags:['AWS Services','Exam Clues','Service Map'],sections:[
    {title:'ML / AI',items:['Bedrock / AgentCore = GenAI / agents','Comprehend = NLP','Lex = chatbot','Nova = foundation models','Personalize = recommendation','Polly = text-to-speech','Rekognition = image/video','SageMaker AI = custom ML','JumpStart = model hub','Textract = document OCR/forms/tables','Transcribe = speech-to-text','Translate = translation']},
    {title:'Analytics / Data',items:['Data Exchange = third-party datasets','EMR = big data','Glue = ETL/Catalog/Crawler','Glue Data Quality = DQ rules','DataBrew = visual/no-code prep','Lake Formation = data lake permissions','OpenSearch = search/vector','Quick = business AI workspace','Redshift = warehouse']},
    {title:'Dev / Database',items:['Kiro = spec-driven development','Strands Agents = agent SDK','Aurora/RDS = relational','DocumentDB = document','DynamoDB = NoSQL','ElastiCache = cache','Neptune = graph']},
    {title:'Compute / Storage',items:['EC2 = VM','Lambda = serverless functions','ECS = containers','EKS = Kubernetes','S3 = object storage/data lake','S3 Glacier = archive']},
    {title:'Security / Governance',items:['Artifact','IAM','Inspector','KMS','Macie','Secrets Manager']},
    {title:'Management / Network / Cost',items:['CloudTrail = API audit','CloudWatch = metrics/logs/alarms','Config = resource state/compliance','Trusted Advisor = recommendations','Well-Architected Tool = architecture review','CloudFront = CDN','VPC = network isolation','Budgets = thresholds/alerts','Cost Explorer = cost analysis']},
    {title:'Extra Exam Clues',items:['Q Business = enterprise knowledge assistant','Q Developer = coding/AWS assistant','Kendra = enterprise search','PartyRock = no-code GenAI playground (legacy)']}
  ]}
];