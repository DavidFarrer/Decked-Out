import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import products from "./products";

export default combineReducers({
	visibilityFilter,
	products
});