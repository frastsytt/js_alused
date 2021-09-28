// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

let day = new Date();


switch(day.getDay()){
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 0:
		console.log('Sunday');
		break;
	default:
		console.log('Error!');
		break;
};




console.log(day.getHours());

