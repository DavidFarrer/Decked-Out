const modal = (state = { mode: "open", productId: 0 }, action) => {
	switch (action.type) {
		case "OPEN_MODAL":
			return {
				mode: "open",
				productId: action.productId
			};
		case "CLOSE_MODAL":
			return Object.assign({}, state, {
				mode: "closed"
			});
		default:
			return state;
	}
};

export default modal;