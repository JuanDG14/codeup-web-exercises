for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if(i % 3 === 0) {
        console.log("fizz");
    } else if(i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i)
    }
}

const return7 = () => 7;
console.log(return7())

function num (i){
    if (typeof i == "number" ){
        return (i * 5)
    } else {
        return 0
    }
}
console.log(num(true))
console.log(num(5))