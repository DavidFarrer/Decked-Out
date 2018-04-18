const productsArr = [
	{
		id: 0,
		name: "Sick Hoodie",
		category: "hoodies",
		image: require("../images/greyhoodie.jpg")
	},
	{
		id: 1,
		name: "Something else",
		category: "other",
		image: ""
	}
];


const products = (state = productsArr, action) => {
			return state;
};

export default products;