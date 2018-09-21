use colours;
db.dropDatabase();
//camelCase convention

// collection in db
//how to put hex colours into object.
db.colour.insertMany([
{
  name: "red",
  symbolism: "Red has more personal associations than any other color. Recognized as a stimulant, red is inherently exciting and the amount of red is directly related to the level of energy perceived. Red draws attention and a keen use of red as an accent can immediately focus attention on a particular element.",
  affects: ["increases enthusiasm","stimulates energy and can increase the blood pressure, respiration, heartbeat, and pulse rate","encourages action and confidence"],
  randomFact: "Cochineal red, discovered by the Aztecs, was made using the female cochineal beetle. A pound of water-soluble extract required about a million insects. For the Aztecs, Indian red dye was considered more valuable than gold! However, it was the Spaniards who introduced the crimson color of Cochineal red to Europe in the 1500s." ,
  brand: ["coca-cola","target","vodaphone"],
  colourValue: #FF0000
},
{
  name: "orange",
  symbolism:"Orange is a close relative of red, sparks more controversy than any other hue. There is usually strong positive or negative association to orange and true orange generally elicits a stronger love it or hate it response than other colors. Fun and flamboyant, orange radiates warmth and energy. Interestingly, some tones of orange, such as terra cotta, peach, and rust have very broad appeal." ,
  affects:["stimulates activity","stimulates appetite","encourages socialization"],
  randomFact:"Orange is the color that means HIGH in the color-coded threat system established by presidential order in March 2002. This system quickly informs law enforcement agencies when intelligence indicates a change in the terrorist threat" ,
  brand: ["amazon","rockstar games","harley davidson"],
  colourValue: #FFA500
},
{
  name: "yellow",
  symbolism: "Yellow shines with optimism, enlightenment, and happiness. Shades of golden yellow carry the promise of a positive future. Yellow will advance from surrounding colors and instill optimism and energy, as well as spark creative thoughts. Yellow is the color of the sun - the life support for our planet. As such it has come to represent life, energy, happiness, hope and wisdom." ,
  affects: ["stimulates mental processes", "stimulates the nervous system","activates memory"],
  randomFact:"The comic book character Green Lantern was afraid of the color yellow",
  brand: ["Warner Bros. Pictures","Mcdonalds","Ferrari"],
  colourValue: #FFFF00
},
{
  name: 'green',
  symbolism: ,
  affects: [] ,
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'blue',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'purple',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},

{
  name: 'pink',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'brown',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'grey',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'black',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: 'white',
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
}]
);
