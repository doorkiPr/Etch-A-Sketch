const grid = document.querySelector('.grid');
const slider = document.querySelector('input');
const sliderInfo = document.querySelector('.sliderInfo');
const rainbow = ['red','green','yellow','yellow','orange','violet'];

const getRandomValue = (array)=>{
    let randomIndex = (Math.floor(Math.random() * array.length));
    return array[randomIndex]
}

const generateGrid = (squareNumbers) => {
    for (let i = 0; i < squareNumbers; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${500 * 1 / Math.sqrt(squareNumbers) - 2}px`;
        square.style.width = `${500 * 1 / Math.sqrt(squareNumbers) - 2}px`;
        // math equation we divide the grid height by the square root of the number of squares , and substract 2px to offset the border
        grid.appendChild(square);
    }

}
slider.addEventListener("input",e=>{    
    grid.replaceChildren(); //delete all the squares each time the user changes the value
   const squareNumbers = e.currentTarget.value*e.currentTarget.value;
   sliderInfo.textContent=`grid size : ${e.currentTarget.value} x ${e.currentTarget.value} `
   generateGrid(squareNumbers)
})