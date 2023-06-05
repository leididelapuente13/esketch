let gridColor = document.querySelector(".opciones__mause-color");
let btnRainbow = document.querySelector(".opciones__btn-rainbow");
let btnEraser = document.querySelector(".opciones__eraser");
let btnBorder = document.querySelector(".opciones__border");
let btnClear = document.querySelector(".opciones__clear");
let tamGrid = document.querySelector(".opciones__tam-grid");
let showTam = document.querySelector(".opciones__mostrar-tam");
let gridContainer = document.querySelector(".container");

function createGrid(tam) {
    let gridContainer = document.querySelector(".container");
    const containerWidth = gridContainer.clientWidth;
    const elementSize = containerWidth / tam;

    for (let i = 0; i < tam * tam; i++) {
        const grid = document.createElement("div");
        grid.classList.add("item");
        gridContainer.appendChild(grid);
        grid.style.width = `${elementSize}px`;
        grid.style.height = `${elementSize}px`;
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}

function changeColor() {
    let gridItems = document.querySelectorAll(".item");
    let isMouseDown = false;

    gridItems.forEach((grid) => {
        grid.addEventListener("click", () => {
            grid.style.backgroundColor = gridColor.value;
        });

        grid.addEventListener("mousedown", () => {
            grid.style.backgroundColor = gridColor.value;
            isMouseDown = true;
        });

        grid.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        grid.addEventListener("mouseover", () => {
            if (isMouseDown) {
                grid.style.backgroundColor = gridColor.value;
            }
        });
    });
}

function clearAll() {
    let gridItems = document.querySelectorAll(".item");
    gridItems.forEach((grid) => {
        grid.style.backgroundColor = "#fff";
    });
}

function eraser (){
    let gridItems = document.querySelectorAll(".item");
    let isMouseDown = false;

    gridItems.forEach((grid) => {
        grid.addEventListener("click", () => {
            grid.style.backgroundColor = "#fff";
        });

        grid.addEventListener("mousedown", () => {
            grid.style.backgroundColor = "#fff";
            isMouseDown = true;
        });

        grid.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        grid.addEventListener("mouseover", () => {
            if (isMouseDown) {
                grid.style.backgroundColor = "#fff";
            }
        });
    });
}

function removeBorder(){
    let gridItems = document.querySelectorAll(".item");
    gridItems.forEach((grid) => {
        grid.classList.toggle("border");
    });
}

function rainbowMode(){
    const arrayColor = ["red", "blue", "purple", "green", "pink", "orange", "yellow", "grey", "indigo", "darkorange", "darkred"];
    let gridItems = document.querySelectorAll(".item");
    let isMouseDown = false;

    gridItems.forEach((grid) => {
        grid.addEventListener("click", () => {
            grid.style.backgroundColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
        });

        grid.addEventListener("mousedown", () => {
            grid.style.backgroundColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
            isMouseDown = true;
        });

        grid.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        grid.addEventListener("mouseover", () => {
            if (isMouseDown) {
                grid.style.backgroundColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
            }
        });
    });
}

tamGrid.addEventListener('input', () => {
    const tam = tamGrid.value;
    showTam.textContent = `${tam} x ${tam}`;
    clearGrid();
    createGrid(tam);
    gridContainer.style.gridTemplateColumns = `repeat(${tam}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${tam}, auto)`;
    changeColor();
});

btnClear.addEventListener("click", clearAll);

btnEraser.addEventListener("click", eraser);

btnBorder.addEventListener("click", removeBorder);

btnRainbow.addEventListener("click", rainbowMode);
