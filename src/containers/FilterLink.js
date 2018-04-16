import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({filter, children}) => (
  <NavLink
  	className="sidebar__filter" 
    exact to={filter === "all" ? "/shop" : `/shop/${ filter }`}
    activeStyle={ {
    	fontWeight: "700",
      textDecoration: "none",
      color: "#E84343"
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;