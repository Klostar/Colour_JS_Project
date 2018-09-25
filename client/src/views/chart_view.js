const HighchartsView = function (){

}

HighchartsView.prototype.render = function () {

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

}


module.exports = HighchartsView;
