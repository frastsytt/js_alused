/*
let color = 'yeehaw';

switch(color){
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Attention!');
		break;
	default:
		console.log('This color is not allowed');
		break;
};
*/

let day = new Date();
console.log(typeof day.getDay());

switch(day.getDay()){
	case 1:
		console.log('Esmaspäev');
		break;
	case 2:
		console.log('Teisipäev');
		break;
	case 3:
		console.log('Kolmapäev');
		break;
	case 4:
		console.log('Neljapäev');
		break;
	case 5:
		console.log('Reede');
		break;
	case 6:
		console.log('Laupäev');
		break;
	case 0:
		console.log('Pühapäev');
		break;
	default:
		console.log('Midagi on tuksis, ei leia päeva');
		break;
}
