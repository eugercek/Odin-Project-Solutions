export default function reverseString(string) {
  // Thanks to https://www.samanthaming.com/pictorials/how-to-reverse-a-string/
  if (string === undefined) {
    return undefined;
  }
  return string.split("").reverse().join("");
}
