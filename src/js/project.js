/**
 * Project Detail Page Script
 * Loads and displays individual project information
 */

import { getProjectById } from '../utils/data-loader.js';

/**
 * Get project ID from URL parameters
 */
function getProjectIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Show loading state
 */
function showLoading() {
    document.getElementById('loadingState').style.display = 'flex';
    document.getElementById('errorState').style.display = 'none';
    document.getElementById('projectContent').style.display = 'none';
}

/**
 * Show error state
 */
function showError() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('errorState').style.display = 'flex';
    document.getElementById('projectContent').style.display = 'none';
}

/**
 * Show project content
 */
function showContent() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('errorState').style.display = 'none';
    document.getElementById('projectContent').style.display = 'block';
}

/**
 * Render project details
 */
function renderProject(project) {
    // Update page title
    document.title = `${project.title} | Portfolio`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', project.description);
    }

    // Category
    const categoryElement = document.getElementById('projectCategory');
    categoryElement.textContent = project.category;

    // Title and tagline
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectTagline').textContent = project.tagline;

    // Tech stack
    const techListElement = document.getElementById('projectTechList');
    techListElement.innerHTML = project.techStack.map(tech => `
    <span class="tech-badge">${tech}</span>
  `).join('');

    // Live link
    const liveLinkElement = document.getElementById('projectLiveLink');
    if (project.liveUrl && project.liveUrl !== '#') {
        liveLinkElement.href = project.liveUrl;
        liveLinkElement.style.display = 'inline-flex';
    }

    // Description
    document.getElementById('projectDescription').textContent = project.description;

    // Media gallery
    if (project.media && project.media.length > 0) {
        const mediaSection = document.getElementById('mediaSection');
        const mediaGallery = document.getElementById('mediaGallery');

        mediaGallery.innerHTML = project.media.map(item => {
            const fallbackImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80';
            const mediaElement = item.type === 'video'
                ? `<video src="${item.src}" controls></video>`
                : `<img src="${item.src}" alt="${item.caption || project.title}" loading="lazy" onerror="this.src='${fallbackImage}'">`;

            return `
        <div class="media-item">
          ${mediaElement}
          ${item.caption ? `<div class="media-caption">${item.caption}</div>` : ''}
        </div>
      `;
        }).join('');

        mediaSection.style.display = 'block';
    }

    // Highlights
    if (project.highlights && project.highlights.length > 0) {
        const highlightsSection = document.getElementById('highlightsSection');
        const highlightsList = document.getElementById('highlightsList');

        highlightsList.innerHTML = project.highlights.map(highlight => `
      <li class="highlight-item">
        <span class="highlight-icon">✨</span>
        <span class="highlight-text">${highlight}</span>
      </li>
    `).join('');

        highlightsSection.style.display = 'block';
    }

    showContent();
}

/**
 * Initialize project page
 */
async function init() {
    showLoading();

    const projectId = getProjectIdFromUrl();

    if (!projectId) {
        showError();
        return;
    }

    try {
        const project = await getProjectById(projectId);

        if (!project) {
            showError();
            return;
        }

        renderProject(project);
    } catch (error) {
        console.error('Error loading project:', error);
        showError();
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
