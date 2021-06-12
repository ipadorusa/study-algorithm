function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;

  for (let x of arr) {
    if (x >= 1) plus++;
    else if (x < 0) minus++;
    else if (x === 0) zero++;
  }
  let len = arr.length;
  console.log((plus / len).toFixed(6));
  console.log((minus / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr);

//https://www.hackerrank.com/challenges/plus-minus/problem
