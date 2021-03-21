function findSongs(rideDuration, songDurations) {
  console.log(rideDuration, songDurations);
  // Write your code here

  if (rideDuration === 30) {
    return [songDurations.indexOf(0), songDurations.lastIndexOf(0)];
  }
  const target = rideDuration - 30;
  if (!songDurations.length || !target) return [-1, -1];
  const possibleSongPairs = [];
  for (let i = 0; i < songDurations.length; i++) {
    for (let j = i + 1; j < songDurations.length; j++) {
      if (songDurations[i] + songDurations[j] === target) {
        possibleSongPairs.push({
          index: [i, j],
          value: [songDurations[i], songDurations[j]],
        });
      }
    }
  }

  if (!possibleSongPairs.length) return [-1, -1];
  const meta = { max: 0, retVal: null };
  possibleSongPairs.forEach((pair) => {
    const currentMax = Math.max(...pair.value);
    if (currentMax > meta.max) {
      meta.max = currentMax;
      meta.retVal = pair.index;
    }
  });
  return meta.retVal;
}

console.log(findSongs(90, [1, 10, 25, 35, 60]));
