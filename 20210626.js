function solution(s){
  let answer = "YES";
  let stack = [];
  for(let x of s) {
    if(x === '(') stack.push(x);
    else if(x === ')') stack.pop();
  }
  stack.length > 0 ? answer = "no" : answer
  return answer;
}

let a="(()(()))(()";
solution(a);