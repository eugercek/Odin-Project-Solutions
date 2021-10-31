function createElement(type = "div", _class = "", textContent = "") {
  const element = document.createElement(type);
  element.classList.add(_class);
  element.textContent = textContent;

  return element;
}

function isActiveElement(element, activeClassName = "active") {
  return element.classList.contains(activeClassName);
}

export { createElement, isActiveElement };
