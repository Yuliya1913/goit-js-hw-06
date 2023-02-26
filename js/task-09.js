function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('.change-color');
const bodyEl = buttonEl.parentElement.parentElement;
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
 
  // Запишем в переменную результат работы функции по поиску случайного числа 
  const color = getRandomHexColor();
  console.log(color);

  bodyEl.style.backgroundColor = `${color}`;
  spanEl.textContent = `${color}`;
}


