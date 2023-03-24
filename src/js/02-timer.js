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

flatpickr(refs.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0].getTime();
      refs.startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
});
const timer = {
  start() {
    intervalId = setInterval(() => {
      startBtn.disabled = true;
      calendar.disabled = true;
      currentDate = Date.now();
      const delta = selectedDate - currentDate;
      updateTimer(convertMs(delta));
      if (delta <= 1000) {
        this.stop();
        Report.failure('Timer stopped!');
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

function updateTimer({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} */
