

const RandomColourView = function (){
}

RandomColourView.prototype.render = function () {
  const randomColour = document.createElement('div');
  randomColour.classList.add('randomColour');
  let colourRand = Math.floor(Math.random()*16777215).toString(16);
  let colourRandom = '#' + colourRand
  randomColour.style.background = colourRandom;
  randomColour.span = colourRandom;
  const randomColourContainer = document.querySelector('#random-colour');
  randomColourContainer.appendChild(randomColour);

};

module.exports = RandomColourView;
