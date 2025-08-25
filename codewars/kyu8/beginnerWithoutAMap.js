// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(n => n * 2);
  }

const tests = [
    [[1, 2, 3], [2, 4, 6]],
    [[4, 1, 1, 1, 4], [8, 2, 2, 2, 8]],
    [[2, 2, 2, 2, 2, 2], [4, 4, 4, 4, 4, 4]]
];

tests.forEach(([input], index) => {
    const result = maps(input);
    console.log(`Test ${index + 1}: ${result}`);
  });