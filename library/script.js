const form = document.getElementById("add-form");

const addBookButton = document.getElementById("add-book");
const library = document.getElementById("library");

const popUp = document.getElementById("pop-up-bg");
const cancelPopUp = document.getElementById("cancel-add");

const inputTitle = document.getElementById("input-title");
const inputAuthor = document.getElementById("input-author");
const inputPage = document.getElementById("input-page");
const inputHaveRead = document.getElementById("input-have-read");

form.addEventListener("submit", addBook);

addBookButton.addEventListener("click", () => (popUp.style.display = "flex"));
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

  popUp.style.display = "none";
}

function createBookCard(curBook) {
  let card = document.createElement("div");
  card.classList.add("book-card");
  card.setAttribute("data-id", curBook.id);

  card.innerHTML = `
    <div class="card-item">Title: ${curBook.title}</div>
    <div class="card-item">Author: ${curBook.author}</div>
    <div class="card-item">Page: ${curBook.page}</div>
    <div class="card-item">Status: ${curBook.readStatus}</div>
    <button class="close-button" id="delete-book">x</button>
     `;

  library.appendChild(card);
  const button = card.getElementsByClassName("close-button")[0];
  button.addEventListener("click", () => deleteBook(curBook.id));
}

function deleteBook(id) {
  const ele = document.querySelector(`.book-card[data-id="${id}"]`);
  ele.remove();
}
