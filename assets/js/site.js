var links = document.getElementById("links");

for (var i=1; i<31; i++) {
    var x = '<br><a href="projects/day'+i+'.html"><div class="linkbox center">'+i+'</div></a>';
    links.innerHTML+= x;
}