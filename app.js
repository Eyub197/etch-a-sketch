const containerDiv = document.querySelector(".container");
const btnChangeGrid = document.querySelector("#cn");
const btnClearColor = document.querySelector(".clear-colors")
const btnRandomColor = document.querySelector(".random-color")
let gridItems =[]

//add random color selector
//make the change size button more interactive
//do the think with the darkness
//add e clasic color the black one and try to fix the border
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
        gridItem.style.backgroundColor = "red";
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
  alert("im clicked")
  let size = parseInt(prompt("Enter a grid size you like (max 64)"));
  if (!isNaN(size) && size > 0 && size <= 64) {
    createDivs(size);
  } else {
    alert("Error! Enter a valid number between 1 and 64.");
  }
});

btnClearColor.addEventListener('click', ()=> { 
  gridItems.forEach((item) => item.style.backgroundColor = "#808080" ) } )

createDivs(); //