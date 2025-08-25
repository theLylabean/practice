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