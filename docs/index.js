
let table = document.querySelector(".table")
var slider = document.getElementById("slider");
var cells = document.getElementsByClassName("cells");
var clearButton = document.getElementById("clearButton");
var eraseButton = document.getElementById("eraseButton");
var currColor = "black";
var eraseOnClick = true;

// color-Picker from https://github.com/Simonwep/pickr
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: true,
            input: true,
            clear: false,
            save: true
        }
    }
});
// -------------------------------------------------------

// adds mouseover action to cells
function colorCells(currColor) {
    // enables mouseover coloring of cells
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function colorCells() {
            let attributeName = "background-color: " + currColor + ";";
            cells[i].setAttribute("style", attributeName);
        }
        );
    }
}

// fills sketch area with cells to color, calls colorCells
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
    eraseButton.style.backgroundColor = "#8fd63e";
    colorCells(currColor);
}

// deletes grid so new slider value can be used to make a new grid
function deleteSketchArea() {
    while(table.firstChild) {
        table.removeChild(table.firstChild)
    }
}

// sets currColor to color selected by ColorPicker
pickr.on('save', (color, instance) => {
    currColor = color.toRGBA();
    currColor = `rgba(${currColor[0]}, ${currColor[1]}, ${currColor[2]}, ${currColor[3]})`;
    console.log('Event: "save"', currColor);
    colorCells(currColor);
})

// clear all colored cells to white
clearButton.onclick = function clearGrid() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].getAttribute("background-color") != "white") {
            cells[i].setAttribute("style", "background-color: white");
        }
    }
}

// change cells to white on mouseover. Also deactivate erasing on second click
eraseButton.onclick = function eraseCells() {
    // if want to enable erasing on button click
    if (eraseOnClick == true) {
        eraseButton.style.backgroundColor = "#6cca63";
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', function erase() {
                if (cells[i].getAttribute("background-color") != "white") {
                    cells[i].setAttribute("style", "background-color: white");
                }
            } 
            );
        }
        eraseOnClick = false;
    }
    // if want to stop erase function and continue drawing
    else if (eraseOnClick == false) {
        eraseButton.style.backgroundColor = "#8fd63e";
        colorCells(currColor);
        eraseOnClick = true;
    }
    
}

// slider value gives num of grid cells per row and col
slider.onclick = function dynamicGridSize() {
    let val = this.value;
    document.getElementById("SelectValue").innerHTML = val
    deleteSketchArea();
    createSketchArea(val);
}


