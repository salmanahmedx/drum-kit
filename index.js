'use strict';


let numberOfDrumBeats = document.querySelectorAll(".drum").length
let i;
let drumSound;

for (i = 0; i < numberOfDrumBeats; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        drumSoundMain(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    drumSoundMain(event.key);
})
function drumSoundMain(key) {
    switch (key) {

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