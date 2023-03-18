
// який після натискання кнопки «Start», раз на секунду
//змінює колір фону < body > на випадкове значення
//використовуючи інлайн стиль. Натисканням на кнопку
//«Stop» зміна кольору фону повинна зупинятися.

//refs.startBtn.addEventListener(`clic`)

//})
//refs.stopBtn.addEventListener(`clic`, () => {
//timer.stop();
//})
//Враховуй, що на кнопку «Start» можна натиснути 
//нескінченну кількість разів.Зроби так, щоб доки зміна теми запущена, 
//кнопка «Start» була неактивною(disabled).

//function btnChangeColor() {
//}
//function btnStopChangeColor() {}
 //nIntervId = null;

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener("click", () => {
  
  
  timerId = setInterval(() => {
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  
  clearInterval(timerId);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}