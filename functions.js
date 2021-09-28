// declaration 

function greeting(firstname, lastname){
	if(typeof firstname === 'undefined'){
		firstname = 'Juss';
	}
	if(typeof lastname === 'undefined'){
		lastname = 'Kaalikas';
	}
	return (`Hello, ${firstname} ${lastname}.`);
};

// using

console.log(greeting('Anne', 'Pildiraamat'));

// fn defineeritud nagu const

const square = function(number){
	return number ** 2;
};

console.log(square(5));

// fn that initializes itself

(function(name){
	console.log(`Hello, ${name}.`)
})('Peeter');

// fn inside object

const todoList = {
	add: function(task){
		console.log(`${task} is added.`);
	},
	edit: function(oldtask, newtask){
		console.log(`${oldtask} has been replaced with ${newtask}.`);
	},
	remove: function(task){
		console.log(`${task} has been removed.`);
	},
	listname: 'Harjutuste nimekiri'
};

todoList.add('Study JS');
todoList.edit('Prügi väljaviimine', 'Poes käimine');
todoList.remove('Haikala püüdmine');
console.log(todoList.listname);