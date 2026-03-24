
// Variables with types
let userName: string = "Frank";
let age: number = 25;
let isNextcollegeStudent: boolean = true;

console.log(userName, age, isNextcollegeStudent);


//Array of favorite foods
let favoriteFoods: string[] = ["Rice", "Akpu", "Abacha", "Nkwobi", "Goat-meat"];

console.log(favoriteFoods);


//Interface
interface Student {
  name: string;
  age: number;
  isActive: boolean;
}

const student1: Student = {
  name: "Frank",
  age: 75,
  isActive: true,
}
const student2: Student = {
  name: "Chisom",
  age: 25,
  isActive: true,
}
    const student3: Student = {
      name: "Victor",
      age: 27,
      isActive: true,
    };
console.log(student1);
console.log(student2);
console.log(student3);


//  Function
function addNumbers(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}

console.log(addNumbers(10, 5));


// Task 5: Enum
// Enums are used to define a set of named constants.
// They help us avoid using random string values and make code cleaner and safer.
// it is used in authentication and authorisation in login system
//
enum nextCollege {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function checkAccess(role: nextCollege): string {
  if (role === nextCollege.Admin) {
    return "Full access granted";
  } else if (role === nextCollege.User) {
    return "Limited access granted";
  } else {
    return "Guest access only";
  }
}

console.log(checkAccess(nextCollege.Admin));
console.log(checkAccess(nextCollege.User));  
console.log(checkAccess(nextCollege.Guest)); 




// Tuple example
let person: [string, number] = ["Frank", 25];

// Union type example
let id: string | number = 101;
id = "A102";

console.log(person, id);
