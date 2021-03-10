// recursive & iterative loop of factorial of n
function factorial(n){
    let fuc = 1
    if(n===1){
        return 1
    }
    return n * factorial(n-1)
    // for(let i=1; i<=n;i++){
    //   fuc*=n-1
    // }
    // return fuc
}

console.log(factorial(3))

function fibonacci(n){
    if(n===0){
        return 0;
    } if(n===1){
        return 1
    }
    else{
        const nextFib = fibonacci(n-1)+ fibonacci(n-2);
        return nextFib; 
    }
}
console.log(fibonacci(7))
