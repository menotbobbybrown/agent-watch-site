/* ═══════════════════════════════════════════════
   AGENT-WATCH — app.js
   Terminal typing animation, copy buttons, mode tabs
════════════════════════════════════════════════ */

/* ── TERMINAL TYPING ────────────────────────── */
const DEMO_CMD = '/watch bug-repro.mov what\'s going wrong?';
const typedEl  = document.getElementById('typed-cmd');
const cursor   = document.getElementById('t-cursor');
const output   = document.getElementById('t-output');
const frames   = document.getElementById('frames-preview');

function typeCmd(str, i = 0) {
  if (i <= str.length) {
    typedEl.textContent = str.slice(0, i);
    setTimeout(() => typeCmd(str, i + 1), 42);
  } else {
    // pause, then show output
    setTimeout(showOutput, 560);
  }
}

function showOutput() {
  cursor.style.display = 'none';
  output.style.display = 'flex';
  // stagger frame chips
  const chips = frames.querySelectorAll('.frame-chip');
  chips.forEach((chip, idx) => {
    setTimeout(() => chip.classList.add('visible'), idx * 80);
  });
}

// kick off after short delay
setTimeout(() => typeCmd(DEMO_CMD), 800);

/* ── COPY BUTTONS ───────────────────────────── */
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const el = document.getElementById(targetId);
    if (!el) return;

    const text = el.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      // swap icon to check
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
      }, 1800);
    }).catch(() => {
      // fallback for non-https
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1800);
    });
  });
});

/* ── DETAIL MODE TABS ───────────────────────── */
const tabs   = document.querySelectorAll('.mode-tab');
const panels = document.querySelectorAll('.mode-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const mode = tab.dataset.mode;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    panels.forEach(p => {
      if (p.id === 'mode-' + mode) {
        p.classList.remove('hidden');
      } else {
        p.classList.add('hidden');
      }
    });
  });
});

/* ── SMOOTH SCROLL for nav links ────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
