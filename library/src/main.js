/* eslint-disable import/extensions */
import Form from "./Form.js";
import Library from "./Library.js";
import Book from "./Book.js";
import Toolbar from "./Toolbar.js";

const bookObject = new Book(); // Model

const libraryObject = new Library("library", bookObject); // View Builder?

const toolbarObject = new Toolbar(
  "#add-book", // add
  "#delete-book", // del
  "#edit-book", // edit
  "#save", // save
  "#load-local",
  "#load-file"
);

const form = new Form(document.getElementById("add-form"), function addBook() {
  const book = form.getValues();

  bookObject.addBook(book);

  libraryObject.createBookCard(bookObject.lastBook);

  toolbarObject.off("add");
  form.clearHide();
}); // View

toolbarObject.addHandler(
  "add",
  () => form.show(),
  () => toolbarObject.on("add")
);

toolbarObject.addHandler(
  "del",
  () => libraryObject.stateDeletion(() => toolbarObject.off("del")),
  () => toolbarObject.on("del")
);

toolbarObject.addHandler(
  "save",
  () => localStorage.setItem("books", JSON.stringify(bookObject.books)),
  () => toolbarObject.on("save"),
  () => setTimeout(() => toolbarObject.off("save"), 300)
);

toolbarObject.addHandler(
  "edit",
  () => libraryObject.stateEdit(() => toolbarObject.off("edit"), form),
  () => toolbarObject.on("edit")
);

toolbarObject.addHandler(
  "loadLocal",
  () => {
    if (bookObject.size !== 0) {
      return;
    }

    bookObject.loadBooks(JSON.parse(localStorage.getItem("books")));

    bookObject.books.forEach((b) => libraryObject.createBookCard(b));
  },
  () => toolbarObject.on("loadLocal"),
  () => setTimeout(() => toolbarObject.off("loadLocal"), 300)
);

document.getElementById("cancel-add").addEventListener("click", () => {
  toolbarObject.off("add");
  form.hide();
});
