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

titleCase("I'm a little tea pot");
