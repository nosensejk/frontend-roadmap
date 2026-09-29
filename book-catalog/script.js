console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(location.href);
console.log(location.pathname, location.search, location.hash);

const btn = document.createElement("button");
btn.textContent = "Go back";
btn.addEventListener("click", () => {
  history.back();
});
document.body.append(btn);

const reload = document.createElement("button");
reload.textContent = "Reload";
reload.addEventListener("click", () => {
  location.reload();
});
document.body.append(reload);

const block = document.createElement("div");
const width = document.createElement("span");
const height = document.createElement("span");
const connection = document.createElement("span");

width.textContent = window.innerWidth + " ";
height.textContent = window.innerHeight + " ";
connection.textContent = navigator.onLine;

block.append(width, height, connection);
document.body.append(block);

window.addEventListener("resize", () => {
  width.textContent = window.innerWidth + " ";
  height.textContent = window.innerHeight + " ";
  connection.textContent = navigator.onLine;
});
