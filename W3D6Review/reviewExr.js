/* 1. Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false
*/
function isSumOfPrimesEven(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0 ){
            sum+= arr[i]
        }    
    }
   
}

    // if(sum%2 ===0){
    //         return true;
    //     } else {
    //         return false;
    //     }
   
/*
2. An array is called a perfectly odd array if every element at the odd indices of the array is
also odd. Write a function named isPerfectlyOdd that takes an array of integers as a
parameter and checks whether it is perfectly odd. Return false if the array is an empty array.
*/

function isPerfectlyOdd(arr){
    let odd =0
    for(let i=0; i<arr.length; i+=2){
        odd += arr[i];
        if(odd%2!==0){
             return true; 
        } else{
            return false;
        } 
    }
}
//console.log(isPerfectlyOdd([3,9,9,5,5,7,9]))

/*
3. Write a function that given an array of integers returns the sum of elements at the prime
indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values
at the prime indices of the array. // 
*/
      let primelist= n=>{
        nextP:for(let i =2; i<n; i++){
            for(let j=2; j<i; j++){
                if(i%j===0) continue nextP;          
            }
            console.log(i) 
        }
        
    }
console.log(primelist(8))

let sumPrime = a=>{
    let sum =0;
    if(primeIndices(a)>1){
        for(let n of a){
            sum += n
        } 
        return sum    
    }
   return 0 
}
//console.log(primeIndices([1,5,6,7,8,3]))

// const prompt = require("prompt-sync")();
// let user;
// do{
// user = +prompt("Enter a number b/n 1 and 10: ")
// } while(user !==7)

// fibonacci
//const numTerms = prompt("enter number of terms: ");
// console.log(0);
// console.log(1);
// let previous = 0;
// let current = 1;

// for (let i = 2; i <= numTerms; i++) {
//   const sum = previous + current;
//   console.log(sum);
//   previous = current;
//   current = sum;
// }


// Matrix
function matrixAddition(matrix1, matrix2) {
    let sumMatrix = [];

    /* initialize the sumMatrix to be the same size as the adding matrices */
    for (let i = 0; i < matrix1.length; i++) {
        sumMatrix.push([]);
    }

    for (let i = 0; i < matrix1.length; i++) {  //go through outside array
        for (let j = 0; j < matrix1[i].length; j++) { //go through each of the inner arrays in turn
            sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    console.log(sumMatrix);
    return sumMatrix;

}