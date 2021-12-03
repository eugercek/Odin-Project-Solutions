import Controller from "./Controller";
import View from "./View";

const view = new View("#root");
const app = new Controller(view);

const searchCityForm = document.getElementById("search-city-form");
const input = searchCityForm.querySelector("#search-city-input");

searchCityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  app.submitCity(input.value);
});

app.initialState();
