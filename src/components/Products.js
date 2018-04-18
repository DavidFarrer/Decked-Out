import React from "react";
import Product from "./Product";

const Products = ({ products, filter }) => {
	function renderProduct(product) {
		return (
			<Product
				key={product.id}
				product={product}
			/>
		);
	}
	const filteredProducts = filter === "all" ? products : products.filter(product => {
		console.log(`product: ${product.category}, filter: ${filter}`);
		return product.category === filter;
	});
	const visibleProducts = [];
	filteredProducts.map(product => {
		visibleProducts.push(
				renderProduct(product)
		);
	});
	return (
		<div className="products">
			{visibleProducts}
		</div>
	);
}

export default Products;