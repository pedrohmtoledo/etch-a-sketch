let gridSize = 5;
const container = document.querySelector("#container");
let boxHeight = 100/gridSize;

function loadGrid(gridSize){
for (let i = 0; i < gridSize; i++){
    const newRow = document.createElement("div");
    container.appendChild(newRow);
    newRow.setAttribute("style","color: blue; border: 1px solid; display: flex; gap: 1px; margin-bottom: 1px")
    newRow.setAttribute("class", "row")
    newRow.style.height = (boxHeight + "%");

    for (let j = 0; j < gridSize; j++){
        const newItem = document.createElement("div");
        // newItem.textContent = j;
        newItem.setAttribute("style","flex: 1; border: 1px solid")
        newItem.setAttribute("class", "box")
        newRow.appendChild(newItem)
    }
   
}
}

loadGrid(gridSize)

const box = document.querySelectorAll(".box").forEach((e) => e.addEventListener("mouseenter", paint));

function paint(a){
    a.currentTarget.style.backgroundColor = "black";
    console.log("hovering")
}