let number = 10;

let changeNumber = document.querySelector('button');
changeNumber.addEventListener('click', inputNumber);


let gridContainer = document.querySelector('#grid_container');
for (let i = 1; i<=number; i++) {
    let divVertical = document.createElement('div');
    divVertical.classList.add('div_squares', 'verticals');
    gridContainer.appendChild(divVertical);
    for (let i = 1; i<=number; i++) {
        let divHoriz = document.createElement('div');
        divHoriz.classList.add('div_squares', 'horizontals');
        divVertical.appendChild(divHoriz);
    }    
}

function inputNumber() {
    let error = true
    while (error == true) {
        newNumber = parseInt(prompt('Set the Number of squares', '16'));
        if (isNaN(newNumber))  {
            alert('Put a number please');
        }
        else if (newNumber > 50) {
            alert('Put a lower number please')
        }
        else if (newNumber < 0) {
            alert('Put a positive number please')
        }
        else {
            error = false
        }
    }
    number = newNumber;
}