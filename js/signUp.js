document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const password = document.getElementById("password");
	const confirmPassword = document.getElementById("confirmPassword");
	const errorMessage = document.getElementById("errorMessage");

	form.addEventListener("submit", async (event) => {
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

			try{
				const response = await fetch("http://127.0.0.1:5000/register/",{
						method: 'POST',
						headers:{
							"Content-Type": "application/json",
						},
						body : JSON.stringify(user_info)
					}
				);
	
				if(response.status === 400){
					alert("El nombre de  usuario ya existe")
				}else if(response.ok){
					form.reset();
					window.location.replace("../index.html");
				}else{
					alert("Ocurrio un error. Inténtalo nuevamente.")
				}
			}catch(error){
				console.log("Ocurrió un error! " + error);
			}	
		}
	});
});
