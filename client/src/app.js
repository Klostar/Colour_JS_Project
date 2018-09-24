const Colour = require('./models/colour.js');
const CellView = require('./views/cell_view.js');
const GridView = require('./views/grid_view.js');
const InformationView = require('./views/information_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const url = 'http://localhost:3000/api/colour'

  const colour = new Colour(url)
  colour.getData();

  const gridElement = document.querySelector('div#colours-list');
  const gridView = new GridView(gridElement);
  gridView.bindEvents();


  const information = document.querySelector('div#colour-item');
  const informationView = new InformationView(information);
  informationView.bindEvents();


// change background colours
//
//
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
// current index + 1 - keeps counting up

  //if current index is undefined, current index morethan or equal to colour.length
//Returns expr1 if it can be converted to true; otherwise, returns expr2.
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
},

2000);



//table of information from highchart to show information on
//
//nations favourtie colour
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: ' Nations <br>Favourite<br>Colour',
    align: 'center',
    verticalAlign: 'middle',
    y: 40
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%']
    }
  },
  series: [{
    type: 'pie',
    name: 'Nations Favourite Colours by Percentage',
    innerSize: '50%',
    data: [
      ['Blue', 33],
      ['Red', 25],
      ['Purple', 13],
      ['green', 10.78],
      ['Pink', 8.42],
      ['Black', 2.86 ],
      ['Yellow', 2.47],
      ['Orange', 2],
      ['White',1],
      // ['Brown',1]
      {
        name: 'Brown',
        y: 1,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});


});
