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

// es5
val = '<ul>' + '<li>' + name + '</li>' + '</ul>';
// es6
val = `
	<ul>
		<li>Eesnimi: ${name}</li>
		<li>Perekonnanimi: ${surname}</li>
		<li>Vanus: ${age}</li>
		<li>Huvid: ${tags}</li>
		<li>Pii: ${Math.PI}</li>
	</ul>
`; 

document.body.innerHTML = val;

console.log(val);
console.log(typeof val);

