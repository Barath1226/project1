const container = document.querySelector(".container");
const startButton = document.querySelector(".startButton");

const firefly = document.createElement("img");
firefly.setAttribute("class", "firefly");
firefly.setAttribute("src", "./Firefly.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  firefly.style.position = "absolute";
  firefly.style.top = randTop + "px";
  firefly.style.left = randLeft + "px";
}, 1500);

let score = 0;

startButton.addEventListener("click", () => {
  container.appendChild(firefly);

  startButton.innerText = "SCORE: " + score;
  var seconds=document.getElementById("Countdown").textContent;
  var Countdown=setInterval(function() {
    seconds--;
    document.getElementById("Countdown").textContent=seconds;
    if(seconds==0) clearInterval(Countdown);
    if(seconds===0){alert("Timeout Your Score ->"+score);}
},1000);
});

window.addEventListener("click", (e) => {
  
  if (e.target === firefly) score++;

  startButton.innerText = "SCORE: " + score;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
