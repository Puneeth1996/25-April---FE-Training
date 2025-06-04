// function doStep1(init) {
// 	return init + 1
// }

// function doStep2(init) {
// 	return init + 2
// }

// function doStep3(init) {
// 	return init + 3
// }

// function doOperation() {
// 	let result = 0
// 	result = doStep1(result)
// 	result = doStep2(result)
// 	result = doStep3(result)
// 	console.log(`result: ${result}`)
// }

// doOperation()

// const random = (max) => Math.floor(Math.random() * max);
// const MAX_PRIME = 1000000;
// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }
// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// function doStep1(init) {
// 	return init + 1
// }

// function doStep2(init) {
// 	return init + 20
// }

// function doStep3(init) {
// 	return init + 50
// }

// function doOperation() {
// 	let result = 0
// 	result = doStep1(result)
// 	result = doStep2(result)
// 	result = doStep3(result)
// 	console.log(`result: ${result}`)
//     result = generatePrimes(result)
// 	console.log(`res_primes: ${result}`)
// }

// doOperation()

// function doStep1(init) {
// 	return init + 1
// }

// function doStep2(init) {
// 	return init + 2
// }

// function doStep3(init) {
// 	return init + 3
// }

function doStep1(init, callback) {
	return callback(init + 1)
}

function doStep2(init, callback) {
	return callback(init + 1)
}

function doStep3(init, callback) {
	return callback(init + 1)
}
const random = (max) => Math.floor(Math.random() * max)
const MAX_PRIME = 1000000
function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false
		}
	}
	return n > 1
}
function generatePrimes(quota) {
	const primes = []
	while (primes.length < quota) {
		const candidate = random(MAX_PRIME)
		if (isPrime(candidate)) {
			primes.push(candidate)
		}
	}
	return primes
}

function doOperation() {
	let result = 0
	doStep1(result, function (result1) {
		doStep2(result1, function (result2) {
			doStep3(result2, function (result3) {
				console.log(generatePrimes(result3))
			})
		})
	})
	
}

doOperation()
