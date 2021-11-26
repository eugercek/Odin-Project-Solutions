export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.setFormActions();
  }

  setFormActions() {
    this.UI.project.form.action.submit.addEventListener("click", () =>
      console.log("Project Submit")
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
}
