// callback functions
const compute = function(compFun, a,b){
    return compFun(a, b);
}

const add =(a,b)=>{
    return a+b;
}

const mult =(a,b)=>{
    return a * b;
}

// function declaration 
// we can call fun expression anywhere on the page, i.e above or below the fun
 //console.log(x(2,3))
 //function x(a, b) {return a * b}
 
// function Expression
// we can't call fun expression above the fun
//console.log(y(2,3)) // not working
//let y = function(a, b) {return a * b}
//console.log(y(2,3))


// Finding GCM ... we don't need to loop all the way to n1 & n2 ...we do it till max(n1, n2)
// Finding LCM ... we don't need to loop all the way to n1 & n2 ...we do it till min(n1, n2)


console.log(compute(add,2,3)) // 5
console.log(compute(mult,2,3)) // 6