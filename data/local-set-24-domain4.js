(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:4,type:'single',...x});

  add({objective:'4.1.1',target:'bias-vs-fairness',
    q:'A hiring model produces recommendations for applicants across several demographic groups. An audit finds that historical labels systematically favored one group because past review practices were inconsistent, and the resulting model now produces materially different selection rates between otherwise comparable groups. The governance team wants to distinguish the source of the problem from the desired property of the system. Which statement best separates bias from fairness?',
    th:'โมเดลสำหรับงานสรรหาบุคลากรให้คำแนะนำกับผู้สมัครจากหลายกลุ่มประชากร การตรวจสอบพบว่า labels ในอดีตเอนเอียงไปสนับสนุนกลุ่มหนึ่งอย่างเป็นระบบ เพราะแนวทาง review ในอดีตไม่สม่ำเสมอ และโมเดลที่ได้จึงให้ selection rates แตกต่างกันอย่างมีนัยสำคัญระหว่างกลุ่มที่ควรเปรียบเทียบกันได้ ทีม governance ต้องการแยกต้นเหตุของปัญหาออกจากคุณสมบัติที่ระบบควรมี ข้อใดแยก bias กับ fairness ได้ถูกต้องที่สุด?',
    ask:'แยก Bias ซึ่งเป็นความเอนเอียงอย่างเป็นระบบ ออกจาก Fairness ซึ่งเป็นคุณสมบัติของผลลัพธ์/การปฏิบัติที่เหมาะสมระหว่างกลุ่ม.',
    choices:{A:'Bias describes systematic skew that can enter data or models; fairness concerns whether outcomes and treatment are appropriate across relevant groups',B:'Bias and fairness are always identical terms and measure exactly the same thing',C:'Fairness means maximizing model size, while bias means reducing latency',D:'Bias exists only after deployment and cannot originate in historical data'},
    answer:['A'],
    why:{A:'ถูก เพราะ bias คือ systematic skew ส่วน fairness พิจารณาความเหมาะสมของ outcomes/treatment ระหว่างกลุ่ม.',B:'ผิด เพราะสองแนวคิดเกี่ยวข้องกันแต่ไม่ใช่คำเดียวกัน.',C:'ผิด เพราะ size/latency ไม่ใช่นิยามของ bias/fairness.',D:'ผิด เพราะ bias สามารถมาจาก historical data, labels, sampling หรือ process ได้.'},
    cue:'Bias = ความเอนเอียง; Fairness = ตรวจว่าผลลัพธ์ระหว่างกลุ่มเหมาะสมหรือไม่.'});

  add({objective:'4.1.1',target:'inclusivity',
    q:'A public-service AI assistant will be used by people with different ages, literacy levels, languages, disabilities, and cultural backgrounds. The design team intentionally includes diverse user research, tests accessibility needs, and ensures training and evaluation data do not represent only the easiest or most common users. Which responsible-AI feature is the team emphasizing most directly?',
    th:'AI assistant สำหรับบริการสาธารณะจะถูกใช้โดยผู้คนที่มีช่วงอายุ ระดับการอ่านออกเขียนได้ ภาษา ความพิการ และภูมิหลังทางวัฒนธรรมแตกต่างกัน ทีมออกแบบตั้งใจทำ user research กับผู้ใช้ที่หลากหลาย ทดสอบความต้องการด้าน accessibility และตรวจว่าข้อมูลสำหรับ training/evaluation ไม่ได้เป็นตัวแทนเฉพาะผู้ใช้กลุ่มที่พบง่ายหรือมีจำนวนมากที่สุด ทีมกำลังเน้นคุณสมบัติ Responsible AI ใดโดยตรงที่สุด?',
    ask:'ระบุ Inclusivity จากการออกแบบให้ครอบคลุมความต้องการของผู้ใช้ที่หลากหลาย.',
    choices:{A:'Inclusivity',B:'Model extraction',C:'Data retention',D:'Inference throughput'},
    answer:['A'],
    why:{A:'ถูก เพราะ inclusivity เน้นการออกแบบและข้อมูลที่คำนึงถึงผู้ใช้หลากหลายกลุ่มและความต้องการ.',B:'ผิด เพราะ model extraction เป็น security threat.',C:'ผิด เพราะ retention เป็น data-governance policy.',D:'ผิด เพราะ throughput เป็น performance metric.'},
    cue:'รองรับ “คนหลากหลายจริง ๆ” = Inclusivity.'});

  add({objective:'4.1.1',target:'robustness',
    q:'A computer-vision system performs well on clean benchmark images but becomes unreliable when images contain realistic lighting changes, sensor noise, compression artifacts, or small adversarial perturbations that should not change the underlying object. The safety team wants the model to maintain acceptable behavior under these variations. Which responsible-AI characteristic is most directly being tested?',
    th:'computer-vision system ทำงานได้ดีบน benchmark images ที่สะอาด แต่กลับไม่น่าเชื่อถือเมื่อภาพมีการเปลี่ยนแปลงแสงที่พบจริง sensor noise, compression artifacts หรือ adversarial perturbations ขนาดเล็กซึ่งไม่ควรเปลี่ยนวัตถุพื้นฐาน ทีม safety ต้องการให้ model ยังคงพฤติกรรมที่ยอมรับได้ภายใต้ variations เหล่านี้ Responsible AI characteristic ใดถูกทดสอบโดยตรงที่สุด?',
    ask:'ระบุ Robustness จากความสามารถในการรักษาคุณภาพภายใต้ noise/perturbation/variation.',
    choices:{A:'Robustness',B:'Transparency',C:'Data residency',D:'Prompt versioning'},
    answer:['A'],
    why:{A:'ถูก เพราะ robustness วัดความทนทานของระบบต่อ perturbations, noise และการเปลี่ยนแปลงของ input.',B:'ผิด เพราะ transparency เน้นการเปิดเผยข้อมูลเกี่ยวกับระบบ/การตัดสินใจ.',C:'ผิด เพราะ residency เป็น location policy.',D:'ผิด เพราะ prompt versioning เป็น lifecycle control.'},
    cue:'Input เปลี่ยนนิดหน่อยแต่ระบบยังต้องไว้ใจได้ = Robustness.'});

  add({objective:'4.1.1',target:'safety',
    q:'A healthcare assistant can generate medically plausible advice, but the organization is concerned that unsafe instructions could cause direct harm if users act on them without professional review. The team adds restricted-topic handling, human escalation for high-risk cases, and controls that block clearly dangerous content. Which responsible-AI feature is the primary focus of these measures?',
    th:'healthcare assistant สามารถสร้างคำแนะนำที่ดูสมเหตุสมผลทางการแพทย์ได้ แต่องค์กรกังวลว่าคำแนะนำที่ไม่ปลอดภัยอาจก่อให้เกิดอันตรายโดยตรง หากผู้ใช้ปฏิบัติตามโดยไม่มีผู้เชี่ยวชาญตรวจ ทีมจึงเพิ่มการจัดการหัวข้อที่มีข้อจำกัด การส่งต่อให้มนุษย์ในเคสความเสี่ยงสูง และ controls ที่ block เนื้อหาอันตรายอย่างชัดเจน มาตรการเหล่านี้เน้น Responsible AI feature ใดเป็นหลัก?',
    ask:'ระบุ Safety จากการป้องกัน physical/real-world harm และการควบคุม high-risk outputs.',
    choices:{A:'Safety',B:'Clustering',C:'Token pricing',D:'Data cataloging'},
    answer:['A'],
    why:{A:'ถูก เพราะ controls ถูกออกแบบเพื่อลดอันตรายต่อผู้ใช้จาก unsafe outputs/actions.',B:'ผิด เพราะ clustering เป็น ML technique.',C:'ผิด เพราะ token pricing เป็น cost model.',D:'ผิด เพราะ cataloging เป็น metadata governance.'},
    cue:'ป้องกันอันตรายต่อผู้ใช้ = Safety.'});

  add({objective:'4.1.1',target:'veracity',
    q:'A research assistant writes fluent answers but sometimes combines real citations with unsupported claims that are not present in the source material. The organization introduces source checking, factual verification, and evaluation that measures whether statements are true and supported. Which responsible-AI property is the team trying to improve?',
    th:'research assistant เขียนคำตอบได้ลื่นไหล แต่บางครั้งผสม citations ที่มีอยู่จริงกับ claims ที่ไม่มีหลักฐานใน source material องค์กรจึงเพิ่มการตรวจแหล่งข้อมูล การตรวจข้อเท็จจริง และ evaluation ที่วัดว่าข้อความเป็นจริงและมีหลักฐานรองรับหรือไม่ ทีมกำลังพยายามปรับปรุง Responsible AI property ใด?',
    ask:'ระบุ Veracity จากการเน้น truthfulness/factual accuracy ของ output.',
    choices:{A:'Veracity',B:'Availability',C:'Model size',D:'Data retention'},
    answer:['A'],
    why:{A:'ถูก เพราะ veracity เกี่ยวกับความจริง ความถูกต้อง และความน่าเชื่อถือของ claims.',B:'ผิด เพราะ availability เป็น service reliability.',C:'ผิด เพราะ model size ไม่ใช่ responsible-AI property ที่ถาม.',D:'ผิด เพราะ retention เป็น governance lifecycle.'},
    cue:'“จริงไหม / มีหลักฐานไหม” = Veracity.'});

  add({objective:'4.1.2',target:'guardrails-content-filters',
    q:'A public chatbot must reduce the chance of returning harmful categories of content such as violence, hate, sexual content, or other configured harmful material. The application team wants a managed Amazon Bedrock control that can evaluate prompts and model responses for these categories without rebuilding the foundation model. Which capability is the closest fit?',
    th:'public chatbot ต้องลดโอกาสที่จะตอบเนื้อหาในหมวดที่เป็นอันตราย เช่น ความรุนแรง hate, sexual content หรือ harmful material อื่นที่กำหนดไว้ ทีม application ต้องการ managed control ของ Amazon Bedrock ที่ประเมินทั้ง prompts และ model responses สำหรับหมวดเหล่านี้ได้โดยไม่ต้องสร้าง foundation model ใหม่ Capability ใดตรงที่สุด?',
    ask:'ระบุ Content Filters ใน Amazon Bedrock Guardrails สำหรับ harmful-content categories.',
    choices:{A:'Content filters in Amazon Bedrock Guardrails',B:'SageMaker Feature Store',C:'Amazon S3 Glacier',D:'AWS Cost Explorer'},
    answer:['A'],
    why:{A:'ถูก เพราะ Guardrails content filters ใช้ควบคุม harmful content categories บน input/output ตาม configuration.',B:'ผิด เพราะ Feature Store จัดเก็บ/ให้บริการ ML features.',C:'ผิด เพราะ Glacier เป็น archival storage.',D:'ผิด เพราะ Cost Explorer วิเคราะห์ค่าใช้จ่าย.'},
    cue:'Harmful category = Guardrails Content Filter.'});

  add({objective:'4.1.2',target:'guardrails-control-map',type:'matching',
    q:'A company is configuring Amazon Bedrock Guardrails for three different policy needs. It must mask personally identifiable information in responses, block conversations about a company-defined prohibited topic even when the language is otherwise harmless, and reject specific banned words or phrases. The team wants to choose the most targeted guardrail control for each need. Match each policy need with the correct control.',
    th:'บริษัทกำลังตั้งค่า Amazon Bedrock Guardrails สำหรับ policy needs สามแบบ บริษัทต้อง mask ข้อมูลส่วนบุคคลใน responses, block การสนทนาเกี่ยวกับหัวข้อที่บริษัทกำหนดว่าห้าม แม้ภาษาโดยรวมจะไม่ harmful และปฏิเสธคำหรือวลีเฉพาะที่ถูกห้าม ทีมต้องการเลือก guardrail control ที่ตรงที่สุดสำหรับแต่ละความต้องการ จงจับคู่ policy need กับ control ที่ถูกต้อง.',
    ask:'แยก Sensitive Information Filters, Denied Topics และ Word Filters.',
    choices:{A:'Detect and mask PII such as email addresses or phone numbers',B:'Block a prohibited business topic based on semantic meaning',C:'Block an exact banned word or phrase'},
    matches:{'1':'Sensitive information filters','2':'Denied topics','3':'Word filters'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ PII/entity masking → Sensitive information filters.','✅ Semantic prohibited theme → Denied topics.','✅ Exact/custom words or phrases → Word filters.'],
    cue:'PII = Sensitive Info; Theme = Denied Topic; Exact phrase = Word Filter.'});

  add({objective:'4.1.3',target:'environmental-sustainability-model-choice',
    q:'Two foundation models both meet the accepted quality, latency, and compliance requirements for a high-volume summarization workload. One model is significantly larger and consumes much more compute for no measurable improvement in the business outcome. The architecture board wants to include environmental impact in responsible model selection. Which choice best aligns with that goal?',
    th:'foundation models สองตัวผ่าน quality, latency และ compliance requirements ที่ยอมรับได้เท่ากันสำหรับงาน summarization ปริมาณสูง แต่โมเดลหนึ่งใหญ่กว่ามากและใช้ compute มากกว่าอย่างชัดเจนโดยไม่มี measurable improvement ต่อ business outcome คณะกรรมการสถาปัตยกรรมต้องการพิจารณาผลกระทบสิ่งแวดล้อมใน responsible model selection ทางเลือกใดสอดคล้องกับเป้าหมายนี้มากที่สุด?',
    ask:'ใช้หลัก Sustainability/Right-sizing เมื่อหลายโมเดลผ่าน requirement เท่ากัน.',
    choices:{A:'Prefer the smaller efficient model that already meets the requirements',B:'Always choose the largest model regardless of need',C:'Increase output length to consume unused compute',D:'Retrain the larger model more frequently without evidence of benefit'},
    answer:['A'],
    why:{A:'ถูก เพราะ right-sizing ลด compute/energy ที่ไม่จำเป็นโดยไม่เสีย requirement.',B:'ผิด เพราะ size ใหญ่ไม่ใช่ responsible objective ในตัวเอง.',C:'ผิด เพราะใช้ compute เพิ่มโดยไม่สร้าง value.',D:'ผิด เพราะ retraining ที่ไม่มี measured benefit เพิ่ม resource use.'},
    cue:'ผ่าน requirement แล้ว → ใช้ compute เท่าที่จำเป็น.'});

  add({objective:'4.1.4',target:'legal-ip-infringement',
    q:'A marketing team uses a generative image model to create campaign art. One output closely reproduces a protected illustration owned by another company, including distinctive visual elements that raise questions about copying and licensing. Before publishing the image, legal counsel asks which GenAI risk category should be evaluated first. What is the most direct risk?',
    th:'ทีมการตลาดใช้ generative image model สร้าง artwork สำหรับแคมเปญ Output หนึ่งเลียนแบบภาพประกอบที่มีการคุ้มครองของบริษัทอื่นอย่างใกล้เคียง รวมถึงองค์ประกอบภาพที่โดดเด่นจนเกิดคำถามเรื่องการคัดลอกและ licensing ก่อนเผยแพร่ภาพ ฝ่ายกฎหมายถามว่าควรประเมิน GenAI risk category ใดก่อน ความเสี่ยงใดตรงที่สุด?',
    ask:'ระบุ Intellectual Property Infringement จาก copyright/ownership/licensing concern.',
    choices:{A:'Intellectual property infringement risk',B:'Concept drift',C:'Inference latency',D:'Data retention'},
    answer:['A'],
    why:{A:'ถูก เพราะ scenario เกี่ยวกับ copyright/ownership/licensing ของผลงานที่มีการคุ้มครอง.',B:'ผิด เพราะ concept drift เป็น production ML behavior change.',C:'ผิด เพราะ latency เป็น performance issue.',D:'ผิด เพราะ retention เป็น data lifecycle issue.'},
    cue:'Copyright / ownership / licensing = IP risk.'});

  add({objective:'4.1.4',target:'legal-trust-enduser-risk',type:'multiple',
    q:'A financial advice assistant begins producing biased recommendations for one demographic group and occasionally hallucinates unsupported investment claims. Customers post examples publicly and complain that the company cannot be trusted. The legal and risk teams want to identify the business and end-user consequences, not just the technical failure modes. Which THREE risks are directly present? (Select THREE.)',
    th:'financial advice assistant เริ่มให้ recommendations ที่มี bias ต่อ demographic group หนึ่ง และบางครั้ง hallucinate claims ด้านการลงทุนที่ไม่มีหลักฐาน ลูกค้านำตัวอย่างไปเผยแพร่และร้องเรียนว่าบริษัทไม่น่าเชื่อถือ ทีมกฎหมายและ risk ต้องการระบุผลกระทบทางธุรกิจและต่อ end users ไม่ใช่เพียง technical failure modes ความเสี่ยงใด 3 ข้อปรากฏโดยตรง?',
    ask:'เลือก Biased model outputs, Loss of customer trust และ End-user risk.',
    choices:{A:'Biased model outputs',B:'Loss of customer trust',C:'End-user harm or risk from unreliable advice',D:'Guaranteed regulatory approval',E:'Improved interpretability by default'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ model ให้ผลต่างต่อ demographic group อย่างไม่เหมาะสม.',B:'ถูก เพราะลูกค้าร้องเรียนและความน่าเชื่อถือของบริษัทลดลง.',C:'ถูก เพราะ unsupported financial claims อาจทำให้ผู้ใช้ตัดสินใจผิดและได้รับความเสียหาย.',D:'ผิด เพราะไม่มีการรับประกัน regulatory approval.',E:'ผิด เพราะ hallucination/bias ไม่ได้ทำให้ interpretability ดีขึ้น.'},
    cue:'GenAI legal/business risk ไม่ใช่แค่ IP—ยังมี Bias + Trust + End-user harm.'});

  add({objective:'4.1.5',target:'dataset-inclusivity-diversity-balance-curation',type:'multiple',
    q:'A public-benefits model will serve a population that varies by age, language, region, disability status, and income. The raw dataset is very large but dominated by one region, contains duplicates from repeated uploads, and has inconsistent records from several sources. Which THREE dataset practices most directly support responsible model development? (Select THREE.)',
    th:'โมเดลสำหรับ public benefits จะให้บริการประชากรที่แตกต่างกันด้านอายุ ภาษา ภูมิภาค สถานะความพิการ และรายได้ Raw dataset มีขนาดใหญ่มากแต่ข้อมูลส่วนใหญ่กระจุกอยู่ในภูมิภาคเดียว มีข้อมูลซ้ำจากการอัปโหลดซ้ำ และมี records ที่ไม่สอดคล้องกันจากหลายแหล่ง แนวปฏิบัติด้าน dataset ใด 3 ข้อสนับสนุน responsible model development โดยตรงที่สุด?',
    ask:'เลือก Inclusivity/Diversity, Balanced representation และ Curated data sources.',
    choices:{A:'Improve representation of relevant groups and regions',B:'Curate sources and remove problematic duplicate or low-quality records',C:'Assess whether the dataset is balanced enough for the intended population',D:'Keep every record because size alone guarantees fairness',E:'Avoid subgroup analysis so differences are not visible'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ inclusivity/diversity ต้องให้กลุ่มสำคัญมี representation.',B:'ถูก เพราะ curated data sources/cleaning ลด noise และ provenance problems.',C:'ถูก เพราะ balance ต้องสัมพันธ์กับ intended population/use case.',D:'ผิด เพราะ dataset ใหญ่ไม่ได้รับประกัน representativeness/fairness.',E:'ผิด เพราะการไม่ดู subgroup ทำให้มองไม่เห็นปัญหา.'},
    cue:'Responsible data = Diverse + Curated + Balanced for the real population.'});

  add({objective:'4.1.6',target:'bias-variance-over-under-fit',type:'matching',
    q:'An ML review board examines two models. Model A is very simple and performs poorly even on training data as well as validation data. Model B achieves excellent training performance but degrades sharply on new validation data and changes substantially when the training sample changes. The board wants to relate these symptoms to bias, variance, underfitting, and overfitting. Match each symptom with the most appropriate concept.',
    th:'คณะ review ML ตรวจโมเดลสองตัว Model A เรียบง่ายมากและทำผลงานได้ไม่ดีแม้บน training data รวมถึง validation data ส่วน Model B ทำผลงานบน training ได้ดีมากแต่คุณภาพลดลงชัดเจนบน validation data ใหม่ และผลเปลี่ยนมากเมื่อ training sample เปลี่ยน คณะกรรมการต้องการเชื่อมอาการเหล่านี้กับ bias, variance, underfitting และ overfitting จงจับคู่ symptom กับ concept ที่เหมาะสม.',
    ask:'แยก High Bias/Underfitting กับ High Variance/Overfitting.',
    choices:{A:'Poor performance on both training and validation because the model is too simple',B:'Excellent training performance but weak generalization and high sensitivity to training samples'},
    matches:{'1':'High bias / underfitting','2':'High variance / overfitting'},
    answer:['A:1','B:2'],
    explain:['✅ แย่ทั้ง train และ validation จาก model ง่ายเกิน → High bias / Underfitting.','✅ Train ดีมากแต่ validation แย่และ sensitive → High variance / Overfitting.'],
    cue:'Underfit = เรียนไม่พอ; Overfit = จำ train เกินไป.'});

  add({objective:'4.1.6',target:'bias-demographic-effect',
    q:'A credit model has acceptable overall accuracy, but subgroup analysis shows that errors are concentrated in one demographic group because the training sample contained much less representative data for that group. The team wants to understand why aggregate accuracy alone is insufficient. Which responsible-AI concern is most directly demonstrated?',
    th:'credit model มี overall accuracy อยู่ในระดับยอมรับได้ แต่ subgroup analysis พบว่า errors กระจุกตัวอยู่ใน demographic group หนึ่ง เพราะ training sample มีข้อมูลที่เป็นตัวแทนของกลุ่มนั้นน้อยกว่ามาก ทีมต้องการเข้าใจว่าทำไม aggregate accuracy อย่างเดียวจึงไม่เพียงพอ Responsible AI concern ใดถูกแสดงโดยตรงที่สุด?',
    ask:'เชื่อม dataset representation และ demographic error disparity กับ Bias/Fairness concern.',
    choices:{A:'Bias and fairness risk across demographic groups',B:'Prompt caching inefficiency',C:'Token-price volatility',D:'Model extraction'},
    answer:['A'],
    why:{A:'ถูก เพราะ subgroup หนึ่งได้รับ error มากจาก representation gap จึงเป็น bias/fairness concern.',B:'ผิด เพราะ caching ไม่เกี่ยวกับ demographic performance.',C:'ผิด เพราะ cost ไม่อธิบาย error disparity.',D:'ผิด เพราะ extraction เป็น security attack.'},
    cue:'Overall metric ดี แต่อีกกลุ่มพังได้—ต้องดู subgroup.'});

  add({objective:'4.1.7',target:'label-quality-human-audit-subgroup',type:'multiple',
    q:'A healthcare team wants to investigate whether a diagnosis-support model behaves reliably across hospitals and demographic groups. The labels were created by different reviewers over several years, and some decisions are too sensitive to trust only automated statistics. Which THREE practices are most directly aligned with the Exam Guide methods for detecting bias, trustworthiness, or truthfulness? (Select THREE.)',
    th:'ทีม healthcare ต้องการตรวจว่า diagnosis-support model ทำงานน่าเชื่อถือสม่ำเสมอระหว่างโรงพยาบาลและ demographic groups หรือไม่ Labels ถูกสร้างโดย reviewers ต่างคนกันตลอดหลายปี และ decisions บางประเภทมีความ sensitive เกินกว่าจะเชื่อเฉพาะ automated statistics แนวปฏิบัติใด 3 ข้อสอดคล้องโดยตรงกับวิธีใน Exam Guide สำหรับตรวจ bias, trustworthiness หรือ truthfulness?',
    ask:'เน้น Label Quality Analysis, Human Audits และ Subgroup Analysis ซึ่งชุดเก่าแทบไม่เคยถามตรง ๆ.',
    choices:{A:'Analyze label quality and consistency',B:'Perform human audits on important samples and decisions',C:'Evaluate performance separately for meaningful subgroups',D:'Hide subgroup metrics and report only global accuracy',E:'Assume labels are correct because the dataset is large'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ inconsistent labels สามารถสร้าง bias/measurement problems.',B:'ถูก เพราะ human audits ช่วยตรวจกรณีซับซ้อนและคุณภาพที่ metric อัตโนมัติอาจพลาด.',C:'ถูก เพราะ subgroup analysis เปิดเผย disparity ที่ aggregate metric ซ่อน.',D:'ผิด เพราะการซ่อน subgroup ทำให้ตรวจ bias ยากขึ้น.',E:'ผิด เพราะ volume ไม่รับประกัน label correctness.'},
    cue:'ตรวจ Responsible AI ต้องดู Label + Human audit + Subgroups.'});

  add({objective:'4.1.7',target:'clarify-monitor-a2i-map',type:'matching',
    q:'A regulated ML program needs three different controls at different lifecycle points. Before and during model development, it needs bias analysis and explainability such as feature attribution. After deployment, it must monitor changes in production data/model quality. For selected predictions that require human judgment, it wants a managed human-review workflow. Match each requirement with the most appropriate SageMaker capability.',
    th:'โปรแกรม ML ที่มีข้อกำกับต้องการ controls สามแบบในคนละช่วง lifecycle ก่อนและระหว่างพัฒนา model ต้องการ bias analysis และ explainability เช่น feature attribution หลัง deploy ต้อง monitor การเปลี่ยนแปลงของ production data/model quality และสำหรับ predictions บางรายการที่ต้องใช้ judgment ของมนุษย์ ต้องการ managed human-review workflow จงจับคู่ requirement กับ SageMaker capability ที่เหมาะสมที่สุด.',
    ask:'แยก SageMaker Clarify, SageMaker Model Monitor และ Amazon A2I.',
    choices:{A:'Bias analysis and feature-attribution explainability',B:'Post-deployment data/model-quality monitoring',C:'Route selected predictions to a human review workflow'},
    matches:{'1':'SageMaker Clarify','2':'SageMaker Model Monitor','3':'Amazon Augmented AI (Amazon A2I)'},
    answer:['A:1','B:2','C:3'],
    explain:['✅ Bias/SHAP-style explainability → SageMaker Clarify.','✅ Production monitoring/drift-quality → SageMaker Model Monitor.','✅ Managed human review → Amazon A2I.'],
    cue:'Clarify = Bias/Explain; Monitor = Watch production; A2I = Human review.'});

  add({objective:'4.2.1',target:'transparent-vs-explainable',
    q:'A bank publishes general documentation about an AI underwriting system, including its intended use, known limitations, data categories, and governance process. Separately, when an applicant asks why a particular application was declined, the bank can provide understandable factors that contributed to that specific decision. Which statement best distinguishes the two concepts involved?',
    th:'ธนาคารเผยแพร่เอกสารทั่วไปเกี่ยวกับระบบ AI underwriting ซึ่งรวม intended use, known limitations, data categories และ governance process แยกจากนั้น เมื่อผู้สมัครถามว่าทำไม application ของตนถูกปฏิเสธ ธนาคารสามารถให้ปัจจัยที่เข้าใจได้ซึ่งมีส่วนต่อการตัดสินใจเฉพาะเคสนั้น ข้อใดแยกสองแนวคิดที่เกี่ยวข้องได้ถูกต้องที่สุด?',
    ask:'แยก Transparency ระดับระบบออกจาก Explainability ของ decision/prediction เฉพาะเคส.',
    choices:{A:'General disclosure supports transparency; understandable reasons for a specific decision support explainability',B:'Both examples are only data retention',C:'Transparency means hiding model limitations from users',D:'Explainability means publishing every internal model parameter regardless of user need'},
    answer:['A'],
    why:{A:'ถูก เพราะ transparency บอกข้อมูลระบบ/การใช้โดยรวม ส่วน explainability ช่วยอธิบายเหตุผลของ decision.',B:'ผิด เพราะ retention เป็น data lifecycle policy.',C:'ผิด เพราะ transparency คือการเปิดเผย ไม่ใช่ซ่อน.',D:'ผิด เพราะ explainability เน้นเหตุผลที่มนุษย์เข้าใจได้ ไม่จำเป็นต้องเปิด parameters ทั้งหมด.'},
    cue:'What is this system? = Transparency; Why this outcome? = Explainability.'});

  add({objective:'4.2.1',target:'intrinsic-vs-posthoc-explainability',
    q:'A risk team compares a small decision tree whose path can be inspected directly with a complex neural network that requires a separate explanation method to estimate which inputs influenced a prediction. Both may be useful, but their explainability is achieved differently. Which description is most accurate?',
    th:'ทีม risk เปรียบเทียบ decision tree ขนาดเล็กซึ่งสามารถตรวจ path การตัดสินใจได้โดยตรง กับ neural network ที่ซับซ้อนซึ่งต้องใช้ explanation method แยกเพื่อประมาณว่า inputs ใดมีอิทธิพลต่อ prediction ทั้งสองแบบอาจมีประโยชน์ แต่ได้ explainability คนละวิธี คำอธิบายใดถูกต้องที่สุด?',
    ask:'แยก Intrinsically interpretable/transparent models ออกจาก Post-hoc explainability ของ black-box models.',
    choices:{A:'The tree is more intrinsically interpretable, while the neural network may rely on post-hoc explanation techniques',B:'The neural network is always fully transparent simply because it is larger',C:'Decision trees cannot be interpreted by humans',D:'Post-hoc explanations are the same as retraining the model from scratch'},
    answer:['A'],
    why:{A:'ถูก เพราะ simple trees/rules สามารถ inspect logic ได้ตรงกว่า ส่วน complex model มักต้องใช้ post-hoc explanation.',B:'ผิด เพราะ size/complexity มักทำให้ interpretability ลดลง ไม่ใช่เพิ่มอัตโนมัติ.',C:'ผิด เพราะ decision trees เป็นตัวอย่างที่ตีความได้ค่อนข้างตรง.',D:'ผิด เพราะ explanation ไม่เท่ากับ retraining.'},
    cue:'Tree/Rules = intrinsic; Black box + SHAP/etc. = post-hoc.'});

  add({objective:'4.2.2',target:'model-cards',
    q:'A model owner needs a durable artifact that records the model’s intended use, owners, training/evaluation information, risk considerations, performance results, and known limitations so reviewers can understand the model before approving it for a new use case. The organization uses SageMaker AI and wants a feature designed for model documentation and transparency. What should it use?',
    th:'model owner ต้องการ durable artifact ที่บันทึก intended use, owners, ข้อมูล training/evaluation, risk considerations, performance results และ known limitations เพื่อให้ reviewers เข้าใจ model ก่อนอนุมัติ use case ใหม่ องค์กรใช้ SageMaker AI และต้องการ feature ที่ออกแบบมาสำหรับ model documentation และ transparency ควรใช้อะไร?',
    ask:'ระบุ SageMaker Model Cards สำหรับ model documentation/transparency.',
    choices:{A:'SageMaker Model Cards',B:'Amazon SQS',C:'AWS Data Exchange',D:'Prompt Caching'},
    answer:['A'],
    why:{A:'ถูก เพราะ Model Cards ใช้จัดทำเอกสาร model details, intended use, evaluation และ risk/limitations.',B:'ผิด เพราะ SQS เป็น message queue.',C:'ผิด เพราะ Data Exchange เป็นบริการข้อมูลภายนอก/marketplace-like data access.',D:'ผิด เพราะ prompt caching เป็น inference optimization.'},
    cue:'เอกสารประจำตัว Model = Model Card.'});

  add({objective:'4.2.2',target:'transparency-tools-data-licensing',type:'multiple',
    q:'An AI governance board wants evidence that stakeholders can understand what a model is, how it was evaluated, and what constraints apply to its use. The board reviews model documentation, explainability analysis, the provenance and characteristics of relevant data, and the license terms of an open-source model before approval. Which THREE categories are explicitly aligned with transparency and explainability considerations in the Exam Guide? (Select THREE.)',
    th:'คณะกรรมการ AI governance ต้องการหลักฐานที่ทำให้ stakeholders เข้าใจว่า model คืออะไร ถูกประเมินอย่างไร และมีข้อจำกัดอะไรในการใช้งาน คณะกรรมการทบทวน model documentation, explainability analysis, ที่มาและลักษณะของข้อมูลที่เกี่ยวข้อง รวมถึง license terms ของ open-source model ก่อนอนุมัติ หมวดใด 3 ข้อสอดคล้องโดยตรงกับ transparency และ explainability considerations ใน Exam Guide?',
    ask:'เน้น Model/Explainability tools + Data provenance + Open-source licensing ซึ่งเคยออกน้อย.',
    choices:{A:'Model documentation and explainability tools such as Model Cards or Clarify',B:'Relevant data information and provenance',C:'Open-source model licensing and usage terms',D:'Hiding model limitations from reviewers',E:'Ignoring data origins if benchmark scores are high'},
    answer:['A','B','C'],
    why:{A:'ถูก เพราะ tools เช่น Model Cards/Clarify ช่วย documentation/explainability.',B:'ถูก เพราะข้อมูลและที่มามีผลต่อความโปร่งใสและความเข้าใจ model.',C:'ถูก เพราะ licensing กำหนดข้อจำกัดและความโปร่งใสด้านการใช้ open-source model.',D:'ผิด เพราะตรงข้ามกับ transparency.',E:'ผิด เพราะ data origins ยังมีความสำคัญต่อ governance/trust.'},
    cue:'Transparency ไม่ได้มีแค่คำอธิบาย prediction—ยังมี Data + License + Documentation.'});

  add({objective:'4.2.3',target:'safety-transparency-tradeoff',
    q:'A security team considers exposing very detailed internal model behavior to make an AI system easier to inspect. Another reviewer warns that revealing too much about hidden safety logic could make it easier for attackers to evade safeguards. The product team also observes that a simpler, more interpretable model performs slightly worse on a complex task than a less interpretable model. What tradeoff is the team evaluating?',
    th:'ทีม security กำลังพิจารณาเปิดเผย internal model behavior อย่างละเอียดเพื่อให้ตรวจสอบ AI system ได้ง่ายขึ้น แต่ reviewer อีกคนเตือนว่าการเปิดเผย hidden safety logic มากเกินไปอาจทำให้ attacker หาวิธีหลบ safeguards ได้ง่ายขึ้น ขณะเดียวกันทีมผลิตภัณฑ์พบว่า model ที่เรียบง่ายและตีความง่ายมี performance ต่ำกว่าเล็กน้อยในงานซับซ้อนเมื่อเทียบกับ model ที่ตีความยากกว่า ทีมกำลังประเมิน tradeoff ใด?',
    ask:'อธิบาย Safety vs Transparency และ Interpretability vs Performance tradeoffs.',
    choices:{A:'The tradeoff between transparency/interpretability, model performance, and protecting safety mechanisms',B:'A tradeoff only between storage classes',C:'A choice between batch and serverless inference',D:'A data-retention schedule'},
    answer:['A'],
    why:{A:'ถูก เพราะโจทย์กล่าวถึงทั้งการเปิดเผยที่อาจกระทบ safety และ interpretability ที่อาจแลกกับ performance.',B:'ผิด เพราะ storage ไม่เกี่ยวกับ model transparency.',C:'ผิด เพราะ inference mode ไม่ใช่ประเด็น.',D:'ผิด เพราะ retention ไม่ใช่ tradeoff ที่อธิบาย.'},
    cue:'โปร่งใสขึ้นอาจช่วย trust แต่ต้องไม่เปิดจนลด safety; interpretability ก็อาจ trade กับ performance.'});

  add({objective:'4.2.4',target:'human-centered-feedback',
    q:'A benefits-eligibility assistant will affect real users, so the design team does not want explainability to be a one-way technical report. Users should be able to signal when an explanation is confusing, report incorrect information, and request review when an automated outcome appears wrong. The team then uses this feedback to improve the system and its explanations. Which human-centered design principle is being applied?',
    th:'benefits-eligibility assistant จะส่งผลต่อผู้ใช้จริง ทีมออกแบบจึงไม่ต้องการให้ explainability เป็นรายงานทางเทคนิคแบบทางเดียว ผู้ใช้ควรสามารถแจ้งเมื่อคำอธิบายไม่เข้าใจ รายงานข้อมูลที่ผิด และขอ review เมื่อ automated outcome ดูไม่ถูกต้อง จากนั้นทีมจะนำ feedback นี้ไปปรับปรุงระบบและคำอธิบาย หลัก human-centered design ใดกำลังถูกใช้?',
    ask:'ระบุ User-feedback mechanisms เป็นหลัก human-centered explainable AI.',
    choices:{A:'User-feedback and review mechanisms',B:'Prompt poisoning',C:'Model extraction',D:'Token budgeting only'},
    answer:['A'],
    why:{A:'ถูก เพราะผู้ใช้มีช่องทางให้ feedback/challenge/review และข้อมูลถูกใช้ปรับปรุงระบบ.',B:'ผิด เพราะ poisoning เป็น security attack.',C:'ผิด เพราะ extraction เป็น model theft threat.',D:'ผิด เพราะ token budget ไม่ใช่ human-centered feedback design.'},
    cue:'Explainable AI ที่ human-centered ต้องมีทางให้ “คนตอบกลับระบบ”.'});

  add({objective:'4.2.4',target:'decision-transparency',
    q:'A loan applicant receives a decline notice from an AI-assisted workflow. The organization wants the communication to clearly state that AI contributed to the decision, explain the main understandable factors that affected the outcome, describe the role of human review, and tell the applicant how to request reconsideration. Which human-centered explainability principle is most directly reflected?',
    th:'ผู้สมัครสินเชื่อได้รับ notice ว่าคำขอถูกปฏิเสธจาก workflow ที่มี AI ช่วยตัดสิน องค์กรต้องการให้ข้อความแจ้งอย่างชัดเจนว่า AI มีส่วนต่อ decision อธิบายปัจจัยหลักที่เข้าใจได้ซึ่งมีผลต่อ outcome อธิบายบทบาทของ human review และบอกวิธีขอให้พิจารณาใหม่ หลัก human-centered explainability ใดสะท้อนอยู่โดยตรงที่สุด?',
    ask:'เน้น AI Decision Transparency ที่สื่อสารการใช้ AI เหตุผล และช่องทาง review/recourse.',
    choices:{A:'AI decision transparency for affected users',B:'Data compression',C:'Serverless inference',D:'Model distillation'},
    answer:['A'],
    why:{A:'ถูก เพราะผู้ใช้ได้รับข้อมูลว่า AI มีบทบาทอย่างไร เหตุผลหลักคืออะไร และมีช่องทาง review อย่างไร.',B:'ผิด เพราะ compression ไม่เกี่ยวกับ user-facing decision explanation.',C:'ผิด เพราะ inference mode ไม่เกี่ยวกับ transparency.',D:'ผิด เพราะ distillation เป็น model adaptation.'},
    cue:'คนที่ได้รับผลต้องรู้ว่า AI มีส่วนยังไง และขอ review ได้อย่างไร.'});
})();