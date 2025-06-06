// const org_pwd = 'dpggo'
// const retries = 3

// function calculated() {
// 	let num1 = parseInt(prompt('Enter first number:'))
// 	let num2 = parseInt(prompt('Enter second number:'))
// 	let sum = num1 + num2
// 	alert('The sum is: ' + sum)
// }

// let user_pwd = prompt('Please enter password:')

// let auth = false
// // if (org_pwd === user_pwd) {
// // 	console.log('Authenticated')
// // 	auth = true
// // 	calculated()
// // } else {
// // 	// while (retries > 0) {
// // 	//     user_pwd = prompt("Incorrect password. Please try again:");
// // 	//     if (org_pwd === user_pwd) {
// // 	//         console.log("Authenticated");
// // 	//         calculated()
// // 	//         break;
// // 	//     }
// // 	//     retries--;
// // 	//     if (retries === 0) {
// // 	//         console.log("Too many attempts. Access denied.");
// // 	//     }
// // 	// }
// // 	// for (let i = 0; i < retries; i++) {
// // 	// 	user_pwd = prompt('Incorrect password. Please try again:')
// // 	// 	if (org_pwd === user_pwd) {
// // 	// 		console.log('Authenticated')
// // 	// 		auth = true
// // 	// 		calculated()
// // 	// 		break
// // 	// 	}
// // 	// }
// // }

// do {
// 	user_pwd = prompt('Enter password:')
// 	if (org_pwd === user_pwd) {
// 		console.log('Authenticated')
// 		calculated()
// 		break
// 	}
// 	retries--
// 	if (retries === 0) {
// 		console.log('Too many attempts. Access denied.')
// 	}
// } while (retries > 0)

let org_pwd = 'test'
let retries = 3
let auth = false
do {
	let user_pwd = prompt('Enter password:')
	if (org_pwd === user_pwd) {
		console.log('Authenticated')
		console.log('calculated')
		break
	}
	retries--
	if (retries === 0) {
		console.log('Too many attempts. Access denied.')
	}
} while (retries > 0)

console.log('Program closing.')
