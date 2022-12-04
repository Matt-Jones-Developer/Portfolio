
// JS accreditation: https://css-tricks.com/random-numbers-css/

const rate = Math.random();

var aqua = document.querySelector('#aqua');
aqua.style.setProperty('--animation-time', rate +'s');

var peach = document.querySelector('#peach');
peach.style.setProperty('--animation-time', rate +'s');
