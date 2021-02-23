const prompt = require("prompt-sync")();

let name = prompt("What is your name?: ")
//let  autocomplete = config.autocomplete = name
console.log(`Hi ${name}`)


// Degree Celsius (32°F − 32) × 5/9
let tempInFahrenheit = prompt('Enter Value in Fahrenheit: ');
let tempInCelsius = parseFloat((tempInFahrenheit)-32)*5/9
console.log(tempInCelsius)