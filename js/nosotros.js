let options = document.querySelector("#options");
let button_about_plants = document.querySelector("#about_plant");
let button_other = document.querySelector("#other");

options.style.display = "none";

button_about_plants.addEventListener("click", function () {
	options.style.display = "block";
	options.style.visibility = "visible";
});

button_other.addEventListener("click", function () {
	options.style.display = "none";
});
