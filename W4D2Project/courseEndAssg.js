"use strict";
exports.findPorcupineNumber= findPorcupineNumber;
exports.addToTarget= addToTarget;
exports.mostFrequent= mostFrequent;
exports.closestToZero= closestToZero;
exports.addTwoNumbers= addTwoNumbers;
//exports.binaryDigits= binaryDigits;
exports.columnTitle=columnTitle;
exports.columnNumber=columnNumber;
exports.strobogrammaticNumber= strobogrammaticNumber;
exports.missingNumber=missingNumber;
exports.searchInsertPosition= searchInsertPosition;
exports.maxSubarray= maxSubarray;
exports.containsDuplicates= containsDuplicates;

//1

//==========================
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
// 1
function findNextPrime(start, end){
    let nextPrime;
    for(let i = start+1; i<=end; i++){
        if(isPrime(i)){

            nextPrime = i;
            break;
        }
    }
    return nextPrime;
}
// 2
function findPorcupineNumber(num) {
    if(num<=138){
        return 139;
    }
    let porcupine;
    let first = Math.floor(num / 10) *10 + 19;
    let second = first + 10;
    let nextPrime = findNextPrime(first, second);
    while (!(isPrime(first) && nextPrime % 10 ===9)) {
        first = first + 10;
        second = first + 10;
        nextPrime = findNextPrime(first,second);
    }
    porcupine = first;
    return porcupine;
}
console.log(findPorcupineNumber(140))
//==========================

// //3 two sum
function addToTarget(arr, n){
let sum=0;
let newArr= []
for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
        if(i===j){
            continue;
        }
      sum = arr[i] + arr[j];  
    if(sum===n){
       newArr.push(i)
       newArr.push(j)  
    }         
    }
    
}
return newArr;
}
console.log(addToTarget([3,3], 6))

//#4
function mostFrequent(arr){
    let count;
    let num;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===arr[i+1])
        count ++
        num=arr[i];
    }
   return num; 
}
console.log(mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]))
// #4
// if (closest === 0) {
//             closest = arr[i]
//         } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
//             closest = arr[i]
//         } else if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
//             closest = arr[i]
//         }
//     }
//     return closest
// }
//#4 option 2
function closestToZero(arr){
    let sum = 0
    let arr1=[]
    let arrPos= []
   let simon;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]) 
            if(i===j){
                continue;
            } else{
                sum = arr[i] + arr[j]
                arr1.push(sum)             
            } 
            }
           
            arr1.sort((a,b)=>{
                return a-b
            })
            arr1.forEach(el=>{
                Math.abs(el)
                arrPos.push(el)
            })
            arrPos.toString()
            simon = arrPos.map(Number)
            Math.min(simon)
        } 
      return simon
    }

console.log(closestToZero([-1,6,8,-3,10]))

//========================================
//#5
function addTwoNumbers(arr1, arr2){
    let str1 = arrayToString(arr1);
    let str2 = arrayToString(arr2);
    let sum = Number(str1) + Number(str2);
    let arr = ArrayOfDigits(sum);
    return arr;
}

function ArrayOfDigits(num) {
    let arr = [];
    let lastDigit;
    while (num > 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10);
        arr.unshift(lastDigit);
    }
    return arr;
}
function arrayToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}
console.log(addTwoNumbers([3,4,2], [4,6,5]))
//#6
//=================================

// function binaryDigits(a,b){
// let xor = (a, b) => a === b ? 0 : 1;
// let and = (a, b) => a == 1 && b == 1 ? 1 : 0;
// let or = (a, b) => a || b;
// let bDigit
// return bDigit;
// }
// console.log(binaryDigits(11,1))
//====================================
//#6
function binarySum(binary1, binary2) {
    let num1 = binaryToNum(binary1);
    let num2 = binaryToNum(binary2);
    let sum = num1 + num2;
    let sumBinary = numToBinary(sum);
    return sumBinary;
}

function numToBinary(num) {
    let binary = "", digit;
    while (num > 0) {
        digit = num % 2;
        num = Math.floor(num / 2);
        binary = digit + binary;
    }
    return binary;
}

function binaryToNum(binary) {
    let num = 0, digit;
    let len = binary.length - 1;
    for (let i = 0; i <= len; i++) {
        digit = Number(binary[i]) * Math.pow(2, len - i);
        num = num + digit;
    }
    return num;
}
console.log(binarySum(11, 1))

// #7 
function columnTitle(n){
    let alpt = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res;
    if(n>=1 && n<=26){
       res = alpt.charAt(n)
        return res;
    } if(n>=27){
        res = alpt.charAt(n/26)+ alpt.charAt(n%26) //N = n*26+n = n/26 + reminder AB
        return res;
    }
    }
    console.log(columnTitle(701));

// #8
    function columnNumber(str){
        let alpt = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       let n;
        if(str.length ===1){ // char should be single & < = 26  ===> char should give index of alpt
        n= alpt.indexOf(str)
        return n;
        } else if(str.length>=2){
            let index1 = str.charAt(0)
            let index2 = str.charAt(1)
            //let indexn = str.charAt(n)
            n=  alpt.indexOf(index1) * 26 + alpt.indexOf(index2)
            return n;
        }
    }
    console.log(columnNumber("ZY")); // ZY = > 701

// #9
function strobogrammaticNumber(num1) {
    let chek;
    while (num1 > 0) {
    chek = num1 % 10 
    if ((chek !== 1) && (chek !== 0) && (chek !== 6) && (chek !== 9) && (chek !== 8)) {
    return false;
    }
    num1 = Math.floor(num1 / 10)
    }
    return true;
   }
console.log(strobogrammaticNumber(99))

//#10
function missingNumber(arr){
    arr.sort();
    let missing;
    let arr1 = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            missing = arr[i] - 1;
            arr1 = missing;
           }
    }
    return missing;
}
console.log(missingNumber([3,0,1] ))

//#11
function searchInsertPosition(arr, num) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
        } else if(arr[i]===num+1){
            index = i+1
        } else if(arr[i]=== num-1 && arr[arr.length-1]){
           // console.log(arr[i], num)
            index = arr.length
        }else if(arr[i]=== num-1 && arr[0]){
            // console.log(arr[i], num)
             index = 0
         }
    }
    return index;
}
console.log(searchInsertPosition([1,3,5,6], 7))

// #12
function maxSubarray(arr){
    let ContiguousArr = [];
    let max = arr[0] + arr[2];
    for (let i = 2; i < arr.length; i++){
        let sum = arr[i] + arr[i-2];
        if(sum > max){
            max = sum;
            ContiguousArr = [arr[i-2],arr[i-1],arr[i], arr[i+1]];
            }
    }
    console.log(ContiguousArr);
    return max;
}
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4] ))

// #13
function indexOfDuplicates(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (arr[i] === arr[j]) {
                    arr1.push(i);
                    arr1.push(j);
                }
            }
        }
    }
    return arr1;
}

function containsDuplicates(arr, num) {
    let arr1 = indexOfDuplicates(arr);
    let indexDiff = arr1[1] - arr1[0];
    if (indexDiff === num) {
        return true;
    }
    return false;
}
console.log(containsDuplicates([1,2,3,1],3 ))

// #14
function indexWordArray(arr, word) {
    let index;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            index = i;
            arr1.push(index);
        }
    }
    return arr1;
}
console.log(indexWordArray(["practice", "makes", "perfect", "coding", "makes"], "practice"))

// #15
function shortDistance(arr, word1, word2) {
    let arr1 = indexWordArray(arr, word1);
    let arr2 = indexWordArray(arr, word2);
    let shortest = arr1[0] - arr2[0];
    shortest = makeAbsolute(shortest);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let distance = arr1[i] - arr2[j];
            distance = makeAbsolute(distance);
            if (distance < shortest) {
                shortest = distance;
            }
        }
    }
    return shortest;
}

// # 16
function makeAbsolute(num) {
    let absolute;
    if (num < 0) {
        absolute = num * -1;
    } else {
        absolute = num;
    }
    return absolute;
}

// #17
function summary_ranges(arr){
    //"a->b" if a != b  || "a" if a == b
    let newArr=[];
    for(let n of arr){
        if(n!==n+1){
            newArr.push(`${n}->${n+1}`)
        } else if(n===n+1)
            newArr.push(`${n}`)
    }
    return newArr;
}
console.log(summary_ranges([0,2,3,4,6,8,9] )) //["0","2->4","6","8->9"]

// #18 
//18
function greatest_common_divisor_of_strings(str1, str2){
    let newArr= [];
    let n=[];
    if(str1.length<str2.length){
        return "No GCS"
    } 
    for(let i=0; i<str1.length; i++){
    for(let j=0; j<str1.length; j++){
        if(str1[i]===str2[j]){ 
            n= str2           
        }
    }
    }
    return n
}
console.log(greatest_common_divisor_of_strings("ABABAB", "ABAB"))