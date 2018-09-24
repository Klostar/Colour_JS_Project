const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const InformationView = function (element) {
this.element = element;
this.colour = null;
};

InformationView.prototype.bindEvents = function () {
  PubSub.subscribe("CellView:colour-selected", (event) => {
    this.colour = event.detail
    this.render(this.colour)

  })
};


InformationView.prototype.render = function () {
  this.element.innerHTML = '';
  const colorInfo = document.createElement('div');

  const name = document.createElement('h2');
  name.textContent = this.colour.name.toUpperCase();
  this.element.appendChild(name);

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


InformationView.prototype.populateAffectList = function (affects, list) {
  affects.forEach((affect) => {
    // console.log(affect);
    const listItem = document.createElement('li');
    listItem.textContent = affect;
    list.appendChild(listItem)
  });


InformationView.prototype.populateBrandList = function (brand, list) {
  brand.forEach((brand) => {
    const brandListItem = document.createElement('li');
    brandListItem.textContent = brand;
    // console.log(this.colour.brand);
    list.appendChild(brandListItem)
  });
};


};
InformationView.prototype.createList = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

InformationView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};


module.exports = InformationView;
