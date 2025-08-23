let containerWidth = 960;
const container = document.querySelector('#container');
container.style.width = `${containerWidth}px`;
let gridXY = 16;
let maxGrid = 100;

function makeGrid(num) {
    let squareXY = containerWidth / num;
    let squareCount = 0;
    let inkColor = '#000';
    container.textContent = ''; // clears existing grid for newGrid button

    for (i = 0; i < num ** 2; i++) {
        let newSquare = document.createElement('div');
        newSquare.setAttribute('class', 'square');
        newSquare.setAttribute('style', `width: ${squareXY}px; height: ${squareXY}px;`);
        container.appendChild(newSquare);
        squareCount += 1;
    }

    let squareDivs = document.querySelectorAll(".square");

    squareDivs.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = inkColor;
    })
});
}

makeGrid(gridXY);

let newGrid = document.querySelector("#newGrid");
let gridBtn = newGrid.querySelector('button');

gridBtn.addEventListener('click', () => {
    let userGrid = prompt('Enter the number of squares per side');
    if (userGrid > maxGrid) {
        alert(`Exceeds maximum of ${maxGrid}! Outputting maximum-sided grid.`)
        userGrid = maxGrid;
    }
    console.log(userGrid);
    makeGrid(userGrid);
})