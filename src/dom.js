import { saveProjects } from './storage.js';

export function renderProjects(projects, onSelectProject) {
    const container = document.getElementById('projects');
    container.innerHTML = '';
    projects.forEach((project, i) => {
        const div = document.createElement('div');
        div.textContent = project.name;
        div.addEventListener('click', () => onSelectProject(i));
        container.appendChild(div);
    });
}

export function renderTodos(project, projects) {
    const container = document.getElementById('todos');
    container.innerHTML = '';
    project.todos.forEach((todo, i) => {
        const div = document.createElement('div');
        div.className = `todo ${todo.priority}`;
        div.textContent = `${todo.title} - ${todo.dueDate}`;
        div.addEventListener('click', () => {
            todo.toggleComplete();
            saveProjects(projects);
            renderTodos(project, projects);
        });
        container.appendChild(div);
    });
}
