
const inputEl = document.querySelector('#name-input');
const spanTitleEl = document.querySelector('#name-output');

console.log(inputEl);

inputEl.addEventListener('input', (event) => {

    console.log(event);

    spanTitleEl.textContent = event.currentTarget.value;
});

