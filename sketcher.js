function createGrid(size){
    let container = document.querySelector('.container');
    container.innerHTML = ""; //clear the grid
    for(let i = 1; i <= size*size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',(e)=>e.target.style.backgroundColor="black")
        container.appendChild(square);
    }
}
createGrid(16);