// In this kata you will create a function that takes a list of non-negative integers and
// strings and returns a new list with the strings filtered out.

function filter_list(l) {
  const newArr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") newArr.push(l[i]);
  }
  return newArr;
}

function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

console.log([1, 2, "a", "b"]);
