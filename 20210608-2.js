function solution(n) {
  let output = '';

  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      output += ' ';
    }
    for (let k = 1; k <= i; k++) {
      output += '#';
    }
    output += '\n';
  }

  console.log(output);
}

let n = 6;
solution(n);
