// if
/*
if(condition) {
	// tegevused if puhul
} 
else {
	// tegevused muul juhul
}
*/


// võrdub ==
// võrdub ja tüübikontroll ===
// ei võrdu !=
// ei võrdu ja tüübikontroll !==

let testID;
const id = 100;

if(id === 100){
	console.log('OK');
} else {
	console.log('Ei ole OK :(!');
};

if(typeof testID !== undefined){
	testID = 'I\'m no longer undefined';
	console.log(testID);
};

if(id > 100){
	conslone.log('id is bigger than 100');
} else {
	console.log('id is smaller or equal than 100');
};

if(id !== 90 == false){
	console.log('number is not 90');
} else if(id >= 100){
	console.log('number is bigger than 100');
} else {
	console.log('idk what this number is ');
}

// and is &&
// or is ||

let name = 'Kadi';
let age = 20;

if(age < 18 || age > 80){
	console.log(`${name} ei saa osaleda maratonis`);
} else {
	console.log(`${name} saab osaleda maratonis`);
}

// ternery operator
// ? - läheb tööle kui true
// : läheb tööle "else"

console.log(id === 100 ? 'OK' : 'NOT OK');

if(id == 100)
	console.log('OKOOK');
else
	console.log('NOT OKOK');