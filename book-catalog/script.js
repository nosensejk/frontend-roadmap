const users = new Map();
users.set(1, "Alex");
users.set(2, "John");
users.set(3, "Kate")
console.log(users.get(2));

const goods = new Map();
goods.set(1, "Book");
goods.set(2, "Laptop");
goods.set(3, "Phone");
console.log(goods.has(2));

const numbers = new Set();
numbers.add(1);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(3);
numbers.add(3);
console.log(numbers);

const numbersArr = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const numbersSet = new Set(numbersArr);
console.log(numbersSet);

const newUsers = new WeakSet();
const user1 = {
  name: "Anton",
  age: 67
};
const user2 = {
  name: "Alex",
  age: 3
};

newUsers.add(user1);
newUsers.add(user2);
console.log(newUsers.has(user1), newUsers.has(user2));


