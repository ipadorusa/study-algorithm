function timeConversion(s) {
  // Write your code here
  let timeArr = s.slice(0, 8).split(':');
  if (s.includes('PM')) {
    timeArr[0] = timeArr[0] === '12' ? '12' : Number(timeArr[0]) + 12;
  } else {
    timeArr[0] = timeArr[0] === '12' ? '00' : timeArr[0];
  }
  return timeArr.join(':');
}

/**
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */
