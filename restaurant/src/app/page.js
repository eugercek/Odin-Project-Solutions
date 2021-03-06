import createMenu from './menu';
import createHeader from './header';
import createContact from './contact';
import createCharacter from './character';

const root = document.getElementById('content');

function createPage() {
  root.appendChild(createHeader());
  root.appendChild(createMenu());
  root.appendChild(createContact());
  root.appendChild(createCharacter());
}

function initialState() {
  // Activate first button
  root.firstElementChild.firstElementChild.classList.add('active');
  root
    .querySelectorAll('.tab-content')
    .forEach((t) => t.classList.add('hidden'));
  root.querySelectorAll('.tab-content')[0].classList.add('active');
  root.querySelectorAll('.tab-content')[0].classList.remove('hidden');
}

export { createPage, initialState };
