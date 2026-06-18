// ===== BASIC INTERFACE =====
interface Developer {
  name: string
  age: number
  skills: string[]
  isAvailable: boolean
}

const andre: Developer = {
  name: "Andre Wijaya",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
  isAvailable: true
}

console.log(andre)

// Try removing one property below to see the error (uncomment to test)
// const broken: Developer = {
//   name: "Test",
//   age: 20
// }  // ERROR: missing skills and isAvailable

// ===== OPTIONAL PROPERTIES =====
// Use ? to make a property optional
interface Project {
  title: string
  description: string
  liveUrl?: string  // optional — might not have a live demo yet
  githubUrl?: string
}

const project1: Project = {
  title: "Profile Page",
  description: "My first HTML/CSS/JS project"
  // no liveUrl or githubUrl needed since they're optional
}

const project2: Project = {
  title: "Todo App",
  description: "A todo app with localStorage",
  githubUrl: "https://github.com/alphamonouryukenawaken365/profile-page"
}

console.log(project1)
console.log(project2)

// ===== NESTED INTERFACES =====
interface SocialLinks {
  github: string
  email: string
  linkedin?: string
}

interface DeveloperProfile {
  name: string
  age: number
  skills: string[]
  social: SocialLinks  // interface inside interface
}

const profile: DeveloperProfile = {
  name: "Andre Wijaya",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  social: {
    github: "alphamonouryukenawaken365",
    email: "alphamonouryukenawaken365@gmail.com"
  }
}

console.log(profile.social.github)

// ===== READONLY PROPERTIES =====
interface Config {
  readonly apiKey: string
  timeout: number
}

const config: Config = {
  apiKey: "abc123",
  timeout: 5000
}

config.timeout = 3000  // allowed, not readonly
// config.apiKey = "xyz"  // ERROR if uncommented: cannot reassign readonly property

console.log(config)

// ===== FUNCTION USING INTERFACE =====
const introduce = (dev: Developer): string => {
  return `${dev.name} is ${dev.age} years old and knows ${dev.skills.join(', ')}`
}

console.log(introduce(andre))

// ===== ARRAY OF OBJECTS WITH INTERFACE =====
interface Skill {
  name: string
  level: "beginner" | "intermediate" | "advanced"
}

const mySkills: Skill[] = [
  { name: "HTML", level: "advanced" },
  { name: "CSS", level: "advanced" },
  { name: "JavaScript", level: "intermediate" },
  { name: "TypeScript", level: "beginner" }
]

mySkills.forEach((skill) => {
  console.log(`${skill.name}: ${skill.level}`)
})