import React from "react";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { connect } from "react-redux";
import { setVisibilityFilter, openModal, closeModal, changeSelectedQuantity, addToCart, updateQuantity, updateFlashMessage } from "../actions";


class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.props.setVisibilityFilter(this.props.location.pathname.split("/")[2] || "all");
	}
	shouldComponentUpdate(nextProps, nextState) {
			if (this.props.location.pathname !== nextProps.location.pathname) {
				this.props.setVisibilityFilter(nextProps.location.pathname.split("/")[2] || "all");
				return false;
			}
			return true;
	}
	handleCart(product, quantity) {
		if (this.props.cart.find(cartItem => cartItem.product.id === product.id) === undefined) {
			this.props.addToCart(product, quantity);
			this.showFlashMessage(`${product.name} has been added to your cart`);
		} else {
			this.props.updateQuantity(product.id, quantity);
			this.showFlashMessage(`The quantity for ${product.name} has been updated to ${quantity} in your cart.`);
		}
		this.props.closeModal();
		window.scrollTo(0, 0);
	}
	showFlashMessage(message) {
		this.props.updateFlashMessage(message);
		setTimeout(() => {
			this.props.updateFlashMessage("");
		}, 8000);
	}
	getFlashClass() {
		return this.props.flash === "" ? "shop__flash shop__flash--hide" : "shop__flash";
	}

	render() {
		return (
			<div>
				<section className="shop">
					<h1 className="shop__title">Shop</h1>
					<p className={this.getFlashClass()}>
						{this.props.flash}
					</p>
					<Sidebar />
					<Products onClick={this.props.openModal.bind(this)} products={this.props.products} filter={this.props.visibilityFilter} />
				</section>
				<Modal 
					mode={this.props.modal.mode} 
					onClose={this.props.closeModal.bind(this)} 
					product={this.props.products.filter(el => el.id === this.props.modal.productId)[0]} 
					onChangeQuantity={this.props.changeSelectedQuantity.bind(this)} 
					quantitySelected={this.props.modal.quantitySelected} 
					onCartAdd={this.handleCart.bind(this)} 
				/>
			</div>
		);
	}

}

const mapStateToProps = (state, ownProps) => ({
  visibilityFilter: state.visibilityFilter,
  products: state.products,
  modal: state.modal,
  cart: state.cart,
  flash: state.flash
});

const mapDispatchToProps = (dispatch) => ({
	setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
	openModal: (productId) => dispatch(openModal(productId)),
	closeModal: () => dispatch(closeModal()),
	changeSelectedQuantity: (quantitySelected) => dispatch(changeSelectedQuantity(quantitySelected)),
	addToCart: (product, quantity) => dispatch(addToCart({ product, quantity })),
	updateQuantity: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
	updateFlashMessage: (message) => dispatch(updateFlashMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);