import createElement from "dom-create-element-query-selector";

export default class View {
  constructor(root) {
    this.root = root;
  }

  createCard({ type, city, degree }) {
    const ele = createElement(
      div.weather - card,
      createElement(div.city, city),
      createElement(div.degree, degree),
      createElement(div.type, type)
    );
  }
}
