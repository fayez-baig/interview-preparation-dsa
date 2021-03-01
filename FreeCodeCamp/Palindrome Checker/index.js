/**
 Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */

function palindrome(str) {
  const newArr = str.toLowerCase().split("");
  const filteredArr = [];
  newArr.forEach((char) => {
    if (
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
    ) {
      filteredArr.push(char);
    }
  });

  return filteredArr.join("") === filteredArr.reverse().join("");
}

palindrome("A man, a plan, a canal. Panama");
