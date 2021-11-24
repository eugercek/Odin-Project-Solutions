/* eslint-disable func-names */
// -------------Model---------------
export default function Todo({ project, hasDone, title }) {
  this.title = title;
  this.hasDone = hasDone;

  if (this.idList[project] !== undefined) {
    this.id = this.idList[project];
    this.project = project;
  } else {
    throw new Error(`There is no ${project} project in ${this.idList}`);
  }
}

Todo.prototype.idList = { today: 0 };

Todo.prototype.toString = function () {
  return `${this.project}: ${this.title}`;
};
