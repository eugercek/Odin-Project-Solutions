import { createElement } from '../util/util';

function createTitle() {
  return createElement('h1', 'menu-title', 'Galley Grub');
}

function contentFactory(name, price) {
  return { name, price };
}

const menuContentList = [
  contentFactory('Krabby Patty', 1.25),
  contentFactory('Double Krabby Patty', 2),
  contentFactory('Triple Krabby Patty', 3),
  contentFactory('Small', 1),
  contentFactory('Medium', 1.25),
  contentFactory('Large', 1.50),
  contentFactory('Kelp Rings', 1.50),
];

function menuItemFactory(content) {
  const item = createElement('div', 'menu-item');
  item.appendChild(createElement('div', 'menu-item-name', content.name));
  item.appendChild(createElement('div', 'menu-item-dot'));
  item.appendChild(createElement('div', 'menu-item-price', content.price));

  return item;
}

export default function createMenu() {
  const menu = createElement('div', 'menu');
  menu.classList.add('tab-content');

  const card = createElement('div', 'menu-card');
  menu.appendChild(card);

  card.appendChild(createTitle());
  menuContentList.forEach((c) => card.appendChild(menuItemFactory(c)));

  return menu;
}
