"use strict";



// var increase = 2
// while (increase <=65536) {
//     console.log(increase);
//     increase = increase * 2;
// }


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log("i have a total of " + allCones + " cones")
    if (conesSold <= allCones) {
        allCones = allCones - conesSold;
        console.log("i sold " + conesSold + " cones");
        console.log(allCones + " cones is all i have left");
    } else if(conesSold > allCones) {
        console.log("i cannot sell you " + conesSold + " cones!")
    }
} while (allCones > 0){
    console.log("Yay! I sold them all");
}







// var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
// alert("The price of your item was " + priceOfItem);
// // create accumulator variable
// var totalCost = priceOfItem;
// var userInput = "";
// // create a sentinel value
// while(userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert("OK. Your final total is " + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }