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
  colourSquare.classList.add('square');
  colourSquare.style.background = this.colour.colourValue
  colourSquare.style.border ="1px solid black"
  this.element.appendChild(colourSquare);

  colourSquare.addEventListener('click', (event) => {
  PubSub.publish("CellView:colour-selected", this.colour)

});


// CellView.prototype.renderColourInfo = function (colour) {
//   colour.forEach((colour) => {
//     const colourInfo = this.createColourListItem
//
//   })
//
// };
//
// // CellView.prototype.createColourListItem = function (colour) {
//   const cellView = new CellView();
//   const informationColour = informationView.createColourInformation(colour);
//   return informationColour;
//   console.log(informationColour);
// };
};



module.exports = CellView;
