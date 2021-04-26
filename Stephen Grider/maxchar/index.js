// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let character = "";
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    obj[current] = obj[current] + 1 || 1;
  }
  const max = Math.max(...Object.values(obj));
  for (chr in obj) {
    if (obj[chr] === max) {
      character = chr;
    }
  }
  return character;
}

module.exports = maxChar;
