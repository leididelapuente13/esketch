let bgColorContainer = document.querySelector(".opciones__bg-color");
let gridColor = document.querySelector(".opciones__mause-color");
let btnRainbow = document.querySelector(".opciones__btn-rainbow");
let btnEraser = document.querySelector(".opciones__eraser");
let btnBorder = document.querySelector(".opciones__border");
let btnClear = document.querySelector(".opciones__clear");
let tamGrid = document.querySelector(".opciones__tam-grid");
let showTam = document.querySelector(".opciones__mostrar-tam");
let gridContainer = document.querySelector(".container")

tamGrid.addEventListener('input', () => {
    const tam = tamGrid.value;
    showTam.textContent = `${tam} x ${tam}`;
    clearGrid();
    createGrid(tam);
    gridContainer.style.gridTemplateColumns = `repeat(${tam}, 1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${tam}, 1fr)`;
});

function createGrid(tam) {
    let gridContainer = document.querySelector(".container");
    for (let i = 0; i < tam*tam; i++) {
        let grid = document.createElement("div");
        grid.classList.add("item");
        gridContainer.appendChild(grid);
        grid.innerHTML = `${i+1}`;
    }
} 

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}
