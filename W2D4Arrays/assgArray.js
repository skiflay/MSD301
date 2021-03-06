"use strict";
exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.filterRange = filterRange;
exports.filterPalindromes = filterPalindromes;
exports.fmrString = fmrString;
exports.matrixAddition = matrixAddition;
/**
 * 
 * @param {Array} arr is array of nums
 * @returns {number} sum of two elements
 */
   function addends(arr){
    let sum = arr[0] + arr[arr.length-1];
    return sum;
   }
   addends([-1, -100, 1, 2, 3, -55])

   /**
    * @param {Array} arr is an array of nums
    * @returns {number} average of the two middle elements
    */
   function getMiddle(arr){
    let middle;
  if(arr.length%2!==0){
    return middle = arr[Math.round((arr.length - 1) / 2)]
  } else{
    let m = arr[Math.round((arr.length) / 2)] + arr[Math.round((arr.length) / 2)-1]
    return middle = m/2
  }
}
getMiddle([-1, -100, 1, 2, 3, -55])

/**
 * @param {Array} arr is array of nums
 * @returns {number} an array that rotates to the left by 1
 */
function rotateLeft(arr){
   let newArr =[] 
   let lastArr= arr[0];
   console.log(lastArr)
   for(let i=1; i<arr.length; i++){
       newArr.push(arr[i])
   } 
   
   return newArr = [...newArr, lastArr]
}
rotateLeft([-1, -100, 1, 2, 3, -55]);

/**
 * @param {Array} arr is array of nums
 * @returns {number} an array that rotates to the right by 1
 */
function rotateRight(arr){
    let newArr =[] 
    let lastArr= arr[arr.length-1];
    for(let i=0; i<arr.length-1; i++){
        newArr.push(arr[i])
    } 
    return newArr = [lastArr, ...newArr]
 }
 rotateRight([-1, -100, 1, 2, 3, -55]); //[-55, -1, -100, 1, 2, 3]

 /**
 * @param {Array} arr is array of nums
 * @returns {number} an array that rotates to the right by n times
 */
function rotateNRight(arr, n){
    let newArr =[];
    let lastArr = [];
    for(let i=0; i<n; i++){
        lastArr.push(arr[i])
    } 
    console.log(lastArr)
    for(let i=n; i<arr.length; i++){
        newArr.push(arr[i]) 
    } 
    console.log(newArr)
    return newArr = [...newArr, ...lastArr] 
 }
//  console.log(rotateNRight([-10, 2, 3, 4, 20], 4))// [2, 3, 4, 20, -10])

 /**
  * @param {String} -string of  numbers as comma separated values
  * @returns {number} - sum of the positive elements
  */
  function fmrString(arr){
    let total =0
    let sum =[];
    for(let i=0; i<arr.length; i++){
       if(arr[i]>0){
           sum.push(arr[i])
       }
    }
   sum= sum.toString().split('') 
   for(let ele of sum){
       if(ele!==','){
           total += Number(ele)
       }
   } 
   return total  
}
 console.log(fmrString("32, 105,-22"))
 /**
  * @param {Array, a, b} arr - array, two numbers of a and b
  * @returns {Array} 
  */
 function filterRange(arr, a, b){ //higher or equal to a 
    let newArr= []
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=a && arr[i]<=b ){
         newArr.push(arr[i]) 
        }     
    }
    return newArr;
    }
 //console.log(filterRange([0, 100, 3, 6, -555], 6, 160))  //, [100, 6])

/**
 * @param {Array} - takes an array
 * @returns {Array} - palindrome array
 */
function filterPalindromes(arr){
    let str = []
    let word;
    for(let ele of arr){
       word=ele.split("").reverse().join("")
       if(word===ele) {
           str.push(word)
       }
    }
    return str
}
//console.log(filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]))
/**
 * @param {arr, arr} num - matrix array of numbers
 * @returns {Array} num - addition of matrix numbers of two arrays
 */
 function matrixAddition(matrix1, matrix2){
     let sumMatrix =[[],[]];
     for(let i=0; i<matrix1.length; i++){
         for(let j=0; j<matrix1[i].length; j++){
             sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
         }
     }
     return sumMatrix;
 }