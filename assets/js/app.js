/* ============================================================
   app.js — the one thing CSS can't do: persistent theme memory.
   Background is a static image; scroll animations live in
   main.css (animation-timeline). Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------- Theme (persistent) ---------------- */
  var themeBtn = document.getElementById('themeToggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function syncMeta() { if (themeMeta) themeMeta.setAttribute('content', root.classList.contains('dark') ? '#07070c' : '#f3f1ea'); }
  syncMeta();
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var dark = root.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      syncMeta();
    });
  }
})();
