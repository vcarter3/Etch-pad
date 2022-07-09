const grid = document.getElementsByClassName("grid");



for(let i = 0; i<16*16;i++){
    const cell = document.createElement('div');
cell.classList.add('cell');
//cell.textContent = ':)';
grid[0].appendChild(cell)   
};




const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {

    cell.addEventListener("mouseenter", function hover(event) {
        event.target.style.background = 'pink';
    });


});
