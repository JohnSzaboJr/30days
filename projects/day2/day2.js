document.title="30 Days of Javascript - Day 2";

// function to get the handles moving
function moveHandles(){

// getting seconds, minutes and hours data    
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours() % 12 || 12;   

// converting seconds and minutes to degrees    
s=s*6;  
mdeg=m*6;  
    
// converting hours and minutes to hour handle degree position
        
h = (h*30) + (m/2);

// seconds handle and shadow    
document.getElementById("handle3shadow").style.transform = 'translateY(-115px) rotate('+ s +'deg)';    
document.getElementById("handle3").style.transform = 'translateY(-125px) rotate('+ s +'deg)';
    
// minutes handle and shadow 
document.getElementById("handle1shadow").style.transform = 'translateY(-105px) rotate('+ mdeg +'deg)';    
document.getElementById("handle1").style.transform = 'translateY(-115px) rotate('+ mdeg +'deg)'; 

// hours handle and shadow
document.getElementById("handle2shadow").style.transform = 'translateY(-130px) rotate('+ h +'deg)';    
document.getElementById("handle2").style.transform = 'translateY(-142px) rotate('+ h +'deg)';     
}

// initial position of handles 
moveHandles();
// update handle position every second
setInterval(moveHandles, 1000);
