function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}
function loadTasks() {
	const itemsStored = JSON.parse(localStorage.getItem('task'))
	if (itemsStored) {
		itemsStored.forEach((item) => {
			const taskItem = document.createElement('li')

			taskItem.className = 'task-item'
			taskItem.id = item.id + '-item'
			if (item.itemStatus === 'completed') {
				taskItem.classList.replace('pending', 'completed')
				taskItem.classList.add('completed')
			}
			const taskSpan = document.createElement('span')
			taskSpan.textContent = item.taskText
			const deleteBtn = document.createElement('button')
			deleteBtn.className = 'delete-btn'
			deleteBtn.textContent = 'Delete'
			deleteBtn.id = item.id + '-del'
			deleteBtn.addEventListener('click', () => {
				taskItem.remove()
				// remove the item from localStorage
				const currentTasks = JSON.parse(localStorage.getItem('task'))
				const updatedTasks = currentTasks.filter(
					(todoItem) => todoItem.taskText !== item.taskText
				)
				localStorage.setItem('task', JSON.stringify(updatedTasks))
			})
			taskItem.appendChild(taskSpan)
			taskItem.appendChild(deleteBtn)
			taskItem.addEventListener('click', () => {
				taskItem.classList.toggle('completed')
				let isCompleted = hasClass(taskItem, 'completed')
				item.itemStatus = isCompleted ? 'completed' : 'pending'
				localStorage.setItem('task', JSON.stringify(itemsStored))
			})
			taskList.appendChild(taskItem)
		})
	}
}
const windowLoad = () => {
	console.log('🚀 ~ windowLoad ~ windowLoad:', windowLoad)
	loadTasks()
}

// Add a new task
addTaskBtn.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') addTask()
})
function addTask() {
	const id = uuidv4()
	console.log('🚀 ~ addTask ~ todoId:', id)
	const taskText = taskInput.value.trim()
	if (taskText === '') return

	const taskItem = document.createElement('li')
	taskItem.className = 'task-item'
	taskItem.id = id + '-item'

	const taskItemToStore = { taskText, itemStatus: 'pending', id: uuidv4() }
	const getCurrentTasks = localStorage.getItem('task')
	if (getCurrentTasks) {
		const currentTasks = JSON.parse(getCurrentTasks)
		currentTasks.push(taskItemToStore)
		localStorage.setItem('task', JSON.stringify(currentTasks))
	} else {
		localStorage.setItem('task', JSON.stringify([taskItemToStore]))
	}
	const taskSpan = document.createElement('span')
	taskSpan.textContent = taskText
	const deleteBtn = document.createElement('button')
	deleteBtn.className = 'delete-btn'
	deleteBtn.textContent = 'Delete'
	deleteBtn.id = id + '-del'
	deleteBtn.addEventListener('click', () => {
		taskItem.remove()
		const currentTasks = JSON.parse(localStorage.getItem('task'))
		const updatedTasks = currentTasks.filter((task) => {
			if (task.id !== taskItem.id.split('-item')[0]) {
				console.log('🚀 ~ RETURN updatedTasks ~ task:', task)
				return task
			}
		})
		localStorage.setItem('task', JSON.stringify(updatedTasks))
	})

	taskItem.appendChild(taskSpan)
	taskItem.appendChild(deleteBtn)

	taskItem.addEventListener('click', (e) => {
		taskItem.classList.toggle('completed')
		let isCompleted = hasClass(taskItem, 'completed')
		console.log('🚀 ~ taskItem.addEventListener ~ isCompleted:', isCompleted)
		const currentTasks = JSON.parse(localStorage.getItem('task'))
		const updatedTasks = currentTasks.map((task) => {
			if (task.taskText === taskText) {
				return { ...task, itemStatus: isCompleted ? 'completed' : 'pending' }
			}
			return task
		})
		localStorage.setItem('task', JSON.stringify(updatedTasks))
	})
	taskList.appendChild(taskItem)
	taskInput.value = ''
}
