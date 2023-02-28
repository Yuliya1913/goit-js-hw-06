
const inputEl = document.querySelector('#name-input');
const spanTitleEl = document.querySelector('#name-output');

console.log(inputEl);

inputEl.addEventListener('input', (event) => {

    console.log(event);
    event.currentTarget.value.trim() === '' ? spanTitleEl.textContent = 'Anonymous' : spanTitleEl.textContent = event.currentTarget.value;

    
});

inputEl.addEventListener('blur', (event) => {
    event.target.value = '';
    spanTitleEl.textContent = 'Anonymous';
})

