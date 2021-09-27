// time 

const day = new Date();

let val;

val = day.getMonth(); // jaanuar = 0
val = day.getDate();
val = day.getDay();
val = day.getFullYear();
val = day.getTime();
birthday = new Date('10/02/2021 19:20:22');
birthday.setMonth(2);
birthday.setDate(15);
birthday.setFullYear(2020);
birthday.setHours(17);
birthday.setMinutes(30);
birthday.setSeconds(15);


console.log(day);
console.log(val);
console.log(birthday);