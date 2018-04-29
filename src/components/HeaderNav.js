import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = { expanded: false };
		this.closeNavOnSelect = this.closeNavOnSelect.bind(this);
	}
	toggleNav() {
		this.setState({ expanded: !this.state.expanded });
	}
	closeNavOnSelect() {
		this.setState({ expanded: false });
	}
	render() {
		return (
			<nav className="navbar">
			<div className="navbar__logo">
				<img className="navbar__img" src={require("../images/icon.png")} />
				<p className="navbar__company">Online Outfitters</p>
			</div>
			<button className="navbar__toggle" aria-expanded={this.state.expanded} onClick={this.toggleNav.bind(this)}>
				<span className="navbar__open">&#9776;</span>
				<span className="navbar__close">×</span>
			</button>
			<div className="navbar__links">
				<NavLink exact to="/" className="navbar__link" onClick={this.closeNavOnSelect} activeClassName="selected">Home</NavLink>
				<NavLink to="/shop" className="navbar__link" onClick={this.closeNavOnSelect} activeClassName="selected">Shop</NavLink>
				<NavLink to="/cart" className="navbar__link" onClick={this.closeNavOnSelect} activeClassName="selected">Cart({this.props.cart.length})</NavLink>
			</div>
		</nav>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cart
});

export default connect(mapStateToProps, null, null, { pure: false })(HeaderNav);