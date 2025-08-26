const nums = [2,7,11,15];
const target = 9;

const twoSum = (nums, target) => {
    let sumMap = {};
    for (const [index, value] of nums.entries()){
        let output = target - value;
        if (output in sumMap){
            return [sumMap[output], index]
        }
        sumMap[value] = index;
    }

}
// when running node, don't forget to console.log it or it will return nothing in the terminal lmao
console.log(twoSum(nums, target));
