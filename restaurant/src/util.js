function createElement(type = "div", _class = "", textNode = "") {
  const element = document.createElement(type);
  element.classList.add(_class);
  element.textNode = textNode;

  return element;
}

function isActiveElement(element, activeClassName = "active") {
  return element.classList.contains(activeClassName);
}

export { createElement, isActiveElement };
