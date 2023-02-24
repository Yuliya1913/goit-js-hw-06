
const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', (event) => {

    // выводим количество введенных в инпут символов
    console.log(event.currentTarget.value.length);

    // выводим значение дата - атрибута и т.к. приходит строка, приводим ее к числу
    console.log(Number(textInputEl.dataset.length));

    if (Number(textInputEl.dataset.length) === event.currentTarget.value.length) {
        
        textInputEl.classList.add('valid');
        textInputEl.classList.remove('invalid');
       
    } else {
        textInputEl.classList.add('invalid');
        textInputEl.classList.remove('valid');
    }
    
});
   