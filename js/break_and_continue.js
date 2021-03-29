"use strict";


//
// for (var i = 1; i < 50; i+=2) {
// if (i === input) {
//     console.log("yikes! skipping number : " + input);
//     continue;
//     var input = parseFloat(prompt("Choose a odd number from 1 top 50??"));
//     if (input % 2 !== 1) {
//         console.log("this number is not a odd number");
//         break;
//     }else if (input <1 && input > 50) {
//         console.log( "this number does not fit in the asked prompt" );
//         break;
//     }
// }
var input = 0;

while(input !== "youre never gonna come up with this"){
   input = parseFloat(prompt("Choose a odd number from 1 top 50??"));
    if (input % 2 === 1 || (input > 0 && input < 50)) {break;}
}

for (var i = 1; i < 50; i+=2) {
    if (i === input) {
        console.log("yikes! skipping number : " + input);
        continue;
    }
}
// for (var i = 1; i <=50; i++) {
//     if (input % 2 !== 0) {
//         if (input > 0 && input < 50) {
//             alert("That sure is an odd number between 1-50! \r\n\ Please check the console log for all further output.")
//             break;
//         } else {
//             alert("Please enter a valid number.");
//         }
//
//     } else {
//         alert("Please enter a valid number.");
//     }
// }