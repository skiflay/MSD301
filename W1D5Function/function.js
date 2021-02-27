"use strict";
//Simple function
function sayHi(name){
    console.log(`Hi, ${name}`)
    return `Hi, ${name}`
}
sayHi("simon")

//Test prime
/* @param {number} number is any integer
@returns {boolean} rue or false
loop from 2 to number and check for factors
*/

function testPrime(n){
    for(let i=2; i<n; i++){
        if(n%2===0){
            console.log(true)   
        }
    }  
    return true 
}
testPrime(9)

// perfect number
let num = 6;
let sum = 1;
for(let i=2; i<num; i++){
    if(num%i===0){
        sum+=i
    }
    if(sum ===num){
        console.log("It's perfect Number!")
    } else{
        console.log("It isn't Perfect number!")
    }
}

