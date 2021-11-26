/* eslint-disable class-methods-use-this */

/* eslint-disable no-param-reassign */
export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.lastId = 0;
    this.currentProject = "default";

    this.setAddEvents();
    this.setFormEvents();
  }

  setFormEvents() {
    this.UI.project.form.action.submit.addEventListener(
      "click",
      this.handleProjectSubmit
    );

    this.UI.project.form.action.cancel.addEventListener("click", () =>
      this.#hide(this.UI.project.form.self)
    );

    this.UI.todo.form.action.submit.addEventListener(
      "click",
      this.handleTodoSubmit
    );

    this.UI.todo.form.action.cancel.addEventListener("click", () =>
      this.#hide(this.UI.todo.form.self)
    );
  }

  setAddEvents() {
    this.UI.project.add.addEventListener("click", () => {
      this.#show(this.UI.project.form.self);
    });

    this.UI.todo.add.addEventListener("click", () => {
      this.#show(this.UI.todo.form.self);
    });
  }

  #hide(ele) {
    ele.style.visibility = "hidden";
  }

  #show(ele) {
    ele.style.visibility = "visible";
  }

  handleProjectSubmit = () => {
    const obj = this.#getFormProjectValues();
    this.view.createProjectElement(obj);
  };

  handleTodoSubmit = () => {
    const project = this.currentProject;
    const obj = this.#getFormTodoValues();
    // eslint-disable-next-line no-plusplus
    this.view.createTodoElement(obj, this.lastId++, project);
  };

  #getFormTodoValues() {
    const obj = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this.UI.todo.form.value)) {
      obj[key] = value.value;
    }

    return obj;
  }

  #getFormProjectValues() {
    return { title: this.UI.project.form.value.title.value };
  }

  createInitialState() {
    this.currentProject = "today";

    this.view.createProjectElement({ title: this.currentProject });

    this.view.createTodoElement(
      { title: "Do todo-list site!" },
      0,
      this.currentProject
    );

    this.lastId = 1; // First todo was element is 0
  }
}
