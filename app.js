const containerDiv = document.querySelector(".container")
let btnChangeGrid = document.querySelector("button")
let gridItem = 0;

let  createDivs =(count = 16) => {
for (let i = 0; i < count; i++ ){
    for(let j = 0;  j < count; j++){
        gridItem = document.createElement("div")
        gridItem.classList = "grid-item"
        containerDiv.appendChild(gridItem)
    }
    containerDiv.appendChild(document.createElement("br"))
 }
}

createDivs()

let removeAll = () => {
    while(containerDiv.firstChild){
        containerDiv.firstChild.remove
    }
}

const gridItems = document.querySelectorAll(".grid-item") 
gridItems.forEach(item => {
    item.addEventListener("mouseover", ()=> { item.style.backgroundColor = "red"})
})


