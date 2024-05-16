// JavaScript Document

// Portfolio Tabs
var portfolioTab = document.querySelector("#portfolio-tab");
var portfolioTabLink = document.querySelectorAll(".portfolio-tab-link");
var portfolioTabPanel = document.querySelectorAll(".portfolio-tab-panel");

portfolioTab.addEventListener("click", portfolioActiveTab => {
	
	var i;
	
	if (portfolioActiveTab.target.className == "portfolio-tab-link") {
		for (i = 0; i < portfolioTabLink.length; i++) {
			portfolioTabLink[i].classList.remove("portfolio-tab-link-active");
			portfolioTabPanel[i].classList.remove("portfolio-tab-panel-active");
		}
		portfolioActiveTab.target.classList.add("portfolio-tab-link-active");
		document.getElementById(portfolioActiveTab.target.href.split("#")[1]).classList.add("portfolio-tab-panel-active");
	}
	
	// Float
	if (document.querySelector("#portfolio-all") == document.querySelector(".portfolio-tab-panel-active")) {
		document.querySelector("#portfolio-tab-float").classList.remove("portfolio-tab-float-projects");
		document.querySelector("#portfolio-tab-float").classList.remove("portfolio-tab-float-codesnippets");
	} else if (document.querySelector("#portfolio-projects") == document.querySelector(".portfolio-tab-panel-active")) {
		document.querySelector("#portfolio-tab-float").classList.remove("portfolio-tab-float-codesnippets");
		document.querySelector("#portfolio-tab-float").classList.add("portfolio-tab-float-projects");
	} else if (document.querySelector("#portfolio-codesnippets") == document.querySelector(".portfolio-tab-panel-active")) {
		document.querySelector("#portfolio-tab-float").classList.remove("portfolio-tab-float-projects");
		document.querySelector("#portfolio-tab-float").classList.add("portfolio-tab-float-codesnippets");
	}
	
	// Animation
	// Portfolio Animation
	var portfolioProjects = document.querySelectorAll(".projects-content");
	
	if (document.querySelector("#portfolio-projects") == document.querySelector(".portfolio-tab-panel-active")) {
		portfolioProjects.forEach(project => {
			project.classList.add("projects-animation");
		});
	} else {
		portfolioProjects.forEach(project => {
			project.classList.remove("projects-animation");
		});
	}
	// Codesnippets Animation
	var portfolioCodesnippets = document.querySelectorAll(".codesnippets-content");
	
	if (document.querySelector("#portfolio-codesnippets") == document.querySelector(".portfolio-tab-panel-active")) {
		portfolioCodesnippets.forEach(codesnippets => {
			codesnippets.classList.add("codesnippets-animation");
		});
	} else {
		portfolioCodesnippets.forEach(codesnippets => {
			codesnippets.classList.remove("codesnippets-animation");
		});
	}
	// Portfolio All Animation
	var portfolioAll = document.querySelectorAll(".portfolio-all-content");
	
	if (document.querySelector("#portfolio-all") == document.querySelector(".portfolio-tab-panel-active")) {
		portfolioAll.forEach(all => {
			all.classList.add("portfolio-all-animation");
		});
	} else {
		portfolioAll.forEach(all => {
			all.classList.remove("portfolio-all-animation");
		});
	}
	
	
	portfolioActiveTab.preventDefault();
});

// Hobbies Tabs
var hobbiesTab = document.querySelector("#hobbies-tab");
var hobbiesTabLink = document.querySelectorAll(".hobbies-tab-link");
var hobbiesTabPanel = document.querySelectorAll(".hobbies-tab-panel");

hobbiesTab.addEventListener("click", hobbiesActiveTab => {
	
	var i;
	
	if (hobbiesActiveTab.target.className == "hobbies-tab-link") {
		for (i = 0; i < hobbiesTabLink.length; i++) {
			hobbiesTabLink[i].classList.remove("hobbies-tab-link-active");
			hobbiesTabPanel[i].classList.remove("hobbies-tab-panel-active");
		}
		hobbiesActiveTab.target.classList.add("hobbies-tab-link-active");
		document.getElementById(hobbiesActiveTab.target.href.split("#")[1]).classList.add("hobbies-tab-panel-active");
	}
	
	// Float
	if (document.querySelector("#hobbies-all") == document.querySelector(".hobbies-tab-panel-active")) {
		document.querySelector("#hobbies-tab-float").classList.remove("hobbies-tab-float-photography");
		document.querySelector("#hobbies-tab-float").classList.remove("hobbies-tab-float-photoshop-illustrator");
	} else if (document.querySelector("#hobbies-photography") == document.querySelector(".hobbies-tab-panel-active")) {
		document.querySelector("#hobbies-tab-float").classList.remove("hobbies-tab-float-photoshop-illustrator");
		document.querySelector("#hobbies-tab-float").classList.add("hobbies-tab-float-photography");
	} else if (document.querySelector("#hobbies-photoshop-illustrator") == document.querySelector(".hobbies-tab-panel-active")) {
		document.querySelector("#hobbies-tab-float").classList.remove("hobbies-tab-float-photography");
		document.querySelector("#hobbies-tab-float").classList.add("hobbies-tab-float-photoshop-illustrator");
	}
	
	// Animation
	// hobbies Animation
	var hobbiesPhotography = document.querySelectorAll(".photography-content");
	
	if (document.querySelector("#hobbies-photography") == document.querySelector(".hobbies-tab-panel-active")) {
		hobbiesPhotography.forEach(photograph => {
			photograph.classList.add("photography-animation");
		});
	} else {
		hobbiesPhotography.forEach(photograph => {
			photograph.classList.remove("photography-animation");
		});
	}
	// photoshop-illustrator Animation
	var hobbiesPhotoshopIllustrator = document.querySelectorAll(".photoshop-illustrator-content");
	
	if (document.querySelector("#hobbies-photoshop-illustrator") == document.querySelector(".hobbies-tab-panel-active")) {
		hobbiesPhotoshopIllustrator.forEach(photoshopIllustrator => {
			photoshopIllustrator.classList.add("photoshop-illustrator-animation");
		});
	} else {
		hobbiesPhotoshopIllustrator.forEach(photoshopIllustrator => {
			photoshopIllustrator.classList.remove("photoshop-illustrator-animation");
		});
	}
	// hobbies All Animation
	var hobbiesAll = document.querySelectorAll(".hobbies-all-content");
	
	if (document.querySelector("#hobbies-all") == document.querySelector(".hobbies-tab-panel-active")) {
		hobbiesAll.forEach(all => {
			all.classList.add("hobbies-all-animation");
		});
	} else {
		hobbiesAll.forEach(all => {
			all.classList.remove("hobbies-all-animation");
		});
	}
	
	
	hobbiesActiveTab.preventDefault();
});