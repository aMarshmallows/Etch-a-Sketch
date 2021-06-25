let container = document.querySelector(".container")

var slider = document.getElementById("slider");
var selector = document.getElementById("selector");

slider.oninput = function () {
    selector.style.left = this.value + "%";
}


function createSketchArea(num_squares) {
    for (let i = 0; i <= num_squares * num_squares; i++) {
        const div = document.createElement("div");
        container.appendChild(div).classList.add("pixel");

    }
}
// need ot make it so only the num_squares of the squares are on each line
// max number on a line should be 100 (so 100x100 total)

// calculate how 

createSketchArea(10)