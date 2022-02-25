console.log("hello world");

let rando= document.querySelector('randomcomp')
let picture = document.querySelector('img');


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit successfully');
}

function handleMouseOver(){
	alert(' you look really good today')
}



form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', handleMouseOver)
