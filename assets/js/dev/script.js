function ready() {
	// do your stuff
	console.log('locked and loaded 🚀');

	// Update Analytics
	// Barba.Dispatcher.on('initStateChange', function() {
	// 	//ga('send', 'pageview', location.pathname);
	// 	console.log('Barba.Dispatcher');
	// });

	// Animate the mobile menu
	document.querySelector('#nav-icon').addEventListener('click', function(e) {
		document.querySelector('#nav-icon').classList.toggle('open');
		document.querySelector('.navbar-menu').classList.toggle('open');
		//document.querySelector('.navbar-burger').classList.toggle('open');

		window.setTimeout(showLinks, 100);
		function showLinks() {
			document.querySelector('.nlcstar--site-nav').classList.toggle('open');
		}
	});

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
		inview.destroy();
	}

	// WaypointJS
	// console.log(chart.update((data = {})));
	// var waypoint = new Waypoint({
	// 	element: document.querySelector('.nlcstar--front-facts.nlcstar--theme-nevada.chart'),
	// 	handler: function(direction) {
	// 		console.log('You have scrolled to a thing' + direction);
	// 		//loadChart();
	// 	},
	// 	entered: function(direction) {
	// 		console.log('Entered triggered with direction ' + direction);
	// 		loadChart();
	// 	}
	// });
	chart.update((data = {}));
	var inview = new Waypoint.Inview({
		element: document.querySelector('.nlcstar--front-facts.nlcstar--theme-nevada.chart'),
		enter: function(direction) {
			console.log('Enter triggered with direction ' + direction);
		},
		entered: function(direction) {
			console.log('Entered triggered with direction ' + direction);
			loadChart();
		},
		exit: function(direction) {
			console.log('Exit triggered with direction ' + direction);
		},
		exited: function(direction) {
			console.log('Exited triggered with direction ' + direction);
		}
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

// $(document).ready(function() {
// 	console.log('Barba');
// 	var transEffect = Barba.BaseTransition.extend({
// 		start: function start() {
// 			var _this2 = this;

// 			this.newContainerLoading.then(function(val) {
// 				return _this2.fadeInNewcontent($(_this2.newContainer));
// 			});
// 		},
// 		fadeInNewcontent: function fadeInNewcontent(nc) {
// 			nc.hide();
// 			var _this = this;
// 			$(this.oldContainer).fadeOut(500).promise().done(function() {
// 				nc.css('visibility', 'visible');
// 				nc.fadeIn(500, function() {
// 					_this.done();
// 				});
// 				$('html, body').animate(
// 					{
// 						scrollTop: 300
// 					},
// 					1000
// 				);
// 			});
// 		}
// 	});
// 	Barba.Pjax.getTransition = function() {
// 		return transEffect;
// 	};
// 	Barba.Pjax.start();
// });
