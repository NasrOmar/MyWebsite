// JavaScript Document

// Envelope shape
document.getElementById("contact-envelope").style.borderRightWidth = window.innerWidth / 2 + "px";
document.getElementById("contact-envelope").style.borderLeftWidth = window.innerWidth / 2 + "px";

window.addEventListener("resize", envelope => {
	document.getElementById("contact-envelope").style.borderRightWidth = window.innerWidth / 2 + "px";
	document.getElementById("contact-envelope").style.borderLeftWidth = window.innerWidth / 2 + "px";
});

// Contact Form Success Close Button
var closeContactFormSuccess = document.getElementById("close-contact-form-success");
var contactFormSuccess = document.getElementById("contact-form-success");

closeContactFormSuccess.addEventListener("click", closeSucces => {
	contactFormSuccess.classList.remove("contact-form-success-show");
});

// on Form Submit Show Success Message and Reset Form
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", contactFormSubmit => {
	contactFormSuccess.classList.add("contact-form-success-show");
});

// Reset Form
var contactFormBtn = document.getElementById("contact-form-submit");

function contactFormReset() {
	if (contactFormSuccess.classList.contains("contact-form-success-show"))
	{
		contactForm.reset();
	}
}

contactFormBtn.addEventListener("click", contactFormBtnTimeout => {
	setTimeout(contactFormReset,500);
});