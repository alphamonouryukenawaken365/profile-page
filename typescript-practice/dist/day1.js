"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== BASIC TYPES =====
let myName = "Andre Wijaya";
let myAge = 20;
let isAvailable = true;
console.log(myName);
console.log(myAge);
console.log(isAvailable);
// ===== ARRAYS WITH TYPES =====
let skills = ["HTML", "CSS", "JavaScript", "React", "Next.JS"];
let scores = [90, 85, 95];
console.log(skills);
console.log(scores);
// ===== TRY TO BREAK IT (uncomment to see the error) =====
// let wrongType: string = 123  // ERROR: number is not assignable to string
// skills.push(123)             // ERROR: number is not assignable to string[]
// ===== FUNCTIONS WITH TYPES =====
const greet = (name) => {
    return `Hello, my name is ${name}`;
};
console.log(greet(myName));
// console.log(greet(123))  // ERROR if uncommented: number is not assignable to string
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(5, 10));
// ===== UNION TYPES =====
// A variable that can be MORE than one type
let id = 101;
console.log(id);
id = "USER-101"; // also valid
console.log(id);
let currentStatus = "active";
console.log(currentStatus);
// currentStatus = "deleted"  // ERROR if uncommented: not one of the allowed values
// ===== USING TYPE ALIAS IN A FUNCTION =====
const getStatusMessage = (status) => {
    if (status === "active")
        return "User is active";
    if (status === "inactive")
        return "User is inactive";
    return "User status is pending";
};
console.log(getStatusMessage(currentStatus));
//# sourceMappingURL=day1.js.map