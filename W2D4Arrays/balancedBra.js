/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(str) {

    if (str.length <= 1)
      return false
  
    let matchingOpeningBracket, ch
    let stack = []
  
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
  
    for (let i = 0; i < str.length; i++) {
      ch = str[i]
  
      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false
        }
      } else {
        stack.push(ch)
      }
    }
  
    return (stack.length == 0)
  };
  
  console.log(isValid("([]){}")) // false

  

  let isBalanced = (input) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }

  let input = ["[",")","{","(","]"]
  console.log(isBalanced(input))