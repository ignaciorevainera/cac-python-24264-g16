document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const password = document.getElementById("password");
	const errorMessage=document.getElementById("errorMessage");
	errorMessage.classList.add("hidden");

	form.addEventListener("submit", async (event) => {
		let user_info = {
			username: form.getElementById("username").value,
			password: password.value,
		};

		try{
			const response = await fetch( "http://127.0.0.1:5000/login/",{
					method: 'POST',
					headers:{
						"Content-Type": "application/json",
					},
					body : JSON.stringify(user_info)
				}
			);

			if(response.status === 401){
				errorMessage.classList.remove("hidden")
			}else if(response.ok){
				form.reset();
				window.location.replace("../index.html");	// TODO:Cambiar redirect
			}else{alert("Ocurrio un error. Inténtalo nuevamente.")}
			
		}catch(error){
			console.log("Ocurrió un error! " + error);
		}	


	});
});
