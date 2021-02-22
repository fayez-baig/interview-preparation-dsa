/*
Mean: in order to calculate the mean, all we have to do is to sum up all data points and divide by the number of data points. 
In other words, the mean, and more specifically the arithmetic mean (which is what we are calculating today), is what we usually 
call "the average" in everyday-life. Although, technically, mean, median, and mode are all kinds of averages, each trying to 
summarize the dataset with a single number representing a "typical" data point from the dataset.

Median: in order to get the median (the middle value), we first need to sort the dataset (conventionally in ascending order, 
	but we would get the same result by sorting in descending order) and pick the data-point in the middle. If we had an even number of data points, we would get the mean of the 2 middle elements (by adding them and dividing by 2).

Mode: is the value in the dataset which occurs more frequently. If all values in the dataset appear with the same frequency, 
then the dataset has no mode. It is also possible for a dataset to have more than one modes.
*/

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

//Big O notation of the above program has O(n)  (Linear time complexity)
