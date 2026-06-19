"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== TYPED FUNCTION PARAMETERS AND RETURN VALUES =====
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
// ===== OPTIONAL PARAMETERS =====
function greet(name, title) {
    if (title) {
        return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
}
console.log(greet("Andre"));
console.log(greet("Andre", "Mr."));
// ===== DEFAULT PARAMETERS =====
function createUser(name, role = "guest") {
    return `${name} is a ${role}`;
}
console.log(createUser("Andre"));
console.log(createUser("Andre", "admin"));
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
console.log(multiply(4, 5));
console.log(subtract(10, 3));
// ===== GENERICS — BASICS =====
// acknowledges the array might be empty
function getFirstItem(arr) {
    return arr[0];
}
const firstNumber = getFirstItem([10, 20, 30]);
const firstSkill = getFirstItem(["HTML", "CSS", "JavaScript"]);
console.log(firstNumber);
console.log(firstSkill);
const userResponse = {
    success: true,
    data: { id: 1, name: "Andre Wijaya" },
    message: "User fetched successfully"
};
console.log(userResponse.data.name);
const skillsResponse = {
    success: true,
    data: ["HTML", "CSS", "JavaScript"],
    message: "Skills fetched successfully"
};
console.log(skillsResponse.data);
// ===== GENERIC FUNCTION FOR FETCH (the real-world use case) =====
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
const getGithubProfile = async () => {
    const user = await fetchData('https://api.github.com/users/alphamonouryukenawaken365');
    console.log(user.name);
    console.log(user.public_repos);
    console.log(user.followers);
};
getGithubProfile();
//# sourceMappingURL=day3.js.map