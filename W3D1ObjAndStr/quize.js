"use strict";


/* 1. Destructive methods
Pop, push, shift , splice, reverse. sort */

/*2. Write a function findMin that takes an array as a parameter and returns the minimum value.
Use a for .. of loop. */

function findMin(arr){
    let min = Infinity; 
for(let num of arr){
    if(num<min){
       min = num
    }
}
return min;
}

/* 3. Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
of values on the odd indices. */
function sumOddIndicesValues(arr){
    let sum =0;
    arr.forEach((ele, i)=>{
        if(i%2!==0){
            sum += ele
        }
    })
    return sum;
}
/* Write a function sumArrays, that takes two arrays as parameters (you can assume of same
length) then returns a new array by adding two array values at the corresponding indices*/
const sumArrays = (a, b)=>{
    let ab=[]
    for(let i=0; i<a.length; i++){
        ab[i]=a[i]+b[i]
    }
    return ab
}

let obj = {
    name: "simon"
}

//obj.noSuchProperty = 'age'; // noSuchproperty can be anything like obj.anything = 'age';
//console.log(obj)

//Strings 
let str ="hello";
for(let i=0; i<str.length; i++){
    console.log(str[i])
}

// console.log(str.toUpperCase())
// console.log(str)

function GetPrefixSuffix(a, b) {
    let lenB = b.length;
    let lenA = a.length;
    let suffixB = b.substr(lenB - 1);
    let suffixA = a.substr(lenA - 1);
    console.log(suffixA, suffixB)
}
GetPrefixSuffix("swimming", "walking")
// { 
//     // Getting prefix of first  
//     // string of given length 
//     string prefix = a.substr(0, l); 
      
//     // length of string b 
//     int lb = b.length(); 
      
//     // Calculating suffix of second string 
//     string suffix = b.substr(lb - l); 
      
//     // Concatenating both prefix and suffix 
//     return (prefix + suffix); 
// } 
  