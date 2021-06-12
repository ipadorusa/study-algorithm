function timeConversion(s) {
  // Write your code here
  let time = s;
  const timePatterns = /^(?<first>[1-9]|[01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?<noon>[PM|AM]\w)/g;
  let timeArr = timePatterns.exec(s);
  let first = timeArr?.groups?.first;
  let noon = timeArr?.groups?.noon;

  if (noon === 'PM') {
    first = first === '12' ? '12' : Number(first) + 12;
  } else {
    first = first === '12' ? '00' : first;
  }
  return time.replace(timeArr?.groups?.first, first).replace(timeArr?.groups?.noon, '');
}
let time = '12:05:45AM';
timeConversion(time);

/**
 * https://www.hackerrank.com/challenges/time-conversion/problem
 *
 * 이렇게 푸는건 오바인가;; 그래도 이렇게 푸니 ?. operator 할수 있네.r
 */
