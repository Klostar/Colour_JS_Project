const config = {
  entry: `${__dirname}/client/src/app.js`, // entry point, first line of code that executes (dirname = pwd)
  output: {
    path: `${__dirname}/client/public/js`, // describing the file we want webpack to create (dirname = pwd)
    filename: 'bundle.js' // file name output, convention is bundle.js
  },
  mode: 'development' // set development mode
};

module.exports = config;
