import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('data-days'),
  dataHours: document.querySelector('data-hours'),
  dataMinutes: document.querySelector('data-minute'),
  dataSeconds: document.querySelector('data-seconds'),
};

refs.startBtn.disabled = true;

let intervalId = null;
let selectedDate = null;
let currentDate = null;

/*Метод onClose() з об'єкта параметрів викликається 
щоразу під час закриття елемента інтерфейсу, 
який створює flatpickr. Саме у ньому варто обробляти дату, 
обрану користувачем. Параметр selectedDates - 
це масив обраних дат, тому ми беремо перший елемент.

Якщо користувач вибрав дату в минулому, покажи window.alert()
 з текстом "Please choose a date in the future".
*/
//обробка дати:
//масив обраних дат
//Метод getTime() повертає числове значення цієї дати 
// Запис window.alert() зайвий, пишемо просто alert() або console.log()

flatpickr(refs.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    if (selectedDates[0].getTime < Date.now()) {
      alert('Please choose a date in the future');
    }
    else {
      selectedDate = selectedDates[0].getTime();
      refs.startBtn.disabled = false;
    }
  },
});
/*Якщо користувач вибрав валідну дату (в майбутньому), 
кнопка «Start» стає активною.
Кнопка «Start» повинна бути неактивною доти, 
доки користувач не вибрав дату в майбутньому.
Натисканням на кнопку «Start» починається відлік часу 
до обраної дати з моменту натискання.*/
  const timer = {
  start() {
    intervalId = setInterval(() => {
      startBtn.disabled = true;
      calendar.disabled = true;
      currentDate = Date.now();
      const delta = selectedDate - currentDate;

      if (delta <= 1000) {
        this.stop();
        alert('Timer stopped!');
        return;
      }
    }, 1000);
  },

  stop() {
    clearInterval(intervalId);
    this.intervalId = null;
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} */