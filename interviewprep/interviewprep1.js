// input: [3, 4, 17]
// tar=20
// output: [0, 2]

// const nums = [23, 100, 6, 15, 37, 1];

// tar=7
// output: [2, 5]

// for loop to iterate through the array 
// common for loop starts with (i=0, i < something.length, i++)

// for (let i=0; i < nums.length; i++) {
//     for (let j=1; j < nums.length; j++) {
//         //let j= i+1
//         // console.log(i, j)
//          if (i + j === tar)
//             //(nums[i] + nums[j])
//             return [i, j]
//     }

// }

const nums = [5,8,10,16]

const target = 15

const twoSum = (nums, target) => {

    let hashMap = {}
    for(const [index, value] of nums.entries()) {
        console.log(index, value)
        let compliment = target - value
        if(compliment in hashMap){
            return [hashMap[compliment],index]
        }
        hashMap[value] = index
        console.log(hashMap)
    }
}

twoSum(nums,target)