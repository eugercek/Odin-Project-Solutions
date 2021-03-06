import Model from "./Model/Model";
import UI from "./UI";
import Controller from "./Controller/Controller";
import View from "./View/View";

// Creation of todo should be on Controller which will save in Repository
// Afterwards repository should reflect its new state to View
// Via controller (In this code `main.js`)

const app = new Controller(new Model(), new View(), UI);

app.createInitialState();
