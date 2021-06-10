function sol() {
  let answer = [];
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  let sum = arr.reduce((acc, cur) => (acc += cur), 0);

  min = Math.min(...arr);
  max = Math.max(...arr);
  console.log(sum - max, sum - min);
}
let arr = [1, 3, 5, 7, 9];
sol(arr);

/**
 *
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
