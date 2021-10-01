let value;

value = document.getElementById('task-title');

document.getElementById('task-title').style.background = '#4F4F4F';
document.getElementById('task-title').style.padding = '15px';
document.getElementById('task-title').textContent = 'My tasks';
document.getElementById('task-title').innerText = 'My favorite tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red;">My Tasks</span>';

value = document.querySelector('h4');
value = document.querySelector('#task-title');
value = document.querySelector('.btn');
value = document.querySelector('.collection-item:nth-child(odd)');



console.log(value);