const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log('Resp from Fetch')
		console.log(data)
	})

async function getUser() {
	const res = await fetch(url)
	const data = await res.json()
	console.log('Resp from async function getUser')
	console.log(data)
}
getUser()

// GET POST PUT DELETE PATCH
const post_url = 'https://jsonplaceholder.typicode.com/posts'

fetch(post_url, {
	method: 'POST',
	body: JSON.stringify({
		title: 'TESTING TESTIN P123',
		body: 'TESTING TESTIN P123 \n TESTING TESTIN P123 \n TESTING TESTIN P123 \n ',
	}),
})
	.then((res) => res.json())
	.then((data) => {
		console.log('Resp from Fetch')
		console.log(data)
		fetch(post_url + '/' + data.id)
			.then((res) => res.json())
			.then((data) => {
				console.log('Resp from post_url | Post endpoint being Fetched')
				console.log(data)
			})
	})
