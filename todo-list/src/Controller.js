/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.setAddEvents();
    this.setFormEvents();

    console.log(this.getTodoValues());
  }

  setFormEvents() {
    this.UI.project.form.action.submit.addEventListener("click", () =>
      console.log(this.getProjectValues())
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

  getProjectValues() {
    return { title: this.UI.project.form.value.title.value };
  }

  getTodoValues() {
    return { title: this.UI.todo.form.value.title.value };
  }

  #hide(ele) {
    ele.style.visibility = "hidden";
  }

  #show(ele) {
    ele.style.visibility = "visible";
  }
}
