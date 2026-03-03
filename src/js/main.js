/**
 * Portfolio Main Script - Figma Design
 */

import { getAllProjects } from '../utils/data-loader.js';

// Scroll to section
window.scrollToSection = function (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Navigation scroll effect
// Mobile Menu State
let isMobileMenuOpen = false;

window.toggleMobileMenu = function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const nav = document.getElementById('nav');

  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
    if (window.scrollY <= 50) {
      nav.classList.add('bg-slate-900/95', 'backdrop-blur-md');
    }
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
    if (window.scrollY <= 50) {
      nav.classList.remove('bg-slate-900/95', 'backdrop-blur-md');
    }
  }
};

function initNavScroll() {
  const nav = document.getElementById('nav');
  const logo = document.getElementById('logo');
  const navLinks = document.getElementById('navLinks');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  let lastScrollY = window.scrollY;

  if (!nav) return;

  // Toggle button listener
  mobileMenuBtn?.addEventListener('click', window.toggleMobileMenu);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Header Visibility logic (Hide on Scroll Down, Show on Scroll Up)
    if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
      // Scrolling Down - Hide Header
      nav.classList.add('-translate-y-full');
    } else {
      // Scrolling Up or at Top - Show Header
      nav.classList.remove('-translate-y-full');
    }

    // "Scroll Up closes header" logic: Close mobile menu if it's open and user scrolls up
    if (currentScrollY < lastScrollY && isMobileMenuOpen) {
      window.toggleMobileMenu();
    }

    // Sticky background logic
    if (currentScrollY > 50) {
      nav.classList.add('bg-white', 'shadow-md');
      nav.classList.remove('bg-transparent', 'bg-slate-900/95');
      logo.classList.add('text-slate-900');
      logo.classList.remove('text-white');
      mobileMenuBtn?.classList.add('text-slate-900');
      mobileMenuBtn?.classList.remove('text-white');
      navLinks?.querySelectorAll('button').forEach(btn => {
        btn.classList.add('text-slate-700');
        btn.classList.remove('text-white');
      });
      const mMenu = document.getElementById('mobileMenu');
      if (mMenu) {
        mMenu.classList.remove('text-white');
        mMenu.classList.add('text-slate-900');
      }
    } else {
      if (!isMobileMenuOpen) {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-transparent');
      } else {
        nav.classList.add('bg-slate-900/95', 'backdrop-blur-md');
      }
      logo.classList.remove('text-slate-900');
      logo.classList.add('text-white');
      mobileMenuBtn?.classList.remove('text-slate-900');
      mobileMenuBtn?.classList.add('text-white');
      navLinks?.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('text-slate-700');
        btn.classList.add('text-white');
      });
      const mMenu = document.getElementById('mobileMenu');
      if (mMenu) {
        mMenu.classList.add('text-white');
        mMenu.classList.remove('text-slate-900');
      }
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

// Add social icons
function initSocialIcons() {
  const socialLinks = document.getElementById('socialLinks');
  if (!socialLinks) return;

  const icons = [
    {
      href: 'https://github.com/MatthewLoyed',
      svg: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/matthew-loyed-4315b1346/',
      svg: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      label: 'LinkedIn'
    },
    {
      href: 'mailto:matthewloyed@gmail.com',
      svg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
      label: 'Email'
    }
  ];

  socialLinks.innerHTML = icons.map(icon => `
    <a 
      href="${icon.href}" 
      target="${icon.href.startsWith('mailto:') ? '_self' : '_blank'}" 
      rel="noopener noreferrer" 
      class="text-slate-400 hover:text-white transition-colors"
      aria-label="${icon.label}"
    >
      ${icon.svg}
    </a>
  `).join('');
}

// Create project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full';

  const fallbackImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&q=80';
  const imageHtml = project.thumbnail && project.thumbnail !== '#'
    ? `<img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onerror="this.src='${fallbackImage}'">`
    : `<img src="${fallbackImage}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">`;

  card.innerHTML = `
    <div class="relative overflow-hidden h-48 flex-shrink-0">
      ${imageHtml}
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
      <p class="text-slate-600 mb-4 line-clamp-3">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.techStack.slice(0, 5).map(tech => `
          <span class="text-xs py-1 px-2 border border-slate-300 rounded-md text-slate-700">${tech}</span>
        `).join('')}
      </div>
      <div class="flex gap-2 mt-auto">
        ${project.githubUrl && project.githubUrl !== '#' ? `
          <button 
            onclick="window.open('${project.githubUrl}', '_blank')"
            class="flex-1 h-8 px-3 border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-all inline-flex items-center justify-center gap-1.5"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </button>
        ` : ''}
        <button 
          onclick="${project.liveUrl && project.liveUrl !== '#' ? `window.open('${project.liveUrl}', '_blank')` : "alert('Live demo coming soon!')"}"
          class="flex-1 h-8 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-all inline-flex items-center justify-center gap-1.5"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          Live
        </button>
      </div>
    </div>
  `;

  return card;
}

// Render projects
async function renderProjects() {
  const container = document.getElementById('projectsGrid');

  if (!container) return;

  try {
    const projects = await getAllProjects();

    if (projects.length === 0) {
      container.innerHTML = '<p class="text-center text-slate-600 col-span-full">No projects yet</p>';
      return;
    }

    container.innerHTML = '';
    projects.forEach(project => {
      const card = createProjectCard(project);
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    container.innerHTML = '<p class="text-center text-slate-600 col-span-full">Error loading projects</p>';
  }
}

// Handle contact form
function handleContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');
  const successMessageDiv = document.getElementById('successMessage');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (!form) return;

  // Show success overlay with animation
  const showSuccessState = () => {
    // Hide form
    form.classList.remove('scale-100', 'opacity-100');
    form.classList.add('scale-95', 'opacity-0', 'pointer-events-none');

    // Show success message
    successMessageDiv.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
    successMessageDiv.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
  };

  // Reset form and UI state
  const resetFormState = () => {
    form.reset();
    formStatus.classList.add('hidden');

    // Hide success message
    successMessageDiv.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
    successMessageDiv.classList.add('scale-95', 'opacity-0', 'pointer-events-none');

    // Show form
    form.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
    form.classList.add('scale-100', 'opacity-100');
  };

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', resetFormState);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI Loading State
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;
    formStatus.classList.add('hidden');
    formStatus.classList.remove('text-red-600');

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSuccessState();
      } else {
        console.error('Error submitting form:', data);
        formStatus.innerText = "Something went wrong. Please try again later.";
        formStatus.classList.add('text-red-600');
        formStatus.classList.remove('hidden');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      formStatus.innerText = "Something went wrong. Please try again later.";
      formStatus.classList.add('text-red-600');
      formStatus.classList.remove('hidden');
    } finally {
      // Revert UI Loading State
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// Initialize
async function init() {
  initNavScroll();
  initSocialIcons();
  await renderProjects();
  handleContactForm();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
