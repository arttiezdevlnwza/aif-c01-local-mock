(() => {
  const pages = window.AIF_INFOGRAPHIC_PAGES || [];
  const gallery = document.getElementById('infographicGallery');
  const topicPanel = document.getElementById('infoTopicPanel');
  const infographicPanel = document.getElementById('infoInfographicPanel');
  const topicBtn = document.getElementById('infoTopicTabBtn');
  const infographicBtn = document.getElementById('infoInfographicTabBtn');
  const modal = document.getElementById('infographicModal');
  const modalTitle = document.getElementById('infographicModalTitle');
  const modalBody = document.getElementById('infographicModalBody');
  const modalClose = document.getElementById('infographicModalClose');
  if (!gallery || !topicPanel || !infographicPanel || !topicBtn || !infographicBtn || !modal) return;

  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[c]);
  const ICONS = ['🧠','🧪','🔐','🔎','🧰','🔁','🤖','🧩','✍️','⚖️','🛡️','📜','🧠','📊','🧱','🗂️','🎛️','🧾','💡','🗺️'];

  function openTab(kind) {
    const showInfographic = kind === 'infographic';
    topicPanel.classList.toggle('hidden', showInfographic);
    infographicPanel.classList.toggle('hidden', !showInfographic);
    topicBtn.classList.toggle('active', !showInfographic);
    infographicBtn.classList.toggle('active', showInfographic);
  }

  function assetPath(page) {
    return 'assets/infographics/page-' + String(page).padStart(2, '0') + '.svg';
  }

  function makeCard(page) {
    let tags = '';
    page.tags.forEach(tag => { tags += '<span>' + esc(tag) + '</span>'; });
    return '<article class="infographic-page-card" data-page="' + page.page + '">' +
      '<button class="infographic-preview infographic-image-preview" type="button" data-open-infographic="' + page.page + '" aria-label="เปิด Page ' + page.page + ': ' + esc(page.title) + '">' +
      '<img class="infographic-thumb-image" src="' + assetPath(page.page) + '" alt="Page ' + page.page + ' — ' + esc(page.title) + '" loading="lazy">' +
      '<span class="infographic-open-label">เปิดอินโฟเต็ม →</span></button>' +
      '<div class="infographic-card-meta"><strong>Page ' + page.page + ' — ' + esc(page.title) + '</strong><div class="infographic-tag-row">' + tags + '</div></div></article>';
  }

  function renderGallery(query) {
    query = query || '';
    const q = query.trim().toLowerCase();
    const filtered = pages.filter(page => {
      if (!q) return true;
      const text = [page.title].concat(page.tags || [], page.sections.flatMap(section => [section.title].concat(section.items))).join(' ').toLowerCase();
      return text.includes(q);
    });
    gallery.innerHTML = filtered.map(makeCard).join('') || '<div class="dashboard-empty">ไม่พบ Infographic ที่ค้นหา</div>';
  }

  function openPage(pageNumber) {
    const page = pages.find(item => item.page === Number(pageNumber));
    if (!page) return;
    modalTitle.textContent = 'Page ' + page.page + ' — ' + page.title;
    let tags = '';
    page.tags.forEach(tag => { tags += '<span>' + esc(tag) + '</span>'; });
    let sections = '';
    page.sections.forEach((section, index) => {
      let items = '';
      section.items.forEach(item => { items += '<div><span class="infographic-dot"></span><p>' + esc(item) + '</p></div>'; });
      sections += '<section class="infographic-full-section"><div class="infographic-section-head"><span>' + (index + 1) + '</span><strong>' + esc(section.title) + '</strong></div><div class="infographic-section-items">' + items + '</div></section>';
    });
    modalBody.innerHTML =
      '<div class="infographic-image-stage"><img class="infographic-full-image" src="' + assetPath(page.page) + '" alt="Page ' + page.page + ' — ' + esc(page.title) + '"></div>' +
      '<details class="infographic-text-details"><summary>ดูเนื้อหาแบบข้อความ</summary><div class="infographic-full-page"><div class="infographic-full-head"><div class="infographic-tag-row">' + tags + '</div></div><div class="infographic-full-grid">' + sections + '</div></div></details>';
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  topicBtn.addEventListener('click', () => openTab('topic'));
  infographicBtn.addEventListener('click', () => openTab('infographic'));
  const search = document.getElementById('infographicSearch');
  if (search) search.addEventListener('input', event => renderGallery(event.target.value));
  gallery.addEventListener('click', event => {
    const trigger = event.target.closest('[data-open-infographic]');
    if (trigger) openPage(trigger.dataset.openInfographic);
  });
  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

  renderGallery('');
  openTab('topic');
})();