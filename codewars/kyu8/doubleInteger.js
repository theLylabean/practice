// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }

  const tests = [1, 2, 5, 10, 0, -3]

  tests.forEach((input, index) => {
    const result = doubleInteger(input);
    console.log(`Test ${index + 1}:  input = ${input} -> result = ${result}`);
  })