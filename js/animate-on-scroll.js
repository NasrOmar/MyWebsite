// JavaScript Document

var hiddenFade = document.querySelectorAll(".hidden-fade-up, .hidden-rotate-y, .hidden-fade-right, .hidden-fade-left");

function activeFade() {
	hiddenFade.forEach(link => {
		var positionFromTop = link.getBoundingClientRect().top;
		// Fade Up
		if (link.classList.contains("hidden-fade-up")) {
			if ((positionFromTop * 1.3) - window.innerHeight <= 0) {
				link.classList.add("active-fade-up");
			} else if (positionFromTop - window.innerHeight >= 0){
				link.classList.remove("active-fade-up")
			}
		}
		// Rotate Y
		if (link.classList.contains("hidden-rotate-y")) {
			if ((positionFromTop * 1.3) - window.innerHeight <= 0) {
				link.classList.add("active-rotate-y");
			} else if (positionFromTop - window.innerHeight >= 0) {
				link.classList.remove("active-rotate-y");
			}
		}
		// Fade Right
		if (link.classList.contains("hidden-fade-right")) {
			if ((positionFromTop * 1.3) - window.innerHeight <= 0) {
				link.classList.add("active-fade-right");
			} else if (positionFromTop - window.innerHeight >= 0) {
				link.classList.remove("active-fade-right");
			} else if (link.previousElementSibling.classList.contains("active-fade-up")) {
				link.classList.add("active-fade-right");
			}
		}
		// Fade Left
		if (link.classList.contains("hidden-fade-left")) {
			if ((positionFromTop * 1.3) - window.innerHeight <= 0) {
				link.classList.add("active-fade-left");
			} else if (positionFromTop - window.innerHeight >= 0) {
				link.classList.remove("active-fade-left");
			} else if (link.previousElementSibling.classList.contains("active-fade-up")) {
				link.classList.add("active-fade-left");
			}
		}
	});
}

window.addEventListener("scroll", activeFade);

// Skills bar animation to activate when the skills section is show
window.addEventListener("scroll", skillsAnimation => {
	var skillsID = document.getElementById("skills-bar");
	var skillsBar = document.querySelectorAll(".skills-bar");
	skillsBar.forEach(skill => {
		if (skillsID.classList.contains("active-fade-right")) {
			skill.querySelector(".skills-bar-rating").classList.add("skills-bar-animation");
			skill.querySelector(".skills-bar-bg p").classList.add("skills-bar-percentage");
		} else if (skillsID.classList.contains("hidden-fade-right")) {
			skill.querySelector(".skills-bar-rating").classList.remove("skills-bar-animation");
			skill.querySelector(".skills-bar-bg p").classList.remove("skills-bar-percentage");
		}
	});
});

// for 4K Screens to show All the Sections
window.addEventListener("scroll", showAll => {
	if (window.scrollY >= 4080) {
		hiddenFade.forEach(link => { 
			if (link.classList.contains("hidden-fade-right")) {
				link.classList.add("active-fade-right");
			} else if (link.classList.contains("hidden-fade-up")) {
				link.classList.add("active-fade-up");
			} else if (link.classList.contains("hidden-fade-left")) {
				link.classList.add("active-fade-left");
			} else if (link.classList.contains("hidden-rotate-y")) {
				link.classList.add("active-rotate-y");
			}
		});
	}
});
