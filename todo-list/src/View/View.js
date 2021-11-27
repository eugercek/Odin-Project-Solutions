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

  // eslint-disable-next-line class-methods-use-this
  removeTodoItem(id) {
    document.querySelector(`.todo-item[data-id="${id}"`).remove();
  }

  editTodoItem(id, obj) {
    document
      .querySelector(`.todo-item[data-id="${id}"`)
      .replaceWith(this.createTodoElement(obj, true));
  }
}
