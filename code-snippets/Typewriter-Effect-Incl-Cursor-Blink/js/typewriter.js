// JavaScript Document

var i = 0;
var txt = "Hello, I\'m "; // Text to show
var speed = 80; // Speed of the typewriting effect
var ii = 0;
var txt1 = "Omar Nasr"; // Text to show
var txt2 = ".\nI\'m a front-end developer." // \n is used to make a new line. Since <pre> is being used then a new line appears.
var speed1 = 80; // Speed of the typewriting effect
var iii=0;

setTimeout (function typeWriter() { //setTimeout (function(){},750); is used to delay the function for 750ms before it starts.
  if (i < txt.length) { // If var i is less that the length of the text. Ex. Omar=4. if i=0 is less than 4 then do the below
    document.getElementById("first").innerHTML += txt.charAt(i); // Get element with ID first and get the inner HTML and add to it the value of var txt character of i. Example if i=1, then only 'H' will be added to ID first. if i=2 then 'He' will be added and so on.
    i++; // Increase the var i by 1. if i=0 it will become i=1.
    setTimeout(typeWriter, speed,300); // To apply the speed to the above.
  }else if (ii < txt1.length) { // if the above is not met, then it will start the below. In this case, once the above text is written, afterward the below text will be written.
    document.getElementById("second").innerHTML += txt1.charAt(ii);
    ii++;
    setTimeout(typeWriter, speed);
  }else if (iii < txt2.length) { // if the above is not met, then it will start the below. In this case, once the above text is written, afterward the below text will be written.
    document.getElementById("third").innerHTML += txt2.charAt(iii);
    iii++;
    setTimeout(typeWriter, speed1);
  }
}, 750);