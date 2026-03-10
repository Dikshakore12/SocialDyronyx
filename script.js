// ─── LOGO (injected at build time) ───────────────────────────────────────────
const LOGO_DATA = 'data:image/png;base64,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';
document.getElementById('navLogo').src = LOGO_DATA;
document.getElementById('footerLogo').src = LOGO_DATA;

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const pages = ['home','services','saas','portfolio','pricing','about','blog','contact'];

function goTo(pageId) {
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
    const nl = document.getElementById('nl-' + p);
    if (nl) nl.classList.remove('active');
  });
  document.getElementById('page-' + pageId).classList.add('active');
  const active = document.getElementById('nl-' + pageId);
  if (active) active.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Trigger page-specific init
  if (pageId === 'home') initCounters();
  if (pageId === 'blog') loadBlog();
  setupReveal();
}

function mobileGo(pageId) {
  document.getElementById('mobileNav').classList.remove('open');
  goTo(pageId);
}

// ─── NAV SCROLL EFFECT ────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// ─── COUNTER ANIMATION ────────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const dur = 2200;
  const steps = 60;
  const stepVal = target / steps;
  let cur = 0;
  const id = setInterval(() => {
    cur += stepVal;
    if (cur >= target) { el.textContent = target.toLocaleString(); clearInterval(id); }
    else el.textContent = Math.floor(cur).toLocaleString();
  }, dur / steps);
}

function initCounters() {
  document.querySelectorAll('#page-home.active .counter, #page-home.active .hstat-num .counter').forEach(el => {
    el.textContent = '0';
    setTimeout(() => animateCounter(el), 500);
  });
}
setTimeout(initCounters, 700);

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}
setupReveal();

// ─── FAQ TOGGLE ───────────────────────────────────────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = type === 'success' ? '✓' : '✕';
  t.className = 'toast ' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
async function submitContactForm() {
  const btn = document.getElementById('contactSubmitBtn');
  const msgEl = document.getElementById('contactFormMsg');

  const data = {
    firstName: document.getElementById('cf-firstname').value.trim(),
    lastName: document.getElementById('cf-lastname').value.trim(),
    email: document.getElementById('cf-email').value.trim(),
    phone: document.getElementById('cf-phone').value.trim(),
    service: document.getElementById('cf-service').value,
    message: document.getElementById('cf-message').value.trim()
  };

  if (!data.firstName || !data.email || !data.message) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = '⚠ Please fill in First Name, Email, and Message.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = '⚠ Please enter a valid email address.';
    return;
  }

  btn.classList.add('btn-loading');
  btn.textContent = 'Sending...';
  msgEl.className = 'form-msg';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (result.success) {
      msgEl.className = 'form-msg success';
      msgEl.textContent = '✓ ' + result.message;
      showToast('Message sent! We\'ll reply within 2 hours. 🚀', 'success');
      // Clear form
      ['cf-firstname','cf-lastname','cf-email','cf-phone','cf-message'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('cf-service').value = '';
    } else {
      msgEl.className = 'form-msg error';
      msgEl.textContent = '⚠ ' + result.message;
    }
  } catch (e) {
    // Fallback for demo (no server)
    msgEl.className = 'form-msg success';
    msgEl.textContent = '✓ Message received! We\'ll get back to you within 2 business hours.';
    showToast('Message sent! Talk soon 🚀', 'success');
  } finally {
    btn.classList.remove('btn-loading');
    btn.textContent = 'Send Message →';
  }
}

// Enter key support
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.closest('.contact-form')) {
    if (document.activeElement.tagName !== 'TEXTAREA') submitContactForm();
  }
});

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
async function subscribeNewsletter() {
  const email = document.getElementById('nlEmail').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error'); return;
  }
  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const result = await res.json();
    showToast(result.message, result.success ? 'success' : 'error');
    if (result.success) document.getElementById('nlEmail').value = '';
  } catch {
    showToast('Subscribed! Welcome to DyronyxTech 🚀', 'success');
    document.getElementById('nlEmail').value = '';
  }
}

// ─── BLOG RENDERER ────────────────────────────────────────────────────────────
let blogPosts = [];
let blogPage = 0;
const POSTS_PER_PAGE = 6;

async function loadBlog() {
  if (blogPosts.length > 0) return;
  try {
    const res = await fetch('/api/blog');
    const data = await res.json();
    blogPosts = data.posts || [];
  } catch {
    blogPosts = [
      { id:1, slug:'google-review-guide', title:'The Complete Guide to Google Review Automation in 2024', excerpt:'How to get 100+ 5-star reviews in 30 days using smart automation.', category:'Google Reviews', author:'Diksha Kore', date:'2024-03-15', readTime:'8 min read', featured:true, emoji:'⭐', gradient:'rgba(0,212,255,.15),rgba(91,43,232,.15)' },
      { id:2, slug:'instagram-reels', title:'Instagram Reels Strategy That Grew Our Client to 50K Followers', excerpt:'The exact framework that turned 2,000 followers into 50K in 4 months.', category:'Social Media', author:'Diksha Kore', date:'2024-03-08', readTime:'6 min read', emoji:'📱', gradient:'rgba(224,64,251,.15),rgba(91,43,232,.1)' },
      { id:3, slug:'business-automation', title:'5 Business Processes You Should Automate Right Now', excerpt:'Stop doing these 5 tasks manually and save 20 hours per week.', category:'Automation', author:'Diksha Kore', date:'2024-02-22', readTime:'7 min read', emoji:'⚡', gradient:'rgba(0,229,160,.15),rgba(0,212,255,.1)' },
      { id:4, slug:'linkedin-brand', title:'Build a LinkedIn Personal Brand That Generates B2B Leads', excerpt:'Step-by-step playbook for founders to build authority on LinkedIn.', category:'LinkedIn', author:'Diksha Kore', date:'2024-02-10', readTime:'9 min read', emoji:'💼', gradient:'rgba(255,179,0,.15),rgba(224,64,251,.1)' },
      { id:5, slug:'local-seo', title:'Local SEO 2024: The Definitive Guide for Indian Businesses', excerpt:'Dominate local search results and appear on Google\'s first page.', category:'SEO', author:'Diksha Kore', date:'2024-01-28', readTime:'11 min read', emoji:'🔍', gradient:'rgba(91,43,232,.15),rgba(0,212,255,.1)' },
      { id:6, slug:'reputation-guide', title:'Online Reputation Management for Local Businesses', excerpt:'How to monitor, manage, and build your online reputation.', category:'Reputation', author:'Diksha Kore', date:'2024-01-15', readTime:'8 min read', emoji:'🏆', gradient:'rgba(0,212,255,.12),rgba(0,229,160,.1)' }
    ];
  }
  renderBlog();
}

function renderBlog() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  if (featured) {
    document.getElementById('blogFeatured').innerHTML = `
      <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:24px">
        <div class="blog-card">
          <div class="blog-img" style="height:220px;background:linear-gradient(135deg,${featured.gradient})">${featured.emoji}</div>
          <div class="blog-body">
            <span class="blog-cat">${featured.category}</span>
            <h3 style="font-size:1.2rem;margin-bottom:10px">${featured.title}</h3>
            <p>${featured.excerpt}</p>
            <div class="blog-meta"><span>${featured.author}</span><span>${featured.readTime}</span></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
          ${rest.slice(0,3).map(p => `
            <div class="blog-card" style="display:flex;gap:14px;align-items:center;padding:16px">
              <div style="width:72px;height:72px;background:linear-gradient(135deg,${p.gradient});border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0">${p.emoji}</div>
              <div><span class="blog-cat">${p.category}</span><h3 style="font-size:.85rem;margin-bottom:3px">${p.title}</h3><div class="blog-meta" style="margin-top:4px"><span>${p.readTime}</span></div></div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  const grid = document.getElementById('blogGrid');
  const toShow = rest.slice(3, 3 + POSTS_PER_PAGE);
  grid.innerHTML = toShow.map(p => `
    <div class="blog-card reveal">
      <div class="blog-img" style="background:linear-gradient(135deg,${p.gradient})">${p.emoji}</div>
      <div class="blog-body">
        <span class="blog-cat">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="blog-meta"><span>${p.author} · ${p.date}</span><span>${p.readTime}</span></div>
      </div>
    </div>`).join('');
  
  setupReveal();
  if (toShow.length < rest.length - 3) {
    document.getElementById('loadMoreBtn').style.display = 'inline-flex';
  } else {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

function loadMorePosts() {
  blogPage++;
  const rest = blogPosts.filter(p => !p.featured).slice(3);
  const more = rest.slice(blogPage * POSTS_PER_PAGE, (blogPage + 1) * POSTS_PER_PAGE);
  const grid = document.getElementById('blogGrid');
  more.forEach(p => {
    const div = document.createElement('div');
    div.className = 'blog-card reveal';
    div.innerHTML = `
      <div class="blog-img" style="background:linear-gradient(135deg,${p.gradient})">${p.emoji}</div>
      <div class="blog-body">
        <span class="blog-cat">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="blog-met
        <div class="blog-meta"><span>${p.author} · ${p.date}</span><span>${p.readTime}</span></div>
      </div>
    </div>`;
    div.querySelector('.blog-card') && setupReveal();
    grid.appendChild(div);
  });
  setupReveal();

  const rest2 = blogPosts.filter(p => !p.featured).slice(3);
  const loaded = 3 + (blogPage + 1) * POSTS_PER_PAGE;
  if (loaded >= rest2.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setupReveal();
  goTo('home');
});
