const containerDiv = document.querySelector(".container")

for (let i = 0; i < 16; i++ ){
    for(let j = 0; i< 16, i++){
        let gridItem = document.createElement("div")
        containerDiv.appendChild(gridItem)
    }
    containerDiv.appendChild(document.createElement("br"))
}
