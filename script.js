// Sticky Nav Scroll  
/////////////////////////////////

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


// 'About' Collapsible Sections
/////////////////////////////////

var eduCol = document.getElementById('eduCol');
var eduHeader = document.getElementById('eduHeader');

eduHeader.addEventListener('click', function() {
	if (eduCol.classList.contains('collapsed-edu-section')) {
		eduHeader.innerHTML = 'Education <span class="info-caret">&#9650;</span>';
		eduCol.classList.remove('collapsed-edu-section');
		eduCol.classList.add('expanded-section');
	} else {		
		eduHeader.innerHTML = 'Education <span class="info-caret">&#9660;</span>';
		eduCol.classList.remove('expanded-section');
		eduCol.classList.add('collapsed-edu-section');
	}
});

var skillsCol = document.getElementById('skillsCol');
var skillsHeader = document.getElementById('skillsHeader');

skillsHeader.addEventListener('click', function() {
	if (skillsCol.classList.contains('collapsed-skills-section')) {
		skillsHeader.innerHTML = 'Development Skill Set <span class="info-caret">&#9650;</span>';
		skillsCol.classList.remove('collapsed-skills-section');
		skillsCol.classList.add('expanded-section');
	} else {
		skillsHeader.innerHTML = 'Development Skill Set <span class="info-caret">&#9660;</span>';
		skillsCol.classList.remove('expanded-section');
		skillsCol.classList.add('collapsed-skills-section');
	}	
});