// ===== ENUMS =====
enum ProjectStatus {
  Planning,
  InProgress,
  Completed,
  Archived
}

const myProjectStatus: ProjectStatus = ProjectStatus.InProgress
console.log(myProjectStatus)           // 1 (the index)
console.log(ProjectStatus[1])          // InProgress (the name)

// ===== STRING ENUMS (more readable) =====
enum SkillLevel {
  Beginner = "BEGINNER",
  Intermediate = "INTERMEDIATE",
  Advanced = "ADVANCED"
}

const myLevel: SkillLevel = SkillLevel.Intermediate
console.log(myLevel)

// ===== USING ENUM IN A FUNCTION =====
function getStatusLabel(status: ProjectStatus): string {
  switch (status) {
    case ProjectStatus.Planning: return "📋 Planning"
    case ProjectStatus.InProgress: return "🚧 In Progress"
    case ProjectStatus.Completed: return "✅ Completed"
    case ProjectStatus.Archived: return "📦 Archived"
  }
}

console.log(getStatusLabel(ProjectStatus.Completed))

// ===== BASE INTERFACE FOR UTILITY TYPES =====
interface Developer {
  name: string
  age: number
  email: string
  skills: string[]
  isAvailable: boolean
}

const fullDeveloper: Developer = {
  name: "Andre Wijaya",
  age: 20,
  email: "alphamonouryukenawaken365@gmail.com",
  skills: ["HTML", "CSS", "JavaScript"],
  isAvailable: true
}

console.log(fullDeveloper)

// ===== PARTIAL — all properties become optional =====
// Useful for "update" functions where you only send changed fields
type DeveloperUpdate = Partial<Developer>

const update: DeveloperUpdate = {
  age: 21  // only updating age, nothing else required
}

console.log(update)

function updateDeveloper(original: Developer, changes: Partial<Developer>): Developer {
  return { ...original, ...changes }
}

const updatedDev = updateDeveloper(fullDeveloper, { age: 21, isAvailable: false })
console.log(updatedDev)

// ===== PICK — select only certain properties =====
// Useful for showing limited info, like a public profile card
type PublicProfile = Pick<Developer, "name" | "skills">

const publicCard: PublicProfile = {
  name: "Andre Wijaya",
  skills: ["HTML", "CSS", "JavaScript"]
}

console.log(publicCard)

// ===== OMIT — remove certain properties =====
// Useful for hiding sensitive info, like email
type SafeProfile = Omit<Developer, "email">

const safeCard: SafeProfile = {
  name: "Andre Wijaya",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
  isAvailable: true
  // no email field allowed here
}

console.log(safeCard)

// ===== RECORD — create an object type with specific keys =====
// Useful for mapping skill names to levels
type SkillMap = Record<string, SkillLevel>

const mySkillLevels: SkillMap = {
  HTML: SkillLevel.Advanced,
  CSS: SkillLevel.Advanced,
  JavaScript: SkillLevel.Intermediate,
  TypeScript: SkillLevel.Beginner
}

console.log(mySkillLevels)

Object.entries(mySkillLevels).forEach(([skill, level]) => {
  console.log(`${skill}: ${level}`)
})