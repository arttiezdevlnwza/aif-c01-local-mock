(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:1,type:'single',...x});

  add({objective:'1.1.1',target:'ai-ml-dl-genai-agentic-map',type:'matching',
    q:'A regional healthcare group is preparing an executive workshop because different teams keep using the terms AI, machine learning, deep learning, generative AI, and agentic AI as if they mean the same thing. The architects want a practical way to distinguish the concepts before they choose technology for clinical document processing, prediction, and multi-step workflow automation. Match each description with the concept that best fits it.',
    th:'เครือโรงพยาบาลระดับภูมิภาคกำลังเตรียมเวิร์กช็อปสำหรับผู้บริหาร เพราะหลายทีมใช้คำว่า AI, machine learning, deep learning, generative AI และ agentic AI ราวกับว่าเป็นเรื่องเดียวกันทั้งหมด สถาปนิกต้องการแยกความหมายเชิงปฏิบัติของแต่ละแนวคิดให้ชัดก่อนเลือกเทคโนโลยีสำหรับการประมวลผลเอกสารทางคลินิก การทำนาย และกระบวนการทำงานหลายขั้นตอน จงจับคู่คำอธิบายแต่ละข้อกับแนวคิดที่เหมาะสมที่สุด.',
    ask:'แยกขอบเขตของ AI, ML, deep learning, GenAI และ agentic AI ว่าแต่ละคำอธิบายสื่อถึงแนวคิดใด.',
    choices:{A:'A broad field that includes systems performing tasks associated with human intelligence',B:'A subset of AI that learns patterns from data to make predictions or decisions',C:'A subset of ML that uses multi-layer neural networks',D:'Models that create new content such as text, images, or code',E:'Systems that can pursue goals through planning, tool use, memory, and multi-step actions'},
    matches:{'1':'Artificial intelligence (AI)','2':'Machine learning (ML)','3':'Deep learning','4':'Generative AI (GenAI)','5':'Agentic AI'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ A → AI เพราะเป็นขอบเขตกว้างที่สุดของระบบที่ทำงานซึ่งต้องใช้ความสามารถคล้ายมนุษย์.','✅ B → ML เพราะเป็นส่วนหนึ่งของ AI ที่เรียนรู้ pattern จากข้อมูล.','✅ C → Deep learning เพราะใช้ neural network หลายชั้น.','✅ D → GenAI เพราะจุดเด่นคือการสร้างเนื้อหาใหม่.','✅ E → Agentic AI เพราะมี goal, planning, tools, memory และการลงมือหลายขั้นตอน.'],
    cue:'AI กว้างสุด → ML เรียนจากข้อมูล → DL = neural network หลายชั้น → GenAI สร้าง → Agentic AI วางแผนและลงมือ.'});

  add({objective:'1.1.1',target:'model-algorithm-training-inference',
    q:'A retail analytics team is documenting its demand-forecasting system for nontechnical stakeholders. The documentation currently mixes up the algorithm used to learn patterns, the trained artifact produced from historical data, the process that fits the artifact, and the live step that generates a prediction for a new store. Which statement most accurately distinguishes these concepts in the system?',
    th:'ทีมวิเคราะห์ข้อมูลของธุรกิจค้าปลีกกำลังจัดทำเอกสารอธิบายระบบพยากรณ์ความต้องการให้ผู้มีส่วนเกี่ยวข้องที่ไม่ใช่สายเทคนิค แต่เอกสารฉบับปัจจุบันสับสนระหว่างอัลกอริทึมที่ใช้เรียนรู้รูปแบบ ผลลัพธ์ของโมเดลที่ฝึกจากข้อมูลในอดีต กระบวนการที่ใช้ฝึกโมเดล และขั้นตอนที่นำโมเดลไปทำนายข้อมูลของสาขาใหม่ ข้อความใดแยกแนวคิดเหล่านี้ได้ถูกต้องที่สุด?',
    ask:'แยก Algorithm, Model, Training และ Inference ให้ถูกต้องในบริบทของระบบ ML.',
    choices:{A:'Training is the process of fitting a model with data, and inference is using the trained model on new input',B:'Inference is the process of updating model parameters, while training only stores raw data',C:'An algorithm is the final trained artifact, while a model is the procedure used to learn it',D:'A model and an algorithm are always identical terms and can be used interchangeably'},
    answer:['A'],
    why:{A:'ถูก เพราะ training คือช่วงที่เรียนรู้หรือปรับ parameters จากข้อมูล และ inference คือช่วงใช้โมเดลที่ฝึกแล้วกับ input ใหม่.',B:'ผิด เพราะการอัปเดต parameters เป็นหน้าที่ของ training ไม่ใช่ inference.',C:'ผิด เพราะ algorithm คือวิธีหรือขั้นตอนการเรียนรู้ ส่วน model คือ artifact/representation ที่ได้หลังฝึก.',D:'ผิด เพราะสองคำนี้เกี่ยวข้องกันแต่ไม่ใช่สิ่งเดียวกันเสมอ.'},
    cue:'Algorithm = วิธีเรียน, Training = ช่วงเรียน, Model = ของที่เรียนแล้ว, Inference = เอาไปใช้.'});

  add({objective:'1.1.1',target:'neural-network-deep-learning',
    q:'A manufacturing company has millions of labeled defect images and wants a vision system that can learn hierarchical visual patterns such as edges, textures, shapes, and complex defect combinations without manually defining every visual feature. The team is considering a model built from many stacked computational layers that learn representations from the images. Which concept best describes this approach?',
    th:'บริษัทผู้ผลิตมีภาพความเสียหายที่ติดป้ายกำกับไว้หลายล้านภาพ และต้องการระบบมองเห็นที่เรียนรู้รูปแบบของภาพเป็นลำดับชั้น เช่น ขอบ พื้นผิว รูปร่าง และการผสมกันของตำหนิที่ซับซ้อน โดยไม่ต้องกำหนดคุณลักษณะของภาพทั้งหมดด้วยมือ ทีมกำลังพิจารณาโมเดลที่ประกอบด้วยชั้นคำนวณจำนวนมากซึ่งเรียนรู้ representation จากภาพ แนวคิดใดอธิบายแนวทางนี้ได้ดีที่สุด?',
    ask:'ระบุว่าโมเดลหลายชั้นที่เรียนรู้ representation จากภาพจำนวนมากเป็นแนวคิดใด.',
    choices:{A:'Deep learning using neural networks',B:'Simple deterministic business rules',C:'Unsupervised clustering only',D:'A data cataloging workflow'},
    answer:['A'],
    why:{A:'ถูก เพราะ deep learning ใช้ neural networks หลายชั้นเพื่อเรียนรู้ representation ที่ซับซ้อนจากข้อมูลอย่างภาพ.',B:'ผิด เพราะ business rules ต้องกำหนด logic ด้วยมือและไม่ได้เรียนรู้ hierarchy ของ feature จากภาพ.',C:'ผิด เพราะโจทย์มี labeled images และอธิบาย network หลายชั้น ไม่ใช่เพียง clustering.',D:'ผิด เพราะ data cataloging เป็นงาน governance/metadata ไม่ใช่การเรียนรู้ภาพ.'},
    cue:'หลายชั้น + เรียน feature เองจากข้อมูลซับซ้อน = Deep learning.'});

  add({objective:'1.1.1',target:'bias-fairness-fit-terms',type:'multiple',
    q:'A lending team is reviewing an ML model before launch. The model fits the training data well, but reviewers also want to know whether outcomes differ unjustifiably across demographic groups and whether the training data or process contains systematic patterns that could favor one group. Which TWO concepts most directly address these fairness-related concerns rather than model fit alone? (Select TWO.)',
    th:'ทีมสินเชื่อกำลังทบทวนโมเดล ML ก่อนเปิดใช้งาน โมเดลสามารถเรียนรู้ข้อมูลฝึกได้ดี แต่ผู้ทบทวนต้องการทราบด้วยว่าผลลัพธ์แตกต่างกันอย่างไม่สมเหตุสมผลระหว่างกลุ่มประชากรหรือไม่ และข้อมูลหรือกระบวนการฝึกมีรูปแบบที่เอนเอียงไปสนับสนุนบางกลุ่มหรือไม่ แนวคิดใด 2 ข้อเกี่ยวข้องกับความกังวลด้านความเป็นธรรมเหล่านี้โดยตรง มากกว่าประเด็นเรื่องการ fit ของโมเดลเพียงอย่างเดียว?',
    ask:'เลือกแนวคิดที่เกี่ยวกับอคติและความเป็นธรรมระหว่างกลุ่ม ไม่ใช่เพียงความพอดีของโมเดล.',
    choices:{A:'Bias',B:'Fairness',C:'Inference latency',D:'Tokenization',E:'Batch size'},
    answer:['A','B'],
    why:{A:'ถูก เพราะ bias คือรูปแบบความเอนเอียงอย่างเป็นระบบที่อาจเกิดจากข้อมูล กระบวนการ หรือโมเดล.',B:'ถูก เพราะ fairness พิจารณาความเหมาะสมและความเท่าเทียมของผลลัพธ์ระหว่างกลุ่มที่เกี่ยวข้อง.',C:'ผิด เพราะ latency เป็น performance characteristic ของระบบ.',D:'ผิด เพราะ tokenization เป็นการแบ่งข้อความเป็นหน่วยที่โมเดลประมวลผล.',E:'ผิด เพราะ batch size เป็น training parameter ไม่ใช่ fairness concept.'},
    cue:'Bias = ความเอนเอียง, Fairness = ตรวจว่าผลลัพธ์ระหว่างกลุ่มเหมาะสมหรือไม่.'});

  add({objective:'1.1.3',target:'inference-mode-map',type:'matching',
    q:'A media company operates four different ML workloads and wants to choose an inference pattern for each one instead of forcing every workload onto the same hosting design. One workload processes millions of stored records overnight, one must answer interactive requests in milliseconds, one receives large individual jobs that can finish later, and one has short unpredictable traffic with long idle periods. Match each workload with the most appropriate inference mode.',
    th:'บริษัทสื่อมีงาน ML อยู่ 4 แบบและต้องการเลือกวิธีทำ inference ให้เหมาะกับแต่ละงาน แทนการบังคับให้ทุกงานใช้รูปแบบ hosting เดียวกัน งานหนึ่งประมวลผลข้อมูลที่เก็บไว้หลายล้านรายการในช่วงกลางคืน งานหนึ่งต้องตอบผู้ใช้แบบโต้ตอบภายในเวลาไม่กี่มิลลิวินาที งานหนึ่งรับงานรายชิ้นขนาดใหญ่ที่สามารถส่งผลกลับภายหลัง และอีกงานมี request สั้น ๆ ที่มาไม่แน่นอนและมีช่วงว่างยาว จงจับคู่แต่ละ workload กับ inference mode ที่เหมาะสมที่สุด.',
    ask:'เลือก Batch, Real-time, Asynchronous และ Serverless inference ให้ตรงกับรูปแบบ workload.',
    choices:{A:'Process a prepared offline dataset overnight',B:'Serve an interactive request with immediate response',C:'Accept one long-running large request and return the result later',D:'Handle short sporadic requests without maintaining continuously provisioned capacity'},
    matches:{'1':'Batch inference','2':'Real-time inference','3':'Asynchronous inference','4':'Serverless inference'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ A → Batch inference เพราะเป็น dataset ที่เตรียมไว้และประมวลผลแบบออฟไลน์ทั้งก้อน.','✅ B → Real-time inference เพราะต้องตอบ request ทันที.','✅ C → Asynchronous inference เพราะ request รายชิ้นใช้เวลานานและรับผลภายหลังได้.','✅ D → Serverless inference เพราะ traffic สั้น ไม่แน่นอน และไม่ต้องการ provision capacity ตลอดเวลา.'],
    cue:'Dataset ทั้งก้อน = Batch; ตอบทันที = Real-time; งานยาวรับผลทีหลัง = Async; traffic กระตุก = Serverless.'});

  add({objective:'1.1.4',target:'data-type-map',type:'matching',
    q:'A logistics company is inventorying the datasets that feed its AI projects because the data engineering team must choose different preparation and storage approaches for each source. The portfolio includes a customer table with a known churn outcome, a sequence of vehicle sensor measurements collected every minute, warehouse photographs, and free-form driver notes with no fixed schema. Match each example with the most appropriate data description.',
    th:'บริษัทโลจิสติกส์กำลังจัดทำบัญชีชุดข้อมูลที่ใช้ในโครงการ AI เพราะทีมวิศวกรรมข้อมูลต้องเลือกวิธีเตรียมและจัดเก็บข้อมูลให้เหมาะกับแต่ละแหล่ง ข้อมูลที่มีประกอบด้วยตารางลูกค้าซึ่งทราบผล churn แล้ว ชุดค่าจากเซนเซอร์รถที่บันทึกทุกนาที รูปถ่ายในคลังสินค้า และบันทึกข้อความอิสระจากพนักงานขับรถที่ไม่มี schema ตายตัว จงจับคู่แต่ละตัวอย่างกับคำอธิบายชนิดข้อมูลที่เหมาะสมที่สุด.',
    ask:'แยก labeled tabular, time-series, image และ unstructured text data.',
    choices:{A:'Customer rows with a known churn outcome',B:'Minute-by-minute vehicle sensor readings',C:'Warehouse photographs',D:'Free-form driver notes'},
    matches:{'1':'Labeled structured/tabular data','2':'Time-series data','3':'Image data','4':'Unstructured text data'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ A → Labeled structured/tabular เพราะมีคอลัมน์ชัดและ target outcome ที่ทราบแล้ว.','✅ B → Time-series เพราะค่าถูกเก็บตามลำดับเวลา.','✅ C → Image data เพราะข้อมูลหลักเป็นภาพ.','✅ D → Unstructured text เพราะเป็นข้อความอิสระที่ไม่มี schema ตายตัว.'],
    cue:'ตารางมี label / ตามเวลา / ภาพ / ข้อความอิสระ.'});

  add({objective:'1.1.5',target:'learning-type-map',type:'matching',
    q:'An enterprise AI team is comparing three projects that learn in fundamentally different ways. The first predicts loan default from labeled historical outcomes, the second discovers natural customer segments without any segment labels, and the third learns how to control warehouse robots by trying actions and receiving rewards or penalties. Match each project with the learning paradigm that best describes it.',
    th:'ทีม AI ขององค์กรกำลังเปรียบเทียบโครงการ 3 แบบที่มีวิธีการเรียนรู้แตกต่างกันโดยพื้นฐาน โครงการแรกทำนายการผิดนัดชำระหนี้จากข้อมูลในอดีตที่มี label ผลลัพธ์ โครงการที่สองค้นหากลุ่มลูกค้าตามธรรมชาติโดยไม่มี label ของกลุ่ม และโครงการที่สามเรียนรู้การควบคุมหุ่นยนต์ในคลังสินค้าด้วยการลองทำ action และรับ reward หรือ penalty จงจับคู่แต่ละโครงการกับรูปแบบการเรียนรู้ที่เหมาะสม.',
    ask:'แยก supervised, unsupervised และ reinforcement learning จากรูปแบบข้อมูลและ feedback.',
    choices:{A:'Predict default using historical examples with known outcomes',B:'Discover customer groups without predefined labels',C:'Learn robot actions through rewards and penalties'},
    matches:{'1':'Supervised learning','2':'Unsupervised learning','3':'Reinforcement learning'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ A → Supervised learning เพราะมี labeled outcomes ให้เรียนรู้.','✅ B → Unsupervised learning เพราะไม่มี label และต้องค้นหาโครงสร้างจากข้อมูลเอง.','✅ C → Reinforcement learning เพราะเรียนจาก action และ reward/penalty.'],
    cue:'มี label = Supervised; ไม่มี label หา pattern = Unsupervised; Action + Reward = RL.'});

  add({objective:'1.1.2',target:'ai-ml-genai-dl-differences',
    q:'A business leader says that any AI system that uses a neural network must also be generative AI. An architect needs to correct the statement before the company chooses technology for an image classifier and a marketing-content generator. Which explanation most accurately describes the relationship among AI, ML, deep learning, and generative AI?',
    th:'ผู้บริหารธุรกิจกล่าวว่าระบบ AI ใดก็ตามที่ใช้ neural network จะต้องเป็น generative AI ด้วย สถาปนิกต้องแก้ความเข้าใจนี้ก่อนที่บริษัทจะเลือกเทคโนโลยีสำหรับ image classifier และระบบสร้างข้อความการตลาด คำอธิบายใดอธิบายความสัมพันธ์ระหว่าง AI, ML, deep learning และ generative AI ได้ถูกต้องที่สุด?',
    ask:'อธิบายว่าการใช้ neural network ไม่ได้ทำให้ระบบทุกตัวเป็น GenAI และแยกความสัมพันธ์ของกลุ่มแนวคิดให้ถูกต้อง.',
    choices:{A:'Deep learning can power discriminative or generative systems, so not every neural-network model is generative AI',B:'Every deep-learning model must generate new content and therefore is always GenAI',C:'Machine learning is broader than AI and contains all AI systems',D:'Generative AI cannot use neural networks because it relies only on deterministic rules'},
    answer:['A'],
    why:{A:'ถูก เพราะ deep learning เป็นวิธีสร้างโมเดลด้วย neural networks และสามารถใช้ทั้งงานจำแนก/ทำนายหรือสร้างเนื้อหาได้.',B:'ผิด เพราะ neural network สามารถใช้ทำ classification, regression และงานอื่นที่ไม่ใช่ generation.',C:'ผิด เพราะ AI เป็นขอบเขตกว้างกว่า ML ไม่ใช่กลับกัน.',D:'ผิด เพราะ GenAI สมัยใหม่จำนวนมากใช้ neural networks เช่น transformers และ diffusion models.'},
    cue:'Deep learning เป็นเทคนิค; Generative AI เป็นลักษณะงาน/ความสามารถในการสร้าง ไม่ใช่ทุก DL จะเป็น GenAI.'});

  add({objective:'1.1.2',target:'agentic-vs-generative',
    q:'A procurement chatbot can draft natural-language summaries, but it cannot decide which purchasing system to call, cannot remember prior steps, and cannot continue a multi-step task without a user explicitly prompting each action. Management wants to know why this system is generative but not yet agentic. Which explanation is most accurate?',
    th:'แชตบอตฝ่ายจัดซื้อสามารถร่างสรุปเป็นภาษาธรรมชาติได้ แต่ไม่สามารถตัดสินใจเองว่าจะเรียกระบบจัดซื้อใด ไม่สามารถจำขั้นตอนก่อนหน้า และไม่สามารถทำงานหลายขั้นต่อเนื่องได้หากผู้ใช้ไม่สั่งทีละ action ผู้บริหารต้องการทราบว่าทำไมระบบนี้จึงเป็น generative แต่ยังไม่เป็น agentic คำอธิบายใดถูกต้องที่สุด?',
    ask:'แยก GenAI ที่สร้างเนื้อหาออกจาก Agentic AI ที่วางแผน ใช้ tools และทำงานหลายขั้นเพื่อบรรลุ goal.',
    choices:{A:'Generative capability creates content, while agentic behavior adds goal-directed planning, tool use, memory, and multi-step execution',B:'Agentic AI is only another name for text generation and does not require tools or planning',C:'A system becomes agentic whenever it uses a large language model, even if it only returns one response',D:'Generative AI and agentic AI are mutually exclusive and cannot exist in the same application'},
    answer:['A'],
    why:{A:'ถูก เพราะ agentic behavior เพิ่มการวางแผน เลือก action/tool ใช้ memory และทำงานหลายขั้นจาก goal.',B:'ผิด เพราะ agentic AI มากกว่าแค่การสร้างข้อความ.',C:'ผิด เพราะการใช้ LLM อย่างเดียวไม่รับประกันพฤติกรรมแบบ agent.',D:'ผิด เพราะแอป agentic จำนวนมากใช้ GenAI/LLM เป็นองค์ประกอบหลัก.'},
    cue:'GenAI = สร้าง; Agentic AI = สร้าง + วางแผน + ใช้เครื่องมือ + ลงมือจนจบ goal.'});

  add({objective:'1.1.1',target:'model-vs-algorithm',
    q:'A risk team reviews an ML project and finds a document saying “gradient boosting is the model we deploy” in one section and “the trained artifact with learned trees is the algorithm” in another. The team wants terminology that distinguishes the learning procedure from the trained result that serves predictions. Which statement should replace the confusing wording?',
    th:'ทีมความเสี่ยงตรวจโครงการ ML และพบว่าเอกสารส่วนหนึ่งเขียนว่า “gradient boosting คือโมเดลที่เรานำไป deploy” ขณะที่อีกส่วนเรียก trained artifact ที่มีต้นไม้ซึ่งเรียนรู้แล้วว่า “algorithm” ทีมต้องการใช้คำให้แยกวิธีการเรียนรู้ออกจากผลลัพธ์ที่ฝึกแล้วและนำไปใช้ทำนาย ข้อความใดควรใช้แทนถ้อยคำที่สับสนนี้?',
    ask:'แยกความหมายของ algorithm กับ trained model artifact.',
    choices:{A:'The algorithm defines the learning procedure; the trained model contains the learned parameters or structures used for prediction',B:'The model is the source dataset and the algorithm is the production endpoint',C:'Algorithm and model must always refer to the exact same object',D:'The algorithm exists only after deployment, while the model exists only before training'},
    answer:['A'],
    why:{A:'ถูก เพราะ algorithm คือวิธีการเรียนรู้/คำนวณ ส่วน model คือ representation หรือ parameters ที่ได้หลัง training.',B:'ผิด เพราะ dataset และ endpoint เป็นคนละองค์ประกอบกับ algorithm/model.',C:'ผิด เพราะอาจพูดอย่างไม่เป็นทางการได้ แต่เชิงแนวคิดสองคำนี้ไม่เท่ากันเสมอ.',D:'ผิด เพราะ algorithm ถูกใช้ระหว่าง training และ model ที่ฝึกแล้วถูกใช้หลัง training.'},
    cue:'Algorithm = recipe; Model = สิ่งที่ recipe เรียนออกมา.'});

  add({objective:'1.2.1',target:'ai-value-human-scale-automation',type:'multiple',
    q:'A national insurer has thousands of claims arriving each hour. Human adjusters spend time reading repetitive documents, ranking cases by urgency, and checking routine fields before they can focus on complex exceptions. Leadership wants AI to support employees rather than remove all human judgment. Which THREE benefits are the strongest reasons to introduce AI in this scenario? (Select THREE.)',
    th:'บริษัทประกันระดับประเทศได้รับเคลมหลายพันรายการต่อชั่วโมง เจ้าหน้าที่ต้องเสียเวลาอ่านเอกสารซ้ำ ๆ จัดลำดับเคสตามความเร่งด่วน และตรวจข้อมูลพื้นฐานก่อนจะได้ใช้เวลากับกรณีซับซ้อน ฝ่ายบริหารต้องการให้ AI สนับสนุนพนักงาน ไม่ใช่ยกเลิกการตัดสินใจของมนุษย์ทั้งหมด ประโยชน์ใด 3 ข้อเป็นเหตุผลที่ชัดที่สุดในการนำ AI มาใช้ในสถานการณ์นี้?',
    ask:'เลือกคุณค่าของ AI ด้านช่วยมนุษย์ เพิ่มความสามารถในการรองรับปริมาณงาน และทำงานซ้ำอัตโนมัติ.',
    choices:{A:'Assist human decision making by surfacing relevant information',B:'Scale processing across a much larger volume of claims',C:'Automate repetitive checks and document triage',D:'Guarantee that every future claim decision is legally correct',E:'Eliminate the need for governance and human review'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ AI ช่วยสรุป/จัดข้อมูลให้มนุษย์ตัดสินใจได้เร็วขึ้น.',B:'ถูก เพราะระบบสามารถประมวลผลปริมาณงานได้มากกว่าการทำด้วยคนล้วน.',C:'ถูก เพราะงานตรวจซ้ำและ triage เป็นงานที่เหมาะกับ automation.',D:'ผิด เพราะ AI ไม่รับประกันความถูกต้องทางกฎหมายทุกกรณี.',E:'ผิด เพราะการใช้ AI ยังต้องมี governance และ human oversight ตามความเหมาะสม.'},
    cue:'คุณค่าหลัก = ช่วยคน + scale + automate ไม่ใช่รับประกันความถูกต้อง 100%.'});

  add({objective:'1.2.2',target:'ai-not-appropriate-exact-outcome',
    q:'A payroll department must calculate a statutory deduction from a published formula with fixed brackets. Auditors require that the same inputs always produce exactly the same output and that every step can be reproduced years later. The business already knows the complete rule and does not need a prediction. Which approach is most appropriate?',
    th:'ฝ่ายเงินเดือนต้องคำนวณรายการหักตามกฎหมายจากสูตรที่เผยแพร่และมีช่วงค่าตายตัว ผู้ตรวจสอบกำหนดว่า input เดิมต้องให้ output เดิมทุกครั้ง และต้องสามารถทำซ้ำขั้นตอนย้อนหลังได้หลายปี ธุรกิจรู้กฎทั้งหมดอยู่แล้วและไม่ได้ต้องการการทำนาย แนวทางใดเหมาะสมที่สุด?',
    ask:'ตัดสินว่าเมื่อมีสูตรแน่นอนและต้องการผล exact/reproducible ควรใช้ AI/ML หรือกฎ deterministic.',
    choices:{A:'Implement deterministic business rules from the published formula',B:'Train a regression model on previous payroll calculations',C:'Use a foundation model with several payroll examples',D:'Use clustering to discover employee groups'},
    answer:['A'],
    why:{A:'ถูก เพราะสูตร authoritative มีอยู่แล้วและต้อง reproducible จึงควรใช้ deterministic logic.',B:'ผิด เพราะ regression ประมาณค่าจากข้อมูล ทั้งที่คำตอบ exact ถูกกำหนดด้วยสูตร.',C:'ผิด เพราะ FM เพิ่ม nondeterminism และไม่จำเป็น.',D:'ผิด เพราะ clustering ใช้ค้นกลุ่ม ไม่ได้คำนวณสูตร.'},
    cue:'รู้สูตร exact อยู่แล้ว → ใช้ Rules ไม่ต้องให้ ML เดา.'});

  add({objective:'1.2.2',target:'ai-cost-benefit-not-appropriate',
    q:'A small branch office wants to automate a task that occurs only twice a year, takes one employee about ten minutes, and already has a reliable spreadsheet procedure with no meaningful errors. Building and governing an ML solution would require new data pipelines, monitoring, security review, and recurring operating cost. What should the team conclude from a cost-benefit perspective?',
    th:'สำนักงานสาขาขนาดเล็กต้องการทำให้งานหนึ่งเป็นอัตโนมัติ แต่งานนี้เกิดขึ้นเพียงปีละสองครั้ง ใช้เวลาพนักงานประมาณสิบ นาที และมีขั้นตอนใน spreadsheet ที่เชื่อถือได้อยู่แล้วโดยแทบไม่มีข้อผิดพลาด หากสร้าง ML solution จะต้องเพิ่ม data pipeline, monitoring, security review และค่าใช้จ่ายในการดูแลต่อเนื่อง ทีมควรสรุปอย่างไรเมื่อพิจารณา cost-benefit?',
    ask:'ตัดสินว่า AI/ML คุ้มค่าหรือไม่เมื่อประโยชน์น้อยกว่าต้นทุนและความซับซ้อนในการดูแล.',
    choices:{A:'Do not use ML unless the expected benefit justifies the added lifecycle and operating cost',B:'Use ML because every manual task should be replaced by a predictive model',C:'Choose the largest foundation model to maximize technical capability',D:'Train a custom model even if there is no measurable business objective'},
    answer:['A'],
    why:{A:'ถูก เพราะการเลือก AI ต้องพิจารณาประโยชน์เทียบกับต้นทุน การดูแล และความเสี่ยง ไม่ใช่ใช้ AI ทุกกรณี.',B:'ผิด เพราะ automation ธรรมดาหรือ process เดิมอาจเหมาะกว่าเมื่อ workload เล็กมาก.',C:'ผิด เพราะ model ใหญ่เพิ่ม cost โดยไม่ได้แก้ business case ที่ไม่คุ้ม.',D:'ผิด เพราะไม่มี objective/benefit ที่รองรับต้นทุน training.'},
    cue:'AI ไม่ใช่คำตอบเสมอ—ถ้า cost + governance > value ให้ใช้วิธีที่ง่ายกว่า.'});

  add({objective:'1.2.3',target:'regression-use-case',
    q:'A property company has historical transactions with features such as neighborhood, floor area, age of the building, renovation status, and the actual selling price. The company wants a model that produces an estimated selling price as a continuous numeric value for each new property rather than assigning the property to a category. Which ML technique is the best fit?',
    th:'บริษัทอสังหาริมทรัพย์มีข้อมูลธุรกรรมในอดีตซึ่งประกอบด้วยย่าน พื้นที่ใช้สอย อายุอาคาร สถานะการปรับปรุง และราคาขายจริง บริษัทต้องการโมเดลที่ให้ราคาขายโดยประมาณเป็นค่าตัวเลขต่อเนื่องสำหรับอสังหาริมทรัพย์แต่ละรายการใหม่ แทนการจัดอสังหาริมทรัพย์ลงในหมวดหมู่ เทคนิค ML ใดเหมาะที่สุด?',
    ask:'เลือกเทคนิคสำหรับทำนายค่าตัวเลขต่อเนื่อง.',
    choices:{A:'Regression',B:'Classification',C:'Time-series anomaly detection only',D:'Clustering'},
    answer:['A'],
    why:{A:'ถูก เพราะ target คือราคาซึ่งเป็นค่าตัวเลขต่อเนื่อง.',B:'ผิด เพราะ classification ทำนาย label/หมวดหมู่.',C:'ผิด เพราะ anomaly detection มุ่งหาค่าหรือเหตุการณ์ผิดปกติ ไม่ใช่ประมาณราคาต่อเนื่องของทุก property.',D:'ผิด เพราะ clustering หาโครงสร้างกลุ่มเมื่อไม่มี target label.'},
    cue:'ทำนาย “ตัวเลขต่อเนื่อง” = Regression.'});

  add({objective:'1.2.3',target:'classification-use-case',
    q:'A support center has thousands of historical tickets labeled as billing, technical issue, account access, cancellation, or other. New tickets arrive as text, and the business wants each ticket automatically assigned to exactly one of these known categories so it can be routed to the correct team. Which ML technique best fits the target?',
    th:'ศูนย์บริการมี ticket ในอดีตหลายพันรายการที่ติด label ว่าเป็น billing, technical issue, account access, cancellation หรือ other เมื่อมี ticket ใหม่เข้ามาเป็นข้อความ ธุรกิจต้องการให้ระบบจัดแต่ละ ticket ลงในหนึ่งในหมวดหมู่ที่รู้จักอยู่แล้วโดยอัตโนมัติ เพื่อส่งต่อไปยังทีมที่ถูกต้อง เทคนิค ML ใดเหมาะกับ target นี้ที่สุด?',
    ask:'เลือกเทคนิคสำหรับทำนายหนึ่งในหมวดหมู่ที่กำหนดไว้ล่วงหน้า.',
    choices:{A:'Classification',B:'Regression',C:'Clustering',D:'Forecasting'},
    answer:['A'],
    why:{A:'ถูก เพราะ output เป็น label จากชุดหมวดหมู่ที่กำหนดไว้.',B:'ผิด เพราะ regression ทำนายค่าตัวเลขต่อเนื่อง.',C:'ผิด เพราะ clustering ใช้ค้นกลุ่มเมื่อไม่มี predefined labels.',D:'ผิด เพราะ forecasting เน้นค่าที่เปลี่ยนตามเวลาในอนาคต.'},
    cue:'รู้ class ล่วงหน้าและเลือก class ให้ input ใหม่ = Classification.'});

  add({objective:'1.2.3',target:'clustering-use-case',
    q:'A streaming company has millions of customer behavior records but no predefined segment labels. Marketing wants to discover natural groups of users with similar viewing patterns so the team can later design campaigns for those groups. The immediate goal is not to predict a known class but to uncover structure that already exists in the data. Which technique is most appropriate?',
    th:'บริษัทสตรีมมิงมีข้อมูลพฤติกรรมลูกค้าหลายล้านรายการ แต่ไม่มี segment label ที่กำหนดไว้ล่วงหน้า ฝ่ายการตลาดต้องการค้นหากลุ่มผู้ใช้ตามธรรมชาติที่มีรูปแบบการรับชมคล้ายกัน เพื่อออกแบบแคมเปญให้แต่ละกลุ่มในภายหลัง เป้าหมายทันทีไม่ใช่การทำนาย class ที่รู้แล้ว แต่เป็นการค้นหาโครงสร้างที่มีอยู่ในข้อมูล เทคนิคใดเหมาะสมที่สุด?',
    ask:'เลือกเทคนิคเมื่อไม่มี label และต้องการค้นหากลุ่มตามธรรมชาติ.',
    choices:{A:'Clustering',B:'Classification',C:'Regression',D:'Deterministic rules'},
    answer:['A'],
    why:{A:'ถูก เพราะ clustering เป็น unsupervised technique สำหรับค้นหากลุ่มจาก similarity โดยไม่มี labels.',B:'ผิด เพราะ classification ต้องมี known labels สำหรับ training.',C:'ผิด เพราะ regression ทำนายตัวเลขต่อเนื่อง.',D:'ผิด เพราะ rules ต้องกำหนด logic เอง ไม่ได้ค้น structure จากข้อมูล.'},
    cue:'ไม่มี label + อยากรู้ว่ามีกลุ่มอะไร = Clustering.'});

  add({objective:'1.2.4',target:'real-world-ai-use-cases',type:'matching',
    q:'A diversified company is launching several AI initiatives at the same time and wants project managers to use consistent terminology when requesting technical support. The initiatives include identifying defects in factory photos, extracting meaning from customer emails, transcribing call-center audio, suggesting products for each shopper, and estimating next quarter demand from historical patterns. Match each initiative with the most appropriate AI application category.',
    th:'บริษัทที่มีหลายธุรกิจกำลังเริ่มโครงการ AI หลายโครงการพร้อมกัน และต้องการให้ผู้จัดการโครงการใช้คำศัพท์สอดคล้องกันเมื่อต้องประสานงานกับทีมเทคนิค โครงการเหล่านี้ประกอบด้วยการตรวจตำหนิจากภาพโรงงาน การทำความเข้าใจอีเมลลูกค้า การถอดเสียงจากคอลเซ็นเตอร์ การแนะนำสินค้าให้ผู้ซื้อแต่ละคน และการประมาณความต้องการในไตรมาสหน้าจากรูปแบบในอดีต จงจับคู่แต่ละโครงการกับประเภทการใช้งาน AI ที่เหมาะสมที่สุด.',
    ask:'จับคู่ Computer Vision, NLP, Speech Recognition, Recommendation และ Forecasting กับ use case.',
    choices:{A:'Identify visible defects in production images',B:'Extract entities and sentiment from customer emails',C:'Convert recorded calls into text',D:'Rank products likely to interest each shopper',E:'Estimate future demand from historical patterns'},
    matches:{'1':'Computer vision','2':'Natural language processing (NLP)','3':'Speech recognition','4':'Recommendation system','5':'Forecasting'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ A → Computer vision เพราะข้อมูลหลักเป็นภาพ.','✅ B → NLP เพราะต้องเข้าใจข้อความและความหมาย.','✅ C → Speech recognition เพราะแปลงเสียงพูดเป็นข้อความ.','✅ D → Recommendation system เพราะจัดอันดับสิ่งที่เหมาะกับผู้ใช้แต่ละคน.','✅ E → Forecasting เพราะคาดการณ์ค่าหรือเหตุการณ์ในอนาคตจากข้อมูลตามเวลา.'],
    cue:'ภาพ / ภาษา / เสียง / แนะนำ / อนาคต.'});

  add({objective:'1.2.4',target:'knowledge-base-vs-agentic-application',
    q:'An engineering organization wants two different AI capabilities. One should answer technical questions by retrieving trusted internal manuals and citing the relevant sections. The other should accept a goal such as “open a maintenance ticket, check parts availability, and schedule a technician,” then choose tools and perform several steps. Which pairing best describes these two application patterns?',
    th:'องค์กรวิศวกรรมต้องการความสามารถ AI สองแบบ แบบแรกต้องตอบคำถามทางเทคนิคโดยค้นคู่มือภายในที่เชื่อถือได้และอ้างอิงส่วนที่เกี่ยวข้อง ส่วนแบบที่สองต้องรับ goal เช่น “เปิด maintenance ticket, ตรวจอะไหล่ และนัดช่าง” แล้วเลือก tools และทำหลายขั้นตอน ข้อใดจับคู่รูปแบบการใช้งานทั้งสองได้ถูกต้องที่สุด?',
    ask:'แยก Knowledge Base/RAG สำหรับตอบจากข้อมูล กับ Agentic AI สำหรับทำ multi-step actions.',
    choices:{A:'Knowledge-base/RAG assistant for the first; agentic AI for the second',B:'Agentic AI for the first; regression for the second',C:'Clustering for the first; classification for the second',D:'Batch inference for both because both use stored data'},
    answer:['A'],
    why:{A:'ถูก เพราะงานแรกเน้น retrieval/grounding จากแหล่งความรู้ ส่วนงานที่สองต้อง plan, choose tools และลงมือหลายขั้น.',B:'ผิด เพราะ regression ไม่เหมาะกับ workflow action และ agentic AI ไม่จำเป็นสำหรับ Q&A retrieval อย่างเดียว.',C:'ผิด เพราะ clustering/classification ไม่ตอบ pattern ทั้งสองนี้.',D:'ผิด เพราะ batch inference ไม่ได้อธิบาย knowledge grounding หรือ dynamic action loop.'},
    cue:'ตอบจากเอกสาร = Knowledge Base/RAG; ทำงานหลายขั้น = Agent.'});

  add({objective:'1.2.5',target:'managed-ai-services-map',type:'matching',
    q:'A customer-experience platform needs several managed AI capabilities but the team does not want to build each model from scratch. The platform must transcribe calls, translate messages, analyze text sentiment and entities, power a conversational voice/text interface, and convert written responses to natural-sounding speech. Match each requirement with the AWS managed AI service that directly provides the capability.',
    th:'แพลตฟอร์มด้านประสบการณ์ลูกค้าต้องการความสามารถ AI แบบ managed หลายอย่าง แต่ทีมไม่ต้องการสร้างโมเดลแต่ละตัวเองตั้งแต่ต้น แพลตฟอร์มต้องถอดเสียงการโทร แปลข้อความ วิเคราะห์ sentiment และ entities ของข้อความ สร้างส่วนติดต่อสนทนาด้วยเสียง/ข้อความ และแปลงข้อความตอบกลับให้เป็นเสียงพูดที่เป็นธรรมชาติ จงจับคู่แต่ละ requirement กับ AWS managed AI service ที่ให้ความสามารถนั้นโดยตรง.',
    ask:'จับคู่ Transcribe, Translate, Comprehend, Lex และ Polly กับความสามารถหลัก.',
    choices:{A:'Convert call audio into text',B:'Translate written messages between languages',C:'Analyze text for sentiment and entities',D:'Build conversational voice/text interfaces',E:'Synthesize natural-sounding speech from text'},
    matches:{'1':'Amazon Transcribe','2':'Amazon Translate','3':'Amazon Comprehend','4':'Amazon Lex','5':'Amazon Polly'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ Audio→text = Amazon Transcribe.','✅ Language→language text = Amazon Translate.','✅ Sentiment/entities = Amazon Comprehend.','✅ Conversational bot interface = Amazon Lex.','✅ Text→speech = Amazon Polly.'],
    cue:'Transcribe ฟัง, Translate แปล, Comprehend เข้าใจ, Lex สนทนา, Polly พูด.'});

  add({objective:'1.2.6',target:'traditional-ml-vs-fm-regulatory',
    q:'A regulated insurer needs to predict whether a policyholder will renew. The inputs are stable tabular fields, millions of labeled historical examples are available, auditors require clear feature-level explanations, and the company wants low-cost inference at very high volume. The task does not require free-form text generation or broad world knowledge. Which approach is most appropriate?',
    th:'บริษัทประกันที่อยู่ภายใต้ข้อกำกับต้องทำนายว่าผู้ถือกรมธรรม์จะต่ออายุหรือไม่ ข้อมูลนำเข้าเป็นฟิลด์แบบตารางที่มีรูปแบบคงที่ มีตัวอย่างในอดีตที่ติด label แล้วหลายล้านรายการ ผู้ตรวจสอบต้องการคำอธิบายระดับ feature ที่ชัดเจน และบริษัทต้องการ inference ต้นทุนต่ำในปริมาณสูง งานนี้ไม่ต้องสร้างข้อความอิสระและไม่ต้องใช้ความรู้กว้างของโลก แนวทางใดเหมาะสมที่สุด?',
    ask:'เลือก Traditional ML หรือ FM โดยพิจารณา structured data, explainability, cost และลักษณะงาน.',
    choices:{A:'A traditional supervised ML classifier',B:'A general-purpose FM prompted with examples',C:'A RAG application over company documents',D:'A multimodal generative model'},
    answer:['A'],
    why:{A:'ถูก เพราะเป็น fixed labeled prediction บน tabular data และต้องการ explainability/low cost ที่ scale สูง.',B:'ผิด เพราะ FM ทำได้แต่เพิ่ม cost/complexity โดยไม่มี generative requirement.',C:'ผิด เพราะ RAG ใช้ knowledge retrieval ไม่ใช่ตัวหลักสำหรับ supervised tabular classification.',D:'ผิด เพราะไม่มี requirement ด้าน multimodal generation.'},
    cue:'ตาราง + labels + งานแคบ + explainability + volume สูง = Traditional ML.'});

  add({objective:'1.2.6',target:'fm-vs-traditional-unstructured-generation',
    q:'A legal-operations team receives long free-form emails, scanned documents, and attachments from clients. The system must understand the mixed unstructured information, summarize the situation, answer follow-up questions, and draft a customized response without relying on a fixed set of output classes. The team can tolerate probabilistic language generation but still plans human review. Which approach is the better fit?',
    th:'ทีมปฏิบัติการด้านกฎหมายได้รับอีเมลข้อความอิสระ เอกสารสแกน และไฟล์แนบจากลูกค้า ระบบต้องเข้าใจข้อมูลที่ไม่มีโครงสร้างหลายรูปแบบ สรุปสถานการณ์ ตอบคำถามต่อเนื่อง และร่างคำตอบที่ปรับตามแต่ละเคสโดยไม่ได้อาศัยชุด output class แบบตายตัว ทีมยอมรับการสร้างภาษาที่เป็น probabilistic ได้และยังวางแผนให้มนุษย์ตรวจทาน แนวทางใดเหมาะสมกว่า?',
    ask:'เลือก FM หรือ Traditional ML เมื่อโจทย์ต้องเข้าใจ unstructured context และสร้างคำตอบปลายเปิด.',
    choices:{A:'A suitable foundation model application',B:'A single fixed-label tabular classifier',C:'A linear regression model',D:'A deterministic rules table with no language model'},
    answer:['A'],
    why:{A:'ถูก เพราะโจทย์ต้องเข้าใจ unstructured multimodal-like inputs และสร้างคำตอบภาษาปลายเปิด.',B:'ผิด เพราะ fixed-label classifier ไม่ตอบ requirement การสรุปและร่างข้อความ.',C:'ผิด เพราะ regression ใช้ทำนายตัวเลขต่อเนื่อง.',D:'ผิด เพราะ rules อย่างเดียวไม่ยืดหยุ่นพอสำหรับ free-form understanding/generation.'},
    cue:'Unstructured context + open-ended generation = FM เหมาะกว่า.'});

  add({objective:'1.3.1',target:'ml-pipeline-components',type:'ordering',
    q:'A bank is formalizing a repeatable ML development process after teams repeatedly trained models before checking data quality or defining how success would be measured. The new process requires an ordered path from understanding and preparing data through training, tuning, evaluation, production release, and operational monitoring. Order the following stages in a sensible end-to-end lifecycle.',
    th:'ธนาคารกำลังจัดทำกระบวนการพัฒนา ML ที่ทำซ้ำได้ หลังพบว่าหลายทีมเริ่ม train model ก่อนตรวจคุณภาพข้อมูลหรือกำหนดวิธีวัดความสำเร็จ กระบวนการใหม่ต้องมีลำดับตั้งแต่ทำความเข้าใจและเตรียมข้อมูล ไปจนถึง training, tuning, evaluation, การนำขึ้น production และ operational monitoring จงเรียงขั้นตอนต่อไปนี้ให้เป็น lifecycle ที่สมเหตุสมผล.',
    ask:'เรียง pipeline ตั้งแต่ Data/EDA ไปจนถึง Monitor โดยไม่สลับ Evaluate/Deploy.',
    choices:{A:'Evaluate the selected model against defined criteria',B:'Deploy the approved model to production',C:'Collect, explore, clean, and engineer the data',D:'Train and tune candidate models',E:'Monitor production quality and drift'},
    answer:['C','D','A','B','E'],
    explain:['✅ ลำดับคือ Data/EDA/Preprocess/Feature → Train/Tune → Evaluate → Deploy → Monitor.','การประเมินต้องเกิดก่อน production deployment เพื่อไม่ปล่อยโมเดลที่ยังไม่ผ่านเกณฑ์.','Monitoring อยู่หลัง deployment เพื่อดู performance, drift และ incident ในโลกจริง.'],
    cue:'Data → Train → Check → Ship → Watch.'});

  add({objective:'1.3.2',target:'fm-source-open-pretrained-vs-custom',
    q:'A research team is deciding how to obtain a foundation model for a specialized project. One option is to start from an existing open or commercially available pre-trained model and adapt it. Another option is to collect massive corpora and train a new foundation model from the beginning. The team wants to understand the core tradeoff before budgeting. Which statement is most accurate?',
    th:'ทีมวิจัยกำลังตัดสินใจว่าจะได้ foundation model สำหรับโครงการเฉพาะทางมาอย่างไร ทางเลือกหนึ่งคือเริ่มจากโมเดลที่ pre-trained แล้วซึ่งเป็น open source หรือมีให้ใช้งานเชิงพาณิชย์และนำมาปรับต่อ อีกทางเลือกคือรวบรวม corpus ขนาดใหญ่มากและ train foundation model ใหม่ตั้งแต่ต้น ทีมต้องการเข้าใจ tradeoff หลักก่อนจัดงบประมาณ ข้อใดถูกต้องที่สุด?',
    ask:'แยกการใช้ pre-trained model ที่มีอยู่กับการ train custom FM ตั้งแต่ต้นในแง่ effort/cost/control.',
    choices:{A:'Starting from a pre-trained model is usually faster and less resource-intensive, while training a custom FM from scratch requires far more data and compute but offers more control',B:'Training from scratch always costs less because no model provider is involved',C:'A pre-trained model cannot be customized for a domain after it is obtained',D:'Open-source pre-trained models are the same thing as deterministic business rules'},
    answer:['A'],
    why:{A:'ถูก เพราะ pre-trained model ลดงาน pre-training ขนาดใหญ่ ส่วน custom training ให้ control มากขึ้นแต่ใช้ data/compute/skills สูง.',B:'ผิด เพราะ pre-training FM จาก scratch เป็นงาน resource-intensive มาก.',C:'ผิด เพราะ pre-trained models สามารถ fine-tune/adapt หรือใช้ RAG ได้ตาม capability.',D:'ผิด เพราะ model ที่เรียนรู้จากข้อมูลไม่ใช่ deterministic rules.'},
    cue:'มีของ pre-trained = เร็ว/ถูกกว่า; train FM ใหม่ = control มากแต่ data+compute สูงมาก.'});

  add({objective:'1.3.3',target:'managed-vs-self-hosted-api',
    q:'A startup needs to add text generation to an application quickly and has a small platform team. It prefers a managed API where the provider operates the underlying model-serving infrastructure. A different internal research group needs low-level control over the runtime, container, scaling behavior, and model files and is willing to operate the serving stack. Which statement best distinguishes the two production approaches?',
    th:'สตาร์ตอัปต้องเพิ่มความสามารถสร้างข้อความลงในแอปอย่างรวดเร็วและมีทีมแพลตฟอร์มขนาดเล็ก จึงต้องการ managed API ที่ผู้ให้บริการดูแลโครงสร้างพื้นฐานสำหรับ serving model ให้ ส่วนกลุ่มวิจัยภายในอีกกลุ่มต้องการควบคุม runtime, container, การ scale และไฟล์โมเดลระดับลึก และยอมดูแล serving stack เอง ข้อใดแยกแนวทาง production สองแบบนี้ได้ถูกต้องที่สุด?',
    ask:'แยก Managed API service กับ Self-hosted API ตามระดับ operational responsibility และ control.',
    choices:{A:'Managed APIs reduce infrastructure operations, while self-hosting provides more runtime control but adds operational responsibility',B:'Self-hosting removes all infrastructure responsibility because the customer owns the model',C:'Managed APIs always allow arbitrary access to underlying model weights and containers',D:'The two approaches have identical operational tradeoffs'},
    answer:['A'],
    why:{A:'ถูก เพราะ managed service ลดงานดูแล serving infrastructure ส่วน self-hosting ให้ control มากขึ้นแต่ต้องรับผิดชอบ operation มากขึ้น.',B:'ผิด เพราะ self-hosting เพิ่มภาระเรื่อง compute, scaling, patching และ availability.',C:'ผิด เพราะ managed APIs โดยทั่วไปซ่อน infrastructure/weights ตาม service design.',D:'ผิด เพราะ tradeoff หลักคือ control เทียบกับ operational burden.'},
    cue:'Managed = ดูแลง่าย; Self-hosted = คุมได้มากแต่ต้องดูแลเองมาก.'});

  add({objective:'1.3.4',target:'aws-ai-pipeline-service-roles',type:'matching',
    q:'A CIO wants teams to stop treating all AWS AI offerings as interchangeable. During planning, five groups describe different needs: managed FM APIs for a GenAI app, end-to-end ML development for data scientists, enterprise AI assistance over company information, AI-powered business research/workflows, and a spec-driven development environment for software teams. Match each need with the AWS offering that most directly aligns with it.',
    th:'CIO ต้องการให้แต่ละทีมหยุดมอง AWS AI offerings ว่าใช้แทนกันได้ทั้งหมด ระหว่างวางแผน มี 5 กลุ่มอธิบายความต้องการต่างกัน ได้แก่ managed FM APIs สำหรับ GenAI app, การพัฒนา ML แบบ end-to-end สำหรับ data scientists, enterprise AI assistant ที่ใช้ข้อมูลขององค์กร, งานวิจัยและ workflow ทางธุรกิจที่ขับเคลื่อนด้วย AI และสภาพแวดล้อมพัฒนาซอฟต์แวร์แบบ spec-driven จงจับคู่แต่ละความต้องการกับ AWS offering ที่ตรงที่สุด.',
    ask:'แยกบทบาท Amazon Bedrock, SageMaker AI, Amazon Q, Amazon Quick และ Kiro.',
    choices:{A:'Managed access to foundation models through APIs',B:'Build, train, tune, and manage ML workloads for data science teams',C:'Enterprise AI assistance grounded in organizational information',D:'AI-powered business research and workflow experiences',E:'Spec-driven AI software development environment'},
    matches:{'1':'Amazon Bedrock','2':'Amazon SageMaker AI','3':'Amazon Q','4':'Amazon Quick','5':'Kiro'},
    answer:['A:1','B:2','C:3','D:4','E:5'],
    explain:['✅ Managed FM APIs → Amazon Bedrock.','✅ End-to-end ML/data science → Amazon SageMaker AI.','✅ Enterprise AI assistant → Amazon Q.','✅ Business research/workflow → Amazon Quick.','✅ Spec-driven developer environment → Kiro.'],
    cue:'Bedrock = FM API; SageMaker = ML platform; Q = enterprise assistant; Quick = business AI; Kiro = spec-driven dev.'});

  add({objective:'1.3.5',target:'mlops-experimentation-repeatability',type:'multiple',
    q:'A data science team can produce strong models in notebooks, but every researcher uses different local steps and nobody can reliably reproduce a model three months later. Leadership wants to move toward MLOps without changing the modeling algorithm yet. Which THREE practices directly address experimentation and repeatability? (Select THREE.)',
    th:'ทีม data science สามารถสร้างโมเดลที่ให้ผลดีใน notebook ได้ แต่แต่ละคนใช้ขั้นตอนบนเครื่องตนเองแตกต่างกัน และไม่มีใครสามารถสร้างโมเดลเดิมซ้ำได้อย่างน่าเชื่อถือหลังผ่านไปสามเดือน ฝ่ายบริหารต้องการเริ่มใช้แนวคิด MLOps โดยยังไม่เปลี่ยนอัลกอริทึมของโมเดล แนวปฏิบัติใด 3 ข้อแก้ปัญหาด้าน experimentation และ repeatability โดยตรง?',
    ask:'เลือกแนวปฏิบัติ MLOps ที่ทำให้การทดลองและการสร้างผลซ้ำมีหลักฐานและเวอร์ชันชัดเจน.',
    choices:{A:'Version model, code, configuration, and relevant data artifacts',B:'Track experiments and their evaluation results',C:'Automate repeatable training/evaluation pipelines',D:'Delete old experiment metadata after each release',E:'Let every developer manually choose unrecorded steps',F:'Use the final test set repeatedly to tune the model'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ versioning ทำให้รู้ว่า release/experiment ใช้อะไร.',B:'ถูก เพราะ experiment tracking เก็บ parameters, metrics และผลที่เปรียบเทียบได้.',C:'ถูก เพราะ automated pipelines ลดความแตกต่างจาก manual process.',D:'ผิด เพราะการลบ metadata ทำลาย traceability.',E:'ผิด เพราะขั้นตอนที่ไม่บันทึกทำให้ reproduce ไม่ได้.',F:'ผิด เพราะ test set ไม่ควรใช้ tune ซ้ำและไม่ได้แก้ repeatability.'},
    cue:'MLOps เริ่มจาก Version + Track + Automate.'});

  add({objective:'1.3.5',target:'mlops-scale-techdebt-production',
    q:'An ML service grew from one model to dozens of models owned by different teams. Releases are slow because pipelines are fragile, dependencies are undocumented, models use inconsistent deployment patterns, and operational incidents consume more engineering time than model improvement. Which MLOps goal most directly addresses this situation?',
    th:'บริการ ML เติบโตจากโมเดลเดียวเป็นหลายสิบโมเดลที่ดูแลโดยหลายทีม การ release ช้าเพราะ pipeline เปราะบาง dependencies ไม่ถูกบันทึก วิธี deploy แต่ละโมเดลไม่สอดคล้องกัน และ incident ในการดำเนินงานกินเวลาวิศวกรมากกว่าการปรับปรุงโมเดล เป้าหมายของ MLOps ข้อใดตรงกับสถานการณ์นี้ที่สุด?',
    ask:'ระบุว่า MLOps ไม่ใช่แค่ training แต่ช่วยจัดการ scalability, technical debt และ production readiness.',
    choices:{A:'Build scalable, repeatable operational practices that reduce ML technical debt and improve production readiness',B:'Increase model complexity so operational problems become less visible',C:'Remove monitoring to reduce the number of alerts',D:'Let each team invent a unique deployment process for flexibility'},
    answer:['A'],
    why:{A:'ถูก เพราะ MLOps มุ่งสร้างระบบและกระบวนการที่ทำซ้ำ scale ได้ ลด technical debt และรองรับ production.',B:'ผิด เพราะ model complexity ไม่แก้ pipeline/operations debt.',C:'ผิด เพราะไม่มี monitoring ยิ่งลด production readiness.',D:'ผิด เพราะการแตกต่างแบบไร้มาตรฐานทำให้ repeatability และ maintainability แย่ลง.'},
    cue:'MLOps = ทำ ML ให้ผลิตซ้ำ ขยายได้ ดูแลง่าย และพร้อม production.'});

  add({objective:'1.3.5',target:'monitor-retrain-loop',
    q:'A fraud model has been in production for a year. Monitoring now shows that live transaction patterns and model quality have changed materially compared with the validation period. The team has confirmed the change is persistent rather than a one-day anomaly. Which lifecycle response best reflects sound MLOps practice?',
    th:'โมเดลตรวจจับ fraud ถูกใช้งานใน production มาเป็นเวลาหนึ่งปี ขณะนี้ monitoring แสดงให้เห็นว่ารูปแบบ transaction จริงและคุณภาพของโมเดลเปลี่ยนไปอย่างมีนัยสำคัญเมื่อเทียบกับช่วง validation ทีมยืนยันแล้วว่าการเปลี่ยนแปลงนี้เกิดขึ้นต่อเนื่อง ไม่ใช่ความผิดปกติชั่วคราวเพียงวันเดียว การตอบสนองใดสะท้อนแนวปฏิบัติ MLOps ที่เหมาะสมที่สุด?',
    ask:'เลือก response เมื่อ monitoring พบ drift/performance degradation อย่างต่อเนื่อง.',
    choices:{A:'Investigate the change, obtain appropriate new data, retrain or update the model, evaluate it, and promote only if it meets criteria',B:'Ignore the change because the model was once approved',C:'Deploy an untested retrained model immediately',D:'Delete production monitoring so the metric no longer appears'},
    answer:['A'],
    why:{A:'ถูก เพราะ monitoring ต้องเชื่อมกับ investigation, retraining, evaluation และ controlled promotion.',B:'ผิด เพราะ production environment สามารถเปลี่ยนและทำให้ model เสื่อมได้.',C:'ผิด เพราะ retrained model ต้องผ่าน evaluation/approval ก่อน deploy.',D:'ผิด เพราะการลบ monitoring ไม่ได้แก้ปัญหาและทำลาย governance.'},
    cue:'Monitor → Investigate → Retrain → Evaluate → Promote.'});

  add({objective:'1.3.6',target:'classification-metrics-map',type:'matching',
    q:'A medical-screening team is selecting metrics for a binary classifier and wants everyone to understand what each metric emphasizes before setting launch thresholds. The team cares about overall correctness, how many flagged cases are actually positive, how many real positives are caught, and one single score that balances the last two measures. Match each description with the correct metric.',
    th:'ทีมระบบคัดกรองทางการแพทย์กำลังเลือก metrics สำหรับ binary classifier และต้องการให้ทุกคนเข้าใจว่าแต่ละ metric เน้นอะไร ก่อนกำหนด threshold สำหรับเปิดใช้งาน ทีมสนใจทั้งความถูกต้องโดยรวม ความน่าเชื่อถือของเคสที่ถูก flag ว่า positive สัดส่วนของ positive จริงที่ถูกจับได้ และคะแนนเดียวที่ balance สอง metric หลัง จงจับคู่คำอธิบายกับ metric ที่ถูกต้อง.',
    ask:'แยก Accuracy, Precision, Recall และ F1 score.',
    choices:{A:'Fraction of all predictions that are correct',B:'Among predicted positives, fraction that are truly positive',C:'Among actual positives, fraction the model correctly identifies',D:'A harmonic-mean style balance of precision and recall'},
    matches:{'1':'Accuracy','2':'Precision','3':'Recall','4':'F1 score'},
    answer:['A:1','B:2','C:3','D:4'],
    explain:['✅ A → Accuracy.','✅ B → Precision เพราะถามความน่าเชื่อถือของ predicted positives.','✅ C → Recall เพราะถามว่าจับ actual positives ได้กี่ส่วน.','✅ D → F1 เพราะ balance Precision กับ Recall.'],
    cue:'Accuracy = ทั้งหมด; Precision = ของที่ flag; Recall = ของจริง; F1 = balance P/R.'});

  add({objective:'1.3.6',target:'business-vs-model-metrics',type:'multiple',
    q:'A support-classification model has excellent offline precision and recall, but the product manager wants evidence that deploying it actually improves the business. The manager asks for measures that reflect economic or user outcomes rather than only predictive quality. Which THREE measures are most directly business-oriented? (Select THREE.)',
    th:'โมเดลจัดหมวดหมู่งาน support มี precision และ recall จากการทดสอบแบบออฟไลน์ดีมาก แต่ product manager ต้องการหลักฐานว่าการนำโมเดลไปใช้จริงช่วยธุรกิจหรือไม่ จึงขอ measures ที่สะท้อนผลทางเศรษฐกิจหรือผลต่อผู้ใช้ มากกว่าคุณภาพการทำนายเพียงอย่างเดียว ข้อใด 3 ข้อเป็น business-oriented metrics โดยตรงที่สุด?',
    ask:'แยก business metrics ออกจาก model performance metrics.',
    choices:{A:'Return on investment (ROI)',B:'Cost per user or interaction',C:'Customer feedback or satisfaction',D:'F1 score',E:'Recall',F:'Precision'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ ROI วัดผลตอบแทนเทียบกับต้นทุน.',B:'ถูก เพราะ cost per user/interaction สะท้อน economics ของการใช้งานจริง.',C:'ถูก เพราะ customer feedback/satisfaction สะท้อนผลลัพธ์ที่ผู้ใช้รับรู้.',D:'ผิด เพราะ F1 เป็น technical classification metric.',E:'ผิด เพราะ Recall เป็น technical classification metric.',F:'ผิด เพราะ Precision เป็น technical classification metric.'},
    cue:'Business = เงิน/ต้นทุน/ลูกค้า; Model = Accuracy/Precision/Recall/F1.'});
})();