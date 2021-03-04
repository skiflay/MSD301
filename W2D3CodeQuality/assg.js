"use strict"; 
exports.checkPrime = checkPrime;
exports.areaOfCircle = areaOfCircle;
/**
 * 
 * @param {int} n - positive integer 
 * @return {boolean} true/ false
 * @process: loop from 2 to n
 *      check if n is not divisible by i
 *      true if so, false otherwise
 */

function checkPrime(n){
    for(let i=2; i<n; i++){
        if(n%i!==0){
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }
    }
    checkPrime(9)
    
    /**
     * 
     * @param {int} n - positive integer 
     * @returns {int} - area of circle
     * @process - multiply value of PI with square of radius
     */
    function  areaOfCircle(r){
        return (Math.PI * r *r).toFixed(2)
        }
        
    console.log("expect area of circle: ", areaOfCircle(1));