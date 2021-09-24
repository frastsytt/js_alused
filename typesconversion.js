// tüübiteisendused

// number -> string

let val;
val = String(555);
val = String(4+6);
val = String(4.6);

console.log(val);
console.log(typeof val);

// bool -> string
val = true;
val = false;
val = String(true);


console.log(val);
console.log(typeof val);

// obj -> string
val = new Date();
val = String(new Date());

console.log(val);
console.log(typeof val);

// array -> string
val = [1, 2, 3, 4]
val = String([1, 2, 3, 4])
console.log(val);
console.log(typeof val);

// toString();
val = (5).toString();
console.log(val);
console.log(typeof val);

// str -> number;
val = Number('5');
console.log(val);
console.log(typeof val);

// str -> number;
val = Number('5.7');
console.log(val);
console.log(typeof val);

// bool -> number;
val = Number(true);
console.log(val);
console.log(typeof val);

// null -> number;
val = Number(null);
console.log(val);
console.log(typeof val);

// null -> number;
val = Number([1, 2, 3]);
console.log(val);
console.log(typeof val);