"use strict"
const prompt = require("prompt-sync")();


/* Write a program that asks user to enter weather for today and print
"Get an umbrella" if weather is rainy.*/

const weather = prompt("What is the weather today? ")
if(weather==='rainy' || weather==='Rainy'){
    console.log("Get an Umbrella!")
}

/*Write a program that asks user to enter a number between 1 to 10,
and print "Bingo!" if user enters 7 otherwise prints "Try again."*/
const guess = +prompt("Enter a Number b/n 1 and 10: ")
if(guess===7){
    console.log("BINGO!!")
}else {
    console.log("Try Again!")
}