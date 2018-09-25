const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const InformationView = require('./information_view.js');



const CellView = function (element,colour) {
this.element = element;
this.colour = colour;
};



CellView.prototype.render = function () {
  const colourSquare = document.createElement('div');
  colourSquare.classList.add('square');
  colourSquare.style.background = this.colour.colourValue
  this.element.appendChild(colourSquare);

  colourSquare.addEventListener('click', (event) => {
  PubSub.publish("CellView:colour-selected", this.colour)

});

};



module.exports = CellView;
