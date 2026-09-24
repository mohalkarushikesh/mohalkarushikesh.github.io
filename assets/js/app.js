/* ============================================================
   app.js — the two things CSS can't do: persistent theme memory
   and composing a pre-filled mailto from the contact form.
   Background is a static image; scroll animations live in
   main.css (animation-timeline). Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------- Theme (persistent default light) ---------------- */
  var themeBtn = document.getElementById('themeToggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function syncMeta() { if (themeMeta) themeMeta.setAttribute('content', root.classList.contains('dark') ? '#0f172a' : '#f8fafc'); }
  syncMeta();
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var dark = root.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      syncMeta();
    });
  }

  /* ---------- Contact form → pre-filled mailto (no backend) ---------- */
  var cform = document.getElementById('contactForm');
  if (cform) {
    cform.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = cform.getAttribute('data-email');
      if (!to) return;
      function val(sel) { var el = cform.querySelector(sel); return el ? el.value.trim() : ''; }
      var name = val('[name="name"]');
      var email = val('[name="email"]');
      var subject = val('[name="subject"]') || ('Portfolio enquiry' + (name ? ' from ' + name : ''));
      var message = val('[name="message"]');
      var body = message + '\n\n—\n' + name + (email ? '\n' + email : '');
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
  /* ---------------- Brand Logo Click (Scroll to Top) ---------------- */
  var brandLinks = document.querySelectorAll('a.brand');
  brandLinks.forEach(function (brand) {
    brand.addEventListener('click', function (e) {
      var navSwitch = document.getElementById('nav-switch');
      if (navSwitch) navSwitch.checked = false;
      var href = brand.getAttribute('href');
      if (href === '#home' || href === '#top' || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
})();
