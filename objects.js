// objects
const person = {
	firstname: 'Kadi',
	lastname: 'Tammsaar',
	age: 25,
	mail: 'kadi.tamm@gmail.com',
	hobbies: ['music', 'sport'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa',
		house_number: 24
	},
	getBirthdayYear: function(age){
		return new Date().getFullYear() - this.age;
	}
};

let val;



val = person.firstname;
val = person['lastname'];
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthdayYear();


console.log(person);
console.log(typeof person);

console.log(val);