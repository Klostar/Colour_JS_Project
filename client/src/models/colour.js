const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Colour = function (url) {
  this.url = url
};


Colour.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((colourItem) => {
    PubSub.publish('Colour:all-data',colourItem)
  })
.catch(console.err)
};

// Colour.prototype.getData = function () {
//   this.request.get()
//
//   .then((colours) => {
//      PubSub.publish('Colour:colour-data-ready',colours)
//   })
//   .catch(console.err);
//   // request.get((data) => {
//   //   PubSub.publish('Colour:colour-data-ready')
//
//   };


module.exports = Colour;
