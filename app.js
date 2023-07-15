const containerDiv = document.querySelector(".container");
const btnChangeGrid = document.querySelector("#cn");
const btnClearColor = document.querySelector(".clear-colors")
const btnRandomColor = document.querySelector(".random-color")
const btnWowoMode = document.querySelector(".wowo-Mode")
const btnClassicColor = document.querySelector(".classic-color")
let gridItems =[]


// try to fix the border
//aslo add a color selector

function createDivs(size = 16) {
  removeAll();

  const squareSize = 400 / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.style.width = `${squareSize}px`;
      gridItem.style.height = `${squareSize}px`;
      containerDiv.appendChild(gridItem);
      gridItems.push(gridItem)
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "blue";
      });
    }
  }
}

function removeAll() {
  gridItems.forEach((item )=> {
    item.remove()
  });
  gridItems = []
}

btnChangeGrid.addEventListener('click', () => {
  let inputField = document.createElement("input")
  inputField.type = "text"
  
  let size = parseInt(prompt("Enter a grid size you like (max 64)"));
  if (!isNaN(size) && size > 0 && size <= 64) {
    createDivs(size);
  } else {
    alert("Error! Enter a valid number between 1 and 64.");
  }
});

btnClearColor.addEventListener('click', ()=> { 
  gridItems.forEach((item) => item.style.backgroundColor = "#808080" ) } )

btnRandomColor

let generateRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777216)
  let color = "#" + randomColor.toString(16).padStart(6, '0')
  return color
}

btnRandomColor.addEventListener('click', ()=> {
  const randomColor = generateRandomColor()
  gridItems.forEach((item => item.addEventListener('mouseover', ()=>{
  item.style.backgroundColor = randomColor
 })))
})

//Extara credits
let generateRandomRgbColor = () => {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let color = `rgb(${r}, ${g}, ${b})`
  return color
}

let darkenColor = (item) => {
  let color = item.style.backgroundColor;
  if (!item) return;

  const rgbValues = color.match(/\d+/g);
  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);

  r = Math.max(0, Math.round(r - r * 0.1));
  g = Math.max(0, Math.round(g - g * 0.1));
  b = Math.max(0, Math.round(b - b * 0.1));

  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btnWowoMode.addEventListener('click', ()=>{
  gridItems.forEach((item) => {
    item.addEventListener('mouseover', ()=>{
      item.style.backgroundColor = generateRandomColor()
      darkenColor(item)
    })
    
  })
})

//Extra credits

btnClassicColor.addEventListener('click', ()=> {
gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', ()=> {
    gridItem.style.backgroundColor  =" #2E2E2E"
  })
})
})


createDivs(); //