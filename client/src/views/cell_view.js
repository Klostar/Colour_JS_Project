const PubSub = require('../helpers/pub_sub.js');

const CellView = function (container) {
this.container = container;
};


CellView.prototype.createColourDetail = function (colour) {
  const colourContainer = document.createElement('div');
  colourDetial.id = 'colour-detail';

  const name = this.createHeading(colour.name);
  colourContainer.appendChild(name)

  const symbolism = this.createDetail('Symbolism', colour.symbolism);
  colourContainer.appendChild(symbolism)

  this.container.appendChild(colourContainer);



};


module.exports = CellView;
