function gradingStudents(grades) {
  // Write your code here
  return grades.map(n => {
    return n >= 38 && n % 5 >= 3 ? n + (5 - (n % 5)) : n;
  });
}
let grades = [73, 33, 67, 38];
gradingStudents(grades);

/**
 * https://www.hackerrank.com/challenges/grading/problem
 */
