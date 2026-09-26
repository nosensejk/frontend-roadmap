console.log("hello");

const year = 1985
console.log(year);


const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Понедельник");
        break;

    case "Tuesday":
        console.log("Вторник");
        break;

    case "Wednesday":
        console.log("Среда");
        break;

    default:
        console.log("Другой день");
}

const books = [
    "Dune",
    "1984",
    "The Hobbit",
    "Harry Potter",
    "The Great Gatsby"
];

for (let i = 0; i < books.length; i++) {
   console.log(books[i]);
   
}

for (const book of books) {
   console.log(book);
}

console.log(books.length > 3);

const isLoggedIn = true;
if (isLoggedIn) {
   console.log("Добро пожаловать!");
   
} else {
   console.log("Войдите в аккаунт");
   
}