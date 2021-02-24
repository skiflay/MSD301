const prompt = require("prompt-sync")();

//volume in quarts then converts that value in liters.
const quart = prompt("Enter Volume in Quarts: ");
const liter = Number(quart) * 0.94
console.log(liter);

// distance in kilometers and then convert that value in miles
const km = prompt("Enter Volume in kilometers: ");
const mile = Number(km) * 0.62
console.log(mile);

//boxes of cans in stacks
const totalBoxes = prompt("Enter the Total Number of Boxes: ")
const eachStack = prompt("Enter the number of Boxes in Each Stack: ")
const NumOfStack = Math.ceil(totalBoxes/eachStack);
console.log(`You make ${NumOfStack} number of stack`)


//mileage of a vehicle
const InitialMlg = prompt("Enter Initial Mileage of your Vehicle: ");
const FinalMlg = prompt("Enter final Mileage of your Vehicle: ");
const gallonUsed = prompt("Enter total gallon used: ");
const MilePerGallon = gallonUsed/(InitialMlg - FinalMlg)
console.log(Math.abs(MilePerGallon).toFixed(2)+"lt/mile");

//slowest and fastest of your heart rate
const age = prompt("What is your age? ");
const maxHBeat = 220- Number(age);
const lowestHBeat = maxHBeat*65/100;
const highestHBeat = maxHBeat*85/100;
console.log(`Your Lowest heart rate is ${lowestHBeat} and Highest is ${highestHBeat}`)

