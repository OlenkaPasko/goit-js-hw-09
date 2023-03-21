import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

class Timer {
  #id = null;
  constructor(date, node) {
    this.date = date;
    this.node = node;

    start = () => {
      if (this.isActive) return;
      const timer = setInterval(() => {
        this.#id = timer;
        //get distance
        //format distanse
        //add distanse to node
      }, 1000);
    };

    stop = () => {
      if (this.isActive) {
        clearInterval(this.#id);
        this.#id = null;
      }
    };

    isActive = () => !!this.#id; //нічого не приймає;якщо!this.id-то не є!this.id;
    //якщо ставиться ще одне "не-!!"!!this.#id.Один знак оклику перетворює
    //рядок у булеве значення і повертає зворотнє.Одне "не"повертає true.
    //Ще один знак оклику зробить напавки.Два знаки оклику - це подвійне НЕ.Якщо якась змінна не булева,а пертворювати потрібно в буль.
    //
  }
  #getDistance = () => {
    const currentDate = Date.now().getTime();
  }
}

/*const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};*/
/*Приклад з додаткових матеріалів,модуль 9,урок 1,  */
//кількість зворотнього відліку
/*const timer = targetDate => {
    setInterval(() => {
    renderTime(+new Date(targetDate));
},1000);
};

const renderTime = (string) => {
    document.querySelector('datetime-picker').innerText = string;
}

timer(new Date('2023/06/05'));*/

/*function convertMs(ms) {
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