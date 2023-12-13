const rainbow = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const grid = document.querySelector('.grid');
const slider = document.querySelector('input');
const sliderInfo = document.querySelector('.sliderInfo');
const regex = /\D/g ; // regex that looks for anythign that's not a number


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
        square.addEventListener("mouseover",colorSquare)
    }

}
slider.addEventListener("input",e=>{    
    grid.replaceChildren(); //delete all the squares each time the user changes the value
   const squareNumbers = e.currentTarget.value*e.currentTarget.value;
   sliderInfo.textContent=`grid size : ${e.currentTarget.value} x ${e.currentTarget.value} `
   generateGrid(squareNumbers)
})

const colorSquare = (e)=>{
    if( e.currentTarget.style.backgroundColor === ""){
        let randomColor = getRandomValue(rainbow);
        e.currentTarget.style.backgroundColor=`${randomColor}`
     }
     else if(e.currentTarget.style.filter == ""){
        e.currentTarget.style.filter=`brightness( 90%) ` // lessen brightness to 90% if square dosen't have brightness effect already
     }

}