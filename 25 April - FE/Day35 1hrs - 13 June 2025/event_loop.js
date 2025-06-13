// // console.log('1. Script Start')

// // setTimeout(() => {
// // 	console.log('4. setTimeout Callback')
// // }, 0)

// // Promise.resolve().then(() => {
// // 	console.log('3. Promise then')
// // })

// // console.log('2. Script End')

// // IIFE
// // standard IIFE
// // (function (a,b) {
// //   console.log(a,b)
// // })(10,20);

// // // (
// // // 	// standard IIFE

// // // 	function () {
// // // 		console.log('🚀 ~ standard IIFE:')
// // // 	}
// // // )();

// // // // arrow function variant
// // // (() => {
// // // 	console.log('🚀 ~ arrow function variant:')
// // // })()

// // const person = {
// // 	name: 'Alice',
// // 	greet: function () {
// // 		console.log(this)
// // 		console.log("Hello, I'm " + this.name)
// // 	},
// // }

// // person.greet()

// // const person_two = {
// // 	name: 'Bob',
// // 	greet: () => {
// // 		console.log(this)
// // 		console.log("Hello, I'm " + this.name)
// // 	},
// // }

// // person_two.greet()

// // const team = {
// // 	name: 'Developers',
// // 	members: ['Sam', 'Jamie'],
// // 	listMembers() {
// // 		this.members.forEach((member) => {
// // 			console.log(`${member} is on the ${this.name} team`)
// // 		})
// // 	},
// // }

// // team.listMembers()

// // const user = {
// //   name: "Alex",
// //   greet() {
// //     console.log("Hello, " + this.name);
// //   }
// // };

// // setTimeout(user.greet, 1000);

// class Animal {
// 	constructor(sound) {
// 		this.sound = sound
// 		this.legs = 4
// 	}

// 	speak() {
// 		console.log(this.sound)
// 	}
// }

// const cat = new Animal('meow')
// cat.speak()

// // Inheritance example
// class Spider extends Animal {
// 	constructor() {
// 		super('hiss')
// 		this.legs = 8
// 	}

// 	speak() {
// 		console.log(`The spider goes ${this.sound} and has ${this.legs} legs`)
// 	}
// }
// const spider = new Spider()
// spider.speak()

// // Polymorphism example
// class Dog extends Animal {
// 	constructor() {
// 		super('bark')
// 	}

// 	speak() {
// 		console.log(`The dog goes ${this.sound}`)
// 	}
// }
// const dog = new Dog()
// dog.speak()

// Problem Statement:
// A group of friends is visiting a city and plans to do multiple activities together throughout the day. Each activity has a start time and an end time (in 24-hour format). You are given a list of all the activities they performed during the day.
// Your task is to:
// - Calculate the total number of hours spent on activities.
// - Count how many distinct activities spanned the full day (i.e., from hour 0 to hour 24).
// - Ensure overlapping activity times are only counted once for total hours.

// const activities = [
//   { name: "City Tour", start: 9, end: 12 },          3hrs
//   { name: "Museum Visit", start: 11, end: 13 },      2hrs
//   { name: "Lunch", start: 13, end: 14 },             1hrs
//   { name: "Shopping", start: 14, end: 16 },          2hrs
//   { name: "Night Walk", start: 22, end: 24 },        2hrs
//   { name: "Full Day Festival", start: 0, end: 24 }   0hrs
// ];

// Output

// {
//   totalHours: 15,             // Count non-overlapping hours
//   fullDayActivities: 1        // "Full Day Festival"
// }

// Problem on 10 june 2025

// function firstOccuranceCharacterInString(string1) {
// 	console.log(string1.length)
// 	const map = {}
// 	for (let i = 0; i < string1.length; i++) {
// 		console.log(string1[i])
// 		if (map[string1[i]]) {
// 			map[string1[i]] = map[string1[i]] + 1
// 		} else {
// 			map[string1[i]] = 1
// 		}
// 	}
// 	console.log(map)

// 	for (let i = 0; i < string1.length; i++) {
// 		if (map[string1[i]] === 1) {
// 			return map[string1[i]]
// 		}
// 	}
// 	return ''
// }

sayHi() // Hello!

const sayHi = () => {
	console.log('Hello!')
}
