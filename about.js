console.log("hello world");

let rando1 = document.querySelector('#rando')
let picture = document.querySelector('#rubberduck');


function handleSubmit(evt) {
	evt.preventDefault();
	console.log('is this working')
	
	alert('form submit successfully');
}

function handleMouseOver(evt){
	evt.preventDefault();
	alert(' you look really good today')
}



rando1.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', handleMouseOver)
