document.title="30 Days of Javascript - Day 3";

const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix = this.dataset.sizing || "";
    console.log(this.name);
    document.documentElement.style.setProperty('--'+this.name, this.value + suffix);
    
}

inputs.forEach(function(item){
    item.addEventListener("change", handleUpdate);
    item.addEventListener("mousemove", handleUpdate);
});