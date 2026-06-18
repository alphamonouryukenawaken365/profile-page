// ===== BASIC TYPES =====
let myName: string = "Andre Wijaya"
let myAge: number = 20
let isAvailable: boolean = true

console.log(myName)
console.log(myAge)
console.log(isAvailable)

// ===== ARRAYS WITH TYPES =====
let skills: string[] = ["HTML", "CSS", "JavaScript", "React", "Next.JS"]
let scores: number[] = [90, 85, 95]

console.log(skills)
console.log(scores)

// ===== TRY TO BREAK IT (uncomment to see the error) =====
// let wrongType: string = 123  // ERROR: number is not assignable to string
// skills.push(123)             // ERROR: number is not assignable to string[]

// ===== FUNCTIONS WITH TYPES =====
const greet = (name: string): string => {
  return `Hello, my name is ${name}`
}

console.log(greet(myName))
// console.log(greet(123))  // ERROR if uncommented: number is not assignable to string

const addNumbers = (a: number, b: number): number => {
  return a + b
}

console.log(addNumbers(5, 10))

// ===== UNION TYPES =====
// A variable that can be MORE than one type
let id: string | number = 101
console.log(id)

id = "USER-101"  // also valid
console.log(id)

// ===== TYPE ALIASES =====
// Create your own custom type name
type Status = "active" | "inactive" | "pending"

let currentStatus: Status = "active"
console.log(currentStatus)

// currentStatus = "deleted"  // ERROR if uncommented: not one of the allowed values

// ===== USING TYPE ALIAS IN A FUNCTION =====
const getStatusMessage = (status: Status): string => {
  if (status === "active") return "User is active"
  if (status === "inactive") return "User is inactive"
  return "User status is pending"
}

console.log(getStatusMessage(currentStatus))