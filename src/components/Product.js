import React from "react";

const Product = ({ onClick, product }) => (
	<article className="product" onClick={ () => onClick(product.id) } >
		<div className="product__image-container">
			<img className="product__image" src={product.image} alt={product.name} />
			<button className="product__button">Details</button>
		</div>
		<p className="product__name">{product.name}</p>
		<p className="product__price">${product.price}</p>
	</article>
)

export default Product;