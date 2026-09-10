(() => {
  function syncDashboardSetCount() {
    const cards = [...document.querySelectorAll('#dashboardOverview .dashboard-stat-card')];
    const completed = cards.find(card => card.querySelector('span')?.textContent.trim() === 'Completed sets');
    const small = completed?.querySelector('small');
    if (small) small.textContent = `Local Mock Set 1–${(window.QUIZ_SETS || []).length}`;
  }

  const originalRender = window.renderStudyDashboard;
  if (typeof originalRender === 'function') {
    window.renderStudyDashboard = function () {
      originalRender();
      syncDashboardSetCount();
    };
  }

  document.getElementById('dashboardBtn')?.addEventListener('click', () => {
    setTimeout(syncDashboardSetCount, 0);
  });
})();
