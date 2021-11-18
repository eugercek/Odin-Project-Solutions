export default class Toolbar {
  constructor(add, del, edit, save, local, file) {
    this.add = document.querySelector(add);
    this.del = document.querySelector(del);
    this.edit = document.querySelector(edit);
    this.save = document.querySelector(save);
    this.loadLocal = document.querySelector(local);
    this.loadFile = document.querySelector(file);

    this.dispatch = {
      add: this.add,
      del: this.del,
      edit: this.edit,
      save: this.save,
      loadLocal: this.loadLocal,
      loadFile: this.loadFile,
    };

    this.buttons = [this.add, this.del, this.edit, this.save];
  }

  addHandler(button, fn, preHook, afterHook) {
    const curButton = this.dispatch[button];
    curButton.addEventListener("click", () => {
      if (curButton.classList.contains("pressed")) {
        this.off(button);
        return;
      }
      if (preHook !== undefined) preHook();
      fn();
      if (afterHook !== undefined) afterHook();
    });
  }

  on(button) {
    this.dispatch[button].classList.add("pressed");
  }

  off(button) {
    this.dispatch[button].classList.remove("pressed");
  }
}
