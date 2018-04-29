import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CartContainer from "../containers/CartContainer";

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/Online-Outfitters/" component={Home} />
			<Route path="/Online-Outfitters/shop/:filter?" component={Shop} />
			<Route path="/Online-Outfitters/cart" component={CartContainer} />
		</Switch>
	</main>
);

export default Main;