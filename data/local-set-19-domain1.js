(() => {
  const bank = window.LOCAL_SET_19_BANK = window.LOCAL_SET_19_BANK || [];
  const domain = 1;
  const add = item => bank.push({ domain, ...item });

  add({
    task:'1.1', type:'single',
    question:'A subscription company has historical customer records labeled as either "churned" or "retained." The data includes account age, support contacts, monthly spending, and contract type. The company wants a model that predicts one of those two outcomes for each current customer so the retention team can decide whom to contact first. Which machine learning approach is MOST appropriate?',
    questionTh:'บริษัทมีข้อมูลลูกค้าเก่าที่ติด label ว่า churned หรือ retained พร้อมข้อมูลประกอบหลายอย่าง และต้องการทำนายหนึ่งในสองผลลัพธ์ให้ลูกค้าปัจจุบันเพื่อช่วยทีม retention จัดลำดับการติดต่อ ควรใช้แนวทาง ML ใด?',
    choices:{A:'Unsupervised clustering',B:'Supervised classification',C:'Supervised regression',D:'Reinforcement learning'},
    answer:['B'],
    explanation:'ตอบ B — ผลลัพธ์เป็นหมวดหมู่ที่มี label ชัดเจน จึงเป็น supervised classification. A ใช้หากไม่มี label และต้องการค้นหากลุ่มตามธรรมชาติ; C ใช้ทำนายค่าต่อเนื่อง; D เรียนจาก action และ reward/penalty.'
  });

  add({
    task:'1.1', type:'single',
    question:'A media company receives individual video files from customers. Each file can be several hundred megabytes, processing can take 8–12 minutes, and the customer does not need to keep a connection open while the model works. Traffic is intermittent, but each submitted job must eventually return a result. Which SageMaker inference option BEST fits this request pattern?',
    questionTh:'บริษัทรับไฟล์วิดีโอทีละไฟล์ ขนาดใหญ่ ใช้ประมวลผล 8–12 นาที ผู้ใช้ไม่ต้องรอ connection ค้างไว้ และ traffic มาเป็นช่วง ๆ แต่แต่ละงานต้องได้ผลกลับมา inference แบบใดเหมาะที่สุด?',
    choices:{A:'Real-Time Inference',B:'Serverless Inference',C:'Asynchronous Inference',D:'Batch Transform'},
    answer:['C'],
    explanation:'ตอบ C — Asynchronous Inference เหมาะกับ request รายงานที่ payload ใหญ่หรือใช้เวลานานและรับผลภายหลังได้. A เน้น interactive low latency; B เหมาะ request สั้นและ traffic ไม่สม่ำเสมอ; D เหมาะประมวลผล dataset จำนวนมากแบบ offline เป็นชุด.'
  });

  add({
    task:'1.1', type:'single',
    question:'A robotics team is training a warehouse agent. At each step, the agent observes its current state, selects an action, and receives a positive reward for completing a pick efficiently or a penalty for causing delays. Over time, the policy changes to favor actions that lead to higher cumulative rewards. Which learning method is being used?',
    questionTh:'ทีม robotics ฝึก agent ในคลังสินค้า โดย agent ดู state เลือก action แล้วได้ reward หรือ penalty และค่อย ๆ ปรับ policy เพื่อให้ผลตอบแทนสะสมดีขึ้น นี่คือ learning แบบใด?',
    choices:{A:'Supervised learning',B:'Unsupervised learning',C:'Reinforcement learning',D:'Self-supervised learning'},
    answer:['C'],
    explanation:'ตอบ C — state → action → reward/penalty → policy เป็นรูปแบบของ reinforcement learning. A ต้องมี labeled target; B ไม่มี label และมักใช้ค้นหา pattern/group; D สร้าง training signal จากข้อมูลดิบเองแต่ไม่ใช่วงจร reward จาก environment.'
  });

  add({
    task:'1.1', type:'matching',
    question:'A data team is reviewing datasets before choosing models. One source is a relational table with customer IDs and numeric fields, another is a sequence of hourly sensor readings, and a third is a collection of free-form support emails. The team wants to classify the data types correctly before deciding how to process them. Match each data source with the MOST appropriate data type.',
    questionTh:'ทีมข้อมูลกำลังจำแนกชนิดข้อมูลก่อนเลือกวิธีประมวลผล โดยมีตารางเชิงสัมพันธ์, sensor readings รายชั่วโมง และอีเมลข้อความอิสระ ให้จับคู่แต่ละแหล่งข้อมูลกับชนิดที่เหมาะที่สุด',
    choices:{A:'Relational customer table with fixed columns',B:'Hourly sensor readings collected over time',C:'Free-form customer support emails',D:'Product catalog exported as JSON documents'},
    matches:{'1':'Structured data','2':'Time-series data','3':'Unstructured text','4':'Semi-structured data'},
    answer:['A:1','B:2','C:3','D:4'],
    explanation:'A→Structured data เพราะมี schema แบบแถว/คอลัมน์, B→Time-series เพราะค่ามีลำดับตามเวลา, C→Unstructured text เพราะเป็นข้อความอิสระ, D→Semi-structured data เพราะ JSON มีโครงสร้างแต่ไม่ใช่ตารางแบบคงที่.'
  });

  add({
    task:'1.1', type:'single',
    question:'An operations team runs a nightly process that scores 25 million existing customer records. The results are written to storage and consumed by a downstream reporting job the next morning. No user is waiting for an immediate response, and the team wants to avoid maintaining an always-on endpoint. Which inference approach is MOST appropriate?',
    questionTh:'ทีม operations ประมวลผลลูกค้า 25 ล้าน record ทุกคืน ผลถูกเขียนลง storage เพื่อให้ระบบรายงานใช้ต่อเช้าวันถัดไป ไม่มีผู้ใช้รอผลทันทีและไม่ต้องการ endpoint ที่เปิดค้าง ควรใช้ inference แบบใด?',
    choices:{A:'Real-Time Inference',B:'Asynchronous Inference',C:'Batch Transform',D:'Serverless Inference'},
    answer:['C'],
    explanation:'ตอบ C — Batch Transform เหมาะกับ dataset ขนาดใหญ่ที่ประมวลผล offline เป็นชุดและไม่ต้องมี persistent endpoint. A เหมาะ interactive; B เหมาะ request รายงานใหญ่/นานทีละงาน; D เหมาะ request สั้นที่ traffic ไม่สม่ำเสมอ.'
  });

  add({
    task:'1.2', type:'single',
    question:'A public agency calculates a benefit payment using a legally defined formula based on income, household size, and eligibility status. Auditors require the agency to reproduce exactly how every payment was calculated, and the same inputs must always produce the same amount. Historical data is available, but predictions are not required. Which approach is MOST appropriate?',
    questionTh:'หน่วยงานรัฐคำนวณเงินช่วยเหลือตามสูตรกฎหมายจากรายได้ ขนาดครัวเรือน และสถานะ eligibility โดย auditor ต้องตรวจย้อนกลับได้และ input เดิมต้องได้จำนวนเดิมเสมอ แม้มี historical data ก็ไม่ต้องการ prediction ควรใช้แนวทางใด?',
    choices:{A:'A supervised regression model',B:'A foundation model with few-shot prompts',C:'Deterministic business rules',D:'An unsupervised clustering model'},
    answer:['C'],
    explanation:'ตอบ C — requirement ต้อง deterministic และตรวจสูตรได้ตรง ๆ จึงใช้ business rules. A และ B สร้างการคาดการณ์/ผลที่อาจไม่ deterministic; D ใช้ค้นหากลุ่มและไม่ได้คำนวณจำนวนเงินตามสูตรกฎหมาย.'
  });

  add({
    task:'1.2', type:'multiple',
    question:'A retailer wants to automate several customer-service tasks. It needs to detect sentiment and named entities in written reviews, convert call-center recordings into text, and generate spoken audio from approved response scripts. The company prefers managed AWS services rather than building custom models for these standard capabilities. Which THREE services directly match the requirements? (Select THREE.)',
    questionTh:'ร้านค้าปลีกต้องการทำ 3 งานคือ sentiment/entity จาก review, แปลงเสียง call center เป็น text และอ่านข้อความ script เป็นเสียง โดยต้องการใช้ managed AWS services ควรเลือกบริการใด 3 ตัว?',
    choices:{A:'Amazon Comprehend',B:'Amazon Transcribe',C:'Amazon Polly',D:'Amazon Rekognition',E:'Amazon Personalize',F:'Amazon Kendra'},
    answer:['A','B','C'],
    explanation:'ตอบ A, B, C — Comprehend ทำ NLP เช่น sentiment/entities, Transcribe ทำ speech-to-text, Polly ทำ text-to-speech. D วิเคราะห์ภาพ/วิดีโอ, E ทำ recommendation, F ทำ enterprise search/retrieval.'
  });

  add({
    task:'1.2', type:'single',
    question:'A bank must classify loan applications into a small set of risk categories. The input is structured tabular data, the output must be easy to explain to risk officers, and regulatory reviewers prefer a narrowly scoped predictive model. The bank does not need open-ended text generation or broad conversational behavior. Which solution is MOST appropriate?',
    questionTh:'ธนาคารต้องจัด loan application เป็น risk categories จากข้อมูลตาราง ต้องอธิบายกับ risk officer ได้และงานมีขอบเขตแคบ ไม่ต้องการ text generation หรือ conversational behavior ควรเลือก solution แบบใด?',
    choices:{A:'A traditional supervised ML classification model',B:'A large multimodal foundation model',C:'A diffusion model',D:'An autonomous multi-agent system'},
    answer:['A'],
    explanation:'ตอบ A — งาน structured classification ที่ขอบเขตแคบและต้องการ explainability เหมาะกับ traditional supervised ML. B กว้างเกิน requirement, C เน้น generative image/data patterns, D เพิ่ม orchestration/agent complexity โดยไม่จำเป็น.'
  });

  add({
    task:'1.2', type:'multiple',
    question:'A manufacturer wants an AI system to identify visible defects in product photos, summarize technician notes, and forecast next month\'s spare-parts demand. The company is deciding which AI capabilities are relevant to each part of the workflow and wants to avoid using a single technique for every task. Which TWO pairings are correct? (Select TWO.)',
    questionTh:'ผู้ผลิตต้องการตรวจ defect จากภาพ, สรุป technician notes และพยากรณ์ demand เดือนหน้า ต้องเลือก capability ให้ตรงงาน ข้อใดจับคู่ถูก 2 ข้อ?',
    choices:{A:'Computer vision for visible product defects',B:'NLP for summarizing technician notes',C:'Speech recognition for forecasting numeric demand',D:'Clustering for generating spoken maintenance instructions',E:'Diffusion models for deterministic inventory arithmetic'},
    answer:['A','B'],
    explanation:'ตอบ A, B — Computer vision เหมาะกับภาพและ NLP เหมาะกับข้อความ. C speech recognition ไม่ใช่ forecasting; D clustering ไม่ได้สร้างเสียง; E diffusion ไม่เหมาะกับ deterministic inventory calculation.'
  });

  add({
    task:'1.3', type:'single',
    question:'A team is developing a predictive model and wants to preserve a clean final evaluation. They have prepared data, trained candidate models, and now need to choose hyperparameters and compare candidates before deployment. After deployment, they will monitor production behavior and retrain when needed. Which dataset should be used for model selection before the final unbiased evaluation?',
    questionTh:'ทีมกำลังพัฒนา predictive model และต้องการเก็บ final evaluation ให้ unbiased หลัง train candidate models แล้ว ต้องเลือก hyperparameter/โมเดลก่อน deploy แล้วค่อย monitor/retrain ภายหลัง ควรใช้ dataset ใดสำหรับ model selection?',
    choices:{A:'Training set',B:'Validation set',C:'Test set',D:'Production inference logs only'},
    answer:['B'],
    explanation:'ตอบ B — Validation set ใช้ tune/select ระหว่างพัฒนา. A ใช้ fit parameters, C ควรเก็บไว้สำหรับ final unbiased evaluation, D เกิดหลัง deployment และใช้ monitoring/feedback มากกว่า model selection รอบพัฒนา.'
  });

  add({
    task:'1.3', type:'multiple',
    question:'A machine learning team wants a repeatable production process instead of manually rebuilding models whenever data changes. The team wants to track experiments, automate repeatable pipeline steps, manage model versions and approvals, monitor deployed behavior, and retrain when evidence shows performance has degraded. Which TWO capabilities are MOST aligned with MLOps goals? (Select TWO.)',
    questionTh:'ทีม ML ต้องการ production process ที่ทำซ้ำได้แทนการ build model ด้วยมือ ต้อง track experiment, automate pipeline, จัดการ version/approval, monitor และ retrain เมื่อ performance ลดลง ข้อใดสอดคล้องกับ MLOps มากที่สุด 2 ข้อ?',
    choices:{A:'Repeatable, versioned ML workflows',B:'Production monitoring and retraining processes',C:'Always selecting the largest available model',D:'Removing evaluation to shorten release time',E:'Keeping every experiment outside version control'},
    answer:['A','B'],
    explanation:'ตอบ A, B — MLOps เน้น repeatability/versioning/automation และ monitoring/retraining เพื่อ production readiness. C ไม่ใช่หลัก MLOps, D ลด quality control, E ตรงข้ามกับ traceability/versioning.'
  });

  add({
    task:'1.3', type:'ordering',
    question:'A team is preparing a standard ML lifecycle for a new fraud-detection project. The business objective is already defined, but the remaining activities are listed out of order. The team wants a sequence that keeps final evaluation before production use and ensures monitoring happens after deployment. Select and order the FIVE stages from earliest to latest.',
    questionTh:'ทีมเตรียม ML lifecycle หลัง define business objective แล้ว โดยต้องจัดลำดับตั้งแต่เตรียมข้อมูล ไป train/evaluate/deploy/monitor ให้ถูกต้อง จงเรียง 5 ขั้นตอนจากต้นไปปลาย',
    choices:{A:'Deploy the selected model',B:'Collect and prepare the data',C:'Monitor production performance and drift',D:'Train candidate models',E:'Evaluate the trained models'},
    answer:['B','D','E','A','C'],
    explanation:'ลำดับคือ Collect/prepare data → Train → Evaluate → Deploy → Monitor. ต้องประเมินก่อนนำขึ้น production และ monitoring เกิดหลัง deployment เพื่อดูคุณภาพจริงและสัญญาณที่ต้อง retrain.'
  });

  add({
    task:'1.3', type:'single',
    question:'A product team reports that its classification model has 96% accuracy, but the business still loses revenue because the model misses high-value positive cases. Management wants the technical team to evaluate both model behavior and whether the system is creating business value rather than relying on one technical metric. Which approach BEST addresses this concern?',
    questionTh:'ทีม product มีโมเดล classification accuracy 96% แต่ธุรกิจยังเสียรายได้เพราะพลาด positive case ที่สำคัญ ผู้บริหารต้องการดูทั้ง model behavior และ business value ไม่ใช่ metric เดียว ควรทำอย่างไร?',
    choices:{A:'Evaluate precision/recall together with business metrics such as ROI or task success',B:'Use accuracy alone because it already exceeds 95%',C:'Replace all business metrics with model parameter count',D:'Evaluate only training loss because production outcomes are downstream'},
    answer:['A'],
    explanation:'ตอบ A — ต้องดู technical metrics ที่ตรง failure mode เช่น precision/recall ควบคู่ business metrics เช่น ROI/task success. B อาจซ่อนปัญหา class/cost; C parameter count ไม่บอก value; D training loss ไม่สะท้อน production/business outcome.'
  });
})();