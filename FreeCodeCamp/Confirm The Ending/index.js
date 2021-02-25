function confirmEnding(str, target) {
  if (str.substring(str.length - target.length, str.length) === target) {
    return true;
  } else return false;
}

confirmEnding("Congratulation", "on");
