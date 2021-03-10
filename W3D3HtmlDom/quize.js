"use strict";
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} the power of any base
 */
 function power(x,y){
    if(y===0){
        return 1
    }  if(y<0){
        let base = 1/x;
        let exp = Math.abs(y)
        return  base * power(base, exp-1);
    }else {
        return  x * power(x, y-1);
    }
}
console.log(power(5,-3));