"use strict";


//
// function isOdd(input) {
//     return (input % 2 === 1);
// }
// console.log(isOdd(10));
// console.log(isOdd(100));
// console.log(isOdd(12));
// console.log(isOdd(13));
//
//
// function isEven(input) {
//     return (input % 2 === 0);
// }
// console.log(isEven(10));
// console.log(isEven(100));
// console.log(isEven(12));
// console.log(isEven(13));
//
// function identity(input) {
//     return input;
// }
// console.log(identity("hello my name is juan"));
// console.log(identity(1));
// console.log(identity(true));

function isFive(input) {
    return (input === 5);
}
console.log(isFive(5));
console.log(isFive('five'));
console.log(isFive("five"));
console.log(isFive(true));

function addFive(input) {
    return (input + 5);
}
console.log(addFive(10));
console.log(addFive('15'));
console.log(addFive(true));
console.log(addFive(NaN));

function isMultipleOfFive(input) {
    return (input * 5);
}
console.log(isMultipleOfFive(130));
console.log(isMultipleOfFive("50"));
console.log(isMultipleOfFive(true));
console.log(isMultipleOfFive(NaN));

function isThree(input) {

}