const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.querySelector('.reset-btn')

function createGrid() {
    gridContainer.innerHTML = ''
    for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function () {
            gridItem.style.backgroundColor = '#004C54';
            gridItem.style.color = '#000000';
            gridItem.style.border = '2px solid #000000';
        })

        gridItem.addEventListener('mouseleave', function () {
            gridItem.style.backgroundColor = '#004C54';
            gridItem.style.color = '';
            gridItem.style.border = '2px solid #000000';
        })
    }
}

createGrid()


resetBtn.addEventListener('click', function () {
    createGrid()
})
