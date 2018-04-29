const flash = (state = "", action) => {
	switch (action.type) {
		case "UPDATE_MESSAGE":
			return action.message;
		default:
			return state;
	}
}

export default flash;