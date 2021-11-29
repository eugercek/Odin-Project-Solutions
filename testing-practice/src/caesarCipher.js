// TODO Refactor
const shift = 3;

function charToAscii(char) {
  return char.charCodeAt(0);
}

const VAL = {
  A: charToAscii("A"),
  Z: charToAscii("Z"),
  a: charToAscii("a"),
  z: charToAscii("z"),
};

function isCapital(charAscii) {
  return charAscii >= VAL.A && charAscii <= VAL.Z;
}

function isLower(charAscii) {
  return charAscii >= VAL.a && charAscii <= VAL.z;
}

export default function caesarCipher(string) {
  let ret = "";

  // eslint-disable-next-line no-restricted-syntax
  for (const char of string) {
    const charAscii = charToAscii(char);

    let shiftedChar;
    if (isCapital(charAscii)) {
      const before = VAL.A;

      shiftedChar = String.fromCharCode(
        ((charAscii - before + shift) % 26) + before
      );
    } else if (isLower(charAscii)) {
      const before = VAL.a;
      shiftedChar = String.fromCharCode(
        ((charAscii - before + shift) % 26) + before
      );
    } else {
      shiftedChar = char;
    }
    ret += shiftedChar;
  }

  return ret;
}
