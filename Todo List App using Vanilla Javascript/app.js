const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-items");

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault(); //prevents the submit action ...
  console.log("hello!");

  //creating a todo div inside ul todo-items class

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-items");
  newTodo.innerHTML = "HEY";
  todoDiv.appendChild(newTodo);

  //adding the task complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //adding the trash button...
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //adding to the main to the <ul> tag...
  todoList.appendChild(todoDiv);
}
