import React from "react";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";


class Shop extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
			if (this.props.location.pathname !== nextProps.location.pathname) {
				this.props.dispatch(setVisibilityFilter(nextProps.location.pathname.split("/")[2] || "all"));
				return false;
			}
			return true;
	}
	render() {
		console.log(this.props);
		return (
			<section className="shop">
				<h1 className="shop__title">Shop</h1>
				<Sidebar />
				<Products />
			</section>
		);
	}

}

const mapStateToProps = (state, ownProps) => ({
  visibilityFilter: state.visibilityFilter,
  products: state.products
})

export default connect(mapStateToProps)(Shop);