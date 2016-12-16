// div where day links are 
var links = document.getElementById("links");

// calculating number of links in a row of equal lengths based on screen width
function rowSize(days) {
  
// screen width 
var cwidth = document.documentElement.clientWidth;
    
// maximum number of 80 width + 10 margin linkboxes in a row    
cwidth = Math.floor(cwidth/100);

// calculating dividers - because these are the numbers of links in equal rows
    
var dividers = [];
    
for (var i=0; i<=days; i++) {
    if (days%i === 0) {dividers.push(i)}
}    

dividers.reverse();    

// calculating answer    
var ans;    
    
for (var j=0; j<dividers.length; j++){
    if (dividers[j] <= cwidth) 
    {ans = dividers[j]; break;}
}
    
return ans;    
    
};

// Array for button id's
var ids=[];

// create equal length rows of links

for (var i=1; i<=30; i++) {
    var x = '<a href="projects/day'+i+'.html"><div class="linkbox center" id="day'+i+'">'+i+'</div></a>';
    ids.push("day"+i);
    links.innerHTML+= x;
    var size = rowSize(30);
    if (i%size===0) {links.innerHTML += '<br>'};
    
}

//Function to give each button a random background color
function buttonBackgrounds(){

var colorArr = [
  "#763f49",
  "#63496b",
  "#484e79",
  "#487974",
  "#48794a",
  "#797448",  
];

var clrRnd;

ids.forEach(function(item){
 clrRnd = Math.floor((Math.random() * colorArr.length));    
 document.getElementById(item).style.backgroundColor=colorArr[clrRnd];  
});

}


//Reassigning background colors every second to create funky feel
buttonBackgrounds();
setInterval(buttonBackgrounds, 1000);





