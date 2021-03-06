export default class Book {
  constructor() {
    this.lastId = 0;
    this.books = [];
  }

  addBook({ title, author, page, readStatus }) {
    this.books.push({ id: this.lastId, title, author, page, readStatus });
    this.lastId += 1;
  }

  get lastBook() {
    return this.books.at(-1);
  }

  removeBook(id) {
    this.books.splice(id, 1);
  }

  editBook(
    id,
    {
      title = this.books[id],
      author = this.books[id],
      page = this.books[id],
      readStatus = this.books[id],
    }
  ) {
    this.books[id] = { title, author, page, readStatus };
  }

  get size() {
    return this.books.length;
  }

  loadBooks(books) {
    if (this.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Can't load into non empty library");
      return;
    }
    this.books = books;
  }
}
