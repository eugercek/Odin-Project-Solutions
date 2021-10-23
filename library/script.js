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
    <p>Title: ${curBook.title}</p>
    <p>Author: ${curBook.author}</p>
    <p>Status: ${curBook.readStatus == "on" ? "Read" : "Not read"}</p> `;

  library.appendChild(card);
}

let books = [];

function fakeInput() {
  books.push({
    title: "Introduction to Algorithms ",
    author: "CLRS",
    cover: "./images/clrs.jpg",
    readStatus: false,
  });
}
