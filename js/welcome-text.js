// JavaScript Document

var iTextFirst = 0;
var textFirst = "Hello, I'm ";
var iTextSecond = 0;
var textSecond = "Omar Nasr";
var iTextThird = 0;
var textThird = ".\nWelcome To My Portfolio."
var speed = 80;

setTimeout (function welcomeText() {
	if (iTextFirst < textFirst.length) {
		document.getElementById("welcome-text-first").innerHTML += textFirst.charAt(iTextFirst);
		iTextFirst++;
		setTimeout (welcomeText, speed);
	} else if (iTextSecond < textSecond.length) {
		document.getElementById("welcome-text-second").innerHTML += textSecond.charAt(iTextSecond);
		iTextSecond++;
		setTimeout (welcomeText, speed);
	} else if (iTextThird < textThird.length) {
		document.getElementById("welcome-text-third").innerHTML += textThird.charAt(iTextThird);
		iTextThird++;
		setTimeout(welcomeText, speed);
	}
}
, 750);


// Welcome Arrow Down to About Section Smooth Scroll
const welcomeArrowDown = document.querySelectorAll(".welcome-arrow");

const href = welcomeArrowDown[0].getAttribute("href");
const section = document.querySelector(href);
const offset = 60;
	
welcomeArrowDown[0].onclick = function(welcomeArrowDownAbout) {
	const bodyRect = document.body.getBoundingClientRect().top;
	const sectionRect = section.getBoundingClientRect().top;
	const sectionPosition = sectionRect - bodyRect;
	const offsetPosition = sectionPosition - offset;
	
	welcomeArrowDownAbout.preventDefault();
	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
}