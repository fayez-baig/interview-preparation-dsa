function chunkArrayInGroups(arr, size) {
  const newArr = [];
  if (arr.length === 2) return [[...arr]];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  console.log(newArr);
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//OR

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
