/**
 * Data loader utility for fetching and filtering projects
 */

import projectsData from '../data/projects.json';

/**
 * Fetch all projects from the JSON file
 * @returns {Promise<Array>} Array of project objects
 */
export async function getAllProjects() {
  try {
    return projectsData.projects || [];
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

/**
 * Get projects by category
 * @param {string} category - 'personal' or 'school'
 * @returns {Promise<Array>} Filtered array of projects
 */
export async function getProjectsByCategory(category) {
  const projects = await getAllProjects();
  return projects.filter(project => project.category === category);
}

/**
 * Get a single project by ID
 * @param {string} id - Project ID
 * @returns {Promise<Object|null>} Project object or null if not found
 */
export async function getProjectById(id) {
  const projects = await getAllProjects();
  return projects.find(project => project.id === id) || null;
}
