let todos = [];

function addTodo() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    todos.push(taskText);
    taskInput.value = '';
    displayTodos();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

function displayTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = todo;
    listItem.innerHTML += `<button onclick="removeTodo(${index})">Remove</button>`;
    todoList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', displayTodos);
