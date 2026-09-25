(() => {
  const bank = window.LOCAL_SET_23_BANK = window.LOCAL_SET_23_BANK || [];
  const add = x => bank.push({ domain:4, ...x });

  add({task:'4.1',type:'single',target:'bias-variance-underfitting',
    question:'A model is too simple for the task and performs poorly on both the training set and new validation data. Which problem is MOST likely?',
    questionTh:'โมเดลง่ายเกินไปสำหรับงานและทำผลงานได้ไม่ดีทั้งบน training set และ validation data ใหม่ ปัญหาใดเป็นไปได้มากที่สุด?',
    choices:{A:'Underfitting / high bias',B:'Overfitting / high variance',C:'Concept drift after deployment',D:'Prompt injection'},
    answer:['A'],
    exp:['✅ A — โมเดลเรียน pattern ไม่พอและแย่ทั้ง train/validation เป็น underfitting หรือ high bias.','❌ B — Overfitting มัก train ดีแต่ validation แย่.','❌ C — Concept drift เป็น production relationship change.','❌ D — Prompt injection เป็น GenAI security risk.','🧠 จำสั้น ๆ — แย่ทั้ง train และ new data = Underfit; train ดีแต่ new data แย่ = Overfit.']});

  add({task:'4.1',type:'single',target:'guardrails-sensitive-information',
    question:'A customer-facing assistant must detect and mask personally identifiable information such as phone numbers and email addresses in model responses. Which Bedrock Guardrails capability is the closest fit?',
    questionTh:'customer-facing assistant ต้องตรวจจับและ mask ข้อมูลส่วนบุคคล เช่นเบอร์โทรศัพท์และอีเมลใน model responses ควรใช้ Bedrock Guardrails capability ใด?',
    choices:{A:'Sensitive information filters',B:'Content filters',C:'Denied topics',D:'Word filters'},
    answer:['A'],
    exp:['✅ A — Sensitive information filters ใช้ detect/block/mask PII และ sensitive entities.','❌ B — Content filters เน้น harmful content categories.','❌ C — Denied topics ใช้ block semantic topics/themes ที่กำหนด.','❌ D — Word filters ใช้คำ/วลีเฉพาะ ไม่ใช่ PII entity detection หลัก.','🧠 จำสั้น ๆ — PII/entity = Sensitive information.']});

  add({task:'4.1',type:'single',target:'sustainability-model-selection',
    question:'Two models meet the same accepted quality target. One consumes far less compute and has lower inference energy use with no measurable loss in business outcome. Which choice better reflects responsible model selection?',
    questionTh:'มีสองโมเดลที่ผ่าน quality target เท่ากัน ตัวหนึ่งใช้ compute และพลังงาน inference น้อยกว่ามากโดย business outcome ไม่ลดลง ทางเลือกใดสะท้อน responsible model selection ได้ดีกว่า?',
    choices:{A:'Choose the smaller efficient model',B:'Choose the largest model regardless of need',C:'Increase output length to use more compute',D:'Retrain the larger model more often'},
    answer:['A'],
    exp:['✅ A — Right-sizing model ให้พอดีกับ requirement ช่วยลด resource/energy use โดยไม่เสีย outcome.','❌ B/C/D — เพิ่ม resource use โดยไม่มี requirement รองรับ.','🧠 จำสั้น ๆ — ผ่านเกณฑ์เท่ากัน → ใช้ compute เท่าที่จำเป็น.']});

  add({task:'4.1',type:'single',target:'genai-legal-ip-risk',
    question:'A marketing model generates artwork that closely reproduces a copyrighted illustration owned by another company. Which legal risk is MOST directly involved?',
    questionTh:'marketing model สร้าง artwork ที่ใกล้เคียงกับภาพลิขสิทธิ์ของบริษัทอื่นมาก legal risk ใดเกี่ยวข้องโดยตรงที่สุด?',
    choices:{A:'Intellectual property infringement',B:'Data drift',C:'Latency degradation',D:'Class imbalance'},
    answer:['A'],
    exp:['✅ A — Copyright/ownership/licensing concerns เป็น intellectual-property risk.','❌ B — Data drift เป็น ML production issue.','❌ C — Latency เป็น operational performance issue.','❌ D — Class imbalance เป็น dataset issue.','🧠 จำสั้น ๆ — Copyright / ownership / licensing = IP risk.']});

  add({task:'4.2',type:'single',target:'model-cards-transparency',
    question:'A team wants a standard artifact that documents intended use, evaluation results, limitations, and risk considerations for a SageMaker model so stakeholders can understand how it should be used. Which feature is the closest fit?',
    questionTh:'ทีมต้องการ artifact มาตรฐานที่บันทึก intended use, evaluation results, limitations และ risk considerations ของ SageMaker model เพื่อให้ stakeholders เข้าใจว่าควรใช้ model อย่างไร ควรใช้ feature ใด?',
    choices:{A:'SageMaker Model Cards',B:'SageMaker Ground Truth',C:'Amazon Transcribe',D:'Amazon SQS'},
    answer:['A'],
    exp:['✅ A — Model Cards ใช้บันทึกข้อมูลสำคัญเกี่ยวกับ model, intended use, evaluation และ risk/limitations เพื่อความโปร่งใส.','❌ B — Ground Truth ใช้ data labeling.','❌ C — Transcribe แปลงเสียงเป็นข้อความ.','❌ D — SQS เป็น message queue.','🧠 จำสั้น ๆ — Model documentation/transparency artifact = Model Card.']});

  add({task:'4.1',type:'multiple',target:'responsible-dataset-characteristics',
    question:'Which TWO dataset characteristics most directly support responsible and fair model development across demographic groups? (Select TWO.)',
    questionTh:'ลักษณะ dataset ใด 2 อย่างสนับสนุนการพัฒนา model ที่ responsible และ fair ระหว่าง demographic groups โดยตรงที่สุด?',
    choices:{A:'Representative and inclusive coverage of relevant groups',B:'Consistent, reviewed label quality',C:'Maximum file size regardless of content',D:'Removing subgroup analysis from evaluation',E:'Keeping every duplicate example'},
    answer:['A','B'],
    exp:['✅ A — Representation/inclusivity ช่วยให้กลุ่มสำคัญไม่ถูกมองข้าม.','✅ B — Label quality ที่สม่ำเสมอลด measurement/annotation bias.','❌ C — File size ไม่รับประกัน fairness.','❌ D — การไม่ดู subgroup ทำให้ตรวจ disparity ยากขึ้น.','❌ E — Duplicates อาจบิด distribution และไม่ใช่ responsible practice.','🧠 จำสั้น ๆ — ครบกลุ่ม + label ดี.']});

  add({task:'4.2',type:'multiple',target:'human-centered-explainability',
    question:'Which TWO practices best support human-centered explainable AI for people affected by model decisions? (Select TWO.)',
    questionTh:'แนวปฏิบัติใด 2 อย่างสนับสนุน human-centered explainable AI สำหรับผู้ที่ได้รับผลจาก model decisions ได้ดีที่สุด?',
    choices:{A:'Provide understandable reasons for important decisions',B:'Provide a mechanism for user feedback or review',C:'Hide that AI is being used',D:'Use only aggregate accuracy with no explanation',E:'Remove all human involvement from consequential decisions'},
    answer:['A','B'],
    exp:['✅ A — ผู้ใช้ควรเข้าใจเหตุผลของ decision ที่กระทบตน.','✅ B — Feedback/review mechanism ช่วยให้ human-centered design มีช่องทางตอบสนอง.','❌ C — ลด transparency.','❌ D — Aggregate metric ไม่ตอบเหตุผลของ individual decision.','❌ E — งาน consequential มักต้องพิจารณา human oversight/feedback.','🧠 จำสั้น ๆ — เข้าใจเหตุผล + มีช่องทาง feedback/review.']});

  add({task:'4.1',type:'ordering',target:'responsible-ai-development-flow',
    question:'Order these responsible-AI activities from planning through post-deployment monitoring.',
    questionTh:'เรียง responsible-AI activities ตั้งแต่ planning จนถึง post-deployment monitoring.',
    choices:{A:'Monitor outcomes and incidents after deployment',B:'Evaluate quality, fairness, safety, and relevant risks',C:'Define intended use and affected users',D:'Prepare representative and governed data',E:'Document limitations and mitigation decisions'},
    answer:['C','D','B','E','A'],
    exp:['✅ ลำดับคือ Define use → Prepare data → Evaluate → Document → Monitor after release.','❌ ต้องประเมินก่อนบันทึก final limitations/mitigations และก่อนเฝ้าระวัง production.','🧠 จำสั้น ๆ — Define → Data → Check → Document → Monitor.']});

  add({task:'4.1',type:'matching',target:'responsible-ai-features',
    question:'Match each responsible-AI feature with the scenario that BEST represents it.',
    questionTh:'จับคู่ responsible-AI feature แต่ละตัวกับ scenario ที่แสดงลักษณะนั้นได้ตรงที่สุด.',
    choices:{A:'Fairness',B:'Robustness',C:'Veracity',D:'Inclusivity'},
    matches:{'1':'Comparable groups receive appropriately consistent treatment and outcomes','2':'The system remains reliable under noisy or perturbed inputs','3':'Outputs are checked for truthfulness and factual accuracy','4':'Design and data account for a diverse range of users and needs'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Fairness → ผลลัพธ์/การปฏิบัติที่เหมาะสมระหว่างกลุ่ม.','✅ Robustness → ยัง reliable เมื่อ input มี noise/perturbation.','✅ Veracity → ความจริงและ factual accuracy.','✅ Inclusivity → ครอบคลุมผู้ใช้และความต้องการที่หลากหลาย.','🧠 จำสั้น ๆ — Groups / Noise / Truth / Diverse users.']});
})();