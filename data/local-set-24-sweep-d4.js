(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:4,type:'single',...x});

  add({objective:'4.1.7',target:'measurement-bias-angle',
    q:'A healthcare model is trained from measurements collected by devices used across several clinics. A quality audit discovers that one older device model systematically records blood-pressure values lower than the actual values and that this device was used much more often in one patient group. The team is concerned that the model may learn patterns from distorted measurements rather than true physiological differences. Which bias source is most directly illustrated?',
    th:'healthcare model ถูก train จากค่าการวัดที่รวบรวมด้วยอุปกรณ์ในหลายคลินิก Quality audit พบว่าอุปกรณ์รุ่นเก่าชนิดหนึ่งบันทึกค่าความดันต่ำกว่าค่าจริงอย่างเป็นระบบ และอุปกรณ์รุ่นนี้ถูกใช้กับผู้ป่วยกลุ่มหนึ่งบ่อยกว่ากลุ่มอื่นมาก ทีมกังวลว่า model อาจเรียนรู้ pattern จากค่าการวัดที่เพี้ยน แทนที่จะเป็นความแตกต่างทางสรีรวิทยาที่แท้จริง แหล่ง bias ใดถูกแสดงโดยตรงที่สุด?',
    ask:'ระบุ Measurement Bias จากเครื่องมือหรือวิธีวัดที่สร้าง systematic distortion ในข้อมูล.',
    choices:{A:'Measurement bias',B:'Automation bias',C:'Prompt leakage',D:'Concept drift'},
    answer:['A'],
    why:{A:'ถูก เพราะ measurement process/device ทำให้ค่าที่บันทึกเพี้ยนอย่างเป็นระบบและกระทบแต่ละกลุ่มไม่เท่ากัน.',B:'ผิด เพราะ automation bias คือมนุษย์เชื่อระบบอัตโนมัติมากเกินไป.',C:'ผิด เพราะ prompt leakage เป็นการเปิดเผย hidden prompt/instructions.',D:'ผิด เพราะ concept drift คือความสัมพันธ์ input-target เปลี่ยนตามเวลาใน production.'},
    cue:'ตัววัด/วิธีวัดทำข้อมูลเพี้ยน = Measurement Bias.'});

  add({objective:'4.1.7',target:'dpl-dppl-retest-angle',
    q:'A fairness team evaluates a binary approval system at two different lifecycle stages. Before training, it compares how often positive labels occur in the historical dataset for two demographic groups. After deployment testing, it compares how often the trained model predicts positive outcomes for the same groups. Which pairing correctly identifies the two fairness metrics?',
    th:'ทีม fairness ประเมินระบบอนุมัติแบบ binary ในสองช่วง lifecycle ก่อน training ทีมเปรียบเทียบว่ามี positive labels ใน historical dataset บ่อยแค่ไหนสำหรับ demographic groups สองกลุ่ม หลังทดสอบโมเดลที่ train แล้ว ทีมเปรียบเทียบว่าโมเดล predict positive outcomes บ่อยแค่ไหนสำหรับกลุ่มเดิม คู่ fairness metrics ใดเรียกสองการวัดนี้ได้ถูกต้อง?',
    ask:'แยก DPL ก่อน training จาก DPPL หลังมี predicted labels โดยผูกกับ lifecycle.',
    choices:{A:'DPL for historical dataset labels; DPPL for model-predicted labels',B:'DPPL for historical labels; DPL for predictions',C:'BLEU before training; ROUGE after prediction',D:'RMSE for labels; F1 for demographic proportions'},
    answer:['A'],
    why:{A:'ถูก เพราะ DPL ดู difference in positive proportions ของ dataset labels ส่วน DPPL ดู predicted labels จาก model.',B:'ผิด เพราะสลับ lifecycle ของสอง metric.',C:'ผิด เพราะ BLEU/ROUGE เป็น text-generation metrics.',D:'ผิด เพราะ RMSE/F1 ไม่ได้เป็น fairness proportion metrics ที่ scenario ถาม.'},
    cue:'DPL: L = Labels ก่อน train; DPPL: Predicted Labels หลัง model.'});

  add({objective:'4.1.7',target:'model-monitor-vs-clarify-lifecycle',
    q:'A regulated lending model has already been deployed. The team needs a production control that continuously watches incoming data and model-quality signals so it can detect drift or degradation over time. The team already completed pre-deployment bias analysis and feature-attribution work with SageMaker Clarify, so the new requirement is specifically post-deployment monitoring. Which SageMaker capability best fits?',
    th:'regulated lending model ถูก deploy ไปแล้ว ทีมต้องการ production control ที่เฝ้าดู incoming data และ model-quality signals อย่างต่อเนื่อง เพื่อให้ตรวจ drift หรือ degradation ตามเวลาได้ ทีมทำ pre-deployment bias analysis และ feature-attribution ด้วย SageMaker Clarify เสร็จแล้ว ดังนั้น requirement ใหม่คือ post-deployment monitoring โดยเฉพาะ SageMaker capability ใดเหมาะที่สุด?',
    ask:'แยก SageMaker Model Monitor หลัง deployment ออกจาก SageMaker Clarify ก่อน/ระหว่าง development.',
    choices:{A:'SageMaker Model Monitor',B:'SageMaker Clarify only',C:'Amazon A2I',D:'SageMaker Ground Truth'},
    answer:['A'],
    why:{A:'ถูก เพราะ Model Monitor ใช้เฝ้าดู production data/model quality และ drift ตาม configuration.',B:'ผิด เพราะ Clarify เน้น bias/explainability และไม่ได้แทน production monitoring ทั้งหมด.',C:'ผิด เพราะ A2I เป็น human review workflow.',D:'ผิด เพราะ Ground Truth เน้น data labeling.'},
    cue:'ก่อน deploy Bias/SHAP = Clarify; หลัง deploy Watch drift = Model Monitor.'});

  add({objective:'4.2.2',target:'open-source-license-transparency',
    q:'A product team wants to use an open-source foundation model because it performs well and can be deployed in the company’s preferred environment. Before approval, governance reviewers ask whether the model license permits the intended commercial use, whether modification and redistribution have conditions, and whether the organization must provide notices or attribution. Why is this review relevant to responsible and transparent AI adoption?',
    th:'ทีมผลิตภัณฑ์ต้องการใช้ open-source foundation model เพราะให้ผลดีและสามารถ deploy ใน environment ที่บริษัทต้องการ ก่อนอนุมัติ ทีม governance ถามว่า license ของ model อนุญาต commercial use ตามที่ตั้งใจหรือไม่ มีเงื่อนไขต่อการแก้ไขและ redistribution หรือไม่ และองค์กรต้องแสดง notices หรือ attribution หรือไม่ เหตุใด review นี้จึงเกี่ยวข้องกับ responsible และ transparent AI adoption?',
    ask:'อธิบายว่า Open-source Licensing เป็นส่วนหนึ่งของ transparency/governance ไม่ใช่ดู performance อย่างเดียว.',
    choices:{A:'Licensing defines permitted use and obligations, so understanding it is part of transparent and governed model adoption',B:'Open-source models have no license obligations by definition',C:'A high benchmark score automatically overrides license restrictions',D:'Licensing matters only for traditional databases, not AI models'},
    answer:['A'],
    why:{A:'ถูก เพราะ license terms กำหนดสิทธิ์และ obligations ที่องค์กรต้องเข้าใจก่อนใช้ model อย่างรับผิดชอบ.',B:'ผิด เพราะ open source ยังอยู่ภายใต้ license terms.',C:'ผิด เพราะ performance ไม่ override legal/license obligations.',D:'ผิด เพราะ model/software licenses มีผลโดยตรงต่อการนำไปใช้และแจกจ่าย.'},
    cue:'Open source ≠ ไม่มีข้อผูกพัน; ต้องอ่าน License ก่อนใช้.'});
})();