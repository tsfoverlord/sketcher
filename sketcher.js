let container = document.querySelector('.container');
for(let i = 1; i <= 16*16; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}