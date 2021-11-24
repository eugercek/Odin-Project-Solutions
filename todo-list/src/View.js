const View = (() => {
  const root = document.getElementById("todo-list");
  const addTodoElement = document.getElementById("add-todo");
  const addProjectElement = document.getElementById("add-project");
  const todoForm = document.getElementById("add-todo-form");
  const projectForm = document.getElementById("add-project-form");

  const createTodoCard = ({ title }) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.innerText = title;

    return ele;
  };

  const showTodoForm = () => {
    todoForm.style.visibility = "visible";
  };

  const hideTodoForm = () => {
    todoForm.style.visibility = "hidden";
  };

  const showProjectForm = () => {
    projectForm.style.visibility = "visible";
  };

  const hideProjectForm = () => {
    projectForm.style.visibility = "hidden";
  };

  const insertTodoCard = (obj) => {
    root.appendChild(createTodoCard(obj));
  };

  // Create View Event Handlers

  addTodoElement.addEventListener("click", showTodoForm);
  addProjectElement.addEventListener("click", showProjectForm);

  document
    .querySelector("#project-container .cancel-button")
    .addEventListener("click", hideProjectForm);

  document
    .querySelector("#todo-container .cancel-button")
    .addEventListener("click", hideTodoForm);

  return {
    insertTodoCard,
    showTodoForm,
    hideTodoForm,
    showProjectForm,
    hideProjectForm,
  };
})();

export default View;
