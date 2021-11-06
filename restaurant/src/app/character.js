import { createElement } from '../util/util';

export default function createCharacter() {
  const character = createElement('div', 'character');
  const image = createElement('img', 'character-img');
  image.src = './eugene.png';

  character.appendChild(image);

  return character;
}
