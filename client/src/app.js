const Colour = require('./models/colour.js');
const CellView = require('./views/cell_view.js');
const GridView = require('./views/grid_view.js');
const InformationView = require('./views/information_view.js');
const RandomColourView = require('./views/random_colour_view.js');
const HighchartsView = require('./views/chart_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const url = 'http://localhost:3000/api/colour'

  const colour = new Colour(url)
  colour.getData();

  const gridElement = document.querySelector('div#colours-list');
  const gridView = new GridView(gridElement);
  gridView.bindEvents();


  const information = document.querySelector('div#colour-item');
  const informationView = new InformationView(information);
  informationView.bindEvents();

  const randomColourView = new RandomColourView();
  randomColourView.render();

  const highchartsView = new HighchartsView();
  highchartsView.render();


// change background colours

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
},

2000);

});
