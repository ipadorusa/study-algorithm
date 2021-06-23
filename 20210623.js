function solution(A, K) {
  let rotationNumber = K % A.length > 0 ? K % A.length : K;
  return K % A.length === 0 ? A : [].concat(A.slice(-rotationNumber), A.slice(0, A.length - rotationNumber));
}
/**
 * https://app.codility.com/c/run/trainingMX5FKX-VCD/
 */
