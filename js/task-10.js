function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreatEl = document.querySelector('[data-create');
console.log(buttonCreatEl);
const buttonDestroyEl = document.querySelector('[data-destroy');
console.log(buttonDestroyEl);
const inputEl = buttonCreatEl.previousElementSibling;
console.log(inputEl);
const divEl = document.querySelector('#boxes');
console.log(divEl);

buttonCreatEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', () => {

  divEl.innerHTML = '';
})

function createBoxes() {

  // найдем введенное число пользователем в инпуте
  let amount = inputEl.value;
  console.log(amount);

  // создадим пустой массив для пуша созданных дивов
  let array = [];

  let height = 30;
  let width = 30;

  // перебираем введенное значение и создаем div
  for (let i = 0; i < amount; i += 1) {
  
    const boxDiv = document.createElement('div');
    console.log(boxDiv);
    boxDiv.style.backgroundColor = `${getRandomHexColor()}`;
    boxDiv.style.height = `${height}px`;
    boxDiv.style.width = `${width}px`;
    
    height += 10;
    width += 10;
    
    array.push(boxDiv);
  }
  divEl.append(...array);
 }
console.log(divEl);

inputEl.addEventListener('focus', (event) => {
  event.currentTarget.value = "";
})