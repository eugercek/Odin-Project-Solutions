const ViewFactory = (saveProject, saveTodo) => {
  // Elements
  const root = document.getElementById("todo-list");

  const addProjectElement = document.querySelector(".add-project");
  const addTodoElement = document.querySelector(".add-todo");

  const projectForm = document.getElementById("add-project-form");
  const todoForm = document.getElementById("add-todo-form");

  const cancelProjectPopup = document.querySelector(
    "#project-container .cancel-button"
  );
  const cancelTodoPopup = document.querySelector(
    "#todo-container .cancel-button"
  );

  const submitProjectPopup = document.querySelector(
    "#project-container .add-button"
  );
  const submitTodoPopup = document.querySelector("#todo-container .add-button");

  const inputProjectPopup = document.querySelector(
    "#project-container .input-title"
  );

  const inputTodoPopup = document.querySelector("#todo-container .input-title");

  // Internal state values
  // Internal state value are not about data nor logic
  // It's purely related to what user select that's why it's on View
  const currentProject = "today";

  const showTodoForm = () => {
    todoForm.style.display = "flex";
  };

  const hideTodoForm = () => {
    todoForm.style.display = "none";
  };

  const showProjectForm = () => {
    projectForm.style.display = "flex";
  };

  const hideProjectForm = () => {
    projectForm.style.display = "none";
  };

  const createProjectElement = (projectName) => {
    const ele = document.createElement("div");
    ele.classList.add("project-item");
    ele.innerText = projectName;

    // TODO This should be on DOMClass
    // return ele

    hideProjectForm();

    projectForm.reset();

    document.getElementById("project-list").appendChild(ele);
  };

  const createTodoElement = ({ title }, id) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.setAttribute("data-id", id);
    ele.innerText = title;

    // TODO This should be on DOMClass
    // return ele;

    hideTodoForm();

    todoForm.reset();

    document.getElementById("todo-list").appendChild(ele);
  };

  const insertTodoCard = (obj) => {
    root.appendChild(createTodoElement(obj));
  };

  // Create View Event Handlers

  addTodoElement.addEventListener("click", showTodoForm);
  addProjectElement.addEventListener("click", showProjectForm);

  cancelProjectPopup.addEventListener("click", hideProjectForm);

  cancelTodoPopup.addEventListener("click", hideTodoForm);

  submitProjectPopup.addEventListener("click", () => {
    const projectName = inputProjectPopup.value;

    saveProject(projectName);

    createProjectElement(projectName);
  });

  submitTodoPopup.addEventListener("click", () => {
    const obj = { title: inputTodoPopup.value };

    const { id } = saveTodo(obj, currentProject);

    createTodoElement(obj, id);
  });

  return {
    insertTodoCard,
    showTodoForm,
    hideTodoForm,
    showProjectForm,
    hideProjectForm,
  };
};

export default ViewFactory;
