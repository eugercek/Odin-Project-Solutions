/* eslint-disable class-methods-use-this */
import createElement from "./util";

export default class View {
  /**
   * @param {string} selector
   */
  constructor(selector) {
    this.root = document.querySelector(selector);

    this.bgImgDispatch = {
      Clouds: "clouds.jpg",
      Clear: "clear.jpg",
      Drizzle: "drizzle.jpg",
      Mist: "mist.jpg",
      Snow: "snow.jpg",
      Thunder: "thunder.jpg",
    };
  }

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

  changeBackground(type) {
    if (type in this.bgImgDispatch) {
      const html = document.querySelector("html");
      html.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.30)), url(images/${this.bgImgDispatch[type]})`;
    }
  }
}
