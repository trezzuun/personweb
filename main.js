// FUSING TEXT EFFECT
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const texts = ["CLICK", "ANYWHERE", "TO", "ENTER"];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();
// END OF FUSING TEXT EFFECT

// Function to handle click event and hide the welcome screen
function handleClick() {
  document.getElementById("welcomeScreen").style.display = "none"; // Hide the welcome screen
  document.getElementById("websiteContent").style.display = "block"; // Show the website content
}

// Attach click event listener to the whole document
document.addEventListener("click", handleClick);

/*
// STOP PEOPLE FROM STEALING
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
};*/
// END OF WELCOME SCREEN

//DARK MODE/LIGHT MODE
document.addEventListener("DOMContentLoaded", function () {
  const toggleModeButton = document.getElementById("toggleMode");
  const body = document.body;

  toggleModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });
});

//BIO TYPEWRITER EFFECT
const bioTexts = [
  "I take the risk.",
  "Best cheapest GFX .gg/garxu",
  "Best Bot/MC host .gg/sentinelhost.",
];

let bioIndex = 0;
let charIndex = 0;
const bioTextElement = document.getElementById("bio-text");

function typeWriter() {
  if (charIndex < bioTexts[bioIndex].length) {
    bioTextElement.innerHTML += bioTexts[bioIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    bioTextElement.innerHTML = bioTexts[bioIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    bioIndex = (bioIndex + 1) % bioTexts.length;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();

// Add this function to your existing script.js
function toggleMusic() {
  var audio = document.getElementById("background-music");
  var playIcon = document.getElementById("playIcon");
  var pauseIcon = document.getElementById("pauseIcon");

  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  } else {
    audio.pause();
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  }
}