/**
 * 10,2, [4,3];
 * yellow =  m x n
 *
 * brown = (m+2) * (n+2) - yellow; m >= n
 *
 *
 */

function solution(brown, yellow) {
	let n = 0;
	for (let m = yellow; m >= 1; m--) {
		n = Math.floor(yellow / m);
		if (yellow % m === 0 && (m + 2) * (n + 2) === brown + yellow)
			return [m + 2, n + 2];
	}
}

solution(10, 2);

/**
 * https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
 */
