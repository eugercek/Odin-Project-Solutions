import { createElement } from "../util/util";

function createTitle() {
  return createElement("h1", "contact-title", "Contact");
}

function createContactContent() {
  const info = createElement("div", "contact-content");
  info.appendChild(createElement());
}

function createContactItem(c) {
  const item = document.createElement("div", "content-item");
  item.appendChild(createElement("div", "content-item-label", c.label));
  item.appendChild(createElement("div", "content-item-value", c.value));

  return item;
}

function contentFactory(label, value) {
  return { label, value };
}

const contactItemList = [
  contentFactory("Phone", "123 123 123 123"),
  contentFactory("Address", "Under sea"),
];

function createContact() {
  const contact = createElement("div", "contact");
  contact.classList.add("tab-content");

  contact.appendChild(createTitle());
  contactItemList.forEach((c) => contact.appendChild(createContactItem(c)));

  return contact;
}

export { createContact };
