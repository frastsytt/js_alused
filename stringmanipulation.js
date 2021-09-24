// string conversions

const name = 'Kadi';
const surname = 'Tamm';
const age = 20;
const text = 'Tere, olen Kadi!';
const tags = 'arendus, veeb';

let val;

// concatenate

val = name;
val += ' ' + surname;
val = text + ' Minu tegevusalad on ' + tags + '.';

// escaping
val = '\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\''

// uppercase and lowercase
val = name.toUpperCase();
val = name.toLowerCase();
val = surname.slice(1, 3);
val = surname.slice(-2);
val = surname.indexOf('a');
val = surname.lastIndexOf('m');
val = surname.charAt(surname.length - 1);
val = tags.split(', ');
val = surname.substring(1, 3);

console.log(val);
console.log(typeof val);

