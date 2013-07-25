var SLIDE_WIDTH = 240;
var SLIDE_HEIGHT = 160;
var NUM_SLIDES = 10;

var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

// Have carousel rotate on its own
var start = document.getElementById('start');
var start = document.getElementById('stop');


carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2
next.onmouseover = function(event) {
  this.style.opacity = 1;
};

next.onmouseout = function(event){
  this.style.opacity = 0.5;
};

previous.onmouseover = function(event) {
  this.style.opacity = 1;
};

previous.onmouseout = function(event){
  this.style.opacity = 0.5;
};


// Create onclick events to advance the images
