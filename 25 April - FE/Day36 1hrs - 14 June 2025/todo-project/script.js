// Generate UUID (keep this the same)
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

// DOM elements
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

// Helper function
function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}

// Load tasks from localStorage
function loadTasks() {
	const itemsStored = JSON.parse(localStorage.getItem('task')) || []
	itemsStored.forEach((item) => {
		createTaskElement(item)
	})
}

// Create a task element (refactored into separate function)
function createTaskElement(item) {
	const taskItem = document.createElement('li')
	taskItem.className = `task-item ${
		item.itemStatus === 'completed' ? 'completed' : 'pending'
	}`
	taskItem.id = item.id // Using instead of ID

	const taskSpan = document.createElement('span')
	taskSpan.textContent = item.taskText

	const deleteBtn = document.createElement('button')
	deleteBtn.className = 'delete-btn'
	deleteBtn.textContent = 'Delete'

	taskItem.appendChild(taskSpan)
	taskItem.appendChild(deleteBtn)
	taskList.appendChild(taskItem)
}

// Event delegation for clicks (more efficient)
taskList.addEventListener('click', (e) => {
	const taskItem = e.target.closest('.task-item')
	if (!taskItem) return

	// Handle delete button click
	if (e.target.classList.contains('delete-btn')) {
		const taskId = taskItem.id
		const currentTasks = JSON.parse(localStorage.getItem('task')) || []
		const updatedTasks = currentTasks.filter((task) => task.id !== taskId)
		localStorage.setItem('task', JSON.stringify(updatedTasks))
		taskItem.remove()
	}
	// Handle task completion toggle
	else {
		taskItem.classList.toggle('completed')
		const taskId = taskItem.id
		const currentTasks = JSON.parse(localStorage.getItem('task')) || []
		const updatedTasks = currentTasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					itemStatus: hasClass(taskItem, 'completed') ? 'completed' : 'pending',
				}
			}
			return task
		})
		localStorage.setItem('task', JSON.stringify(updatedTasks))
	}
})

// Add new task
function addTask() {
	const taskText = taskInput.value.trim()
	if (taskText === '') return

	const id = uuidv4()
	const newTask = {
		taskText,
		itemStatus: 'pending',
		id: id,
	}

	// Update localStorage
	const currentTasks = JSON.parse(localStorage.getItem('task')) || []
	currentTasks.push(newTask)
	localStorage.setItem('task', JSON.stringify(currentTasks))

	// Create and add the element
	createTaskElement(newTask)
	taskInput.value = ''
}

// Event listeners
addTaskBtn.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') addTask()
})

// Initialize
const windowLoad = () => {
	console.log('🚀 ~ windowLoad ~ windowLoad:', windowLoad)
	loadTasks()
}
