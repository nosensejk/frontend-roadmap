const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7);
numbers.pop();
console.log(numbers);

const fruits = ["Apple", "Banana", "Orange"];
fruits.unshift("Mango");
console.log(fruits);

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

const double = numbers.map(num => num * 2);
console.log(double);

const users = [
    { name: "Alex", age: 25 },
    { name: "John", age: 17 },
    { name: "Kate", age: 30 }
];
const adults = users.filter(user => user.age > 18);
console.log(adults);

const kate = users.find(user => user.name === "Kate");
console.log(kate);

const numbers2 = [10, 20, 30, 40];
let result = numbers2.reduce((prev, curr) => {
  return prev + curr
});
console.log(result);

