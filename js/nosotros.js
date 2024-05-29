let options = document.querySelector("select");
let button_about_plants = document.querySelector("#About_plant");
let button_other = document.querySelector("#Other");

button_about_plants.addEventListener("click", function () {
	options.style.display = "block";
	options.style.visibility = "visible";
});

button_other.addEventListener("click", function () {
	options.style.display = "none";
});
