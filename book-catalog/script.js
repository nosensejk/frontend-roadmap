function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

const user = {
    name: "Alex"
};

sayHello.call(user);


function introduce(city, profession) {
    console.log(
        `${this.name} — ${profession} из ${city}`
    );
}

introduce.apply(user, ["Warsaw", "Frontend Developer"])

const foo = sayHello.bind(user);
foo();

const user1 = {
    name: "Alex",

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
};

setTimeout(user1.sayHello.bind(user1), 1000);

function calculate(a, b) {
    return this.value + a + b;
}
const data = {
    value: 10
};

console.log(calculate.call(data, 10, 5));

