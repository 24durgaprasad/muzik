// script.js

let songs = [
    { name: "Premalo", file: "1.mp3" },
    { name: "Rage of daaku", file: "2.mp3" },
    { name: "Kingdom Teaser", file: "3.mp3" },
    { name: "Godari gattu", file: "4.mp3" }
];

let currentsong = 0;
let audio = new Audio(songs[currentsong].file);

let playbtn = document.querySelector(".ri-play-fill");
let nextbtn = document.querySelector(".ri-skip-right-line");
let prevbtn = document.querySelector(".ri-skip-left-line");
let songNameDisplay = document.querySelector("#song-name");
let songCards = document.querySelectorAll(".card svg");

// Debug: Check if elements are found
console.log("Play button:", playbtn);
console.log("Next button:", nextbtn);
console.log("Prev button:", prevbtn);
console.log("Song name display:", songNameDisplay);

// Set initial song name
if (songNameDisplay) {
    songNameDisplay.textContent = songs[currentsong].name;
    console.log("Initial song set to:", songs[currentsong].name);
} else {
    console.log("Error: #song-name not found in HTML!");
}

// Play/Pause button
playbtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playbtn.classList.remove("ri-play-fill");
        playbtn.classList.add("ri-pause-fill");
    } else {
        audio.pause();
        playbtn.classList.remove("ri-pause-fill");
        playbtn.classList.add("ri-play-fill");
    }
});

// Next button
nextbtn.addEventListener("click", function() {
    if (currentsong < songs.length - 1) {
        currentsong = currentsong + 1;
        audio.src = songs[currentsong].file;
        audio.play();
        playbtn.classList.remove("ri-play-fill");
        playbtn.classList.add("ri-pause-fill");
        if (songNameDisplay) {
            songNameDisplay.textContent = songs[currentsong].name;
            console.log("Next song:", songs[currentsong].name);
        }
    }
});

// Previous button
prevbtn.addEventListener("click", function() {
    if (currentsong > 0) {
        currentsong = currentsong - 1;
        audio.src = songs[currentsong].file;
        audio.play();
        playbtn.classList.remove("ri-play-fill");
        playbtn.classList.add("ri-pause-fill");
        if (songNameDisplay) {
            songNameDisplay.textContent = songs[currentsong].name;
            console.log("Previous song:", songs[currentsong].name);
        }
    }
});

// Song cards play
songCards.forEach(function(card) {
    card.addEventListener("click", function() {
        currentsong = Number(card.parentElement.getAttribute("data-song"));
        audio.src = songs[currentsong].file;
        audio.play();
        playbtn.classList.remove("ri-play-fill");
        playbtn.classList.add("ri-pause-fill");
        if (songNameDisplay) {
            songNameDisplay.textContent = songs[currentsong].name;
            console.log("Card song:", songs[currentsong].name);
        }
    });
});