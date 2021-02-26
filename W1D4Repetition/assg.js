const prompt = require("prompt-sync")()

//JavaScript program to test weather user input is a prime number or not
const pNumber = prompt("Enter prime number: ");
for(let i=2; i<pNumber; i++){
    if(pNumber%i===0)break;
}
console.log("Yes, it's!")

// calculate the factorial value of a given number
let prod = 1
for(let i=1; i<=4; i++){
    prod*=i
}
console.log(prod)

// user three tries to guess the correct pin of the account
let pinNo = +prompt("Enter your pin Number: ")
let pin = 1234
if(pin===pinNo){
    console.log("Correct, welcome back!")
} else{
    for(let i=1; i<3; i++){
        pinNo = +prompt("Please, enter again: ")
    }
}
// The Fibonacci series
// defining table
/*
Input: positive integer number
Output: the sum of the two preceding ones
Process: fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
*/
let fibN =0
let n=3
for(let i=0; i<n; i++){
    fibN += n-i 
}
console.log(fibN)

// Write a JavaScript program to compute sum of all the digits in a given integer number
/*
input: 123 Output: 6
input: 102 Output: 3
input: 8 Output: 8
*/
let arr = [1,2,3]
let sum =0
for(let i=0; i<arr.length; i++){
sum += arr[i]
}
console.log(sum)

//Write JS code to print following patterns using nested loops.
let p;
for(let i=1; i<=5; i++){
    p= i.toString()
   console.log(p.repeat(i))
  }
// .............
for(let i=5; i>0; i--){
    n= i.toString()
   console.log(n.repeat(i))
  }