"use strict";

//a function expression Option 1
    let gcdP1 = function(a, b) {
        if (!b) {
          return a;
        }     
        return gcdP1(b, a % b);
      }
console.log(gcdP1(98,56))

//a function expression Option 2
const gcpP2 = (a, b)=>{
    let num;
    for(let i=1; i<=a && i<=b; i++){
        if(a%i===0 && b%i===0){
            num = i
        }
    }
    return num;
}
console.log(gcpP2(98,56))

// Finding LCM = (num1*num2) / HCF
const lcm =(a, b)=>{
let gcp = gcpP2(a,b);
let lcm = (a*b) /gcp;
return lcm
}
console.log(lcm(98,56))