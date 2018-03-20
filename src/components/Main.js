import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/shop" component={Shop} />
		</Switch>
	</main>
);

export default Main;