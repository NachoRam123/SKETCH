let gridContainer = document.querySelector('#grid_container');
for (let i = 1; i<=16; i++) {
    let divVertical = document.createElement('div');
    divVertical.classList.add('div_squares', 'verticals');
    gridContainer.appendChild(divVertical);
    for (let i = 1; i<=16; i++) {
        let divHoriz = document.createElement('div');
        divHoriz.classList.add('div_squares', 'horizontals');
        divVertical.appendChild(divHoriz);
    }    
}

console.log(gridContainer)