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

export const closeModal = () => ({
	type: "CLOSE_MODAL",
	mode: "closed"
});

export const openModal = productId => ({
	type: "OPEN_MODAL",
	mode: "open",
	productId
});