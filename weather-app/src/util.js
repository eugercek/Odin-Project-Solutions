/**
 *
 * @param {string} htmlType
 * @param {string} classeS
 * @param {string} innerText
 * @param {string} id
 * @returns {Element}
 */

export default function createElement(htmlType, classeS, innerText, id) {
  const ele = document.createElement(htmlType);

  if (Array.isArray(classeS)) {
    classeS.forEach((c) => ele.classList.add(c));
  } else if (htmlType) {
    ele.classList.add(classeS);
  }

  if (innerText) {
    ele.innerText = innerText;
  }

  if (id) {
    ele.setAttribute("id", id);
  }

  return ele;
}
