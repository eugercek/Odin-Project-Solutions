import DOMFactory from "./DOMHandler";

export default class View extends DOMFactory {
  constructor() {
    super(
      document.getElementById("project-list"),
      document.getElementById("todo-list")
    );
  }
}
