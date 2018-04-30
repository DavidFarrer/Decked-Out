import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CartContainer from "../containers/CartContainer";

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/shop/:filter?" component={Shop} />
			<Route path="/cart" component={CartContainer} />
		</Switch>
	</main>
);

export default Main;