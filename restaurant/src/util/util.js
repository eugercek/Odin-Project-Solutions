function createElement(type = 'div', _class = '', textContent = '') {
  const element = document.createElement(type);
  element.classList.add(_class);
  element.textContent = textContent;

  return element;
}

function isActiveElement(element, activeClassName = 'active') {
  return element.classList.contains(activeClassName);
}

function removeOthers(selector, className) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((e) => e.classList.remove(className));
}

function addOthers(selector, className) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((e) => e.classList.add(className));
}

export {
  createElement, isActiveElement, removeOthers, addOthers,
};
