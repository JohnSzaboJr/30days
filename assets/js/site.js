// div where day links are 
var links = document.getElementById("links");


function rowSize() {
  
// screen width 
var cwidth = document.documentElement.clientWidth;
    
// maximum number of 80 width + 10 margin linkboxes in a row    
cwidth = Math.round(cwidth/100);

return cwidth;    
    
}

console.log(rowSize());


for (var i=1; i<31; i++) {
    var x = '<a href="projects/day'+i+'.html"><div class="linkbox center">'+i+'</div></a>';
    links.innerHTML+= x;
    if (i%6===0) {links.innerHTML += '<br>'}
}


// create equal length rows