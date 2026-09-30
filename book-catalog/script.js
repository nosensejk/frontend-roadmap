localStorage.setItem(
    "username",
    "Alex"
);

const username = localStorage.getItem("username");
console.log(username);

sessionStorage.setItem("currentStep", 2);
const step = sessionStorage.getItem("currentStep");
console.log(typeof step);

const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

localStorage.setItem("fruits", JSON.stringify(fruits));
const fr = localStorage.getItem("fruits");
console.log(JSON.parse(fr));


const books = [
    {
        id: 1,
        title: "JavaScript"
    },
    {
        id: 2,
        title: "Clean Code"
    }
];

localStorage.setItem("books", JSON.stringify(books));


function toggleFavorite(book) {
    const stored =
        localStorage.getItem("favorites");

    const favorites = stored
        ? JSON.parse(stored)
        : [];

    const exists = favorites.some(
        (item) => item.id === book.id
    );

    const updatedFavorites = exists
        ? favorites.filter(
            (item) => item.id !== book.id
        )
        : [...favorites, book];

    localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
    );
}