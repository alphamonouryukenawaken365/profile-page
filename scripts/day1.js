// ====== VARIABLES =====
const myName = "Andre Wijaya"
const myAge = 20
let currentSkill = "HTML"

console.log(myName)
console.log(myAge)
console.log(currentSkill)


// ===== ARRAY =====
const skills = ["HTML", "CSS", "JavaScript", "React", "NextJS"]

console.log(skills)
console.log(skills[0]) /* first item */
console.log(skills.length) /* how many item */

// ===== ARROW FUNCTION =====
const greet = (name) => {return `Hello, my name is ${name}`}

console.log(greet(myName))

// ===== ARRAY METHOD =====

// For each - loop through every item
skills.forEach((skill) => {console.log(`I am learning ${skill}`) } )


// map - transform every item into something new
const skillTags = skills.map((skill) => {return `<li>${skill}</li>`} )

console.log(skillTags)

// filter - keep only items that match a condition
const longSkills = skills.filter((skill) => {return skill.length >= 3})

console.log(longSkills)
