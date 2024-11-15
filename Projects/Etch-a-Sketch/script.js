function createGrid(ratio, timeOut) {
    timeOut *= 1000;
    let grid = document.querySelector('.container');

    for(let i = 0; i < ratio**2; i++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = parseInt(window.getComputedStyle(grid).width) / ratio + 'px';
        square.style.height = parseInt(window.getComputedStyle(grid).height) / ratio + 'px';
        square.addEventListener("mouseover", () => {
            rgb = generateRandomRGB();
            square.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
            setTimeout(() =>{
                square.style.backgroundColor = '#FFFDD0';
            }, timeOut);
        });
        grid.appendChild(square);
    }
}

function deleteGrid() {
    let grid = document.querySelector('.container');
    while(grid.firstChild)
        grid.removeChild(grid.firstChild)
}

function generateRandomRGB() {
    let rgb = []
    for(let i = 0; i < 3; i++)
    {
        rgb.push(Math.floor(Math.random() * 255));
    }
    return rgb;
}

createGrid(16, 1.5);

let button = document.getElementById('button')
button.addEventListener('click', () => {
    let size = document.getElementById('size') 
    let duration = document.getElementById('duration') 
    deleteGrid()
    createGrid(parseInt(size.value), parseInt(duration.value))
})
