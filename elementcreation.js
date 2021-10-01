let val;
const ul = document.querySelector('ul');

const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode('Study JS element creation'));

ul.appendChild(li);

console.log(li);