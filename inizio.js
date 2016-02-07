var data = {
  labels: ['Immigrant', 'Non immigrant',],
  series: [8, 2]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart', data, options, responsiveOptions);



var chart = new Chartist.Line('.ct-chart1', {
  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Nov','Dec'],
  series: [
    [19, 18, null, null, 26, 29, 28, 24, null, null, 30, 37, null, null, null, null],
    [null, null, 13, 13, 14, 15, 16, 16, 17, 18, 21, 22, 20, 21, null, null],
    
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 10
  },
  low: 0
});



new Chartist.Bar('.ct-chart2', {
  labels: ['Fourth quarter of 2014', 'First quarter of 2015', 'Second quarter of 2015', 'Fourth quarter of 2015', 'First two months of 2015'],
  series: [
    [286764, 152893, 176061, 189085, 253451],
    [461195, 164432, 289066, 259914, 84787],
    [1091996, 183643, 243607, 446157, 481848]
  ]
}, {
  seriesBarDistance: 10,
  axisX: {
    offset: 60
  },
  axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return value + ' '
    },
    scaleMinSpace: 15
  }
});