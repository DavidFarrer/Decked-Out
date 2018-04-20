import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import modal from "./modal";
import products from "./products";

export default combineReducers({
	visibilityFilter,
	modal,
	products
});