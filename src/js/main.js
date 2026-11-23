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

function featuredCard(p) {
  return `
    <article class="grid md:grid-cols-[1fr_1.1fr] gap-6 items-center">
      <a href="/project.html?id=${esc(p.id)}" class="block border border-line rounded overflow-hidden bg-white" tabindex="-1" aria-hidden="true">
        <img src="${esc(p.thumbnail)}" alt="" loading="lazy" class="w-full h-auto">
      </a>
      <div>
        <p class="text-sm text-muted mb-1">${esc(p.year)}</p>
        <h3 class="text-2xl font-medium mb-2"><a href="/project.html?id=${esc(p.id)}" class="hover:text-accent transition-colors">${esc(p.title)}</a></h3>
        <p class="text-muted mb-3">${esc(p.description)}</p>
        <p class="flex flex-wrap gap-1.5 mb-4">${p.techStack.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</p>
        <p class="flex flex-wrap gap-x-5 gap-y-1 text-sm">${links(p)}</p>
      </div>
    </article>`;
}

function listRow(p) {
  return `
    <li class="py-5 grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-2">
      <div>
        <h3 class="text-lg font-medium"><a href="/project.html?id=${esc(p.id)}" class="hover:text-accent transition-colors">${esc(p.title)}</a>
          <span class="text-sm text-muted font-sans font-normal ml-2">${esc(p.year)}</span></h3>
        <p class="text-muted">${esc(p.tagline)}</p>
        <p class="text-xs text-muted mt-1">${p.techStack.map(esc).join(' · ')}</p>
      </div>
      <p class="flex gap-x-5 text-sm md:self-center">${links(p)}</p>
    </li>`;
}

async function renderProjects() {
  const projects = await getAllProjects();
  document.getElementById('featured').innerHTML = projects.filter((p) => p.featured).map(featuredCard).join('');
  document.getElementById('projectList').innerHTML = projects.filter((p) => !p.featured).map(listRow).join('');
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
      status.classList.add('text-accent');
    } catch (err) {
      console.error('Contact form error:', err);
      status.textContent = 'That did not go through. Please email me directly instead.';
      status.classList.add('text-red-700');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send';
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
initContactForm();
