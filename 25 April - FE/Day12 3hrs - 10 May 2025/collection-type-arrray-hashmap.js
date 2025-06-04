// let person_details = ['puneeth', 'p', 10, 560097, 'karnataka', 'india']
// let person_two_details = ['puneeth', 'p', 10, 560097, 'karnataka', 'india']

// // person_two_details === person_details

// // iterating over array
// for (let i = 0; i < person_details.length; i++) {
// 	console.log(person_details[i])
// }
// // iterating over array using foreach
// person_details.forEach((item, index) => {
// 	console.log(item, index)
// })
// // iterating over array using foreach
// person_details.map((item) => {
// 	console.log(item)
// })

// let const var
// let person = {
// 	name: 'puneeth',
// 	age: 10,
// 	pin: 560097,
// 	state: 'karnataka',
// 	country: 'india',
// }

let person_details = ['puneeth', 'p', 10, 560097, 'karnataka', 'india']
let idx = 0
person_details.map((item) => {
	idx += 1
	console.log(item)

	return idx + ' - ' + item
})

person_details.forEach((item, index) => {
	idx += 1
	console.log(item)

	return idx + ' - ' + item
})
