import React from "react";
import { NavLink } from "react-router-dom";


class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = { expanded: false };
	}
	toggleNav() {
		this.setState({ expanded: !this.state.expanded });
	}
	render() {
		return (
			<nav className="navbar">
			<div className="logo">
				<img className="logo__img" src={require("../images/icon.png")} />
				<p className="logo__text">Online Outfitters</p>
			</div>
			<button className="navbar__toggle" aria-expanded={this.state.expanded} onClick={this.toggleNav.bind(this)}>
				<span className="toggle__open">&#9776;</span>
				<span className="toggle__close">×</span>
			</button>
			<div className="navlinks">
				<NavLink exact to="/" className="navlinks__link" activeClassName="selected">Home</NavLink>
				<NavLink to="/shop" className="navlinks__link" activeClassName="selected">Shop</NavLink>
				<NavLink to="/cart" className="navlinks__link" activeClassName="selected">Cart</NavLink>
			</div>
		</nav>
		);
	}
}

export default HeaderNav;