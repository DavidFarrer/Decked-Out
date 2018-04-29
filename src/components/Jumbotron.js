import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => (
	<div className="jumbotron">
		<h2 className="jumbotron__title">Online Outfitters</h2>
		<h3 className="jumbotron__slogan">Your local clothing shop, online.</h3>
		<Link to="/Online-Outfitters/shop" className="jumbotron__button">Shop Clothes</Link>
	</div>
);

export default Jumbotron;