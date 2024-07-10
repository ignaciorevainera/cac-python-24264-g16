//document.addEventListener("DOMContentLoaded", () => {
	var form = document.getElementById("form");
	let password = document.getElementById("password");
	let errorMessage=document.getElementById("errorMessage");
	errorMessage.classList.add("hidden");

	form.addEventListener("submit",async (event) => {
		event.preventDefault();

		let user_info = {
			username: document.getElementById("username").value,
			password: password.value,
		};

		let url ="http://127.0.0.1:5000/login";

		try{
			const response = await fetch( url,{
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

//});
