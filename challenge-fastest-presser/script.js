const startButton = document.getElementById("startButton");
let sCount = 0;
let lCount = 0;
const sCountElement = document.getElementById("sCount");
const lCountElement = document.getElementById("lCount");
const resultElement = document.getElementById("result");
let gameFinished = false;
let gameStarted = false;
let timeCounter = document.getElementById("timeCounter");

let intervalId;
document.addEventListener("keypress", function (event) {
  if (!gameFinished && gameStarted) {
    if (event.key === "s") {
      sCount++;
      sCountElement.innerHTML = "Player s: " + sCount;
    } else if (event.key === "l") {
      lCount++;
      lCountElement.innerHTML = "Player l: " + lCount;
    }
  }
});


startButton.addEventListener("click", function () {
  gameStarted = true;
  const time = document.getElementById("timeInput").value * 1000;

  if(time === '' || time <= 0) {
    alert("please choose a number between 1 to 60")
    document.getElementById("timeInput").value = "";
    return;
  }

  document.getElementById("timeInput").value = "";
  gameFinished = false;
  let timeLeft = time / 1000;
  timeCounter.innerHTML = "Time remaining: " + timeLeft;
  intervalId = setInterval(function () {
    timeLeft--;
    timeCounter.innerHTML = "Time remaining: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  setTimeout(function () {
    console.log("Time's up!");
    gameFinished = true;
    gameStarted = false;
    clearInterval(intervalId);
    if (sCount > lCount) {
      resultElement.innerHTML = "Player s wins!";
    } else if (lCount > sCount) {
      resultElement.innerHTML = "Player l wins!";
    } else {
      resultElement.innerHTML = "It's a tie!";
    }
  }, time);
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  sCount = 0;
  lCount = 0;
  sCountElement.innerHTML = "Player s: 0";
  lCountElement.innerHTML = "Player l: 0";
  resultElement.innerHTML = "who's going to win???";
  gameFinished = false;
  gameStarted = false;
  clearInterval(intervalId);
});