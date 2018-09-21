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
  colourValue: "#FF0000"
},
{
  name: "orange",
  symbolism:"Orange is a close relative of red, sparks more controversy than any other hue. There is usually strong positive or negative association to orange and true orange generally elicits a stronger love it or hate it response than other colors. Fun and flamboyant, orange radiates warmth and energy. Interestingly, some tones of orange, such as terra cotta, peach, and rust have very broad appeal." ,
  affects:["stimulates activity","stimulates appetite","encourages socialization"],
  randomFact:"Orange is the color that means HIGH in the color-coded threat system established by presidential order in March 2002. This system quickly informs law enforcement agencies when intelligence indicates a change in the terrorist threat" ,
  brand: ["amazon","rockstar games","harley davidson"],
  colourValue: "#FFA500"
},
{
  name: "yellow",
  symbolism: "Yellow shines with optimism, enlightenment, and happiness. Shades of golden yellow carry the promise of a positive future. Yellow will advance from surrounding colors and instill optimism and energy, as well as spark creative thoughts. Yellow is the color of the sun - the life support for our planet. As such it has come to represent life, energy, happiness, hope and wisdom." ,
  affects: ["stimulates mental processes", "stimulates the nervous system","activates memory"],
  randomFact:"The comic book character Green Lantern was afraid of the color yellow",
  brand: ["warner bros. pictures","mcdonalds","ferrari"],
  colourValue: "#FFFF00"
},
{
  name: "green",
  symbolism:"Green is the color we associate with money, the environment, and aliens, and it’s the color of revitalization and rebirth. Green stands for balance, nature, spring, and rebirth. It’s the symbol of prosperity, freshness, and progress. In Japanese culture, green is associated with eternal life. Although, we also associate green with sickness, envy and illness" ,
  affects: ["Your muscles are more relaxed","stress-relieving",] ,
  randomFact:"Green is the color used for night-vision goggles because the human eye is most sensitive to and able to discern the most shades of that color." ,
  brand: ["harrods","starbucks","heineken"],
  colourValue: "#00AF33"
},
{
  name: "blue",
  symbolism: "Blue is the overwhelming “favorite color.” Blue is seen as trustworthy, dependable, and committed. Blue is the least “gender specific” color, having equal appeal to both men and women. The color of ocean and sky, blue is perceived as a constant in our lives. As the collective color of the spirit, it invokes rest and can cause the body to produce chemicals that are calming. However, not all blues are serene and sedate. Electric or brilliant blues become dynamic and dramatic — an engaging color that expresses exhilaration. Some shades or the overuse of blue may come across as cold or uncaring. Indigo, a deeper blue, symbolizes a mystical borderland of wisdom, self-mastery, and spiritual realization. While blue is the color of communication with others, indigo turns the blue inward to increase personal thought, profound insights, and instant understandings.",

  affects: ["calming","cooling","aids intuition"],
  randomFact:"Blue is the favored color choice for toothbrushes." ,
  brand: ["NHS","facebook","samsung"],
  colourValue:"#0000FF"
},
{
  name: "purple",
  symbolism: "Purple embodies the balance of red’s stimulation and blue’s calm. This dichotomy can cause unrest or uneasiness unless the undertone is clearly defined, at which point the purple takes on the characteristics of its undertone. With a sense of mystic and royal qualities, purple is a color often well liked by very creative or eccentric types and is the favorite color of adolescent girls.",
  affects: ["uplifts","offers a sense of spirituality","calms the mind and nerves"],
  randomFact: "Purple was the color of the first dye made by man. It was called “Mauveine” and was made out of coal tar. The recipe was discovered by William Henry Perkin in 1856.",
  brand: ["cadburys","monster","taco bell"],
  colourValue:"	#800080"
},

{
  name: "pink",
  symbolism: "Brighter pinks are youthful, fun, and exciting, while vibrant pinks have the same high energy as red; they are sensual and passionate without being too aggressive. Toning down the passion of red with the purity of white results in the softer pinks that are associated with romance. It’s not surprising that when giving or receiving flowers, pink blossoms are a favorite. Pink is the color of happiness and is sometimes seen as lighthearted.",
  affects: ["encourages action and confidence","Pink has been used in prison holding cells to effectively reduce erratic behavior."],
  randomFact: "Some studies of the color pink suggest that male weightlifters seem to lose strength in pink rooms, while women weightlifters tend to become stronger around the color.",
  brand: ["barbie", "cosmopolitan","Victoria Secret"],
  colourValue:
},
{
  name: "brown",
  symbolism: "Brown says stability, reliability, and approachability. It is the color of our earth and is associated with all things natural or organic",
  affects: ["supplies a feeling of wholesomeness","gives a sense orderliness","provides a connection with the earth"],
  randomFact: "If you dream of the color brown, it means you will be lucky with money.",
  brand: ["galaxy Chocolate","hersheys","UPS"],
  colourValue:
},
{
  name: "gray",
  symbolism: "Gray is the color of intellect, knowledge, and wisdom. It is perceived as long-lasting, classic, and often as sleek or refined. It is a color that is dignified, conservative, and carries authority. Gray is controlled and inconspicuous and is considered a color of compromise, perhaps because it sits between the extremes of black and white. Gray is a perfect neutral, which is why designers often use it as a background color.",
  affects: ["Unsettles","Creates expectations"],
  randomFact: "The human eye can distinguish about 500 shades of gray.",
  brand: ["apple","forbes","swarovski"],
  colourValue:"	#808080"
},
{
  name: "black",
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
},
{
  name: "white",
  symbolism: ,
  affects: [],
  randomFact: ,
  brand: [],
  colourValue:
}]
);
