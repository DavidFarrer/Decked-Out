import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => (
	<div className="jumbotron">
		<h2>Online Outfitters</h2>
		<h3>Your local clothing shop, online.</h3>
		<Link to="/shop">Shop Clothes</Link>
	</div>
);

export default Jumbotron;