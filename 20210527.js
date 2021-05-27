// 8 , 6
// [1,2,1,3,1,1,1,2]

function sol(a, b, c) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < c.length; rt++) {
    sum += c[rt];
    if (sum === b) answer++;
    while (sum >= b) {
      sum -= c[lt++];
      if (sum === b) answer++;
    }
  }

  return answer;
}

sol(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]);
