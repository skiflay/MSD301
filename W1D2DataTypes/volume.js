const prompt = require("prompt-sync")();

// Volume of a Cylinder
const radius = prompt("Enter the radius of cylinder: ");
const height = prompt("Enter the radius of cylinder: ");
console.log(volum =Math.PI* radius*radius*height)

// //co-ordinates of two points d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
const x1Coordinates = prompt("Enter X1-Coordinates: ")
const y1Coordinates = prompt("Enter Y1-Coordinates: ")
const x2Coordinates = prompt("Enter Y2-Coordinates: ")
const y2Coordinates = prompt("Enter Y2-Coordinates: ")
const xDiff = (x1Coordinates - y1Coordinates)*2
const yDiff = (y1Coordinates - y2Coordinates)*2
const distance = Math.sqrt(xDiff+ yDiff)
console.log(distance)




