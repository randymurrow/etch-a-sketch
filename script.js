let containerWidth = 640;
container.style.width = `${containerWidth}px`;
buttons.style.width = `${containerWidth}px`;
let gridXY = 16;
let maxGrid = 100;
let modes = ['Mono', 'Multi', 'Grayscale'];
let modesIndex = 0;

function getRandomRGB() {
      return Math.floor(Math.random() * 255);
}

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

    let squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(square => {
        let opacity = 0.0;
        square.addEventListener('mouseover', function() {
            let mode = modes[modesIndex];
            if (mode == 'Mono') {
                square.style.backgroundColor = inkColor;
            } else if (mode == 'Multi') {
                square.style.backgroundColor = `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;
            } else {
                opacity += 0.1;
                square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                return opacity;
            }
        })
    });
}

makeGrid(gridXY);

let newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', () => {
    squares = prompt('Enter the number of squares per side (1–100');
    if (squares > maxGrid || squares < 1) {
        return alert(`Value is outside of allowed range.`);
    }
    gridXY = squares;
    makeGrid(gridXY);
    return gridXY;
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    makeGrid(gridXY);
})

let toggleMode = document.querySelector('#toggleMode');
toggleMode.addEventListener('click', () => {
    if (modesIndex < 2) {
        modesIndex += 1
    } else {
        modesIndex = 0;
    }
    makeGrid(gridXY);
})