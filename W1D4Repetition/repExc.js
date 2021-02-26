const prompt = require("prompt-sync")();

// Write a loop that prints all even number between 1 to 20 (inclusive)
// while loop
let i=1
while(i<=20){
    if(i%2===0){
        console.log(i)
    }
    i++
}
// for loop
for(let i=1; i<=20; i++){
    if(i%2===0){
        console.log(i)
    }
}
// Write a loop that keeps on prompting for age until you enter age older than 18
    let age;
    do {
    age = prompt("enter age: ");
    } while (age < 18);

// interest Rate
const iAmount= +prompt("Enter initial amount: ")
const aAmount= +prompt("Enter annual amount: ")
const nYrs= +prompt("Enter number of Years: ")
const mRate = aAmount/12
const m = nYrs/100
let balance = iAmount
for(let i=1; i<=m; i++){
    balance= balance + mRate * balance
}
console.log(balance)

// let monthlyRate = annualInterest/12;
// monthlyRate = monthlyRate/100;
// const months = numYears * 12;