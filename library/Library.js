export default class Library {
  constructor(root) {
    this.lastId = 0;
    this.books = [];
    this.root = root;
  }

  addBook({ title, author, page, readStatus }) {
    this.books.push({ title, author, page, readStatus });
    this.lastId++;
  }

  // Add event listener too all books!
  addHandler(trigger, fn) {
    this.books.forEach((b) => b.addEventListener(trigger, fn));
  }

  removeHandler(trigger, fn) {
    this.books.forEach((b) => b.removeEventListener(trigger, fn));
  }

  removeAllHandlers() {
    for (let b of this.books) {
      b.replaceWith(b.cloneNode(true));
    }
  }

  get lastBook() {
    return this.books[this.lastId - 1];
  }

  renderBooks() {
    this.root.innerHTML = "";
    this.books.forEach((b) => this.createBookCard(b));
  }

  createBookCard(book) {
    let card = document.createElement("div");

    card.classList.add("book-card");
    card.setAttribute("data-id", book.id);

    card.classList.add(book.readStatus == "Read" ? "read" : "not-read");

    card.innerHTML = `
    <div class="card-item title">${book.title}</div>
    <div class="card-item author">${book.author}</div>
    <div class="card-item page">${book.page}</div>
     `;

    this.root.appendChild(card);
  }
}
