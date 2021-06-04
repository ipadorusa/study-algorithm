function solution(str1, str2) {
  let answer = 'YES';
  let list = new Map();
  for (let x of str1) {
    if (list.has(x)) {
      list.set(x, list.get(x) + 1);
    } else {
      list.set(x, 1);
    }
  }
  for (let x of str2) {
    if (!list.has(x) || list.get(x) === 0) {
      return (answer = 'NO');
    } else {
      list.set(x, list.get(x) - 1);
    }
  }
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
solution(a, b);
