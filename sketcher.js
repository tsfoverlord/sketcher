let container = document.querySelector('.container');
for(let i = 1; i <= 16*16; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',(e)=>e.target.style.backgroundColor="black")
    container.appendChild(square);
}