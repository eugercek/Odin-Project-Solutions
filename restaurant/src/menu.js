import { createElement } from "./util";

function createTitle() {
  const title = document.createElement("h1");
  title.classList.add("menu-title");

  return title;
}

function contentFactory(name, price) {
  return { name, price };
}

const menuContentList = [
  contentFactory("Krabby Patty", 1.25),
  contentFactory("Double Krabby Patty", 2),
  contentFactory("Triple Krabby Patty", 3),
];

function menuItemFactory(content) {
  const item = createElement("div", "menu-item");
  item.appendChild(createElement("div", "menu-item-name", content.name));
  item.appendChild(createElement("div", "menu-item-dot"));
  item.appendChild(createElement("div", "menu-item-price", content.price));

  return item;
}

function createMenu() {
  const menu = createElement("div", "menu");
  menuContentList.forEach((c) => menu.appendChild(menuItemFactory(c)));

  return menu;
}

export { createMenu };
