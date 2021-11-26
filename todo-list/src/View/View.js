import DOMFactory from "./DomFactory";

export default class View extends DOMFactory {
  constructor() {
    super(
      document.getElementById("project-list"),
      document.getElementById("todo-list")
    );

    this.projectContainer = document.getElementById("project-list");
    this.todoContainer = document.getElementById("todo-list");
  }

  resetTodoContainer() {
    this.todoContainer.innerHTML = "";
  }
}
