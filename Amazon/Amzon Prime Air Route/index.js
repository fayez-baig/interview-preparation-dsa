function findRoute(fwdList, bwdList, max) {
  let fList = fwdList.sort((a, b) => a[1] > b[1]);
  let bList = bwdList.sort((a, b) => a[1] > b[1]);

  let fHash = new Map();
  let bHash = new Map();
  for (let tuple of fList) {
    fHash.has(tuple[1]) || fHash.set(tuple[1], tuple[0]);
  }
  for (let tuple of bList) {
    bHash.has(tuple[1]) || bHash.set(tuple[1], tuple[0]);
  }

  fList = fList.map((tuple) => tuple[1]);
  bList = bList.map((tuple) => tuple[1]);
  console.log(fList);
  let result = [];
  let left = 0;
  let right = bList.length - 1;
  let best = 0;

  while (left < fList.length && right >= 0) {
    let sum = fList[left] + bList[right];
    console.log(`left is ${left} , right is ${right}`);
    console.log(`sum is ${sum}, max is ${max}`);
    if (sum <= max) {
      if (sum > best) {
        result = [];
        result.push([fHash.get(fList[left]), bHash.get(bList[right])]);
        best = sum;
      } else if (sum === best) {
        result.push([fHash.get(fList[left]), bHash.get(bList[right])]);
      }
      left++;
    } else if (sum > max) {
      right--;
    }
  }
  return result.length === 0 ? [] : result.length > 1 ? result : result[0];
}

let f = [
  [1, 3000],
  [2, 5000],
  [3, 4000],
  [4, 10000],
  [5, 9000],
  [6, 7000],
];
let b = [
  [1, 2000],
  [2, 3000],
  [3, 4000],
  [4, 1000],
];
console.log(findRoute(f, b, 11000));
