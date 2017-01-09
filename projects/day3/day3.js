document.title="30 Days of Javascript - Day 3";

const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    console.log(this.value);
}

inputs.forEach(function(item){
    item.addEventListener("change", handleUpdate);
});