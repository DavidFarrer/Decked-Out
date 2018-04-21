import React from "react";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { connect } from "react-redux";
import { setVisibilityFilter, openModal, closeModal, changeSelectedQuantity } from "../actions";


class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.props.setVisibilityFilter(this.props.location.pathname.split("/")[2] || "all");
		console.log(this.props);
	}
	shouldComponentUpdate(nextProps, nextState) {
			if (this.props.location.pathname !== nextProps.location.pathname) {
				this.props.setVisibilityFilter(nextProps.location.pathname.split("/")[2] || "all");
				return false;
			}
			return true;
	}
	render() {
		return (
			<div>
				<section className="shop">
					<h1 className="shop__title">Shop</h1>
					<Sidebar />
					<Products onClick={this.props.openModal.bind(this)} products={this.props.products} filter={this.props.visibilityFilter} />
				</section>
				<Modal 
					mode={this.props.modal.mode} 
					onClose={this.props.closeModal.bind(this)} 
					product={this.props.products.filter(el => el.id === this.props.modal.productId)[0]} 
					onChangeQuantity={this.props.changeSelectedQuantity.bind(this)} 
					quantitySelected={this.props.modal.quantitySelected} 
				/>
			</div>
		);
	}

}

const mapStateToProps = (state, ownProps) => ({
  visibilityFilter: state.visibilityFilter,
  products: state.products,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
	setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
	openModal: (productId) => dispatch(openModal(productId)),
	closeModal: () => dispatch(closeModal()),
	changeSelectedQuantity: (quantitySelected) => dispatch(changeSelectedQuantity(quantitySelected))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);