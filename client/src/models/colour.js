const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Colour = function (url) {
  this.url = 'http://localhost:3000/api/colour';
  this.request = new Request(this.url);
};



module.exports = Colour;
