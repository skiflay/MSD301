"use strict";
const assert = require("assert");
const arrays = require("../W2D4Arrays/assgArray");
//const matrixAddition = require("./l8arrays").matrixAddition;



/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of first and last elements of the array. */
describe("addend", function () {

    it("tests addend even number of elements", function () {
        assert.strictEqual(arrays.addends([-1, -100, 1, 2, 3, -55]), -56);
    });
    it("tests addend odd number of elements", function () {
        assert.strictEqual(arrays.addends([-10, 2, 3, 4, 20]), 10);
    });

});

/* 2.	Write a function named getMiddle that returns the value of the middle element in an array. If 
the array has an even number of elements, then this function must return the average of the two middle elements. */
describe("getMiddle", function () {

    it("tests getMiddle even number of elements", function () {
        assert.strictEqual(arrays.getMiddle([-1, -100, 1, 2, 3, -55]), 1.5);
    });
    it("tests getMiddle odd number of elements", function () {
        assert.strictEqual(arrays.getMiddle([-10, 2, 3, 4, 20]), 3);
    });

});

/* 3.	Write a function to rotate the elements in an array to the left by 1. */
describe("rotateLeft", function () {

    it("tests rotateLeft even number of elements", function () {
        assert.deepStrictEqual(arrays.rotateLeft([-1, -100, 1, 2, 3, -55]), [-100, 1, 2, 3, -55, -1]);
    });
    it("tests rotateLeft odd number of elements", function () {
        assert.deepStrictEqual(arrays.rotateLeft([-10, 2, 3, 4, 20]), [2, 3, 4, 20, -10]);
    });

});

/* 4.	Write a function to rotate the elements in an array to the right by 1. */
describe("rotateRight", function () {

    it("tests rotateRight even number of elements", function () {
        assert.deepStrictEqual(arrays.rotateRight([-1, -100, 1, 2, 3, -55]), [-55, -1, -100, 1, 2, 3]);
    });
    it("tests rotateRight odd number of elements", function () {
        assert.deepStrictEqual(arrays.rotateRight([-10, 2, 3, 4, 20]), [20, -10, 2, 3, 4]);
    });

});

/* 5.	Modify each rotate function to rotate array by n times where, n is the second parameter passed in the function (EC). n < number of elements */
describe("rotateNRight", function () {

    it("tests rotateNRight 3", function () {
        assert.deepStrictEqual(arrays.rotateNRight([-1, -100, 1, 2, 3, -55], 3), [2, 3, -55, -1, -100, 1, 2]);
    });
    it("tests rotateNRight 4", function () {
        assert.deepStrictEqual(arrays.rotateNRight([-10, 2, 3, 4, 20], 4), [2, 3, 4, 20, -10]);
    });

});


/* 6.	Write a JavaScript function that takes a string of  numbers as comma separated values, e.g, “32, 105,  -22”,  and stores it into an array, e.g., [32, 105, -22] and do following operations
a.	Filters out negative values
b.	Maps the filtered elements to sum of its digits--i.e., 32 becomes 5 and 105 becomes 6
c.	Reduce to get sum of all the elements and returns this value--i.e, add the 5 and 6 to get 11
*/
describe("filter map reduce string", function () {
    it("tests 32, 105,  -22 ", function () {
        assert.strictEqual(arrays.fmrString("32, 105,  -22"), 11);
    });
});

/* 7.	Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. */
describe("filterRange", function () {
    it("tests [0, 100, 3, 6, -555], 6, 60",  function () {
        assert.deepStrictEqual([100, 6], arrays.filterRange([0, 100, 3, 6, -555], 6, 60));
    });
});

/* 8.	Write a function that takes an array of strings and returns array of palindrome strings only. */
describe("filterPalindromes", function () {
    it("tests [not, a, kayak, eagle, racecar]",   function () {
        assert.deepStrictEqual([ "a", "kayak", "racecar"], arrays.filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]));
    });
});

//* 9. Do matrix addition and return result on matrix format for following:
describe("Matrix", function () {
    describe("matrixAddition", function () {
        it("matrix addition of [[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]]  should be [ [ 6, 6, 6 ], [ 12, 12, 12 ] ]", function () {
            assert.deepStrictEqual(arrays.matrixAddition([[0, 1, 2], [9, 8, 7]], [[6, 5, 4], [3, 4, 5]]), [[6, 6, 6], [12, 12, 12]]);
        });
    });
});
