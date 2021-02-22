const getMean = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);
  let median;
  if (arr.length !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    const mid1 = arr[arr.length / 2 - 1];
    const mid2 = arr[arr.length / 2];

    median = (mid1 + mid2) / 2;
  }
  return median;
};

const getMode = (arr) => {
  arr.sort((a, b) => a - b);
  const obj = {};
  let maxCount = 0;
  let modes = [];

  arr.forEach((num) => {
    if (!obj[num]) obj[num] = 0;
    obj[num]++;
  });

  for (i in obj) {
    if (maxCount < obj[i]) {
      maxCount = obj[i];
      modes = [i];
    } else if (obj[i] === maxCount) {
      modes.push(i);
    }
  }
  if (modes.length === Object.keys(obj).length) modes = [];

  return modes;
};

const meanMedianMode = (arr) => ({
  mean: getMean(arr),
  median: getMedian(arr),
  mode: getMode(arr),
});

console.log(meanMedianMode([3, 2, 1]));
