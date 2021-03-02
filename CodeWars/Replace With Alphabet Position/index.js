/**
 In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
 */

function alphabetPosition(text) {
  const textArr = text.toLowerCase().split("");
  const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
  const newArr = [];
  for (let i = 0; i < textArr.length; i++) {
    if (alphabetArr.includes(textArr[i])) {
      newArr.push(alphabetArr.indexOf(textArr[i]) + 1);
    }
  }
  return newArr.join(" ");
}

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
