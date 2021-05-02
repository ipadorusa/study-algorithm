function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s !== s.split('').reverse().join('')) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
solution(str);

function solution(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str = 'g0en2T0s8eSoft';
solution(str);
