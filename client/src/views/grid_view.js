const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CellView = require('./cell_view.js');
// const InformationView = require('./information_view.js');


const GridView = function (element) {
  this.element = element;

}

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Colour:all-data', (event) => {
    this.render(event.detail);

  });
};

//random colour on refresh of page

const randomColour = document.createElement('div');
randomColour.classList.add('randomColour');
let colourRand = Math.floor(Math.random()*16777215).toString(16);
let colourRandom = '#' + colourRand

console.log(colourRandom);



GridView.prototype.render = function (colours) {
colours.forEach((colour) => {
    const cellView = new CellView(this.element, colour);
    cellView.render();
  })
  // const cellView = new CellView(colour);
  // colourItem.forEach((colour) => cellView.render(colour))
};


module.exports = GridView;
