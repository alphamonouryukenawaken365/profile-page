// ===== FETCH API =====
// We will fetch YOUR real GitHub profile data

const githubUsername = 'alphamonouryukenawaken365'

const fetchGithubProfile = async () => {
    try {
        // 1 - show loading state
        const card = document.querySelector('#github-card')
        card.innerHTML = '<p>Loading...</p>'

        // 2 - fetch data from GitHub API
        const response = await fetch(`https://api.github.com/users/${githubUsername}`)

        // 3 - check if request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile')
        }

        // 4 - convert response to JSON
        const data = await response.json()

        console.log(data) // see all available data

        // 5 - render the data to the page
        card.innerHTML = `
        <div class= "github-card">
        <img src="${data.avatar_url}" alt="${data.login}" width="80" height="80">
        <div class="github-info">
        <h3>${data.name || data.login}</h3>
        <p>${data.bio || 'No bio yet'}</p>
        <div class="github-stats">
        <span> ${data.public_repos} repos</span>
        <span> ${data.followers} followers</span>
        <span> ${data.following} following</span>
        </div>
        <a href="${data.html_url}" target="_blank">View Github Profile -></a>
    </div>
 </div>
`
        
    } catch (error) {
        // 6 - handle errors gracefully
        console.error('Error:', error)
        document.querySelector('#github-card').innerHTML = `
        <p>Failed to load GitHub profile: ${error.message}</p>
        `
    }
}

// call the function
fetchGithubProfile()