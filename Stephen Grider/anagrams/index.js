// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMap1 = getCharMap(stringA);
  const charMap2 = getCharMap(stringB);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false;

  for (chr in charMap1) {
    if (charMap1[chr] !== charMap2[chr]) return false;
  }
  return true;
}

const getCharMap = (str) => {
  str = str.replace(/[^\w]/g, "").toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    obj[current] = obj[current] + 1 || 1;
  }
  return obj;
};

function anagrams(stringA, stringB) {
  return cleanedStr(stringA) === cleanedStr(stringB);
}

function cleanedStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
module.exports = anagrams;
