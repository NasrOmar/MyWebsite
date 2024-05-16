// JavaScript Document


// Navbar Toggler
var navbarToggler = document.getElementById("navbar-toggler");
var navbarHeight = document.getElementById("nav-items");

function navMenu() {
	navbarToggler.classList.toggle("navbar-toggler-btn-x");
	navbarHeight.classList.toggle("nav-items-height");
}

navbarToggler.addEventListener("click", navMenu);

// Hide navbar
var navbarHide = document.querySelectorAll(".nav-links");

navbarHide.forEach(navLink => {
	navLink.addEventListener("click", function() {
		navbarToggler.classList.remove("navbar-toggler-btn-x");
		navbarHeight.classList.remove("nav-items-height");
	});
});

// Navbar Sticky Function
window.onscroll = function() {navbarFixed()};

var navbarHeader = document.getElementById("navbar");
var navbarSticky = navbarHeader.offsetTop;

function navbarFixed() {
	if (window.pageYOffset > navbarSticky) {
		navbarHeader.classList.add("navbar-sticky");
		document.getElementById("main").style.marginTop = "60px";
	} else {
		navbarHeader.classList.remove("navbar-sticky");
		document.getElementById("main").style.marginTop = "0";
	}
}


// Scroll

// Back to Top Scroll
function backToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

// To Section Scroll Smooth
const navLinks = document.querySelectorAll(".nav-links");

var i;

for (i = 0; i < navLinks.length; i++) {
	const href = navLinks[i].getAttribute("href");
	const section = document.querySelector(href);
	const offset = 60;
	
	navLinks[i].onclick = function(navClick) {
		const bodyRect = document.body.getBoundingClientRect().top;
		const sectionRect = section.getBoundingClientRect().top;
		const sectionPosition = sectionRect - bodyRect;
		const offsetPosition = sectionPosition - offset;
		
		navClick.preventDefault();
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}
}

// Navbar Link Active on Section
let mainNavLinks = document.querySelectorAll(".nav-links");
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
	
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop - 60 <= fromTop &&
      section.offsetTop + section.offsetHeight - 60 > fromTop
    ) {
      link.classList.add("nav-links-active");
    } else {
      link.classList.remove("nav-links-active");
    }
  });
});