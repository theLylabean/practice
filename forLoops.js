//iterates through the array
const myArray=[7,13,17,23,57,100,22]
for(let i=0;i<myArray.length;i++){
    //i++ i=i+1 i+=1
    //check if odd or even using an if else
    if(myArray[i]%2===0){
        console.log("even")
    } else{
        console.log("odd")
    }
    console.log(myArray[i])
}

//for of is giving the actual value at the index
//don't try to get the index with this one
for(const num of myArray){
    console.log(num)
}

//for in gives back the index number in the array
for(const num in myArray){
    //console.log(num)
    console.log(myArray[num])
}


const myFavNum = (fav)=>{
    for(const num of myArray){
        if(num === fav)return "It's my favorite"
    }
    return "It's not my favorite"
}
console.log(myFavNum())

//Write a function called sumEvenNumbers that takes a number n as input and returns the sum of all even numbers from 1 to n, inclusive. Use a for loop to iterate through the numbers.

const sumEvenNumbers = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(5));
console.log(sumEvenNumbers(1));

//Write a function called sumMultiplesOfThree that takes a number n as input and returns the sum of all multiples of 3 from 1 to n, inclusive. Use a for loop to iterate through the numbers.

const sumMultiplesOfThree = (n)=>{
    let sum=0;
    for(let i=1; i<=n; i++){
        if(i%3===0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumMultiplesOfThree(10));
console.log(sumMultiplesOfThree(15));
console.log(sumMultiplesOfThree(2));