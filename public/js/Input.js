// Mouse Input
var mouseX;
var mouseY;
var mouseDown = false;

const DELETE = 8;
const SPACE = 32;
const ENTER = 13;
const UP = 38
const RIGHT = 39;
const DOWN = 40;
const LEFT = 37;
const G = 71;
const Y = 89;
const B = 66;
const ESC = 27;
var escHeld = false;


function keyPressed(evt){ 
  // handleScenes(evt.keyCode);
  // evt.preventDefault();
}

function keyReleased(evt){ 
  // if(evt.keyCode == ESC){
  //   escHeld = false;
  // }
  
  // evt.preventDefault();
}

document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyReleased)
document.addEventListener('mousemove', updateMousePos);

document.addEventListener('touchstart', setMouseDown, { passive: false});
document.addEventListener('touchend', setMouseUp, { passive: false});
document.addEventListener('touchmove', touchMove, { passive: false});

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = (evt.clientX - rect.left) - canvas.width/2;
  mouseY = (evt.clientY - rect.top) - canvas.height/2;
}

function setMouseDown(evt){}
function setMouseUp(evt){}
function touchMove(evt){}
