const grid = document.querySelector('.grid');
const slider = document.querySelector('input');

let squareNumbers = prompt('how many squares do u want ');
squareNumbers = squareNumbers*squareNumbers;

for (let i = 0; i < squareNumbers; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.height=`${500*1/Math.sqrt(squareNumbers) - 2}px`;
    square.style.width=`${500*1/Math.sqrt(squareNumbers) - 2}px`;
    // math equation we divide the grid height by the square root of the number of squares , and substract 2px to offset the border
    grid.appendChild(square);
}