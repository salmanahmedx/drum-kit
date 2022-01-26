'use strict';


let numberOfDrumBeats = document.querySelectorAll(".drum").length
let i;
let drumSound;

// // CLick

for (i = 0; i < numberOfDrumBeats; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML; //for example: w

        drumSoundMain(buttonInnerHTML); //drumSoundMain(w)
        animation(buttonInnerHTML); //animation(w)
    })
}

// // Keypress

document.addEventListener("keypress", function (event) { //function(what is causing the event/ function > keypress)
    drumSoundMain(event.key); // which key caused the keypress > keypress.key > w
    animation(event.key);
})

//// Functions

function drumSoundMain(key) {
    switch (key) {
        //if key > w === case > w then play this
        case "w":

            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "a":

            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;

        case "s":

            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case "d":

            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case "j":

            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "k":

            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case "l":

            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default:
            break;
    }
}

function animation(key) {
    let activeButton = document.querySelector("." + key); //document.querySelector(".w")
    activeButton.classList.add("pressed"); //.pressed class added with .w

    // timeout 
    setTimeout(function () { //what i want to happen at timeout > function
        activeButton.classList.remove("pressed"); // removed class .pressed from .w
    }, 100) //when i want the timeout > 0.1s > 100ms
}