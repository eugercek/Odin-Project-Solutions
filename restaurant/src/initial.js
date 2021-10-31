import { createElement, isActiveElement } from "./util";

function createButton(name, loadFunction) {
  const element = createElement("button", "nav-button", name);
  element.addEventListener("click", (e) => {
    // When user clicked menu when they're already in menu
    if (isActiveElement(e.target)) {
      return;
    }

    e.target.classList.add("active");
    // Show menu when user clicked menu
    loadFunction();
  });

  return element;
}

const loadMenu = () => console.log("hi");
const loadContact = () => console.log("hi");

function createHeader() {
  const header = document.createElement("nav");
  header.setAttribute("id", "nav-header");

  const menuButton = createButton("Menu", loadMenu);
  const contactButton = createButton("Contact", loadContact);

  header.appendChild(menuButton);
  header.appendChild(contactButton);

  return header;
}

function createContent() {
  const root = document.getElementById("content");

  root.appendChild(createHeader());
}

export { createContent };
