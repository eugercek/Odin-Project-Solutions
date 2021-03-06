export default class Form {
  constructor(element, submitFunction) {
    this.form = element;
    this.title = this.form.querySelector("#input-title");
    this.author = this.form.querySelector("#input-author");
    this.page = this.form.querySelector("#input-page");
    this.readStatus = this.form.querySelector("#input-read-status");

    this.parent = document.getElementById("pop-up-bg");

    this.submitFunction = submitFunction;
    this.form.addEventListener("submit", submitFunction);

    this.functionStack = [submitFunction];

    this.debugFill();
  }

  clear() {
    this.form.reset();
  }

  __show() {
    this.parent.style.display = "flex";
    document.querySelector("main").classList.add("blur");
  }

  hide() {
    this.parent.style.display = "none";
    document.querySelector("main").classList.remove("blur");
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

  getValues = () => {
    return {
      title: this.title.value,
      author: this.author.value,
      page: this.page.value,
      readStatus: this.readStatus.value,
    };
  };

  loadValues({ title, author, page, readStatus }) {
    this.title.value = title;
    this.author.value = author;
    this.page.value = page;
    this.readStatus.value = readStatus;
  }

  swapSubmitFunction(fn) {
    this.functionStack.push(this.submitFunction);

    this.form.removeEventListener("submit", this.submitFunction);
    this.form.addEventListener("submit", fn);

    this.submitFunction = fn;
  }

  backToOldSubmitFunction() {
    this.form.removeEventListener("submit", this.submitFunction);
    this.submitFunction = this.submitFunctionStack.pop();

    this.form.addEventListener("click", this.submitFunction);
  }

  debugFill() {
    this.loadValues({
      title: "A title",
      author: "a author",
      page: 123,
      readStatus: "Read",
    });
  }
}
