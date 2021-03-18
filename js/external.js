"use strict"
//
// console.log("Hello From External JavaScript")
//
// alert("Welcome to my website")
//
// var favoriteColor = prompt("what is your favorite color?")
//
// alert("Great," +  favoriteColor + " is my favorite color too!")

//
// var littleMRental = parseFloat(prompt("How many days was the little mermaid rented for?"))
//
// var brotherBRental = parseFloat(prompt("how many days was big brother rented for"))
//
// var herculesRental = parseFloat(prompt("how many days was hercules rented for"))
//
// var pricePerDay = parseFloat(prompt("how much does it cost to rent out the movie per day"))
//
// var totalAmount = ((littleMRental + brotherBRental + herculesRental) * pricePerDay)
//
// alert("the total will be " + totalAmount + " dollars")

// var googleP = parseFloat(prompt("how much do you get paid at google?"))
//
// var amazonP = parseFloat(prompt("how much do you get paid at amazon?"))
//
// var facebookP = parseFloat(prompt("how much do you get paid at facebook?"))
//
// var  googleH= parseFloat(prompt("how many hours did you work for google this week?"))
//
// var  amazonH= parseFloat(prompt("how many hours did you work for amazon this week?"))
//
// var  facebookH= parseFloat(prompt("how many hours did you work for facebook this week?"))
//
// var totalPay = ((googleP * googleH) + (amazonP * amazonH) + (facebookP * facebookH))
//
// alert("you have made a total of " + totalPay + " dollars this week.")


var classStart = confirm("Can you take a 9 a.m. class?")
console.log(classStart)

var classFull = confirm("Does this class have available seats?")
console.log(classFull)

const canRegister = (classStart && classFull)

{ if (false)
    {
        alert("you cannot register")
    } else {
        alert("you are able to register")
    }
}