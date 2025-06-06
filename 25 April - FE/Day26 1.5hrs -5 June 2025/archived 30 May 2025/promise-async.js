// function doStep1(init, callBack) {
// 	return callBack(init + 1)
// }
// const output = doStep1(1, (result) => {
// 	doStep1(result, (result2) => {
// 		doStep1(result2, (result3) => {
// 			console.log(`result: ${result3}`)
// 			return result3
// 		})
// 	})
// })

// console.log(output)

function doStep1PromiseStyle(init) {
	return new Promise((res, rej) => {
		const calc = init + 1
		console.log(`doStep1: ${calc}`)
		if (calc > 5) {
			rej('Rejected: Value greater than 5')
		}
		res(init + 1)
	})
}
// Resolving promissing wiht then chaining
// const output = doStep1PromiseStyle(5)
// 	.then((result) => {
// 		return doStep1PromiseStyle(result)
// 	})
// 	.then((result2) => {
// 		return doStep1PromiseStyle(result2)
// 	})
// 	.then((result3) => {
// 		console.log(`result: ${result3}`)
// 		return result3
// 	})
// 	.catch((error) => {
// 		console.error(`Error: ${error}`)
// 	})

// Resolving promissing wiht async await
const output2 = async function runPromise(value) {
	try {
		const result = await doStep1PromiseStyle(value)
		const result2 = await doStep1PromiseStyle(result)
		const result3 = await doStep1PromiseStyle(result2)
		console.log(`result: ${result3}`)
		return result3
	} catch (error) {
		console.error(`Error: ${error}`)
	}
}
output2(5)
