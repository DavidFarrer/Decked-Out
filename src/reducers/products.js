const productsArr = [
	{
		id: 0,
		name: "Grey Hoodie",
		category: "hoodies",
		image: require("../images/greyhoodie.jpg"),
		price: "39.99"
	},
	{
		id: 1,
		name: "Blue Sweater",
		category: "sweaters",
		image: require("../images/bluesweater.jpg"),
		price: "34.99"
	},
	{
		id: 2,
		name: "Black Tee",
		category: "tshirts",
		image: require("../images/blacktshirt.jpg"),
		price: "19.99"
	},
	{
		id: 3,
		name: "Black Leather Sneakers",
		category: "shoes",
		image: require("../images/blackleathershoes.jpeg"),
		price: "65.00"
	},
	{
		id: 4,
		name: "Dark Blue Jeans",
		category: "jeans",
		image: require("../images/darkjeans.jpg"),
		price: "50.00"
	}
];


const products = (state = productsArr, action) => {
			return state;
};

export default products;