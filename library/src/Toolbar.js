export default class Toolbar {
  constructor(add, del, edit, save) {
    this.add = document.querySelector(add);
    this.del = document.querySelector(del);
    this.edit = document.querySelector(edit);
    this.save = document.querySelector(save);
  }
}
