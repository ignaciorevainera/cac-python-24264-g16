let form = document.getElementsByTagName("form");
let params = new URLSearchParams(document.location.search);
let post_id = params.get("post_id");

function add_new_post(event) {
	let post_data = {
		title: form.getElementsById("title").value,
		description: form.getElementsById("categoria").value,
		price: form.getElementsById("precio").value,
		quantity: form.getElementsById("cantidad").value,
		//Faltaria agregar shipping y sale como atributos de tabla
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
		title: form.getElementsById("title").value,
		description: form.getElementsById("categoria").value,
		price: form.getElementsById("precio").value,
		quantity: form.getElementsById("cantidad").value,
	};

	let utr = "http://localhost:5000/posts/" + post_id;

	fetchData(
		url,
		"PUT",
		() => {
			form.reset();
			window.location.replace("../index.html");
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
		// Faltaria qeu el id quede asociado con cada producto en el front ya que no son fomrularios.
		let url = "http://localhost:5000/posts/<int:post_id>/" + post_id;
		fetchData(url, "GET", (data) => {
			form.getElementsById("title").value = data.title;
			form.getElementsById("categoria").value = data.description;
			form.getElementsById("precio").value = data.price;
			form.getElementsById("cantidad").value = data.quantity;
			form.getElementsById("post_id").value = data.id;
		});

		form.addEventListener("submit", update_post);
	} else {
		form.addEventListener("submit", add_new_post);
	}
}

add_or_update();
