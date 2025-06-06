const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

const cartFilePath = path.join(__dirname, 'data', 'cart.json')

function readCart() {
	return JSON.parse(fs.readFileSync(cartFilePath, 'utf-8'))
}

function writeCart(data) {
	fs.writeFileSync(cartFilePath, JSON.stringify(data, null, 2))
}

app.get('/cart', (req, res) => {
	const items = readCart()
	res.json(items)
})

app.get('/cart/:id', (req, res) => {
	const items = readCart()
	const item = items.find((i) => i.id === parseInt(req.params.id))
	if (!item) return res.status(404).json({ message: 'Item not found' })
	res.json(item)
})

app.post('/cart', (req, res) => {
	const items = readCart()
	const newItem = {
		id: Date.now(),
		...req.body,
	}
	items.push(newItem)
	writeCart(items)
	res.status(201).json(newItem)
})

app.put('/cart/:id', (req, res) => {
	let items = readCart()
	const index = items.findIndex((i) => i.id === parseInt(req.params.id))
	if (index === -1) return res.status(404).json({ message: 'Item not found' })
	items[index] = { ...items[index], ...req.body }
	writeCart(items)
	res.json(items[index])
})

app.delete('/cart/:id', (req, res) => {
	let items = readCart()
	const filtered = items.filter((i) => i.id !== parseInt(req.params.id))
	if (filtered.length === items.length) {
		return res.status(404).json({ message: 'Item not found' })
	}
	writeCart(filtered)
	res.status(204).send()
})

app.listen(PORT, () => {
	console.log(`🛒 Shopping cart API running on http://localhost:${PORT}`)
})
