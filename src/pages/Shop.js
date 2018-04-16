import React from "react";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";


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
	render() {
		return (
			<section className="shop">
				<h1 className="shop__title">Shop</h1>
				<Sidebar />
				<Products products={this.props.products} filter={this.props.visibilityFilter} />
			</section>
		);
	}

}

const mapStateToProps = (state, ownProps) => ({
  visibilityFilter: state.visibilityFilter,
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
	setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);