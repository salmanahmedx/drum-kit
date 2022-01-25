'use strict';
let buttonEl = document.querySelectorAll(".drum");



//background images
// buttonEl[1].style.backgroundImage = "url('./images/kick.png')";
// buttonEl[2].style.backgroundImage = "url('./images/snare.png')";
// buttonEl[3].style.backgroundImage = "url('./images/tom1.png')";
// buttonEl[4].style.backgroundImage = "url('./images/tom2.png')";
// buttonEl[5].style.backgroundImage = "url('./images/tom3.png')";
// buttonEl[6].style.backgroundImage = "url('./images/tom4.png')";



//// crash


//background
buttonEl[0].style.backgroundImage = "url('./images/crash.png')";

let crashDrumSound;

//crash sound function
function crashSound() {
    crashDrumSound = new Audio(`./sounds/crash.mp3`)
    crashDrumSound.play()
}


//mouse click
buttonEl[0].addEventListener("click", function () {
    crashDrumSound = new Audio(`./sounds/crash.mp3`)
    crashDrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'w') {
        crashSound();
    }
})




//// kick-bass


//background
buttonEl[1].style.backgroundImage = "url('./images/kick.png')";

let kickBassSound;

//kick-bass sound function
function kickSound() {
    kickBassSound = new Audio(`./sounds/kick-bass.mp3`)
    kickBassSound.play()
}

//mouse click
buttonEl[1].addEventListener("click", function () {
    kickBassSound = new Audio(`./sounds/kick-bass.mp3`)
    kickBassSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'a') {
        kickSound();
    }
})

//// snare


//background
buttonEl[2].style.backgroundImage = "url('./images/snare.png')";

let snareDrumSound;

//Snare sound function
function snareSound() {
    snareDrumSound = new Audio(`./sounds/snare.mp3`)
    snareDrumSound.play()
}

//mouse click
buttonEl[2].addEventListener("click", function () {
    snareDrumSound = new Audio(`./sounds/snare.mp3`)
    snareDrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 's') {
        snareSound();
    }
})

//// tom-1


//background
buttonEl[3].style.backgroundImage = "url('./images/tom1.png')";

let tomDrumSound;

//crash sound function
function tom1Sound() {
    tomDrumSound = new Audio(`./sounds/tom-1.mp3`)
    tomDrumSound.play()
}

//mouse click
buttonEl[3].addEventListener("click", function () {
    tomDrumSound = new Audio(`./sounds/tom-1.mp3`)
    tomDrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'd') {
        tom1Sound();
    }
})

//// tom-2


//background
buttonEl[4].style.backgroundImage = "url('./images/tom2.png')";

let tom2DrumSound;

//crash sound function
function tom2Sound() {
    tom2DrumSound = new Audio(`./sounds/tom-2.mp3`)
    tom2DrumSound.play()
}

//mouse click
buttonEl[4].addEventListener("click", function () {
    tom2DrumSound = new Audio(`./sounds/tom-2.mp3`)
    tom2DrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'j') {
        tom2Sound();
    }
})

//// tom-3


//background
buttonEl[5].style.backgroundImage = "url('./images/tom3.png')";

let tom3DrumSound;

//crash sound function
function tom3Sound() {
    tom3DrumSound = new Audio(`./sounds/tom-3.mp3`)
    tom3DrumSound.play()
}

//mouse click
buttonEl[5].addEventListener("click", function () {
    tom3DrumSound = new Audio(`./sounds/tom-3.mp3`)
    tom3DrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'k') {
        tom3Sound();
    }
})


//// tom-4


//background
buttonEl[6].style.backgroundImage = "url('./images/tom4.png')";

let tom4DrumSound;

//crash sound function
function tom4Sound() {
    tom4DrumSound = new Audio(`./sounds/tom-4.mp3`)
    tom4DrumSound.play()
}

//mouse click
buttonEl[6].addEventListener("click", function () {
    tom4DrumSound = new Audio(`./sounds/tom-4.mp3`)
    tom4DrumSound.play()
})

//keyboard press
document.addEventListener("keydown", function (e) {
    if (e.key === 'l') {
        tom4Sound();
    }
})



