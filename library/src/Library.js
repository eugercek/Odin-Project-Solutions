export default class Library {
  constructor(rootId, books) {
    this.__id = rootId;
    this.books = books.books;

    this.__deleteSelf = this.__deleteSelf.bind(this);
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

  setHandlers(main, cb) {
    // this.rootArray.forEach((book) => {
    //   book.addEventListener("click", () => {
    //     main(book, cb);
    //   });
    // });

    for (const ele of this.rootArray) {
      ele.addEventListener("click", () => main(ele, cb));
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

  // stateEdit(cb) {}

  get rootArray() {
    return Array.from(this.root.children);
  }
}
