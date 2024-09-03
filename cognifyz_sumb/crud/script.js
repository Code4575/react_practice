let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let nextId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

document.addEventListener('DOMContentLoaded', () => {
    displayTasks();
});

function createTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (!title || !description) {
        alert('Please enter both title and description.');
        return;
    }

    tasks.push({ id: nextId++, title, description, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task' + (task.completed ? ' completed' : '');
        taskDiv.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <button class="complete-button" onclick="toggleComplete(${task.id})">${task.completed ? 'Unmark' : 'Complete'}</button>
            <button class="edit-button" onclick="showEditForm(${task.id})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

function showEditForm(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('editTaskId').value = task.id;
    document.getElementById('editTaskTitle').value = task.title;
    document.getElementById('editTaskDescription').value = task.description;
    document.getElementById('editForm').style.display = 'flex';
}

function updateTask() {
    const id = parseInt(document.getElementById('editTaskId').value);
    const newTitle = document.getElementById('editTaskTitle').value;
    const newDescription = document.getElementById('editTaskDescription').value;

    if (!newTitle || !newDescription) {
        alert('Please enter both new title and new description.');
        return;
    }

    const task = tasks.find(t => t.id === id);
    task.title = newTitle;
    task.description = newDescription;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
