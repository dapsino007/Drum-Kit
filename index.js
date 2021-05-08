var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

var selectButton = document.querySelectorAll(".drum");

// Drum listening for clicks
for(i=0; i<selectButton.length; i++){
  selectButton[i].addEventListener("click", function (){
    playSound(this.innerHTML);
    animateDrum(this.innerHTML);
  })
}

//Drum listening to keyboard
document.addEventListener("keypress", function(event){
  playSound(event.key);
  animateDrum(event.key);
})

//add and time out class .pressed"
function animateDrum(letterInput){
  document.querySelector("." + letterInput).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + letterInput).classList.remove("pressed");
  }, 100);
}

// Function linking buttons to drum sounds
function playSound(letter){
  switch (letter){
    case "a":
    snare.play();
    break;

    case "s":
    kickBass.play();
    break;

    case "d":
    tom1.play();
    break;

    case "f":
    tom2.play();
    break;

    case "j":
    tom3.play();
    break;

    case "k":
    tom4.play();
    break;

    case "l":
    crash.play();
    break;

    default:
    console.log(this.innerHTML);
  }

}
