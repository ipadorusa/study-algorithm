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
