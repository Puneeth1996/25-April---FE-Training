const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

addTaskBtn.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') addTask()
})

function createTodo({ id, itemStatus, taskText }) {
	const taskItem = document.createElement('li')
	taskItem.className = 'task-item'
	taskItem.id = id + '-item'
	taskItem.classList.add('pending')
	if (itemStatus === 'completed') {
		taskItem.classList.add('completed')
	}
	const taskSpan = document.createElement('span')
	taskSpan.textContent = taskText
	const deleteBtn = document.createElement('button')
	deleteBtn.className = 'delete-btn'
	deleteBtn.textContent = 'Delete'
	deleteBtn.id = id + '-del'
	taskItem.appendChild(taskSpan)
	taskItem.appendChild(deleteBtn)
	taskItem.addEventListener('click', (e) => {
		console.log(e.target.id, 'clicked')
		if (e.target.id === deleteBtn.id) {
			console.log('Delete button clicked, not toggling completed state.')
			taskItem.remove()
			const currentTasks = JSON.parse(localStorage.getItem('task'))
			const updatedTasks = currentTasks.filter((task) => {
				if (task.id !== event.target.id.split('-del')[0]) {
					return task
				}
			})
			localStorage.setItem('task', JSON.stringify(updatedTasks))
		}
		taskItem.classList.toggle('completed')
		let isCompleted = hasClass(taskItem, 'completed')
		console.log('🚀 ~ taskItem.addEventListener ~ isCompleted:', isCompleted)
		const currentTasks = JSON.parse(localStorage.getItem('task'))
		const updatedTasks = currentTasks.map((task) => {
			if (task.id === e.target.id.split('-item')[0]) {
				return { ...task, itemStatus: isCompleted ? 'completed' : 'pending' }
			}
			return task
		})
		localStorage.setItem('task', JSON.stringify(updatedTasks))
	})
	taskList.appendChild(taskItem)
}

function addTask() {
	const id = uuidv4()
	const taskText = taskInput.value.trim()
	if (taskText === '') return
	const taskItemToStore = { taskText, itemStatus: 'pending', id: id }
	createTodo(taskItemToStore)
	const getCurrentTasks = localStorage.getItem('task')
	if (getCurrentTasks) {
		const currentTasks = JSON.parse(getCurrentTasks)
		currentTasks.push(taskItemToStore)
		localStorage.setItem('task', JSON.stringify(currentTasks))
	} else {
		localStorage.setItem('task', JSON.stringify([taskItemToStore]))
	}

	taskInput.value = ''
}

function loadTasks() {
	const itemsStored = JSON.parse(localStorage.getItem('task'))
	if (itemsStored) {
		itemsStored.forEach((item) => {
			createTodo(item)
		})
	}
}

const windowLoad = () => {
	loadTasks()
}
