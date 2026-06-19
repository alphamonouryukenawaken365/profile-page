"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const andre = {
    name: "Andre Wijaya",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    isAvailable: true
};
console.log(andre);
const project1 = {
    title: "Profile Page",
    description: "My first HTML/CSS/JS project"
    // no liveUrl or githubUrl needed since they're optional
};
const project2 = {
    title: "Todo App",
    description: "A todo app with localStorage",
    githubUrl: "https://github.com/alphamonouryukenawaken365/profile-page"
};
console.log(project1);
console.log(project2);
const profile = {
    name: "Andre Wijaya",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    social: {
        github: "alphamonouryukenawaken365",
        email: "alphamonouryukenawaken365@gmail.com"
    }
};
console.log(profile.social.github);
const config = {
    apiKey: "abc123",
    timeout: 5000
};
config.timeout = 3000; // allowed, not readonly
// config.apiKey = "xyz"  // ERROR if uncommented: cannot reassign readonly property
console.log(config);
// ===== FUNCTION USING INTERFACE =====
const introduce = (dev) => {
    return `${dev.name} is ${dev.age} years old and knows ${dev.skills.join(', ')}`;
};
console.log(introduce(andre));
const mySkills = [
    { name: "HTML", level: "advanced" },
    { name: "CSS", level: "advanced" },
    { name: "JavaScript", level: "intermediate" },
    { name: "TypeScript", level: "beginner" }
];
mySkills.forEach((skill) => {
    console.log(`${skill.name}: ${skill.level}`);
});
//# sourceMappingURL=day2.js.map