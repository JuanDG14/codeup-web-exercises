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

// 1. the difference between .java file and .class file is that the .java file is what is typed and coded by the User and the .class is what is being compiled and run to the computer and being read and typed by the computer.

// 2. The reason for so many data types for the precision of each one and we use them for the memory that each data type holds.

// 3.JDK (Java Development Kit) contains all the required tools and libraries to develop and run Java applications, including JRE. JRE Java run time environment is a piece of software which contains JVM and other libraries required to execute Java programs.