Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

// massiivid

const numbers = [42, 22, 244, 54, 87, 12, 1];
const numbers2 = new Array(2, 3, 4);
const fruits = ['apple', 'onion', 'audi'];
const mixed = ['apple', 2, true, undefined, null, {a:1, b:2}, new Date()];

let val;

val = mixed.length; // massiivi pikkus
val = Array.isArray(mixed);  // kas on massiiv
val = mixed[5]; // kindel väärtus massiivist


mixed[4] = 4; // asendamine
val = mixed;

// mixed.push(250); // lisamine
// mixed.unshift(20); // esimeseks lisamine
// mixed.pop(); // lõpust eemaldamine
// mixed.shift(); // algusest eemaldamine
// val = mixed.indexOf(true); // mingi massiivi elemendi indeksi tagastamine
// val = mixed.splice(3, 5); // lõikamine mingist indekist...mitu indeksit

val = mixed.sort(); // abc järjestik


// val = numbers.sort(function(x, y) {
//	return x - y;
// });

numbers.splice(1, false, 2000);
val = numbers;

console.log(val);
console.log(typeof val);