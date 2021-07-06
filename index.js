let table = document.querySelector(".table")
var slider = document.getElementById("slider");

function createSketchArea(num_squares) {
    let row_counter = 1;
    let col_counter = 1;
    // want to name the rows and columns xxx-xxx by numbers
    for (let i = 0; i <= num_squares; i++) {
        let row_name = "tr" + String(row_counter);
        console.log(row_name);
        const tr = document.createElement("tr");
        table.appendChild(tr).classList.add("rows");
        for (let j = 0; j <= num_squares; j++) {
            const td = document.createElement("td");
            tr.appendChild(td).classList.add("cells");

        }
        row_counter++;
        // const td = document.createElement("td")
        // .classList.add("pixel")

    }
}

function deleteSketchArea(num_squares) {
    for (let i = 0; i <= num_squares; i++) {
        for (let j = 0; j <= num-num_squares; j++) {
            
        }
    }
}

slider.onclick = function () {
    //selector.style.left = this.value + "%";
    let val = this.value;
    document.getElementById("SelectValue").innerHTML = val
    // options - call createSketchArea every time range slider is moved
    // change size of divs somehow 
    createSketchArea(val);
}



// need ot make it so only the num_squares of the squares are on each line
// max number on a line should be 100 (so 100x100 total)



