import Project from './project.js';
import Todo from './todo.js';

export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjects() {
    const data = localStorage.getItem('projects');
    if (!data) return [];
    const parsed = JSON.parse(data);
    return parsed.map(proj => {
        const project = new Project(proj.name);
        project.todos = proj.todos.map(todo => Object.assign(new Todo(), todo));
        return project;
    });
}
