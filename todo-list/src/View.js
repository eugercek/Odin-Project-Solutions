const View = (() => {
  const root = document.getElementById("todo-list");
  const addTodoElement = document.getElementById("add-todo");
  const addProjectElement = document.getElementById("add-project");
  const todoForm = addTodoElement.querySelector(".form");

  const createTodoCard = ({ title }) => {
    const ele = document.createElement("div");
    ele.classList.add("todo-item");
    ele.innerText = title;

    return ele;
  };

  const showTodoForm = () => {
    const form = addTodoElement.querySelector(".form");
    form.style.visibility = "visible";
  };

  const hideTodoForm = () => {
    todoForm.style.visibility = "hidden";
  };

  const insertTodoCard = (obj) => {
    root.appendChild(createTodoCard(obj));
  };

  return { insertTodoCard, showTodoForm, hideTodoForm };
})();

export default View;
