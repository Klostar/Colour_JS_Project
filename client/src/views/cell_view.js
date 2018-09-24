const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const CellView = function (element,colour) {
this.element = element;
this.colour = colour;
};

CellView.prototype.render = function () {
  const name = document.createElement('h2');
  name.textContent = this.colour.name.toUpperCase();
  this.element.appendChild(name);

  const symbolism = document.createElement('p')
  symbolism.textContent = this.colour.symbolism;
  this.element.appendChild(symbolism)

  const affectsList = document.createElement('ul')
  this.populateAffectList(this.colour.affects, affectsList);
  this.element.appendChild(affectsList)

};

CellView.prototype.populateAffectList = function (affects, list) {
  affects.forEach((affect) => {
    const listItem = document.createElement('li');
    listItem.textContent = this.colour.affects;
    list.appendChild(listItem)

  })

};

CellView.prototype.createList = function (label,property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};







  // const name = this.createHeading(colour.name);
  // colourContainer.appendChild(name)
  //
  // const symbolism = this.createDetail('Symbolism', colour.symbolism);
  // colourContainer.appendChild(symbolism)
  //
  // this.container.appendChild(colourContainer);






module.exports = CellView;
