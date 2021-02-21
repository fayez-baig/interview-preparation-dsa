// A string is a palindrome if it is read the same from forward or backward.
// For example, dad reads the same either from forward or backward.
// So the word dad is a palindrome. Similarly, madam is also a palindrome.

const isPlaindrome = (string) => {
  const stringArr = string.toLowerCase().split("");
  const validCharacterArr = "abcefghijklmnopqrstuvwxyz".split("");
  const letterArr = [];
  stringArr.forEach((letter) => {
    if (validCharacterArr.indexOf(letter) > -1) letterArr.push(letter);
  });

  if (letterArr.join("") === letterArr.reverse().join("")) return true;
  else return false;
};

console.log(isPlaindrome("fayez"));

//Big O notation of the above program has O(n)  (Linear time complexity)
