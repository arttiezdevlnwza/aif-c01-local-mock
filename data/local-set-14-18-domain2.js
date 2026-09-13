(()=>{
  const bank=window.LOCAL_MOCK_14_18_BANK=window.LOCAL_MOCK_14_18_BANK||[];
  const add=(choices,explanation,variants,extra={})=>bank.push({domain:2,choices,explanation,variants,...extra});

  add(
    ['Tokenization','Embedding','Reranking','Fine-tuning'],
    'Tokenization splits text into model-readable units. Embeddings map content to numeric vectors. Reranking reorders retrieved candidates by relevance. Fine-tuning updates model weights on additional training examples.',
    [
      ['Text is split into subword units and mapped to IDs before model computation. Which process is this?','text ถูกแบ่งเป็น subword units และ map เป็น IDs ก่อน model computation process นี้คืออะไร?',0],
      ['A sentence is converted into a numeric vector so semantically similar sentences can be compared. Which process is being used?','sentence ถูกแปลงเป็น numeric vector เพื่อเทียบ semantic similarity process ใดกำลังถูกใช้?',1],
      ['A retriever returns 20 candidate passages and a second model reorders them so the most relevant appear first. Which step is this?','retriever คืน 20 passages แล้ว model อีกตัว reorder ให้ relevant ที่สุดขึ้นก่อน step นี้คืออะไร?',2],
      ['A team updates a foundation model with labeled examples so its weights change for a task. Which technique is being used?','ทีม update foundation model ด้วย labeled examples จน weights เปลี่ยนเพื่อ task หนึ่ง เทคนิคนี้คืออะไร?',3],
      ['The clue is "split text into model input units before inference." Which term fits?','clue คือ split text เป็น model input units ก่อน inference ควรตอบ term ใด?',0]
    ]
  );

  add(
    ['Attention','Tokenization','Diffusion','Clustering'],
    'Attention lets a transformer weight relationships among tokens so relevant context influences each representation. Tokenization prepares text units, diffusion generates by denoising, and clustering groups unlabeled examples.',
    [
      ['A transformer decides which earlier words matter most when interpreting the current token. Which mechanism enables this?','transformer ตัดสินว่าคำก่อนหน้าใดสำคัญต่อ token ปัจจุบัน กลไกใดทำสิ่งนี้?',0],
      ['Which transformer mechanism assigns different importance to relationships among tokens in the context?','กลไก transformer ใดให้น้ำหนักความสำคัญต่างกันกับความสัมพันธ์ระหว่าง tokens?',0],
      ['A model links a pronoun with the noun it refers to several words earlier. Which core transformer mechanism is involved?','โมเดลเชื่อม pronoun กับ noun ที่อ้างถึงก่อนหน้าหลายคำ core mechanism ใดเกี่ยวข้อง?',0],
      ['Long-context understanding requires the model to focus more on some parts of the prompt than others. Which mechanism is MOST direct?','long-context understanding ต้องให้โมเดล focus บางส่วนของ prompt มากกว่าส่วนอื่น กลไกใดตรงที่สุด?',0],
      ['The clue is "weigh relationships among tokens." Which concept should you recognize?','clue คือ weigh relationships among tokens ควรนึกถึง concept ใด?',0]
    ]
  );

  add(
    ['Lower temperature','Higher temperature','Lower Top-P','Higher Top-P'],
    'Lower temperature makes generation more predictable. Higher temperature increases randomness. Lower Top-P narrows the cumulative-probability candidate set, while higher Top-P broadens it.',
    [
      ['A compliance assistant should be more predictable and less random. Which change is MOST direct?','compliance assistant ควร predictable มากขึ้นและ random น้อยลง ควรปรับอะไรโดยตรงที่สุด?',0],
      ['A creative-writing assistant should explore more varied token choices. Which change generally increases randomness?','creative-writing assistant ควร explore token choices ที่หลากหลายขึ้น การเปลี่ยนใดเพิ่ม randomness โดยทั่วไป?',1],
      ['The team specifically wants nucleus sampling to consider a narrower candidate set. Which change fits?','ทีมต้องการให้ nucleus sampling พิจารณา candidate set แคบลง ควรปรับอะไร?',2],
      ['The team wants nucleus sampling to consider a broader cumulative-probability set. Which change fits?','ทีมต้องการให้ nucleus sampling พิจารณา cumulative-probability set กว้างขึ้น ควรปรับอะไร?',3],
      ['The clue is "reduce creativity and increase consistency" without changing output length. Which setting direction is BEST?','clue คือ reduce creativity และ increase consistency โดยไม่เปลี่ยน output length ควรปรับ setting ใด?',0]
    ],
    {vocab:[{term:'nucleus',th:'วิธี sampling ที่เลือกจากกลุ่ม token ตาม cumulative probability'}]}
  );

  add(
    ['Max output tokens','Context window','Temperature','Embedding dimension'],
    'Max output tokens caps generated length. The context window limits how much input plus generated context the model can consider. Temperature affects sampling randomness. Embedding dimension is vector size.',
    [
      ['A team wants to cap how long the generated answer can be. Which parameter is MOST direct?','ทีมต้องการจำกัดความยาว generated answer parameter ใดตรงที่สุด?',0],
      ['A long document plus conversation history no longer fits in one model request. Which model limit is being reached?','long document กับ conversation history ใส่ใน request เดียวไม่พอ กำลังชน model limit ใด?',1],
      ['The problem is response randomness, not length or input capacity. Which parameter family should be adjusted?','ปัญหาคือ response randomness ไม่ใช่ความยาวหรือ input capacity ควรปรับ parameter ใด?',2],
      ['A vector-search design discussion focuses on the number of numeric components in each embedding. Which property is being discussed?','discussion เรื่อง vector search เน้นจำนวน numeric components ใน embedding กำลังพูดถึง property ใด?',3],
      ['The clue is "upper bound on generated tokens." Which answer fits?','clue คือ upper bound on generated tokens ควรตอบอะไร?',0]
    ]
  );

  add(
    ['System prompt','Few-shot prompting','Metadata filter','Prompt caching'],
    'A system prompt sets high-level behavior/instructions. Few-shot prompting demonstrates desired behavior with examples in the prompt. Metadata filtering restricts retrieved documents by attributes. Prompt caching reuses repeated prompt context for efficiency.',
    [
      ['A developer wants to define the assistant role, tone, and behavior for every request. Which prompt element is MOST appropriate?','developer ต้องการกำหนด role, tone และ behavior ของ assistant ทุก request ควรใช้ prompt element ใด?',0],
      ['The prompt includes three example input-output pairs to demonstrate the desired format without updating weights. Which technique is this?','prompt มี example input-output 3 คู่เพื่อสาธิต format โดยไม่ update weights เป็น technique ใด?',1],
      ['A RAG query may retrieve only documents tagged region=TH and status=approved. Which control is MOST direct?','RAG query retrieve ได้เฉพาะ document tagged region=TH และ status=approved control ใดตรงที่สุด?',2],
      ['Thousands of requests repeat the same long system context and examples. Which feature can reduce repeated processing cost and latency?','หลายพัน request ใช้ long system context/examples เดิมซ้ำ feature ใดช่วยลด repeated processing cost/latency?',3],
      ['The clue is "examples inside the prompt, weights unchanged." Which technique fits?','clue คือ examples อยู่ใน prompt และ weights ไม่เปลี่ยน เทคนิคใดตรง?',1]
    ]
  );

  add(
    ['Prompt Management','Prompt Optimization','Prompt Caching','Prompt Routing'],
    'Prompt Management stores, versions, tests, and governs reusable prompts. Prompt Optimization improves prompt wording. Prompt Caching reuses repeated prompt context. Prompt Routing chooses an appropriate model or route for a request.',
    [
      ['A regulated team needs versioned prompt templates that can be tested and promoted across environments. Which Bedrock capability BEST fits?','ทีม regulated ต้องการ versioned prompt templates ที่ test/promote ข้าม environment ได้ capability ใดเหมาะที่สุด?',0],
      ['A team wants help improving prompt instructions for better model responses rather than managing versions. Which capability is closest?','ทีมต้องการช่วยปรับ prompt instructions ให้ response ดีขึ้น ไม่ใช่จัดการ versions capability ใดใกล้ที่สุด?',1],
      ['Many requests share the same long prompt prefix, and the goal is lower latency and repeated-token cost. Which capability fits?','หลาย request ใช้ long prompt prefix เดิม เป้าหมายคือลด latency/repeated-token cost capability ใดตรง?',2],
      ['An application wants to direct different requests to an appropriate model based on request characteristics. Which capability is MOST relevant?','application ต้องการ route request ต่างแบบไป model ที่เหมาะตาม characteristics capability ใดเกี่ยวข้องที่สุด?',3],
      ['The clue is "draft, version, approve, and reuse prompts." Which answer fits?','clue คือ draft, version, approve และ reuse prompts ควรตอบอะไร?',0]
    ]
  );

  add(
    ['RAG','Supervised fine-tuning','Continued pre-training','Prompt caching'],
    'RAG retrieves fresh external context at inference while leaving model weights unchanged. Supervised fine-tuning updates weights using labeled instruction/response examples. Continued pre-training updates weights using a large domain corpus, often unlabeled. Prompt caching is an efficiency feature, not knowledge customization.',
    [
      ['Company policies change weekly and answers must use the latest approved documents without retraining. Which approach BEST fits?','นโยบายบริษัทเปลี่ยนทุกสัปดาห์และคำตอบต้องใช้เอกสารล่าสุดโดยไม่ retrain ควรใช้ approach ใด?',0],
      ['A team has curated instruction-response examples and wants the model to follow the task style more reliably by updating weights. Which method fits?','ทีมมี instruction-response examples ที่ curate แล้วและต้องการ update weights ให้ model ทำตาม task style ดีขึ้น วิธีใดตรง?',1],
      ['A company has millions of unlabeled domain documents and wants domain language absorbed into model weights. Which customization method BEST fits?','บริษัทมี unlabeled domain documents หลายล้านและต้องการให้ domain language เข้า model weights วิธีใดตรงที่สุด?',2],
      ['The knowledge is already in the prompt, but the same long prefix repeats across calls and cost is the problem. Which technique should be considered?','knowledge อยู่ใน prompt แล้ว แต่ long prefix เดิมซ้ำหลาย call และ cost เป็นปัญหา ควรพิจารณา technique ใด?',3],
      ['The clue is "fresh external knowledge at inference, no weight update." Which technique fits?','clue คือ fresh external knowledge ตอน inference และไม่ update weights ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Load source','Chunk content','Create embeddings','Store/index vectors'],
    'RAG ingestion loads source content, splits it into useful chunks, creates embeddings, and stores/indexes the vectors for later retrieval.',
    [
      ['A team is starting a RAG knowledge base. Which activity happens before chunking?','ทีมเริ่มสร้าง RAG knowledge base activity ใดเกิดก่อน chunking?',0],
      ['After source documents are loaded, which step usually prepares smaller retrievable passages?','หลัง load source documents step ใดเตรียม passages ขนาดเล็กสำหรับ retrieval?',1],
      ['After chunks are prepared, which step converts their meaning into vectors for similarity search?','หลังเตรียม chunks แล้ว step ใดแปลงความหมายเป็น vectors สำหรับ similarity search?',2],
      ['After embeddings are created, which step makes them available for later vector retrieval?','หลังสร้าง embeddings แล้ว step ใดทำให้ใช้ vector retrieval ภายหลังได้?',3],
      ['The vector index does not exist yet. Which sequence describes RAG ingestion rather than runtime generation?','vector index ยังไม่มี sequence ใดอธิบาย RAG ingestion ไม่ใช่ runtime generation?',0]
    ],
    {orderVariant:{setIndex:2,question:'Order the RAG ingestion steps from source documents to a searchable vector index.',questionTh:'เรียง RAG ingestion จาก source documents จนเป็น searchable vector index',choices:['Load source','Chunk content','Create embeddings','Store/index vectors'],answer:[0,1,2,3],explanation:'Load the source first, chunk it, create embeddings for the chunks, then store/index the vectors.'}}
  );

  add(
    ['Represent query','Retrieve candidates','Filter or rerank','Attach context','Generate answer'],
    'At RAG runtime, the query is represented, candidates are retrieved, optional filtering/reranking refines them, selected context is attached, and the model generates the answer.',
    [
      ['The vector index already exists. Which step comes first when a new user query arrives?','vector index มีแล้ว เมื่อ user query ใหม่เข้ามา step ใดมาก่อน?',0],
      ['After the query representation is ready, which step obtains candidate passages from the index?','หลัง query representation พร้อม step ใดดึง candidate passages จาก index?',1],
      ['Candidate passages are available but need to be narrowed or reordered before generation. Which step comes next?','มี candidate passages แล้วแต่ต้อง narrow/reorder ก่อน generation step ใดถัดไป?',2],
      ['The best passages have been selected. Which step places them into the model request before generation?','เลือก passages ที่ดีที่สุดแล้ว step ใดใส่ passages เข้า model request ก่อน generation?',3],
      ['The selected context is already in the prompt. Which step produces the final response?','selected context อยู่ใน prompt แล้ว step ใดสร้าง final response?',4]
    ],
    {orderVariant:{setIndex:2,question:'The vector index already exists. Order the RAG runtime steps from user query to final answer.',questionTh:'vector index มีแล้ว เรียง RAG runtime จาก user query จนถึง final answer',choices:['Represent query','Retrieve candidates','Filter or rerank','Attach context','Generate answer'],answer:[0,1,2,3,4],explanation:'Represent the query, retrieve candidates, refine them, attach selected context, then generate the answer.'}}
  );

  add(
    ['Metadata filtering','Reranking','Chunking','Embedding'],
    'Metadata filtering restricts candidates by structured attributes. Reranking reorders retrieved candidates by relevance. Chunking splits documents into passages. Embedding maps text or other content to vectors.',
    [
      ['A query may search only documents tagged department=HR and status=approved. Which retrieval technique BEST fits?','query ค้นได้เฉพาะ document tagged department=HR และ status=approved retrieval technique ใดตรงที่สุด?',0],
      ['A retriever already returned candidates, and a second stage should reorder them by semantic relevance. Which step is this?','retriever คืน candidates แล้ว และ second stage ต้อง reorder ตาม semantic relevance step นี้คืออะไร?',1],
      ['Long documents must be split into coherent passages before vector indexing. Which process is this?','long documents ต้องถูก split เป็น coherent passages ก่อน vector indexing process นี้คืออะไร?',2],
      ['Each passage must be converted into a numeric representation for similarity search. Which process is this?','แต่ละ passage ต้องถูกแปลงเป็น numeric representation สำหรับ similarity search process ใด?',3],
      ['The clue is "restrict by structured attributes," not "reorder by relevance." Which answer fits?','clue คือ restrict ด้วย structured attributes ไม่ใช่ reorder ตาม relevance ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Retrieval relevance','Generation faithfulness','Answer fluency','Latency'],
    'Retrieval relevance asks whether retrieved passages are useful for the query. Generation faithfulness asks whether the final answer is supported by the supplied context. Fluency concerns readability/natural language, while latency is response time.',
    [
      ['The answer faithfully follows the supplied context, but the retrieved passages are mostly off-topic. Which RAG quality dimension is failing?','answer ตาม supplied context อย่าง faithful แต่ retrieved passages ส่วนใหญ่ off-topic RAG quality dimension ใด fail?',0],
      ['Retrieved documents are highly relevant, but the final answer invents unsupported claims. Which quality dimension is failing?','retrieved documents relevant มาก แต่ final answer แต่ง claims ที่ context ไม่รองรับ quality dimension ใด fail?',1],
      ['The answer is accurate but awkward and difficult to read. Which evaluation dimension is MOST directly affected?','answer accurate แต่ awkward และอ่านยาก evaluation dimension ใดได้รับผลโดยตรง?',2],
      ['The answer quality is good, but users wait too long for every response. Which operational metric is the primary concern?','answer quality ดีแต่ user รอนานทุก response operational metric ใดเป็น concern หลัก?',3],
      ['Bad documents were retrieved, and the generator simply followed them. Which problem should be fixed first?','retrieve documents ผิด และ generator แค่ทำตาม context ปัญหาใดควรแก้ก่อน?',0]
    ],
    {vocab:[{term:'faithfully',th:'อย่างยึดตามต้นฉบับ/บริบท'},{term:'unsupported',th:'ไม่มีหลักฐานใน context รองรับ'}]}
  );

  add(
    ['Smaller coherent chunks','One giant chunk per document','Disable embeddings','Increase temperature'],
    'Smaller coherent chunks can improve retrieval granularity when huge mixed-topic chunks are too coarse. One giant chunk reduces granularity, disabling embeddings breaks vector retrieval, and temperature changes generation rather than retrieval.',
    [
      ['Each vector represents an entire 200-page manual, so retrieval returns large amounts of unrelated text. Which change is MOST likely to help?','แต่ละ vector แทน manual 200 หน้า ทำให้ retrieval ได้ unrelated text เยอะ การเปลี่ยนใดน่าช่วยที่สุด?',0],
      ['The team wants each embedding to represent a focused semantic section rather than a whole book. Which strategy fits?','ทีมต้องการให้ embedding แต่ละอันแทน semantic section ที่ focused ไม่ใช่ทั้งหนังสือ strategy ใดตรง?',0],
      ['Retrieval is too coarse because chunks contain many unrelated topics. Which adjustment should be tried before changing generation randomness?','retrieval หยาบเกินเพราะ chunk มีหลาย unrelated topics ควรลองปรับอะไร ก่อนเปลี่ยน generation randomness?',0],
      ['A paragraph-level question cannot retrieve the right evidence because every indexed unit is enormous. Which fix is MOST direct?','คำถามระดับ paragraph retrieve evidence ไม่ถูกเพราะ indexed unit ใหญ่มาก fix ใดตรงที่สุด?',0],
      ['The clue is "improve retrieval granularity." Which answer should you choose?','clue คือ improve retrieval granularity ควรเลือกอะไร?',0]
    ],
    {vocab:[{term:'coherent',th:'เป็นเนื้อหาเดียวกันอย่างต่อเนื่อง'},{term:'granularity',th:'ระดับความละเอียด'}]}
  );

  add(
    ['Forward diffusion','Reverse diffusion','Reranking','Tokenization'],
    'Forward diffusion progressively adds noise to clean data. Reverse diffusion denoises from noise toward a generated sample. Reranking and tokenization are unrelated processes.',
    [
      ['A clean image is progressively corrupted with more noise. Which diffusion direction is this?','clean image ถูกเติม noise มากขึ้นเรื่อย ๆ เป็น diffusion direction ใด?',0],
      ['Generation starts from noise and repeatedly removes noise until an image emerges. Which process is this?','generation เริ่มจาก noise แล้วค่อย ๆ denoise จนเกิด image เป็น process ใด?',1],
      ['A diagram shows image → more noise → near-random noise. Which path is being illustrated?','diagram แสดง image → noise มากขึ้น → near-random noise กำลังแสดง path ใด?',0],
      ['A generative image model moves from random noise toward a structured image over many steps. Which direction is this?','generative image model เคลื่อนจาก random noise ไป structured image หลาย steps เป็น direction ใด?',1],
      ['The clue is "noise → image." Which diffusion process fits?','clue คือ noise → image diffusion process ใดตรง?',1]
    ]
  );

  add(
    ['Multimodal model','Text-only language model','Clustering model','Regression model'],
    'A multimodal model can process or generate across more than one modality such as text, image, or audio. The other choices are limited to a specific modality or classical ML task.',
    [
      ['A foundation model accepts an image and a text question together, then answers about the image. What capability is required?','foundation model รับ image กับ text question พร้อมกันแล้วตอบเกี่ยวกับภาพ ต้องใช้ capability ใด?',0],
      ['A user uploads a chart and asks a natural-language question about it. Which model category BEST fits?','user upload chart แล้วถามด้วย natural language model category ใดตรงที่สุด?',0],
      ['An application combines audio understanding with text generation in one model interaction. Which capability is this?','application รวม audio understanding กับ text generation ใน model interaction เดียว เป็น capability ใด?',0],
      ['A model can take text plus an image as input and produce a textual explanation. Which term describes it?','model รับ text+image เป็น input และสร้าง textual explanation term ใดอธิบาย?',0],
      ['The clue is "multiple modalities in one model." Which answer fits?','clue คือ multiple modalities in one model ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Continued pre-training','Supervised fine-tuning','RAG','Few-shot prompting'],
    'Continued pre-training usually adapts weights using a large domain corpus, often unlabeled. Supervised fine-tuning adapts weights using labeled instruction/response examples. RAG retrieves external context at inference. Few-shot prompting adds examples to the prompt without weight updates.',
    [
      ['A life-sciences team has a huge unlabeled research corpus and wants domain terminology absorbed into model weights. Which method fits?','ทีม life sciences มี unlabeled research corpus ใหญ่มากและต้องการให้ terminology เข้า model weights วิธีใดตรง?',0],
      ['A support team has curated examples of correct question-answer behavior and wants to update model weights to follow that style. Which method fits?','support team มี curated examples ของ behavior ที่ถูกต้องและต้องการ update weights วิธีใดตรง?',1],
      ['Product facts change daily, and answers must use current external documents without updating model weights. Which approach fits?','product facts เปลี่ยนทุกวันและคำตอบต้องใช้ external docs ปัจจุบันโดยไม่ update weights approach ใดตรง?',2],
      ['A developer adds five demonstrations directly to the prompt and runs no training job. Which technique is being used?','developer ใส่ demonstrations 5 ตัวอย่างใน prompt และไม่มี training job เป็น technique ใด?',3],
      ['The clue is "unlabeled domain corpus + weight update." Which customization method should you recognize?','clue คือ unlabeled domain corpus + weight update ควรนึกถึง customization method ใด?',0]
    ],
    {orderVariant:{setIndex:2,question:'Order a possible foundation-model adaptation path when all listed stages are explicitly required by the scenario.',questionTh:'สมมติ scenario ระบุว่าต้องทำทุก stage ให้เรียง foundation-model adaptation path',choices:['Start from a base foundation model','Continued pre-training on domain corpus','Supervised fine-tuning on labeled examples','Evaluate the customized model','Deploy the accepted model'],answer:[0,1,2,3,4],explanation:'When the scenario explicitly requires every stage, begin with the base model, optionally adapt domain knowledge via continued pre-training, then supervised fine-tuning, evaluate, and deploy.'}}
  );

  add(
    ['Embeddings','Tokens','Parameters','Prompts'],
    'Embeddings are numeric vectors representing semantic content. Tokens are model input/output units. Parameters are learned model weights. Prompts are instructions/context sent to the model.',
    [
      ['A vector database compares numeric representations so semantically similar documents are near each other. What are those representations?','vector database เทียบ numeric representations เพื่อให้ document ที่ semantic ใกล้กันอยู่ใกล้กัน สิ่งนั้นเรียกว่าอะไร?',0],
      ['A pricing calculation counts input and output units consumed by a language model request. What are those units?','pricing calculation นับ input/output units ของ language model request units เหล่านั้นคืออะไร?',1],
      ['Training changes billions of learned numeric values inside a model. What are those values called?','training เปลี่ยน learned numeric values หลายพันล้านภายใน model ค่าเหล่านั้นเรียกว่าอะไร?',2],
      ['A developer sends instructions, examples, and context to a model in one request. What is that input package commonly called?','developer ส่ง instructions, examples และ context ให้ model ใน request เดียว input package นี้เรียกว่าอะไร?',3],
      ['The clue is "semantic numeric vector used for similarity search." Which answer fits?','clue คือ semantic numeric vector สำหรับ similarity search ควรตอบอะไร?',0]
    ]
  );

  add(
    ['Context engineering','Fine-tuning','Model distillation','Clustering'],
    'Context engineering focuses on assembling the right instructions, retrieved information, memory, tool results, and other context around a model request. Fine-tuning updates weights, distillation transfers behavior into a smaller model, and clustering groups unlabeled data.',
    [
      ['A team improves an agent by carefully selecting retrieved documents, memory, tool outputs, and instructions for each request without changing model weights. Which concept BEST describes this work?','ทีมปรับ agent โดยเลือก retrieved docs, memory, tool outputs และ instructions ให้เหมาะแต่ละ request โดยไม่เปลี่ยน weights concept ใดตรงที่สุด?',0],
      ['Which practice is broader than writing a single prompt because it manages all information supplied to the model at inference time?','practice ใดกว้างกว่าการเขียน prompt เดียว เพราะจัดการข้อมูลทั้งหมดที่ส่งเข้า model ตอน inference?',0],
      ['A developer combines RAG results, session memory, system instructions, and tool outputs into the model context. What discipline is this?','developer รวม RAG results, session memory, system instructions และ tool outputs เข้า model context เป็น discipline ใด?',0],
      ['The model itself stays unchanged, but the application improves what information surrounds every model call. Which approach is being used?','model ไม่เปลี่ยน แต่ application ปรับข้อมูลที่ล้อมรอบทุก model call approach ใดถูกใช้?',0],
      ['The clue is "design the full inference context, not just prompt wording." Which answer fits?','clue คือ design full inference context ไม่ใช่แค่ prompt wording ควรตอบอะไร?',0]
    ]
  );
})();
