import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { updateQuantity, deleteFromCart } from "../actions";

class CartContainer extends React.Component {
	constructor(props) {
		super(props);
		this.updateQuantity = this.props.updateQuantity.bind(this);
		this.deleteFromCart = this.props.deleteFromCart.bind(this);
	}
	render() {
		return (
			<section className="cartSection">
				<h1 className="cartSection__title">Your Cart</h1>
				<Cart cart={this.props.cart} updateQuantity={this.updateQuantity} deleteFromCart={this.deleteFromCart} />

			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
	updateQuantity: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
	deleteFromCart: (id) => dispatch(deleteFromCart({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);