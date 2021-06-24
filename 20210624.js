function solution(N) {
	let num = (N >>> 0).toString(2);
	let num2 = N.toString(2);
	let finalMax = 0;
	let currentMax;

	for (let i = 0; i < num.length; i++) {
		currentMax = 0;
		while (num[i] === '0') {
			++currentMax && ++i;
		}
		if (num[i] === '1') finalMax = Math.max(finalMax, currentMax);
	}
	return finalMax;
}
solution(6);
