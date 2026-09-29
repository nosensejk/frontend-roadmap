setTimeout(() => {
  console.log("Hello Javascript");
}, 3000);

const timeoutId = setTimeout(() => {
  console.log("Hello");
}, 5000);

clearTimeout(timeoutId);

let seconds = 1;

const intervalId = setInterval(() => {
  console.log(seconds);
  seconds++;
  if (seconds > 5) {
    clearInterval(intervalId);
  }
}, 1000);

const btn = document.createElement("button");
btn.textContent = "Start";
document.body.append(btn);

btn.addEventListener("click", () => {
   setTimeout(() => {
      btn.textContent = "Done"
   }, 3000);
})

const startButton = document.createElement("button");
startButton.textContent = "Start timer";
document.body.append(startButton);
const stopButton = document.createElement("button");
stopButton.textContent = "Stop Timer";
document.body.append(stopButton);

const timerText = document.createElement("p")
timerText.textContent = 0;
document.body.append(timerText);
let time = timerText.textContent;
let timer;

startButton.addEventListener("click", () => {
   timer = setInterval(() => {
      time++;
      timerText.textContent = time;
   }, 1000);
})

stopButton.addEventListener("click", () => {
   clearInterval(timer)
})
