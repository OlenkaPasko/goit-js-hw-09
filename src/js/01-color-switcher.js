

const refs = {
startBtn: document.querySelector('button[data-start]'),
stopBtn: document.querySelector('button[data-stop]')
} 
// який після натискання кнопки «Start», раз на секунду 
//змінює колір фону < body > на випадкове значення
//використовуючи інлайн стиль. Натисканням на кнопку 
//«Stop» зміна кольору фону повинна зупинятися.

refs.startBtn.addEventListener(`clic`, () => {
    timer.start();
})
refs.stopBtn.addEventListener(`clic`, () => {
    timer.stop();
})


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
