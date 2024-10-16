let startGridSize = 16;
const container = document.querySelector("#container");

let newGridSize = 0;
const btn = document.querySelector("button");

loadGrid(startGridSize)
const box = document.querySelectorAll(".box").forEach((e) => e.addEventListener("mouseenter", paint));
btn.addEventListener("click", generateNewGrid)


function paint(a){
    a.currentTarget.style.backgroundColor = "black";
    console.log("hovering")
}

function generateNewGrid() {
    let newGridSize = prompt("Type in new grid size. From 1 to 100");
    if (newGridSize === null){
        return; 
    }
    else if (newGridSize > 100 || newGridSize < 1){
        alert("Size now permited.");
        newGridSize = prompt("Type in new grid size. From 1 to 100");
    }
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    loadGrid(newGridSize)
    const box = document.querySelectorAll(".box").forEach((e) => e.addEventListener("mouseenter", paint));
}

function loadGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        let boxHeight = 100/gridSize;
        const newRow = document.createElement("div");
        container.appendChild(newRow);
        newRow.setAttribute("style","border: 1px solid; display: flex; gap: 1px");
        newRow.setAttribute("class", "row");
        newRow.style.height = (boxHeight + "%");
    
        for (let j = 0; j < gridSize; j++){
            const newItem = document.createElement("div");
            newItem.setAttribute("style","flex: 1; border: 1px solid; margin: 1px");
            newItem.setAttribute("class", "box");
            newRow.appendChild(newItem);
        }
       
    }
}