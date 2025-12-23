document.addEventListener("DOMContentLoaded", () => {
  
const taskForm = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskInput = document.querySelector('#new-task-description');
  const taskDescription = taskInput.value;

  buildToDo(taskDescription);

  taskInput.value = '';
});

function buildToDo(task) {
  const li = document.createElement('li');

  li.textContent = task;

  taskList.appendChild(li);
}
});
