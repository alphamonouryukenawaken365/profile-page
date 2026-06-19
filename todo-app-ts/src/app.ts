// ===== TYPES =====
interface Todo {
  id: string
  text: string
  done: boolean
}

type Filter = "all" | "active" | "done"

// ===== STATE =====
let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')
let currentFilter: Filter = 'all'

// ===== SELECTORS (with null checks — TypeScript forces this!) =====
const input = document.querySelector<HTMLInputElement>('#todo-input')
const addBtn = document.querySelector<HTMLButtonElement>('#add-btn')
const todoList = document.querySelector<HTMLUListElement>('#todo-list')
const countEl = document.querySelector<HTMLSpanElement>('#count')
const clearBtn = document.querySelector<HTMLButtonElement>('#clear-btn')
const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn')

// ===== SAVE TO LOCALSTORAGE =====
const saveTodos = (): void => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// ===== RENDER =====
const render = (): void => {
  if (!todoList || !countEl) return

  const filtered: Todo[] = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.done
    if (currentFilter === 'done') return todo.done
    return true
  })

  const activeCount: number = todos.filter(t => !t.done).length
  countEl.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} left`

  if (filtered.length === 0) {
    todoList.innerHTML = '<p class="empty">No tasks here!</p>'
    return
  }

  todoList.innerHTML = filtered.map((todo) => `
    <li class="todo-item" data-id="${todo.id}">
      <input type="checkbox" ${todo.done ? 'checked' : ''} data-action="toggle" data-id="${todo.id}">
      <span class="todo-text ${todo.done ? 'done' : ''}">${todo.text}</span>
      <button class="delete-btn" data-action="delete" data-id="${todo.id}">×</button>
    </li>
  `).join('')
}

// ===== ADD TODO =====
const addTodo = (): void => {
  if (!input) return

  const text: string = input.value.trim()
  if (!text) return

  const newTodo: Todo = {
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
const toggleTodo = (id: string): void => {
  todos = todos.map((todo): Todo => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done }
    }
    return todo
  })
  saveTodos()
  render()
}

// ===== DELETE TODO =====
const deleteTodo = (id: string): void => {
  todos = todos.filter((todo) => todo.id !== id)
  saveTodos()
  render()
}

// ===== CLEAR COMPLETED =====
const clearCompleted = (): void => {
  todos = todos.filter((todo) => !todo.done)
  saveTodos()
  render()
}

// ===== EVENT LISTENERS =====
addBtn?.addEventListener('click', addTodo)

input?.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') addTodo()
})

clearBtn?.addEventListener('click', clearCompleted)

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter as Filter
    currentFilter = filter
    filterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    render()
  })
})

// event delegation for dynamically created checkboxes and delete buttons
todoList?.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const action = target.dataset.action
  const id = target.dataset.id

  if (!action || !id) return

  if (action === 'delete') deleteTodo(id)
})

todoList?.addEventListener('change', (e: Event) => {
  const target = e.target as HTMLInputElement
  const action = target.dataset.action
  const id = target.dataset.id

  if (action === 'toggle' && id) toggleTodo(id)
})

// ===== INIT =====
render()