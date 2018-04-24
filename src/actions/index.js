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

export const changeSelectedQuantity = quantitySelected => ({
	type: "CHANGE_QUANTITY",
	quantitySelected
});

export const addToCart = itemToAdd => ({
	type: "ADD_TO_CART",
	itemToAdd
});

export const updateQuantity = itemToUpdate => ({
	type: "UPDATE_ITEM",
	itemToUpdate
});