let containerWidth = 960;
const container = document.querySelector('#container');
container.style.width = `${containerWidth}px`;

let gridXY = 16;
let squareXY = Math.floor(containerWidth / gridXY);
let squareCount = 0;

for (i = 0; i < gridXY ** 2; i++) {
    let newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'square');
    newSquare.setAttribute('style', `width: ${squareXY}px; height: ${squareXY}px;`);
    container.appendChild(newSquare);
    squareCount += 1;
}

console.log(squareCount);