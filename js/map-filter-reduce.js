"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// old way .map
let emails = users.map(function (user) {
    return user.email;
})
// es6 way .map
let es6emails = users.map(user => user.email);


//old way .filter
let multilingual = users.filter(function (user) {
    return user.languages.length > 2;
})
// es6 .filter
let result = users.filter(user => user.languages.length > 2);


// old way
const totalExperience = users.reduce(function (experience, user) {
    return (experience + user.yearsOfExperience)
}, 0) / users.length;
//es6 .reduce (average)
let average = users.reduce((experience, user) => experience + user.yearsOfExperience, 0) / users.length;


//old way
let longestEmail = users.reduce(function (email, user, index, usersArray) {
    if (index === usersArray.length - 1) {
        email.push(user.email);
        email.sort(function (email1, email2) {
            return email2.length - email1.length
        });
        return email[0];
    } else {
        email.push(user.email);
        return email;
    }
}, []);
//es6 way
let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);
//es6 way
let longestUEmail = users.reduce((a, b) => {
    return a.length > b.email.length ? a : b.email;
});


//old way
let instructor = users.reduce(function (name, user) {
    name.push(user.name)
    return name
}, []);
let names =  users.reduce(function (name, user, index, usersArray) {
    if(index === usersArray.length - 1) {
        name.push(user.name);
        let joining = name.join(', ');
        joining = "Your instructors are: " + joining + ".";
        return joining
    } else {
        name.push(user.name)
        return name;
    }
}, []);
//es6 way
let usersString = users.reduce((accu, user, index) => {
    return index === 0 ? user.name : accu + ", " + user.name;
}, "");


let uniqueArray = users.reduce(function (nameArray, user, index, array) {
    nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
    // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
    // nameArray = [...nameArray,...user.languages];
    // console.log(nameArray);
    if (index === array.length - 1) {
        // return getUniqueValues(nameArray);
        return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
    } else {
        return nameArray;
        // return getUniqueValues(nameArray);
    }
}, []);
console.log(uniqueArray);