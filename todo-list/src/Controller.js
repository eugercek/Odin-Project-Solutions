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
      console.log("Project Cancel")
    );

    this.UI.todo.form.action.submit.addEventListener("click", () =>
      console.log("Todo Submit")
    );

    this.UI.todo.form.action.cancel.addEventListener("click", () =>
      console.log("Todo Cancel")
    );
  }

  setAddEvents() {
    this.UI.project.add.addEventListener("click", () => console.log("Add"));

    this.UI.todo.add.addEventListener("click", () => console.log("Add"));
  }

  getProjectValues() {
    return { title: this.UI.project.form.value.title.value };
  }

  getTodoValues() {
    return { title: this.UI.todo.form.value.title.value };
  }
}
