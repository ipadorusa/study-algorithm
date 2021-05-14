function solution(n, k, card) {
  let answer;
  let temp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let m = j + 1; m < n; m++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let sortNum = Array.from(temp).sort((a, b) => b - a);
  return (answer = sortNum[k - 1]);
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
solution(10, 3, arr);

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
solution(a, b);
