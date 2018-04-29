import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import modal from "./modal";
import products from "./products";
import cart from "./cart";
import flash from "./flash";

export default combineReducers({
	visibilityFilter,
	modal,
	products,
	cart,
	flash
});