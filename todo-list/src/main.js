import Todo from "./Todo";
import ViewFactory from "./View";
import Repository from "./Repository";

// Creation of todo should be on Controller which will save in Repository
// Afterwards repository should reflect its new state to View
// Via controller (In this code `main.js`)

const repository = new Repository();

const View = ViewFactory(
  (projectName) => {
    repository.createNewProject(projectName);
  },
  (obj, project) => {
    const todo = new Todo(Object.assign(obj, { project }));

    const index = repository.insertTodo(project, todo);

    return Object.assign(todo, { id: index });
  }
);

Array.from(document.querySelectorAll("form")).forEach((e) => {
  e.style.display = "none";
});
