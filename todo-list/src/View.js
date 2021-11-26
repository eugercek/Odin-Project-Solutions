import DOMHandler from "./DOMHandler";

export default class View extends DOMHandler {
  constructor() {
    super(
      document.getElementById("project-list"),
      document.getElementById("todo-list")
    );
  }
}
