const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-items");
const dropDown = document.querySelector(".category-filter");

todoButton.addEventListener("click", addTodo);
dropDown.addEventListener("change", categoryView);

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

    //adding the incomplete class to the todoitem..
    todoDiv.classList.add("incomplete");
    //adding to the main to the <ul> tag...
    todoList.appendChild(todoDiv);
  }
}

function actionCheck(event) {
  const targetItem = event.target;
  const parent = targetItem.parentElement;
  if (targetItem.classList[0] === "trash-btn") {
    parent.classList.add("clear-effect");
    parent.addEventListener("transitionend", () => parent.remove());
  } else if (targetItem.classList[0] === "complete-btn") {
    parent.classList.add("completed");
    parent.classList.toggle("strike-effect");
    parent.classList.toggle("incomplete");
    if(parent.classList.contains("incomplete")){
      parent.classList.remove("completed")
    }
  }
}

function categoryView(event) {
  const targetValue = event.target.value;
  if (targetValue == "all") {
  } else if (targetValue == "completed") {
  } else if (targetValue == "incomplete") {
  }
}


