
const decrementBnEl = document.querySelector('[data-action="decrement"]');
const incrementBnEl = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

const addValueClick = (event) => {

    console.log(event.currentTarget);
    counterValue -= 1;
    counter.textContent = counterValue;
};

const removeValueClick = event => {

    console.log(event.currentTarget);
    counterValue += 1;
    counter.textContent = counterValue;
};



decrementBnEl.addEventListener('click', addValueClick);      
incrementBnEl.addEventListener('click', removeValueClick);




