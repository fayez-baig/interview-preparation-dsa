// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example

// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest
// Input Format

// The first line contains a single integer, n , the size of candles[].
// The second line contains n space-separated integers, where each integer  describes the height of candles[i].

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// Candle heights are [3,2,1,3]. The tallest candles are  units 3, and there are  2 of them.

function birthdayCakeCandles(candles) {
  candles = candles.sort();
  const maxNum = candles[candles.length - 1];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (maxNum === candles[i]) count++;
  }
  return count;
}

// OR

function birthdayCakeCandles(candles) {
  let maxNum = 0;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (maxNum < candles[i]) maxNum = candles[i];
  }
  for (let i = 0; i < candles.length; i++) {
    if (maxNum === candles[i]) count++;
  }

  return count;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
