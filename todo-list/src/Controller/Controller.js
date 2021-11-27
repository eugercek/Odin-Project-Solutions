/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

export default class Controller {
  constructor(model, view, UI) {
    this.model = model;
    this.view = view;
    this.UI = UI;

    this.lastId = 0;
    this.currentProject = "today";

    this.setAddButtonEvents();
    this.setFormEvents();

    this.createInitialState();
  }

  setFormEvents() {
    // Very good tip!
    // Don't handle events from child elements of form
    // Events propagates, handling submit event from parent is better
    // Also with this approach you can use preventDefault easily
    this.UI.project.form.self.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleProjectSubmit();
    });

    this.UI.project.form.action.cancel.addEventListener("click", () =>
      this.#hide(this.UI.project.form.self)
    );

    this.UI.todo.form.self.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleTodoSubmit();
    });

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
    this.newProject(obj);
  };

  handleTodoSubmit = () => {
    const obj = this.#getFormTodoValues();
    this.newTodo(obj);
  };

  #getFormTodoValues() {
    const obj = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this.UI.todo.form.value)) {
      if (key === "checked") {
        obj[key] = value.checked;
      } else {
        obj[key] = value.value;
      }
    }
    return obj;
  }

  #getFormProjectValues() {
    return { title: this.UI.project.form.value.title.value };
  }

  createInitialState = () => {
    this.newProject({ title: this.currentProject });
    this.newTodo({
      checked: false,
      priority: "high",
      title: "Do todo-list site!",
      dueDate: new Date(),
    });

    document.querySelector(".project-item").classList.add("active");

    [
      // Hide elements
      (this.UI.todo.form.self, this.UI.project.form.self),
    ].forEach((e) => this.#hide(e));

    // One time function
    this.createInitialState = () => {};
  };

  newProject(obj) {
    this.model.createNewProject(obj.title);
    const ele = this.view.createProjectElement(obj);

    ele.addEventListener("click", (e) => {
      this.view.resetTodoContainer();
      const todoList = this.model.getTodoList(e.target.innerText);

      this.deActivateAllProjects();
      e.target.classList.toggle("active");

      this.view.createTodoElements(todoList, obj.title);
      this.currentProject = obj.title;
    });

    this.#hide(this.UI.project.form.self);
  }

  newTodo(obj) {
    const project = this.currentProject;

    this.model.createNewTodo(obj, this.currentProject);
    const objectId = this.lastId;

    const ele = this.view.createTodoElement(
      Object.assign(obj, { id: objectId }),
      project
    );

    ele.querySelector(".delete-button").addEventListener("click", () => {
      document.querySelector(`.todo-item[data-id="${objectId}"`).remove();
    });

    this.lastId += 1;

    this.#hide(this.UI.todo.form.self);
  }

  deActivateAllProjects = () => {
    Array.from(document.querySelectorAll(".project-item")).forEach((p) => {
      p.classList.remove("active");
    });
  };
}
