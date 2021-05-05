function solution(s, t) {
  let answer = [];
  let defineNumber = 1000;

  for (let x of s) {
    let count = 0;
    if (x === t) {
      defineNumber = 0;
      answer.push(defineNumber);
    } else {
      defineNumber++;
      answer.push(defineNumber);
    }
  }
  defineNumber = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      defineNumber = 0;
    } else {
      defineNumber++;
      answer[i] = Math.min(defineNumber, answer[i]);
    }
  }
  return answer;
}

let str = 'tabeefhjimne';
solution(str, 'e');

function solution(s) {
  let answer = '';
  let count = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
solution(str);
