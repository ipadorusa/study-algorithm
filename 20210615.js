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
