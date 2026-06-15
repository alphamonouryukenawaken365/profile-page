// ===== OBJECTS =====
const developer = {
    name: 'Andre Wijaya',
    age: 20,
    city: 'Soreang, West Java',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.JS'],
    isAvailable: true,
    social: {
        github: 'alphamonouryukenawaken365',
        email: 'alphamonouryukenawaken365@gmail.com'
    }
}

console.log(developer)
console.log(developer.name)
console.log(developer.social.github) // nested object
console.log(developer.skills[2])     // object + array

// ===== DESTRUCTURING =====
// Instead of: developer.name, developer.age
// You can extract them in one line:
const { name, age, city, skills, isAvailable } = developer

console.log(name)
console.log(age)
console.log(isAvailable)

// Array destructuring
const [firstSkill, secondSkill] = skills
console.log(firstSkill)  // HTML
console.log(secondSkill) // CSS

// ===== SPREAD OPERATOR =====
const newSkills = [...skills, 'TypeScript', 'Node.JS']
console.log(newSkills) // adds TypeScript and Node.JS to the array

const updatedDeveloper = {
    ...developer,
    age: 21,                 // override age
    isAvailable: false       // override availability
}
console.log(updatedDeveloper)

// ===== TEMPLATE LITERALS =====
const profileCard = `
  Name: ${name}
  Age: ${age}
  City: ${city}
  Skills: ${skills.join(', ')}
  Available: ${isAvailable ? 'Yes' : 'No'}
  `
  console.log(profileCard)

//   ===== OPTIONAL CHAINING =====
// Safe way to access nested properties that might not exist
console.log(developer.social?.github)     // works
console.log(developer.social?.twitter)    // undefined, no error
console.log(developer.address?.city)      // undefined, no error

// ===== RENDER TO PAGE =====
const profileSection = document.querySelector('#about')

profileSection.innerHTML = `
<h2>About me</h2>
<p>Hi! I am <strong>${name}</strong>, a frontend developer from ${city}.</p>
<p>I am ${age} years old and currently learning ${skills.join(', ')}.</p>
<p>Available for work: <strong>${isAvailable ? 'Yes' : 'No'}</strong></p>
`