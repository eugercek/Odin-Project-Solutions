import createElement from "dom-create-element-query-selector";

export default class DOMFactory {
  constructor(projectContainer, todoContainer) {
    this.projectContainer = projectContainer;
    this.todoContainer = todoContainer;
  }

  createProjectElement = ({ title }) => {
    const ele = document.createElement("div");
    ele.classList.add("project-item");
    ele.innerText = title;

    this.projectContainer.appendChild(ele);

    // Need to invert inversion of control to explicitly and easily set event handlers in Controller
    return ele;
  };

  createTodoElement = ({ checked, priority, title, dueDate, id }, project) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.setAttribute("data-id", id);
    ele.setAttribute("data-project", project);

    ele.appendChild(createElement(`div.priority.${priority}`));
    ele.appendChild(createElement(`div.${checked} .checked`));
    ele.appendChild(createElement(`.title`, title));
    ele.appendChild(createElement(`.dueDate`, dueDate));

    this.todoContainer.appendChild(ele);

    // Need to invert inversion of control to explicitly and easily set event handlers in Controller
    return ele;
  };

  createTodoElements = (todoList, project) => {
    todoList.forEach((t) => this.createTodoElement(t, project));
  };
}
