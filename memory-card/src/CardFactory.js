let id = 0;

export default function CardFactory(content = randomChineseCharacter()) {
  return {
    id: id++,
    content: content,
    haveClicked: false,
  };
}

// https://stackoverflow.com/questions/1366068/whats-the-complete-range-for-chinese-characters-in-unicode
const [CHINESE_START, CHINESE_END] = [0x4e00, 0x9fff];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomChineseCharacter() {
  const random = getRandomInt(CHINESE_START, CHINESE_END);
  return String.fromCharCode(random);
}
