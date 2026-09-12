(() => {
  const setId = 'local-set-12';
  const storageKey = `aif-opus-practice:v2:${setId}`;
  const meanings = {
    'absorb terminology': 'ซึมซับ / เรียนรู้ศัพท์เฉพาะ',
    'accuracy stays stable': 'ความแม่นยำยังคงที่ / ไม่ลดลง',
    'approximates': 'เลียนแบบ / ให้ผลใกล้เคียงกับ',
    'auditors': 'ผู้ตรวจสอบ / ผู้ตรวจประเมิน',
    'citations': 'การอ้างอิง / แหล่งอ้างอิง',
    'classified': 'ถูกจัดประเภท / ถูกจัดชั้น',
    'confidently': 'อย่างมั่นใจ',
    'contradicts': 'ขัดแย้งกับ',
    'cumulative': 'สะสมรวมกัน / รวมต่อเนื่อง',
    'data lineage': 'ที่มาและเส้นทางของข้อมูล รวมถึงการเปลี่ยนแปลงระหว่างทาง',
    'data residency': 'ข้อกำหนดว่าข้อมูลต้องอยู่หรือประมวลผลในสถานที่ใด',
    'dedicated': 'จัดสรรเฉพาะ / สงวนไว้เฉพาะ',
    'distribution': 'การกระจายของข้อมูล / รูปแบบการกระจาย',
    'downstream system': 'ระบบปลายทาง / ระบบที่รับผลไปใช้ต่อ',
    'drops sharply': 'ลดลงอย่างมาก / ลดฮวบ',
    'elsewhere': 'ที่อื่น / ในส่วนอื่น',
    'factual': 'เป็นข้อเท็จจริง / ถูกต้องตามข้อเท็จจริง',
    'faithfully': 'อย่างตรงตาม / ยึดตามข้อมูลที่ได้รับ',
    'feature-attribution': 'การระบุว่า feature แต่ละตัวมีอิทธิพลต่อ prediction มากแค่ไหน',
    'fixed persona': 'บุคลิกหรือบทบาทที่กำหนดให้คงที่',
    'inspect': 'ตรวจดู / ตรวจสอบโดยตรง',
    'intended use': 'วัตถุประสงค์การใช้งานที่ตั้งใจไว้',
    'intentionally': 'อย่างจงใจ / โดยตั้งใจ',
    'invents': 'แต่งขึ้น / สร้างข้อมูลที่ไม่มีจริง',
    'legitimate': 'ถูกต้องตามปกติ / ไม่ใช่ธุรกรรมทุจริต',
    'lending team': 'ทีมสินเชื่อ',
    'materially': 'อย่างมีนัยสำคัญ / มากพอที่จะมีผล',
    'move away': 'ค่อย ๆ เปลี่ยนห่างออกจาก',
    'narrow task': 'งานเฉพาะเจาะจง / งานที่มีขอบเขตแคบ',
    'narrower': 'แคบลง / จำกัดมากขึ้น',
    'persistent': 'คงอยู่ต่อเนื่อง / ไม่หายเมื่อจบช่วงสั้น ๆ',
    'persistently': 'อย่างต่อเนื่อง / แบบคงอยู่',
    'post-hoc explainability': 'การอธิบายผลภายหลังด้วยวิธีเสริม หลังโมเดลตัดสินใจแล้ว',
    'preferred over changing model weights': 'ควรเลือกใช้แทนการเปลี่ยนน้ำหนักของโมเดล',
    'recourse': 'ช่องทางให้ผู้ได้รับผลกระทบขอทบทวนหรือแก้ไข',
    'tabular data': 'ข้อมูลแบบตาราง แบ่งเป็นแถวและคอลัมน์',
    'uncertain': 'ไม่แน่ใจ / มีความมั่นใจต่ำ'
  };

  function apply(target) {
    if (!target || typeof target !== 'object') return target;
    target.englishNoteMeanings = target.englishNoteMeanings || {};
    Object.entries(meanings).forEach(([key, value]) => {
      if (!String(target.englishNoteMeanings[key] || '').trim()) target.englishNoteMeanings[key] = value;
    });
    return target;
  }

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const state = apply(JSON.parse(raw));
      localStorage.setItem(storageKey, JSON.stringify(state));
    }
  } catch {}

  const set = (window.QUIZ_SETS || []).find(item => item.id === setId);
  if (set?._state) apply(set._state);
})();
