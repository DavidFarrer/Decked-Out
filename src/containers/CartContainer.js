import React from "react";
import { connect } from "react-redux";

class CartContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="cartSection">
				<h1 className="cartSection__title">Your Cart</h1>
				<div className="cart">

				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);