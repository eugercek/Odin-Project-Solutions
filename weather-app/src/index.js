import Controller from "./Controller";
import View from "./View";

const view = new View("#root");
const app = new Controller(view, "#search-city-input");

document
  .getElementById("search-city-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    app.doSearch();
  });

app.initialState();
