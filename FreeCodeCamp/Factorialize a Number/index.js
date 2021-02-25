function factorialize(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n = n * i;
  }
  return n;
}

factorialize(5);
