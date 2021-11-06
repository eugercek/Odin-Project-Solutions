import {
  createElement,
  isActiveElement,
  removeOthers,
  addOthers,
} from '../util/util';

function load(tabName) {
  const currentTab = document.querySelector(`.tab-content.${tabName}`);

  if (currentTab.classList.contains('active')) {
    return;
  }

  removeOthers('.tab-content', 'active');
  addOthers('.tab-content', 'hidden');

  currentTab.classList.add('active');
  currentTab.classList.remove('hidden');
}

function createButton(name, loadFunction) {
  const element = createElement('button', 'nav-button', name);
  element.addEventListener('click', (e) => {
    // When user clicked menu when they're already in menu
    if (isActiveElement(e.target)) {
      return;
    }

    removeOthers('.nav-button', 'active');
    e.target.classList.add('active');
    // Show menu when user clicked menu
    loadFunction();
  });

  return element;
}

export default function createHeader() {
  const header = document.createElement('nav');
  header.setAttribute('id', 'nav-header');

  header.appendChild(createButton('Menu', () => load('menu')));
  header.appendChild(createButton('Contact', () => load('contact')));

  return header;
}
