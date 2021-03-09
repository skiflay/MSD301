"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;

/**
 * creating object
 * adding property of object
 * deleting property of object
 */
// const car = {};
// car.make = "Toyota";
// car.model = "Camry";
// console.log(car);
// car.model = "Rav4";
// console.log(car);
// delete car.make;
// console.log(car);

/**
 * 
 * @param {object} obj1 
 * @param {object} obj2
 * @returns {boolean} true/false
 */
function isPersonEqual(obj1, obj2){
    if(obj1.name ===obj2.name && obj1.age ===obj2.age){
        return true;
    }
    return false;
}

/**
 * 
 * @param {object} obj 
 * @returns {number} number of properties of an obj
 */
function countProperties(obj){
    let count = 0
    for(let key in obj){
        count ++
    }
    return count
}

/**
 * 
 * @param {string} str 
 * @returns {boolean} true if string contains text "lottery" or "prize", otherwise false
 */
function checkSpam(str){
    if(str.includes("lottery") || str.includes("prize")){
        return true;
    }
    return false
}

/**
 * 
 * @param {String} wordA 
 * @param {String} wordB 
 * @returns {String} suffix of the two string
 */
function suffix(wordA, wordB){
    let a = wordA.split("");
    console.log(a);
    
    let b = wordB.split("");
    console.log(b);
    
    let suffix=[];
    
    for(let i = a.length-1, j = b.length-1; i >= 0 && j >=0; j--, i--){
    if(a[i] == b[j]){
    suffix.unshift(b[j]);
    console.log(a[i] + "==" + b[j] );
    console.log("suffix: " + suffix + "\n");
    }
    else{
    console.log(a[i] + "==" + b[j] );
    console.log("suffix: " + suffix + "\n");
    break;
    }
    
    }
    console.log("Final suffix: " + suffix);
    return suffix.join("");
    }
console.log(suffix("swimming", "walking"))

/**
 * 
 * @param {String} s 
 * @returns {String} capitalized string
 */
function titleCase(s){
    let fistInx = s.substr(0,1).toUpperCase()
    let lastInx = s.substr(1,s.length).toLowerCase()
    let title = fistInx + lastInx
    return title ;
}

/**
 * 
 * @param {Object} users 
 * @returns {number} average of two properties of age
 */
function getAverageAge(users){
    let avgAge = 0;
    for(let key of users){
        avgAge = key.age + key.age / 2
    }
    return avgAge;
}

//8. Write a function to return the sum of the first elements of the inner arrays for arrays with the
//following structure. Use a for .. of loop.
/**
 * 
 * @param {Array} arr 
 * @returns {Number} sum of the first inner array
 */
function sumFirst(arr){
    let sum =0;
    for(let first of arr){
        sum =sum + first[0]
    }
    return sum;
}

/* How can you make a copy of an object?
1. Spread Syntax
    E.g. let obj = { foo: "foo", bar: "bar" };
    let clonedObj = { ...obj };    // Object { foo: "foo", bar: "bar" }

2. Object.assign
let obj = { foo: "foo", bar: "bar" };
let clonedObj = Object.assign({}, obj);  // Object { foo: "foo", bar: "bar" }
 */

/* 2. How do you remove the white spaces that may be at the beginning and ending of a string value?
 - str.trim() method is used to remove the white spaces from both the ends of the given string.
 E.g. str.trim()
*/