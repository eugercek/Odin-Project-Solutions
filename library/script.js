import Form from "./Form.js";

const form = new Form(document.getElementById("add-form"), addBook);

const toolbarAdd = document.getElementById("add-book");
const toolbarDelete = document.getElementById("delete-book");
const toolbarEdit = document.getElementById("edit-book");
const toolbarSave = document.getElementById("save");
const toolbarGetLocal = document.getElementById("load-local");
const toolbarGetFile = document.getElementById("load-file");

const library = document.getElementById("library");

const cancelPopUp = document.getElementById("cancel-add");

const toggleButtonColor = function () {
  if (this.classList.contains("pressed")) {
    this.classList.remove("pressed");
  } else {
    this.classList.add("pressed");
  }
};

toolbarAdd.addEventListener("click", function () {
  toggleButtonColor.apply(this);
  form.show();
});

toolbarDelete.addEventListener("click", function () {
  if (this.classList.contains("pressed")) {
    toggleButtonColor.apply(this);
  }
  deleteState();
});

toolbarEdit.addEventListener("click", function () {
  toggleButtonColor.apply(this);
  editState();
});

toolbarSave.addEventListener("click", function () {
  toggleButtonColor.apply(this);
  saveLocal();
});

toolbarGetLocal.addEventListener("click", () => {
  toggleButtonColor.apply(this);
  getLocal();
});

toolbarGetFile.addEventListener("change", (e) => {
  toggleButtonColor.apply(document.getElementById("label-file"));
  getFile(e);
});

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
  toggleButtonColor.apply(toolbarAdd);
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
    b.style.cursor = "default";
    b.replaceWith(b.cloneNode(true));
  }
  toggleButtonColor.apply(toolbarDelete);
}

function deleteState() {
  const bookList = Array.from(document.querySelectorAll(`.book-card`));
  for (let book of bookList) {
    book.addEventListener("click", () => oneDeletion(book));
    book.style.cursor = "pointer";
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

  toggleButtonColor.apply(toolbarAdd);
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
  toggleButtonColor.apply(toolbarSave);
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
  toggleButtonColor.apply(toolbarGetLocal);
}

function getFile(event) {
  if (books.length != 0) {
    return;
  }
  let reader = new FileReader();

  let file = event.target.files[0];

  reader.onload = function (e) {
    books = JSON.parse(e.target.result);

    books.forEach((b) => {
      createBookCard(b);
      lastId++;
    });
  };

  reader.readAsText(file);

  // toggleButtonColor.apply(toolbarGetFile);
}
