import Todo from './todo.js';
import Project from './project.js';
import { renderProjects, renderTodos } from './dom.js';
import { loadProjects, saveProjects } from './storage.js';

let projects = loadProjects();
if (projects.length === 0) {
    projects.push(new Project('Default'));
    saveProjects(projects);
}

let currentProjectIndex = 0;

function selectProject(index) {
    currentProjectIndex = index;
    renderTodos(projects[index], projects);
}

renderProjects(projects, selectProject);
renderTodos(projects[currentProjectIndex], projects);

// Example: add a new todo
projects[currentProjectIndex].addTodo(new Todo('Sample Task', 'Description', '2025-09-07', 'high'));
saveProjects(projects);
renderTodos(projects[currentProjectIndex], projects);
