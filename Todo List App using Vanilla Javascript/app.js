const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-items");

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault(); //prevents the submit action ...
  console.log("hello!");
  const getText = todoInput.value;

  //only adds the elements if the input tag is not null....
  if (getText != "") {
    //creating a todo div inside ul todo-items class
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const listItem = document.createElement("li");
    listItem.classList.add("todo-items");

    todoDiv.appendChild(listItem);

    listItem.innerHTML = getText;
    todoInput.value = ""; //clearing out the input field

    //adding an event handler to all the list items...
    todoList.addEventListener("click", actionCheck);

    //adding the task complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //adding the trash button...
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //adding to the main to the <ul> tag...
    todoList.appendChild(todoDiv);
  }
}

function actionCheck(event) {
  const targetItem = event.target;
  const parent = targetItem.parentElement;
  if (targetItem.classList[0] === "trash-btn") {
    parent.classList.add("clear-effect");
    // parent.remove();
  } else if (targetItem.classList[0] === "complete-btn") {
    parent.classList.toggle("strike-effect");
  }
}
