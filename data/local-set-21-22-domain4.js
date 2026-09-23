(() => {
  const bank = window.LOCAL_SET_21_22_BANK = window.LOCAL_SET_21_22_BANK || [];
  const add = x => bank.push({ domain: 4, ...x });

  add({
    task:'4.2', type:'single', target:'weakness: transparency-vs-explainability',
    v:{
      21:["A company publishes documentation that tells users AI is involved, explains the system's intended use, data sources at a high level, important limitations, and situations where it should not be relied on. Which responsible-AI concept is MOST directly being improved?","บริษัทเผยแพร่เอกสารแจ้งว่ามี AI เกี่ยวข้อง อธิบาย intended use แหล่งข้อมูลระดับสูง ข้อจำกัดสำคัญ และกรณีที่ไม่ควรพึ่งระบบ สิ่งนี้ช่วย responsible-AI concept ใดโดยตรงที่สุด?"],
      22:["A public-facing AI service provides clear disclosures about how the system should be used, its known limitations, and what users should expect. It does not explain the feature contribution for one specific prediction. Which concept is this primarily addressing?","AI service สำหรับผู้ใช้ทั่วไปมี disclosure ชัดเจนเรื่องการใช้งาน ข้อจำกัด และสิ่งที่ผู้ใช้ควรคาดหวัง แต่ไม่ได้อธิบาย feature contribution ของ prediction รายหนึ่ง แนวคิดใดเป็นหลัก?"]
    },
    choices:{A:'Transparency',B:'Explainability',C:'Data residency',D:'Prompt caching'},
    answer:['A'],
    exp:[
      '✅ A — Transparency เน้นการเปิดเผยว่า AI ทำงานในบริบทใด ใช้เพื่ออะไร มีข้อจำกัดอะไร และผู้ใช้ควรรู้อะไร.',
      '❌ B — Explainability เน้นการอธิบายเหตุผลของ prediction/decision เฉพาะกรณีหรือปัจจัยที่มีอิทธิพล.',
      '❌ C — Data residency คือข้อกำหนดเรื่องสถานที่เก็บ/ประมวลผลข้อมูล.',
      '❌ D — Prompt caching เป็น optimization ด้าน cost/latency.',
      '🧠 จำสั้น ๆ — Transparency = บอกระบบและข้อจำกัด; Explainability = ทำไม prediction นี้ออกมา.'
    ]
  });

  add({
    task:'4.1', type:'ordering', target:'weakness: responsible-ai-lifecycle',
    v:{
      21:["A company is creating a responsible-AI process for a high-impact application. Order the activities so risks and intended use are defined before data work, evaluation happens before release, and documentation precedes monitored deployment.","บริษัทกำลังสร้าง responsible-AI process สำหรับแอปที่มีผลกระทบสูง จงเรียงกิจกรรมให้ define intended use/risks ก่อน data work, evaluate ก่อน release และ document ก่อน deploy พร้อม monitoring"],
      22:["A governance committee wants a repeatable responsible-AI lifecycle rather than adding controls only after launch. Put the main stages in the correct order.","คณะกรรมการ governance ต้องการ responsible-AI lifecycle ที่ทำซ้ำได้ ไม่ใช่ค่อยเพิ่ม controls หลัง launch จงเรียง stages หลักให้ถูกต้อง"]
    },
    choices:{A:'Deploy with human oversight and monitoring',B:'Document results, limitations, and intended use',C:'Define intended use, users, and key risks',D:'Prepare representative and appropriate data',E:'Evaluate performance, bias, safety, and relevant risks'},
    answer:['C','D','E','B','A'],
    exp:[
      '✅ ลำดับที่ถูก — Define use/risks → Representative data → Evaluate → Document → Deploy/Monitor.',
      '1) เริ่มจากรู้ว่าจะใช้ระบบกับใครและความเสี่ยงอะไร.',
      '2) เตรียมข้อมูลที่เหมาะสมและเป็นตัวแทน.',
      '3) Evaluate quality, bias, safety และ risks ก่อน release.',
      '4) Document ผล ข้อจำกัด และเงื่อนไขการใช้.',
      '5) Deploy พร้อม oversight/monitoring และปรับปรุงต่อเนื่อง.',
      '🧠 จำสั้น ๆ — Define → Data → Evaluate → Document → Deploy/Monitor.'
    ]
  });

  add({
    task:'4.1', type:'single', target:'weakness: bias-types',
    v:{
      21:["A medical sensor systematically reads lower values for one demographic group because the device was calibrated mainly on another group. The training dataset therefore contains distorted measurements for that group. Which bias type is MOST directly involved?","medical sensor อ่านค่าต่ำกว่าความจริงอย่างเป็นระบบใน demographic group หนึ่ง เพราะ calibrate จากอีกกลุ่มเป็นหลัก ทำให้ training dataset มีค่าการวัดเพี้ยนในกลุ่มนั้น bias type ใดตรงที่สุด?"],
      22:["A voice-recognition dataset contains recordings from many groups, but the transcription process consistently labels one accent less accurately because the measurement/annotation method does not work equally well across groups. Which bias is the clearest?","dataset speech recognition มี recordings จากหลายกลุ่ม แต่กระบวนการ transcription ติด label สำเนียงหนึ่งผิดมากกว่าอย่างเป็นระบบเพราะวิธีวัด/annotation ทำงานไม่เท่ากันระหว่างกลุ่ม bias ใดชัดที่สุด?"]
    },
    choices:{A:'Measurement bias',B:'Sampling bias',C:'Automation bias',D:'Prompt caching bias'},
    answer:['A'],
    exp:[
      '✅ A — Measurement bias เกิดเมื่อวิธีวัดหรือเก็บค่าทำให้บางกลุ่มมีข้อมูลผิดเพี้ยนอย่างเป็นระบบ.',
      '❌ B — Sampling bias คือ dataset เลือกตัวอย่างไม่เป็นตัวแทน เช่นบางกลุ่มมีน้อยเกินไป.',
      '❌ C — Automation bias คือคนเชื่อ recommendation ของระบบอัตโนมัติมากเกินไปแม้มีหลักฐานขัดแย้ง.',
      '❌ D — Prompt caching ไม่ใช่ bias category.',
      '🧠 จำสั้น ๆ — กลุ่มมีน้อย = Sampling; วิธีวัดเพี้ยน = Measurement; คนเชื่อ AI เกิน = Automation.'
    ]
  });

  add({
    task:'4.1', type:'multiple', target:'confidence: fairness-data-prep',
    v:{
      21:["A hiring dataset under-represents several demographic groups, and labeling rules changed over time so equivalent cases may receive different labels. Which TWO actions should the team prioritize before training a new model? (Select TWO.)","hiring dataset มีบาง demographic groups น้อยเกินไป และ labeling rules เปลี่ยนตามเวลา ทำให้เคสคล้ายกันอาจได้ labels ต่างกัน ควรทำอะไร 2 อย่างก่อน train model ใหม่?"],
      22:["Before retraining a lending model, a team discovers subgroup imbalance and inconsistent labels created by different annotators. Which TWO practices MOST directly reduce fairness risk from the dataset? (Select TWO.)","ก่อน retrain lending model ทีมพบ subgroup imbalance และ labels ไม่สม่ำเสมอจาก annotators หลายคน ข้อใด 2 practices ลด fairness risk จาก dataset ได้ตรงที่สุด?"]
    },
    choices:{A:'Assess representation and rebalance/curate data where appropriate',B:'Review label quality and consistency across groups',C:'Increase temperature',D:'Evaluate only aggregate accuracy',E:'Remove subgroup analysis'},
    answer:['A','B'],
    exp:[
      '✅ A — Representation ที่เพียงพอช่วยลดความเสี่ยงจากบางกลุ่มมีข้อมูลน้อยเกินไป.',
      '✅ B — Label quality/consistency สำคัญเพราะ label ที่ต่างกันอย่างไม่เป็นธรรมสร้าง bias ได้.',
      '❌ C — Temperature เป็น inference control ไม่แก้ training-data fairness.',
      '❌ D — Aggregate accuracy อาจซ่อน disparity ระหว่างกลุ่ม.',
      '❌ E — การลบ subgroup analysis ทำให้ตรวจ fairness ได้ยากขึ้น.',
      '🧠 จำสั้น ๆ — Fairness เริ่มที่ “มีตัวแทนครบไหม” และ “label ยุติธรรม/สม่ำเสมอไหม”.'
    ]
  });

  add({
    task:'4.1', type:'single', target:'confidence: clarify-monitor-a2i',
    v:{
      21:["Before training a lending model, a team wants to measure bias in the dataset and later analyze feature attribution for the model. It is not asking for production drift monitoring or post-inference human review. Which SageMaker capability BEST fits?","ก่อน train lending model ทีมต้องการวัด bias ใน dataset และวิเคราะห์ feature attribution ของ model ภายหลัง โดยไม่ได้ถามเรื่อง production drift monitoring หรือ human review หลัง inference ควรใช้ SageMaker capability ใด?"],
      22:["A data science team needs pre-training bias analysis and SHAP-based explainability during model development. Which AWS capability is the direct match?","ทีม data science ต้องการ pre-training bias analysis และ explainability แบบ SHAP ระหว่างพัฒนา model AWS capability ใดตรงที่สุด?"]
    },
    choices:{A:'SageMaker Clarify',B:'SageMaker Model Monitor',C:'Amazon Augmented AI (A2I)',D:'SageMaker Ground Truth'},
    answer:['A'],
    exp:[
      '✅ A — SageMaker Clarify ใช้วิเคราะห์ bias และ feature attribution/explainability เช่น SHAP.',
      '❌ B — Model Monitor เน้น monitoring หลัง deploy เช่น data/model quality และ drift.',
      '❌ C — A2I ใช้ส่งบาง prediction ไป human review หลัง inference.',
      '❌ D — Ground Truth ใช้ labeling training data.',
      '🧠 จำสั้น ๆ — Bias/SHAP = Clarify; Drift หลัง deploy = Model Monitor; Human review หลัง inference = A2I; Label ก่อน train = Ground Truth.'
    ]
  });

  add({
    task:'4.1', type:'single', target:'undercovered: fairness-metrics-dpl-dppl',
    v:{
      21:["A team wants to inspect disparity in the historical labels of a training dataset before any model is trained. Which fairness metric category is associated with pre-training label imbalance rather than post-training predictions?","ทีมต้องการตรวจ disparity ใน historical labels ของ training dataset ก่อน train model ใด ๆ fairness metric category ใดเกี่ยวกับ label imbalance ก่อน training มากกว่าผลทำนายหลัง training?"],
      22:["A bias review asks for a metric computed from dataset labels before model training, not from the model's predicted outcomes. Which concept BEST matches?","การ review bias ต้องการ metric ที่คำนวณจาก dataset labels ก่อน train ไม่ใช่จาก predicted outcomes ของ model concept ใดตรงที่สุด?"]
    },
    choices:{A:'DPL (Difference in Positive Proportions in Labels)',B:'DPPL (Difference in Positive Proportions in Predicted Labels)',C:'RMSE',D:'BLEU'},
    answer:['A'],
    exp:[
      '✅ A — DPL ใช้ดูความแตกต่างของ positive proportions ใน labels ของ dataset ก่อน train.',
      '❌ B — DPPL ใช้กับ predicted labels หลังมี model prediction แล้ว.',
      '❌ C — RMSE เป็น regression error metric.',
      '❌ D — BLEU เป็น metric สำหรับ text generation/translation.',
      '🧠 จำสั้น ๆ — DPL = Data Labels ก่อน train; DPPL = Predicted Labels หลัง model.'
    ]
  });

  add({
    task:'4.1', type:'single', target:'undercovered: legal-risks',
    v:{
      21:["A marketing model generates an advertisement that closely reproduces copyrighted creative material without permission. Which responsible-AI risk is MOST directly illustrated?","marketing model สร้างโฆษณาที่เลียนแบบ copyrighted creative material อย่างใกล้ชิดโดยไม่ได้รับอนุญาต responsible-AI risk ใดตรงที่สุด?"],
      22:["A generative model produces branded content that may infringe a third party's protected work. The concern is legal exposure rather than ordinary accuracy or latency. Which risk category BEST fits?","generative model สร้าง branded content ที่อาจละเมิด protected work ของบุคคลอื่น ความกังวลคือ legal exposure ไม่ใช่ accuracy/latency risk category ใดตรงที่สุด?"]
    },
    choices:{A:'Intellectual property infringement risk',B:'Data drift',C:'Batch inference latency',D:'Prompt caching inefficiency'},
    answer:['A'],
    exp:[
      '✅ A — การนำผลงานที่ได้รับความคุ้มครองมาใช้หรือสร้าง output ที่ละเมิดสิทธิ์อาจก่อ intellectual-property infringement claims.',
      '❌ B — Data drift คือ distribution ของ production inputs เปลี่ยน.',
      '❌ C — Batch latency เป็น operational consideration ไม่ใช่ legal risk นี้.',
      '❌ D — Prompt caching เกี่ยวกับ performance/cost.',
      '🧠 จำสั้น ๆ — Copyright/ownership/licensing issue = IP legal risk.'
    ]
  });

  add({
    task:'4.1', type:'single', target:'undercovered: sustainability',
    v:{
      21:["Two models both meet the same summarization quality target. One is much larger, consumes more compute, and costs more energy per request, with no measurable business-quality benefit. Which responsible-AI practice is MOST appropriate?","สองโมเดลผ่าน quality target สำหรับ summarization เท่ากัน แต่ตัวหนึ่งใหญ่กว่า ใช้ compute/energy มากกว่าโดยไม่มี measurable quality benefit ควรทำอย่างไรตาม Responsible AI?"],
      22:["A team can satisfy its requirement with a smaller model, while a much larger model adds cost and energy consumption without improving the accepted quality metric. Which choice BEST reflects environmental sustainability?","ทีมสามารถทำ requirement ได้ด้วยโมเดลเล็ก แต่โมเดลใหญ่มากเพิ่ม cost และ energy โดยไม่ทำให้ quality ที่ยอมรับดีขึ้น ทางเลือกใดสอดคล้องกับ environmental sustainability มากที่สุด?"]
    },
    choices:{A:'Use the smaller model that meets the requirement',B:'Always use the largest model',C:'Double output length',D:'Pre-train a new model for every request'},
    answer:['A'],
    exp:[
      '✅ A — Right-sizing model/compute ช่วยลด resource use เมื่อคุณภาพถึง requirement แล้ว.',
      '❌ B — ใหญ่ที่สุดไม่เท่ากับเหมาะที่สุด และอาจใช้ทรัพยากรเกินจำเป็น.',
      '❌ C — เพิ่ม output length โดยไม่จำเป็นยิ่งเพิ่ม token/compute.',
      '❌ D — Pre-training ต่อ request เป็นสิ่งที่ไม่เหมาะสมและใช้ทรัพยากรมหาศาล.',
      '🧠 จำสั้น ๆ — ถ้าเล็กกว่าก็ผ่าน requirement ให้เลือกตัวที่พอเหมาะ.'
    ]
  });

  add({
    task:'4.2', type:'matching', target:'confidence: human-centered-ai',
    v:{
      21:["A company is designing a human-centered AI decision experience. Match each user need with the responsible-AI concept that BEST fits it.","บริษัทกำลังออกแบบประสบการณ์การตัดสินใจด้วย AI ที่คำนึงถึงผู้ใช้ ให้จับคู่ user need กับ responsible-AI concept ที่ตรงที่สุด"],
      22:["An eligibility system needs clear disclosure, understandable reasons, a person who can intervene before high-impact action, and a path for users to challenge an outcome. Match each need with the correct concept.","eligibility system ต้องมี disclosure ชัดเจน เหตุผลที่เข้าใจได้ คนที่แทรกแซงก่อน high-impact action และช่องทางให้ผู้ใช้โต้แย้งผล จับคู่แต่ละ need กับ concept ที่ถูกต้อง"]
    },
    choices:{A:'Transparency',B:'Explainability',C:'Human oversight',D:'Recourse'},
    matches:{'1':'Tell users AI is involved and communicate intended use or limitations','2':'Provide understandable reasons for a prediction or decision','3':'Allow a person to approve, review, or intervene before an important action','4':'Give an affected user a way to request review or appeal an outcome'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:[
      '✅ Transparency → แจ้งการใช้ AI, intended use และ limitations.',
      '✅ Explainability → อธิบายเหตุผลของ prediction/decision.',
      '✅ Human oversight → ให้คน review/approve/intervene ก่อน action สำคัญ.',
      '✅ Recourse → ให้ผู้ได้รับผลกระทบขอทบทวนหรือ appeal ได้.',
      '🧠 จำสั้น ๆ — Oversight = คนคุมก่อนทำ; Recourse = ผู้ใช้ขอทบทวนผล.'
    ]
  });
})();