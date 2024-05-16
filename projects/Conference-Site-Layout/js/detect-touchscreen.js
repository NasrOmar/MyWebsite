// JavaScript Document

// .venue-image { + background-fixed / background-scroll

var x = document.getElementsByClassName("venue-image");

if ('ontouchstart' in document.documentElement) {
	x[0].classList.add("background-scroll");
}
else {
	x[0].classList.add("background-fixed");
}