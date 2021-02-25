function findLongestWordLength(str) {
  let maxLength = 0;
  str.split(" ").forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
