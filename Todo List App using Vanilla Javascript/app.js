"use strict";

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-items");
const dropDown = document.querySelector(".category-filter");

window.addEventListener("load", getAllTodos);

todoButton.addEventListener("click", addTodo);
dropDown.addEventListener("change", categoryView);

function addTodo(event) {
  event.preventDefault(); //prevents the submit action ...
  // console.log("hello!");
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
    //adding all the todo-list to local storage...
    saveToLocal(getText);

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

    //adding to the main <ul> tag...
    todoList.appendChild(todoDiv);
  }
}

function actionCheck(event) {
  const targetItem = event.target;
  const parent = targetItem.parentElement;

  if (targetItem.classList[0] === "trash-btn") {
    parent.classList.add("clear-effect");
    removeFromLocal(targetItem);
    parent.addEventListener("transitionend", () => parent.remove());
  } else if (targetItem.classList[0] === "complete-btn") {
    parent.classList.toggle("completed");
    parent.classList.toggle("strike-effect");
  }
  saveEffectsToLocal(targetItem);
}

function removeFromLocal(index) {
  const parent = index.parentElement;
  const listElement = parent.getElementsByTagName("LI")[0].innerText;
  let todos;
  if (localStorage.getItem("savedata") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("savedata"));
  } 
  todos.splice(todos.indexOf(listElement), 1);
  localStorage.setItem("savedata", JSON.stringify(todos));
}

function categoryView(event) {
  const targetValue = event.target.value;
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    switch (targetValue) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) todo.style.display = "flex";
        else todo.style.display = "none";
        break;

      case "incomplete":
        if (!todo.classList.contains("completed")) todo.style.display = "flex";
        else todo.style.display = "none";
        break;

      default:
        todo.style.display = "none";
    }
  });
}

function saveToLocal(todo) {
  let todos;
  //returns the value in JSON
  if (localStorage.getItem("savedata") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("savedata"));
  }
  todos.push(todo);
  localStorage.setItem("savedata", JSON.stringify(todos));
}

function saveEffectsToLocal(target) {
  let strike_effect;
  if (localStorage.getItem("effects") == null) {
    strike_effect = [];
  } else {
    strike_effect = JSON.parse(localStorage.getItem("effects"));
    strike_effect.forEach((item) => {});
  }
}

function getAllTodos() {
  let todos;
  if (localStorage.getItem("savedata") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("savedata"));
    todos.forEach((todo) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      const listItem = document.createElement("li");
      listItem.classList.add("todo-items");

      todoDiv.appendChild(listItem);

      listItem.innerHTML = todo;
      //adding all the todo-list to local storage...

      //saveToLocal(getText);

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

      //adding to the main <ul> tag...
      todoList.appendChild(todoDiv);
    });
  }
}
