const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CellView = function (element) {
this.element = element;
};

CellView.prototype.render = function (colourItem) {

  const name = document.createElement('h2');
  name.textContent = colourItem.name;
  this.element.appendChild(name);
  console.log(name);

  // const name = this.createHeading(colour.name);
  // colourContainer.appendChild(name)
  //
  // const symbolism = this.createDetail('Symbolism', colour.symbolism);
  // colourContainer.appendChild(symbolism)
  //
  // this.container.appendChild(colourContainer);



};


module.exports = CellView;
