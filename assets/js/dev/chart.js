var data = {
	labels: [ "Jan '17", "May '17", "Sep '17", "Jan '18", "Mar  '18", "May '18", "Jul '18" ],
	series: [ [ 100, 140, 130, 160, 110, 90, 60 ], [ 100, 120, 90, 100, 80, 20, 15 ], [ 100, 115, 80, 95, 70, 50, 45 ] ]
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
	lineSmooth: false,
	axisX: {
		// showGrid: false,
	},
	axisY: {
		// showGrid: false,
		onlyInteger: true
	},
	fullWidth: true,
	chartPadding: {
		right: 40
	}
};

var responsiveOptions = [
	[
		'screen and (min-width: 641px) and (max-width: 1024px)',
		{
			seriesBarDistance: 7,
			axisX: {
				labelInterpolationFnc: function(value) {
					return value;
				}
			}
		}
	],
	[
		'screen and (max-width: 640px)',
		{
			seriesBarDistance: 5,
			axisX: {
				labelInterpolationFnc: function(value) {
					return value[0];
				}
			}
		}
	]
];

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object. As a third parameter we pass in our custom options.
var chart = Chartist.Line('.ct-chart', data, options, responsiveOptions);
var seq = 0,
	delays = 80,
	durations = 500;
chart.on('draw', function(data) {
	seq++;
	if (data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 800 * data.index,
				dur: 1000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	} else if (data.type === 'point') {
		data.element.animate({
			x1: {
				begin: seq * delays,
				dur: durations,
				from: data.x - 10,
				to: data.x,
				easing: 'easeOutQuart'
			},
			x2: {
				begin: seq * delays,
				dur: durations,
				from: data.x - 10,
				to: data.x,
				easing: 'easeOutQuart'
			},
			opacity: {
				begin: seq * delays,
				dur: durations,
				from: 0,
				to: 1,
				easing: 'easeOutQuart'
			}
		});
	}
});

// // Let's put a sequence number aside so we can use it in the event callbacks
// var seq = 0,
// 	delays = 80,
// 	durations = 500;

// // Once the chart is fully created we reset the sequence
// chart.on('created', function() {
// 	seq = 0;
// });

// // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
// chart.on('draw', function(data) {
// 	seq++;

// 	if (data.type === 'line') {
// 		// If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
// 		data.element.animate({
// 			opacity: {
// 				// The delay when we like to start the animation
// 				begin: seq * delays + 1000,
// 				// Duration of the animation
// 				dur: durations,
// 				// The value where the animation should start
// 				from: 0,
// 				// The value where it should end
// 				to: 1
// 			}
// 		});
// 	} else if (data.type === 'label' && data.axis === 'x') {
// 		data.element.animate({
// 			y: {
// 				begin: seq * delays,
// 				dur: durations,
// 				from: data.y + 100,
// 				to: data.y,
// 				// We can specify an easing function from Chartist.Svg.Easing
// 				easing: 'easeOutQuart'
// 			}
// 		});
// 	} else if (data.type === 'label' && data.axis === 'y') {
// 		data.element.animate({
// 			x: {
// 				begin: seq * delays,
// 				dur: durations,
// 				from: data.x - 100,
// 				to: data.x,
// 				easing: 'easeOutQuart'
// 			}
// 		});
// 	} else if (data.type === 'point') {
// 		data.element.animate({
// 			x1: {
// 				begin: seq * delays,
// 				dur: durations,
// 				from: data.x - 10,
// 				to: data.x,
// 				easing: 'easeOutQuart'
// 			},
// 			x2: {
// 				begin: seq * delays,
// 				dur: durations,
// 				from: data.x - 10,
// 				to: data.x,
// 				easing: 'easeOutQuart'
// 			},
// 			opacity: {
// 				begin: seq * delays,
// 				dur: durations,
// 				from: 0,
// 				to: 1,
// 				easing: 'easeOutQuart'
// 			}
// 		});
// 	} else if (data.type === 'grid') {
// 		// Using data.axis we get x or y which we can use to construct our animation definition objects
// 		var pos1Animation = {
// 			begin: seq * delays,
// 			dur: durations,
// 			from: data[data.axis.units.pos + '1'] - 30,
// 			to: data[data.axis.units.pos + '1'],
// 			easing: 'easeOutQuart'
// 		};

// 		var pos2Animation = {
// 			begin: seq * delays,
// 			dur: durations,
// 			from: data[data.axis.units.pos + '2'] - 100,
// 			to: data[data.axis.units.pos + '2'],
// 			easing: 'easeOutQuart'
// 		};

// 		var animations = {};
// 		animations[data.axis.units.pos + '1'] = pos1Animation;
// 		animations[data.axis.units.pos + '2'] = pos2Animation;
// 		animations['opacity'] = {
// 			begin: seq * delays,
// 			dur: durations,
// 			from: 0,
// 			to: 1,
// 			easing: 'easeOutQuart'
// 		};

// 		data.element.animate(animations);
// 	}
// });

// // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
// chart.on('created', function() {
// 	if (window.__exampleAnimateTimeout) {
// 		clearTimeout(window.__exampleAnimateTimeout);
// 		window.__exampleAnimateTimeout = null;
// 	}
// 	window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
// });

// window.addEventListener('resize', function() {
// 	chart.update();
// });
