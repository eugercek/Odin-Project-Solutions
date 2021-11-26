/* eslint-disable class-methods-use-this */

/* eslint-disable no-param-reassign */
export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.lastId = 0;
    this.currentProject = model.defaultProject;

    this.setAddButtonEvents();
    this.setFormEvents();

    this.createInitialState();
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

  setAddButtonEvents() {
    this.UI.project.add.addEventListener("click", () => {
      this.#show(this.UI.project.form.self);
    });

    this.UI.todo.add.addEventListener("click", () => {
      this.#show(this.UI.todo.form.self);
    });
  }

  #hide(ele) {
    ele.style.display = "none";
  }

  #show(ele) {
    ele.style.display = "flex";
  }

  handleProjectSubmit = () => {
    const obj = this.#getFormProjectValues();
    this.view.createProjectElement(obj);

    this.#hide(this.UI.todo.form.self);
  };

  handleTodoSubmit = () => {
    const project = this.currentProject;
    const obj = this.#getFormTodoValues();
    // eslint-disable-next-line no-plusplus
    this.view.createTodoElement(obj, this.lastId++, project);

    this.#hide(this.UI.todo.form.self);
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

  createInitialState = () => {
    this.currentProject = "today";

    this.view.createProjectElement({ title: this.currentProject });

    this.view.createTodoElement(
      { title: "Do todo-list site!" },
      0,
      this.currentProject
    );

    this.lastId = 1; // First todo was element is 0

    [this.UI.todo.form.self, this.UI.project.form.self].forEach((e) =>
      this.#hide(e)
    );

    // One time function
    this.createInitialState = () => {};
  };
}
