const listEl = document.querySelectorAll('.item');
console.log(listEl.length);

const listItem = listEl.forEach(el => {
    
const headingEl = el.firstElementChild;
headingEl.textContent
console.log(headingEl.textContent);

const nestedList = el.children[1].querySelectorAll('li').length;
console.log(nestedList);
})

