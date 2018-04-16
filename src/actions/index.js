export const VisibilityFilters = {
	SHOW_ALL: "all",
	HOODIES: "hoodies"
};

export const setVisibilityFilter = filter => ({
	type: "SET_VISIBILITY_FILTER",
	filter
});