// reset to top of page on refresh? currently failing!

$(document).ready(function () {
    $('html','body').scrollTop(0);

    $(window).on('load', function () {
        setTimeout(function () {
            $('html','body').scrollTop(0);
        }, 0);
    });
});

// simple randomise function
// use rate var to get some randomness happening with the bg grid colours

// how can I improve this to randomly colour any square (not pre-selected!) ??

// var rate = Math.random();

// var aqua = document.querySelector('#aqua');
// // set property of colour anim time to 'rate' + time
// aqua.style.setProperty('--animation-time', rate + 's');

// var peach = document.querySelector('#peach');
// peach.style.setProperty('--animation-time', rate + 's');
