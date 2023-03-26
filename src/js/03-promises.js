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
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
     }, delay);
  });
 }
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

/*const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

Доповни код функції createPromise таким чином, 
щоб вона повертала один проміс, який виконується 
або відхиляється через delay часу. 
Значенням промісу повинен бути об'єкт, 
в якому будуть властивості position 
і delay зі значеннями однойменних параметрів. 
Використовуй початковий код функції для вибору того,
 що потрібно зробити з промісом - виконати або відхилити.*/