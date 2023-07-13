const containerDiv = document.querySelector(".container")
let gridItem;

for (let i = 0; i < 16; i++ ){
    for(let j = 0; j< 16; j++){
        gridItem = document.createElement("div")
        gridItem.classList = "grid-item"
        containerDiv.appendChild(gridItem)

    }
    containerDiv.appendChild(document.createElement("br"))
}

const gridItems = document.querySelectorAll(".grid-item") 

gridItems.forEach(item => {
    item.addEventListener("mouseover", ()=> { item.style.backgroundColor = "red"})
})