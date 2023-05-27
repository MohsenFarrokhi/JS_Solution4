const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

addBtn.addEventListener("click", addTodo);

// add a new todo item
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
}

// create a todo item
function createTodoItem(todoText) {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
    <input type="checkbox">
    <label>${todoText}</label>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

    todoItem.querySelector(".edit-btn").addEventListener("click", editTodo);
    todoItem.querySelector(".delete-btn").addEventListener("click", deleteTodo);
    todoItem.querySelector("input[type='checkbox']").addEventListener("change", toggleComplete);

    return todoItem;
}

