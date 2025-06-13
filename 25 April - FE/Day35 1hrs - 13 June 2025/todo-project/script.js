const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}
function loadTasks() {
	const itemsStored = JSON.parse(localStorage.getItem('task'))
	// display the tasks in the taskList
	if (itemsStored) {
		itemsStored.forEach((item) => {
			const taskItem = document.createElement('li')
			taskItem.className = 'task-item'
			if (item.itemStatus === 'completed') {
				taskItem.classList.add('completed')
			}

			const taskSpan = document.createElement('span')
			taskSpan.textContent = item.taskText
			const deleteBtn = document.createElement('button')
			deleteBtn.className = 'delete-btn'
			deleteBtn.textContent = 'Delete'
			deleteBtn.addEventListener('click', () => {
				taskItem.remove()
				// remove the item from localStorage
				const currentTasks = JSON.parse(localStorage.getItem('task'))
				const updatedTasks = currentTasks.filter(
					(task) => task.taskText !== item.taskText
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
	const taskText = taskInput.value.trim()
	if (taskText === '') return

	const taskItem = document.createElement('li')
	taskItem.className = 'task-item'

	const taskSpan = document.createElement('span')
	taskSpan.textContent = taskText
	const deleteBtn = document.createElement('button')
	deleteBtn.className = 'delete-btn'
	deleteBtn.textContent = 'Delete'
	deleteBtn.addEventListener('click', () => {
		taskItem.remove()
		// remove the item from localStorage
		const currentTasks = JSON.parse(localStorage.getItem('task'))
		const updatedTasks = currentTasks.filter(
			(task) => task.taskText !== item.taskText
		)
		localStorage.setItem('task', JSON.stringify(updatedTasks))
	})

	taskItem.appendChild(taskSpan)
	taskItem.appendChild(deleteBtn)

	taskItem.addEventListener('click', () => {
		taskItem.classList.toggle('completed')
		let isCompleted = hasClass(taskItem, 'completed')

		const currentTasks = JSON.parse(localStorage.getItem('task'))
		const updateList = [
			...currentTasks.filter((task) => task.taskText !== taskText),
			{
				taskText: taskText,
				itemStatus: isCompleted ? 'completed' : 'pending',
			},
		]
		localStorage.setItem('task', JSON.stringify(updateList))
	})

	const taskItemToStore = { taskText, itemStatus: 'pending' }
	const getCurrentTasks = localStorage.getItem('task')
	if (getCurrentTasks) {
		const currentTasks = JSON.parse(getCurrentTasks)
		currentTasks.push(taskItemToStore)
		localStorage.setItem('task', JSON.stringify(currentTasks))
	} else {
		localStorage.setItem('task', JSON.stringify([taskItemToStore]))
	}
	taskList.appendChild(taskItem)
	taskInput.value = ''
}
