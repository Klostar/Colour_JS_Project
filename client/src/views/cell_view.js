const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const CellView = function (element,colour) {
this.element = element;
this.colour = colour;
};

CellView.prototype.render = function () {
  const name = document.createElement('h2');
  name.textContent = this.colour.name;
  this.element.appendChild(name);

  const symbolism = document.createElement('p')
  symbolism.textContent = this.colour.symbolism;
  this.element.appendChild(symbolism)





  // const name = this.createHeading(colour.name);
  // colourContainer.appendChild(name)
  //
  // const symbolism = this.createDetail('Symbolism', colour.symbolism);
  // colourContainer.appendChild(symbolism)
  //
  // this.container.appendChild(colourContainer);



};


module.exports = CellView;
