import createElement from "dom-create-element-query-selector";

export default class DOMFactory {
  constructor(projectContainer, todoContainer) {
    this.projectContainer = projectContainer;
    this.todoContainer = todoContainer;
  }

  createProjectElement = ({ title }, append = true) => {
    const ele = document.createElement("div");
    ele.classList.add("project-item");
    ele.innerText = title;

    if (append) {
      this.projectContainer.appendChild(ele);
    }

    // Need to invert inversion of control to explicitly and easily set event handlers in Controller
    return ele;
  };

  createTodoElement = (
    { checked, priority, title, dueDate, id },
    project,
    append = true
  ) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.setAttribute("data-id", id);
    ele.setAttribute("data-project", project);

    ele.appendChild(createElement(`div.priority.${priority}`));
    ele.appendChild(createElement(`div.${checked} .checked`));
    ele.appendChild(createElement(`.title`, title));
    ele.appendChild(createElement(`.dueDate`, dueDate));

    const removeButton = createElement("div.delete-button");
    removeButton.innerText = "−";
    const editButton = createElement("div.edit-button");
    editButton.innerText = "✐";

    ele.appendChild(removeButton);
    ele.appendChild(editButton);

    if (append) {
      this.todoContainer.appendChild(ele);
    }

    // Need to invert inversion of control to explicitly and easily set event handlers in Controller
    return ele;
  };

  createTodoElements = (todoList, project) => {
    todoList.forEach((t) => this.createTodoElement(t, project));
  };
}
