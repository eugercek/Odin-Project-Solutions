import { createMenu } from "./menu";
import { createHeader } from "./header";
import { createContact } from "./contact";

function createPage() {
  const root = document.getElementById("content");

  root.appendChild(createHeader());
  root.appendChild(createMenu());
  root.appendChild(createContact());
}

export { createPage };
