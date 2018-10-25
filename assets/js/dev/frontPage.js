/* ==========================================================================
Front page javascript
========================================================================== */
function ready() {
	// do your stuff
	console.log('Front Page is locked and loaded 🚀');

	/**
	* Animate Front Page
	*/
	var hero = document.getElementById('nlcstar--front-hero-wrapper');
	var site = document.getElementById('nlcstar--front-header');
	var nav = document.getElementById('nlcstar--nav-wrapper');
	var heroh1 = document.querySelector('#nlcstar--front-hero-wrapper h1');
	var heroh2 = document.querySelector('#nlcstar--front-hero-wrapper h2');

	function animateNLC(el, time) {
		if (time) {
			time;
		} else {
			time = 1000;
		}
		setTimeout(
			function() {
				el.classList.add('animate');
			}.bind(el),
			time
		);
	}
	animateNLC(site, 0);
	animateNLC(nav, 400);
	animateNLC(hero, 2400);
	animateNLC(heroh1, 2800);
	animateNLC(heroh2, 3200);

	/**
	* Mobile Menu
	*/
	document.querySelector('#nav-icon').addEventListener('click', function(e) {
		document.querySelector('#nav-icon').classList.toggle('open');
		document.querySelector('.navbar-menu').classList.toggle('open');
		//document.querySelector('.navbar-burger').classList.toggle('open');

		window.setTimeout(showLinks, 100);
		function showLinks() {
			document.querySelector('.nlcstar--site-nav').classList.toggle('open');
		}
	});

	/**
	* Chart data
	*/
	var data = {
		labels: [ "Jan '17", "May '17", "Sep '17", "Jan '18", "Mar  '18", "May '18", "Jul '18" ],
		series: [
			[ 100, 140, 130, 160, 110, 90, 60 ],
			[ 100, 120, 90, 100, 80, 20, 15 ],
			[ 100, 115, 80, 95, 70, 50, 45 ]
		]
	};

	/**
	* Chart Options
	*/
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

	/**
	* Chart object
	*/
	var chart = Chartist.Line('.ct-chart', data, options, responsiveOptions);

	/**
	* Chart Animation
	*/
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

	/**
	* Chart Load funcationality triggered when scrolled into view
	*/
	function loadChart() {
		var data = {
			labels: [ "Jan '17", "May '17", "Sep '17", "Jan '18", "Mar  '18", "May '18", "Jul '18" ],
			series: [
				[ 100, 140, 130, 160, 110, 90, 60 ],
				[ 100, 120, 90, 100, 80, 20, 15 ],
				[ 100, 115, 80, 95, 70, 50, 45 ]
			]
		};
		chart.update((data = data));
		inviewChart.destroy();
	}
	/**
	* Kill Chart Data
	*/
	chart.update((data = {}));

	/**
	* In View Animation Triggers for the chart
	*/

	var inviewChart = new Waypoint({
		element: document.querySelector('.nlcstar--front-facts.nlcstar--theme-nevada.chart'),
		handler: function(direction) {
			//console.log('Waypoint element chart');
			loadChart();
		},
		offset: '40%'
	});

	/**
	* Count Up Animations
	*/

	var options = {
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.'
	};
	var firstNumberAnimate = new CountUp('firstNumber', 0, 95, 0, 1.5, options);
	var secondNumberAnimate = new CountUp('secondNumber', 0, 2.2, 1, 2, options);
	var fourthNumberAnimate = new CountUp('fourthNumber', 0, 15, 0, 2.5, options);
	var fifthNumberAnimate = new CountUp('fifthNumber', 0, 515, 0, 2.5, options);

	var waypoint1 = new Waypoint({
		element: document.getElementById('firstNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact1 figure').classList.add('animate');
			firstNumberAnimate.start();
		},
		offset: '80%'
	});
	var waypoint2 = new Waypoint({
		element: document.getElementById('secondNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact2 figure').classList.add('animate');
			secondNumberAnimate.start();
		},
		offset: '80%'
	});

	var waypoint4 = new Waypoint({
		element: document.getElementById('fourthNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact4 figure').classList.add('animate');
			fourthNumberAnimate.start();
		},
		offset: '80%'
	});
	var waypoint5 = new Waypoint({
		element: document.getElementById('fifthNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact5 figure').classList.add('animate');
			fifthNumberAnimate.start();
		},
		offset: '80%'
	});
	var waypoint6 = new Waypoint({
		element: document.getElementById('fact6'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact6 figure').classList.add('animate');
		},
		offset: '80%'
	});
	var waypoint7 = new Waypoint({
		element: document.getElementById('fact7'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact7').classList.add('animate');
		},
		offset: '80%'
	});
}

// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
	ready();
} else {
	// the document hasn't finished loading/parsing yet so let's add an event handler
	document.addEventListener('DOMContentLoaded', ready);
}
