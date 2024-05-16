// JavaScript Document

var modal = document.getElementById("modal");

var modalBackground = document.getElementById("modal-background");

var modalContent = document.getElementById("modal-content");

var modalCloseBtn = document.getElementById("modal-close-btn");

modalCloseBtn.addEventListener ("click", closeModal => {
	modal.classList.remove("modal-visible");
	modalBackground.classList.remove("modal-background-visible");
	modalContent.classList.remove("modal-content-visible");
	if (modalContent.children[5].id == "live-demo") {
		modalContent.querySelector("#live-demo").outerHTML = "";
	}
});

window.onclick = closeModalBackground => {
	if (closeModalBackground.target == modalBackground) {
		modal.classList.remove("modal-visible");
		modalBackground.classList.remove("modal-background-visible");
		modalContent.classList.remove("modal-content-visible");
		if (modalContent.children[5].id == "live-demo") {
			modalContent.querySelector("#live-demo").outerHTML = "";
		}
	}
}

// Conferense Site Layout
var conferenceSiteLayout = document.querySelectorAll(".conference-site-layout");

conferenceSiteLayout.forEach(conferenceSite => {
	
	conferenceSite.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/conference-site-layout-mockup.jpg";
		modalContent.children[0].children[0].alt = "Conference Site Layout Screenshot";
		modalContent.children[0].children[0].title = "Conference Site Layout Screenshot";
		modalContent.children[1].children[0].innerText = "Conference Site Layout";
		modalContent.children[2].children[0].innerText = "Projects - Template";
		modalContent.children[3].children[0].innerText = "Simple conference website layout to be used for any kind of conference related material.";
		modalContent.children[4].href = "projects/Conference-Site-Layout/index.html"
		modalContent.children[4].children[0].children[0].innerText = "View Site";
	});
});

// Container Row Column SCSS CSS
var containerRowColumn = document.querySelectorAll(".container-row-column");

containerRowColumn.forEach(containerRowColumnSCSS => {
	
	containerRowColumnSCSS.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/container-row-column-scss.png";
		modalContent.children[0].children[0].alt = "Container Row Column SCSS Screenshot";
		modalContent.children[0].children[0].title = "Container Row Column SCSS Screenshot";
		modalContent.children[1].children[0].innerText = "Container Row Column SCSS";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "SCSS and CSS file for a container, row and column similar to Bootstrap";
		modalContent.children[4].href = "https://github.com/NasrOmar/Container-Row-Column-Scss"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
	});
});

// Flip Card CSS
var flipCardCSS = document.querySelectorAll(".flip-card-css");

flipCardCSS.forEach(flipCardCSSEffect => {
	
	flipCardCSSEffect.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/flip-card-css.png";
		modalContent.children[0].children[0].alt = "Flip Card CSS Screenshot";
		modalContent.children[0].children[0].title = "Flip Card CSS Screenshot";
		modalContent.children[1].children[0].innerText = "Flip Card CSS";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "Flip card effect on hover. Live Demo not compatible with mobile devices.";
		modalContent.children[4].href = "https://github.com/NasrOmar/Flip-Card-CSS"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
		modalContent.children[4].outerHTML += '<a id="live-demo" href="code-snippets/Flip-Card-CSS/index.html" target="_blank" class="modal-button"><div class="modal-button-content"><p>View Live Demo</p></div></a>'
	});
});

// Navbar Single Page Scroll
var navbarSinglePageScroll = document.querySelectorAll(".navbar-single-page-scroll");

navbarSinglePageScroll.forEach(navbarSinglePageScrollDemo => {
	
	navbarSinglePageScrollDemo.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/navbar-single-page-scroll-md.png";
		modalContent.children[0].children[0].alt = "Navbar Single Page Scroll Screenshot";
		modalContent.children[0].children[0].title = "Navbar Single Page Scroll Screenshot";
		modalContent.children[1].children[0].innerText = "Navbar Single Page Scroll";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "Fixed Navbar with sticky effect, Active Links on scroll and navbar toggler collapse on click.";
		modalContent.children[4].href = "https://github.com/NasrOmar/Navbar-Single-Page-Scroll"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
		modalContent.children[4].outerHTML += '<a id="live-demo" href="code-snippets/Navbar-Single-Page-Scroll/index.html" target="_blank" class="modal-button"><div class="modal-button-content"><p>View Live Demo</p></div></a>'
	});
});

// Navbar Toggler Example
var navbarTogglerExample = document.querySelectorAll(".navbar-toggler-example");

navbarTogglerExample.forEach(navbarTogglerExampleDemo => {
	
	navbarTogglerExampleDemo.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/navbar-toggler-example-md.png";
		modalContent.children[0].children[0].alt = "Navbar Toggler Example Screenshot";
		modalContent.children[0].children[0].title = "Navbar Toggler Example Screenshot";
		modalContent.children[1].children[0].innerText = "Navbar Toggler Example";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "Navbar Toggler Example with fixed navbar on top";
		modalContent.children[4].href = "https://github.com/NasrOmar/Navbar-Toggler-Example"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
		modalContent.children[4].outerHTML += '<a id="live-demo" href="code-snippets/Navbar-Toggler-Example/index.html" target="_blank" class="modal-button"><div class="modal-button-content"><p>View Live Demo</p></div></a>'
	});
});

// Tabs Incl Transition
var tabsInclTransition = document.querySelectorAll(".tabs-incl-transition");

tabsInclTransition.forEach(tabsInclTransitionDemo => {
	
	tabsInclTransitionDemo.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/tabs-incl-transition.png";
		modalContent.children[0].children[0].alt = "Tabs Incl Transition Screenshot";
		modalContent.children[0].children[0].title = "Tabs Incl Transition Screenshot";
		modalContent.children[1].children[0].innerText = "Tabs Incl Transition";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "Tabs including transition in between. Live Demo not compatible with mobile devices.";
		modalContent.children[4].href = "https://github.com/NasrOmar/Tabs-Incl-Transition"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
		modalContent.children[4].outerHTML += '<a id="live-demo" href="code-snippets/Tabs-Incl-Transition/index.html" target="_blank" class="modal-button"><div class="modal-button-content"><p>View Live Demo</p></div></a>'
	});
});

// Typewritter Effect Incl Cursor Blink
var typewriterEffectInclCursorBlink = document.querySelectorAll(".typewriter-effect-incl-cursor-blink");

typewriterEffectInclCursorBlink.forEach(typewriterEffectInclCursorBlinkDemo => {
	
	typewriterEffectInclCursorBlinkDemo.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/typewriter-effect-incl-cursor-blink.png";
		modalContent.children[0].children[0].alt = "Typewriter Effect Incl Cursor Blink Screenshot";
		modalContent.children[0].children[0].title = "Typewriter Effect Incl Cursor Blink Screenshot";
		modalContent.children[1].children[0].innerText = "Typewriter Effect Incl Cursor Blink";
		modalContent.children[2].children[0].innerText = "Code Snippets";
		modalContent.children[3].children[0].innerText = "Typewriter effect including cursor blink.";
		modalContent.children[4].href = "https://github.com/NasrOmar/Typewriter-Effect-Incl.-Cursor-Blink"
		modalContent.children[4].children[0].children[0].innerText = "View Github Repo";
		modalContent.children[4].outerHTML += '<a id="live-demo" href="code-snippets/Typewriter-Effect-Incl-Cursor-Blink/index.html" target="_blank" class="modal-button"><div class="modal-button-content"><p>View Live Demo</p></div></a>'
	});
});

// Hobbies
// R Nasr Logo
var rnasrLogo = document.querySelectorAll(".rnasr-logo");

rnasrLogo.forEach(rnasrLogoPreview => {
	
	rnasrLogoPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/Rnasr-Logo.svg";
		modalContent.children[0].children[0].alt = "R.Nasr Logo";
		modalContent.children[0].children[0].title = "R.Nasr Logo";
		modalContent.children[1].children[0].innerText = "R.Nasr Trading & Contracting LTD Logo";
		modalContent.children[2].children[0].innerText = "Photoshop / Illustrator";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/Rnasr-Logo.svg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// R Nasr Business Card
var rnasrBusinessCard = document.querySelectorAll(".rnasr-business-card");

rnasrBusinessCard.forEach(rnasrBusinessCardPreview => {
	
	rnasrBusinessCardPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/Rnasr-BusinessCard.jpg";
		modalContent.children[0].children[0].alt = "R.Nasr Business Card";
		modalContent.children[0].children[0].title = "R.Nasr Business Card";
		modalContent.children[1].children[0].innerText = "R.Nasr Trading & Contracting LTD Business Card";
		modalContent.children[2].children[0].innerText = "Photoshop / Illustrator";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/Rnasr-BusinessCard.jpg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// My Logo
var myLogo = document.querySelectorAll(".my-logo");

myLogo.forEach(myLogoPreview => {
	
	myLogoPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/My-Logo.svg";
		modalContent.children[0].children[0].alt = "Omar Nasr Logo";
		modalContent.children[0].children[0].title = "Omar Nasr Logo";
		modalContent.children[1].children[0].innerText = "My Logo";
		modalContent.children[2].children[0].innerText = "Photoshop / Illustrator";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/My-Logo.svg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Cute-icle Logo
var cuteIcleLogo = document.querySelectorAll(".cute-icle-logo");

cuteIcleLogo.forEach(cuteIcleLogoPreview => {
	
	cuteIcleLogoPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/Cute-icle-Logo.svg";
		modalContent.children[0].children[0].alt = "Cute-icle Logo";
		modalContent.children[0].children[0].title = "Cute-icle Logo";
		modalContent.children[1].children[0].innerText = "Cute-icle Logo";
		modalContent.children[2].children[0].innerText = "Photoshop / Illustrator";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/Cute-icle-Logo.svg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Icons
var iconsPreview = document.querySelectorAll(".icons-preview");

iconsPreview.forEach(iconsPreviewSet => {
	
	iconsPreviewSet.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/Icons-set.jpg";
		modalContent.children[0].children[0].alt = "Icons";
		modalContent.children[0].children[0].title = "Icons";
		modalContent.children[1].children[0].innerText = "Icons";
		modalContent.children[2].children[0].innerText = "Photoshop / Illustrator";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "https://github.com/NasrOmar/Icons-SVG"
		modalContent.children[4].children[0].children[0].innerText = "View SVGs in Github Repo";
	});
});

// Photograph 1
var photographOne = document.querySelectorAll(".photograph-1");

photographOne.forEach(photographOnePreview => {
	
	photographOnePreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph1.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph1.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Photograph 2
var photographTwo = document.querySelectorAll(".photograph-2");

photographTwo.forEach(photographTwoPreview => {
	
	photographTwoPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph2.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph2.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Photograph 3
var photographThree = document.querySelectorAll(".photograph-3");

photographThree.forEach(photographThreePreview => {
	
	photographThreePreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph3.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph3.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Photograph 4
var photographFour = document.querySelectorAll(".photograph-4");

photographFour.forEach(photographFourPreview => {
	
	photographFourPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph4.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph4.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Photograph 5
var photographFive = document.querySelectorAll(".photograph-5");

photographFive.forEach(photographFivePreview => {
	
	photographFivePreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph5.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph5.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});

// Photograph 6
var photographSix = document.querySelectorAll(".photograph-6");

photographSix.forEach(photographSixPreview => {
	
	photographSixPreview.addEventListener ("click", btnClick => {
		modal.classList.add("modal-visible");
		modalBackground.classList.add("modal-background-visible");
		modalContent.classList.add("modal-content-visible");
		modalContent.children[0].children[0].src = "imgs/photograph6.jpeg";
		modalContent.children[0].children[0].alt = "Photography Image";
		modalContent.children[0].children[0].title = "Photography Image";
		modalContent.children[1].children[0].innerText = "";
		modalContent.children[2].children[0].innerText = "Photography";
		modalContent.children[3].children[0].innerText = "";
		modalContent.children[4].href = "imgs/photograph6.jpeg"
		modalContent.children[4].children[0].children[0].innerText = "View Full Size";
	});
});