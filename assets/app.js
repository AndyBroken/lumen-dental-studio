/* ===== Lumen Dental Studio — shared data, layout & components ===== */
const IMG = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const PHONE = '(480) 555-0164', TEL = 'tel:+14805550164', EMAIL = 'hello@lumendental.example';
const ADDRESS = '7150 E Camelback Rd, Suite 210, Scottsdale, AZ 85251';
const money = (n, d = 0) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} }
};
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

const ICON = {
  tooth: '<path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7 .5 3 1 6.5 2.5 6.5S9.5 17 12 17s3 4 4.5 4S18.5 17.5 19 14.5c.5-2.5 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  align: '<path d="M4 9c0-3 3.5-5 8-5s8 2 8 5v2c0 4-3.5 7-8 7s-8-3-8-7z"/><path d="M8 10h8"/>',
  implant: '<path d="M8 3h8l-1 6H9zM9 9h6M10 12h4M10.5 15h3M11 18h2l-1 3z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-10-1 12-5 16-9 17z"/><path d="M4 21c3-5 6-8 10-10"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  wallet: '<path d="M20 7H5a2 2 0 0 1 0-4h13v4M3 5v14a2 2 0 0 0 2 2h15V7"/><circle cx="16" cy="14" r="1.5"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrowL: '<path d="M15 18l-6-6 6-6"/>', arrowR: '<path d="M9 18l6-6-6-6"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>'
};
const ic = (k, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

const CATS = { general: 'General & Family', cosmetic: 'Cosmetic', ortho: 'Orthodontics', restorative: 'Restorative', emergency: 'Emergency' };
const TREATMENTS = [
  { id: 'exam', cat: 'general', icon: 'tooth', name: 'New Patient Exam', img: '1606811971618-4486d14f3f99', min: 189, max: 249, est: 219, dur: '60 min', unit: 'visit',
    desc: 'Comprehensive exam, low-dose 3D digital X-rays, oral cancer screening and a gentle cleaning — plus a personal smile plan.' },
  { id: 'cleaning', cat: 'general', icon: 'leaf', name: 'Hygiene Cleaning', img: '1588776814546-daab30f310ce', min: 129, max: 169, est: 149, dur: '45 min', unit: 'visit',
    desc: 'Ultrasonic cleaning, polish and fluoride with a hygienist who never rushes. Noise-cancelling headphones included.' },
  { id: 'kids', cat: 'general', icon: 'heart', name: 'Kids’ Dentistry', img: '1681939282741-9ace0a227977', min: 99, max: 149, est: 119, dur: '40 min', unit: 'visit',
    desc: 'Fun, fear-free first visits, sealants and fluoride for little smiles — with a treasure chest at the end.' },
  { id: 'whitening', cat: 'cosmetic', icon: 'sparkle', name: 'Professional Whitening', img: '1489278353717-f64c6ee8a4d2', min: 349, max: 549, est: 449, dur: '90 min', unit: 'treatment',
    desc: 'Up to 8 shades brighter in a single in-office session, with custom take-home trays for touch-ups.' },
  { id: 'veneers', cat: 'cosmetic', icon: 'sparkle', name: 'Porcelain Veneers', img: '1494790108377-be9c29b29330', min: 1100, max: 1600, est: 1350, dur: '2 visits', unit: 'tooth', qty: true,
    desc: 'Ultra-thin, hand-layered porcelain designed digitally so you can preview your new smile before we begin.' },
  { id: 'aligners', cat: 'ortho', icon: 'align', name: 'Clear Aligners', img: '1564420228450-d9a5bc8d6565', min: 3500, max: 5900, est: 4800, dur: '6–18 months', unit: 'full case',
    desc: 'Nearly invisible, removable aligners planned with a 3D scan — see your projected result on day one.' },
  { id: 'implant', cat: 'restorative', icon: 'implant', name: 'Dental Implants', img: '1593022356769-11f762e25ed9', min: 3200, max: 4500, est: 3900, dur: '3–6 months', unit: 'tooth', qty: true,
    desc: 'Guided, minimally invasive implant placement with a natural-looking crown that lasts for decades.' },
  { id: 'crown', cat: 'restorative', icon: 'tooth', name: 'Same-Day Crowns', img: '1588776814546-1ffcf47267a5', min: 1050, max: 1400, est: 1200, dur: '2 hours', unit: 'tooth', qty: true,
    desc: 'Designed, milled and placed in one appointment with in-house CAD/CAM technology. No temporaries.' },
  { id: 'emergency', cat: 'emergency', icon: 'bolt', name: 'Emergency Visit', img: '1657470179447-0f5aa16daa91', min: 129, max: 199, est: 159, dur: '30 min', unit: 'visit',
    desc: 'Toothache, broken tooth or lost filling? Same-day emergency appointments, including Saturdays.' }
];
const BOOK_SERVICES = [
  { id: 'exam', name: 'New patient exam & cleaning', icon: 'tooth', dur: 60, note: 'From $189 · or free with membership' },
  { id: 'cleaning', name: 'Cleaning & check-up', icon: 'leaf', dur: 45, note: 'Existing patients · most PPO covered' },
  { id: 'whitening', name: 'Whitening session', icon: 'sparkle', dur: 90, note: 'From $349' },
  { id: 'cosmetic', name: 'Smile design consultation', icon: 'sparkle', dur: 45, note: 'Free · veneers & bonding' },
  { id: 'aligners', name: 'Clear aligner consultation', icon: 'align', dur: 45, note: 'Free · includes 3D scan' },
  { id: 'implant', name: 'Implant consultation', icon: 'implant', dur: 45, note: 'Free · includes 3D CT scan' },
  { id: 'emergency', name: 'Emergency visit', icon: 'bolt', dur: 30, note: 'Same-day · from $129' },
  { id: 'kids', name: 'Child’s visit (under 12)', icon: 'heart', dur: 40, note: 'From $99' }
];
const DOCTORS = [
  { id: 'marsh', n: 'Dr. Elena Marsh', t: 'DDS', r: 'Founder · Cosmetic Dentistry', img: '1765005204058-10418f5123c5', years: 14, lang: 'English, Spanish',
    focus: 'Smile design, veneers, whitening', bio: 'Elena opened Lumen to create the dental office she always wished existed — calm, transparent and genuinely kind. She is known for natural-looking cosmetic work and for explaining every option without pressure.' },
  { id: 'mehta', n: 'Dr. Arjun Mehta', t: 'DMD', r: 'Implants & Oral Surgery', img: '1612349317150-e413f6a5b16d', years: 11, lang: 'English, Hindi',
    focus: 'Guided implants, extractions, bone grafting', bio: 'Arjun uses 3D-guided surgery to make implant placement faster and more comfortable. Patients love his steady hands and his dry sense of humor during long procedures.' },
  { id: 'ramirez', n: 'Dr. Sofia Ramirez', t: 'DDS, MS', r: 'Orthodontist', img: '1770134223774-13b735e29201', years: 9, lang: 'English, Spanish, Portuguese',
    focus: 'Clear aligners, adult orthodontics', bio: 'Sofia has straightened more than 2,000 smiles with clear aligners. She plans every case digitally so patients can see their projected result before they commit.' },
  { id: 'brooks', n: 'Dr. Daniel Brooks', t: 'DMD', r: 'Family & Kids’ Dentistry', img: '1758691463582-11aea602cd4a', years: 7, lang: 'English',
    focus: 'Pediatric care, preventive dentistry', bio: 'Daniel makes first visits fun. As a dad of three, he knows how to turn nervous kids into proud patients — and how to keep anxious adults relaxed too.' }
];
const REVIEWS = [
  { n: 'Megan T.', img: '1611695434369-a8f5d76ceb7b', w: 'Clear aligners · Dr. Ramirez', q: 'Fourteen months later my smile is exactly what they showed me on the 3D preview. I genuinely look forward to my appointments.' },
  { n: 'Danielle R.', img: '1784460469850-80838868f4d2', w: 'Whitening · Dr. Marsh', q: 'The calmest dental office I’ve ever been in. Weighted blanket, Netflix on the ceiling and zero judgment about my coffee habit.' },
  { n: 'Chris P.', w: 'Implant · Dr. Mehta', q: 'I was terrified of implant surgery. It took under an hour, I felt nothing, and they texted me that evening to check in.' },
  { n: 'Aisha K.', img: '1758273239858-e2090a60b45d', w: 'New patient exam · Dr. Brooks', q: 'Booked online in two minutes, got a price estimate before I even arrived. No surprise bills — finally.' },
  { n: 'Rachel S.', img: '1617812191081-2a24e3f30e45', w: 'Veneers · Dr. Marsh', q: 'Six veneers and nobody can tell they aren’t my real teeth. Worth every penny, and the payment plan made it doable.' },
  { n: 'Tom W.', w: 'Emergency visit · Dr. Mehta', q: 'Cracked a molar on a Saturday morning and was seen by 11. Fixed with a same-day crown. These people are wizards.' }
];
const FAQ = [
  ['Do you accept my insurance?', 'We are in-network with most major PPO plans and file claims for you. Before your visit we verify your benefits and send an estimate of what insurance will cover.'],
  ['I don’t have insurance. What are my options?', 'Our Lumen Membership starts at $34/month and covers two cleanings, exams, X-rays and 20% off all treatment. We also offer 0% financing for 12 months.'],
  ['I’m nervous about the dentist. Can you help?', 'Absolutely — most of our patients say so. We offer noise-cancelling headphones, weighted blankets, nitrous oxide and oral sedation, and we always explain before we act.'],
  ['How quickly can I get an appointment?', 'Most new patients are seen within 3 days, and we keep same-day slots open for emergencies Monday through Saturday.'],
  ['Can I see the price before treatment?', 'Yes. You’ll get a written, itemized estimate for every treatment plan — and you can use our online cost estimator any time.']
];
const HOURS = [['Mon – Thu', '7:00am – 6:00pm'], ['Friday', '7:00am – 3:00pm'], ['Saturday', '8:00am – 1:00pm'], ['Sunday', 'Closed']];

/* ---------- theme ---------- */
const savedTheme = store.get('lumen-theme', null);
document.documentElement.dataset.theme = savedTheme || 'light';

/* ---------- layout ---------- */
const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".35"/><path d="M14 11c-2.4 0-3.8 1.8-3.8 4.2 0 2.8 1.4 4.2 1.9 6.5.5 2.8.9 6.1 2.3 6.1s1.6-3.7 4-3.7 2.6 3.7 4 3.7 1.8-3.3 2.3-6.1c.5-2.3 1.9-3.7 1.9-6.5 0-2.4-1.4-4.2-3.8-4.2-1.9 0-2.8.9-4.6.9S15.9 11 14 11z" fill="none" stroke="var(--teal)" stroke-width="1.6" stroke-linejoin="round"/><path d="M27 8l.7 1.9 1.9.7-1.9.7L27 13.2l-.7-1.9-1.9-.7 1.9-.7z" fill="var(--gold)"/></svg>`;
const page = document.body.dataset.page;
const NAV = [['index.html', 'Home', 'home'], ['treatments.html', 'Treatments', 'treatments'], ['team.html', 'Our Team', 'team'], ['pricing.html', 'Insurance & Financing', 'pricing']];
const header = $('#header');
if (header) header.outerHTML = `
<header class="site-header" id="siteHeader">
  <div class="container bar">
    <a href="index.html" class="logo" aria-label="Lumen Dental Studio home">${LOGO}<span>Lumen<small>Dental Studio</small></span></a>
    <ul class="nav">${NAV.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? 'active' : ''}">${t}</a></li>`).join('')}</ul>
    <div class="tools">
      <a href="${TEL}" class="icon-btn" aria-label="Call ${PHONE}">${ic('phone', 18)}</a>
      <button class="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
        <svg class="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <a href="book.html" class="btn btn-primary">Book Appointment</a>
      <button class="icon-btn burger" id="burger" aria-label="Open menu"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 5h14M2 9h14M2 13h14"/></svg></button>
    </div>
  </div>
</header>
<nav class="mobile-nav" id="mobileNav">
  <button class="icon-btn close" id="navClose" aria-label="Close menu">${ic('x', 18)}</button>
  ${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
  <a href="book.html" class="btn btn-primary">Book Appointment</a>
</nav>`;

const footer = $('#footer');
if (footer) footer.outerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="f-top">
      <div>
        <a href="index.html" class="logo">${LOGO}<span>Lumen<small>Dental Studio</small></span></a>
        <p>Modern, calm and transparent dental care for the whole family in Old Town Scottsdale.</p>
        <a href="book.html" class="btn btn-ink btn-sm">Book online →</a>
      </div>
      <div><h5>Treatments</h5><ul>${TREATMENTS.slice(0, 6).map(t => `<li><a href="treatments.html#${t.id}">${t.name}</a></li>`).join('')}</ul></div>
      <div><h5>Studio</h5><ul><li><a href="team.html">Our dentists</a></li><li><a href="team.html#office">The office</a></li><li><a href="pricing.html">Insurance</a></li><li><a href="pricing.html#financing">Financing</a></li><li><a href="treatments.html#estimator">Cost estimator</a></li></ul></div>
      <div><h5>Visit</h5><ul><li>${ADDRESS}</li><li><a href="${TEL}">${PHONE}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li></ul>
        <div class="f-hours" style="margin-top:1rem">${HOURS.map(([d, h]) => `<b>${d}</b><span>${h}</span>`).join('')}</div></div>
    </div>
    <div class="f-big">Lumen Dental</div>
    <div class="f-bottom"><span>© ${new Date().getFullYear()} Lumen Dental Studio · All rights reserved</span><span>Concept website · Demo project</span></div>
  </div>
</footer>
<div class="mobile-book" id="mobileBook"><a href="book.html" class="btn btn-primary">${ic('calendar', 18)} Book an appointment</a></div>
<div class="toast" id="toast"></div>`;

const siteHeader = $('#siteHeader');
const onScroll = () => { siteHeader && siteHeader.classList.toggle('scrolled', scrollY > 30); const mb = $('#mobileBook'); mb && mb.classList.toggle('show', scrollY > 600); };
onScroll(); addEventListener('scroll', onScroll, { passive: true });
$('#themeToggle')?.addEventListener('click', () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; store.set('lumen-theme', t); });
$('#burger')?.addEventListener('click', () => $('#mobileNav').classList.add('open'));
$('#navClose')?.addEventListener('click', () => $('#mobileNav').classList.remove('open'));

function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 3400); }

/* ---------- reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
function observeReveals() { $$('.reveal:not(.in)').forEach(el => io.observe(el)); }

/* ---------- components ---------- */
function treatmentCard(t) {
  return `<article class="t-card reveal" id="${t.id}">
    <div class="t-img"><img src="${IMG(t.img, 700)}" alt="${t.name}" loading="lazy"><span class="pill">${CATS[t.cat]}</span></div>
    <div class="t-body"><h3>${t.name}</h3><p>${t.desc}</p>
      <div class="t-meta"><span>${ic('clock', 16)} ${t.dur}</span><span><b>${money(t.min)}–${money(t.max)}</b> / ${t.unit}</span></div>
      <div class="t-actions"><a href="book.html?service=${['veneers'].includes(t.id) ? 'cosmetic' : t.id === 'crown' ? 'exam' : t.id}" class="btn btn-primary">Book</a><a href="treatments.html?add=${t.id}#estimator" class="btn btn-line" data-est="${t.id}">Estimate cost</a></div>
    </div></article>`;
}
function faqAccordion(el, items) {
  el.innerHTML = items.map(([q, a], i) => `<div class="acc-item${i === 0 ? ' open' : ''}"><button aria-expanded="${i === 0}">${q}<i></i></button><div class="acc-panel"><div><p>${a}</p></div></div></div>`).join('');
  el.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; const it = b.parentElement, o = !it.classList.contains('open');
    $$('.acc-item', el).forEach(x => { x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded', false); });
    if (o) { it.classList.add('open'); b.setAttribute('aria-expanded', true); } });
}
function beforeAfter(el) {
  const input = $('input', el), set = v => el.style.setProperty('--pos', v + '%');
  input.addEventListener('input', () => set(input.value)); set(input.value);
}
function carousel(el, items, render) {
  const track = $('.c-track', el), dots = $('.dots', el);
  track.innerHTML = items.map(i => `<div class="c-slide">${render(i)}</div>`).join('');
  let idx = 0, timer;
  const per = () => innerWidth < 700 ? 1 : innerWidth < 1080 ? 2 : 3;
  const max = () => items.length - per();
  function go(i) {
    idx = Math.max(0, Math.min(i, max()));
    el.style.setProperty('--per', per());
    track.style.transform = `translateX(-${idx * 100 / per()}%)`;
    dots.innerHTML = Array.from({ length: max() + 1 }, (_, k) => `<button aria-label="Slide ${k + 1}" class="${k === idx ? 'active' : ''}"></button>`).join('');
  }
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(idx >= max() ? 0 : idx + 1), 5500); };
  $('.prev', el).addEventListener('click', () => { go(idx - 1); auto(); });
  $('.next', el).addEventListener('click', () => { go(idx >= max() ? 0 : idx + 1); auto(); });
  dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { go([...dots.children].indexOf(b)); auto(); } });
  let x0 = null; track.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1)); x0 = null; auto(); });
  addEventListener('resize', () => go(idx)); go(0); auto();
}
const reviewQuote = r => `<div class="quote"><span class="stars">★★★★★</span><blockquote>“${r.q}”</blockquote><div class="who">${r.img ? `<img src="${IMG(r.img, 120)}" alt="" loading="lazy">` : `<span style="width:50px;height:50px;border-radius:50%;background:var(--mint);color:var(--teal);display:grid;place-items:center;font-weight:600">${r.n[0]}</span>`}<div><b>${r.n}</b><small>${r.w}</small></div></div></div>`;
function docModal() {
  const m = document.createElement('div'); m.className = 'modal'; m.innerHTML = '<div class="modal-card" role="dialog" aria-modal="true"></div>'; document.body.appendChild(m);
  const close = () => m.classList.remove('open');
  m.addEventListener('click', e => { if (e.target === m || e.target.closest('.close')) close(); });
  addEventListener('keydown', e => e.key === 'Escape' && close());
  return id => { const d = DOCTORS.find(x => x.id === id);
    $('.modal-card', m).innerHTML = `<button class="icon-btn close" aria-label="Close">${ic('x', 18)}</button><img src="${IMG(d.img, 800)}" alt="${d.n}"><div class="modal-body"><span class="role">${d.r}</span><h3>${d.n}, ${d.t}</h3><p>${d.bio}</p><dl><dt>Focus</dt><dd>${d.focus}</dd><dt>Experience</dt><dd>${d.years} years</dd><dt>Languages</dt><dd>${d.lang}</dd><dt>Availability</dt><dd>Accepting new patients</dd></dl><a href="book.html?doctor=${d.id}" class="btn btn-primary">Book with ${d.n.split(' ')[1]}</a></div>`;
    m.classList.add('open'); };
}
const docCard = d => `<button class="doc reveal" data-doc="${d.id}"><div class="ph"><img src="${IMG(d.img, 600)}" alt="${d.n}" loading="lazy"></div><h3>${d.n}</h3><span>${d.r}</span></button>`;

/* ---------- appointment availability (deterministic demo data) ---------- */
function seeded(n) { const x = Math.sin(n) * 10000; return x - Math.floor(x); }
function slotsFor(date, doctor = 'any') {
  const day = date.getDay(); if (day === 0) return [];
  const end = day === 6 ? 13 : day === 5 ? 15 : 18, start = day === 6 ? 8 : 7, out = [];
  const key = date.getFullYear() * 1000 + date.getMonth() * 40 + date.getDate() + (doctor === 'any' ? 0 : doctor.length * 7);
  for (let h = start; h < end; h++) for (const m of [0, 30]) {
    const r = seeded(key * 31 + h * 2 + m / 30);
    if (r > (doctor === 'any' ? .52 : .66)) out.push(h * 60 + m);
  }
  const now = new Date();
  if (date.toDateString() === now.toDateString()) return out.filter(t => t > now.getHours() * 60 + now.getMinutes() + 60);
  return out;
}
const fmtTime = t => { const h = Math.floor(t / 60), m = t % 60; return `${(h % 12) || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`; };
function nextOpening() {
  const d = new Date(); for (let i = 0; i < 14; i++) { const s = slotsFor(d); if (s.length) return { d: new Date(d), t: s[0] }; d.setDate(d.getDate() + 1); }
}
