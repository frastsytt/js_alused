let value;


value = document.querySelectorAll('li');


document.querySelectorAll('li').forEach(function(element, index){
	if(index % 2 == 0){
			element.style.backgroundColor = '#a9a9a9';
	} else{
		element.style.backgroundColor = 'white';
	}
});

for(let i = 0; i < value.length; i++){
	if(i % 2 == 0){
		document.querySelectorAll('li')[i].style.background = '#a5a5a5';
	} else{
		document.querySelectorAll('li')[i].style.background = 'beige';
	}
};





// console.log(value);