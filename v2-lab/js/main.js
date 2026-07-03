/* Two Birds Innovation v2 — nav + theme toggle. No dependencies. */
(function () {
  'use strict';

  // --- Theme toggle (system default; explicit choice persisted) -------------
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('tbi-theme'); } catch (e) { /* private mode */ }
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('tbi-theme', next); } catch (e) { /* ignore */ }
      toggle.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  // --- Mobile nav toggle ------------------------------------------------------
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
