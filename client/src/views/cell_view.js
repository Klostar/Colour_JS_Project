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

  //create square colour box for every colour.
  const colourSquare = document.createElement('div');
  // colourSquare.classList.add('square');
  colourSquare.style.height = "50px";
  colourSquare.style.width = "50px";
  colourSquare.style.background = this.colour.colourValue
  colourSquare.style.border ="1px solid black"
  this.element.appendChild(colourSquare);

  //colour the square using colourValue from API



  const symbolism = document.createElement('p')
  symbolism.textContent = this.colour.symbolism;
  this.element.appendChild(symbolism);

  const affectsTitle = this.createTextElement('h3','The Effect of this Colour is: ')
  this.element.appendChild(affectsTitle);

  const affectsList = document.createElement('ul')
  this.populateAffectList(this.colour.affects, affectsList);
  this.element.appendChild(affectsList);

  const randomFactTitle = this.createTextElement('h3',`Interesting Fact about ${this.colour.name}` )
  this.element.appendChild(randomFactTitle);

  const randomFact = document.createElement('p')
  randomFact.textContent = this.colour.randomFact;
  this.element.appendChild(randomFact)

  const brandListTitle = this.createTextElement('h3', `Brands that use ${this.colour.name} in their logo are :`);
  this.element.appendChild(brandListTitle);

  const brandList = document.createElement('ul');
  this.populateBrandList(this.colour.brand, brandList);
  this.element.appendChild(brandList);


};

CellView.prototype.populateAffectList = function (affects, list) {
  affects.forEach((affect) => {
    // console.log(affect);
    const listItem = document.createElement('li');
    listItem.textContent = affect;
    list.appendChild(listItem)

  })

CellView.prototype.populateBrandList = function (brand, list) {
  brand.forEach((brand) => {
    const brandListItem = document.createElement('li');
    brandListItem.textContent = brand;
    // console.log(this.colour.brand);
    list.appendChild(brandListItem)

  })

};


};

CellView.prototype.createList = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};



CellView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
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
