import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity, deleteFromCart }) => {
	function renderCart() {
		if (cart.length === 0) {
			return (
				<div className="cartEmpty">
					<p>Your cart is empty. Go to the shop to add items!</p>
					<Link to="/shop" className="cartEmpty__button">Shop Clothes</Link>
				</div>
			);
		} else {
			const cartList = cart.map(cartItem => {
				return renderCartItem(cartItem);
			});
			return (
				<div>
					<ul className="cartItems">{cartList}</ul>
					<p className="cartItems__total">
						Total: ${cart.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0).toFixed(2)}
					</p>
					<button className="cartItems__order">Complete Order</button>
				</div>
			);
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
				<p className="cartItems__price">x ${cartItem.product.price} = <span className="cartItems__subtotal">${(cartItem.product.price * cartItem.quantity).toFixed(2)}</span></p>
				<button className="cartItems__delete" onClick={() => deleteFromCart(cartItem.product.id)} >Remove</button>
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