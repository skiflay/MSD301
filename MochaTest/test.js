"use strict";
const assert = require("assert");
const fun = require("../W2D3CodeQuality/assg.js");


/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), 3.14);
    });
});