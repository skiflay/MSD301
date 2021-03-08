
let a = [1,2,3,4]

// function ssReverse(a){
//     //return arr.slice().reverse();
//     let b = a.slice()
//  for (let i = 0, j = b.length; i < b.length; i++) {
//    b.splice(i, 0, b[j - 1]);
//    b.splice(j, 1);  
//  }
//  return b
//  }

//  console.log(ssReverse(a))

// console.log(a.splice(0,0,4)) //[]
// console.log(a) //4 1 2 3 4
// console.log(a.splice(3,1)) // 3
// console.log(a) //4,1,2,4
// console.log(a.splice(1,0,3))//[]
// console.log(a) //3 4 1 2 3 4 
// console.log(a.splice(3,1))//4
// console.log(a)//4,1,2
// console.log(a.splice(3,1)) //[]
// console.log(a)//

function fmrString(arr){
    //let arr = str.split(' ');
    //console.log(arr)
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
let arr=[32,105,-22]
//  console.log(fmrString(arr))
//  console.log(arr)

 function even(arr){
     let even =[]
     let j=0
     for(let i=0; i<arr.length; i++){
         if(arr[i]%2===0){
             even [j] = arr[i]
             //j++
         }
     }
     return even
 }
let n= [1,2,3,4,8]
console.log(even(n))
console.log(n)

