// function minF(a){
// let min = Infinity;
// let secMin = Infinity;
// for(let i=0; i<a.length; i++){
//     if(a[i]<min){
//         secMin = min;
//         min = a[i];
//     } if(a[i]<secMin){
//         secMin=a[i]
//     }
// }
// return `min ${min}, secoMin ${secMin}`
// }
function ab(arr){
   var arr = [15, 37, 9, 21, 55];
var min = Infinity, secondMin = Infinity; 
for (var i= 0; i< arr.length; i++) {
    if (arr[i]< min) {
        secondMin = min;
        min = arr[i]; 
    } else if (arr[i]< secondMin) {
        secondMin = arr[i]; 
    }
} 
return `min ${min}, secoMin ${secondMin}`
}

  

// console.log('Smallest number: ' + min);
// console.log('Second smallest number: ' + secMin);
console.log(ab([4,11,8,3,78,55,6]))


const isCompOdd = n=>{
    if(n===1){
        return true;
    } else if(n<1){
        return false;
    } else {
        for(let i=2; i<n; i++){
            if(n%2!==0 && n%i===0){
                return true;
            } else{
                return false;
            }
        }
    }
}
console.log(isCompOdd(9))


function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(9))