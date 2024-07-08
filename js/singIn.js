document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const password = document.getElementById("password");

	form.addEventListener("submit", (event) => {
			//Hay que ver como se efectua la validación;con el error code..? TODO
			let user_info = {
				username: form.getElementById("username").value,
				password: password.value,
			};
			
			fetchData(
				"http://127.0.0.1:5000/login/",
				"POST",
				(data) => {
					form.reset();
					window.location.replace("../index.html"); //A modificar a ventana de user
				},
				user_info
			);
		
	});
});
