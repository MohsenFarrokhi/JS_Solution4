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
