'use strict';

// Sticky Nav Scroll  
/////////////////////////////////

// this code causes the nav to become fixed
// after the page has been scrolled past a certain point

window.addEventListener('scroll', function() {
	// check if scroll position has passed a certain point

	if (window.pageYOffset > 100) {
		document.querySelector('.custom-nav').classList.add('custom-nav-fixed');
	} else {
		document.querySelector('.custom-nav').classList.remove('custom-nav-fixed');
	}
});


// 'Index' Collapsible Sections (Mobile)
/////////////////////////////////

// this code allows project sections to
// expand and collapse on click
if (document.getElementById('fullStackHeader')) {
	var fullStackHeader = document.getElementById('fullStackHeader');
	var reactHeader = document.getElementById('reactHeader');
	var backEndHeader = document.getElementById('backEndHeader');
	var frontEndHeader = document.getElementById('frontEndHeader');

	fullStackHeader.addEventListener('click', function() {
		if (document.querySelector('.collapsed-fullstack-section')) {
			// if collapsed, expand sections

			var collapsedElements = document.querySelectorAll('.collapsed-fullstack-section');
			for (var i = 0; i < collapsedElements.length; i++) {
				collapsedElements[i].classList.remove('collapsed-fullstack-section');
				collapsedElements[i].classList.add('expanded-fullstack-section');
				fullStackHeader.innerHTML = 'Full-Stack Projects <span class="project-caret">&#9650;</span>';
			}
		} else {
			// if expanded, collapse sections

			var expandedElements = document.querySelectorAll('.expanded-fullstack-section');
			for (var i = 0; i < expandedElements.length; i++) {
				expandedElements[i].classList.remove('expanded-fullstack-section');
				expandedElements[i].classList.add('collapsed-fullstack-section');
				fullStackHeader.innerHTML = 'Full-Stack Projects <span class="project-caret">&#9660;</span>';
			}
		}
	});

	reactHeader.addEventListener('click', function() {
		if (document.querySelector('.collapsed-react-section')) {
			// if collapsed, expand sections

			var collapsedElements = document.querySelectorAll('.collapsed-react-section');
			for (var i = 0; i < collapsedElements.length; i++) {
				collapsedElements[i].classList.remove('collapsed-react-section');
				collapsedElements[i].classList.add('expanded-react-section');
				reactHeader.innerHTML = 'React Projects <span class="project-caret">&#9650;</span>';
			}
		} else {
			// if expanded, collapse sections

			var expandedElements = document.querySelectorAll('.expanded-react-section');
			for (var i = 0; i < expandedElements.length; i++) {
				expandedElements[i].classList.remove('expanded-react-section');
				expandedElements[i].classList.add('collapsed-react-section');
				reactHeader.innerHTML = 'React Projects <span class="project-caret">&#9660;</span>';
			}
		}
	});

	backEndHeader.addEventListener('click', function() {
		if (document.querySelector('.collapsed-backend-section')) {
			// if collapsed, expand sections

			var collapsedElements = document.querySelectorAll('.collapsed-backend-section');
			for (var i = 0; i < collapsedElements.length; i++) {
				collapsedElements[i].classList.remove('collapsed-backend-section');
				collapsedElements[i].classList.add('expanded-backend-section');
				backEndHeader.innerHTML = 'Back-End APIs <span class="project-caret">&#9650;</span>';
			}
		} else {
			// if expanded, collapse sections

			var expandedElements = document.querySelectorAll('.expanded-backend-section');
			for (var i = 0; i < expandedElements.length; i++) {
				expandedElements[i].classList.remove('expanded-backend-section');
				expandedElements[i].classList.add('collapsed-backend-section');
				backEndHeader.innerHTML = 'Back-End APIs <span class="project-caret">&#9660;</span>';
			}
		}
	});

	frontEndHeader.addEventListener('click', function() {
		if (document.querySelector('.collapsed-frontend-section')) {
			// if collapsed, expand sections

			var collapsedElements = document.querySelectorAll('.collapsed-frontend-section');
			for (var i = 0; i < collapsedElements.length; i++) {
				collapsedElements[i].classList.remove('collapsed-frontend-section');
				collapsedElements[i].classList.add('expanded-frontend-section');
				frontEndHeader.innerHTML = 'Front-End Projects <span class="project-caret">&#9650;</span>';
			}
		} else {
			// if expanded, collapse sections

			var expandedElements = document.querySelectorAll('.expanded-frontend-section');
			for (var i = 0; i < expandedElements.length; i++) {
				expandedElements[i].classList.remove('expanded-frontend-section');
				expandedElements[i].classList.add('collapsed-frontend-section');
				frontEndHeader.innerHTML = 'Front-End Projects <span class="project-caret">&#9660;</span>';
			}
		}
	});
}


// About Tab Selection (Mobile)
///////////////////////////////////

// this code handles switching between the education
// and skill set sections on the about page for mobile devices

var eduTab = document.getElementById('eduTab'); // education tab
var skillsTab = document.getElementById('skillsTab') // skills tab
var eduCol = document.getElementById('eduCol'); // education div
var skillsCol = document.getElementById('skillsCol'); // skills div

eduTab.addEventListener('click', function() {
	if (!eduCol.classList.contains('active-col')) {
		skillsTab.classList.remove('active-tab');	
		skillsCol.classList.remove('active-col');			
		eduTab.classList.add('active-tab');
		eduCol.classList.add('active-col');
	}
});

skillsTab.addEventListener('click', function() {
	if (!skillsCol.classList.contains('active-col')) {
		eduTab.classList.remove('active-tab');
		eduCol.classList.remove('active-col');
		skillsTab.classList.add('active-tab');
		skillsCol.classList.add('active-col');
	}
});