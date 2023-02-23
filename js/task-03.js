const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// создаем функцию для создания одного объекта (li c вложенностями) и возвращаем
const makeListImageGalery = ({ url, alt, }) => {
  return `<li class="gallery-item"><img class="gallery-img" src=${url} alt=${alt} width="400" height="265"/>`;
};
  
console.log(images);

// ссылаемся на тег куда будем вставлять элементы
const listEl = document.querySelector('.gallery');

// перебираем массив и возвращаем результат работы функции (для добавления одного объекта) с аргументом поочередного элемента массива и распаршиваем его, т.к. приходит массив 
const listItemEl = images.map(el => makeListImageGalery(el))
  .join('');

// добавляем элементы из массива в код
listEl.insertAdjacentHTML('afterbegin', listItemEl);
console.log(listEl);


