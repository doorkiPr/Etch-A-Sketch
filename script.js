const grid = document.querySelector('.grid');


for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.height=`${500*1/Math.sqrt(16) - 2}px`;
    square.style.width=`${500*1/Math.sqrt(16) - 2}px`;
    // math equation we divide the grid height by the square root of the number of squares , and substract 2px to offset the border
    grid.appendChild(square);
    
}