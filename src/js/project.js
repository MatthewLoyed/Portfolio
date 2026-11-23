import { getProjectById } from '../utils/data-loader.js';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const ext = 'target="_blank" rel="noopener noreferrer"';
const root = document.getElementById('content');

function notFound() {
  document.title = 'Project not found — Matthew Loyed';
  root.innerHTML = `
    <h1 class="text-3xl font-medium mb-3">Project not found</h1>
    <p class="text-muted mb-6">That project doesn't exist.</p>
    <a class="link" href="/#work">Back to all work</a>`;
}

function render(p) {
  document.title = `${p.title} — Matthew Loyed`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', p.tagline);

  const actions = [
    p.liveUrl && `<a class="link" href="${esc(p.liveUrl)}" ${ext}>${esc(p.liveLabel || 'Live site')} ↗</a>`,
    p.githubUrl && `<a class="link" href="${esc(p.githubUrl)}" ${ext}>Source code ↗</a>`,
  ].filter(Boolean).join('');

  root.innerHTML = `
    <p class="text-sm font-semibold text-brand mb-2">${esc(p.year)}</p>
    <h1 class="text-4xl md:text-5xl font-extrabold mb-3">${esc(p.title)}</h1>
    <p class="text-xl text-muted mb-6">${esc(p.tagline)}</p>
    <p class="flex flex-wrap gap-1.5 mb-6">${p.techStack.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</p>
    ${actions ? `<p class="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-10">${actions}</p>` : ''}

    ${(p.media || []).map((m) => `
      <figure class="mb-10">
        <img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}" class="w-full max-h-[32rem] object-contain bg-surface border border-line rounded-2xl">
        ${m.caption ? `<figcaption class="text-sm text-muted mt-2">${esc(m.caption)}</figcaption>` : ''}
      </figure>`).join('')}

    <p class="text-lg text-text/90 mb-8 max-w-2xl">${esc(p.description)}</p>

    ${p.highlights?.length ? `
      <h2 class="section-label !mb-3">Notes</h2>
      <ul class="list-disc pl-5 space-y-2 marker:text-brand max-w-2xl">
        ${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}
      </ul>` : ''}
  `;
}

const id = new URLSearchParams(window.location.search).get('id');
const project = id ? await getProjectById(id) : null;
project ? render(project) : notFound();
