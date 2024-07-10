const form = document.getElementById("form");
const params = new URLSearchParams(document.location.search);
const post_id = params.get("post_id");

function add_new_post(event) {
	let post_data = {
        //img : form.getElementById("img").src,
		title: document.getElementById("title").value,
		description: document.getElementById("category").value,
		price: 	document.getElementById("precio").value,
		quantity: document.getElementById("stock").value,
        shipping : document.getElementById("freeShipping").value,
		//Faltaria agregar sale como selector del form , en dicho caso , un precio de oferta.
	};

	let url = "http://localhost:5000/posts";

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
        //img : form.getElementById("img").src,
		title: document.getElementById("title").value,
		description: document.getElementById("category").value,
		price: 	document.getElementById("precio").value,
		quantity: document.getElementById("stock").value,
        shipping : document.getElementById("freeShipping").value,
		//Faltaria agregar sale como selector del form , en dicho caso , un precio de oferta.
	};

	let url = "http://localhost:5000/posts/" + post_id;

	fetchData(
		url,
		"PUT",
		() => {
			form.reset();
			window.location.replace("../index.html");   //TODO : cambiar redirect
		},
		post_data
	);

}


function set_form_readOnly(value) {
    let form = document.querySelector("#form");
    var elements = form.elements;
    for (input of elements) { 
        input.readOnly = value;
    }
}


function add_or_update() {
	//Si existe el producto lo modificamos. CC , producto nuevo.
	if (post_id !== null) {
		document.querySelector(".section-title").innerHTML =
			"Editar producto existente";

		set_form_readOnly(true);

		// Este bloque trae el Id que consigno la DDB para referenciar y + , se genera el form a modificar.
		let url = "http://localhost:5000/posts/<int:post_id>" + post_id;
		fetchData(url, "GET", (data) => {
			document.getElementById("post_id").value=data.id;
            //form.getElementById("img").src=data.img;   //Falta agregar attr. img
			document.getElementById("title").value = data.title;
			document.getElementById("category").value = data.description;
			document.getElementById("precio").value = data.price;
			document.getElementById("stock").value = data.quantity;
            document.getElementById("freeShipping").value = data.shipping;
            //form.getElementById("offer").value = data.offer;

			set_form_readOnly(false);
		});
		form.addEventListener("submit", update_post);
	} else {
		form.addEventListener("submit", add_new_post);
	}
}

add_or_update();
