import greyhoodie from "../images//greyhoodie.jpg";
import bluesweater from "../images/bluesweater.jpg";
import blacktee from "../images/blacktshirt.jpg";
import blackleathersneakers from "../images/blackleathershoes.jpeg";
import darkbluejeans from "../images/darkjeans.jpg";
import blackhoodie from "../images/blackhoodie.jpg";
import whitetee from "../images/whitetshirt.jpg";
import acidwashedjeans from "../images/acidwashjeans.jpg";
import greensneakers from "../images/greensneakers.jpg";
import classichightops from "../images/classichightops.jpg";
import greysweater from "../images/greysweater.jpg";

const productsArr = [
	{
		id: 0,
		name: "Grey Hoodie",
		category: "hoodies",
		image: greyhoodie,
		price: "39.99"
	},
	{
		id: 1,
		name: "Blue Sweater",
		category: "sweaters",
		image: bluesweater,
		price: "34.99"
	},
	{
		id: 2,
		name: "Black Tee",
		category: "tshirts",
		image: blacktee,
		price: "19.99"
	},
	{
		id: 3,
		name: "Black Leather Sneakers",
		category: "shoes",
		image: blackleathersneakers,
		price: "65.00"
	},
	{
		id: 4,
		name: "Dark Blue Jeans",
		category: "jeans",
		image: darkbluejeans,
		price: "50.00"
	},
	{
		id: 5,
		name: "Black Hoodie",
		category: "hoodies",
		image: blackhoodie,
		price: "35.00"
	},
	{
		id: 6,
		name: "White Tee",
		category: "tshirts",
		image: whitetee,
		price: "19.99"
	},
	{
		id: 7,
		name: "Acid Washed Jeans",
		category: "jeans",
		image: acidwashedjeans,
		price: "45.99"
	},
	{
		id: 8,
		name: "Green Sneakers",
		category: "shoes",
		image: greensneakers,
		price: "60.00"
	},
	{
		id: 9,
		name: "Classic High Tops",
		category: "shoes",
		image: classichightops,
		price: "62.99"
	},
	{
		id: 10,
		name: "Grey Sweater",
		category: "sweaters",
		image: greysweater,
		price: "32.50"
	}
];


const products = (state = productsArr, action) => {
			return state;
};

export default products;