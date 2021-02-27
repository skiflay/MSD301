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
let width = +prompt("Enter the width of the house: ");
let height = +prompt("Enter the height of the house: ");
let depth = +prompt("Enter the depth of the house: ");
let sweep = +prompt("Enter the sweep of the house: ");

function houseVolume(){
    let lVol;
    let rVol;
    let hVolume = lVol + rVol
    //livingVolume = width * height * depth
    function livingVolum(){
       lVol = width * height * depth;
       console.log(lVol)
       return lVol;
    } 
    //roofVolume = triangleArea*depth
    function roofVolume(a,b,c){
        let s = Number(a+b+c)/2;
        let triangleArea = Number(Math.sqrt(Math.sqrt((s-a)*(s-b)*(s-c))));
        rVol = Number(triangleArea*depth);
        console.log(Number(rVol))
        return rVol;
    }
    livingVolum(2,3,5);
    roofVolume();
    return hVolume;
}
console.log("expect area of circle: ", houseVolume()); 
