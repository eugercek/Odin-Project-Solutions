/* eslint-disable no-restricted-syntax */

export default class Model {
  constructor() {
    this.projectArray = {
      [this.defaultProject]: [],
    };
  }

  getTodoList(projectName) {
    this.#needProject(projectName);

    return this.projectArray[projectName];
  }

  createNewProject(projectName) {
    if (this.projectArray[projectName] !== undefined) {
      throw new Error(`There is already project named ${projectName}`);
    }
    this.projectArray[projectName] = [];
  }

  createNewTodo(obj, projectName) {
    this.#needProject(projectName);
    this.projectArray[projectName].push(obj);
  }

  #needProject(projectName) {
    if (this.projectArray[projectName] === undefined) {
      throw Error(`There is no project named ${projectName}`);
    }
  }

  #needId(id, projectName) {
    // Liked below
    if (this.projectArray[projectName].every((t) => t.id !== id)) {
      throw Error(`There is no todo that has id:${id} in ${projectName}`);
    }
  }

  removeTodo(id, projectName) {
    this.#needProject(projectName);
    this.#needId(id, projectName);

    // Liked below too
    this.projectArray[projectName].filter((t) => t.id === id);
  }
}
