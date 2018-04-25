import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { updateQuantity } from "../actions";

class CartContainer extends React.Component {
	constructor(props) {
		super(props);
		this.updateQuantity = this.props.updateQuantity.bind(this);
	}
	render() {
		return (
			<section className="cartSection">
				<h1 className="cartSection__title">Your Cart</h1>
				<Cart cart={this.props.cart} updateQuantity={this.updateQuantity} />

			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
	updateQuantity: (id, quantity) => dispatch(updateQuantity({ id, quantity }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);