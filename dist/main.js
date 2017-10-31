"use strict";

var content = [{
    "day": "0",
    "photo": "images/day-0.jpg",
    "label": "Dia chuvoso no Aeroporto do Rio"
}, {
    "day": "1",
    "photo": "images/day-1.jpg",
    "label": "Foto: Noite em Madrid - Paroquia de San Manuel e San Benito"
}, {
    "day": "2",
    "photo": "images/day-2.jpg",
    "label": "Foto: Templo de Debod - Madrid"
}, {
    "day": "3",
    "photo": "images/day-3.jpg",
    "label": "Foto: Estación Santa Justa - Sevilla"
}, {
    "day": "4",
    "photo": "images/day-4.jpg",
    "label": "Foto: Gato brincando com mini drone - Niebla"
}, {
    "day": "5",
    "photo": "images/day-5.jpg",
    "label": "Foto: Navio no Canal Afonso XIII - Sevilla"
}, {
    "day": "6",
    "photo": "images/day-6.jpg",
    "label": "Foto: Las Setas - Sevilla"
}, {
    "day": "7",
    "photo": "images/day-7.jpg",
    "label": "Foto: Torre Schindler - Sevilla"
}];

// LET LAST ITEM INSERT IN CONTENT TO TRANSFORM THIS IN SELECTED LABEL AT HTML TEMPLATE
var lastItemContent = content.length - 1;

var actualToday = content.length;

// TRY IF YOUR BROWSER SUPPORT HTML TEMPLATE CHECKING THE "CONTENT" ATTRIBUTE AT TEMPLATE ELEMENT
if ('content' in document.createElement('template')) {

    var label = document.querySelector('#photoLabel'),
        p = label.content.querySelector('.label-photo');
    p.textContent = content[lastItemContent].label;

    document.querySelector('.label-photo').appendChild(p);
}
//IF HTML TEMPLATE IS NOT SUPORTED USE THIS
else {

        // ALTERNATIVE METHOD TO INSERT LABEL AT PAGE
        document.querySelector('.label-photo').textContent = content[lastItemContent].label;
    }

// INSERT LAST NODE PHOTO VALUE IN BODY BACKGROUND
document.body.style.backgroundImage = "url(" + content[lastItemContent].photo + ")";

// REMOVE TEMPLATE FROM PAGE AFTER LOAD
function removeTemplate() {

    document.querySelector('template').remove();
}

window.onload = removeTemplate;
"use strict";

/* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
var targetDate = new Date("2017/12/13 19:35:00");

// Other date related variables
var days = void 0;
var hrs = void 0;
var min = void 0;
var sec = void 0;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  // Calculate time until launch date
  timeToLaunch();
  // Transition the current countdown from 0
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer, 1001);
});

/* --------------------------
 * FIGURE OUT THE AMOUNT OF
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
var timeToLaunch = function timeToLaunch() {
  // Get the current date
  var currentDate = new Date();

  // Find the difference between dates
  var diff = (currentDate - targetDate) / 1000;
  diff = Math.abs(Math.floor(diff));

  // Check number of days until target
  days = Math.floor(diff / (24 * 60 * 60));
  sec = diff - days * 24 * 60 * 60;

  // Check number of hours until target
  hrs = Math.floor(sec / (60 * 60));
  sec = sec - hrs * 60 * 60;

  // Check number of minutes until target
  min = Math.floor(sec / 60);
  sec = sec - min * 60;
};

/* --------------------------
 * DISPLAY THE CURRENT
   COUNT TO LAUNCH
 * -------------------------- */
var countDownTimer = function countDownTimer() {

  // Figure out the time to launch
  timeToLaunch();

  // Write to countdown component
  document.querySelector("#days .number").textContent = days;
  document.querySelector("#hours .number").textContent = hrs;
  document.querySelector("#minutes .number").textContent = min;
  document.querySelector("#seconds .number").textContent = sec;

  // Repeat the check every second
  setTimeout(countDownTimer, 1000);
};

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
var numberTransition = function numberTransition(id, endPoint) {
  var initial_number = 0;

  var interval = setInterval(function () {
    if (initial_number < endPoint) {
      initial_number++;
      document.querySelector(id).textContent = initial_number;
    } else if (initial_number === endPoint) {
      clearInterval(interval);
    };
  }, 10);
};
'use strict';

function containsSelector(selector) {
    return document.querySelector(selector) != null;
}

// INITIATE SLIDE PHOTOS FUNCTIONALITY
if (content.length > 1) {

    var nextPhoto = document.createElement('button');

    nextPhoto.classList.add('photo-next');

    nextPhoto.innerHTML = ">";

    var prevPhoto = document.createElement('button');

    prevPhoto.classList.add('photo-prev');

    prevPhoto.innerHTML = "<";

    document.body.appendChild(prevPhoto);
}

if (containsSelector('.photo-prev')) {
    prevPhoto.addEventListener('click', function () {

        var dayShowed = actualToday -= 1;

        document.body.style.backgroundImage = "url(" + content[dayShowed - 1].photo + ")";

        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;

        document.body.appendChild(nextPhoto);

        if (dayShowed == 1) {

            prevPhoto.remove();
        }
    });

    nextPhoto.addEventListener('click', function () {

        var dayShowed = actualToday += 1;

        document.body.style.backgroundImage = "url(" + content[dayShowed - 1].photo + ")";

        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;

        document.body.appendChild(prevPhoto);

        if (dayShowed >= content.length) {

            nextPhoto.remove();
        }
    });
}
