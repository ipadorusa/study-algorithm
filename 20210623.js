function solution(A, K) {
	const rNum = K > A.length ? K % A.length : K;
	return rNum === 0
		? A
		: [].concat(A.slice(-rNum), A.slice(0, A.length - rNum));
}
let A = [3, 8, 9, 7, 6];
let K = 3;

solution(A, K);
