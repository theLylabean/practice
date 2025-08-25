const fizzBuzz = (n)=>{
    //as long as there is only one line, you can return on that same line without having to use {}
    //once the conditional is met, the code will not move to the next line. it will return the string associated with it.
    if(n%15 === 0) return "fizzbuzz"
    if(n%3 === 0) return "fizz"
    if(n%5 === 0) return "buzz"
    return "not a multiple of anything"
}
console.log(fizzBuzz(9))

//arry called num
//
//input: nums = [2,4,7,8,10]
//input: target = 9
//output: [0,2]

const twoSums = (nums,target)=>{
    //nested for loops:
    //for every time this code runs, the j for loop will run 4 times for every one loop of i.
    //i starts at index 0 and j starts at 1 more than i and moves through the rest of the array.
    //if the condition has not been met, the i for loop runs again and moves to index 1. j moves to index 2 and runs through the rest of the array.
    //if the condition is still not met, i and j continue to run through the loop in this pattern until the condition is met.
    //once the conditional (if statement) has been met, it will return an array of the index numbers that match the value's that met the condition.
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            } else{
                return "does not compute"
            }
        }
    }
}
console.log(twoSums([17,1,6,8],100))