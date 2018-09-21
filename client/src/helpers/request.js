const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};
// only have get requests.. do not need other functions

// Request.prototype.post = function (payload) {
//   return fetch(this.url, {
//     method: 'POST',
//     body: JSON.stringify(payload),
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then((response) => response.json());
// };
//
// Request.prototype.delete = function (id) {
//   return fetch(`${this.url}/${id}`, {
//     method: 'DELETE'
//   })
//     .then((response) => response.json());

module.exports = Request;
