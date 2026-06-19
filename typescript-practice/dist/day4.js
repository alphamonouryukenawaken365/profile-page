"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== ENUMS =====
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Planning"] = 0] = "Planning";
    ProjectStatus[ProjectStatus["InProgress"] = 1] = "InProgress";
    ProjectStatus[ProjectStatus["Completed"] = 2] = "Completed";
    ProjectStatus[ProjectStatus["Archived"] = 3] = "Archived";
})(ProjectStatus || (ProjectStatus = {}));
const myProjectStatus = ProjectStatus.InProgress;
console.log(myProjectStatus); // 1 (the index)
console.log(ProjectStatus[1]); // InProgress (the name)
// ===== STRING ENUMS (more readable) =====
var SkillLevel;
(function (SkillLevel) {
    SkillLevel["Beginner"] = "BEGINNER";
    SkillLevel["Intermediate"] = "INTERMEDIATE";
    SkillLevel["Advanced"] = "ADVANCED";
})(SkillLevel || (SkillLevel = {}));
const myLevel = SkillLevel.Intermediate;
console.log(myLevel);
// ===== USING ENUM IN A FUNCTION =====
function getStatusLabel(status) {
    switch (status) {
        case ProjectStatus.Planning: return "📋 Planning";
        case ProjectStatus.InProgress: return "🚧 In Progress";
        case ProjectStatus.Completed: return "✅ Completed";
        case ProjectStatus.Archived: return "📦 Archived";
    }
}
console.log(getStatusLabel(ProjectStatus.Completed));
const fullDeveloper = {
    name: "Andre Wijaya",
    age: 20,
    email: "alphamonouryukenawaken365@gmail.com",
    skills: ["HTML", "CSS", "JavaScript"],
    isAvailable: true
};
console.log(fullDeveloper);
const update = {
    age: 21 // only updating age, nothing else required
};
console.log(update);
function updateDeveloper(original, changes) {
    return { ...original, ...changes };
}
const updatedDev = updateDeveloper(fullDeveloper, { age: 21, isAvailable: false });
console.log(updatedDev);
const publicCard = {
    name: "Andre Wijaya",
    skills: ["HTML", "CSS", "JavaScript"]
};
console.log(publicCard);
const safeCard = {
    name: "Andre Wijaya",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    isAvailable: true
    // no email field allowed here
};
console.log(safeCard);
const mySkillLevels = {
    HTML: SkillLevel.Advanced,
    CSS: SkillLevel.Advanced,
    JavaScript: SkillLevel.Intermediate,
    TypeScript: SkillLevel.Beginner
};
console.log(mySkillLevels);
Object.entries(mySkillLevels).forEach(([skill, level]) => {
    console.log(`${skill}: ${level}`);
});
//# sourceMappingURL=day4.js.map