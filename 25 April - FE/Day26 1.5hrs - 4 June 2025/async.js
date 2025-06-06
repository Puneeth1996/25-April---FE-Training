// const asncFunc = new Promise((resolve, reject) => {
//   const timeoutInput = prompt("Please give a timeout value")
//   console.log("Enter Timeout value:" + timeoutInput)
//   if(parseInt(timeoutInput) > 5000) {
//         reject("reject the ressponse")
//       }
//   else{
//       setTimeout(() => {
//         resolve("Accepted timedout")
//       }, timeoutInput)
//     }
// });

// const solveAsync = asncFunc
// .then((value) => {
//   console.log("Then resolve the async" + value)
// })
// .catch((error) => {
//   console.log("Catch to handle error in the async" + error)
// })

// function asncFunc() {
// 	return new Promise((resolve, reject) => {
// 		const timeoutInput = prompt('Please give a timeout value')
// 		console.log('Enter Timeout value:' + timeoutInput)
// 		if (parseInt(timeoutInput) > 5000) {
// 			reject('reject the ressponse')
// 		} else {
// 			setTimeout(() => {
// 				resolve('Accepted timedout')
// 			}, timeoutInput)
// 		}
// 	})
// }

// const solveTimeout = async () => {
// 	try {
// 		const value = await asncFunc()
// 		console.log('resolved with async await ' + value)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// solveTimeout()

// const respFromApi = []

// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok')
// 		}
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 		respFromApi = data
// 	})

// let respFromApi = []
// let loading = true

// fetch('https://jsonplaceholder.typicode.com/todos/6')
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok')
// 		}
// 		return response.json()
// 	})
// 	.then((data) => {
// 		loading = false
// 		console.log('FROM TEN - ')
// 		console.log(data)
// 		respFromApi = data
// 	})

// while (!loading) {
// 	console.log('While Loading is false')
// 	console.log(respFromApi)
// }

async function fetchData() {
	let loading = true
	let respFromApi = []

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/6')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		respFromApi = await response.json()
		console.log('FROM TEN - ')
		console.log(respFromApi)
	} catch (error) {
		console.error('Fetch error:', error)
	} finally {
		loading = false
		console.log('Loading:', loading)
		console.log('Data:', respFromApi)
	}
}

fetchData()

// Using then method with loading

function fetchDataAndDoSomething(callbackOnComplete) {
	let loading = true
	let respFromApi = []

	fetch('https://jsonplaceholder.typicode.com/todos/6')
		.then((response) => {
			if (!response.ok) throw new Error('Network response was not ok')
			return response.json()
		})
		.then((data) => {
			respFromApi = data
		})
		.catch((error) => {
			console.error('Fetch error:', error)
			callbackOnComplete([], error)
		})
		.finally(() => {
			loading = false
			console.log('Finished loading:', loading)
			console.log('Fetched data:', respFromApi)
			callbackOnComplete(respFromApi, error)
		})
}

fetchDataAndDoSomething((data, error) => {
	console.log(data)
	console.log(error)
})
