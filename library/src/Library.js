/* eslint-disable no-loop-func */
export default class Library {
  constructor(rootId, books) {
    this.__id = rootId;
    this.books = books.books;
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

  __deleteSelf(book) {
    const { id } = book;
    book.remove();

    this.removeDeleteHandlers();
    this.books.splice(id, 1);
    return id;
  }

  setDeleteHandlers() {
    this.rootArray.forEach((book) => {
      book.addEventListener("click", () => this.__deleteSelf(book));
    });
  }

  removeDeleteHandlers() {
    this.rootArray.forEach((book) => {
      book.removeEventListener("click", () => this.__deleteSelf(book));
    });
  }

  stateDeletion() {
    this.setDeleteHandlers();
  }

  get rootArray() {
    return Array.from(this.root.children);
  }
}
