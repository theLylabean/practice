// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3) / 3;
    if (avg >= 90) {
      return 'A'
    } else if (avg >= 80) {
      return 'B'
    } else if (avg >= 70) {
      return 'C'
    } else if (avg >= 60) {
      return 'D'
    } else if (avg >= 0) {
      return 'F'
    }
  }

const tests = [
    95 , 90, 93,
    100, 85, 96,
    92, 93, 94,
    70, 70, 100,
    82, 85, 87,
    89, 89, 90,
    70, 70, 70,
    75, 70, 79,
    60, 82, 76,
    65, 70, 59,
    66, 62, 68,
    58, 62, 70,
    44, 55, 52,
    48, 55, 52,
    58, 59, 60
]

// i is the first value (e.g., 95, 100, 92, etc) and the next time it runs the loop it skips the next two values. 
for (let i = 0; i < tests.length; i += 3) {
// in order to get the value of the 2 being skipped, we put them in to variables where s2 is i+1 (e.g., 90, 85, 93, etc.) and s3 is i+2 (e.g., 93, 96, 94, etc.)
    const s1 = tests[i];
    const s2 = tests[i + 1];
    const s3 = tests[i + 2];
    const grade = getGrade(s1, s2, s3);
// to tell us what the text number is, the template literal is saying i (which is 0 the first time) is divided by 3 (which gives us 0) and then adds 1. so the console log spits out 'Test 1:'. the seoncd time it runs the loop i=3 (because the first loop ended with i=0+3 so i=3). then the console log says i(3)/3 is 1. then we add 1 to it, giving us 2. the third loop i=6 (because the second loop ended with i=3+3 so i =6) and the console log says i(6)/3 is 2. then we add 1, giving us 3. and so on, and so on.
    console.log(`Test ${(i / 3) + 1}: Scores = (${s1}, ${s2}, ${s3}) → Grade = ${grade}`);
  }