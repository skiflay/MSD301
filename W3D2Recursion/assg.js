"use strict";
exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;


/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} the power of any base
 */
function power(x,y){
    if(y===0){
        return 1
    }  else {
        return  x * power(x, y-1);
    }
}
power(2,4);

/**
 * 
 * @param {number} n 
 * @returns {number} count the digits of a given number
 */
function countDigits(n){
    if(n===0){
        return 0;
    } else{
        return 1 + countDigits(parseInt(n/10));
    }
}
countDigits(1234);

/**
 * 
 * @param {string} str 
 * @returns {string} reversing a given string
 */
 function reverse(str) {
    if (str === "")
      return "";
    else
      return reverse(str.substr(1)) + str.charAt(0);
  }
  reverse("hello");
