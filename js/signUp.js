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

			//Data en orden => fetch a la API

			let user_info = {
				email: form.getElementById("email").value,
				username: form.getElementById("username").value,
				password: password.value,
			};

			fetchData(
				"http://127.0.0.1:5000/register/",
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
