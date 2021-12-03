import Controller from "./Controller";
import View from "./View";

const view = new View("#root");
const app = new Controller(view);

app.submitCity("Ankara");
