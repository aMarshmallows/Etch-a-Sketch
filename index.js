let table = document.querySelector(".table")
var slider = document.getElementById("slider");

function createSketchArea(num_squares) {
    for (let i = 0; i <= num_squares; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr).classList.add("rows");
        for (let i = 0; i <= num_squares; i++) {
            const td = document.createElement("td");
            tr.appendChild(td).classList.add("cells");

        }
        // const td = document.createElement("td")
        // .classList.add("pixel")

    }
}

slider.oninput = function () {
    //selector.style.left = this.value + "%";
    let val = this.value;
    document.getElementById("SelectValue").innerHTML = val;
}



// need ot make it so only the num_squares of the squares are on each line
// max number on a line should be 100 (so 100x100 total)

createSketchArea(20);

