const colorbtn = document.querySelector('#color')
const placebtn = document.querySelector('#place')
const ritualbtn = document.querySelector('#ritual')

function color(){
    alert('my favorite color is pink')

}

function place(){
    alert ('my favorite place is with you')
}

function ritual(){
    alert('going to the gym, sticking to my goals ')
}

colorbtn.addEventListener('click', color);
placebtn.addEventListener('click', place);
ritualbtn.addEventListener('click', ritual);
// followed jeddy for the bottom part. 
const profileBtns = document.querySelectorAll("button");

profileBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let favorite = "";
        switch (event.target.id) {
            case "color":
                favorite = "Blue";
                break;
            case "place":
                favorite = "My bed";
                break;
            case "ritual":
                favorite = "Sleeping";
                break;
        }

        alert(`My favorite ${event.target.id} is ${favorite}`);
    })
})