function ready() {
	// do your stuff
	console.log('locked and loaded 🚀');

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
}

// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
	ready();
} else {
	// the document hasn't finished loading/parsing yet so let's add an event handler
	document.addEventListener('DOMContentLoaded', ready);
}
