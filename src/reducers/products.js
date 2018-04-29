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
	},
	{
		id: 5,
		name: "Black Hoodie",
		category: "hoodies",
		image: require("../images/blackhoodie.jpg"),
		price: "35.00"
	},
	{
		id: 6,
		name: "White Tee",
		category: "tshirts",
		image: require("../images/whitetshirt.jpg"),
		price: "19.99"
	},
	{
		id: 7,
		name: "Acid Washed Jeans",
		category: "jeans",
		image: require("../images/acidwashjeans.jpg"),
		price: "45.99"
	},
	{
		id: 8,
		name: "Green Sneakers",
		category: "shoes",
		image: require("../images/greensneakers.jpg"),
		price: "60.00"
	},
	{
		id: 9,
		name: "Classic High Tops",
		category: "shoes",
		image: require("../images/classichightops.jpg"),
		price: "62.99"
	},
	{
		id: 10,
		name: "Grey Sweater",
		category: "sweaters",
		image: require("../images/greysweater.jpg"),
		price: "32.50"
	}
];


const products = (state = productsArr, action) => {
			return state;
};

export default products;