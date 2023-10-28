let gridContainer = document.querySelector('#grid_container');

window.addEventListener('DOMContentLoaded', createGrid(16));

function createGrid(number) {
    while (gridContainer.firstChild) gridContainer.removeChild( gridContainer.firstChild);
    for (let i = 1; i<=number; i++) {
        let divVertical = document.createElement('div');
        divVertical.classList.add('verticals');
        gridContainer.appendChild(divVertical);
        for (let i = 1; i<=number; i++) {
            let divHoriz = document.createElement('div');
            divHoriz.classList.add('horizontals');
            divHoriz.addEventListener('click',  function ChangeBgColor(event) {
                event.target.style.backgroundColor = 'black';
            })
            divVertical.appendChild(divHoriz);
        }    
    }
}

let changeNumber = document.querySelector('button');
changeNumber.addEventListener('click', inputNumber);

function inputNumber() {
    let error = true
    while (error == true) {
        newNumber = parseInt(prompt('Set the Number of squares', '16'));
        if (isNaN(newNumber))  {
            alert('Put a number please');
        }
        else if (newNumber > 100) {
            alert('Put a lower number please')
        }
        else if (newNumber < 0) {
            alert('Put a positive number please')
        }
        else {
            error = false
        }
    }
    createGrid(newNumber);
}