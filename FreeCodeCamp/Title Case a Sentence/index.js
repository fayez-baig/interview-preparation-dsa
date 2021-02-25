// Solution 1

function titleCase(str) {
  const strArr = str.split(" ");
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    let test =
      strArr[i]?.charAt(0).toUpperCase() +
      strArr[i]?.substring(1, strArr[i].length).toLowerCase();
    result.push(test);
  }
  return result.join(" ");
}

// Solutoion 2

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
