import { getAllProjects } from '../utils/data-loader.js';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const ext = 'target="_blank" rel="noopener noreferrer"';

function links(p) {
  const out = [];
  if (p.liveUrl) out.push(`<a class="link" href="${esc(p.liveUrl)}" ${ext}>${esc(p.liveLabel || 'Live site')}</a>`);
  if (p.githubUrl) out.push(`<a class="link" href="${esc(p.githubUrl)}" ${ext}>Code</a>`);
  out.push(`<a class="link" href="/project.html?id=${esc(p.id)}">Details</a>`);
  return out.join('');
}

function cardImage(p, tall) {
  const contain = p.thumbFit === 'contain';
  return `
    <a href="/project.html?id=${esc(p.id)}" class="relative block overflow-hidden ${contain ? 'bg-[#0b1118]' : 'bg-bg'} ${tall ? 'aspect-[16/10]' : 'aspect-[16/9]'}" tabindex="-1" aria-hidden="true">
      <img src="${esc(p.thumbnail)}" alt="" loading="lazy"
           class="absolute inset-0 w-full h-full ${contain ? 'object-contain py-3' : p.thumbFit === 'center' ? 'object-cover object-center' : 'object-cover object-top'}">
    </a>`;
}

function card(p, featured) {
  return `
    <article class="card flex flex-col">
      ${cardImage(p, featured)}
      <div class="p-6 flex flex-col flex-1">
        <p class="text-sm font-semibold text-brand mb-1">${esc(p.year)}</p>
        <h3 class="${featured ? 'text-2xl' : 'text-xl'} mb-2"><a href="/project.html?id=${esc(p.id)}" class="hover:text-pink transition-colors">${esc(p.title)}</a></h3>
        <p class="text-text/80 mb-4 ${featured ? '' : 'text-sm'}">${esc(featured ? p.description : p.tagline)}</p>
        <p class="flex flex-wrap gap-1.5 mb-5">${p.techStack.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</p>
        <p class="flex flex-wrap gap-x-5 gap-y-1 text-sm mt-auto">${links(p)}</p>
      </div>
    </article>`;
}

async function renderProjects() {
  const projects = await getAllProjects();
  document.getElementById('featured').innerHTML = projects.filter((p) => p.featured).map((p) => card(p, true)).join('');
  document.getElementById('projectList').innerHTML = projects.filter((p) => !p.featured).map((p) => card(p, false)).join('');
}

function initStars() {
  const el = document.getElementById('stars');
  if (!el) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('span');
    const size = Math.random() < 0.15 ? 3 : 2;
    s.className = 'star';
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 70}%;width:${size}px;height:${size}px;animation-delay:${(Math.random() * 4).toFixed(2)}s`;
    frag.appendChild(s);
  }
  el.appendChild(frag);
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'text-sm min-h-[1.25rem]';
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Request failed');
      form.reset();
      status.textContent = 'Thanks, your message was sent.';
      status.classList.add('text-pink');
    } catch (err) {
      console.error('Contact form error:', err);
      status.textContent = 'That did not go through. Please email me directly instead.';
      status.classList.add('text-red-400');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send';
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
initStars();
initContactForm();
