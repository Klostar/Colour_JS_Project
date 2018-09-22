const Colour = require('./models/colour.js');
const CellView = require('./views/cell_view.js');
const GridView = require('./views/grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const url = 'http://localhost:3000/api/colour'
  const colour = new Colour(url)
  colour.getData();

const gridElement = document.querySelector('div#colour-list');
const gridView = new GridView(gridElement);
gridView.bindEvents();


// const colourItem = document.querySelector('div#colour-item');
// const cellView = new CellView(colourItem);
// cellView.bindEvents();

});
