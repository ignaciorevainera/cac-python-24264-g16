document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const password = document.getElementById("password");
	const confirmPassword = document.getElementById("confirmPassword");
	const errorMessage = document.getElementById("errorMessage");

	form.addEventListener("submit", (event) => {
		if (password.value !== confirmPassword.value) {
			event.preventDefault(); //Se cancela el submit del form.
			errorMessage.classList.remove("hidden");
		} else {
			errorMessage.classList.add("hidden");

			//Data en orden => fetch a la API.
			//Hay que ver como se efectua la validación;con el error code..? TODO

			fetchData(
				"http://127.0.0.1:5000/login/",
				"POST",
				(data) => {
					form.reset();
					window.location.replace("../index.html"); //A modificar a ventana de user
				},
				user_info
			);
		}
	});
});
