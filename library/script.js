const addBookButton = document.getElementById("add-book");
const library = document.getElementById("library");

const popUp = document.getElementById("pop-up-bg");
const closePopUp = document.getElementById("close-button");

// Initial hidden
popUp.style.display = "none";

addBookButton.addEventListener("click", () => (popUp.style.display = "flex"));
closePopUp.addEventListener("click", () => (popUp.style.display = "none"));

const inputTitle = document.getElementById("input-title");
const inputAuthor = document.getElementById("input-author");
const inputHaveRead = document.getElementById("input-have-read");

let books = [];

function fakeInput() {
  books.push({
    title: "Introduction to Algorithms ",
    author: "CLRS",
    cover: "./images/clrs.jpg",
    readStatus: false,
  });
}
