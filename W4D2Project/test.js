// #7 
// function excel_sheet_column_title(n){
//     let alpt = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let res;
//     if(n>=1 && n<=26){
//        res = alpt.charAt(n)
//         return res;
//     } if(n>=27){
//         res = alpt.charAt(n/26)+ alpt.charAt(n%26) //N = n*26+n = n/26 + reminder AB
//         return res;
//     }
//     }
//     excel_sheet_column_title(701);





    // function excel_sheet_column_number(str){
    //     let alpt = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //    let n=0;
    //     //console.log(alpt.charAt(26))
    //     if(str.length ===1) // char should be single & < = 26  ===> char should give index of alpt
    //     n= alpt.indexOf(str)
    //     console.log(n)
    //     if(str.length>=2){
    //         let index1 = str.charAt(0)
    //         let index2 = str.charAt(1)
    //         //let indexn = str.charAt(n)
    //         n=  alpt.indexOf(index1) * 26 + alpt.indexOf(index2)
    //         console.log(n)
    //     }  
    // }
    // excel_sheet_column_number("Z"); // ZY = > 701


//  //#17 
// function summary_ranges(arr){
//     //"a->b" if a != b  || "a" if a == b
//     let newArr=[];
//     for(let n of arr){
//         if(n!==n+1){
//             newArr.push(`${n}->${n+1}`)
//         } else if(n===n+1)
//             newArr.push(`${n}`)
//     }
//     return newArr;
// }
// console.log(summary_ranges([0,2,3,4,6,8,9] )) //["0","2->4","6","8->9"]


//18
// function greatest_common_divisor_of_strings(str1, str2){
//     let newArr= [];
//     let n=[];
//     if(str1.length<str2.length){
//         return "No GCS"
//     } 
//     for(let i=0; i<str1.length; i++){
//     for(let j=0; j<str1.length; j++){
//         if(str1[i]===str2[j]){ 
//             n= str2           
//         }
//     }
//     }
//     return n
// }
// console.log(greatest_common_divisor_of_strings("ABABAB", "ABAB"))


// 3. There is a large pile of socks that must be paired by color. Write a
// function countSocksPairs, that given an array of integers representing the color of each sock,
// determines how many pairs of socks with matching colors there are.
// Input Output Explanation
// [1,2,1,2,1,3,2] 2 There is one pair of color 1 and one of color 2
// [10,20,20,10,10,30,50,10,20] 3 Two pairs of color 10 and one pair of color 20

// function countSocksPairs(arr){
//     let count =0;
//     let n=0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]===arr[j])
//             count ++
//         }        
//     }
//     if(count%2===0){
//         n= 1;
//     }
//     return n;
// }
//console.log(countSocksPairs([1,2,1,2,1,3,2]))

function sockMerchant(ar) {
    let socks = {};
    let pairs = 0;
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
  }
  console.log(sockMerchant([1,2,1,2,1,3,2]))
// 6 
/*
6. The distance between two array values is the number of indices between them. Write a
function findMinDistance, that given an array finds the minimum distance
between matching pairs of elements in the array. If no such value exists, return -1.
*/

function findMinDistance(arr){
    let min;
    let max;
for(let i=0; i<arr.length; i++){
    if(arr[i]!==arr[i+1]){
        continue;
    } else if(arr[i] ===arr[i+1]){
       min = i;
       max = i+1
    }
    if(max>min){
        return max;
    } 
}
return min
}
console.log(findMinDistance([3,2,1,2,3] ))

function find(n){

    let min_dist = 0; 
    for (i = 0; i < n; i++) { 
        for (j = i+1; j < n; j++) { 
            if( (x == arr[i] && y == arr[j] || 
                y == arr[i] && x == arr[j]) && 
                min_dist > abs(i-j)) { 
                min_dist = abs(i-j); 
            } 
        } 
    } 
    return min_dist; 
}
    
console.log(find([3,2,1,2,3] ))  

function computeCharges()