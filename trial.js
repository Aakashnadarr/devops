// Variables
let name = "Aakash";
let age = 22;

// Function
function greet(person, age) {
  return `Hello, ${person}! You are ${age} years old.`;
}

// Calling the function
console.log(greet(name, age));

// Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Array
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // add new fruit

console.log("Fruits list:");
for (let fruit of fruits) {
  console.log(fruit);
}
