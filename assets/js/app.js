/* ═══════════════════════════════════════════════
   AGENT-WATCH · APP.JS
   Terminal animation · Copy buttons · Tab switching
   FAQ accordion · Smooth scroll · Sticky nav
════════════════════════════════════════════════ */

'use strict';

/* ── STICKY NAV ──────────────────────────────── */
(function() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ──────────── */
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ── COPY TO CLIPBOARD ───────────────────────── */
(function() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const wrap = btn.closest('.copy-wrap, .cta-install-wrap');
      const code = wrap ? wrap.querySelector('code') : null;
      if (!code) return;
      const text = code.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      const orig = btn.innerHTML;
      btn.innerHTML = checkIcon();
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 1800);
    });
  });

  function checkIcon() {
    return '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7L5.5 10.5L12 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
})();

/* ── TAB SWITCHING ───────────────────────────── */
(function() {
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      if (!target) return;
      const container = tab.closest('section, .modes-wrap') || document;
      container.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* ── FAQ ACCORDION ───────────────────────────── */
(function() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ── TERMINAL TYPING ANIMATION ───────────────── */
(function() {
  const cmdEl = document.getElementById('terminal-cmd');
  const outputEl = document.getElementById('terminal-output');
  if (!cmdEl || !outputEl) return;

  const COMMAND = '/watch bug-repro.mov when does the UI break?';
  const LINES = [
    { delay: 0,    html: '<span class="ok">✓</span> Detected local file <span class="hi">bug-repro.mov</span>' },
    { delay: 120,  html: '<span class="ok">✓</span> ffmpeg extracting frames <span class="dim">(--detail balanced)</span>' },
    { delay: 280,  html: '<span class="dim">  Extracted 47 frames, dedup → 23 unique</span>' },
    { delay: 440,  html: '<span class="ok">✓</span> yt-dlp caption check → <span class="dim">no captions (local file)</span>' },
    { delay: 560,  html: '<span class="ok">✓</span> Whisper transcribing audio…' },
    { delay: 800,  html: '<span class="ok">✓</span> Transcript ready <span class="dim">(3m 42s · 1,847 tokens)</span>' },
    { delay: 960,  html: '<span class="ok">✓</span> Sending 23 frames + transcript to agent…' },
  ];
  const ANSWER = {
    delay: 1200,
    html: '<span class="lbl">Agent:</span> The crash happens at <span class="ts">[0:47]</span> — after clicking "Save", the modal unmounts before the async write resolves. The spinner state is reset on unmount but the callback still fires and tries to set state on the dead component. Fix: cancel the write promise in the cleanup function of your useEffect. You can see the error flash briefly at <span class="ts">[0:48]</span> before the white screen.'
  };

  let charIdx = 0;
  let lineIdx = 0;
  let started = false;
  let startTime = null;

  function typeChar(ts) {
    if (!started) { started = true; startTime = ts; }
    const elapsed = ts - startTime;
    if (charIdx < COMMAND.length) {
      cmdEl.textContent = COMMAND.slice(0, charIdx + 1);
      charIdx++;
      requestAnimationFrame(typeChar);
      return;
    }
    // Typing done — show output lines
    if (lineIdx < LINES.length) {
      const line = LINES[lineIdx];
      const lineElapsed = elapsed - 600; // offset after typing
      if (lineElapsed >= line.delay) {
        const row = document.createElement('div');
        row.className = 't-row';
        row.innerHTML = line.html;
        row.style.opacity = '0';
        row.style.transform = 'translateY(4px)';
        row.style.transition = 'opacity 180ms ease, transform 180ms ease';
        outputEl.appendChild(row);
        requestAnimationFrame(() => {
          row.style.opacity = '1';
          row.style.transform = 'translateY(0)';
        });
        lineIdx++;
      }
    }
    // Show answer
    const lineElapsed = elapsed - 600;
    if (lineIdx >= LINES.length && lineElapsed >= ANSWER.delay) {
      const existing = document.getElementById('terminal-answer');
      if (!existing) {
        const ansEl = document.createElement('div');
        ansEl.id = 'terminal-answer';
        ansEl.className = 't-answer';
        ansEl.innerHTML = ANSWER.html;
        ansEl.style.opacity = '0';
        ansEl.style.transform = 'translateY(6px)';
        ansEl.style.transition = 'opacity 240ms ease, transform 240ms ease';
        outputEl.appendChild(ansEl);
        requestAnimationFrame(() => {
          ansEl.style.opacity = '1';
          ansEl.style.transform = 'translateY(0)';
        });
      }
      return; // done
    }
    requestAnimationFrame(typeChar);
  }

  // Intersection observer: start animation when visible
  const terminalEl = document.getElementById('terminal-demo');
  if (!terminalEl) { requestAnimationFrame(typeChar); return; }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        obs.disconnect();
        setTimeout(() => requestAnimationFrame(typeChar), 300);
      }
    });
  }, { threshold: 0.3 });
  obs.observe(terminalEl);
})();
