
function small(arr){let min=arr[0]
    for(let i=1;i<arr.length;i++){
           if(arr[i]<min){
                  min=arr[i]
           }
    }return min}
function ssmall(arr){
    let sMin=arr[1]
    for(let i=1;i<arr.length;i++){
      if(arr[i]>small(arr)&&arr[i]<sMin){sMin=arr[i]}

    }

    return sMin

}

console.log(ssmall([4,6,8,9,-4,0,2,5]))

function secSmall(arr) {
    let first = arr[0];
    let second = arr[0];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < first)
                first = arr[i]
            if (arr[j] < second) {
                second = arr[j]
            }
        }
        if(arr[i]<first){
            second = first;
            first = arr[i];
        } else if(arr[i]<second){
            second = arr[i]
    }
    return second;
}


// console.log(secSmall([2,5,6,8,3,4,9]))

function isComp(n) {
    let count = 0;
    if (n === 1) {
        return false;
    } if (n < 1) {
        return false
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                count++    
            } 
            }
        }
        if (count > 0) {
            return true;
        } 
            return false;   
    }
    function isCompOdd(n) {
        if (isComp(n) === true && n % 2 !== 0) {
            return true;
        } else
            return false;
    }
    console.log(isCompOdd(9))

    // secondSmallest

    function small(arr){
        let s = arr[0];
        let ss= arr[0];
        for(let i=0; i<arr.length; i++){
            if(arr[i]<s){
                s=arr[i]
                ss= s    
            }
        }
        return ss
    }

    //console.log(small([-2,3,8,7,-1,0,4]))

    let elements = [-2,3,8,7,-1,0,4];
    function ff(elements){
        let smallest = Infinity
    let secondSmallest = Infinity;
    for (let i = 0; i < elements.length; i++) {
        if(elements[i]==smallest){
          secondSmallest=smallest;
        } else if (elements[i] < smallest) {
            secondSmallest = smallest;
            smallest = elements[i];
        } else if (elements[i] < secondSmallest) {
            secondSmallest = elements[i];
        }
    }
    return secondSmallest
    }
    console.log(ff(elements))
}
