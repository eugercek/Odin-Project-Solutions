/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class Library {
  constructor(rootId, books) {
    this.__id = rootId;
    this.books = books.books;

    this.__deleteSelf = this.__deleteSelf.bind(this);
    this.__editSelf = this.__editSelf.bind(this);
  }

  get root() {
    return document.getElementById(this.__id);
  }

  createBookCard(book) {
    const card = document.createElement("div");

    card.classList.add("book-card");
    card.setAttribute("data-id", book.id);

    card.classList.add(book.readStatus === "Read" ? "read" : "not-read");

    card.innerHTML = `
    <div class="card-item title">${book.title}</div>
    <div class="card-item author">${book.author}</div>
    <div class="card-item page">${book.page}</div>
     `;

    this.root.appendChild(card);
  }

  __deleteSelf(book, cb) {
    const { id } = book.dataset;
    book.remove();

    this.removeHandlers(this.__deleteSelf);
    this.books.splice(id, 1);
    cb();
  }

  __editSelf(book, cb, form) {
    const { id } = book.dataset;

    const edit = () => {
      const changedBook = form.getValues();
      const val = { ...changedBook, id };

      this.books[id] = val;

      this.changeBook(book, val);

      form.clearHide();
    };

    const curBook = this.books[id];

    form.loadValues(curBook);

    form.swapSubmitFunction(edit);
    form.show();

    this.removeHandlers(this.__editSelf);
    cb();
  }

  setHandlers(main, cb) {
    for (const ele of this.rootArray) {
      ele.addEventListener("click", () => main(ele, cb));
    }
  }

  setHandlersWithObject(main, cb, obj) {
    for (const ele of this.rootArray) {
      ele.addEventListener("click", () => main(ele, cb, obj));
    }
  }

  removeHandlers(main) {
    this.rootArray.forEach((book) => {
      book.removeEventListener("click", () => main(book));
    });
  }

  stateDeletion(cb) {
    this.setHandlers(this.__deleteSelf, cb);
  }

  stateEdit(cb, form) {
    this.setHandlersWithObject(this.__editSelf, cb, form);
  }

  get rootArray() {
    return Array.from(this.root.children);
  }

  changeBook(book, { title, author, page, readStatus }) {
    book.querySelector(".title").innerText = title;
    book.querySelector(".author").innerText = author;
    book.querySelector(".page").innerText = page;
    book.querySelector(".page").innerText = page;
    book.classList.remove("read");
    book.classList.remove("not-read");
    book.classList.add(readStatus === "Read" ? "read" : "not-read");
  }
}
