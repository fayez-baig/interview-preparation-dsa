// const reverseString = (string) =>
//   string.toLowerCase().split("").reverse().join("");

//OR

//Reverse a string with like this
// input:- Coding JavaScript
//output:- gnidoC tpircSavaJ

const reverseString = (string) => {
  let newStringArr = [];
  let stringArr = string.split(" ");

  stringArr.forEach((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    newStringArr.push(reverseWord);
  });

  return newStringArr.join(" ");
};

console.log(reverseString("Coding JavaScript"));

//Big O notation of the above program has O(n)  (Linear time complexity)
// OR
//Big O notation of the above program is O(n) + O(m) = O(m+n)
