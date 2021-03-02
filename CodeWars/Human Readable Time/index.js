/**
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

const humanReadable = (seconds) => {
  const HH = ("0" + parseInt(seconds / (60 * 60))).slice(-2);
  const MM = ("0" + parseInt((seconds / 60) % 60)).slice(-2);
  const SS = ("0" + (seconds % 60)).slice(-2);
  console.log(HH + ":" + MM + ":" + SS);
  return HH + ":" + MM + ":" + SS;
};
