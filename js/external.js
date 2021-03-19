"use strict"

console.log("Hello From External JavaScript")

alert("Welcome to my website")

var favoriteColor = prompt("What is your favorite color?")

alert("Great," +  favoriteColor + " is my favorite color too!")


var littleMRental = parseFloat(prompt("How many days was The Little Mermaid rented for?"))

var brotherBRental = parseFloat(prompt("How many days was Brother Bear rented for"))

var herculesRental = parseFloat(prompt("How many days was Hercules rented for"))

var pricePerDay = parseFloat(prompt("How much does it cost to rent out the movie per day"))

var totalAmount = ((littleMRental + brotherBRental + herculesRental) * pricePerDay)

alert("The total will be: $" + totalAmount.toFixed(2) + " dollars")


var googleP = parseFloat(prompt("How much do you get paid at Google?"))

var amazonP = parseFloat(prompt("How much do you get paid at Amazon?"))

var facebookP = parseFloat(prompt("How much do you get paid at Facebook?"))

var  googleH= parseFloat(prompt("How many hours did you work for Google this week?"))

var  amazonH= parseFloat(prompt("How many hours did you work for Amazon this week?"))

var  facebookH= parseFloat(prompt("How many hours did you work for Facebook this week?"))

var totalPay = ((googleP * googleH) + (amazonP * amazonH) + (facebookP * facebookH))

alert("You have made a total of $" + totalPay.toFixed(2) + " dollars this week.")

alert("You may only signup if there are seats available and can take the 9 a.m. class")

var classStart = confirm("Can you take a 9 a.m. class?")
console.log(classStart)

var classFull = confirm("Does this class have available seats?")
console.log(classFull)

{ if (!(classStart && classFull) === true)
    {
        alert("you cannot register")
    } else {
        alert("you are able to register")
    }
}

var availableOffer = confirm("Is the offer still available today?")
console.log(availableOffer)

var itemsBought = parseFloat(prompt("Did you at least bought two items"))
console.log(itemsBought)

var premiumMem = confirm("Are you a premium member for us?")
console.log(premiumMem)

alert("The customer may receive the promo: " + (premiumMem || (itemsBought >= 2) && availableOffer) && (itemsBought >= 1) + ".")