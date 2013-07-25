var SLIDE_WIDTH = 240;
var SLIDE_HEIGHT = 160;
var NUM_SLIDES = 10;

var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

// Have carousel rotate on its own
var start = document.getElementById('start');
var stop = document.getElementById('stop');


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
next.onclick = function(event) {
  if (position === -1224) {
    position = 0;
    carousel.style.marginLeft = position + 'px';
  } else {
    posiiton += -612;
    carousel.style.marginLeft = position + 'px'
  }
};

previous.onclick = function(event) {
  if (position === 0) {
    position = -1224;
    carousel.style.marginLeft = position + 'px';
  } else {
    posiiton += 612;
    carousel.style.marginLeft = position + 'px'
  }
};

var currentTranslation = -SLIDE_WIDTH;

carousel.style.webkitTransition = '-webkit-transform 1200ms';
  setInterval(_____, 2000);

function init() {
  var carousel = document.getElementById('carousel');
  carousel.style.webkitTransition = '-webkit-transform 1200ms';
  setInterval(doIt, 2000)
  // getFlickrData();
}
