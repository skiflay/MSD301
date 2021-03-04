"use strict";
// Shift/Push are FIFO that is Queque
// Push/Pop are LIFO that is Stack, which is recommends bcz the shift in FIFO is expensive 

/*Write code to create an array named scores and fill it with 5 test
scores 10, 20, 30, 40 and 50 */

const scores = [10, 20, 30, 40, 50];

/*Now write a function named findAverage, that takes an array as an
argument and return average of the array values.*/
//  const findAverage = scores=>{
//      let avg;
//      for(let i=0; i<scores.length; i++){
//          avg += scores[i]
//      }
//     let average = avg/scores.length;
//     return average;
//  }
 
 /*Call findAverage function passing array you created in step1 and save
the return result in a variable, average.*/

//const average = findAverage()

// Print the average, it should be 30 for this example.
//console.log(average(scores))

/* Create a second array filled with 10 random values between 0 to 10
and find the average of the array values.*/
//const randomNumber = 

/*• Make sure your program computes correct average for an array of any
size. */


// Check if the parenthesis of stack is balanced or not
/* Defining Table 
- Declare a character stack S.
- Now traverse the expression string exp. 
- If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
- If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) 
    then pop from stack and if the popped character is the matching starting bracket 
    then fine else brackets are not balanced.
-After complete traversal, if there is some starting bracket left in stack then “not balanced”
*/
