const form = document.getElementById("add-form");

const toolbarAdd = document.getElementById("add-book");
const toolbarDelete = document.getElementById("delete-book");
const toolbarEdit = document.getElementById("edit-book");

const library = document.getElementById("library");

const popUp = document.getElementById("pop-up-bg");
const cancelPopUp = document.getElementById("cancel-add");

const inputTitle = document.getElementById("input-title");
const inputAuthor = document.getElementById("input-author");
const inputPage = document.getElementById("input-page");
const inputHaveRead = document.getElementById("input-have-read");

form.addEventListener("submit", addBook);

toolbarAdd.addEventListener("click", () => (popUp.style.display = "flex"));
toolbarDelete.addEventListener("click", () => deleteState());
toolbarEdit.addEventListener("click", () => editState());

cancelPopUp.addEventListener("click", () => {
  form.reset();
  popUp.style.display = "none";
});

let lastId = 0;
let books = [];

function addBook() {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const page = inputPage.value;
  const readStatus = inputHaveRead.value;

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

  form.reset();
  popUp.style.display = "none";
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
  const haveRead = inputHaveRead.value;
  book.querySelector(".title").innerText = inputTitle.value;
  book.querySelector(".author").innerText = inputAuthor.value;
  book.querySelector(".page").innerText = inputPage.value;

  book.classList.remove("read");
  book.classList.remove("not-read");
  book.classList.add(haveRead == "Read" ? "read" : "not-read");

  popUp.style.display = "none";
  form.removeEventListener("submit", oneEditContent);
  form.addEventListener("submit", addBook);
}

function oneEdit(book) {
  // Load current book's info to form
  inputTitle.value = book.querySelector(".title").innerText;
  inputAuthor.value = book.querySelector(".author").innerText;
  inputPage.value = book.querySelector(".page").innerText;
  inputHaveRead.value = book.classList.contains("read") ? "Read" : "Not read";

  form.removeEventListener("submit", addBook);
  form.addEventListener("submit", () => oneEditContent(book));

  popUp.style.display = "flex";

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
