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
  };

  createTodoElement = ({ title, id }, project) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.setAttribute("data-id", id);
    ele.setAttribute("data-project", project);
    ele.innerText = title;

    this.todoContainer.appendChild(ele);
  };
}
