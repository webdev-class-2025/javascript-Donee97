let bookTitle = "A Dog Called Money";
const authorName = "Bodo Schafer";
let year = 2021;
let pages = 128;
let category = "kids bestseller";
let isRead = true;

console.log("Name of a book: " + bookTitle);
console.log("Author: " + authorName);
console.log("Publication Date: " + year);
console.log("Page Count: " + pages);
console.log("Book Category: " + category);
console.log("Reading Status: " + (isRead ? "Book read" : "Book not read"));

let access = isRead ? "Book read" : "Book not read";
console.log("Reading Status: " + access);

console.log("Type of:",typeof bookTitle)
console.log("Type of:",typeof authorName);
console.log("Type of:",typeof year);
console.log("Type of :",typeof isRead);
