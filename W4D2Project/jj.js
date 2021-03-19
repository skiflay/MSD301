//Simon Kiflay
/**
 * 
 * @param {array} array  
 * @returns {int} integers representing the color of each sock
 */

function countSocksPairs(ar) {
    let socks = {};
    let pairs = 0;
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
  }
  console.log(countSocksPairs([10,20,20,10,10,30,50,10,20] ))

/**
 * 
 * @param {int} height 
 * @param {int} cycles 
 * @returns {int} - how tall the tree will be after n growth cycles given the original height
 */
  function computeHeight(height, cycles) {
    let year = cycles / 2;
    for (let i = 0; i < year; i++) {
        height = height * 2;
        height = height + 1;
    }
    return height;
}


/**
 * 
 * @param {*} arr -takes an array
 * @returns {int} - min distance b/n matching pairs of elements in the array
 */
function findMinDistance(arr) {
    let min = arr.length;
    let distance;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (arr[i] === arr[j]) {
                distance = makeAbsolute(j - i);
                if (distance < min) {
                    min = distance;
                }
            } 
               }
        }
    }
    if(min === arr.length){
        return -1;
    }
    return min;
}


function makeAbsolute(num) {
    let absolute;
    if (num < 0) {
        absolute = num * -1;
    } else {
        absolute = num;
    }
    return absolute;
}

console.log(findMinDistance([3,2,1,2,3]))

