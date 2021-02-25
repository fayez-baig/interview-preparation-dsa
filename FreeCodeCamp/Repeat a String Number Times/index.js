function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (Math.sign(num) === 1) {
    for (let i = 1; i <= num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
