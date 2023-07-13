const containerDiv = document.querySelector(".container");
const btnChangeGrid = document.querySelector("button");

//Make the grid beeter
//add button for clear all
//add random color selector
//make the change size button more interactive
//do the think with the darkness

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
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "red";
      });
    }
  }
}

function removeAll() {
  while (containerDiv.firstChild) {
    containerDiv.firstChild.remove();
  }
}

btnChangeGrid.addEventListener('click', () => {
  let size = parseInt(prompt("Enter a grid size you like (max 64)"));
  if (!isNaN(size) && size > 0 && size <= 64) {
    createDivs(size);
  } else {
    alert("Error! Enter a valid number between 1 and 64.");
  }
});

createDivs(); //