/* ==========================================================================
All sub page's javascript
========================================================================== */
function ready() {
	// do your stuff
	console.log('Sub Page is locked and loaded 🚀');

	/**
	* Animate Front Page
	*/
	var nav = document.getElementById('nlcstar--nav-wrapper');
	var content = document.getElementById('content');

	function animateNLC(el, time) {
		if (time) {
			time;
		} else {
			time = 0;
		}
		setTimeout(
			function() {
				el.classList.add('animate');
			}.bind(el),
			time
		);
	}
	animateNLC(nav, 0);
	animateNLC(content, 800);
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
}

// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
	ready();
} else {
	// the document hasn't finished loading/parsing yet so let's add an event handler
	document.addEventListener('DOMContentLoaded', ready);
}
