// 1
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
// 2
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
// 3
function findPorcupineNumber(num) {
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

// 4
function twoSumTarget(arr, target) {

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

            if (i === j) {

                continue;

            } else {

                if (arr[i] + arr[j] === target) {

                    arr1.push(i);

                    arr1.push(j);

                }

            }

        }

    }

    return arr1;

}

//5
function mostFrequent(arr) {
    let max = 0;
    let freqElement = arr[0];
    for (let i = 0; i < arr.length; i++) {

        let count = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] === arr[j]) {

                count++;

                if (count > max) {

                    max = count;

                    freqElement = arr[i];

                }

            }

        }

    }

    return freqElement;

}

// function sumNearZero(arr) {

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (i === j) {

                continue;

            } else {

                if ((arr[i] + arr[j]) === 0) {

                    arr1.push(arr[i]);



                }

            }

        }



    }

    return arr1;

}

function addArray(arr1, arr2) {

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

//
function arrayToString(arr) {

    let str = "";

    for (let i = 0; i < arr.length; i++) {

        str = str + arr[i];

    }

    return str;

}



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

function findMissing(arr) {

    arr.sort();

    let missing;

    let arr1 = [];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] - arr[i - 1] !== 1) {

            missing = arr[i] - 1;

            arr1.push(missing);

        }

    }

    return arr1;

}

function findIndex(arr, num) {

    let index;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === num) {

            index = i;

        }

    }

    return index;

}

function doesExist(arr, target) {

    for (let element of arr) {

        if (element === target) {

            return true;

        }

    }

    return false;

}

function checkIndexOfTarget(arr, target) {

    let index;

    if (doesExist(arr, target)) {

        index = findIndex(arr, target);

    } else {

        arr.push(target);

        arr.sort();

        index = findIndex(arr, target);

    }

    return index;

}

function contiguousArray(arr){

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

function absoluteDiff(arr, num) {

    let arr1 = indexOfDuplicates(arr);

    let indexDiff = arr1[1] - arr1[0];

    if (indexDiff === num) {

        return true;

    }

    return false;

}

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

function makeAbsolute(num) {

    let absolute;

    if (num < 0) {

        absolute = num * -1;

    } else {

        absolute = num;

    }

    return absolute;

}


function moveZeroes(arr) {

    arr.sort(comparator);

    for (let element of arr) {

        if (element === 0) {

            arr.push(arr.shift());

        }

    }

    return arr;

}



function comparator(arg1, arg2) {

    return arg1 - arg2;

}

function isVowel(str) {

    if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {

        return true;

    }

    return false;

}



function vowelsArray(str) {

    let arr = [];

    for (let i = 0; i < str.length; i++) {

        if (isVowel(str[i])) {

            arr.push(str[i]);

        }

    }

    return arr;

}



function reverseVowels(str) {

    let arr = vowelsArray(str);

    arr = arr.reverse();

    console.log(arr);

    let strNew = "";

    let j = 0; // index of array

    for (let i = 0; i < str.length; i++) {

        if (!isVowel(str[i])) {

            strNew = strNew + str[i];

        } else {

            strNew = strNew + arr[j];

            j++;

        }

    }

    return strNew;

}


//=====================

function findIndexChar(char){

    let capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let index;

    for (let i = 0; i < capString.length; i++){

if(char===capString[i]){

    index = i+1;

}

    }

    return index;

}



function findIndexExcel(str){

    let indexExcel = 0;

    let indexChar;

    let len = str.length - 1;

    for(let i = 0; i <= len; i++){

       indexChar = findIndexChar(str[i]) * Math.pow(26,len-i);

       indexExcel = indexExcel + indexChar;

    }

    

    return indexExcel;

}



console.log(findIndexChar("A"));

console.log(findIndexExcel("A"));

console.log(findIndexExcel("AB"));

console.log(findIndexExcel("ZY"));

console.log(findIndexExcel("AAA"));