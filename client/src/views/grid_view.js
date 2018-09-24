const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CellView = require('./cell_view.js');

const GridView = function (element) {
  this.element = element;

}

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Colour:all-data', (event) => {
    // console.log(event.detail);
    this.render(event.detail);
  // event.detail.forEach((colour) => {
  //   const div = document.createElement('div');
  //   div.classList.add('colour-item');
  //   // this.element.appendChild('div');
  //   const colourItem = new CellView(div)
  //   colourItem.render(colour)
    // console.log(colour) // recieving all the information from cellView.

  });
};

GridView.prototype.render = function (colours) {
colours.forEach((colour) => {
    const cellView = new CellView(this.element, colour);
    cellView.render();
  })
  // const cellView = new CellView(colour);
  // colourItem.forEach((colour) => cellView.render(colour))
};


module.exports = GridView;
