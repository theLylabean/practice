// Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Examples:
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
  }

// ----- Original Test -----
// console.log(century(89));     // Expected: 1
// console.log(century(1705));   // Expected: 18
// console.log(century(1900));   // Expected: 19
// console.log(century(1601));   // Expected: 17
// console.log(century(2000));   // Expected: 20
// console.log(century(2001));   // Expected: 21

// ----- Advanced Test -----
const testYears = [89, 1705, 1900, 1601, 2000, 2001];
testYears.forEach((year, index) => {
    const result = century(year);
    console.log(`Test ${index + 1}: year = ${year} → century = ${result}`);
  });