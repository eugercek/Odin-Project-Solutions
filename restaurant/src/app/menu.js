import { createElement } from "../util/util";

function createTitle() {
  return createElement("h1", "menu-title", "Galley Grub");
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
  menu.classList.add("tab-content");
  menu.appendChild(createTitle());
  menuContentList.forEach((c) => menu.appendChild(menuItemFactory(c)));

  return menu;
}

export { createMenu };
