export default class Toolbar {
  constructor(add, del, edit, save) {
    this.add = document.querySelector(add);
    this.del = document.querySelector(del);
    this.edit = document.querySelector(edit);
    this.save = document.querySelector(save);

    this.dispatch = {
      add: this.add,
      del: this.del,
      edit: this.edit,
      save: this.save,
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
      console.log("i");
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
