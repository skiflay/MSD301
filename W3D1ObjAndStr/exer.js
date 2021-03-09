"use strict";

/* • Write code that creates three different person objects, sam1, sam2, john*/
let sam1 = {
    name: 'sam',
    age: 10
}

let sam2= {
    name: 'sam',
    age: 10
}

let john = {
    name: 'john',
    age: 10
}

/* • Write a function, isPersonEqual(obj1, obj2) that checks equality for
person objects */
function isPersonEqual(obj1, obj2){
    if(obj1.name ===obj2.name && obj1.age ===obj2.age){
        return true;
    } else {
        return false;
    }
}

console.log("expecting true", isPersonEqual(sam1, sam2));
console.log("expecting false", isPersonEqual(sam1, john));

/* • Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)*/
// const prompt = require("prompt-sync")();
// let user;
// do{
//     user = prompt("Enter a word: ");
//     user = user.toLowerCase()
// } while(user!=='Stop')

/* Write a function that takes a comma separated string of words and
converts it into an array of words and prints in reverse order. */
function reverseStr(str){
    const revWord = str.split(",");
    revWord.reverse();
    for(let word of revWord){
        console.log(word)
    }
}
console.log(reverseStr("Today, is, hot!!"))

/*  Write a function to replace the first occurrence of "for" in an input
string with 4. */
function replace4(str){
    const findInx = str. indexOf("for");
    const subStr1 = str.substr(0, findInx)
    const subStr2 = str.substring(findInx +3, str.length-1)
    return subStr1+ 4 + subStr2;
}
console.log(replace4("Thank you for your effort!"))