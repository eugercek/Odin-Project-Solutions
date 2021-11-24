/* eslint-disable no-restricted-syntax */

// Tried to use some kind of Repository Pattern
export default class Repository {
  constructor() {
    this.projectArray = [];
  }

  getTodos(projectName) {
    return this.projectArray[projectName];
  }

  getTodo(project, id) {
    const obj = this.projectArray[project][id];

    if (obj === undefined) {
      throw new Error(`There is no todo object that has ${id}`);
    }

    return obj;
  }

  createNewProject(projectName) {
    if (this.projectArray[projectName] !== undefined) {
      throw new Error(`There is already project named ${projectName}`);
    }
    this.projectArray[projectName] = [];
  }

  insertTodo(projectName, obj) {
    this.needProject(projectName);

    const nextIndex = this.projectArray[projectName].length;

    this.projectArray[projectName].push(obj);

    return nextIndex;
  }

  needProject(projectName) {
    if (this.projectArray[projectName] === undefined) {
      throw Error(`There is no project named ${projectName}`);
    }
  }
}
