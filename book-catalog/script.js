const header1 = document.createElement("h1");
header1.id = "title";
header1.textContent = "Old title";
document.body.prepend(header1);
header1.textContent = "New title";

const button = document.createElement("button");
button.id = "button";
button.textContent = "Click me!";
document.body.prepend(button);
button.addEventListener("click", () => {
  console.log("Clicked!");
});

const container = document.createElement("div");
container.id = "container";
container.innerHTML = `<p>Hello!</p>`;
document.body.prepend(container)

const theme = document.createElement("button");
theme.id = "theme";
theme.textContent = "Toggle theme!";
document.body.prepend(theme);
theme.addEventListener("click", () => {
  theme.classList.toggle("dark")
});

const list = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
li1.textContent="HTML"
li2.textContent="CSS"
li3.textContent="JavaScript"
document.body.prepend(list);
list.addEventListener("click", () => {
  console.log(event.target);
})