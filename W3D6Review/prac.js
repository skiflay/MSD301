//find the max  make m=-Infinity & compare if a[i]>m
//find min make m = Infinity & compare if a[i]<m
let max = arr=>{
    let m = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<m){
            m = arr[i]
        }
    }
    return m;
}
//console.log(max([-1,60,8,10,55,-2]))
//==================================
//find 2nd smallest number make s & ss =Infinity, compare if a[i]=s, then ss=s, if a[i]<s, then ss=s & s =a[i], 
                                            //if a[i]<ss, then ss=a[i]
// find 2nd gratest number make s & ss = -Infinity, compare if a[i]=s, then ss=s, if a[i]>s, then ss=s & s =a[i],
                                        //if a[i]>ss, then ss=a[i]
let secSmall = arr=>{
    let s= -Infinity;
    let ss = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===s){
            ss=s
        }else if(arr[i]>s){
            ss= s;
            s =arr[i];    
        }else if(arr[i]>ss){
            ss=arr[i];
        } 
    }
    return ss;
}
//console.log(secSmall([-2,3,8,9,-1,0,4]))

//fibonacci both with loop & recursive
let fib =n=>{
    if(n<3){
        return 1;
    } else {
      return fib(n-1) + fib(n-2)
    }
}
// fib loop
let fibL =n=>{
    if(n<3){
        return 1;
    } else{
        let prev =1;
        let curr = 1;
        let next;
        for(let i=2; i<n; i++){
            next = prev + curr;
            prev =curr;
            curr = next;
        }
        return curr;
    }
}
// console.log(fib(8))
// console.log(fibL(8))

// prime & Composite Numbs
let isPrime= n=>{
    for(let i=2; i<n; i++){
        if(n%i!==0)continue;
        if(i>0){
            return false;
        } 
    }
    return true;
}
// Prime & composite method 2
let isCompo = n=>{
    let count =0
    for(let i=2; i<n; i++){
        if(n%i===0){
            count ++;
        }
    }
        if(count>0){
            return true;
        }
        return false;
    }

// console.log(isPrime(21))
// console.log(isCompo(21))

function primeIndices(a){
    let count=0;
    for(let i=0; i<a.length; i++){
             if(a[i]%i===0){
            count ++
        }   
    }
    if(count<1){
        return true;
    }
    return false;
}
let sumPrime = a=>{
    let sum =0;
    if(primeIndices===true){
        for(let n of a){
            sum += n
        } 
        return sum    
    }
   return 0 
}
console.log(primeIndices([1,5,6,7,8,3]))

// Magic of Prime Arry
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

console.log(magicArr([21, 3, 7, 9, 11, 4, 6]))

/**
 * 
 * @param {arr} arr 
 * @returns {boolean} -1 if two con ele are not even/odd
 */
 function isWave(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]%2===0 && arr[i+1]%2===0)
            return -1
       if (arr[i]%2!==0 && arr[i+1]%2!==0){
            return -1       
    }
    
    }
    return 1
    }
    console.log(isWave([2,3,4,5,6]))

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

// sort array
let sortArr=a =>a.sort((a,b)=>{
    return   b-a // decending
   });

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
console.log(sortA([10,9,1000,12,-11,3]))