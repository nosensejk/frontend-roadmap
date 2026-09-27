function countDown(num){
  console.log(num);
  if (num > 0) {
    countDown(num-1)
  }
}
countDown(6);

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1)
}

console.log(factorial(5));


function sumTo(num){
  if (num === 0) return 0;
  return num + sumTo(num - 1);
}

console.log(sumTo(10));

const category = {
    name: "Books",
    children: [
        {
            name: "JavaScript",
            children: []
        },
        {
            name: "CSS",
            children: []
        }
    ]
};

function printCategory(obj){
  console.log(obj.name);
  for(const child of obj.children) {
    printCategory(child)
  }
}
printCategory(category)