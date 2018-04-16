import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Sidebar = () => (
	<aside className="sidebar">
		<h2 className="sidebar__title">Filter</h2>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>
			All
		</FilterLink>
		<FilterLink filter={VisibilityFilters.HOODIES}>
			Hoodies
		</FilterLink>
	</aside>
);

export default Sidebar;