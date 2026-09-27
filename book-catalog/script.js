const user = {};

user.name = "Anton";
user.age = 67;
user.email = "qweqwe@gmail.by";

const keys = Object.keys(user);
console.log(keys);

const book = {
  title: "JavaScript",
  author: "John Doe",
  year: 2026,
};

book.price = 25;

const person = {
  name: "Alex",
  age: 69,
};

const personCopy = {
  ...person,
  name: "Anton",
};

console.log(personCopy);

const personalInfo = {
  name: "Alex",
  age: 25,
};

const workInfo = {
  company: "Example",
  position: "Frontend Developer",
};

const info = Object.assign({}, personalInfo, workInfo);

console.log(info);

book.getInfo = function () {
  console.log(`${this.author} - ${this.title}`);
};

book.getInfo();

const user2 = {
  name: "Alex",

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
};

user2.sayHello();

const user3 = {
  name: "Alex",

  getName() {
    return this.name;
  },
};

const getName = user3.getName.bind(user3);
console.log(getName());

const counter = {
  value: 0,

  increment() {
    this.value++;
  },
};

for (let i = 1; i <= 3; i++) {
  counter.increment();
}
console.log(counter.value);

const user4 = {
  name: "Alex",
  sayName() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}
user4.sayName();
