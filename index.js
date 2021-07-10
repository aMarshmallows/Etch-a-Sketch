let table = document.querySelector(".table")
var slider = document.getElementById("slider");
var cells = document.getElementsByClassName("cells");
var clearButton = document.getElementById("clearButton");
var eraseButton = document.getElementById("eraseButton");
var eraseOnClick = true;

function colorCells() {
    // enables mouseover coloring of cells
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function colorCells() {
            cells[i].classList.add("colorCell");
        }
        );
    }
}


function createSketchArea(num_squares) {
    let row_counter = 1;
    let col_counter = 1;
    // creates a table with all rows and cols numbered (useful for later projects)
    for (let i = 0; i <= num_squares; i++) {
        const row_name = "tr" + String(row_counter);
        const tr = document.createElement(row_name);
        table.appendChild(tr).classList.add("rows");
        for (let j = 0; j <= num_squares; j++) {
            const col_name = "td" + String(col_counter);
            const td = document.createElement(col_name);
            tr.appendChild(td).classList.add("cells");
            col_counter++;
        }
        col_counter = 1;
        row_counter++;
    }
    colorCells();
}

// deletes grid so new slider value can be used to make a new grid
function deleteSketchArea() {
    while(table.firstChild) {
        table.removeChild(table.firstChild)
    }
}
// slider value gives num of grid cells per row and col
slider.onclick = function dynamicGridSize() {
    let val = this.value;
    document.getElementById("SelectValue").innerHTML = val
    deleteSketchArea();
    createSketchArea(val);
}

// clear all colored cells
clearButton.onclick = function clearGrid() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains("colorCell")) {
            cells[i].classList.toggle("colorCell");
        }
    }
}

function erase(i) {
    if (cells[i].classList.contains("colorCell")) {
        cells[i].classList.toggle("colorCell");
    } 
}

// clear all colored cells
eraseButton.onclick = function EraseCells() {
    // if want to enable erasing on button click
    if (eraseOnClick == true) {
        eraseButton.style.backgroundColor = "#6cca63";
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', function erase() {
                if (cells[i].classList.contains("colorCell")) {
                    cells[i].classList.toggle("colorCell");
                } 
            } 
            );
        }
        eraseOnClick = false;
    }
    // if want to stop erase function and continue drawing
    else if (eraseOnClick == false) {
        eraseButton.style.backgroundColor = "#8fd63e";
        colorCells();
        eraseOnClick = true;
    }
    
}


