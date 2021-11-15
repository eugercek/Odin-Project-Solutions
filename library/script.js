import Form from "./Form.js";
import Storage from "./Storage.js";

const storage = new Storage(JSON.parse(localStorage.getItem("books")));

const form = new Form(document.getElementById("add-form"), addBook);

const toolbarAdd = document.getElementById("add-book");
const toolbarDelete = document.getElementById("delete-book");
const toolbarEdit = document.getElementById("edit-book");
const toolbarSave = document.getElementById("save");
const toolbarGetLocal = document.getElementById("load-local");
const toolbarGetFile = document.getElementById("load-file");

const library = document.getElementById("library");

const cancelPopUp = document.getElementById("cancel-add");

toolbarAdd.addEventListener("click", () => form.show());
toolbarDelete.addEventListener("click", () => deleteState());
toolbarEdit.addEventListener("click", () => editState());
toolbarSave.addEventListener("click", saveLocal);
toolbarGetLocal.addEventListener("click", getLocal);
toolbarGetFile.addEventListener("click", getLocal);

cancelPopUp.addEventListener("click", () => form.hide());

let lastId = 0;
let books = [];

function addBook() {
  const { title, author, page, readStatus } = form.getValues();

  const curBook = {
    id: lastId,
    title,
    author,
    page,
    readStatus,
  };

  books.push(curBook);

  lastId++;

  createBookCard(curBook);

  form.clearHide();
}

function createBookCard(curBook) {
  let card = document.createElement("div");
  card.classList.add("book-card");
  card.setAttribute("data-id", curBook.id);

  card.classList.add(curBook.readStatus == "Read" ? "read" : "not-read");

  card.innerHTML = `
    <div class="card-item title">${curBook.title}</div>
    <div class="card-item author">${curBook.author}</div>
    <div class="card-item page">${curBook.page}</div>
     `;

  library.appendChild(card);
}

function oneDeletion(book) {
  book.remove();
  const bookList = Array.from(document.querySelectorAll(`.book-card`));
  for (let b of bookList) {
    b.replaceWith(b.cloneNode(true));
  }
}

function deleteState() {
  const bookList = Array.from(document.querySelectorAll(`.book-card`));
  for (let book of bookList) {
    book.addEventListener("click", () => oneDeletion(book));
  }
}

function oneEditContent(book) {
  const readStatus = form.readStatus.value;
  book.querySelector(".title").innerText = form.title.value;
  book.querySelector(".author").innerText = form.author.value;
  book.querySelector(".page").innerText = form.page.value;

  book.classList.remove("read");
  book.classList.remove("not-read");
  book.classList.add(readStatus == "Read" ? "read" : "not-read");

  book.replaceWith(book.cloneNode(true));

  form.swapSubmitFunction(addBook);
  // form.removeEventListener("submit", oneEditContent);
  // form.addEventListener("submit", addBook);

  form.clearHide();
}

function oneEdit(book) {
  // Load current book's info to form
  form.loadValues(
    book.querySelector(".title").innerText,
    book.querySelector(".author").innerText,
    book.querySelector(".page").innerText,
    book.classList.contains("read") ? "Read" : "Not read"
  );

  form.swapSubmitFunction(() => oneEditContent(book));
  // form.removeEventListener("submit", addBook);
  // form.addEventListener("submit", () => oneEditContent(book));

  form.show();

  const bookList = Array.from(document.querySelectorAll(`.book-card`));

  for (let b of bookList) {
    if (b == book) {
      continue;
    }

    b.replaceWith(b.cloneNode(true));
  }
}

function editState() {
  const bookList = Array.from(document.querySelectorAll(`.book-card`));
  for (let book of bookList) {
    book.addEventListener("click", () => oneEdit(book));
  }
}

function saveLocal() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getLocal() {
  if (books.length != 0) {
    return;
  }

  books = JSON.parse(localStorage.getItem("books"));
  books.forEach((b) => {
    createBookCard(b);
    lastId++;
  });
}
