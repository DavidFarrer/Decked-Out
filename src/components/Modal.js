import React from "react";

const Modal = ({ mode, onClose, product, onChangeQuantity, quantitySelected }) => (
	<section className={`modal__outer modal__outer--${mode}`}>
		<div className="modal">
			<span className="modal__closeButton" onClick={onClose}>Close ×</span>
			<p className="modal__title">{product.name}</p>
			<img className="modal__image" src={product.image} alt={product.name} />
			<p className="modal__price">Price: ${product.price}</p>
			<div className="modal__quantity">
				<label htmlFor="quantity">Qty:</label>
				<select name="quantity" id="quantity" value={quantitySelected} onChange={(e) => onChangeQuantity(e.target.value)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button className="modal__button">Add to Cart</button>
		</div>
	</section>
);

export default Modal;