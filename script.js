const container = document.querySelector('div');
for (let i = 0; i < 16 * 16; i++) {
  const gridDiv = document.createElement('div');
  container.appendChild(gridDiv);
  gridDiv.setAttribute('class', 'grids');
}

const grids = document.querySelectorAll('.grids');
const grid = document.querySelector('.grids');

const button = document.querySelector('.color');
function changeBgColor(){
  grids.forEach(grid => grid.addEventListener('mouseover', function() {
    grid.style.backgroundColor = button.value;
  }));
}

button.addEventListener('click', changeBgColor);

function randomColor() {
  const randomize = Math.random();
  if (randomize >= 0 && randomize <= 0.2) return 'violet';
  else if (randomize > 0.2 && randomize <= 0.3) return 'indigo';
  else if (randomize > 0.3 && randomize <= 0.4) return 'blue';
  else if (randomize > 0.4 && randomize <= 0.5) return 'green';
  else if (randomize > 0.5 && randomize <= 0.6) return 'yellow';
  else if (randomize > 0.6 && randomize <= 0.7) return 'orange';
  else if (randomize > 0.7 && randomize <= 0.8) return 'red';
  else return 'black';
}
