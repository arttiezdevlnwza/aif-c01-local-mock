(() => {
  const bank = window.LOCAL_SET_23_BANK = window.LOCAL_SET_23_BANK || [];
  const add = x => bank.push({ domain:3, ...x });

  add({task:'3.1',type:'single',target:'fm-selection-context-window',
    question:'A legal assistant must analyze contracts that are often much longer than the input limit of one candidate model. Which selection criterion is MOST directly relevant?',
    questionTh:'legal assistant ต้องวิเคราะห์สัญญาที่มักยาวเกิน input limit ของ candidate model ตัวหนึ่ง เกณฑ์เลือก model ใดเกี่ยวข้องโดยตรงที่สุด?',
    choices:{A:'Maximum input/context length',B:'Temperature',C:'Number of training epochs',D:'Label cardinality'},
    answer:['A'],
    exp:['✅ A — เอกสารยาวต้องพิจารณา input/context length ที่ model รองรับ.','❌ B — Temperature ควบคุม randomness ไม่ได้เพิ่ม context limit.','❌ C — Training epochs เป็น training parameter.','❌ D — Label cardinality เกี่ยวกับ classification labels.','🧠 จำสั้น ๆ — เอกสารยาว = ดู Context window.']});

  add({task:'3.1',type:'single',target:'temperature-creativity-angle',
    question:'A creative-writing application wants more varied wording and is willing to accept less predictable responses. Which inference-parameter change BEST aligns with that goal?',
    questionTh:'แอป creative writing ต้องการ wording ที่หลากหลายขึ้นและยอมรับได้หากคำตอบ predictable น้อยลง ควรปรับ inference parameter ใด?',
    choices:{A:'Increase temperature moderately',B:'Decrease temperature toward zero',C:'Reduce input length only',D:'Increase vector dimensions'},
    answer:['A'],
    exp:['✅ A — Temperature สูงขึ้นเพิ่ม sampling variation และ creativity.','❌ B — Temperature ต่ำลงทำให้ output คงที่ขึ้น.','❌ C — Input length ไม่ใช่ตัวควบคุม creativity โดยตรง.','❌ D — Vector dimensions ไม่ใช่ inference sampling parameter.','🧠 จำสั้น ๆ — Variety ↑ → Temperature ↑.']});

  add({task:'3.1',type:'single',target:'rag-business-application',
    question:'An employee assistant must answer from private policy documents that change frequently and cite the passages it used. Which design BEST fits?',
    questionTh:'employee assistant ต้องตอบจาก private policy documents ที่เปลี่ยนบ่อยและแสดง passages ที่ใช้เป็นแหล่งอ้างอิง design ใดเหมาะที่สุด?',
    choices:{A:'Retrieval-Augmented Generation (RAG)',B:'Train a new FM from scratch after every update',C:'Clustering',D:'Increase temperature'},
    answer:['A'],
    exp:['✅ A — RAG ดึง knowledge ปัจจุบันตอน runtime และใช้เป็น grounding/citation ได้โดยไม่ต้อง retrain ทุกครั้ง.','❌ B — Training ใหม่ทุก update แพงและไม่เหมาะกับข้อมูลเปลี่ยนบ่อย.','❌ C — Clustering ไม่ได้ตอบคำถามจาก knowledge source.','❌ D — Temperature ไม่เพิ่ม current knowledge.','🧠 จำสั้น ๆ — Facts เปลี่ยนบ่อย + citation = RAG.']});

  add({task:'3.1',type:'multiple',target:'vector-database-options',
    question:'Which TWO AWS options are directly suitable when an FM application needs vector similarity search while either using a search-oriented engine or keeping relational PostgreSQL data? (Select TWO.)',
    questionTh:'AWS options ใด 2 ตัวเหมาะโดยตรงเมื่อ FM application ต้องการ vector similarity search โดยกรณีหนึ่งเน้น search engine และอีกกรณีต้องคง relational PostgreSQL data?',
    choices:{A:'Amazon OpenSearch Service',B:'Amazon Aurora PostgreSQL-compatible with pgvector support',C:'Amazon SQS',D:'Amazon EventBridge',E:'AWS CloudTrail'},
    answer:['A','B'],
    exp:['✅ A — OpenSearch รองรับ search/vector retrieval workloads.','✅ B — Aurora PostgreSQL-compatible สามารถใช้ vector extension/capability สำหรับ similarity search พร้อม relational data.','❌ C — SQS เป็น message queue.','❌ D — EventBridge เป็น event routing service.','❌ E — CloudTrail เป็น API activity logging.','🧠 จำสั้น ๆ — Search engine = OpenSearch; relational PostgreSQL + vectors = Aurora/RDS PostgreSQL.']});

  add({task:'3.1',type:'single',target:'customization-cost-rag-vs-finetune',
    question:'A company needs answers grounded in a private knowledge base that changes daily. It wants the least operational effort and does not need persistent changes to model behavior. Which customization approach is generally the BEST fit?',
    questionTh:'บริษัทต้องการคำตอบที่ grounded จาก private knowledge base ซึ่งเปลี่ยนทุกวัน ต้องการ operational effort ต่ำ และไม่จำเป็นต้องเปลี่ยน behavior ของ model แบบถาวร แนวทาง customization ใดเหมาะที่สุด?',
    choices:{A:'RAG',B:'Fine-tune the model every day',C:'Pre-train a new model',D:'Model distillation'},
    answer:['A'],
    exp:['✅ A — RAG อัปเดต knowledge source ได้โดยไม่ต้อง update weights ทุกวัน.','❌ B — Fine-tune ทุกวันมี operational/cost overhead สูงเกิน requirement.','❌ C — Pre-training ใหม่แพงและเกินความจำเป็น.','❌ D — Distillation ใช้สร้าง student model เล็ก ไม่ได้แก้ knowledge freshness.','🧠 จำสั้น ๆ — Knowledge เปลี่ยนบ่อย = Retrieval; behavior เปลี่ยนถาวร = Fine-tune.']});

  add({task:'3.1',type:'single',target:'agent-business-application',
    question:'A travel assistant must decide which external service to call next based on the user goal, use tools, observe results, and continue until the task is complete. Which concept BEST describes this design?',
    questionTh:'travel assistant ต้องตัดสินใจว่าจะเรียก external service ใดต่อจาก goal ของผู้ใช้ ใช้ tools ดูผลลัพธ์ แล้วทำต่อจนงานเสร็จ แนวคิดใดอธิบาย design นี้ได้ดีที่สุด?',
    choices:{A:'AI agent',B:'Static prompt template',C:'Offline batch inference',D:'K-means clustering'},
    answer:['A'],
    exp:['✅ A — Agent สามารถ reason/plan เลือก tool ทำ action และใช้ observation ทำขั้นถัดไป.','❌ B — Prompt template อย่างเดียวไม่ได้ orchestrate tool loop.','❌ C — Batch inference ไม่ได้ตัดสินใจแบบ dynamic หลายขั้น.','❌ D — Clustering ใช้จัดกลุ่มข้อมูล.','🧠 จำสั้น ๆ — Goal → Choose tool → Act → Observe → Continue = Agent.']});

  add({task:'3.2',type:'single',target:'negative-prompting',
    question:'A prompt says, “Write a product description, but do not mention competitor names or make medical claims.” Which prompt-engineering construct is being used most directly?',
    questionTh:'prompt ระบุว่า “เขียน product description แต่ห้ามพูดชื่อคู่แข่งหรือกล่าวอ้างทางการแพทย์” prompt-engineering construct ใดถูกใช้โดยตรงที่สุด?',
    choices:{A:'Negative prompting',B:'Few-shot prompting',C:'Model distillation',D:'Reranking'},
    answer:['A'],
    exp:['✅ A — Negative prompt/instruction ระบุสิ่งที่ model ไม่ควรทำหรือไม่ควรรวมใน output.','❌ B — Few-shot ต้องมีหลาย examples.','❌ C — Distillation เป็น training technique.','❌ D — Reranking เป็น retrieval technique.','🧠 จำสั้น ๆ — “อย่าทำ/อย่าใส่...” = Negative prompt.']});

  add({task:'3.2',type:'single',target:'one-vs-few-shot',
    question:'A prompt shows several representative input-output demonstrations so the model can infer the desired pattern before handling a new case. Which prompting technique is being used?',
    questionTh:'prompt แสดง input-output demonstrations หลายตัวที่เป็นตัวแทนของงาน เพื่อให้ model จับ pattern ที่ต้องการก่อนทำเคสใหม่ เทคนิค prompting นี้คืออะไร?',
    choices:{A:'Few-shot prompting',B:'Chain-of-thought prompting',C:'Prompt templating',D:'Zero-shot prompting'},
    answer:['A'],
    exp:['✅ A — หลาย demonstrations ก่อน task ใหม่คือ few-shot prompting.','❌ B — Chain-of-thought เน้น reasoning process ไม่ได้ถูกนิยามจากจำนวน examples.','❌ C — Prompt template คือโครง reusable ที่มี placeholders.','❌ D — Zero-shot ไม่มี demonstrations.','🧠 จำสั้น ๆ — หลาย examples = Few-shot.']});

  add({task:'3.2',type:'multiple',target:'prompt-best-practices',
    question:'A team wants more reliable prompt results during development. Which THREE practices align with prompt-engineering best practices? (Select THREE.)',
    questionTh:'ทีมต้องการให้ผลจาก prompt เชื่อถือได้มากขึ้นระหว่างพัฒนา แนวปฏิบัติใด 3 ข้อสอดคล้องกับ prompt-engineering best practices?',
    choices:{A:'Use clear and specific instructions',B:'Experiment and compare prompt variants',C:'Keep prompts concise while preserving needed context',D:'Hide the task objective from the model',E:'Add irrelevant examples to increase length',F:'Assume the first prompt version is final'},
    answer:['A','B','C'],
    exp:['✅ A — Specific instructions ลด ambiguity.','✅ B — Experimentation ช่วยหาวิธี prompt ที่เหมาะกับ task/model.','✅ C — Concision ช่วยลด noise โดยยังคง context ที่จำเป็น.','❌ D — ซ่อน objective เพิ่ม ambiguity.','❌ E — Irrelevant examples เพิ่ม noise/cost.','❌ F — Prompt ควรถูกทดลองและปรับ ไม่ใช่ถือว่า version แรกดีที่สุด.','🧠 จำสั้น ๆ — Clear + Test + Concise.']});

  add({task:'3.2',type:'multiple',target:'prompt-security-risks',
    question:'Which THREE are recognized prompt-engineering security risks or attack patterns? (Select THREE.)',
    questionTh:'ข้อใด 3 อย่างเป็น security risks หรือ attack patterns ที่เกี่ยวกับ prompt engineering?',
    choices:{A:'Prompt injection/hijacking',B:'Jailbreaking',C:'Prompt exposure/leakage',D:'Regression',E:'Clustering',F:'Batch inference'},
    answer:['A','B','C'],
    exp:['✅ A — Injection/hijacking พยายามแทรกหรือ override instructions.','✅ B — Jailbreaking พยายามหลบ safeguards/restrictions.','✅ C — Exposure/leakage พยายามเปิดเผย hidden prompt/instructions.','❌ D/E/F — เป็น ML/inference concepts ไม่ใช่ prompt attacks.','🧠 จำสั้น ๆ — แทรก / แหก / ล้วง = Prompt security family.']});

  add({task:'3.2',type:'single',target:'prompt-management',
    question:'A production application needs reusable prompt templates, variables, saved versions, and a controlled way to reference an approved prompt version. Which Amazon Bedrock capability BEST fits?',
    questionTh:'production application ต้องการ reusable prompt templates, variables, saved versions และวิธีอ้างอิง approved prompt version อย่างควบคุม ควรใช้ Amazon Bedrock capability ใด?',
    choices:{A:'Prompt Management',B:'Knowledge Bases',C:'Model Evaluation',D:'Guardrails content filters'},
    answer:['A'],
    exp:['✅ A — Prompt Management ใช้จัดเก็บ reusable prompts, variables และ versions.','❌ B — Knowledge Bases ใช้ RAG/retrieval.','❌ C — Model Evaluation ใช้ประเมิน FM outputs.','❌ D — Guardrails ใช้ safety filtering.','🧠 จำสั้น ๆ — Template + Version = Prompt Management.']});

  add({task:'3.3',type:'matching',target:'fm-customization-techniques',
    question:'A model team is choosing among four adaptation strategies. Connect each project requirement to the technique that BEST matches it.',
    questionTh:'ทีม model กำลังเลือก adaptation strategies 4 แบบ ให้จับคู่ project requirement แต่ละข้อกับ technique ที่เหมาะที่สุด.',
    choices:{A:'Make task behavior persistent using labeled instruction-response examples',B:'Absorb terminology from a large unlabeled domain corpus',C:'Create a smaller model that imitates a stronger teacher',D:'Reuse knowledge from a pretrained model for a related target problem'},
    matches:{'1':'Instruction tuning / supervised fine-tuning','2':'Continued pre-training','3':'Knowledge distillation','4':'Transfer learning'},
    answer:['A:1','B:2','C:3','D:4'],
    exp:['✅ Labeled instruction-response behavior → SFT/instruction tuning.','✅ Large domain corpus → Continued pre-training.','✅ Smaller student imitates teacher → Distillation.','✅ Reuse learned knowledge for related task → Transfer learning.','🧠 จำสั้น ๆ — Labels / Corpus / Teacher→Student / Reuse.']});

  add({task:'3.3',type:'multiple',target:'finetune-data-preparation',
    question:'Before fine-tuning an FM, which THREE data-preparation practices are most appropriate? (Select THREE.)',
    questionTh:'ก่อน fine-tune FM แนวปฏิบัติด้าน data preparation ใด 3 ข้อเหมาะสมที่สุด?',
    choices:{A:'Curate and remove low-quality or duplicate examples',B:'Check label consistency and representativeness',C:'Verify governance, privacy, and rights for training use',D:'Mix final evaluation examples into training',E:'Ignore demographic imbalance if overall volume is large',F:'Keep contradictory labels intentionally without review'},
    answer:['A','B','C'],
    exp:['✅ A — Curation ลด noise และ duplicates.','✅ B — Label quality/representativeness มีผลต่อ quality และ fairness.','✅ C — Governance/privacy/rights ต้องตรวจให้พร้อมก่อน train.','❌ D — ทำ evaluation contamination.','❌ E — Volume มากไม่ได้แปลว่า subgroup representation ดี.','❌ F — Contradictions ที่ไม่ตั้งใจทำ training signal แย่ลง.','🧠 จำสั้น ๆ — Clean + Representative + Governed.']});

  add({task:'3.3',type:'single',target:'rlhf',
    question:'A model is improved using rankings or preferences from human reviewers so the model learns to favor outputs people prefer. Which technique is MOST closely associated with this?',
    questionTh:'โมเดลถูกปรับปรุงโดยใช้ rankings หรือ preferences จาก human reviewers เพื่อให้ model เรียนรู้ว่า output แบบใดที่คนต้องการ เทคนิคใดสัมพันธ์กับวิธีนี้มากที่สุด?',
    choices:{A:'Reinforcement learning from human feedback (RLHF)',B:'K-means clustering',C:'Prompt caching',D:'Vector reranking'},
    answer:['A'],
    exp:['✅ A — RLHF ใช้ human feedback/preferences เพื่อช่วยปรับ behavior ของ model.','❌ B — K-means เป็น clustering.','❌ C — Prompt caching เป็น inference optimization.','❌ D — Vector reranking จัดลำดับ retrieval candidates.','🧠 จำสั้น ๆ — Human preference → model behavior = RLHF.']});

  add({task:'3.3',type:'ordering',target:'sft-lifecycle-retest',
    question:'A team has already selected a base model. Order the controlled fine-tuning steps from dataset preparation through release.',
    questionTh:'ทีมเลือก base model แล้ว จงเรียง controlled fine-tuning steps ตั้งแต่เตรียม dataset จนถึง release.',
    choices:{A:'Release the approved customized model',B:'Evaluate the customized model on held-out criteria',C:'Prepare and approve the fine-tuning dataset',D:'Run the fine-tuning job'},
    answer:['C','D','B','A'],
    exp:['✅ ลำดับคือ Prepare/approve data → Fine-tune → Evaluate → Release.','❌ Release ต้องเกิดหลัง evaluation ผ่านเกณฑ์.','🧠 จำสั้น ๆ — Data → Tune → Check → Release.']});

  add({task:'3.4',type:'single',target:'bertscore-semantic',
    question:'Generated answers often use different wording from references while preserving the same meaning. Which metric is designed to compare semantic similarity using contextual embeddings?',
    questionTh:'generated answers มักใช้ wording ต่างจาก references แต่ยังคงความหมายเดียวกัน metric ใดออกแบบมาเพื่อเปรียบเทียบ semantic similarity ด้วย contextual embeddings?',
    choices:{A:'BERTScore',B:'BLEU',C:'ROUGE-L',D:'RMSE'},
    answer:['A'],
    exp:['✅ A — BERTScore ใช้ contextual embeddings จึงจับ semantic similarity ได้แม้ wording ต่าง.','❌ B — BLEU เน้น n-gram overlap และใช้กับ translation บ่อย.','❌ C — ROUGE-L เป็น overlap metric ที่ดู sequence overlap.','❌ D — RMSE เป็น regression metric.','🧠 จำสั้น ๆ — Meaning similarity แม้คำต่าง = BERTScore.']});

  add({task:'3.4',type:'multiple',target:'fm-evaluation-approaches',
    question:'A team is evaluating open-ended FM answers where quality cannot be captured by one exact-match score. Which THREE approaches can provide useful evaluation evidence? (Select THREE.)',
    questionTh:'ทีมกำลังประเมิน open-ended FM answers ที่คุณภาพไม่สามารถวัดด้วย exact-match score เดียวได้ แนวทางใด 3 อย่างให้ evaluation evidence ที่มีประโยชน์?',
    choices:{A:'Human evaluation with a rubric',B:'Benchmark datasets and task-relevant metrics',C:'LLM-as-a-judge calibrated against human-reviewed samples',D:'Ignore task objectives and compare output length only',E:'Use training loss as the only production metric',F:'Judge quality solely by model parameter count'},
    answer:['A','B','C'],
    exp:['✅ A — Human rubric ช่วยประเมิน nuance/factual usefulness.','✅ B — Benchmark + relevant metrics ให้หลักฐานเชิงมาตรฐาน.','✅ C — LLM-as-a-judge ช่วย scale evaluation และควร validate/calibrate กับ human samples.','❌ D/E/F — ไม่สะท้อน end-task quality อย่างเพียงพอ.','🧠 จำสั้น ๆ — Human + Benchmark + Scalable judge.']});

  add({task:'3.4',type:'single',target:'fm-business-objective-alignment',
    question:'An AI service answers correctly on offline benchmarks, but users frequently abandon the workflow before completing their task. Which metric would provide the MOST direct evidence of this application-level problem?',
    questionTh:'AI service ทำคะแนน offline benchmarks ได้ดี แต่ผู้ใช้มักออกจาก workflow ก่อนทำงานสำเร็จ metric ใดให้หลักฐานตรงที่สุดต่อปัญหาระดับ application นี้?',
    choices:{A:'Task completion rate',B:'BLEU score',C:'Embedding dimension',D:'Training loss'},
    answer:['A'],
    exp:['✅ A — Task completion rate วัดว่าผู้ใช้ทำเป้าหมายของ workflow สำเร็จจริงหรือไม่.','❌ B — BLEU เป็น text-generation/reference metric ไม่ได้วัด end-to-end workflow success.','❌ C — Embedding dimension เป็น model/vector property.','❌ D — Training loss เป็น development metric ไม่ใช่ production business outcome.','🧠 จำสั้น ๆ — App สำเร็จไหม = Task completion rate.']});
})();