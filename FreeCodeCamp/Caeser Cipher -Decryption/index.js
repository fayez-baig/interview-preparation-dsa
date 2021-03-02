/**
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  const upperCaseString = str.toUpperCase();
  const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let newString = "";
  for (let i = 0; i < upperCaseString.length; i++) {
    let currentLetter = upperCaseString[i];

    if (!alphabetArr.includes(currentLetter)) {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabetArr.indexOf(currentLetter);
    let newIndex = currentIndex - 13;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;

    newString += alphabetArr[newIndex];
  }
  return newString;
}

rot13("SERR PBQR PNZC");
