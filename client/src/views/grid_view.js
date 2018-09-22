const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CellView = require('./cell_view.js');

const GridView = function (element) {
  this.element = element;

}

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Colour:all-data', (event) => {
  event.detail.forEach((colour) => {
    const div = document.createElement('div');
    div.classList.add('colour-item');
    // this.element.appendChild('div');
    const colourItem = new CellView(div)
    colourItem.render(colour)
    console.log(colour);
  })

  })

GridView.prototype.render = function (colourItem) {
  const cellView = new CellView(this.element);

};
};

module.exports = GridView;
