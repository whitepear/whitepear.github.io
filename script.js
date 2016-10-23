// Sticky Nav Scroll  
///////////////////////////////

// this code causes the nav to become fixed
// after the page has been scrolled past a certain point

window.addEventListener('scroll', function() {
	// check if scroll position has passed a certain point

	if (window.pageYOffset > 200) {
		document.querySelector('.custom-nav').classList.add('custom-nav-fixed');
	} else {
		document.querySelector('.custom-nav').classList.remove('custom-nav-fixed');
	}
});