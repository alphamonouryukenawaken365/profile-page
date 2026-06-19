// ===== TYPED FUNCTION PARAMETERS AND RETURN VALUES =====
function add(a: number, b: number): number {
  return a + b
}

console.log(add(5, 10))

// ===== OPTIONAL PARAMETERS =====
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`
  }
  return `Hello, ${name}`
}

console.log(greet("Andre"))
console.log(greet("Andre", "Mr."))

// ===== DEFAULT PARAMETERS =====
function createUser(name: string, role: string = "guest"): string {
  return `${name} is a ${role}`
}

console.log(createUser("Andre"))
console.log(createUser("Andre", "admin"))

// ===== FUNCTION TYPE (the shape of a function) =====
type MathOperation = (a: number, b: number) => number

const multiply: MathOperation = (a, b) => a * b
const subtract: MathOperation = (a, b) => a - b

console.log(multiply(4, 5))
console.log(subtract(10, 3))

// ===== GENERICS — BASICS =====
// acknowledges the array might be empty
function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0]
}

const firstNumber = getFirstItem([10, 20, 30])
const firstSkill = getFirstItem(["HTML", "CSS", "JavaScript"])

console.log(firstNumber)
console.log(firstSkill)

// ===== GENERICS WITH INTERFACES =====
interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
}

interface User {
  id: number
  name: string
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: { id: 1, name: "Andre Wijaya" },
  message: "User fetched successfully"
}

console.log(userResponse.data.name)

const skillsResponse: ApiResponse<string[]> = {
  success: true,
  data: ["HTML", "CSS", "JavaScript"],
  message: "Skills fetched successfully"
}

console.log(skillsResponse.data)

// ===== GENERIC FUNCTION FOR FETCH (the real-world use case) =====
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  const data: T = await response.json()
  return data
}

interface GithubUser {
  login: string
  name: string
  public_repos: number
  followers: number
}

const getGithubProfile = async () => {
  const user = await fetchData<GithubUser>('https://api.github.com/users/alphamonouryukenawaken365')
  console.log(user.name)
  console.log(user.public_repos)
  console.log(user.followers)
}

getGithubProfile()