import createElement from "./util";

export default class View {
  /**
   * @param {string} selector
   */
  constructor(selector) {
    this.root = document.querySelector(selector);
  }

  // eslint-disable-next-line class-methods-use-this
  createCard({ type, city, degree }) {
    const card = createElement("div", "card");
    const typeElement = createElement("div", "type", type);
    const cityElement = createElement("div", "city", city);
    const degreeElement = createElement("div", "degree", degree);

    [typeElement, cityElement, degreeElement].forEach((e) =>
      card.appendChild(e)
    );

    return card;
  }

  insertCard = (obj) => {
    const card = this.createCard(obj);
    this.root.innerHTML = "";
    this.root.appendChild(card);
  };
}
