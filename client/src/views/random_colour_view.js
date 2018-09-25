const RandomColourView = function (){

}


RandomColourView.prototype.render = function () {
  const randomColour = document.createElement('div');
  randomColour.classList.add('randomColour');
  let colourRand = Math.floor(Math.random()*16777215).toString(16);
  let colourRandom = '#' + colourRand
  randomColour.style.height = "50px";
  randomColour.style.width = "50px";
  randomColour.style.padding = "10px";
  randomColour.style.margin = "10px";
  randomColour.style.background = colourRandom;
  randomColour.style.border ="1px solid black"
  console.log(colourRandom);
  const randomColourContainer = document.querySelector('#random-colour');
  randomColourContainer.appendChild(randomColour);


};

module.exports = RandomColourView;
