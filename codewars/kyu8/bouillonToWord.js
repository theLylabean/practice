// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
    if(bool){
    return 'Yes';
    } else 
    return 'No';
  }

  const tests = [true, false, 'Sunny', 0, null, [], '']
  tests.forEach((input, index) => {
    const result = boolToWord(input);
    console.log(`Test ${index + 1} input = ${input} -> result = ${result}`);
  })