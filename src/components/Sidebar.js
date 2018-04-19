import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Sidebar = () => (
	<aside className="sidebar">
		<h2 className="sidebar__title">Filter</h2>
		<div className="sidebar__filters">
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>
				All
			</FilterLink>
			<FilterLink filter={VisibilityFilters.HOODIES}>
				Hoodies
			</FilterLink>
			<FilterLink filter={VisibilityFilters.SWEATERS}>
				Sweaters
			</FilterLink>
			<FilterLink filter={VisibilityFilters.TSHIRTS}>
				T-Shirts
			</FilterLink>
			<FilterLink filter={VisibilityFilters.JEANS}>
				Jeans
			</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOES}>
				Shoes
			</FilterLink>
		</div>
	</aside>
);

export default Sidebar;