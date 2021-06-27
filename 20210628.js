function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let answer = 'NO';
  let n = 0;
  while (n < 10000) {
    if (x1 + n * v1 === x2 + n * v2) {
      answer = 'YES';
      return answer;
    }
    n++;
  }
  return answer;
}

/**
 * Number Line Jumps
 * https://www.hackerrank.com/challenges/kangaroo/problem
 */
