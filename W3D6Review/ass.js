"use strict";
/**
 * @param {n1,n2} low and high nums
 * @returns {str} if divisible by 3 div3
 */
function div3(n1,n2){
for(let i=n1+1; i<n2; i++){
    if(i%3===0){
        console.log(i, 'div3')
    }
}
}
//console.log(div3(3,15))

function luck7(arr){
if(arr.lenght <3){
    return 0
} 
for(let i=2; i<arr.length; i++){
    if(arr[i]+ arr[i-1] + arr[i-2]===7) {
      return true;  
    }  
}
return false; 
}
//console.log(luck7([2, 3, 5, 1, 6,2]))

function sumA(a){
    let sum =0;
    for(let i=0; i<a.length; i++){ 
        for(let j=0; j<a[i].length; j++){
           sum +=a[i][j] 
        }
    }
    return sum;
}

//console.log(sumA([[1,3],[1,3,7]]))

function isEven(n){
    let str = n.toString().split("")
   for(let n of str){
     Number(n)
       if(n%2===0){
        return 1
       }  else{
        return -1
       } 
   }   
}
function isEven_method2(n) {
    var newNum = n.toString();
    for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] % 2 !== 0) {
    return -1;
    }
    }
    return 1;
    }
//console.log(isEven(2284))
//console.log(isEven_method2(1234))

/**
 * @param {arr}
 * @returns {boolean} if 1st =0, no prime, if sum of prime = 1st index of arr 1 not -1
 */
 function testPrime(number) {
    for (let i = 2; i < number; i++) {
    if (number % i === 0) {
    return false;   
    }
    }
    return true;
}
//console.log(testPrime(4))    

function magicArr(arr){
if(arr[0]===0){
    return "not prime"
}else {
    let sum =0;
    for(let i=0; i<arr.length; i++){
        let x = testPrime(arr[i]);
        if(x===true){
            sum += arr[i]
        }
    }
    if(sum ===arr[0]){
        return 'magic'
    } else {
        return 'not magic'
    }
    
}
}

//console.log(magicArr([0, 3, 7, 9, 1, 4, 6]))
/**
     * 
     * @param {arr} arr 
     * @returns {boolean} return 1 if not index *2 !=arr[i]
     */
 function meraA(arr){
    for(let i= 0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i]*2 ===arr[j]){
         return -1   
        }    
    } 
    }
  return 1  
}
function isMeera(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
    if (arr[i] * 2 == arr[j]) {
    return -1;
    }
    }
    }
    return 1;
    }
// console.log(isMeera([10, 4, 5]))
// console.log(meraA([10, 4, 2]))

//dual array
function dualArr(arr){
    let count =0
    for(let i=0; i<arr.length; i++){   
    for(let j=0; j<arr.length; j++){
        if(arr[i]===arr[j]){
            count ++
        }
    }
    if(count===2){
        return 1
    }
    return -1 
    }
  
}
//console.log(dualArr([2, 2, 1, 3, 3, 2]))

let sortArr=a =>a.sort((a,b)=>{
     return   b-a // decending
    });

console.log(sortArr([6,2,1,8,3,6]))

function sortLeast(arr) {
    // manually sort array from smallest to largest:
    // loop through array backwards:
    for (let i = arr.length-1; i >= 0; i--) {
      // loop again through the array, moving backwards:
      for (let j = i; j >= 0; j--) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        };
      };
    };
    return arr;
  };
  console.log(sortLeast([10,9,1000,12,-11,3]));

  function sortA(a){
      for(let i= a.length-1; i>=0; i--){
          for(let j=i; j>=0; j--){
              if(a[i]<a[j]){
                  let temp = a[i]
                  a[i]=a[j]
                  a[j]=temp
              }
          }
      }
      return a
  }
  //console.log(sortA([10,9,1000,12,-11,3]))


  