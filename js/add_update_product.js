const form = document.getElementById("form");
const params = new URLSearchParams(document.location.search);
const post_id = params.get("post_id");

function add_new_post(event) {
	let post_data = {
        img : form.getElementById("img").src,
		title: form.getElementById("title").value,
		description: form.getElementById("category").value,
		price: form.getElementById("precio").value,
		quantity: form.getElementById("cantidad").value,
        shipping : form.getElementById("freeShipping").value
		//Faltaria agregar sale como selector del form , en dicho caso , un precio de oferta.
	};

	let utr = "http://localhost:5000/posts/";

	fetchData(
		url,
		"POST",
		() => {
			form.reset();
			window.location.replace("../index.html");
		},
		post_data
	);
}

function update_post(event) {
	let post_data = {
        img : form.getElementById("img").src,
		title: form.getElementById("title").value,
		description: form.getElementById("category").value,
		price: form.getElementById("precio").value,
		quantity: form.getElementById("cantidad").value,
        shipping : form.getElementById("freeShipping").value
		//Faltaria agregar sale como selector del form , en dicho caso , un precio de oferta.
	};

	let url = "http://localhost:5000/posts/" + post_id;

	const response = fetchData(
		url,
		"PUT",
		() => {
			form.reset();
			window.location.replace("../index.html");   //TODO : cambiar redirect
		},
		post_data
	);

}

function add_or_update() {
	//Si existe el producto lo modificamos. CC , producto nuevo.
	if (post_id !== null) {
		document.querySelector(".section-title").innerHTML =
			"Editar producto existente";

		// Este bloque trae el Id que consigno la DDB para referenciar y + , se genera el form a modificar.
		let url = "http://localhost:5000/posts/<int:post_id>/" + post_id;
		fetchData(url, "GET", (data) => {
			form.getElementById("post_id").value = data.id;    
            form.getElementById("img").src=data.img;   //Falta agregar attr. img
			form.getElementById("title").value = data.title;
			form.getElementById("category").value = data.description;
			form.getElementById("precio").value = data.price;
			form.getElementById("cantidad").value = data.quantity;
            form.getElementById("freeShipping").value = data.shipping;
            //form.getElementById("offer").value = data.offer;
		});
		form.addEventListener("submit", update_post);
	} else {
		form.addEventListener("submit", add_new_post);
	}
}

add_or_update();
