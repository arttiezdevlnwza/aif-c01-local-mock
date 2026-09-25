# AIF-C01 Local Mock

Static web app สำหรับฝึก **AWS Certified AI Practitioner (AIF-C01)** แบบ local/browser-only พร้อมข้อสอบ 23 ชุด, Study Dashboard, Review Queue และ AIF-C01 Info Library

## Current status

- **23 Sets / 1,495 questions**
- **65 questions per set**
- Set 8–23 เน้น **English scenario + close distractors**
- รองรับ **Single Choice / Multiple Response / Ordering / Matching**
- ทุกข้อใน Local Mock คิดคะแนน: `correct / 65 × 100`
- Progress เก็บใน **browser localStorage** ไม่มี account/database/backend
- AIF-C01 Info Library ปัจจุบันมี **17 topic families / 133 quick-reference items**

## Blueprint สำหรับ Set 19–23

| Domain | Questions |
|---|---:|
| D1 — Fundamentals of AI and ML | 13 |
| D2 — Fundamentals of Generative AI | 16 |
| D3 — Applications of Foundation Models | 18 |
| D4 — Responsible AI | 9 |
| D5 — Security, Compliance, and Governance | 9 |

Set 19–23 ครอบคลุมทุก official Task Statement 1.1–5.2 และใช้ scenario / boundary / distractor แบบใกล้ข้อสอบมากขึ้น

Set 23 ใช้ **AIF-C01 Exam Guide v1.1 task mapping ปัจจุบัน** โดยเฉพาะ Domain 3: 3.1 Design considerations / 3.2 Prompt engineering / 3.3 Training & fine-tuning / 3.4 Evaluation และเป็น independent mixed set ที่ใช้ Set 22 reviewed gaps เป็น spaced-repetition input บางส่วน ไม่ใช่ retest แบบ 1:1.

Set 21–22 เป็น **Targeted Weakness + Under-covered Topics** โดยเน้นหัวข้อที่ review พบว่าพลาดซ้ำ/ยังลังเล เช่น Data Governance, Traditional ML vs FM, Responsible AI, RAG order, RMSE vs MAE, SOC reports, AgentCore/Quick รวมทั้งหัวข้อที่เจอน้อยใน 20 ชุดแรก เช่น agent memory, MCP host/client/server, Converse API, AgentCore Browser/Code Interpreter/Evaluations, prompt optimization/caching/routing, fairness DPL/DPPL, model invocation logging และ Generative AI Security Scoping Matrix.

Set 22 ถูกแยกเป็น **independent question bank** จาก Set 21 แล้ว: ไม่ใช้ target map แบบ Q1↔Q1, ไม่มี choice set ซ้ำกับ Set 21, และใช้ broad coverage + selected weak-topic retests โดยเปลี่ยน decision boundary/question type เมื่อ retest concept เดิม. Set 21 ยังคงอยู่ใน bank เดิมและไม่ถูกแก้ย้อนหลัง.

## Features

### Quiz

- Shuffle choices ต่อ attempt
- Previous / Next และ question navigator
- ตรวจคำตอบทันที
- Explanation หลังตอบ
- รองรับ Ordering และ Matching
- Vocabulary helper สำหรับคำอังกฤษที่คัดว่าอาจเป็น friction point
- Set 8–22 มี Thai translation ใน Summary
- Per-question flag: **🟡 ขอให้อธิบายเพิ่มตอนรีวิว**
- Summary แสดงทุกข้อ, ทุก choice, selected/correct state และ explanation
- Filter Summary: ทุกข้อ / เฉพาะข้อผิด / ขออธิบายเพิ่ม
- Copy-for-review output สำหรับนำผลไป review ต่อ

### Explanation enhancement — Set 19–22

เฉลยของ Set 19–22 เพิ่มโครงอ่านโจทย์ก่อนเข้า concept:

- **📝 โจทย์แปลว่าอะไร**
- **🎯 โจทย์ถามอะไรเรา**
- **💡 ทำไมข้อนี้ถึงตอบแบบนี้**
- Concept เพิ่มเติม / memory cue เช่น `Version + approval ของ model = Registry`

### Study Dashboard

Dashboard ใช้ progress ใน browser ร่วมกับ review metadata ที่บันทึกไว้ เพื่อแสดง:

- คะแนนราย Set
- Accuracy ตาม Domain
- Reviewed Gaps
- Concept / Confidence / Language / Clue-Distractor gaps
- Review Queue จากข้อผิดและข้อที่ Flag
- Review History แบบกด **ดู Review** ราย Set เพื่ออ่าน Selected/Correct, raw flags, เหตุผลตอนทำ, final diagnosis และ memory cue
- Topic status เช่น repeated / unstable / improving / recovered

มี review metadata สำหรับผลที่บันทึกไว้ของ Set 12, 13, 17, 18, 19, 20, 21 และ 22

### AIF-C01 Info Library

เปิดจากปุ่ม **AIF-C01 Info Library** บนหน้าแรก เป็น standalone view แยกจาก Study Dashboard

ปัจจุบันมี **17 กลุ่ม / 133 หัวข้อ**:

1. Amazon Bedrock
2. Amazon Bedrock AgentCore
3. Amazon Quick
4. Amazon Q / Developer tools
5. SageMaker Family
6. Security / Governance Services
7. RAG Family
8. Prompt / Customization
9. SOC / ISO / Frameworks
10. IAM / Permissions
11. Inference Modes
12. Classification / Regression Metrics
13. Data Governance
14. Responsible AI
15. AWS AI Services
16. Model / Learning Types
17. FM / RAG Evaluation

แต่ละหัวข้อเน้น 3 อย่าง: ใช้ทำอะไร / **จำสั้น ๆ** / **อย่าสับสนกับอะไร**

มี Search, Visual Topic Map, Quick Cards และปุ่มเปิด/ย่อทุกกลุ่ม

## Progress transfer

เพราะเว็บไม่มี backend จึงมีเครื่องมือย้าย progress ระหว่าง browser/device:

- **Copy Progress Code**
- **Export JSON**
- **Import Progress**
- **Merge Progress**
- **Replace ทั้งหมด**

Progress Code ใช้ prefix `AIFPROGRESS1:`

## Project structure

```text
index.html
style.css
dashboard.css
study-enhancements.css

app.js
study-enhancements.js
english-notes.js

dashboard.js
dashboard-advanced.js
dashboard-family-guide.js
dashboard-vocabulary.js
dashboard-set-count-patch.js

data/
  quiz-data.js                     # Sets 1–10 baseline
  local-set-11-part-*.js
  local-set-12-part-*.js
  local-set-13-part-*.js
  local-set-14-18-domain*.js
  local-set-14-18-builder.js
  local-set-19-domain*.js
  local-set-19-builder.js
  local-set-20-part-*.js
  local-set-20-quality.js
  local-set-21-22-domain*.js          # Legacy shared source now used to build Set 21
  local-set-21-22-builder.js           # Builds Set 21 only
  local-set-22-independent-domain*.js # Independent Set 22 bank
  local-set-22-independent-builder.js # Builds/validates Set 22
  local-set-23-domain*.js            # Independent Set 23 bank
  local-set-23-builder.js            # Builds/validates Set 23

  exam-family-guide.js             # Info Library data
  review-insights.js
  set-12-review.js
  set-13-review.js
  set-17-review.js
  set-18-review.js
  set-19-review.js
  set-20-review.js
  set-21-review.js
  set-22-review.js

docs/
  RULES.md
```

## Question design notes

- Official AIF-C01 Exam Guide เป็น scope หลัก
- AWS Learning Hub ใช้ช่วย coverage / terminology
- Local Mock / third-party material ใช้เป็น scenario / distractor / gap booster ไม่ใช้กำหนด scope
- หลีกเลี่ยง clue ที่เฉลยตัวเอง เช่น `The clue is "..."`
- Distractors ควรอยู่ใน service/concept family เดียวกัน
- Multiple Response ต้องมีคำตอบที่ defensible แบบ exact
- Matching ใช้กับ concept ↔ scenario / service ↔ requirement / role ↔ responsibility
- Ordering ใช้เฉพาะ lifecycle/flow ที่มีลำดับชัดเจน
- Domain/task metadata ไม่แสดงบนหน้า quiz

กฎ Review หลัก:

- ข้อที่ตอบผิดจะถามเหตุผลผู้เรียน **ทีละข้อก่อนอธิบายเฉลย**
- หลังผู้เรียนอธิบายเหตุผล จึงแยกสาเหตุเป็น **Concept / Confidence / Language / clue miss** ตามหลักฐานจริง
- raw flag เป็นข้อมูลประกอบ แต่ **post-review interview เป็น source of truth ของสาเหตุจริง**
- ข้อที่ตอบถูกแต่ติด 🟡 ยังถือเป็น confidence gap และไม่ถือว่า mastered อัตโนมัติ

รายละเอียดเพิ่มเติมทั้งกฎการสร้างข้อสอบและกฎการรีวิวผลสอบ: `docs/RULES.md`

## Local usage

เปิด `index.html` โดยตรงได้ หรือ serve repository root ด้วย static web server

Clone/download repo → เปิด index.html → เลือก Set → ทำข้อสอบ → Progress ถูกเก็บใน browser

## GitHub Pages

Repository นี้เป็น static web app จึง deploy ผ่าน GitHub Pages ได้โดย serve จาก repository root

ไม่มี server-side database หรือ login; หากย้ายเครื่อง/browser ให้ใช้ Progress Code หรือ JSON export/import

## Notes

- การ shuffle เปลี่ยนเฉพาะตำแหน่งที่แสดง ไม่เปลี่ยน answer key
- ถ้ากด Reset ชุดนั้น คำตอบ/คะแนนของ attempt ปัจจุบันจะถูกล้างและ shuffle ใหม่
- Review metadata และ Info Library เป็น study aids เพิ่มเติม ไม่ได้เปลี่ยน scoring ของ Local Mock
