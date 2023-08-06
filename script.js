const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn');

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function () {
            gridItem.style.backgroundColor = '#004C54';
            gridItem.style.color = '#000000';
            gridItem.style.border = '2px solid #000000';
        });

        gridItem.addEventListener('mouseleave', function () {
            gridItem.style.backgroundColor = '#004C54';
            gridItem.style.color = '';
            gridItem.style.border = '2px solid #000000';
        });
    }
}

function getInputAndCreateGrid() {
    let gridSize = prompt("Enter the size of the grid (1-100):");
    
    while (gridSize !== null) {
        gridSize = parseInt(gridSize);
        
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            gridSize = prompt("Invalid input. Please enter a size between 1 and 100:");
        } else {
            createGrid(gridSize);
            break;
        }
    }
}

getInputAndCreateGrid();

resetBtn.addEventListener('click', getInputAndCreateGrid);