var links = document.getElementById("links");

for (var i=1; i<31; i++) {
    var x = '<li><a href="projects/day'+i+'.html">Day'+i+'</li>';
    links.innerHTML+= x;
}