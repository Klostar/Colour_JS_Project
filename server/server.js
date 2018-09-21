const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

app.use(parser.json());

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('colours');
    const colourCollection = db.collection('colour');
    const colourRouter = createRouter(colourCollection);
    app.use('/api/colour', colourRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
