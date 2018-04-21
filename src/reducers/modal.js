const modal = (state = { mode: "closed", productId: 0, quantitySelected: 1}, action) => {
	switch (action.type) {
		case "OPEN_MODAL":
			return {
				mode: "open",
				productId: action.productId,
				quantitySelected: 1
			};
		case "CLOSE_MODAL":
			return Object.assign({}, state, {
				mode: "closed",
				quantitySelected: 1
			});
		case "CHANGE_QUANTITY":
			return Object.assign({}, state, {
				quantitySelected: action.quantitySelected
			});
		default:
			return state;
	}
};

export default modal;