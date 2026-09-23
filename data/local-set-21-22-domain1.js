(() => {
  const bank = window.LOCAL_SET_21_22_BANK = window.LOCAL_SET_21_22_BANK || [];
  const add = x => bank.push({ domain: 1, ...x });

  add({
    task:'1.2', type:'single', target:'weakness: traditional-ml-vs-fm',
    v:{
      21:["A regional bank must classify mortgage applications into a small set of risk bands. The input is structured tabular data, reviewers require clear feature-level reasoning, inference volume is high, and there is no need for open-ended generation. Which approach BEST fits?","ธนาคารต้องจัดใบสมัครสินเชื่อบ้านเป็นระดับความเสี่ยงจากข้อมูลแบบตาราง ผู้ตรวจสอบต้องการเหตุผลที่อธิบายได้ ปริมาณการทำนายสูง และไม่ต้องสร้างข้อความอิสระ ควรเลือกแนวทางใด?"],
      22:["An insurer predicts whether a policyholder will renew next month from age, plan type, payment history, and prior claims. The target is a single labeled category, the model must be inexpensive to run at scale, and compliance staff want straightforward explanations. Which solution is MOST appropriate?","บริษัทประกันต้องทำนายว่าลูกค้าจะต่ออายุกรมธรรม์หรือไม่จากข้อมูลแบบตาราง ผลลัพธ์เป็นหมวดหมู่เดียว ต้องรันจำนวนมากด้วยต้นทุนต่ำ และฝ่ายกำกับดูแลต้องการคำอธิบายที่ตรงไปตรงมา ควรใช้ solution ใด?"]
    },
    choices:{A:'A traditional supervised ML model',B:'A large multimodal foundation model',C:'A diffusion model',D:'A general-purpose conversational agent'},
    answer:['A'],
    exp:[
      '✅ A — งานเป็นการทำนายแบบมี label จากข้อมูลโครงสร้างชัดเจน ต้องการอธิบายง่ายและต้นทุน inference ต่ำ จึงเหมาะกับ traditional supervised ML.',
      '❌ B — Multimodal FM เหมาะเมื่อจำเป็นต้องเข้าใจหลาย modality หรือทำงาน generative กว้าง ๆ ซึ่งโจทย์ไม่ได้ต้องการ.',
      '❌ C — Diffusion model ใช้สร้างข้อมูล เช่น ภาพ ไม่ใช่ตัวเลือกหลักสำหรับ classification จากข้อมูลตาราง.',
      '❌ D — Conversational agent เพิ่มความซับซ้อนและต้นทุนโดยไม่ช่วย requirement แบบ narrow predictive task.',
      '🧠 จำสั้น ๆ — งานแคบ + structured + explainable + cheap at scale = Traditional ML.'
    ]
  });

  add({
    task:'1.3', type:'single', target:'weakness: validation-vs-test',
    v:{
      21:["A team trains several candidate classifiers and wants to choose hyperparameters and select the best candidate. It also wants one untouched dataset for the final unbiased estimate after all tuning decisions are complete. Which dataset should be used during model selection?","ทีมฝึก classifier หลายตัวและต้องเลือก hyperparameters กับ candidate ที่ดีที่สุด พร้อมเก็บอีกชุดไว้ประเมินครั้งสุดท้ายหลังตัดสินใจทุกอย่างแล้ว ระหว่างการเลือกโมเดลควรใช้ dataset ใด?"],
      22:["An ML team has already separated its data into training, validation, and test sets. Engineers are comparing learning rates and model variants this week, while auditors want the final performance number to come from data never used for those choices. Which set should guide this week's tuning?","ทีม ML แบ่งข้อมูลเป็น training, validation และ test แล้ว ตอนนี้กำลังเปรียบเทียบ learning rate กับ model variants ส่วนตัวเลขสุดท้ายต้องมาจากข้อมูลที่ไม่เคยใช้ตัดสินใจมาก่อน ควรใช้ชุดใดในการ tuning ตอนนี้?"]
    },
    choices:{A:'Training set only',B:'Validation set',C:'Test set',D:'Production data'},
    answer:['B'],
    exp:[
      '✅ B — Validation set ใช้เปรียบเทียบ candidate และ tune hyperparameters ระหว่างการพัฒนา.',
      '❌ A — Training set ใช้เรียนรู้ model parameters; ถ้าใช้เลือกทุกอย่างจาก training อย่างเดียวจะมอง generalization ได้ไม่ดี.',
      '❌ C — Test set ควรเก็บไว้ประเมินครั้งสุดท้ายหลัง tuning เสร็จ เพื่อให้ตัวเลข final evaluation ไม่ลำเอียง.',
      '❌ D — Production data คือข้อมูลใช้งานจริงหลัง deploy ไม่ใช่ชุดมาตรฐานสำหรับเลือก hyperparameters ก่อน production.',
      '🧠 จำสั้น ๆ — Train = เรียนรู้, Validation = tune/select, Test = final unbiased check.'
    ]
  });

  add({
    task:'1.3', type:'single', target:'weakness: rmse-vs-mae',
    v:{
      21:["A delivery-time regression model is usually close to the true value but occasionally misses by several hours. The business says these rare large misses are especially costly and wants a metric that penalizes them more strongly than ordinary small errors. Which metric BEST fits?","โมเดล regression ทำนายเวลาส่งของได้ใกล้เคียงเป็นส่วนใหญ่ แต่บางครั้งพลาดหลายชั่วโมง ซึ่งสร้างความเสียหายสูง ธุรกิจต้องการ metric ที่ลงโทษ error ใหญ่แรงกว่า error เล็ก ควรใช้ metric ใด?"],
      22:["A demand-forecasting team compares two models. Most errors are modest, but a few extreme misses cause stockouts that are far more expensive than normal errors. Which regression metric should receive more attention if those large misses must influence the score strongly?","ทีมพยากรณ์ demand มี error ส่วนใหญ่ไม่มาก แต่มีบางครั้งพลาดหนักจนของขาดและเสียหายสูง หากต้องการให้ error ใหญ่กระทบคะแนนมาก ควรเน้น regression metric ใด?"]
    },
    choices:{A:'MAE',B:'RMSE',C:'Accuracy',D:'F1 score'},
    answer:['B'],
    exp:[
      '✅ B — RMSE ยกกำลังสอง error ก่อนเฉลี่ย จึงทำให้ error ขนาดใหญ่มีอิทธิพลต่อคะแนนมากขึ้น.',
      '❌ A — MAE ให้น้ำหนัก absolute error แบบเส้นตรง จึงไม่ลงโทษ outlier แรงเท่า RMSE.',
      '❌ C — Accuracy เป็น classification metric ไม่ใช่ regression metric.',
      '❌ D — F1 ใช้ balance precision กับ recall ใน classification.',
      '🧠 จำสั้น ๆ — ถ้าโจทย์ย้ำว่า “พลาดใหญ่ต้องเจ็บกว่า” ให้คิดถึง RMSE.'
    ]
  });

  add({
    task:'1.3', type:'single', target:'weakness: confusion-matrix',
    v:{
      21:["A fraud model predicts 'legitimate' for a transaction that investigators later confirm was actually fraudulent. Treat fraud as the positive class. Which confusion-matrix outcome is this?","โมเดล fraud ทำนายว่าธุรกรรมหนึ่งเป็นรายการปกติ แต่ภายหลังตรวจพบว่าเป็นทุจริตจริง โดยกำหนดให้ fraud เป็น positive class กรณีนี้คือค่าใดใน confusion matrix?"],
      22:["A disease-screening model says a patient is negative, but a later definitive test confirms the patient actually has the disease. Treat having the disease as positive. Which result is recorded?","โมเดลคัดกรองบอกว่าผู้ป่วยเป็น negative แต่การตรวจยืนยันพบว่าเป็นโรคจริง โดยถือว่าการเป็นโรคคือ positive กรณีนี้คืออะไร?"]
    },
    choices:{A:'True Positive',B:'False Positive',C:'True Negative',D:'False Negative'},
    answer:['D'],
    exp:[
      '✅ D — โมเดลทาย negative แต่ความจริงเป็น positive จึงเป็น False Negative.',
      '❌ A — True Positive ต้องทาย positive และจริงก็ positive.',
      '❌ B — False Positive คือทาย positive แต่ความจริงเป็น negative หรือ “เตือนเกิน”.',
      '❌ C — True Negative ต้องทาย negative และจริงก็ negative.',
      '🧠 จำสั้น ๆ — FN = ของจริงเป็น positive แต่โมเดล “ปล่อยหลุด”.'
    ]
  });

  add({
    task:'1.1', type:'matching', target:'weakness: reinforcement-learning-terms',
    v:{
      21:["A warehouse robot learns through reinforcement learning. Match each RL term with the description that BEST fits it.","หุ่นยนต์ในคลังสินค้าเรียนรู้ด้วย reinforcement learning ให้จับคู่คำศัพท์ RL แต่ละคำกับคำอธิบายที่ตรงที่สุด"],
      22:["A game-playing agent repeatedly observes the environment, chooses moves, and receives feedback. Match each core reinforcement-learning term with its role.","agent เล่นเกมสังเกต environment เลือกการกระทำ และรับ feedback ซ้ำ ๆ ให้จับคู่คำศัพท์หลักของ reinforcement learning กับหน้าที่ของมัน"]
    },
    choices:{A:'State',B:'Action',C:'Reward',D:'Policy'},
    matches:{'1':'The current situation or information available to the agent','2':'The choice the agent makes','3':'Feedback signal indicating how desirable an outcome was','4':'Strategy that maps situations to choices'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ State → สถานการณ์ปัจจุบันที่ agent ใช้ตัดสินใจ.',
      '✅ Action → สิ่งที่ agent เลือกทำในสถานการณ์นั้น.',
      '✅ Reward → feedback ว่าผลลัพธ์ดีหรือแย่เพียงใด.',
      '✅ Policy → กลยุทธ์ที่กำหนดว่าเมื่อเจอ state แบบหนึ่งควรเลือก action ใด.',
      '🧠 จำสั้น ๆ — State = ตอนนี้อยู่สถานการณ์ไหน; Policy = กลยุทธ์เลือกว่าจะทำอะไร.'
    ]
  });

  add({
    task:'1.1', type:'single', target:'weakness: attention-vs-tokenization',
    v:{
      21:["A transformer processes a long sentence and needs to give more weight to words that are most relevant to one another when building contextual representations. Which mechanism is responsible for weighting these relationships?","Transformer ประมวลผลประโยคยาวและต้องให้น้ำหนักคำที่เกี่ยวข้องกันมากกว่าเพื่อสร้าง representation ตามบริบท กลไกใดทำหน้าที่นี้?"],
      22:["An LLM already has token IDs for a sentence. The next step must determine which parts of the context should influence one another more strongly while computing representations. Which transformer concept does this describe?","LLM มี token IDs ของประโยคแล้ว ขั้นต่อไปต้องพิจารณาว่าส่วนใดของ context ควรมีอิทธิพลต่อกันมากกว่าเมื่อสร้าง representation แนวคิดใดของ transformer ที่ตรงที่สุด?"]
    },
    choices:{A:'Tokenization',B:'Attention',C:'Data cataloging',D:'Batch inference'},
    answer:['B'],
    exp:[
      '✅ B — Attention ให้น้ำหนักความสัมพันธ์ระหว่าง tokens/ส่วนต่าง ๆ ของ context.',
      '❌ A — Tokenization มีหน้าที่แบ่งข้อความเป็น token units และ IDs ไม่ได้คำนวณว่า token ไหนควรสำคัญต่อกัน.',
      '❌ C — Data cataloging จัด metadata ของ datasets ไม่เกี่ยวกับ transformer computation.',
      '❌ D — Batch inference เป็นรูปแบบการนำโมเดลไปประมวลผล ไม่ใช่กลไกภายใน transformer.',
      '🧠 จำสั้น ๆ — Tokenization = แบ่งข้อความ; Attention = ชั่งว่าอะไรสัมพันธ์กับอะไร.'
    ]
  });

  add({
    task:'1.2', type:'single', target:'weakness: deterministic-vs-ml',
    v:{
      21:["A tax calculation must follow a published formula exactly. Auditors require identical inputs to always produce the identical amount, and every intermediate rule must be directly traceable. Historical records exist, but prediction is not required. Which approach is MOST appropriate?","การคำนวณภาษีต้องทำตามสูตรที่ประกาศไว้อย่างเคร่งครัด input เดิมต้องให้ผลเดิมเสมอ และ auditor ต้องตรวจย้อนกฎทุกขั้นได้ แม้มีข้อมูลย้อนหลังแต่ไม่ต้องทำนาย ควรใช้แนวทางใด?"],
      22:["A payroll system calculates a statutory contribution from salary bands and fixed legal percentages. The organization needs exact reproducibility and does not need to estimate an unknown future outcome. Which solution should be preferred?","ระบบ payroll คำนวณเงินสมทบตามช่วงเงินเดือนและเปอร์เซ็นต์ที่กฎหมายกำหนด ต้องคำนวณซ้ำได้ตรงเดิมและไม่ได้ต้องทำนายอนาคต ควรใช้ solution แบบใด?"]
    },
    choices:{A:'Deterministic business rules',B:'Supervised regression',C:'A foundation model with few-shot prompting',D:'Unsupervised clustering'},
    answer:['A'],
    exp:[
      '✅ A — สูตรตายตัวและ requirement เรื่อง exact reproducibility เหมาะกับ deterministic rules.',
      '❌ B — Regression ใช้ทำนายค่าจาก pattern ในข้อมูล ไม่จำเป็นเมื่อสูตรคำตอบถูกกำหนดไว้แล้ว.',
      '❌ C — FM เพิ่มความไม่แน่นอนและอธิบายสูตรได้ยากกว่าโดยไม่มีประโยชน์ต่อ requirement นี้.',
      '❌ D — Clustering ใช้ค้นหากลุ่มจากข้อมูลที่ไม่มี label ไม่ได้คำนวณค่าตามสูตร.',
      '🧠 จำสั้น ๆ — มีสูตรตายตัว + ต้อง audit exact result = ใช้ rules ก่อนคิดถึง ML.'
    ]
  });

  add({
    task:'1.2', type:'multiple', target:'weakness: ai-capability-map',
    v:{
      21:["A manufacturer wants two managed AI capabilities. The first should identify visible surface defects from product images. The second should summarize free-form technician notes into short text. Which TWO capability categories directly match these needs? (Select TWO.)","โรงงานต้องการความสามารถ AI สองอย่าง: ตรวจหารอยตำหนิที่มองเห็นจากภาพสินค้า และสรุปบันทึกข้อความอิสระของช่างเป็นข้อความสั้น ควรเลือก capability categories ใด 2 ข้อ?"],
      22:["A service center needs one system to detect damaged parts in uploaded photos and another to extract sentiment and key information from written customer complaints. Which TWO broad AI capability areas are involved? (Select TWO.)","ศูนย์บริการต้องตรวจชิ้นส่วนเสียจากรูปภาพ และวิเคราะห์ sentiment/ข้อมูลสำคัญจากคำร้องเรียนที่เป็นข้อความ ควรจัดเป็น AI capability areas ใด 2 ข้อ?"]
    },
    choices:{A:'Computer vision',B:'Natural language processing',C:'Regression only',D:'Reinforcement learning',E:'Time-series forecasting'},
    answer:['A','B'],
    exp:[
      '✅ A — การตรวจสิ่งที่มองเห็นในภาพเป็นงาน Computer Vision.',
      '✅ B — การสรุป วิเคราะห์ sentiment หรือดึงความหมายจากข้อความเป็นงาน NLP.',
      '❌ C — Regression ใช้ทำนายค่าตัวเลขต่อเนื่อง ไม่ตรง requirement สองงานนี้.',
      '❌ D — Reinforcement learning เน้น agent เรียนจาก reward ไม่ใช่การอ่านภาพและข้อความโดยตรง.',
      '❌ E — Forecasting เน้นข้อมูลตามเวลาเพื่อทำนายอนาคต.',
      '🧠 จำสั้น ๆ — ภาพ = CV; ภาษา/ข้อความ = NLP.'
    ]
  });

  add({
    task:'1.3', type:'multiple', target:'confidence: mlops',
    v:{
      21:["A team wants to stop treating deployment as a one-time manual event. It needs traceable experiments, repeatable releases, monitoring after deployment, and a controlled way to retrain when evidence shows quality degradation. Which THREE practices BEST align with MLOps? (Select THREE.)","ทีมต้องการเลิก deploy แบบทำมือครั้งเดียว ต้อง track experiment, ทำ release ซ้ำได้, monitor หลัง deploy และ retrain อย่างควบคุมเมื่อคุณภาพลดลง ข้อใด 3 อย่างสอดคล้องกับ MLOps มากที่สุด?"],
      22:["An ML platform team is defining production-readiness standards. Models should move through versioned repeatable processes, deployed behavior must be monitored, and retraining should be triggered by evidence rather than ad hoc manual work. Which THREE capabilities are core MLOps concerns? (Select THREE.)","ทีม ML platform กำหนดมาตรฐาน production readiness โดยต้องมี process แบบ versioned/repeatable, monitor โมเดลหลัง deploy และ retrain จากหลักฐาน ไม่ใช่ทำแบบ ad hoc ข้อใด 3 อย่างเป็น MLOps core concerns?"]
    },
    choices:{A:'Versioned and repeatable ML workflows',B:'Production monitoring',C:'Controlled retraining and redeployment',D:'Always selecting the largest model',E:'Removing evaluation to release faster',F:'Keeping experiments outside version control'},
    answer:['A','B','C'],
    exp:[
      '✅ A — MLOps เน้น repeatability และ versioning เพื่อให้ lifecycle ทำซ้ำและตรวจสอบได้.',
      '✅ B — Monitoring หลัง deploy ช่วยตรวจ quality, drift, latency และสัญญาณ production.',
      '✅ C — Retraining/redeployment ที่ควบคุมได้เป็นส่วนหนึ่งของ continuous lifecycle.',
      '❌ D — การเลือกโมเดลใหญ่ที่สุดไม่ใช่หลัก MLOps และอาจเพิ่ม cost/complexity โดยไม่จำเป็น.',
      '❌ E — ตัด evaluation ออกทำให้ production readiness แย่ลง.',
      '❌ F — Experiment ที่ไม่อยู่ใน version control ลด traceability.',
      '🧠 จำสั้น ๆ — MLOps = experiment/version → repeat → deploy → monitor → retrain.'
    ]
  });

  add({
    task:'1.1', type:'single', target:'undercovered: serverless-inference',
    v:{
      21:["A small application receives short prediction requests only a few times each hour, with long idle periods in between. The team does not want to provision or manage inference instances and can tolerate occasional cold-start latency. Which inference option BEST fits?","แอปขนาดเล็กมี request ทำนายสั้น ๆ เพียงไม่กี่ครั้งต่อชั่วโมง และว่างนานระหว่างช่วงใช้งาน ทีมไม่ต้องการ provision/manage instance และยอมรับ cold-start latency ได้ ควรใช้ inference แบบใด?"],
      22:["A prototype classifier has unpredictable low-volume traffic. Requests are small, no large payload needs long processing, and the team wants infrastructure to scale automatically without maintaining an endpoint instance fleet. Which inference mode is MOST appropriate?","prototype classifier มี traffic ปริมาณต่ำและคาดเดายาก request มีขนาดเล็ก ไม่ใช่งาน payload ใหญ่ที่ใช้เวลานาน และทีมต้องการให้ infrastructure scale เองโดยไม่ดูแล instance fleet ควรเลือก inference mode ใด?"]
    },
    choices:{A:'Real-time inference on a provisioned endpoint',B:'Serverless inference',C:'Asynchronous inference',D:'Batch inference'},
    answer:['B'],
    exp:[
      '✅ B — Serverless inference เหมาะ request สั้น ปริมาณไม่แน่นอน และไม่ต้องจัดการ instance โดยตรง.',
      '❌ A — Real-time provisioned endpoint เหมาะเมื่อ latency ต่ำและ traffic ต่อเนื่องคุ้มกับการเปิด capacity ไว้.',
      '❌ C — Async เหมาะ request รายงานที่ payload ใหญ่หรือใช้เวลานานแล้วมารับผลภายหลัง.',
      '❌ D — Batch เหมาะประมวลผล dataset จำนวนมากแบบ offline.',
      '🧠 จำสั้น ๆ — request สั้น + traffic กระตุก + ไม่อยาก provision = Serverless.'
    ]
  });

  add({
    task:'1.3', type:'single', target:'weakness: data-vs-concept-drift',
    v:{
      21:["A deployed credit model sees applicant ages and income ranges shift substantially from the training distribution, but the relationship between those features and default risk is believed to be unchanged. Which phenomenon is MOST directly occurring?","โมเดลสินเชื่อหลัง deploy พบว่า distribution ของอายุและรายได้ของผู้สมัครเปลี่ยนจากตอน train มาก แต่ความสัมพันธ์ระหว่าง features เหล่านี้กับความเสี่ยงผิดนัดยังเชื่อว่าเหมือนเดิม ปรากฏการณ์ใดเกิดขึ้นตรงที่สุด?"],
      22:["A churn model receives customer usage patterns that now look very different from last year's training data. Analysts have not found evidence that the same usage pattern maps to a different churn outcome yet. Which type of drift is the clearest signal?","โมเดล churn ได้รับรูปแบบการใช้งานลูกค้าที่ต่างจาก training data ของปีก่อนอย่างชัดเจน แต่ยังไม่มีหลักฐานว่าความสัมพันธ์ระหว่าง usage pattern กับ churn outcome เปลี่ยนไป drift แบบใดตรงที่สุด?"]
    },
    choices:{A:'Data drift',B:'Concept drift',C:'Overfitting',D:'Label leakage'},
    answer:['A'],
    exp:[
      '✅ A — Data drift คือ distribution ของ input/features เปลี่ยนไปจากข้อมูลที่ใช้ train.',
      '❌ B — Concept drift ต้องมีการเปลี่ยนความสัมพันธ์ระหว่าง input กับ target เช่น X แบบเดิมนำไปสู่ Y ที่ต่างไป.',
      '❌ C — Overfitting คือ train ดีแต่ generalize กับ unseen data แย่ ไม่ได้ถูกนิยามจาก production input distribution ที่เปลี่ยน.',
      '❌ D — Label leakage เกิดเมื่อ training data มีข้อมูลที่เผย target อย่างไม่เหมาะสม.',
      '🧠 จำสั้น ๆ — X เปลี่ยน = Data drift; ความหมายของ X→Y เปลี่ยน = Concept drift.'
    ]
  });

  add({
    task:'1.3', type:'ordering', target:'retest: ml-lifecycle',
    v:{
      21:["A fraud-detection project has already defined its business objective. Order the remaining high-level ML lifecycle stages so evaluation occurs before production use and monitoring occurs after deployment.","โปรเจกต์ตรวจ fraud กำหนด business objective แล้ว จงเรียงขั้นตอน ML lifecycle ที่เหลือ โดยต้อง evaluate ก่อน production และ monitor หลัง deploy"],
      22:["A team is documenting a standard ML production lifecycle after the problem statement is approved. Order the activities from data preparation through ongoing production observation.","ทีมกำลังเขียน ML production lifecycle หลังอนุมัติ problem statement แล้ว จงเรียงกิจกรรมตั้งแต่เตรียมข้อมูลจนถึงติดตามการใช้งานจริง"]
    },
    choices:{A:'Deploy the selected model',B:'Collect and prepare data',C:'Monitor production performance and drift',D:'Train candidate models',E:'Evaluate candidate models'},
    answer:['B','D','E','A','C'],
    exp:[
      '✅ ลำดับที่ถูก — Collect/prepare data → Train → Evaluate → Deploy → Monitor.',
      '1) เตรียมข้อมูลก่อนเพื่อให้มี input สำหรับการฝึก.',
      '2) Train เพื่อเรียนรู้ model parameters.',
      '3) Evaluate candidate ก่อนนำขึ้น production.',
      '4) Deploy model ที่ผ่านเกณฑ์.',
      '5) Monitor หลัง deploy เพื่อดู performance และ drift.',
      '🧠 จำสั้น ๆ — Train → Evaluate → Deploy → Monitor.'
    ]
  });

  add({
    task:'1.3', type:'multiple', target:'confidence: model-vs-business-metrics',
    v:{
      21:["A recommendation model improves offline accuracy, but management wants proof that the deployed system actually creates value. Which TWO measurements together BEST cover both model behavior and business impact? (Select TWO.)","recommendation model มี offline accuracy ดีขึ้น แต่ผู้บริหารต้องการหลักฐานว่าระบบสร้างคุณค่าจริง ข้อใด 2 อย่างครอบคลุมทั้งพฤติกรรมของโมเดลและผลต่อธุรกิจได้ดีที่สุด?"],
      22:["A support classifier has strong technical scores, yet the product team is unsure whether customers benefit. Which TWO metric categories should be reviewed together rather than relying on only one? (Select TWO.)","support classifier มี technical scores ดี แต่ทีม product ยังไม่แน่ใจว่าลูกค้าได้ประโยชน์จริง ควรดู metric สองกลุ่มใดร่วมกันแทนการพึ่งเพียงกลุ่มเดียว?"]
    },
    choices:{A:'Relevant model-quality metrics such as precision/recall',B:'Business/application outcomes such as task success, satisfaction, or ROI',C:'The number of model parameters only',D:'The release month of the model',E:'The color of the dashboard'},
    answer:['A','B'],
    exp:[
      '✅ A — Model-quality metrics บอกว่าโมเดลทำ task ทางเทคนิคได้ดีเพียงใด.',
      '✅ B — Business/application metrics บอกว่าระบบสร้างผลลัพธ์ที่ธุรกิจหรือผู้ใช้ต้องการจริงหรือไม่.',
      '❌ C — จำนวน parameters ไม่ใช่หลักฐานว่า model หรือ business outcome ดี.',
      '❌ D — Release month ไม่ใช่ performance metric.',
      '❌ E — รูปแบบ dashboard ไม่ใช่ตัวชี้วัดคุณภาพหรือคุณค่าธุรกิจ.',
      '🧠 จำสั้น ๆ — Model metric ดี ≠ Business outcome ดี ต้องดูทั้งสองด้าน.'
    ]
  });
})();