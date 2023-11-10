const point = document.getElementById("point");
const startButton = document.getElementById("startButton");

let gameInterval;
let gameIntervalSpeed = 500;
let gameStart

startButton.onclick = () => {
  startButton.style.display = "none";
  setPointOnClick(point);
  setGameInterval(point);
  gameStart = performance.now()
};

const moveElement = (element, x, y) => {
  element.style.top = y + "px";
  element.style.left = x + "px";
};

const setPointOnClick = (element) => {
  element.onclick = () => {
   let gameEnd = performance.now();
      let time = gameEnd - gameStart;
      showTime.innerText = `Time: ${time}ms`
      gameStart = gameEnd;
       element.innerText++;
    if (gameIntervalSpeed > 200) {
      gameIntervalSpeed -= 10;
      setGameInterval(element);
      
    }

    moveElement(
      element,
      getRandomNumber(0, window.innerWidth - 80),
      getRandomNumber(0, window.innerHeight - 80)
    );
  };
};

const setGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(
      element,
      getRandomNumber(0, window.innerWidth - 80),
      getRandomNumber(0, window.innerHeight - 80)
    );
  }, gameIntervalSpeed);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
