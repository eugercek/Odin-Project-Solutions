const addBookButton = document.getElementById("add-book");
const library = document.getElementById("library");

const popUp = document.getElementById("pop-up-bg");
const closePopUp = document.getElementById("close-button");
const okPopUp = document.getElementById("add-button");

const inputTitle = document.getElementById("input-title");
const inputAuthor = document.getElementById("input-author");
const inputHaveRead = document.getElementById("input-have-read");

addBookButton.addEventListener("click", () => (popUp.style.display = "flex"));
closePopUp.addEventListener("click", () => (popUp.style.display = "none"));
okPopUp.addEventListener("click", addBook);

let lastId = 0;
let books = [];

function addBook() {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const readStatus = inputHaveRead.value;

  const curBook = {
    id: lastId,
    title: title,
    author: author,
    readStatus: readStatus,
  };

  books.push(curBook);

  lastId++;

  createBookCard(curBook);

  popUp.style.display = "none";
}

function createBookCard(curBook) {
  let card = document.createElement("div");
  card.classList.add("book-card");

  card.innerHTML = `
    <div class="card-item">Title: ${curBook.title}</div>
    <div class="card-item">Author: ${curBook.author}</div>
    <div class="card-item">Status: ${
      curBook.readStatus == "on" ? "Read" : "Not read"
    }</div> `;

  library.appendChild(card);
}

function fake() {
  const a = {
    title: "Introduction to Algorithms ",
    author: "CLRS",
    cover: "./images/clrs.jpg",
    readStatus: false,
  };

  createBookCard(a);
}

fake();
