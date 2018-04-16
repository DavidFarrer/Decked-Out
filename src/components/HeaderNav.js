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
			<div className="navbar__logo">
				<img className="navbar__img" src={require("../images/icon.png")} />
				<p className="navbar__company">Online Outfitters</p>
			</div>
			<button className="navbar__toggle" aria-expanded={this.state.expanded} onClick={this.toggleNav.bind(this)}>
				<span className="navbar__open">&#9776;</span>
				<span className="navbar__close">×</span>
			</button>
			<div className="navbar__links">
				<NavLink exact to="/" className="navbar__link" activeClassName="selected">Home</NavLink>
				<NavLink to="/shop" className="navbar__link" activeClassName="selected">Shop</NavLink>
				<NavLink to="/cart" className="navbar__link" activeClassName="selected">Cart</NavLink>
			</div>
		</nav>
		);
	}
}

export default HeaderNav;