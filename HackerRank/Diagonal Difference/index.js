// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
  const maxLength = arr[0].length;
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let sum = 0;
  for (let i = 0, j = maxLength - 1; i < maxLength, j >= 0; i++, j--) {
    firstDiagonalSum += arr[i][i];
    secondDiagonalSum += arr[i][j];
  }
  sum = firstDiagonalSum - secondDiagonalSum;

  if (sum > 0) return sum;
  else if (sum < 0) return sum * -1;
  else return 0;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

// Explanation:-
//        0       1        2
//  0 | i0 j0 | i0 j1 | i0 j2 |
//  1 | i1 j0 | i1 j1 | i1 j2 |
//  2 | i2 j0 | i2 j1 | i2 j2 |

// left sum = i0j0 + i1j1 + i2j2
// right right = i0j2 + i1j1 + i2j2
