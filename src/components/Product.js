import React from "react";

const Product = ({ product }) => (
	<article className="product">
		<div className="product__image-container">
			<img className="product__image" src={product.image} />
			<button className="product__button">Details</button>
		</div>
		<p>{product.name}</p>
	</article>
)

export default Product;