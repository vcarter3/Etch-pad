const grid = document.getElementsByClassName("grid");
const rgb = document.querySelector(".rgb");
const blackButton = document.querySelector(".black");
const shade = document.querySelector(".shade");
var currentPen = "black";


// create first grid
for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = "rgb(204,204,204)";
    grid[0].appendChild(cell)
};

function randColor() {
    return "rgb(" + (Math.floor(Math.random() * 255)).toString() + "," + (Math.floor(Math.random() * 255)).toString() + "," + (Math.floor(Math.random() * 255)).toString() + ")";

    //return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function shader(event) {
    let temp = event.target.style.backgroundColor;
    let newCol = '';
    // rgb(x,y,z) =>  darker shade until black
    temp = temp.split("(")[1].split(")")[0];
    temp = temp.split(","); // now an array
    for (let i = 0; i < 3; i++) {
        col = parseInt(temp[i]);
        col = (col - 30) % 255; // shade degree
        col = col.toString();
        temp[i] = col;
        console.log(temp);
    }
    newCol = "rgb(" + temp[0] + "," + temp[1] + "," + temp[2] + ")";
    return newCol;
}

function black() {
    return "rgb(1,1,1)"
}

function penSelector(user, event) {
    if (user == "rgb") {
        return randColor();
    } else if (user == "shade") {
        return shader(event);
    } else {
        return black();
    }
}

function hoverEnter(event) {
    event.target.style.backgroundColor = penSelector(currentPen, event); // black
}

rgb.addEventListener("click", function change() {
    currentPen = "rgb";
});
blackButton.addEventListener("click", function change2() {
    currentPen = "black";
});
shade.addEventListener("click", function change3() {
    currentPen = "shade";
});


const cells = document.querySelectorAll(".cell");
const slider = document.getElementById("myRange");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", hoverEnter)
});

slider.addEventListener("click", function changeGrid(event) {
    let user = slider.value;
    const oldCells = document.querySelectorAll(".cell");

    oldCells.forEach((cell) => {
        cell.removeEventListener("mouseenter", hoverEnter);
        cell.remove();
    });

    for (let i = 0; i < user * user; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid[0].appendChild(cell)
        cell.style.backgroundColor = "rgb(204,204,204)";
        cell.addEventListener("mouseenter", hoverEnter)
    }

    grid[0].style.gridTemplateColumns = "repeat(" + parseInt(user) + ", 1fr)";

});
