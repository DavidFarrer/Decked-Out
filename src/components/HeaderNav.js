import React from "react";
import { NavLink } from "react-router-dom";


const HeaderNav = () => (
	<nav>
		<img src={require("../images/icon.png")} />
		<p>Online Outfitters</p>

		<div className="navbar-links">
			<NavLink exact to="/" activeClassName="selected">Home</NavLink>
			<NavLink to="/shop" activeClassName="selected">Shop</NavLink>
			<NavLink to="/cart" activeClassName="selected">Cart</NavLink>
		</div>
	</nav>
);

export default HeaderNav;