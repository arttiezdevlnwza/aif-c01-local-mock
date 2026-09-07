AIF-C01 Local Mock — 10 Sets
====================================

วิธีใช้
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ AIF-C01-Local-Mock-10Sets-v8.51
3. ดับเบิลคลิก index.html เพื่อเปิดด้วย Browser
4. เลือก Set 1-10 แล้วเริ่มทำได้เลย

ฟีเจอร์
- ไม่ต้อง deploy / ไม่ต้องมี server / ไม่ต้องติดตั้งอะไร
- กดช้อยส์และตรวจคำตอบได้
- รองรับ Single Choice, Select TWO/Multiple Response, Ordering และ Matching
- อ่านเฉลยหลังตรวจคำตอบ
- Previous / Next และกดเลขข้อเพื่อข้ามไปมา
- ดูข้อที่ตอบผิด
- เมื่อทำและตรวจครบทั้ง 65 ข้อ จะเปิดหน้า Summary ที่แสดงคะแนนรวมและเฉพาะข้อผิดเรียงลงมา
- จำ progress แยกแต่ละชุดด้วย localStorage ของ browser
- ช้อยส์ A/B/C/D/E ถูก shuffle ใหม่ต่อ Attempt และคงตำแหน่งเดิมระหว่างทำ Attempt นั้น
- กด Reset จะล้างคำตอบ/คะแนนและสุ่มช้อยส์ใหม่

Anti-pattern pass (v2)
- Set 1-4 คง anti-pattern pass เดิม; Set 5 ถูกสร้างโดยคุม answer distribution และความยาวช้อยส์ตั้งแต่ต้น
- ตัดคำอธิบายส่วนเกินออกจากช้อยส์ถูก โดยไม่เปลี่ยนสาระว่าอะไรเป็นคำตอบที่ถูก
- เฉลยที่เคยอ้างตัวอักษร A/B/C/D ถูกทำให้เป็นกลางกับการ shuffle
- ใช้ localStorage key เวอร์ชันใหม่ เพื่อให้รอบวัดผลนี้เริ่มจาก state สะอาด

โครงสร้าง
index.html          หน้าเว็บ
style.css           หน้าตาเว็บ
app.js              logic การทำข้อสอบ + shuffle ช้อยส์
data/quiz-data.js   ข้อสอบ + เฉลยทั้ง 7 ชุด

ชุดข้อสอบ
- Set 1: Standard / Easier
- Set 2: Scenario Practice
- Set 3: Hard 2026
- Set 4: Exam-Style Hard 2026
- Set 5: Closest-to-Real Exam Style (มี Single / Select TWO / Ordering / Matching)
- Set 6: ExamTopics Curated Hard / High-Value 2026 — โจทย์ใหม่จาก concept ที่คัดแล้ว ไม่คัดลอกคำถาม ExamTopics ตรง ๆ
- Set 7: Cold Scenario Hard / 2026 — พลิกสถานการณ์เพื่อวัดความเข้าใจจริง

หมายเหตุ
- เว็บนี้ทำไว้สำหรับฝึก local เท่านั้น
- การ shuffle เปลี่ยนเฉพาะตำแหน่งที่แสดง ไม่เปลี่ยนคำตอบที่ถูกของโจทย์


Set 6-7 design notes
- 65 ข้อต่อชุด; ทุกข้อคิดคะแนนใน local practice
- Domain quota ต่อชุด: D1=13, D2=16, D3=18, D4=9, D5=9
- Type ต่อชุด: Single=50, Multiple=9, Ordering=3, Matching=3
- Question stems/scenarios เป็น original practice items; ใช้ ExamTopics curation เป็น concept map ไม่ได้ copy ข้อสอบตรง ๆ
- อิง AWS AIF-C01 exam guide/revisions ที่ตรวจล่าสุด 2026-09-04


UI fix v2: Explanation text now maps canonical option references to the currently shuffled display letter and option name, preventing missing/ambiguous distractor explanations.

QA fix v4
- Audited all 455 questions for schema/choice integrity and shuffled-answer explanation references.
- Fixed Set 1 Q16 (Embedding), Q18 (Top-P), Q25 (Multimodal) placeholder/weak definitions.
- Added remapping for Set 2 ✅ answer refs, Set 3 "ตอบ X", and Set 4 X ✓/✗ explanation styles.
- Prevented false option-letter replacement inside words such as Canvas/CloudTrail.
- Removed raw Markdown ** markers from plain-text question stems and normalized NBSP characters.
- See QA-v4.txt for details.

UI enhancement v5
- เพิ่มหน้า Summary หลังตรวจครบ 65 ข้อ
- Summary แสดง Correct / Accuracy / Wrong และแสดงเฉพาะข้อที่ผิด
- แต่ละข้อผิดแสดงคำตอบที่เลือก, คำตอบที่ถูก, คำอธิบาย และปุ่มย้อนกลับไปดูข้อนั้น


v7 additions
- Per-question checkbox: "ขอให้อธิบายเพิ่มตอนรีวิว" for answers that feel uncertain.
- Yellow marker on the question navigator for flagged questions.
- Summary adds a flagged count, yellow tag, and a dedicated "ขออธิบายเพิ่ม" filter.
- Copy-for-review includes "🟡 EXPLAIN MORE" and a Review line for flagged questions.
- Fixed Set 2 Q28 so the correct choice explains the relationship between embeddings and semantic search instead of only naming the mechanism.

v8.1 Summary enhancement
- Summary now shows every answer choice for every question, not only Selected/Correct.
- Single/Multiple choices preserve the same shuffled A/B/C/D labels used during the attempt.
- Selected and correct choices are visibly tagged after completion.
- Copy-for-review output now includes every choice, with [SELECTED] / [CORRECT] markers, so an external reviewer can explain why distractors are wrong.
- Ordering and Matching questions also export their complete item/choice sets.

v8.2 Choice wording audit
- Audited all 455 questions for answer-choice leakage.
- Identification-style questions now use concise choice labels only (service / metric / technique / feature names) instead of embedding definitions or use-case hints inside the choices.
- Detailed meaning remains in the feedback, Summary, and Copy-for-review output after the answer is checked.
- 73 questions were normalized across Sets 1–7; Set 3 required no wording changes.
- Descriptive choices are intentionally retained only when the question itself asks the learner to evaluate an explanation, reason, action, design, or service-to-requirement pairing.
- See QA-v8.2-choice-audit.txt for the audited question list and validation results.

v8.3 choice fairness audit:
- Removed definition/explanation suffixes from term-identification choices (e.g. Responsible AI dimensions, metrics, ML task type, image model family).
- Removed artificial giveaway qualifiers such as "เท่านั้น/อย่างเดียว" from label-only distractors where the question is meant to test service/concept discrimination.
- Answer keys and explanations are unchanged; detailed explanations remain available only after checking/Summary.

v8.4 Matching fairness fix
- Matching dropdowns no longer display canonical right-side IDs (1/2/3/4 or A/B/C).
- Right-side options remain shuffled, so answer mappings such as A→1, B→2 cannot be inferred from labels.
- Feedback/Summary/Copy Review show the matched text rather than internal right-side IDs.
- Existing progress is preserved; use "เริ่มชุดนี้ใหม่" if you want to clear previously saved selections.


=== v8.5 / Local Mock 10 Sets ===
- Added Set 8-10: 195 new English scenario questions (65 per set).
- Blueprint-weighted per set: D1=13, D2=16, D3=18, D4=9, D5=9.
- English questions and choices; Thai explanations.
- Optional ? Vocabulary helper only for selected difficult/technical English terms. AWS service/feature names are not translated.
- Summary shows Thai question translation for Sets 8-10.
- Copy Review includes English question, Thai translation, vocabulary, choices, answers, and Thai explanation.
- Overall Progress counts unique questions across all 10 sets and uses the user's historical Set 1-7 results as baseline until a completed retry replaces them.
- Close-distractor design: wrong choices are intentionally kept in the same concept/service family where practical.


=== v8.51 / Progress Transfer Tools ===
- เพิ่ม Copy Progress Code: รวม Local Mock progress ใน localStorage เป็นข้อความ AIFPROGRESS1:... สำหรับ copy/paste ข้ามเครื่อง
- เพิ่ม Export JSON: ดาวน์โหลด progress เป็นไฟล์ JSON สำรองได้
- เพิ่ม Import Progress: รองรับทั้ง paste Progress Code / JSON และเลือกไฟล์ JSON
- Merge Progress: เก็บข้อมูลที่เครื่องปัจจุบันมีอยู่ แล้วเติมคำตอบ/ผลตรวจที่ขาดจากข้อมูลนำเข้า; flag 🟡 รวมแบบ OR
- Replace ทั้งหมด: ล้าง progress ของ Set 1-10 ใน browser ปัจจุบันก่อนนำข้อมูลเข้า (มี confirm)
- Import ตรวจ format/version และ sanitize เฉพาะ Set/Question/Choice ที่มีอยู่จริงใน v8.51
- ไม่มี database, account, login หรือ backend; progress ยังเป็น browser-local จนกว่าจะ export/copy ไปอีกเครื่อง
- เหมาะสำหรับใช้ต่อเมื่อย้ายเว็บขึ้น GitHub Pages โดยไม่ต้องเปลี่ยนระบบบันทึกคะแนน
