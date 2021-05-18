let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
const getBooks = () => {
    fetch(`https://auspicious-grizzled-unicorn.glitch.me/books`)
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = "";
            for (let book of books) {
                htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $('#container').html(htmlStr)

        });
}
    fetch(`https://auspicious-grizzled-unicorn.glitch.me/books/1`)
        .then(resp => resp.json())
        .then(book => console.log(book));

/////////////////////////////////////// POST ////////////////////////////////////////////////////////
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};
let postOption = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
}
$("#addBook").click(() => {
    fetch(`https://auspicious-grizzled-unicorn.glitch.me/books`, postOption)
        // .then(resp => resp.json())
        .then(getBooks);
});


/////////////////////////////////////// PUT  ////////////////////////////////////////////////////////
let putThis = {
    "title": "Percy Jackson & The Sea Of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}
let putOption = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis)
}
fetch(`https://auspicious-grizzled-unicorn.glitch.me/books/6`, putOption).then(getBooks);

/////////////////////////////////////// PATCH ////////////////////////////////////////////////////////
let patchThis = {
    "title": "Percy Jackson & The Titan's Curse",
    "author": {
        "firstName": "TRick",
        "lastName": "TRiordan"
    }
}
let patchOption = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
}
fetch(`https://auspicious-grizzled-unicorn.glitch.me/books/7`, patchOption).then(getBooks);

getBooks();

///////////////////////////////////////    DELETE   ////////////////////////////////////////////////////////

let deleteOption = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    }
};
$("#uniqueButton").click(() => {
    let inputVal = $("#id-to-delete").val();
    fetch(`https://auspicious-grizzled-unicorn.glitch.me/books/${book.id}`, deleteOption)
        .then(getBooks);
})
//     fetch(`https://auspicious-grizzled-unicorn.glitch.me/books`)
//         .then(resp => resp.json())
//         .then(books => {
//             let uniqueBooks = [];
//             for (let book of books){
//                     if(uniqueBooks.length === 0) {
//                         uniqueBooks.push(book);
//                         continue;
//                     }
//                 for(let existingBook of uniqueBooks){
//                     if(book.title !== existingBook.title || book.author.firstName !== existingBook.author.firstName || book.author.lastName !== existingBook.author.lastName) {
//                         uniqueBooks.push(books)
//                     } else {
//                         fetch(`https://auspicious-grizzled-unicorn.glitch.me/books/${book.id}`, deleteOption)
//                             .then(getBooks);
//                     }
//                 }
//             }
//         })
// })
