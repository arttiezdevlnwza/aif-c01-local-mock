(() => {
  const bank = window.LOCAL_SET_24_BANK = window.LOCAL_SET_24_BANK || [];
  const add = x => bank.push({domain:3,type:'single',...x});

  add({objective:'3.1.1',target:'converse-api-boundary',
    q:'A chat application will support several foundation models in Amazon Bedrock, and the architecture team expects to change models as requirements evolve. Developers want a consistent message-oriented request pattern for multi-turn conversations instead of maintaining different model-specific request schemas for every supported model. The requirement is specifically about a common conversational runtime interface, not prompt storage or model evaluation. Which API is the closest fit?',
    th:'chat application จะรองรับ foundation models หลายตัวใน Amazon Bedrock และทีมสถาปัตยกรรมคาดว่าจะเปลี่ยน model ตาม requirement ที่เปลี่ยนไป นักพัฒนาต้องการ request pattern แบบ message ที่สม่ำเสมอสำหรับ multi-turn conversations แทนการดูแล model-specific request schemas แตกต่างกันสำหรับทุก model ที่รองรับ Requirement นี้เกี่ยวกับ common conversational runtime interface โดยเฉพาะ ไม่ใช่การเก็บ prompt หรือการประเมิน model API ใดตรงที่สุด?',
    ask:'แยก Amazon Bedrock Converse API จาก InvokeModel, Prompt Management และ Model Evaluation.',
    choices:{A:'Converse API',B:'InvokeModel API with model-specific payloads',C:'Prompt Management',D:'Amazon Bedrock Model Evaluation'},
    answer:['A'],
    why:{A:'ถูก เพราะ Converse ให้ consistent message-based interface สำหรับ supported Bedrock models และ multi-turn conversational patterns.',B:'ผิด เพราะ InvokeModel เป็น direct model invocation และ payload รูปแบบอาจแตกต่างตาม model.',C:'ผิด เพราะ Prompt Management จัดเก็บ/version prompt templates ไม่ใช่ runtime conversation API.',D:'ผิด เพราะ Model Evaluation ใช้ประเมิน FM outputs/models.'},
    cue:'หลาย Bedrock models + message schema เดียว = Converse.'});

  add({objective:'3.2.5',target:'prompt-optimization-vs-management',
    q:'A team has an existing prompt template that works reasonably well, but it wants an AWS capability that can help rewrite or improve the prompt for better use with a target foundation model. The team already has a separate process for storing approved prompt versions, so version management is not the problem being solved. Which Bedrock capability is most directly aligned with the improvement task?',
    th:'ทีมมี prompt template ที่ใช้งานได้พอสมควรแล้ว แต่ต้องการ AWS capability ที่ช่วย rewrite หรือปรับ prompt ให้ดีขึ้นสำหรับใช้งานกับ target foundation model ทีมมี process แยกสำหรับเก็บ approved prompt versions อยู่แล้ว ดังนั้นปัญหาที่ต้องแก้ไม่ใช่ version management Bedrock capability ใดตรงกับงานปรับปรุง prompt มากที่สุด?',
    ask:'แยก Prompt Optimization ซึ่งช่วยปรับ prompt ออกจาก Prompt Management ซึ่งเก็บและ version prompts.',
    choices:{A:'Prompt Optimization',B:'Prompt Management',C:'Knowledge Bases',D:'Model invocation logging'},
    answer:['A'],
    why:{A:'ถูก เพราะ Prompt Optimization มุ่งช่วยปรับหรือ rewrite prompt เพื่อให้เหมาะกับ model/use case.',B:'ผิด เพราะ Prompt Management เน้น reusable templates, variables และ versions.',C:'ผิด เพราะ Knowledge Bases ใช้ retrieval/RAG.',D:'ผิด เพราะ invocation logging ใช้เก็บรายละเอียดการเรียก model ตาม configuration.'},
    cue:'Improve/Rewrite = Optimization; Save/Version = Management.'});

  add({objective:'3.1.1',target:'intelligent-prompt-routing',
    q:'A production GenAI service receives a wide range of requests. Most are simple questions that a lower-cost model can answer well, while a smaller fraction requires more capable reasoning. The business wants to reduce average cost without forcing all requests onto the cheapest model or paying for the most capable model every time. Which capability most directly supports routing requests according to their needs?',
    th:'production GenAI service รับ requests หลากหลาย Request ส่วนใหญ่เป็นคำถามง่ายที่ lower-cost model ตอบได้ดี ขณะที่ส่วนน้อยต้องใช้ reasoning ที่มีความสามารถสูงกว่า ธุรกิจต้องการลด average cost โดยไม่บังคับทุก request ไปยังโมเดลที่ถูกที่สุด และไม่ต้องจ่ายค่าโมเดลที่เก่งที่สุดทุกครั้ง Capability ใดสนับสนุนการ route requests ตามความต้องการได้โดยตรงที่สุด?',
    ask:'ระบุ Intelligent Prompt Routing จากการกระจาย simple/hard requests ไปยัง model ที่เหมาะสม.',
    choices:{A:'Intelligent Prompt Routing',B:'Prompt Caching',C:'Prompt Management',D:'Data retention'},
    answer:['A'],
    why:{A:'ถูก เพราะ routing ช่วยเลือก model/path ตามลักษณะหรือความซับซ้อนของ request เพื่อ balance quality/cost.',B:'ผิด เพราะ caching reuse repeated context ไม่ได้เลือก model ตามความยาก.',C:'ผิด เพราะ Management จัดเก็บ prompt versions.',D:'ผิด เพราะ retention เป็น data-governance policy.'},
    cue:'Simple/Hard request mix → Route; Repeated prefix → Cache.'});

  add({objective:'3.1.3',target:'metadata-filtering-vs-reranking',
    q:'A multi-tenant RAG system stores documents for many customers in the same retrieval platform. Before relevance ranking, the system must guarantee that a user from Tenant A never receives documents belonging to Tenant B. After eligible documents are retrieved, the application wants to reorder them so the strongest evidence appears first. Which sequence of retrieval controls is most appropriate?',
    th:'multi-tenant RAG system เก็บเอกสารของลูกค้าหลายรายไว้ใน retrieval platform เดียวกัน ก่อนจัด relevance ระบบต้องรับประกันว่าผู้ใช้จาก Tenant A จะไม่ได้รับเอกสารของ Tenant B หลังจากได้ eligible documents แล้ว application ต้องการจัดลำดับใหม่เพื่อให้ evidence ที่ดีที่สุดอยู่ก่อน ลำดับ retrieval controls ใดเหมาะสมที่สุด?',
    ask:'แยก Metadata Filtering สำหรับ eligibility/security boundary ออกจาก Reranking สำหรับ relevance ordering.',
    choices:{A:'Apply metadata filtering first, then rerank the eligible retrieved candidates',B:'Rerank all tenants together first and filter only after generation',C:'Use prompt caching instead of enforcing tenant eligibility',D:'Fine-tune the model to remember which tenant owns each document'},
    answer:['A'],
    why:{A:'ถูก เพราะ filtering จำกัด candidate set ตาม tenant metadata ก่อน แล้ว reranking จัดลำดับเฉพาะ candidates ที่มีสิทธิ์.',B:'ผิด เพราะทำให้ cross-tenant documents เข้า retrieval/ranking path ก่อน enforce boundary.',C:'ผิด เพราะ caching ไม่ใช่ access control.',D:'ผิด เพราะ ownership/eligibility ควรถูก enforce ที่ retrieval/data layer ไม่ใช่ฝากให้ weights จำ.'},
    cue:'Filter = ใครเข้า candidate set ได้; Rerank = ใครควรขึ้นก่อน.'});

  add({objective:'3.1.3',target:'hybrid-retrieval',
    q:'A corporate knowledge search system receives queries that sometimes contain exact product codes and acronyms and sometimes use natural-language descriptions with no exact keyword overlap. Pure keyword search misses semantic matches, while pure vector search occasionally overlooks an exact identifier that users expect to match precisely. Which retrieval strategy best combines the strengths of both approaches?',
    th:'corporate knowledge search system รับ queries ที่บางครั้งมี product codes และ acronyms แบบ exact และบางครั้งเป็น natural-language descriptions ที่ไม่มี keyword ตรงกัน Pure keyword search พลาด semantic matches ขณะที่ pure vector search บางครั้งไม่ให้ความสำคัญกับ exact identifier ที่ผู้ใช้คาดว่าจะ match อย่างแม่นยำ Retrieval strategy ใดรวมข้อดีของทั้งสองแนวทางได้ดีที่สุด?',
    ask:'ระบุ Hybrid lexical-semantic retrieval จาก requirement ที่ต้องรองรับทั้ง exact keyword และ semantic similarity.',
    choices:{A:'Hybrid lexical and semantic/vector retrieval',B:'Vector search only with no lexical component',C:'Keyword search only with no semantic component',D:'Increase generation temperature'},
    answer:['A'],
    why:{A:'ถูก เพราะ hybrid search รวม lexical exact matching กับ semantic/vector similarity เพื่อครอบคลุม query patterns สองแบบ.',B:'ผิด เพราะ scenario ระบุว่าพลาด exact identifiers บางกรณี.',C:'ผิด เพราะ scenario ระบุว่าพลาด semantic matches.',D:'ผิด เพราะ temperature ควบคุม generation ไม่ใช่ retrieval matching.'},
    cue:'Exact code + Meaning search ต้องใช้ทั้ง Lexical + Semantic.'});

  add({objective:'3.3.2',target:'customization-decision-matrix',
    q:'A company has three separate GenAI needs. The first needs current private facts that change weekly and must be cited. The second needs a persistent writing style and task behavior across requests. The third needs a smaller cheaper model that imitates a stronger model for high-volume serving. Which mapping of adaptation techniques is most appropriate?',
    th:'บริษัทมี GenAI needs แยกกันสามแบบ แบบแรกต้องใช้ private facts ปัจจุบันที่เปลี่ยนทุกสัปดาห์และต้อง cite ได้ แบบที่สองต้องการ writing style และ task behavior ที่คงอยู่ข้าม requests แบบที่สามต้องการโมเดลที่เล็กและถูกลงซึ่งเลียนแบบโมเดลที่เก่งกว่าเพื่อใช้ serving ปริมาณสูง การจับคู่ adaptation techniques ใดเหมาะสมที่สุด?',
    ask:'แยก RAG, Fine-tuning/SFT และ Distillation ตาม requirement ที่ต่างกัน.',
    choices:{A:'RAG for changing facts; fine-tuning/SFT for persistent behavior; distillation for a smaller student model',B:'Distillation for changing facts; RAG for permanent style; clustering for serving cost',C:'Fine-tune every weekly fact change; use RAG to shrink the model; use temperature for persistent behavior',D:'Use the same technique for all three because adaptation methods are interchangeable'},
    answer:['A'],
    why:{A:'ถูก เพราะแต่ละ technique ตรงกับ requirement: RAG=knowledge freshness/citations, SFT=persistent behavior, distillation=teacher→student efficiency.',B:'ผิด เพราะสลับหน้าที่ของ techniques.',C:'ผิด เพราะ frequent facts ไม่เหมาะกับ repeated tuning และ RAG ไม่ได้ shrink model.',D:'ผิด เพราะ methods มี tradeoffs และ mechanisms ต่างกัน.'},
    cue:'Facts = RAG; Behavior = SFT; Smaller model = Distill.'});

  add({objective:'3.4.4',target:'agent-evaluation-managed-capability',
    q:'A company has several production agents that call tools and complete multi-step workflows. The evaluation team wants repeatable tests that can assess agent behavior and quality rather than relying only on the final text response. The platform is already using Amazon Bedrock AgentCore for production-agent capabilities. Which AgentCore feature is intended for this evaluation need?',
    th:'บริษัทมี production agents หลายตัวที่เรียก tools และทำ multi-step workflows ทีม evaluation ต้องการ repeatable tests ที่ประเมิน agent behavior และ quality ได้ ไม่ใช่ดูเฉพาะ final text response Platform ใช้ Amazon Bedrock AgentCore สำหรับ production-agent capabilities อยู่แล้ว AgentCore feature ใดถูกออกแบบมาสำหรับ requirement ด้าน evaluation นี้?',
    ask:'ระบุ AgentCore Evaluations ในบทบาทประเมิน agents/workflows.',
    choices:{A:'AgentCore Evaluations',B:'AgentCore Gateway',C:'AgentCore Identity',D:'AgentCore Memory'},
    answer:['A'],
    why:{A:'ถูก เพราะ Evaluations ใช้ประเมิน agent quality/behavior ตาม evaluation tasks/criteria.',B:'ผิด เพราะ Gateway expose APIs/services เป็น tools.',C:'ผิด เพราะ Identity จัดการ credentials/identity.',D:'ผิด เพราะ Memory เก็บ information across interactions.'},
    cue:'Score/Test Agent = Evaluations; Tools = Gateway; Credentials = Identity; Remember = Memory.'});

  add({objective:'3.4.1',target:'a2i-vs-bedrock-model-evaluation',
    q:'A traditional ML application produces individual predictions that occasionally require a person to review or approve the result before a business action occurs. A separate GenAI team wants to compare foundation-model outputs at the model-evaluation stage. Because both involve humans, teams have started confusing the services. Which statement best distinguishes the appropriate AWS capabilities?',
    th:'traditional ML application สร้าง individual predictions ที่บางครั้งต้องให้มนุษย์ review หรือ approve ก่อนเกิด business action ขณะที่ GenAI team อีกทีมต้องการเปรียบเทียบ foundation-model outputs ในขั้น model evaluation เนื่องจากทั้งสองกรณีเกี่ยวข้องกับมนุษย์ ทีมจึงเริ่มสับสน services ข้อใดแยก AWS capabilities ที่เหมาะสมได้ถูกต้องที่สุด?',
    ask:'แยก Amazon A2I human review ของ individual predictions ออกจาก Amazon Bedrock Model Evaluation สำหรับ FM evaluation.',
    choices:{A:'Use Amazon A2I for human review workflows around selected predictions; use Bedrock Model Evaluation for evaluating foundation-model outputs/models',B:'Use Bedrock Model Evaluation to label every traditional ML training example and A2I to host foundation models',C:'Use AWS Config for both because all human review is configuration compliance',D:'Use Amazon Macie for both because both involve text'},
    answer:['A'],
    why:{A:'ถูก เพราะ A2I จัด human review workflow สำหรับ ML predictions/content ส่วน Bedrock Model Evaluation ใช้ FM evaluation.',B:'ผิด เพราะ roles ถูกสลับและไม่ตรง capability.',C:'ผิด เพราะ Config ไม่ได้ทำ human review/model evaluation.',D:'ผิด เพราะ Macie เป็น sensitive-data discovery service.'},
    cue:'A2I = Human review ของ prediction; Bedrock Eval = ประเมิน FM.'});
})();