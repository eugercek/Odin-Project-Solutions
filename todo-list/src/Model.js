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
}
