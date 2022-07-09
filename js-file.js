const grid = document.getElementsByClassName("grid");

function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

// shade darker
function shader() {
    let temp = event.target.style.backgroundColor;
    let newCol = '';
    // rgb(x,y,z) =>  darker shade until black
    temp = temp.split("(")[1].split(")")[0];
    temp = temp.split(","); // now an array
    for (let i = 0; i < 3; i++) {
        col = parseInt(temp[i]);
        col -= 10 % 255; // shade degree
        col = col.toString();
        temp[i] = col;
    }
    newCol = "rgb(" + temp[0] + "," + temp[1] + "," + temp[2] + ")";
    return newCol;
}

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = "rgb(204,204,204)";
    grid[0].appendChild(cell)
};

function hoverEnter(event) {
    event.target.style.backgroundColor = "rgb(1,1,1)"; // black
    //event.target.style.backgroundColor = randColor();
    //event.target.style.backgroundColor = shader();
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", hoverEnter)
});

const button = document.querySelector(".new");

button.addEventListener("click", function changeGrid(event) {

    let user = prompt("How many cells do you want? \n(Maximum of 100)");
    if (user == undefined) { user = 16 };
    if (user > 100) { user = 100; }

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
