// ===== STATE =====
let todos = JSON.parse(localStorage.getItem('todos')) || []
let currentFilter = 'all'

// ===== SELECTORS =====
const input = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('#todo-list')
const countEl = document.querySelector('#count')
const clearBtn = document.querySelector('#clear-btn')
const filterBtns = document.querySelectorAll('.filter-btn')

// ===== SAVE TO LOCALSTORAGE =====
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// ===== RENDER =====
const render = () => {
  // filter todos based on current filter
  const filtered = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.done
    if (currentFilter === 'done') return todo.done
    return true
  })

  // count active todos
  const activeCount = todos.filter(t => !t.done).length
  countEl.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} left`

  // empty state
  if (filtered.length === 0) {
    todoList.innerHTML = '<p class="empty">No tasks here!</p>'
    return
  }

  // render each todo
  todoList.innerHTML = filtered.map((todo) => `
    <li class="todo-item" data-id="${todo.id}">
      <input type="checkbox" ${todo.done ? 'checked' : ''} onchange="toggleTodo('${todo.id}')">
      <span class="todo-text ${todo.done ? 'done' : ''}">${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo('${todo.id}')">×</button>
    </li>
  `).join('')
}

// ===== ADD TODO =====
const addTodo = () => {
  const text = input.value.trim()
  if (!text) return

  const newTodo = {
    id: Date.now().toString(),
    text: text,
    done: false
  }

  todos.push(newTodo)
  saveTodos()
  render()
  input.value = ''
}

// ===== TOGGLE TODO =====
const toggleTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done }
    }
    return todo
  })
  saveTodos()
  render()
}

// ===== DELETE TODO =====
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id)
  saveTodos()
  render()
}

// ===== CLEAR COMPLETED =====
const clearCompleted = () => {
  todos = todos.filter((todo) => !todo.done)
  saveTodos()
  render()
}

// ===== EVENT LISTENERS =====
addBtn.addEventListener('click', addTodo)

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo()
})

clearBtn.addEventListener('click', clearCompleted)

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter
    filterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    render()
  })
})

// ===== INIT =====
render()