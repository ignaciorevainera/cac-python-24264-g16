document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".cards-container");
	const categorySelect = document.getElementById("category");
	const orderBySelect = document.getElementById("orderBy");
	let allProducts = [];

	function showProducts(products) {
		container.innerHTML = "";

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
                    
                </div>
				<div class="product-card-footer">
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

	function sortProducts(option) {
		let sortedProducts = [...allProducts];
		switch (option) {
			case "2":
				sortedProducts.sort(
					(a, b) => parseFloat(a.price) - parseFloat(b.price)
				);
				break;
			case "3":
				sortedProducts.sort(
					(a, b) => parseFloat(b.price) - parseFloat(a.price)
				);
				break;
			case "4":
				sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "5":
				sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
				break;
			default:
				break;
		}
		showProducts(sortedProducts);
	}

	function filterProducts(category) {
		const filteredProducts =
			category === "1"
				? allProducts
				: allProducts.filter(
						(product) => product.category === category
				  );
		showProducts(filteredProducts);
	}

	categorySelect.addEventListener("change", (event) => {
		const selectedCategory = event.target.value;
		orderBySelect.value = "1";
		filterProducts(selectedCategory);
	});

	orderBySelect.addEventListener("change", (event) => {
		const selectedOption = event.target.value;
		categorySelect.value = "1";
		sortProducts(selectedOption);
	});

	fetch(
		"https://raw.githubusercontent.com/ignaciorevainera/cac-python-24264-g16/main/productos.json"
	)
		.then((response) => response.json())
		.then((data) => {
			allProducts = data;
			showProducts(allProducts);
		})
		.catch((error) =>
			console.error("Error cargando los productos:", error)
		);
});
