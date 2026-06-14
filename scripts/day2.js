// ===== DOM MANIPULATION =====

// 1 - find the button we will create
const toggleBtn = document.querySelector('#dark-toggle')

// 2 - find the body
const body = document.querySelector('body')

// 3 - listen for click
toggleBtn.addEventListener('click', () => {
    // toggle dark class on body
    body.classList.toggle('dark-mode')

    // change button text 
    if (body.classList.contains('dark-mode')) {toggleBtn.textContent = 'Light Mode'} 
    else { toggleBtn.textContent = 'Dark Mode'} } )

    // ===== DYNAMIC RENDERING =====

    // 4 - find the skills list in HTML 
    const skillsList = document.querySelector('#skills ul')

    // 5 - define skills as data 
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.JS']

    // 6 - clear existing skills and render from JavaScript
    skillsList.innerHTML = ''

    skills.forEach((skill) => {
        const li = document.createElement('li')
        li.textContent = skill
        skillsList.appendChild(li)
    })

    console.log('Skills rendered from JavaScript!')
