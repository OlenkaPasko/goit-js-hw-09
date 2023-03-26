import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};
refs.form.addEventListener('click',);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  });
  }
/*Напиши скрипт, який на момент сабміту 
форми викликає функцію createPromise(position, delay) 
стільки разів, скільки ввели в поле amount. 
Під час кожного виклику передай їй номер промісу (position), 
що створюється, і затримку, 
враховуючи першу затримку (delay), 
введену користувачем, і крок (step).

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

*/