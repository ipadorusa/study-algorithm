function compareTriplets(a, b) {
	// Write your code here
	let answer = [0, 0];
	for (let i = 0; i < a.length; i++) {
		a[i] > b[i] ? answer[0]++ : a[i] < b[i] ? answer[1]++ : '';
	}
	return answer;
}
let a = [17, 28, 30];
let b = [99, 16, 8];

compareTriplets(a, b);

/**
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function reverseArray(a) {
	// Write your code here
	let rArray = [];
	for (let i = a.length - 1; i >= 0; i--) {
		rArray.push(a[i]);
	}
	return rArray;
}

let a = [1, 4, 3, 2];
reverseArray(a);

/**
 * https://www.hackerrank.com/challenges/arrays-ds/problem
 */

var Regex_Pattern = /^...\....\....\..../g;

/**
 * input: 123.456.abc.def
 * https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem?h_r=next-challenge&h_v=zen
 */
