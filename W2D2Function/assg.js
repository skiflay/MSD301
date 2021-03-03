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
//Finding LCM 
const LCM = (a, b)=>{
    let num;
    for(let i=1; i<=a && i<=b; i++){
        if(a%i===0 && b%i===0){
            num = i
        }
    }
    return a*b/num;
}
console.log(LCM(98,56))

// Finding LCM using GCM= (num1*num2) / HCF
const lcm =(a, b)=>{
let gcp = gcpP2(a,b);
let lcm = (a*b) /gcp;
return lcm
}
console.log(lcm(98,56))

// Callback
const compute = function(add, a,b){
    return add(a,b);
  }
  function add(a,b){
    return a+b;
  }
  console.log(compute(add,2,3))

// Q-What are alternatives to default parameters?
// A- Your logic fails if optional Argument is passed, but evaluates as false

//Q-What are things you should consider while naming a function?
//Choose a word with meaning (provide some context)
// Avoid generic names (like tmp )
// Attach additional information to a name (use suffix or prefix)
// Don't make your names too long or too short.
// Use consistent formatting.

//Q- Do functions need to be always commented? Write your understanding based on the reading.
//A-it doesn’t need to be commented always but Primarily, 
// a single block comment should be placed at the top of the function (or file) and 
// describe the purpose the code and any algorithms used to accomplish the goal

//Q-When should you choose Function Declaration versus Function Expression and why?
/*use function declarations when you want to create a function on the global scope and 
make it available throughout your code. Use function expressions to limit where the function is available, 
keep your global scope light, and maintain clean syntax
*/