let gridContainer = document.querySelector('#grid_container');

window.addEventListener('DOMContentLoaded', createGrid(16));

function createGrid(number) {
    let contador = 0 
    while (gridContainer.firstChild) gridContainer.removeChild( gridContainer.firstChild);
    for (let i = 1; i<=number; i++) {
        let divVertical = document.createElement('div');
        divVertical.classList.add('verticals');
        gridContainer.appendChild(divVertical);
        for (let i = 1; i<=number; i++) {
            contador += 1;
            let divHoriz = document.createElement('div');
            divHoriz.classList.add('horizontals'); 
            divHoriz.setAttribute('id',`${contador}`);
            divHoriz.addEventListener('mouseover',  changeColor);
            divHoriz.addEventListener('mousedown',  changeColor);
            divVertical.appendChild(divHoriz);
        }    
    }
    // Add a boom in a random square
    let random = (Math.round(Math.random() * contador)).toString();
    let randomSquare = document.getElementById(random);
    randomSquare.classList.add('boom')
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
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === 'mousedown') 
        if (e.target.classList.contains('boom')) {
            endGame();
        } 
        else {
            e.target.style.backgroundColor = 'black'
        }
  }

  function endGame () {
    alert('BOOOOOOOOOOOMMM\nGame Over\nTry Again Looser!');
    createGrid(16);
    mouseDown = true
  }