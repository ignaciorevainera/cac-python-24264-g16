document.addEventListener("DOMContentLoaded", () => {
	fetch(
		"https://raw.githubusercontent.com/ignaciorevainera/cac-python-24264-g16/main/productos-oferta.json"
	)
		.then((response) => response.json())
		.then((data) => {
			const container = document.querySelector(".cards-container-sales");
			data.forEach((product) => {
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
                                <span class="product-card-last-price">\$${
									product.lastPrice
								}</span>
                                <span class="product-card-price">\$${
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
		})
		.catch((error) =>
			console.error("Error cargando los productos:", error)
		);
});
