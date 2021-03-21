function alexa(allLocations, num) {
  let distance = {};
  allLocations.forEach((item) => {
    distance[Math.sqrt(item[0] * item[0] + item[1] * item[1])] = item;
  });
  let sortedDistance = Object.keys(distance).sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < num; ++i) {
    answer.push(distance[sortedDistance[i]]);
  }

  return answer;
}

alexa(
  [
    [1, 2],
    [3, 4],
    [1, -1],
  ],
  2
);
