let form = document.getElementsById("form");
let params = new URLSearchParams(document.location.search);
let post_id = params.get("post_id");

function add_new_post(event) {
	let post_data = {
        img : form.getElementsById("img").src,
		title: form.getElementsById("title").value,
		description: form.getElementsById("category").value,
		price: form.getElementsById("precio").value,
		quantity: form.getElementsById("cantidad").value,
        shipping : form.getElementsById("freeShipping").value
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
        img : form.getElementsById("img").src,
		title: form.getElementsById("title").value,
		description: form.getElementsById("category").value,
		price: form.getElementsById("precio").value,
		quantity: form.getElementsById("cantidad").value,
        shipping : form.getElementsById("freeShipping").value
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
	if (post_id != null) {
		document.getElementsByClassName("section-title").innerHTML =
			"Editar producto existente";

		// Este bloque trae el Id que consigno la DDB para referenciar y + , se genera el form a modificar.
		let url = "http://localhost:5000/posts/<int:post_id>/" + post_id;
		fetchData(url, "GET", (data) => {
			form.getElementsById("post_id").value = data.id;    
            form.getElementsById("img").src=data.img;   //Falta agregar attr. img
			form.getElementsById("title").value = data.title;
			form.getElementsById("category").value = data.description;
			form.getElementsById("precio").value = data.price;
			form.getElementsById("cantidad").value = data.quantity;
            form.getElementsById("freeShipping").value = data.shipping;
            //form.getElementsById("offer").value = data.offer;
		});

		form.addEventListener("submit", update_post);
	} else {
		form.addEventListener("submit", add_new_post);
	}
}

add_or_update();
