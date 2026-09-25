(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const add = x => bank.push({ domain:1, ...x });

  add({task:'1.1',type:'single',target:'supervised-vs-unsupervised',
    question:'A retailer has years of purchase data but no labels describing customer segments. It wants the system to discover groups with similar buying behavior before marketers name the groups. Which learning approach BEST fits?',
    questionTh:'ร้านค้ามีข้อมูลการซื้อหลายปีแต่ไม่มี label ของกลุ่มลูกค้า ต้องการให้ระบบค้นหากลุ่มที่มีพฤติกรรมคล้ายกันก่อนที่ฝ่ายการตลาดจะตั้งชื่อกลุ่ม ควรใช้ learning approach ใด?',
    choices:{A:'Supervised classification',B:'Unsupervised clustering',C:'Supervised regression',D:'Reinforcement learning'},
    answer:['B'],
    exp:['✅ B — ไม่มี labels และต้องการค้นหาโครงสร้าง/กลุ่มจากข้อมูลเอง จึงเป็น unsupervised clustering.','❌ A — Classification ต้องมี labels เป้าหมายที่รู้ล่วงหน้า.','❌ C — Regression ทำนายค่าตัวเลขต่อเนื่องจาก labeled examples.','❌ D — Reinforcement learning เรียนจาก actions และ rewards ไม่ใช่การแบ่งกลุ่ม dataset.','🧠 จำสั้น ๆ — ไม่มี label + หา group = Clustering.']});

  add({task:'1.3',type:'multiple',target:'classification-metrics-costs',
    question:'A fraud team says missing a real fraud case is very costly, but it also wants to know how trustworthy a fraud alert is when the model raises one. Which TWO metrics answer these two questions most directly? (Select TWO.)',
    questionTh:'ทีม fraud บอกว่าการปล่อย fraud จริงหลุดไปมีต้นทุนสูง และยังอยากรู้ว่าเมื่อโมเดลแจ้งเตือน fraud แล้ว เชื่อถือได้แค่ไหน ควรดู metrics ใด 2 ตัวโดยตรง?',
    choices:{A:'Recall',B:'Precision',C:'MAE',D:'R-squared',E:'Perplexity'},
    answer:['A','B'],
    exp:['✅ A — Recall ตอบว่า fraud จริงถูกจับได้กี่ส่วน จึงสัมพันธ์กับการลด False Negative.','✅ B — Precision ตอบว่าเคสที่ถูก flag ว่า fraud แล้วเป็น fraud จริงกี่ส่วน.','❌ C — MAE เป็น regression metric.','❌ D — R-squared ใช้กับ regression.','❌ E — Perplexity ใช้ประเมิน language modeling ไม่ใช่ fraud classification.','🧠 จำสั้น ๆ — กลัวของจริงหลุด = Recall; เชื่อ alert ได้แค่ไหน = Precision.']});

  add({task:'1.3',type:'single',target:'mae-business-interpretation',
    question:'A delivery-time model has an MAE of 4.2 minutes on a representative test set. Which interpretation is MOST appropriate?',
    questionTh:'โมเดลทำนายเวลาส่งของมี MAE เท่ากับ 4.2 นาทีบน test set ที่เป็นตัวแทนของงานจริง ข้อใดตีความได้เหมาะสมที่สุด?',
    choices:{A:'Predictions are off by about 4.2 minutes on average in absolute terms',B:'Every prediction is exactly 4.2 minutes wrong',C:'The model is correct 95.8% of the time',D:'Large errors were squared before averaging'},
    answer:['A'],
    exp:['✅ A — MAE คือค่าเฉลี่ยของ absolute error และมีหน่วยเดียวกับ target จึงตีความว่าโดยเฉลี่ยคลาดประมาณ 4.2 นาที.','❌ B — เป็นค่าเฉลี่ย ไม่ได้หมายความว่าทุกเคสผิด 4.2 นาทีเท่ากัน.','❌ C — MAE ไม่ใช่ accuracy percentage.','❌ D — การยกกำลังสอง error เป็นลักษณะของ MSE/RMSE ไม่ใช่ MAE.','🧠 จำสั้น ๆ — MAE = average |error| ในหน่วยของ target.']});

  add({task:'1.3',type:'single',target:'overfitting-vs-underfitting',
    question:'A model performs extremely well on its training data but substantially worse on new validation data. Increasing model complexity made the gap even larger. Which issue is MOST likely?',
    questionTh:'โมเดลทำผลงานดีมากบน training data แต่แย่ลงมากบน validation data ใหม่ และเมื่อเพิ่มความซับซ้อนของโมเดล gap ยิ่งกว้างขึ้น ปัญหาใดเป็นไปได้มากที่สุด?',
    choices:{A:'Underfitting',B:'Overfitting',C:'Concept drift after deployment',D:'Label imbalance only'},
    answer:['B'],
    exp:['✅ B — Train ดีมากแต่ validation แย่และ gap เพิ่มเมื่อ model ซับซ้อนขึ้น เป็นอาการของ overfitting.','❌ A — Underfitting มักทำได้ไม่ดีทั้ง training และ validation.','❌ C — Concept drift เป็นปัญหาหลัง distribution/relationship เปลี่ยนใน production ไม่ใช่ train-vs-validation gap นี้.','❌ D — Label imbalance อาจมีผล แต่ไม่ได้อธิบาย pattern นี้โดยตรงที่สุด.','🧠 จำสั้น ๆ — Train เก่งเกิน แต่ของใหม่แย่ = Overfitting.']});

  add({task:'1.3',type:'single',target:'concept-drift',
    question:'A recommendation model sees roughly the same customer feature distributions as before, but customers now respond differently to the same offers because market behavior changed. Which production issue BEST describes this?',
    questionTh:'โมเดล recommendation เห็น distribution ของ customer features ใกล้เคียงเดิม แต่ลูกค้าตอบสนองต่อ offer แบบเดิมต่างไปเพราะพฤติกรรมตลาดเปลี่ยน ปัญหา production ใดตรงที่สุด?',
    choices:{A:'Data drift',B:'Concept drift',C:'Overfitting',D:'Data leakage'},
    answer:['B'],
    exp:['✅ B — Input distribution ใกล้เดิม แต่ความสัมพันธ์ X→Y เปลี่ยน จึงเป็น Concept drift.','❌ A — Data drift คือ distribution ของ input/features เปลี่ยน.','❌ C — Overfitting เป็นปัญหาการ generalize จาก training ไม่ใช่ความสัมพันธ์ในโลกจริงเปลี่ยนหลัง deploy.','❌ D — Leakage คือข้อมูล training เผย target อย่างไม่เหมาะสม.','🧠 จำสั้น ๆ — X เดิม แต่ X→Y เปลี่ยน = Concept drift.']});

  add({task:'1.2',type:'single',target:'deterministic-vs-ml-angle',
    question:'A tax calculator must apply published brackets and statutory formulas exactly, and auditors must be able to reproduce any historical result from the same inputs. Which design is MOST appropriate?',
    questionTh:'ระบบคำนวณภาษีต้องใช้ช่วงภาษีและสูตรตามกฎหมายแบบตรงตัว และ auditor ต้องคำนวณผลเดิมย้อนหลังได้จาก input เดิม ควรออกแบบแบบใด?',
    choices:{A:'Deterministic rules implementing the formulas',B:'A regression model trained on past tax returns',C:'A foundation model prompted with examples',D:'A clustering model over taxpayer records'},
    answer:['A'],
    exp:['✅ A — กฎและสูตรถูกกำหนดชัด ต้อง exact/reproducible จึงเหมาะกับ deterministic rules.','❌ B — Regression ใช้ประมาณความสัมพันธ์จากข้อมูล ทั้งที่สูตรจริงมีอยู่แล้ว.','❌ C — FM เพิ่ม nondeterminism โดยไม่จำเป็น.','❌ D — Clustering ใช้ค้นกลุ่ม ไม่ได้คำนวณสูตรกฎหมาย.','🧠 จำสั้น ๆ — มีสูตร authoritative อยู่แล้ว = ใช้ Rules.']});

  add({task:'1.2',type:'single',target:'async-vs-realtime-inference',
    question:'A media service submits 20-minute videos for analysis. Processing can take several minutes, requests may contain large payloads, and users do not need the result in the same HTTP response. Which inference pattern BEST fits?',
    questionTh:'บริการ media ส่งวิดีโอ 20 นาทีไปวิเคราะห์ งานอาจใช้เวลาหลายนาที payload ใหญ่ และผู้ใช้ไม่จำเป็นต้องได้ผลใน HTTP response เดิม ควรใช้ inference pattern ใด?',
    choices:{A:'Real-time inference',B:'Serverless inference for short requests',C:'Asynchronous inference',D:'Online feature store lookup'},
    answer:['C'],
    exp:['✅ C — งาน request ใหญ่/นานและรับผลภายหลังเหมาะกับ asynchronous inference.','❌ A — Real-time เหมาะงานที่ต้องตอบเร็วใน request-response เดียว.','❌ B — Serverless inference เหมาะ request สั้นและ traffic กระตุก ไม่ใช่งานยาว payload ใหญ่.','❌ D — Feature store ไม่ใช่ inference execution mode.','🧠 จำสั้น ๆ — งานใหญ่/นาน + รับผลทีหลัง = Async.']});

  add({task:'1.3',type:'ordering',target:'validation-test-workflow',
    question:'A team already has labeled data and wants an unbiased final estimate after tuning. Order these activities from model development to final evaluation.',
    questionTh:'ทีมมี labeled data แล้วและต้องการ final estimate ที่ unbiased หลัง tuning จงเรียงกิจกรรมตั้งแต่พัฒนา model จนถึง final evaluation.',
    choices:{A:'Evaluate once on the untouched test set',B:'Fit candidate models on training data',C:'Choose hyperparameters/model using validation results',D:'Split data into training, validation, and test sets'},
    answer:['D','B','C','A'],
    exp:['✅ ลำดับคือ Split → Train → Tune/select on Validation → Final Test.','❌ Test ไม่ควรถูกใช้เลือก hyperparameters เพราะจะทำให้ final estimate ปนเปื้อน.','🧠 จำสั้น ๆ — Test เปิดกล่องครั้งสุดท้าย.']});

  add({task:'1.1',type:'matching',target:'ai-task-map',
    question:'Match each business problem with the MOST appropriate AI task type.',
    questionTh:'จับคู่ business problem แต่ละแบบกับ AI task type ที่เหมาะที่สุด.',
    choices:{A:'Predict next month\'s numeric sales',B:'Assign an email to one of five known categories',C:'Discover natural customer groups without labels',D:'Choose actions over time to maximize a reward'},
    matches:{'1':'Regression','2':'Classification','3':'Clustering','4':'Reinforcement learning'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Numeric continuous prediction → Regression.','✅ Known discrete labels → Classification.','✅ ไม่มี labels และหา natural groups → Clustering.','✅ Sequential actions + reward → Reinforcement learning.','🧠 จำสั้น ๆ — Number=Regression; Label=Classification; No label groups=Clustering; Action+Reward=RL.']});

  add({task:'1.3',type:'multiple',target:'mlops-evidence',
    question:'A regulated ML team must reproduce any deployed model and understand why it was promoted. Which TWO practices provide the strongest foundation for this requirement? (Select TWO.)',
    questionTh:'ทีม ML ที่มีข้อกำกับต้อง reproduce model ที่ deploy ไปแล้วได้ทุก version และรู้ว่าทำไม version นั้นจึงถูก promote แนวปฏิบัติใด 2 ข้อเป็นพื้นฐานสำคัญที่สุด?',
    choices:{A:'Version model/data/code artifacts',B:'Record evaluation results and promotion decisions',C:'Delete old experiments after deployment',D:'Tune directly on the final test set',E:'Rely only on dashboard screenshots'},
    answer:['A','B'],
    exp:['✅ A — Versioning ทำให้รู้ว่า artifact ใดประกอบเป็น model ที่ deploy.','✅ B — Evaluation/promotion records ทำให้ trace เหตุผลของการตัดสินใจได้.','❌ C — ลบข้อมูลเก่าทำลาย reproducibility.','❌ D — ใช้ test set tune ทำให้ final evaluation ไม่ unbiased.','❌ E — Screenshot อย่างเดียวไม่ใช่ artifact/evidence ที่เพียงพอ.','🧠 จำสั้น ๆ — Reproduce = Version; Why promoted = Evaluation evidence.']});

  add({task:'1.2',type:'single',target:'textract-vs-rekognition',
    question:'An insurer uploads scanned claim forms and needs printed text, table cells, and key-value fields such as Policy Number and Claim Amount. Which AWS AI service is the direct match?',
    questionTh:'บริษัทประกันอัปโหลด claim forms แบบสแกน และต้องการอ่านข้อความ ตาราง และ key-value fields เช่น Policy Number กับ Claim Amount ควรใช้ AWS AI service ใด?',
    choices:{A:'Amazon Rekognition',B:'Amazon Textract',C:'Amazon Transcribe',D:'Amazon Personalize'},
    answer:['B'],
    exp:['✅ B — Textract ดึง text, forms, tables และ key-value structures จากเอกสาร.','❌ A — Rekognition วิเคราะห์ objects/faces/labels ในภาพและวิดีโอ ไม่ใช่ document form extraction.','❌ C — Transcribe แปลงเสียงเป็นข้อความ.','❌ D — Personalize ทำ recommendations.','🧠 จำสั้น ๆ — Document fields/tables = Textract; objects/faces = Rekognition.']});

  add({task:'1.1',type:'matching',target:'transformer-primitives',
    question:'Match each transformer-related concept with its role.',
    questionTh:'จับคู่ concept ที่เกี่ยวกับ transformer กับหน้าที่ของมัน.',
    choices:{A:'Tokenization',B:'Embeddings',C:'Positional information',D:'Attention'},
    matches:{'1':'Split text into model units/IDs','2':'Represent tokens as vectors','3':'Represent order or position in the sequence','4':'Weight relationships among parts of the context'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Tokenization → แบ่ง text เป็น token units/IDs.','✅ Embeddings → แปลง tokens เป็น vectors.','✅ Positional information → บอกลำดับ/ตำแหน่ง.','✅ Attention → ชั่งความสัมพันธ์ระหว่างส่วนต่าง ๆ ของ context.','🧠 จำสั้น ๆ — Split → Vector → Position → Relate.']});

  add({task:'1.3',type:'single',target:'class-imbalance-f1',
    question:'Only 0.2% of transactions are fraud. A model that predicts every case as legitimate achieves 99.8% accuracy, but the team wants a single score that balances precision and recall for the fraud class. Which metric is MOST appropriate?',
    questionTh:'มีเพียง 0.2% ของ transactions ที่เป็น fraud โมเดลที่ทายทุกเคสว่า legitimate ได้ accuracy 99.8% แต่ทีมต้องการคะแนนเดียวที่ balance precision และ recall ของ fraud class ควรใช้ metric ใด?',
    choices:{A:'Accuracy',B:'F1 score',C:'MAE',D:'R-squared'},
    answer:['B'],
    exp:['✅ B — F1 เป็น harmonic mean ของ precision และ recall จึงเหมาะเมื่อสนใจ balance สองตัวนี้ใน imbalanced classification.','❌ A — Accuracy อาจดูสูงมากแม้โมเดลไม่จับ minority class เลย.','❌ C — MAE เป็น regression metric.','❌ D — R-squared เป็น regression metric.','🧠 จำสั้น ๆ — Imbalanced + balance Precision/Recall = F1.']});
})();