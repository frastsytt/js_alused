// tsükkel

const array = [1, 2, 3, 4, 5, 6];
const cars = ['ford', 'opel', 'audi', 'bmw']

/*
for (let i = 0; i < 11; i++){
	if(i % 2 == 0){
		console.log(i);
	}
};
*/
/*
for (let j = 0; j <= 10; j++){
	console.log(j);
	if(j <=== 5){
		break;
	}
};

*/
let i = 0
// while 

/*
while(i <= 10){
	console.log(i);
	i += 2;
}
*/

/*
do{
	console.log(i);
	i++;
} while(i <= 10);
*/


/*
for (let i = 0; i < cars.length; i++){
	console.log(cars[i]);
}
*/

cars.forEach(function(car, index, array){
	console.log(`${index} - ${car}`);
	if(index == (cars.length - 1)){
		console.log(array);
	}
});
