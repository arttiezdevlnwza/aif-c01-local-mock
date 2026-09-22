(() => {
  const guide = window.EXAM_FAMILY_GUIDE;
  const root = document.getElementById('dashboardFamilyGuide');
  if (!guide || !root) return;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[c]);

  root.innerHTML = `
    <div class="family-guide-toolbar">
      <input id="familyGuideSearch" class="family-guide-search" type="search" placeholder="ค้นหา เช่น AgentCore, Flow, Q Developer, Lineage...">
      <span class="family-guide-count">${guide.groups.length} กลุ่ม</span>
    </div>
    <div id="familyGuideGroups" class="family-guide-groups"></div>
    <p class="dashboard-note family-guide-note">อัปเดต ${esc(guide.updated)} · เน้น distinction ที่ใช้สอบ AIF-C01 และสิ่งที่มักถูกเอามาเป็น distractor</p>`;

  const groupsRoot = document.getElementById('familyGuideGroups');
  const search = document.getElementById('familyGuideSearch');

  function render(query='') {
    const q = query.trim().toLowerCase();
    const groups = guide.groups.map(group => {
      const matchedItems = group.items.filter(item => !q || [group.title,group.summary,item.name,item.use,item.cue,item.confuse].join(' ').toLowerCase().includes(q));
      if (q && !matchedItems.length) return '';
      return `
        <details class="family-guide-group" ${q ? 'open' : ''}>
          <summary>
            <div><strong>${esc(group.title)}</strong><span>${esc(group.summary)}</span></div>
            <b>${matchedItems.length}</b>
          </summary>
          <div class="family-guide-body">
            ${matchedItems.map(item => `
              <article class="family-guide-item">
                <div class="family-guide-item-head"><strong>${esc(item.name)}</strong><span>${esc(item.use)}</span></div>
                <div class="family-guide-memory">จำสั้น ๆ: ${esc(item.cue)}</div>
                <div class="family-guide-confuse">อย่าสับสน: ${esc(item.confuse)}</div>
              </article>`).join('')}
          </div>
        </details>`;
    }).join('');
    groupsRoot.innerHTML = groups || '<div class="dashboard-empty">ไม่พบหัวข้อที่ค้นหา</div>';
  }

  search.addEventListener('input', () => render(search.value));
  render();
})();