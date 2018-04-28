const cart = (state = [] , action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return Object.assign([], state, [
				...state, 
				action.itemToAdd
			]);
		case "UPDATE_ITEM":
			return state.map(cartItem => {
				if (cartItem.product.id === action.itemToUpdate.id) {
					return Object.assign({}, cartItem, { quantity: action.itemToUpdate.quantity });
				}
				return cartItem;
			});
		case "DELETE_ITEM":
			return state.filter(cartItem => cartItem.product.id !== action.itemToRemove.id);
		default:
			return state;
	}	

}

export default cart;