
// JS accreditation: https://css-tricks.com/random-numbers-css/

var time = Math.random();

var aqua = document.querySelector('#aqua');
aqua.style.setProperty('--animation-time', time +'s');

var peach = document.querySelector('#peach');
peach.style.setProperty('--animation-time', time +'s');
