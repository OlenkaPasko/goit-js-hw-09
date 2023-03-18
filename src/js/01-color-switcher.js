const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
refs.startBtn.addEventListener(`clic`);
refs.stopBtn.addEventListener(`clic`);

// який після натискання кнопки «Start», раз на секунду
//змінює колір фону < body > на випадкове значення
//використовуючи інлайн стиль. Натисканням на кнопку
//«Stop» зміна кольору фону повинна зупинятися.

//refs.startBtn.addEventListener(`clic`)

//})
//refs.stopBtn.addEventListener(`clic`, () => {
//timer.stop();
//})
//приклад з mdn
let nIntervId;

function btnChangeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function btnStartChangeColor() {
  const oElem = document.getElementById('my_box');
  oElem.className = oElem.className === 'go' ? 'stop' : 'go';
}

function btnStopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
}); */
