const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

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
	})

	taskItem.appendChild(taskSpan)
	taskItem.appendChild(deleteBtn)

	taskItem.addEventListener('click', () => {
		taskItem.classList.toggle('completed')
	})

	taskList.appendChild(taskItem)
	taskInput.value = ''
}
