
const decrementBnEl = document.querySelector('[data-action="decrement"]');
const incrementBnEl = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

decrementBnEl.addEventListener('click', () => {
   
    counterValue -= 1;
    counter.textContent = counterValue;
});

incrementBnEl.addEventListener('click', () => {
   
    counterValue += 1;
    counter.textContent = counterValue;
});








