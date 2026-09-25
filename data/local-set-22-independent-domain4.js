(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const add = x => bank.push({ domain:4, ...x });

  add({task:'4.1',type:'single',target:'transparency-vs-explainability-angle',
    question:'A bank tells applicants that AI is used, explains the intended use and known limitations of the system, and publishes when human review is available. Which responsible-AI principle is being emphasized most directly?',
    questionTh:'ธนาคารแจ้งผู้สมัครว่าใช้ AI อธิบาย intended use และ known limitations ของระบบ และบอกว่ามี human review เมื่อใด หลัก Responsible AI ใดถูกเน้นโดยตรงที่สุด?',
    choices:{A:'Transparency',B:'Explainability',C:'Robustness',D:'Sustainability'},
    answer:['A'],
    exp:['✅ A — การเปิดเผยว่าใช้ AI, intended use, limitations และ process เป็น Transparency.','❌ B — Explainability เน้นเหตุผลของ prediction/decision เฉพาะกรณี.','❌ C — Robustness คือความทนต่อ noise/perturbation.','❌ D — Sustainability เน้น resource/energy use.','🧠 จำสั้น ๆ — บอกว่าระบบคืออะไร/ใช้อย่างไร = Transparency; ทำไมเคสนี้ได้ผลนี้ = Explainability.']});

  add({task:'4.1',type:'single',target:'automation-bias',
    question:'A clinician sees strong evidence that conflicts with an AI recommendation but follows the recommendation anyway mainly because “the system is usually right.” Which bias is MOST directly illustrated?',
    questionTh:'แพทย์เห็น evidence ที่ขัดกับ AI recommendation อย่างชัดเจน แต่ยังทำตาม recommendation เพราะคิดว่า “ระบบปกติก็แม่น” bias ใดตรงที่สุด?',
    choices:{A:'Automation bias',B:'Measurement bias',C:'Sampling bias',D:'Selection bias'},
    answer:['A'],
    exp:['✅ A — เชื่อผลอัตโนมัติมากเกินไปแม้ evidence ขัดแย้ง = Automation bias.','❌ B — Measurement bias มาจากวิธีวัด/proxy ที่เพี้ยน.','❌ C — Sampling bias มาจาก sample ไม่ represent population.','❌ D — Selection bias มาจากกระบวนการเลือกตัวอย่าง/กลุ่ม.','🧠 จำสั้น ๆ — เชื่อ AI เพราะเป็น AI = Automation bias.']});

  add({task:'4.1',type:'multiple',target:'fairness-data-prep-angle',
    question:'A hiring dataset has far fewer examples from one demographic group and several annotators used different interpretations of the same label. Which TWO actions should happen before model training? (Select TWO.)',
    questionTh:'hiring dataset มีตัวอย่างของ demographic group หนึ่งน้อยมาก และ annotators หลายคนตีความ label เดียวกันไม่เหมือนกัน ควรทำอะไร 2 อย่างก่อน train model?',
    choices:{A:'Assess representation and curate/rebalance examples where appropriate',B:'Audit and harmonize label quality/consistency',C:'Hide subgroup attributes from evaluation',D:'Increase generation temperature',E:'Evaluate only overall accuracy'},
    answer:['A','B'],
    exp:['✅ A — Representation ต้องเพียงพอ/เหมาะกับ population ที่ต้องใช้จริง.','✅ B — Label consistency มีผลต่อ fairness และ quality.','❌ C — ซ่อน subgroup evaluation ทำให้ตรวจ disparity ยากขึ้น.','❌ D — Temperature ไม่เกี่ยวกับ dataset fairness.','❌ E — Aggregate accuracy อาจซ่อน subgroup problems.','🧠 จำสั้น ๆ — กลุ่มน้อย = Representation; label ไม่ตรง = Label quality.']});

  add({task:'4.2',type:'ordering',target:'responsible-ai-lifecycle-angle',
    question:'Order the responsible-AI activities so the team defines risk before building, evaluates before release, and monitors after release.',
    questionTh:'เรียงกิจกรรม Responsible AI ให้ทีมกำหนด risk ก่อนสร้าง ประเมินก่อน release และ monitor หลัง release.',
    choices:{A:'Monitor deployed behavior and incidents',B:'Evaluate performance, fairness, safety, and relevant risks',C:'Define intended use, affected users, and risk scenarios',D:'Document limitations, decisions, and residual risks',E:'Prepare appropriate and representative data'},
    answer:['C','E','B','D','A'],
    exp:['✅ ลำดับคือ Define → Data → Evaluate → Document → Monitor after deployment.','❌ Evaluate ต้องมาก่อน documentation ของผล/limitations และก่อน release.','🧠 จำสั้น ๆ — รู้ความเสี่ยง → เตรียมข้อมูล → ตรวจ → จด → เฝ้าดู.']});

  add({task:'4.2',type:'matching',target:'human-centered-ai-protections',
    question:'Match each scenario with the responsible-AI concept that BEST fits it.',
    questionTh:'จับคู่ scenario กับ Responsible AI concept ที่ตรงที่สุด.',
    choices:{A:'A person can stop an automated action before it affects a customer',B:'An affected customer can appeal a decision',C:'The system provides understandable reasons for one prediction',D:'Users are told the system uses AI and what its limits are'},
    matches:{'1':'Human oversight','2':'Recourse','3':'Explainability','4':'Transparency'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ หยุด/approve ก่อน action = Human oversight.','✅ ขอ review/appeal หลังได้รับผล = Recourse.','✅ เหตุผลของ prediction เฉพาะเคส = Explainability.','✅ แจ้ง AI/intended use/limits = Transparency.','🧠 จำสั้น ๆ — คนคุม / อุทธรณ์ / บอกเหตุผล / บอกระบบ.']});

  add({task:'4.1',type:'single',target:'adversarial-robustness',
    question:'A vision model performs well on normal images but fails when tiny, carefully crafted perturbations are added that are hard for humans to notice. Which responsible-AI concern is MOST directly involved?',
    questionTh:'vision model ทำงานดีบนภาพปกติ แต่พังเมื่อมี perturbations เล็ก ๆ ที่ถูกสร้างอย่างตั้งใจและมนุษย์แทบมองไม่เห็น concern ด้าน Responsible AI ใดเกี่ยวข้องโดยตรงที่สุด?',
    choices:{A:'Robustness',B:'Transparency',C:'Data residency',D:'Sustainability'},
    answer:['A'],
    exp:['✅ A — ความสามารถในการคง reliability เมื่อเจอ adversarial/noisy inputs คือ robustness.','❌ B — Transparency เป็นการเปิดเผยระบบ/ข้อจำกัด.','❌ C — Residency เป็นเรื่อง location ของข้อมูล.','❌ D — Sustainability เป็นเรื่อง resource/energy.','🧠 จำสั้น ๆ — เจอ perturbation แล้วยังต้องไว้ใจได้ = Robustness.']});

  add({task:'4.1',type:'single',target:'sustainability-right-sizing',
    question:'Two models meet the accepted quality threshold. One is much larger and consumes substantially more compute without measurable business benefit. Which choice better aligns with environmental sustainability?',
    questionTh:'มี 2 models ที่ผ่าน quality threshold เท่ากัน ตัวหนึ่งใหญ่กว่ามากและใช้ compute มากกว่าโดยไม่มี business benefit ที่วัดได้ ทางเลือกใดสอดคล้องกับ environmental sustainability มากกว่า?',
    choices:{A:'Use the smaller model that meets the requirement',B:'Always use the largest model available',C:'Generate longer outputs to use the larger model fully',D:'Retrain the larger model from scratch for every release'},
    answer:['A'],
    exp:['✅ A — Right-sizing compute/model ให้พอดีกับ requirement ลด resource/energy use ที่ไม่จำเป็น.','❌ B/C/D — เพิ่ม resource use โดยไม่มี requirement รองรับ.','🧠 จำสั้น ๆ — ผ่าน requirement แล้ว เล็กกว่าที่พอก็ sustainable กว่า.']});

  add({task:'4.1',type:'single',target:'ip-risk',
    question:'A generative model produces an advertisement that closely reproduces protected artwork owned by another company. Which risk category is MOST directly implicated?',
    questionTh:'generative model สร้างโฆษณาที่ใกล้เคียงกับ artwork ที่มีลิขสิทธิ์ของบริษัทอื่นมาก risk category ใดเกี่ยวข้องโดยตรงที่สุด?',
    choices:{A:'Intellectual-property infringement risk',B:'Concept drift',C:'Latency risk',D:'Class imbalance'},
    answer:['A'],
    exp:['✅ A — การสร้าง output ที่อาจละเมิด copyright/ownership/licensing เป็น IP legal risk.','❌ B — Concept drift เป็น ML production issue.','❌ C — Latency เป็น operational performance issue.','❌ D — Class imbalance เป็น dataset/modeling issue.','🧠 จำสั้น ๆ — Copyright / ownership / licensing = IP risk.']});

  add({task:'4.1',type:'single',target:'dpl-vs-dppl-angle',
    question:'A fairness analyst has not trained a model yet. She compares the positive-label rate between demographic groups in the historical training labels. Which metric family matches this stage?',
    questionTh:'fairness analyst ยังไม่ได้ train model และกำลังเปรียบเทียบ positive-label rate ระหว่าง demographic groups ใน historical training labels metric family ใดตรงกับ stage นี้?',
    choices:{A:'DPL',B:'DPPL',C:'BLEU',D:'RMSE'},
    answer:['A'],
    exp:['✅ A — DPL ดู difference in positive proportions ใน labels ก่อน training.','❌ B — DPPL ดู predicted labels หลังมี model predictions.','❌ C — BLEU เป็น text-generation metric.','❌ D — RMSE เป็น regression metric.','🧠 จำสั้น ๆ — DPL = Labels เดิม; DPPL = Predicted Labels.']});
})();