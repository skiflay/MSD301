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



/*  Write a program that accepts user age as input and output following
based on the input */
const age = prompt("Enter your age: ");
if(age<=0){
    console.log("please enter valid age")
} else if(age>0 && age <=14){
    console.log("You can't drive yet.")
} else if(age >=15 && age<=18){
    console.log("You can drive under supervision.")   
} else if(age>=19){
    console.log("You can drive.")
}

/*• Write a program that asks user to enter number between 1 to 5 and
prints out how the number is spelled.*/
let num = +prompt("Please, enter a number from 1 to 5: ")
if(num===1){
    console.log("One")
} else if(num===2){
    console.log("Two")
} else if(num===3){
    console.log("Three")
} else if(num===4){
    console.log("Four")
}else if(num===5){
    console.log("Five")
}

// switch statement
let n = +prompt("Please, enter a number from 1 to 5: ")
switch(n){
    case 1: console.log("One") ;
    break;
    case 2: console.log("Two") ;
    break;
    case 3: console.log("Three") ;
    break;
    case 4: console.log("Four") ;
    break;
    case 5: console.log("Five") ;
    break;
    default: console.log("Put a number within 1 to 5 range") 
}

//Write a program to compute sales commission based on following rules:
const sales = +prompt("Please, enter the sales: ");
//let salaried = true;
let salaried = false;
if(salaried){
    if(sales<300){
        console.log("Sorry, No commission.")
    } else if(sales>300){
        console.log(`1% commision, ${0.1*sales}`)
    } else {
        console.log(`2% commision, ${0.2*sales}`)
    }
} else { // Commission for hourly
    if(sales<300){
        console.log("Sorry, No commission.")
    }
    else if(sales<500){
        console.log(`2% commision, ${0.2*sales}`)
    } else {
        console.log(`3% commision, ${0.3*sales}`)
    }
}

// Write a program to get an integer input from user and outputs if the
//entered number is even or odd

const intNum = +prompt("Enter a positive integer number: ")
if(intNum%2===0){
    console.log("Hey, it's even number!")
} else {
    console.log("Hey, It's Odd number!")
}