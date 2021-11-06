import { createElement } from '../util/util';

function createAvatar() {
  const avatar = createElement('div', 'avatar');

  avatar.appendChild(createElement('img', 'avatar-img'));

  return avatar;
}
