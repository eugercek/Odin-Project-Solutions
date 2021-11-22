import Todo from "./Todo";
import View from "./View";

const addTodoElement = document.getElementById("add-todo");
const addProjectElement = document.getElementById("add-project");

View.insertTodoCard(new Todo("today", true, "Meet with friend"));

addTodoElement.addEventListener("click", View.showTodoForm);
