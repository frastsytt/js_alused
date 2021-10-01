let val;

const list = document.querySelector('ul');
const listItem = document.querySelector('li.collection-item');

//  list.children[2].children[0].style.backgroundColor = 'beige';
val = list.children[2].children[0].style;
val.background = 'black';


// list.children[1].textContent = 'Study XML';
// list.children[0].children[2] = style.color = 'blue';



console.log(list);
console.log(listItem);
console.log(val);