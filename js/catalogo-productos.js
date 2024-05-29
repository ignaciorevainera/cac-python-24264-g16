document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".cards-container");
	const categorySelect = document.getElementById("category");
	const orderBySelect = document.getElementById("orderBy");
	let allProducts = []; // Almacena todos los productos al cargar la página

	// Función para mostrar los productos en el contenedor
	function showProducts(products) {
		container.innerHTML = ""; // Limpiar el contenedor de productos

		products.forEach((product) => {
			const productCard = document.createElement("article");
			productCard.classList.add("product-card");

			productCard.innerHTML = `
                <img src="${product.img}" class="product-card-img" alt="${
				product.title
			}" />
                <div class="product-card-body">
                    <h5 class="product-card-title">${product.title}</h5>
                    <h6 class="product-card-category">${product.category}</h6>
                    <div class="product-card-details">
                        <div class="product-card-prices">
                            <span class="product-card-price">$${
								product.price
							}</span>
                        </div>
                        ${
							product.shippingTag
								? `<span class="product-card-shipping-tag">${product.shippingTag} <i class="bx bxs-package"></i></span>`
								: ""
						}
                    </div>
                    <a href="/pages/nosotros.html" class="button">Comprar</a>
                </div>
            `;
			container.appendChild(productCard);
		});
	}

	// Función para ordenar los productos según la opción seleccionada
	function sortProducts(option) {
		let sortedProducts = [...allProducts];
		switch (option) {
			case "2": // Menor precio
				sortedProducts.sort(
					(a, b) => parseFloat(a.price) - parseFloat(b.price)
				);
				break;
			case "3": // Mayor precio
				sortedProducts.sort(
					(a, b) => parseFloat(b.price) - parseFloat(a.price)
				);
				break;
			case "4": // Nombre A-Z
				sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "5": // Nombre Z-A
				sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
				break;
			default:
				break;
		}
		showProducts(sortedProducts);
	}

	// Función para filtrar los productos según la categoría seleccionada
	function filterProducts(category) {
		const filteredProducts =
			category === "1"
				? allProducts
				: allProducts.filter(
						(product) => product.category === category
				  );
		showProducts(filteredProducts);
	}

	// Evento change para el select de categoría
	categorySelect.addEventListener("change", (event) => {
		const selectedCategory = event.target.value;
		orderBySelect.value = "1"; // Reiniciar el select de ordenamiento
		filterProducts(selectedCategory);
	});

	// Evento change para el select de ordenamiento
	orderBySelect.addEventListener("change", (event) => {
		const selectedOption = event.target.value;
		categorySelect.value = "1"; // Reiniciar el select de categoría
		sortProducts(selectedOption);
	});

	// Cargar todos los productos al inicio
	fetch("/productos.json")
		.then((response) => response.json())
		.then((data) => {
			allProducts = data; // Almacena todos los productos
			showProducts(allProducts); // Muestra todos los productos al cargar la página
		})
		.catch((error) =>
			console.error("Error cargando los productos:", error)
		);
});
