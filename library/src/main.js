/* eslint-disable import/extensions */
import Form from "./Form.js";
import Library from "./Library.js";
import Book from "./Book.js";
import Toolbar from "./Toolbar.js";

const bookObject = new Book(); // Model

const libraryObject = new Library("library", bookObject); // View Builder?

const form = new Form(document.getElementById("add-form"), function addBook() {
  const book = form.getValues();

  bookObject.addBook(book);

  libraryObject.createBookCard(bookObject.lastBook);

  form.clearHide();
}); // View

const toolbarObject = new Toolbar(
  "#add-book", // add
  "#delete-book", // del
  "#edit-book", // edit
  "#save" // save
);

toolbarObject.addHandler("add", () => form.show());
toolbarObject.addHandler("del", () => libraryObject.stateDeletion());
toolbarObject.addHandler(
  "save",
  () => localStorage.setItem("books", JSON.stringify(bookObject.books)),
  () => toolbarObject.on("save"),
  () => setTimeout(() => toolbarObject.off("save"), 300)
);
