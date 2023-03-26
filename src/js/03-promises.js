import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
/*Напиши скрипт, який на момент сабміту 
форми викликає функцію createPromise(position, delay) 
стільки разів, скільки ввели в поле amount. 
Під час кожного виклику передай їй номер промісу (position), 
що створюється, і затримку, 
враховуючи першу затримку (delay), 
введену користувачем, і крок (step).*/