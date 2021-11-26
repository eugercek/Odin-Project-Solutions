/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.setAddEvents();
    this.setFormEvents();

    this.currentProject = "Today";
  }

  setFormEvents() {
    this.UI.project.form.action.submit.addEventListener("click", () =>
      console.log(this.#getFormTodoValues())
    );

    this.UI.project.form.action.cancel.addEventListener("click", () =>
      this.#hide(this.UI.project.form.self)
    );

    this.UI.todo.form.action.submit.addEventListener("click", () =>
      console.log("Todo Submit")
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

  handleTodoSubmit() {
    const project = this.currentProject;
    const obj = getTodoValues();
    // TODO
  }

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
}
