  
/* 
- Alt + Shift + F => for vertical indentation
- Use ESLint  -- install it 
- refactor test is better b/c it will test cases seperatly 
*/

function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }