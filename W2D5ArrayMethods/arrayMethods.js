"use strict";
exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
exports.merge = merge;
/**
 * 
 * @param {number} index is integer for arrary index
 * @param {array} arr1 is array to be spliced
 * @param {array} arr2 holds elements to splice
 * @returns {array} the spliced array
 */
function insertArray(index, arr1, arr2){
     arr1.splice(index, 0, ...arr2);
    return arr1
}

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2
 * @returns {boolean} -true if the two arrays are equal 
 */
// function isArrayEqual(arr1, arr2){
//     if(JSON.stringify(arr1)===JSON.stringify(arr2)){
//         return true
//     }
//     return false
// }
// option two
function isArrayEqual(a, b){
    if(a.length !==b.length){
        return false;
    } else  
      { 
       for(let i=0; i<a.length; i++) 
       if(a[i]!==b[i]) 
        return false;    
      } 
      return true;
    }
    
    /**
     * 
     * @param {Array} arr 
     * @returns {boolean} true if arr is palindrome
     */
    function isPalindrome(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i]!==arr[arr.length-i-1])
            return false
        }
        return true
    }
     
    /**
     * 
     * @param {Array} arr 
     * @returns {String} str - reversed string
     */
    function reverse2String(arr){
        return arr.reverse().join("_").toString()
    }
 
    /**
     * 
     * @param {Array} arr an array of numbers
     * @param {Number} n a value to be searched in the array
     * @returns {boolean} true if the value is in the array
     * @returns {index} the 1st index of the value in the array
     * @returns {index} the 2nd index of the value in the array
     */
function enhancedIncludes(arr, n){
    let fIndex;
    let lIndex;
    let nInclude = false;
    let newArr = []
    if(arr.includes(n)){
        fIndex = arr.indexOf(n)
        lIndex = arr.lastIndexOf(n)
        nInclude = true
    }
    newArr.push(nInclude, fIndex, lIndex, )
    return newArr
}
/**
 * 
 * @param {Array} arr 
 * @returns {Array} -reversed copy of a given array
 */
function ssReverse(a){
   //return arr.slice().reverse();
   let b = a.slice()
for (let i = 0, j = b.length; i < b.length; i++) {
  b.splice(i, 0, b[j - 1]);
  b.splice(j, 1);  
}
return b
}

/**
 * 
 * @param {Array} a sorted array
 * @param {Array} b sorted array
 * @returns {array} - sorted one array
 */
function merge(a, b){
let sortedArr = []
for(let ele of a){
    sortedArr.push(ele)
}
sortedArr = [...sortedArr, ...b]
 sortedArr.sort((a,b)=>{
    return a<b?-1:1
})
return sortedArr;
}



