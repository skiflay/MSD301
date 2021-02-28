"use strict";
const prompt = require("prompt-sync")()
//1. a - checkPrime
function checkPrime(n){
for(let i=2; i<n; i++){
    if(n%i!==0){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}
}
checkPrime(9)
//1. b- use user input
let user = prompt("enter a number: ")
checkPrime(user)

// 2- a volumeOfCylinder
function  areaOfCircle(){
    let r =4;
    let pi = 3.14
    let area = pi*r*r
    function volumeOfCylinder(){
        let ht =6;
       let volume = pi*r*r*ht;
       console.log(`The volume of a cylinder is: ${volume}`)
        return volume;
    }
    volumeOfCylinder()
    return area;
}
console.log("expect area of circle: ", areaOfCircle());

//calculates the total volume of a house

 function houseVolume(width, height, depth, sweep){
    const lv = livingVolume(width, height, depth);
    const rv = roofVolume(sweep, width, depth);
    return  lv + rv;  
}

function livingVolume(width, height, depth){
    return width * height * depth;
}

function roofVolume(sweep, width, depth){
    return triangleArea(sweep, sweep, width) * depth;
}

function triangleArea(sideA, sideB, sideC){
    const s = (sideA + sideB + sideC)/2
    const product = s * (s - sideA) * (s - sideB) * (s - sideC);
    const result = Math.sqrt(product);
    return result;
}

console.log("expect 2080", houseVolume(16,10,10,10));