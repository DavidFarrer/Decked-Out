import React from "react";
import Product from "./Product";

const Products = ({ onClick, products, filter }) => {
	function renderProduct(product) {
		return (
			<Product
				onClick={onClick} 
				key={product.id}
				product={product}
			/>
		);
	}
	const filteredProducts = filter === "all" ? products : products.filter(product => {
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