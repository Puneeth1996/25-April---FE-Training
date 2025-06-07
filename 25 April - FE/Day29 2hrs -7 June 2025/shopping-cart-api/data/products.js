const { v4: uuidv4 } = require('uuid')

const getRandomQuantity = () => Math.floor(Math.random() * 50) + 1

const products = [
	{ id: uuidv4(), name: 'T-shirt', price: 499, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Jeans', price: 899, quantity: getRandomQuantity() },
	{
		id: uuidv4(),
		name: 'Sneakers',
		price: 1499,
		quantity: getRandomQuantity(),
	},
	{ id: uuidv4(), name: 'Hoodie', price: 799, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Cap', price: 299, quantity: getRandomQuantity() },
	{
		id: uuidv4(),
		name: 'Backpack',
		price: 1199,
		quantity: getRandomQuantity(),
	},
	{
		id: uuidv4(),
		name: 'Sunglasses',
		price: 599,
		quantity: getRandomQuantity(),
	},
	{ id: uuidv4(), name: 'Watch', price: 1999, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Wallet', price: 349, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Belt', price: 399, quantity: getRandomQuantity() },
	{
		id: uuidv4(),
		name: 'Formal Shirt',
		price: 749,
		quantity: getRandomQuantity(),
	},
	{
		id: uuidv4(),
		name: 'Casual Shirt',
		price: 649,
		quantity: getRandomQuantity(),
	},
	{ id: uuidv4(), name: 'Jacket', price: 1599, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Chinos', price: 899, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Loafers', price: 1299, quantity: getRandomQuantity() },
	{ id: uuidv4(), name: 'Sandals', price: 699, quantity: getRandomQuantity() },
	{
		id: uuidv4(),
		name: 'Socks (5 pairs)',
		price: 249,
		quantity: getRandomQuantity(),
	},
	{
		id: uuidv4(),
		name: 'Sports Shoes',
		price: 1699,
		quantity: getRandomQuantity(),
	},
]

module.exports = products
