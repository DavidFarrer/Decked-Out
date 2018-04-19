export const VisibilityFilters = {
	SHOW_ALL: "all",
	HOODIES: "hoodies",
	TSHIRTS: "tshirts",
	JEANS: "jeans",
	SWEATERS: "sweaters",
	SHOES: "shoes"
};

export const setVisibilityFilter = filter => ({
	type: "SET_VISIBILITY_FILTER",
	filter
});