(() => {
  const setId = 'local-set-13';
  const storageKey = `aif-opus-practice:v2:${setId}`;
  const meanings = {
    'afterward': 'หลังจากนั้น / ภายหลัง',
    'churn outcome': 'ผลลัพธ์ว่าลูกค้ายกเลิกหรือเลิกใช้บริการหรือไม่',
    'corpus': 'คลังข้อมูล / ชุดข้อมูลขนาดใหญ่ที่รวบรวมไว้เพื่อวิเคราะห์หรือฝึกโมเดล',
    'downstream tasks': 'งานขั้นถัดไป / งานที่นำผลจากขั้นก่อนหน้าไปใช้ต่อ',
    'eligible': 'มีสิทธิ์ / ผ่านเกณฑ์ที่จะถูกนำมาพิจารณา',
    'explicitly': 'อย่างชัดเจน / ระบุไว้ชัดเจน',
    'invents': 'แต่งขึ้น / สร้างข้อมูลที่ไม่มีจริง',
    'non-existent fact': 'ข้อเท็จจริงที่ไม่มีอยู่จริง / ข้อมูลที่ถูกแต่งขึ้น',
    'prior': 'ก่อนหน้า / ที่เกิดขึ้นหรืออยู่มาก่อน',
    'progressively corrupting data': 'ค่อย ๆ ทำให้ข้อมูลเพี้ยนหรือปน noise มากขึ้นทีละขั้น',
    'tenant metadata': 'metadata ที่บอกว่า record/document เป็นของ tenant หรือลูกค้ากลุ่มใด เพื่อใช้แยกขอบเขตข้อมูล'
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
