function createGrid(size){
    let container = document.querySelector('.container');
    container.innerHTML = ""; //clear the grid
    for(let i = 1; i <= size*size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',(e)=>e.target.style.backgroundColor="black");
        container.appendChild(square);
    }
}

function changeGridSize(){
    let newSize = Number(prompt('Enter new grid size'));
    if(!newSize) return;
    createGrid(newSize);
    let newSquareSize = 32 / newSize; //calculating new size in rem
    let sqaures = document.querySelectorAll('.square');
    sqaures.forEach((square)=>{
        square.style.width = newSquareSize+"rem";
        square.style.height = newSquareSize+"rem";
    });
}

let changeButton = document.querySelector('#change-size');
changeButton.addEventListener('click',changeGridSize);

createGrid(16);
