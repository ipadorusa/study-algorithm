function solution(s) {
  let answer;
  let list = new Map();
  for (let x of s) {
    if (list.has(x)) {
      list.set(x, list.get(x) + 1);
    } else {
      list.set(x, 1);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of list) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
solution(str);

function compareTriplets(a, b) {
  // Write your code here
  let answer = [],
    count = 0,
    count2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      count++;
    } else if (a[i] < b[i]) {
      count2++;
    }
  }

  return (answer = [count, count2]);
}

compareTriplets([17, 28, 30], [99, 16, 8]);
