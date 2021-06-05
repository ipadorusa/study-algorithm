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
