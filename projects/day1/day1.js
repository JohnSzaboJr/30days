document.title="30 Days of Javascript - Day 1";

var wrapper = document.getElementById("wrapper");

// array for key names 
var keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

// array for key codes
var char = [65, 83, 68, 70, 71, 72, 74, 75, 76]

// array for screen object names
var screens = [];

// array for sounds
var sounds = [new Audio('clap.wav'), new Audio('hihat.wav'), new Audio('kick.wav'), new Audio('openhat.wav'), new Audio('boom.wav'), new Audio('ride2.wav'), new Audio('snare.wav'), new Audio('tom.wav'), new Audio('tink.wav')]

// dynamically creating keys
function createKeys() {
    
var drums = ["Clap", "Hihat", "Kick", "Openhat", "Boom", "Ride", "Snare", "Tom", "Tink"]    
    
// color palette for keys  
var colors = ["#b91559", "#a41869", "#89177b"];
    
// creating the 9 keys with a loop  
for (var i=1; i<=9; i++) {   

// looping through the colors    
var j;
if (i%3 === 2) {j=0;} 
else if (i%3 === 1) {j=1;}    
else if (i%3 === 0) {j=2;}      
    
// writing the HTML    
var x = '<div id="key'+i+'" style="background-color:'+colors[j]+'" class="circle center"><span class="keyname">'+keys[i-1]+'</span><br><span class="drumname">'+drums[i-1]+'</span></div>';
screens.push('key'+i);    
wrapper.innerHTML+=x;    
}
    
}

createKeys();

// Pressing keys listeners

document.addEventListener("keydown",keyDownHandler, false);	
document.addEventListener("keyup",keyUpHandler, false);	

// Keypress handler functions

function keyDownHandler(event)
{
	var keyPressed = event.keyCode;
    var sound = sounds[char.indexOf(keyPressed)];
    var screen = screens[char.indexOf(keyPressed)];
    
    // playing the sound;
    if (sound !== undefined) {sound.play()};
    
    // screen animation
    
    screen=document.getElementById(screen);
    if (screen !== null){
    screen.style.boxShadow="0px 0px 20px #fff"};
    
}

function keyUpHandler(event)
{
	var keyPressed = event.keyCode;
    var screen = screens[char.indexOf(keyPressed)];
    screen=document.getElementById(screen);
    
    // screen animation stop
    if (screen !== null){
    screen.style.boxShadow="none";}
    
}