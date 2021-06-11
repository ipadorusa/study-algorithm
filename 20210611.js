function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles);
  let count = 0;
  for (let x of candles) {
    if (x === max) count++;
  }
  return count;
}
let arr = [1, 3, 4, 4];
birthdayCakeCandles(arr);
