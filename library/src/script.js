/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable import/extensions */
import Form from "./Form.js";
import Library from "./Library.js";
import Book from "./Book.js";
import Toolbar from "./Toolbar.js";

const bookObject = new Book(); // Model
const libraryObject = new Library("library"); // View Builder?
const form = new Form(document.getElementById("add-form"), addBook); // View

const toolbarObject = new Toolbar(
  "#add-book",
  "#delete-book",
  "#edit-book",
  "#save"
);

toolbarObject.add.addEventListener("click", () => form.show());

toolbarObject.del.addEventListener("click", () => libraryObject.stateDeletion);

function addBook() {
  const book = form.getValues();

  bookObject.addBook(book);

  libraryObject.createBookCard(bookObject.lastBook);

  form.clearHide();
}
