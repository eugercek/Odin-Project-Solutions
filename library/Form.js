export default class Form {
  constructor(element, submitFunction) {
    this.form = element;
    this.title = this.form.querySelector("#input-title");
    this.author = this.form.querySelector("#input-author");
    this.page = this.form.querySelector("#input-page");
    this.haveRead = this.form.querySelector("#input-have-read");

    this.parent = document.getElementById("pop-up-bg");

    this.submitFunction = submitFunction;
    this.form.addEventListener("submit", submitFunction);
  }

  clear() {
    this.form.reset();
  }

  __show() {
    this.parent.style.display = "flex";
  }

  hide() {
    this.parent.style.display = "none";
  }

  clearHide() {
    this.hide();
    this.clear();
  }

  show() {
    this.__show();
  }
  clearShow() {
    this.clear();
    this.__show();
  }

  getValues() {
    return {
      title: this.title.value,
      author: this.author.value,
      page: this.page.value,
      havRead: this.haveRead.value,
    };
  }

  loadValues(title, author, page, haveRead) {
    this.title.value = title;
    this.author.value = author;
    this.page.value = page;
    this.haveRead.value = haveRead;
  }

  swapSubmitFunction(fn) {
    this.form.removeEventListener("submit", this.submitFunction);
    this.form.addEventListener("submit", fn);
    this.submitFunction = fn;
  }
}
