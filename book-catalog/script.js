const promise = new Promise((resolve) => {
  resolve("Success");
});

promise.then((data) => {
  console.log(data);
});

const promiseErr = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong"));
});

promiseErr.catch((err) => {
  console.log(err);
});

const data = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 2000);
});

data.then((res) => {
  console.log(res);
});

Promise.resolve(10)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 5;
  })
  .then((value) => console.log(value));

function getBooks() {
  return new Promise((resolve) => {
    resolve(["Book 1", "Book 2", "Book 3"]);
  });
}
getBooks().then((value) => {
  console.log(value);
});

//

const first = Promise.resolve("First");
const second = Promise.resolve("Second");
const third = Promise.resolve("Third");

Promise.all([first, second, third]).then((res) => console.log(res));
Promise.allSettled([first, second, third]).then((res) => console.log(res));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 rej");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

Promise.any([promise1, promise2, promise3]).then((res) => console.log(res));
Promise.race([promise3, promise1])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function getNumber() {
  return 10;
}

Promise.try(getNumber).then((res) => console.log(res));
