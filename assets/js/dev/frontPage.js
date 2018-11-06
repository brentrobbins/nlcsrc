/* ==========================================================================
Front page javascript
========================================================================== */
function ready() {
	// do your stuff
	console.log('Front Page is locked and loaded 🚀');

	// Lazy load images
	var myLazyLoad = new LazyLoad({
		elements_selector: '.lazy'
	});

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
	animateNLC(hero, 1000);
	animateNLC(heroh1, 1400);
	animateNLC(heroh2, 1600);

	/**
	* Mobile Menu
	*/
	document.querySelector('#nav-icon').addEventListener('click', function(e) {
		document.querySelector('#nav-icon').classList.toggle('open');
		document.querySelector('.navbar-menu').classList.toggle('open');
		document.querySelector('body').classList.toggle('mobilenav');
		//document.querySelector('.navbar-burger').classList.toggle('open');

		window.setTimeout(showLinks, 100);
		function showLinks() {
			document.querySelector('.nlcstar--site-nav').classList.toggle('open');
		}
	});

	/**
	* Chart Load funcationality triggered when scrolled into view
	*/
	function loadChart() {
		/**
	* Chart data
	*/
		var data = {};

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
				right: 40,
				bottom: 50
			},
			plugins: [
				Chartist.plugins.legend({
					clickable: false,
					legendNames: [
						//MONTHLY INDEX: Natural HDPE
						//MONTHLY INDEX: PET Plastic
						//MONTHLY INDEX: Alum Cans Sorted & Baled by ton
						//MONTHLY INDEX: Steel Cans - Sorted & Baled
						'Mixed Plastic',
						'Corrugated Containers',
						'Mixed Paper',
						'Sorted Res Paper'
					]
				})
			]
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
			delays = 50,
			durations = 50;
		chart.on('draw', function(data) {
			seq++;
			if (data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 200 * data.index,
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

		var data = {
			labels: [
				"Jan '17",
				//	'1/27/2017',
				//	'2/24/2017',
				"Mar '17",
				//	'4/28/2017',
				"May '17",
				//	'6/30/2017',
				"Jul '17",
				//	'8/31/2017',
				"Aug '17",
				//	'10/31/2017',
				"Nov '17",
				//	'12/22/2017',
				"Jan '18",
				//	'2/16/2018',
				"Mar '18",
				//	'4/9/2018',
				"May '18",
				//	'6/15/2018',
				"Jul '18"
			],
			series: [
				//MONTHLY INDEX: Mixed Plastic
				[
					100,
					//		100,
					//		100,
					100,
					//		100,
					100,
					//		100,
					100,
					//		100,
					100,
					//		95.70041609,
					62.41331484,
					//		61.16504854,
					61.16504854,
					//		61.16504854,
					61.16504854,
					//		45.4923717,
					24.27184466,
					//		24.27184466,
					24.27184466
				],
				//MONTHLY INDEX: Natural HDPE
				//MONTHLY INDEX: PET Plastic
				//MONTHLY INDEX: Alum Cans Sorted & Baled by ton
				// MONTHLY INDEX: Corrugated Containers
				[
					100,
					//	101.9601212,
					//	111.8220986,
					132.9964179,
					//	137.1458631,
					133.7040655,
					//	137.3036748,
					157.8116781,
					//	153.347862,
					140.8619523,
					//	103.6822725,
					92.84336565,
					//	92.92227149,
					92.60915308,
					//	88.85173217,
					81.88296886,
					//	81.64625135,
					76.71401017,
					//	69.74775181,
					59.26204254
				],
				//MONTHLY INDEX: Mixed Paper
				[
					100,
					//	102.7533623,
					//	106.7280878,
					113.0184616,
					//	98.94983939,
					79.42567687,
					//	74.24017791,
					87.80578206,
					//	88.03346394,
					79.5404003,
					//	49.14751668,
					39.05538495,
					//	39.3872004,
					39.3872004,
					//	33.26096933,
					16.21483286,
					//	5.739701366,
					2.370362526,
					//	1.876169296,
					2.109146105
				],
				//MONTHLY INDEX: Sorted Res Paper
				[
					100,
					//	100,
					//	103.9138943,
					109.4935421,
					//	102.0054795,
					90.75538161,
					//	86.1072407,
					95.40039139,
					//	105.872407,
					93.84109589,
					//	68.00939335,
					60.96438356,
					//	60.96438356,
					62.28414873,
					//	63.16086106,
					50.53620352,
					//	29.84422701,
					12.38043053,
					//	13.84892368,
					32.68571428
				]
				//MONTHLY INDEX: Steel Cans - Sorted & Baled
			]
		};

		chart.update((data = data));
		inviewChart.destroy();
	}
	//loadChart();
	/**
	* Kill Chart Data
	*/
	//chart.update((data = {}));

	/**
	* In View Animation Triggers for the chart
	*/

	var inviewChart = new Waypoint({
		element: document.querySelector('#fact3'),
		handler: function(direction) {
			console.log('Waypoint element chart');

			loadChart();
		},
		offset: '90%'
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
	var firstNumberAnimate = new CountUp('firstNumber', 0, 34.7, 1, 1.5, options);
	var secondNumberAnimate = new CountUp('secondNumber', 0, 6.8, 1, 2, options);
	var fourthNumberAnimate = new CountUp('fourthNumber', 0, 16, 0, 2.5, options);
	var fifthNumberAnimate = new CountUp('fifthNumber', 0, 515, 0, 2.5, options);

	var waypoint1 = new Waypoint({
		element: document.getElementById('fact1'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact1 figure').classList.add('animate');
			firstNumberAnimate.start();
		},
		offset: '90%'
	});
	var waypoint2 = new Waypoint({
		element: document.getElementById('secondNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact2 figure').classList.add('animate');
			secondNumberAnimate.start();
		},
		offset: '90%'
	});

	var waypoint4 = new Waypoint({
		element: document.getElementById('fourthNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact4 figure').classList.add('animate');
			fourthNumberAnimate.start();
		},
		offset: '90%'
	});
	var waypoint5 = new Waypoint({
		element: document.getElementById('fifthNumber'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact5 figure').classList.add('animate');
			fifthNumberAnimate.start();
		},
		offset: '90%'
	});
	var waypoint6 = new Waypoint({
		element: document.getElementById('fact6'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact6 figure').classList.add('animate');
		},
		offset: '90%'
	});
	var waypoint7 = new Waypoint({
		element: document.getElementById('fact7'),
		handler: function(direction) {
			console.log('Waypoint element id: ' + this.element.id);
			document.querySelector('#fact7').classList.add('animate');
		},
		offset: '90%'
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
