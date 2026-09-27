class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, ${this.name}, ${this.age}`);
    }
}

const user1 = new User("Anton", 67);
const user2 = new User("Alex", 55);

user1.sayHello();
user2.sayHello();

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getInfo() {
        console.log(`${this.title} - ${this.author}`);
    }
}

const book = new Book("JS", "Jane Doe");
book.getInfo();

class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  deleteUser() {
    console.log("User deleted");
  }
}

const admin = new Admin("Anton", 67, "Admin");
admin.deleteUser();


class User1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set age(value){
    if (value < 0) {
      console.log("no negative age");
      return;
    }
    this._age = value;
  }
}
const user11 = new User1("Antonio", "Banderas", 55);
console.log(user11.fullName);
user11.age = -5
console.log(user11);

class Product {
  constructor(price) {
    this.price = price;
  }

  set price(value) {
    if (value < 0) {
      console.log("no negative price");
      return;
    }
    this._price = value;
  }

  get price(){
    return this._price;
  }
}

const fruit = new Product(25);
fruit.price = -10;
console.log(fruit);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    get area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(10, 7);
console.log(rect.area);
