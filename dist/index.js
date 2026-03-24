"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables with types
let userName = "Frank";
let age = 25;
let isNextcollegeStudent = true;
console.log(userName, age, isNextcollegeStudent);
//Array of favorite foods
let favoriteFoods = ["Rice", "Akpu", "Abacha", "Nkwobi", "Goat-meat"];
console.log(favoriteFoods);
const student1 = {
    name: "Frank",
    age: 75,
    isActive: true,
};
const student2 = {
    name: "Chisom",
    age: 25,
    isActive: true,
};
const student3 = {
    name: "Victor",
    age: 27,
    isActive: true,
};
console.log(student1);
console.log(student2);
console.log(student3);
//  Function
function addNumbers(a, b, c) {
    return a + b + (c ?? 0);
}
console.log(addNumbers(10, 5));
// Task 5: Enum
// Enums are used to define a set of named constants.
// They help us avoid using random string values and make code cleaner and safer.
// it is used in authentication and authorisation in login system
//
var nextCollege;
(function (nextCollege) {
    nextCollege["Admin"] = "ADMIN";
    nextCollege["User"] = "USER";
    nextCollege["Guest"] = "GUEST";
})(nextCollege || (nextCollege = {}));
function checkAccess(role) {
    if (role === nextCollege.Admin) {
        return "Full access granted";
    }
    else if (role === nextCollege.User) {
        return "Limited access granted";
    }
    else {
        return "Guest access only";
    }
}
console.log(checkAccess(nextCollege.Admin));
console.log(checkAccess(nextCollege.User));
console.log(checkAccess(nextCollege.Guest));
// Tuple example
let person = ["Frank", 25];
// Union type example
let id = 101;
id = "A102";
console.log(person, id);
//# sourceMappingURL=index.js.map