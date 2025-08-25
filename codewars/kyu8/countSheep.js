// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(sheep) {
    // TODO
    return sheep.filter(sheep => sheep === true).length;
  }

// ----- Original Test -----
// const sheepArray = [true, true, false, null, undefined, true, false, true];
// console.log(countSheeps(sheepArray));

// ----- New Test -----
  const tests = [
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined, null, false, true], 1],
    [[undefined, null, false, true, true, false, null, undefined], 2],
    [[true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true], 17],
  ];

tests.forEach(([input], index) => {
    const result = countSheeps(input);
    console.log(`Test ${index + 1}:`, result);
  });