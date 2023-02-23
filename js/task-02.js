const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const catalogEl = document.querySelector('#ingredients');

const makeFun = array => {
  return array.map(el => {

    const listEl = document.createElement('li');
    console.log(listEl);
    listEl.textContent = el;
    listEl.classList.add('item');

    return listEl;
  });


};

const elements = makeFun(ingredients);
console.log(elements);
catalogEl.append(...elements);
console.log(catalogEl)









