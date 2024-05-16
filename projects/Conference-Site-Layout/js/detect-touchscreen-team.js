// JavaScript Document


// Detect if device is touch screen device and apply hover effect or normal non hover effect

var x = document.getElementsByClassName("team-profile");

if ('ontouchstart' in document.documentElement) {
	// If the device is a touch screen
	for (var i = 0; i < x.length; i++){
		x[i].classList.add("touch-screen");
	}
}
else {
	// If the device is not a touch screen device
}