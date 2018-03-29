const container = document.querySelector('div');
for (let i = 0; i < 16 * 16; i++) {
  const gridDiv = document.createElement('div');
  container.appendChild(gridDiv);
  gridDiv.setAttribute('class', 'grids');
}
const grids = document.querySelectorAll('.grids');
const grid = document.querySelector('.grids');

grids.forEach(grid => grid.addEventListener('mouseover', function() {
  grid.style.backgroundColor = 'black';
}));
