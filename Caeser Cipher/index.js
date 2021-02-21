//Caesar Cipher: An earlier encryption technique which used to substitute
// the current alphabets with alphabet after a number of count.

function caesarCipher(string, num) {
  num = num % 26;
  const lowerCaseString = string.toLowerCase();
  const alphabetArr = "abcefghijklmnopqrstuvwxyz".split("");
  let newString = "";
  for (i = 0; i < lowerCaseString.length; i++) {
    currentLetter = lowerCaseString[i];

    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabetArr.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (string[i] === string[i].toUpperCase()) {
      newString += alphabetArr[newIndex].toUpperCase();
    } else newString += alphabetArr[newIndex];
  }
  return newString;
}

console.log(caesarCipher("Zoo Keeper", 2));

//Big O notation of the above program has O(n)  (Linear time complexity)
