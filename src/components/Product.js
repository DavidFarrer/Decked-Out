import React from "react";

const Product = ({ product }) => (
	<article className="product">
		<div className="product__image-container">
			<img className="product__image" src={product.image} alt={product.name} />
			<button className="product__button">Details</button>
		</div>
		<p className="product__name">{product.name}</p>
		<p className="product__price">${product.price}</p>
	</article>
)

export default Product;