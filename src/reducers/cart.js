const cart = (state = { currentCart = [] }, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return Object.assign({}, state, {
				currentCart: [...state.currentCart, action.itemToAdd]
			});
		default:
			return state;
	}	

}

export default cart;