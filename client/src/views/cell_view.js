const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const InformationView = require('./information_view.js');


const CellView = function (element,colour) {
this.element = element;
this.colour = colour;
};

CellView.prototype.render = function () {

  // create square colour box for every colour.
  const colourSquare = document.createElement('div');
  // colourSquare.classList.add('square');
  colourSquare.style.height = "50px";
  colourSquare.style.width = "50px";
  colourSquare.style.padding = "10px";
  colourSquare.style.margin = "10px";
  colourSquare.style.background = this.colour.colourValue
  colourSquare.style.border ="1px solid black"
  this.element.appendChild(colourSquare);

  colourSquare.addEventListener('click', (event) => {
  PubSub.publish("CellView:colour-selected", this.colour)


})

};



module.exports = CellView;
