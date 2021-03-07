"use strict";
/* esLint-disable */
/**
 * 
 * @param {array} arr 
 * @returns {string} a string
 */
function revertArr(arr){
    return arr.reverse().join("_")
}
console.log(revertArr(["I", "am", "Sam"]))

/**
 * 
 * @param {number} result 
 * @returns {string} - callback function 
 */
function myBad(result){
    console.log(`here is the ${result}`)
}
function add(a,b, add){
    let ad =a+b;
    add(ad)
}
console.log(add(2,3,myBad))

/**
 * 
 * @param {array} arr 
 * @returns {array} arr
 */
function spliceArry(arr){
    return arr.splice(1,0,3);
}
console.log(spliceArry([1,2,3,8,7]))

/**
 * 
 * @param {Array} arr 
 * @returns {Array} - sum of all the elements in the array
 */
function twoDArray(matrix){
    let sum;
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       sum= matrix[i]+[j];   
    }
    }
    return sum;
}
// console.log(twoDArray([[1,3,5],[6,7,8]]))

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j] + matrix[i][j]);
    }
    }
    console.log(matrix)