const container = document.querySelector('.container');

//default 16 x 16 grid
for (let i = 0; i < 16 * 16; i++) {
  const gridDiv = document.createElement('div');
  container.appendChild(gridDiv);
  gridDiv.style.height = 550 / 16 + 'px';
  gridDiv.style.width = 550 / 16 + 'px';
  gridDiv.classList.add('grids');
  gridDiv.style.backgroundColor = 'white';
}

const buttons = document.querySelectorAll('.color');
const button = document.querySelector('.color');
const randomButton = document.querySelector('.random');
const resetButton = document.querySelector('.reset');
const resolutionButton = document.querySelector('.resolution');

function randomColor() {
  const randomize = Math.random();
  if (randomize >= 0 && randomize <= 0.2) return 'violet';
  else if (randomize > 0.2 && randomize <= 0.3) return 'indigo';
  else if (randomize > 0.3 && randomize <= 0.4) return 'blue';
  else if (randomize > 0.4 && randomize <= 0.5) return 'green';
  else if (randomize > 0.5 && randomize <= 0.6) return 'yellow';
  else if (randomize > 0.6 && randomize <= 0.7) return 'orange';
  else if (randomize > 0.7 && randomize <= 0.8) return 'red';
  else return 'brown';
}

resolutionButton.onclick = function() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  let pixelSize = 1;
  do {
    pixelSize = prompt('Enter the pixel size (between 1 and 128px): ');
  } while (pixelSize <= 0 || pixelSize > 128);

  for (let i = 0; i < pixelSize * pixelSize; i++) {
    const gridDiv = document.createElement('div');
    container.appendChild(gridDiv);
    gridDiv.style.height = 550 / pixelSize + 'px';
    gridDiv.style.width = 550 / pixelSize + 'px';
    gridDiv.classList.add('grids');
    gridDiv.style.backgroundColor = 'white';
  }
}


buttons.forEach(button => button.addEventListener('click', function(){
  const grids = document.querySelectorAll('.grids');
  const grid = document.querySelector('.grids');
  grids.forEach(grid => grid.addEventListener('mouseover', function() {
    grid.style.backgroundColor = button.value;
  }));
}));

resetButton.onclick = function() {
  const grids = document.querySelectorAll('.grids');
  const grid = document.querySelector('.grids');
  grids.forEach(grid => grid.style.backgroundColor = 'white')
};

randomButton.onclick = function() {
  const grids = document.querySelectorAll('.grids');
  const grid = document.querySelector('.grids');
  grids.forEach(grid => grid.addEventListener('mouseover', function() {
    grid.style.backgroundColor = randomColor();
  }))
};
