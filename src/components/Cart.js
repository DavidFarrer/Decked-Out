import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity }) => {
	function renderCart() {
		if (cart.length === 0) {
			return (
				<div className="cartEmpty">
					<p>Your cart is empty. Go to the shop to add items!</p>
					<Link to="/shop" className="cartEmpty__button">Shop Clothes</Link>
				</div>
			);
		} else {
			console.dir(cart);
			const cartList = cart.map(cartItem => {
				return renderCartItem(cartItem);
			});
			return <ul className="cartItems">{cartList}</ul>;
		}

	}

	function renderCartItem(cartItem) {
		return (
			<li className="cartItems__item" key={cartItem.product.id}>
				<p className="cartItems__title">{cartItem.product.name}</p>
				<div className="cartItems__quantity">
					<label htmlFor="cartQuantity">Qty:</label>
					<select name="cartQuantity" id="cartQuantity" value={cartItem.quantity} onChange={(e) => updateQuantity(cartItem.product.id, e.target.value)}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<p className="cartItems__price">x ${cartItem.product.price} = ${Math.round(cartItem.product.price * cartItem.quantity * 100)/100}</p>
			</li>
		);
	}

	return (
		<div>
			{renderCart()}
		</div>
	);
}

export default Cart;