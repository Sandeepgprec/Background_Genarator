var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
let randomBtn = document.getElementById("random")
var body = document.getElementById("gradient");

function setGradient() {
	let xyGradient = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	body.style.background =xyGradient;
	randomBtn.style.background =xyGradient;
	css.textContent = body.style.background + ";";
}
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
 
//function to generate random gradient(s) rgb 0-255
function getRandomGradient() {
	let r1 = getRandomInt(256);
	let g1 = getRandomInt(256);
	let b1 = getRandomInt(256);
	let r2 = getRandomInt(256);
	let g2 = getRandomInt(256);
	let b2 = getRandomInt(256);
	let randomGradient = "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 
 
	body.style.background = randomGradient;
	randomBtn.style.background = randomGradient;
	
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomGradient);
// randomBtn.addEventListener("load", setGradient);