(() => {
  const bank = window.LOCAL_SET_23_BANK = window.LOCAL_SET_23_BANK || [];
  const add = x => bank.push({ domain:1, ...x });

  add({task:'1.2',type:'single',target:'regression-vs-classification-new',
    question:'A utility company wants to predict each household\'s electricity consumption next month as a numeric value in kilowatt-hours. Which ML technique BEST fits?',
    questionTh:'บริษัทสาธารณูปโภคต้องการทำนายปริมาณไฟฟ้าที่แต่ละครัวเรือนจะใช้ในเดือนหน้าเป็นค่าตัวเลขหน่วยกิโลวัตต์ชั่วโมง เทคนิค ML ใดเหมาะที่สุด?',
    choices:{A:'Regression',B:'Classification',C:'Clustering',D:'Reinforcement learning'},
    answer:['A'],
    exp:['✅ A — เป้าหมายเป็นค่าตัวเลขต่อเนื่อง จึงเป็นงาน regression.','❌ B — Classification ใช้ทำนายหมวดหมู่หรือ label ที่กำหนดไว้.','❌ C — Clustering ใช้ค้นหากลุ่มเมื่อไม่มี label เป้าหมาย.','❌ D — Reinforcement learning ใช้เรียนจากการเลือก action และ reward.','🧠 จำสั้น ๆ — ทำนายตัวเลขต่อเนื่อง = Regression.']});

  add({task:'1.2',type:'single',target:'ai-not-appropriate-fixed-rule',
    question:'An eligibility decision is completely determined by a published rule: approve only when age is at least 18 and a required document is present. The organization needs the same auditable result every time. What is the MOST appropriate approach?',
    questionTh:'การตัดสินสิทธิ์ถูกกำหนดด้วยกฎที่เผยแพร่ชัดเจนว่าอนุมัติเฉพาะเมื่ออายุอย่างน้อย 18 ปีและมีเอกสารที่กำหนด องค์กรต้องการผลเดิมที่ตรวจสอบย้อนหลังได้ทุกครั้ง ควรใช้แนวทางใด?',
    choices:{A:'Deterministic business rules',B:'Supervised classification',C:'A foundation model with few-shot examples',D:'Unsupervised clustering'},
    answer:['A'],
    exp:['✅ A — กฎตายตัวและต้อง reproducible ทุกครั้ง จึงเหมาะกับ deterministic rules.','❌ B — Classification ใช้เรียน pattern จาก labeled examples ทั้งที่เงื่อนไขจริงถูกกำหนดไว้แล้ว.','❌ C — FM เพิ่มความไม่แน่นอนโดยไม่จำเป็น.','❌ D — Clustering ใช้ค้นกลุ่ม ไม่ได้ใช้คำนวณกฎอนุมัติ.','🧠 จำสั้น ๆ — คำตอบ exact ตามกฎ = Rules ไม่ต้องใช้ ML.']});

  add({task:'1.1',type:'single',target:'batch-inference',
    question:'A retailer has 20 million stored customer records and wants one offline churn prediction for every record overnight. No individual result is needed immediately. Which inference mode is the BEST fit?',
    questionTh:'ร้านค้ามีข้อมูลลูกค้า 20 ล้านรายการที่เก็บไว้ และต้องการรันการทำนาย churn ให้ครบทุก record แบบออฟไลน์ข้ามคืน โดยไม่ต้องได้ผลรายคนทันที ควรใช้ inference mode ใด?',
    choices:{A:'Batch inference',B:'Real-time inference',C:'Asynchronous inference for individual long-running requests',D:'Serverless inference for intermittent interactive requests'},
    answer:['A'],
    exp:['✅ A — มี dataset ขนาดใหญ่ที่เตรียมไว้และประมวลผลแบบออฟไลน์ จึงเหมาะกับ batch inference.','❌ B — Real-time เหมาะ request ที่ต้องตอบทันที.','❌ C — Async เหมาะ request รายชิ้นที่ใช้เวลานานและรับผลภายหลัง ไม่ใช่ dataset offline ทั้งก้อน.','❌ D — Serverless inference เหมาะ interactive traffic ที่มาเป็นช่วง ๆ.','🧠 จำสั้น ๆ — Dataset ทั้งก้อน + ไม่รีบราย request = Batch.']});

  add({task:'1.2',type:'matching',target:'aws-managed-ai-service-map',
    question:'A contact-center project has four separate media and language requirements. Assign the AWS managed AI service that directly handles each requirement.',
    questionTh:'contact-center project มี 4 requirements แยกกันด้านเสียงและภาษา ให้จับคู่ AWS managed AI service ที่จัดการ requirement แต่ละอย่างโดยตรง.',
    choices:{A:'Amazon Transcribe',B:'Amazon Translate',C:'Amazon Comprehend',D:'Amazon Polly'},
    matches:{'1':'Turn recorded calls into text','2':'Convert written content between languages','3':'Detect meaning such as entities or sentiment in text','4':'Generate spoken audio from written text'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Transcribe → เสียงพูดเป็นข้อความ.','✅ Translate → แปลข้อความระหว่างภาษา.','✅ Comprehend → วิเคราะห์ความหมาย/entity/sentiment ของข้อความ.','✅ Polly → ข้อความเป็นเสียงพูด.','🧠 จำสั้น ๆ — Audio→Text / Language→Language / Understand text / Text→Audio.']});

  add({task:'1.2',type:'single',target:'traditional-ml-vs-fm-open-generation',
    question:'A design studio wants one application that can interpret free-form briefs, understand reference images, and draft new campaign copy without a fixed output label set. Which approach BEST fits?',
    questionTh:'สตูดิโอออกแบบต้องการแอปเดียวที่เข้าใจ brief แบบข้อความอิสระ อ่านภาพอ้างอิง และร่างข้อความแคมเปญใหม่ได้ โดยไม่มีชุด output label ตายตัว แนวทางใดเหมาะที่สุด?',
    choices:{A:'A multimodal foundation model',B:'A supervised tabular classifier',C:'A numeric regression model',D:'K-means clustering'},
    answer:['A'],
    exp:['✅ A — ต้องเข้าใจข้อมูลหลายรูปแบบและสร้างข้อความแบบปลายเปิด จึงเหมาะกับ multimodal foundation model.','❌ B — Supervised classifier เหมาะ fixed labels จากข้อมูลที่มีโครงสร้างชัด.','❌ C — Regression ใช้ทำนายค่าตัวเลขต่อเนื่อง.','❌ D — Clustering ใช้จัดกลุ่มข้อมูล ไม่ได้สร้าง content ใหม่.','🧠 จำสั้น ๆ — Mixed unstructured inputs + open-ended generation = FM.']});

  add({task:'1.3',type:'single',target:'false-positive',
    question:'A fraud model predicts “fraud” for a transaction, but investigation confirms the transaction is legitimate. Which confusion-matrix outcome is this?',
    questionTh:'โมเดล fraud ทำนายว่า transaction เป็น “fraud” แต่หลังตรวจสอบพบว่าเป็นรายการถูกต้องตามปกติ กรณีนี้ใน confusion matrix คืออะไร?',
    choices:{A:'False positive',B:'False negative',C:'True positive',D:'True negative'},
    answer:['A'],
    exp:['✅ A — โมเดลทาย positive แต่ของจริง negative จึงเป็น False Positive.','❌ B — False Negative คือทาย negative แต่จริง positive.','❌ C — True Positive คือทาย positive และจริง positive.','❌ D — True Negative คือทาย negative และจริง negative.','🧠 จำสั้น ๆ — Alarm ขึ้นแต่จริงไม่ผิด = False Positive.']});

  add({task:'1.3',type:'multiple',target:'technical-and-business-metrics',
    question:'A deployed classifier must catch as many true defects as possible, and management also wants to know whether the system creates economic value after operating cost. Which TWO metrics address these two needs most directly? (Select TWO.)',
    questionTh:'classifier ที่ใช้งานจริงต้องจับ defect จริงให้ได้มากที่สุด และฝ่ายบริหารต้องการรู้ด้วยว่าระบบสร้างมูลค่าทางเศรษฐกิจหลังหักต้นทุนการดำเนินงานหรือไม่ ควรดู metrics ใด 2 ตัวโดยตรง?',
    choices:{A:'Recall',B:'Return on investment (ROI)',C:'BLEU',D:'Perplexity',E:'R-squared'},
    answer:['A','B'],
    exp:['✅ A — Recall วัดว่า positive จริงถูกจับได้กี่ส่วน จึงตรงกับการลดของจริงที่หลุด.','✅ B — ROI วัดผลตอบแทนเทียบกับต้นทุน จึงตอบ business value.','❌ C — BLEU ใช้ประเมิน text generation/translation.','❌ D — Perplexity เป็น language-model metric.','❌ E — R-squared เป็น regression metric.','🧠 จำสั้น ๆ — Model quality กับ Business value ต้องเลือก metric ให้ตรงคนละเป้าหมาย.']});

  add({task:'1.3',type:'single',target:'data-drift-retest',
    question:'A vision model is deployed in new stores. The object labels have the same meaning as before, but camera resolution, lighting, and image color distributions are now very different from training data. Which issue is MOST directly described?',
    questionTh:'vision model ถูกนำไปใช้ในสาขาใหม่ ความหมายของ label ยังเหมือนเดิม แต่ความละเอียดกล้อง แสง และการกระจายสีของภาพต่างจาก training data มาก ปัญหาใดตรงที่สุด?',
    choices:{A:'Data drift',B:'Concept drift',C:'Label leakage',D:'Underfitting'},
    answer:['A'],
    exp:['✅ A — Distribution ของ input/features เปลี่ยน แต่ความหมาย X→Y ยังเดิม จึงเป็น Data drift.','❌ B — Concept drift คือความสัมพันธ์ระหว่าง input กับ target เปลี่ยน.','❌ C — Label leakage คือ training data มีข้อมูลที่เผย target อย่างไม่เหมาะสม.','❌ D — Underfitting คือ model เรียน pattern ไม่พอและทำได้ไม่ดีตั้งแต่ train/validation.','🧠 จำสั้น ๆ — X เปลี่ยน = Data drift; X→Y เปลี่ยน = Concept drift.']});

  add({task:'1.3',type:'multiple',target:'mlops-reproducibility-monitoring',
    question:'A regulated ML team needs to reproduce any production model and detect when its live input distribution shifts. Which TWO practices are most directly required? (Select TWO.)',
    questionTh:'ทีม ML ที่มีข้อกำกับต้อง reproduce production model ทุกเวอร์ชันได้ และตรวจพบเมื่อ distribution ของ live input เปลี่ยน แนวปฏิบัติใด 2 ข้อจำเป็นโดยตรงที่สุด?',
    choices:{A:'Version the model, code, and data artifacts used for each release',B:'Monitor production data/model behavior for drift',C:'Delete old artifacts after deployment',D:'Tune on the test set after every release',E:'Use screenshots instead of versioned records'},
    answer:['A','B'],
    exp:['✅ A — Versioning ทำให้ย้อนกลับมาสร้าง release เดิมได้.','✅ B — Production monitoring ใช้ตรวจ drift และ behavior หลัง deploy.','❌ C — ลบ artifact ทำลาย reproducibility.','❌ D — ใช้ test set tuning ซ้ำทำให้ final evaluation ปนเปื้อน.','❌ E — Screenshot ไม่ใช่ versioned artifact ที่ reproduce ได้.','🧠 จำสั้น ๆ — Reproduce = Version; Detect change = Monitor.']});

  add({task:'1.3',type:'ordering',target:'ml-lifecycle-independent',
    question:'Order these activities for a standard ML lifecycle from defining the problem through production monitoring.',
    questionTh:'เรียงกิจกรรมของ ML lifecycle มาตรฐานตั้งแต่กำหนดปัญหาจนถึง monitoring ใน production.',
    choices:{A:'Deploy the approved model',B:'Prepare data and train candidate models',C:'Define the business objective and success criteria',D:'Evaluate candidates against technical and business criteria',E:'Monitor production performance and drift'},
    answer:['C','B','D','A','E'],
    exp:['✅ ลำดับคือ Define objective → Prepare/Train → Evaluate → Deploy → Monitor.','❌ Deploy ต้องเกิดหลัง evaluation ไม่ใช่ก่อน.','❌ Monitoring เป็นกิจกรรมหลังนำ model ไปใช้จริง.','🧠 จำสั้น ๆ — Objective → Train → Check → Ship → Watch.']});

  add({task:'1.1',type:'matching',target:'data-types',
    question:'Four ML projects arrive with very different source data. Pair each project example with the data category that an ML practitioner would use to describe it.',
    questionTh:'มี ML projects 4 งานที่ใช้ source data ต่างกันมาก ให้จับคู่ตัวอย่างแต่ละงานกับหมวดข้อมูลที่ ML practitioner ใช้อธิบายได้เหมาะที่สุด.',
    choices:{A:'Customer rows with columns and a known churn outcome',B:'Sensor measurements recorded every five minutes',C:'Inspection photographs from a factory line',D:'Open-ended customer complaint messages'},
    matches:{'1':'Labeled structured/tabular data','2':'Time-series data','3':'Image data','4':'Unstructured text data'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ ตารางคอลัมน์ชัดและมี target outcome → labeled structured/tabular data.','✅ ค่าที่เรียงตามเวลา → time-series data.','✅ ภาพถ่าย → image data.','✅ ข้อความอิสระ → unstructured text data.','🧠 จำสั้น ๆ — Table / Time / Image / Free text.']});

  add({task:'1.3',type:'single',target:'sagemaker-jumpstart-source-model',
    question:'A data science team using SageMaker AI wants to start from a pre-trained model available through an AWS model hub instead of training a foundation model from scratch. Which option is the closest fit?',
    questionTh:'ทีม data science ที่ใช้ SageMaker AI ต้องการเริ่มจาก pre-trained model ที่มีให้ผ่าน model hub ของ AWS แทนการฝึก foundation model ตั้งแต่ต้น ควรใช้ตัวเลือกใด?',
    choices:{A:'Amazon SageMaker JumpStart',B:'Amazon Transcribe',C:'AWS Audit Manager',D:'Amazon Macie'},
    answer:['A'],
    exp:['✅ A — SageMaker JumpStart ให้เข้าถึง pre-trained models และ solution templates เพื่อเริ่มงานได้เร็วขึ้น.','❌ B — Transcribe แปลงเสียงเป็นข้อความ.','❌ C — Audit Manager ใช้ด้าน audit evidence/compliance.','❌ D — Macie ค้นหา sensitive data ใน S3.','🧠 จำสั้น ๆ — SageMaker + model hub/pre-trained models = JumpStart.']});

  add({task:'1.3',type:'single',target:'precision-false-positive-cost',
    question:'A screening system flags many normal cases for manual investigation. The business complaint is specifically that too many predicted positives are actually negative. Which metric should the team improve first?',
    questionTh:'screening system ส่ง normal cases ไปตรวจด้วยคนจำนวนมาก ปัญหาที่ธุรกิจร้องเรียนคือเคสที่ model ทายว่า positive จำนวนมากจริง ๆ แล้วเป็น negative ควรปรับ metric ใดเป็นอันดับแรก?',
    choices:{A:'Precision',B:'Recall',C:'MAE',D:'R-squared'},
    answer:['A'],
    exp:['✅ A — Precision วัดว่าในสิ่งที่ model ทาย positive มี positive จริงกี่ส่วน; false positives เยอะทำให้ precision ต่ำ.','❌ B — Recall เน้นว่า positive จริงถูกจับได้กี่ส่วน จึงเกี่ยวกับ false negatives มากกว่า.','❌ C — MAE เป็น regression metric.','❌ D — R-squared เป็น regression metric.','🧠 จำสั้น ๆ — “สิ่งที่ flag มา เชื่อได้แค่ไหน?” = Precision.']});
})();