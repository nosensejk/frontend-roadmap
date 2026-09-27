function sayHello() {
  console.log("hello");
}

sayHello();

function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Anton");

const sum = (a, b) => a + b;
console.log(sum(10, 20));

function getBookInfo(book, author, year) {
  console.log(`${book} - ${author} (${year})`);
}
getBookInfo("Dune", "Frank Herbert", 1965);


const appName = "Book Catalog";
function showAppName() {
  console.log(appName);
}
showAppName();

function createCounter() {
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

const counter = createCounter();
counter();
counter();

function createMultiplier(multiplier) {
  return function (number){
    return number * multiplier;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

const num1 = double(10);
const num2 = triple(15);

console.log(num1, num2);

function createGreating(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  }
}

const greetAnton = createGreating("Anton");
greetAnton();
