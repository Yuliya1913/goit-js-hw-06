const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();
   
    console.log(event.currentTarget);
    console.log(event.currentTarget.elements);
    
    const { elements: { email, password } } = event.currentTarget; 
    
    if (email.value === "" || password.value === "" ) {
        alert('Заполни все поля ввода');
        return;
    } else {
        // собираем значения в форму
        const formData = new FormData(event.currentTarget);
        console.log(formData);
        
        formData.forEach((value, name) => {
            console.log(`значение`, value);
            console.log(`имя`, name);
        })
    }

    event.currentTarget.reset();
}









